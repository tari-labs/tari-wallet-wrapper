import sqlite3 from 'sqlite3';
import Long from 'long';
import { initializeDB } from './database';
import {
    GetTransactionInfoRequest,
    GetTransactionInfoResponse,
    TransactionInfo,
    TransactionStatus,
    transactionStatusToJSON,
    TransactionDirection,
    transactionDirectionToJSON,
    GetStateResponse, // For getState
    // GetBlockHeightTransactionsResponse is implicitly used by the client method
} from '@krakaw/wallet-interface/build/esm/client/wallet';
import { config } from './config'; // Import config
import { TariWalletGrpcClient } from '@krakaw/wallet-interface/build/esm/TariWalletGrpcClient';

// --- Configuration (now from config.ts) ---
// const TARI_WALLET_GRPC_ADDRESS = 'http://localhost:18143'; // Replaced by config
// const CONFIRMATION_DEPTH = 10; // Replaced by config
// const CHECK_INTERVAL_MS = 5 * 60 * 1000; // Replaced by config
const DEPOSIT_CONFIRMED_STATUS = transactionStatusToJSON(TransactionStatus.TRANSACTION_STATUS_MINED_CONFIRMED);
const REORG_STATUS = 'REORG_DETECTED'; // New status for re-orged transactions

// --- Globals ---
let db: sqlite3.Database;
let walletClient: TariWalletGrpcClient;

interface LocalTransaction {
    transaction_id: string;
    user_id: string;
    wallet_transaction_id: string;
    amount: number;
    type: 'deposit' | 'withdrawal';
    confirmation_block_height: number;
}

async function checkReorgs() {
    console.log('[Reorg Monitor] Starting re-org check cycle...');
    try {
        // 1. Get Current Wallet Scanned Height
        const stateResponse: GetStateResponse = await walletClient.getState();
        if (!stateResponse.scannedHeight) {
            console.error('[Reorg Monitor] Could not get scannedHeight from wallet state.');
            return;
        }
        const currentScannedHeight = stateResponse.scannedHeight.toNumber();
        console.log(`[Reorg Monitor] Current wallet scanned height: ${currentScannedHeight}`);

        // Use reorgConfirmationDepth from config
        const startBlockHeight = Math.max(0, currentScannedHeight - config.reorgConfirmationDepth);

        // 2. Fetch Wallet Transactions in Confirmation Range
        const walletTransactionsByBlock = new Map<number, Set<string>>(); // blockHeight -> Set<wallet_transaction_id>

        for (let height = startBlockHeight; height <= currentScannedHeight; height++) {
            try {
                const blockTransactionsResponse = await walletClient.getBlockHeightTransactions({
                    blockHeight: Long.fromNumber(height)
                });
                const txIdsInBlock = new Set<string>();
                if (blockTransactionsResponse.transactions) {
                    for (const txInfo of blockTransactionsResponse.transactions) {
                        if (txInfo.txId) {
                            txIdsInBlock.add(txInfo.txId.toString());
                        }
                    }
                }
                walletTransactionsByBlock.set(height, txIdsInBlock);
                // console.log(`[Reorg Monitor] Fetched ${txIdsInBlock.size} transactions from wallet for block ${height}`);
            } catch (err) {
                console.error(`[Reorg Monitor] Error fetching transactions for block ${height} from wallet:`, err);
            }
        }

        // 3. Fetch Recent Confirmed Transactions from Local DB
        const query = `
            SELECT transaction_id, user_id, wallet_transaction_id, amount, type, confirmation_block_height
            FROM transactions
            WHERE status = ? AND confirmation_block_height >= ? AND confirmation_block_height <= ?
        `;
        const localConfirmedTransactions: LocalTransaction[] = await new Promise((resolve, reject) => {
            db.all(query, [DEPOSIT_CONFIRMED_STATUS, startBlockHeight, currentScannedHeight], (err, rows) => {
                if (err) return reject(err);
                resolve(rows as LocalTransaction[]);
            });
        });

        if (localConfirmedTransactions.length > 0) {
            console.log(`[Reorg Monitor] Found ${localConfirmedTransactions.length} local confirmed transactions in range ${startBlockHeight}-${currentScannedHeight} to check.`);
        }


        // 4. Compare and Update
        for (const localTx of localConfirmedTransactions) {
            const walletTxIdsForBlock = walletTransactionsByBlock.get(localTx.confirmation_block_height);

            if (!walletTxIdsForBlock || !walletTxIdsForBlock.has(localTx.wallet_transaction_id)) {
                // Transaction is NOT present in the wallet's view of that block
                console.warn(`[Reorg Monitor] Potential re-org detected! Local tx ${localTx.transaction_id} (WalletTxID: ${localTx.wallet_transaction_id}, Block: ${localTx.confirmation_block_height}) not found in wallet's view of block.`);

                if (localTx.type === 'deposit') {
                    console.log(`[Reorg Monitor] Processing re-org for DEPOSIT transaction ${localTx.transaction_id} for user ${localTx.user_id}. Amount: ${localTx.amount}`);
                    try {
                        await new Promise<void>((resolve, reject) => {
                            db.serialize(() => {
                                db.run("BEGIN TRANSACTION;", (errBegin) => {
                                    if (errBegin) return reject(new Error(`Begin transaction failed for re-org: ${errBegin.message}`));
                                });

                                const updateTxSql = `UPDATE transactions SET status = ?, confirmation_block_height = NULL WHERE transaction_id = ?`;
                                db.run(updateTxSql, [REORG_STATUS, localTx.transaction_id], function(errUpdateTx) {
                                    if (errUpdateTx) {
                                        db.run("ROLLBACK;", () => reject(new Error(`Update transaction status for re-org failed: ${errUpdateTx.message}`)));
                                        return;
                                    }
                                    if (this.changes === 0) {
                                        db.run("ROLLBACK;", () => reject(new Error(`Transaction ${localTx.transaction_id} not found for re-org status update.`)));
                                        return;
                                    }

                                    const updateUserSql = `UPDATE users SET balance = balance - ? WHERE user_id = ?`;
                                    db.run(updateUserSql, [localTx.amount, localTx.user_id], function(errUpdateUser) {
                                        if (errUpdateUser) {
                                            db.run("ROLLBACK;", () => reject(new Error(`Update user balance for re-org failed: ${errUpdateUser.message}`)));
                                            return;
                                        }
                                        if (this.changes === 0) {
                                            // This is serious, means balance was not updated, potentially leading to inconsistency
                                            console.error(`[Reorg Monitor] CRITICAL: User ${localTx.user_id} not found or balance not updated during re-org processing for tx ${localTx.transaction_id}.`);
                                            db.run("ROLLBACK;", () => reject(new Error(`User ${localTx.user_id} not found for re-org balance update.`)));
                                            return;
                                        }

                                        db.run("COMMIT;", (errCommit) => {
                                            if (errCommit) return reject(new Error(`Commit transaction for re-org failed: ${errCommit.message}`));
                                            console.log(`[Reorg Monitor] Successfully processed re-org for deposit ${localTx.transaction_id}. User ${localTx.user_id} balance decreased by ${localTx.amount}. Status set to ${REORG_STATUS}.`);
                                            resolve();
                                        });
                                    });
                                });
                            });
                        });
                    } catch (dbError: any) {
                        console.error(`[Reorg Monitor] Database error processing re-org for deposit ${localTx.transaction_id}:`, dbError.message);
                    }
                } else if (localTx.type === 'withdrawal') {
                    // For withdrawals, as per requirements, just log a warning.
                    // Handling withdrawal re-orgs (funds returning to exchange wallet) is complex.
                    // It might involve checking overall wallet balance or specific events for reverted/cancelled withdrawals.
                    console.warn(`[Reorg Monitor] Withdrawal transaction ${localTx.transaction_id} (WalletTxID: ${localTx.wallet_transaction_id}, User: ${localTx.user_id}) was not found in wallet block ${localTx.confirmation_block_height}. This might indicate a re-org. Manual investigation may be needed.`);
                }
            }
        }
        console.log('[Reorg Monitor] Re-org check cycle finished.');
    } catch (error) {
        console.error('[Reorg Monitor] Error during checkReorgs cycle:', error);
    }
}

async function main() {
    try {
        console.log('[Reorg Monitor] Initializing...');
        // Use tariWalletGrpcAddress from config
        walletClient = new TariWalletGrpcClient(config.tariWalletGrpcAddress);
        db = await initializeDB();
        console.log('[Reorg Monitor] Database and Wallet Client initialized.');

        // Run once immediately, then set interval
        await checkReorgs();
        // Use reorgCheckIntervalMs from config
        setInterval(() => {
            checkReorgs().catch(err => {
                // Catch errors from the async checkReorgs to prevent unhandled promise rejections
                console.error("[Reorg Monitor] Unhandled error in checkReorgs scheduled execution:", err);
            });
        }, config.reorgCheckIntervalMs);

        console.log(`[Reorg Monitor] Started. Checking every ${config.reorgCheckIntervalMs / 1000 / 60} minutes.`);

    } catch (error) {
        console.error(`[Reorg Monitor] Failed to start using wallet address ${config.tariWalletGrpcAddress}:`, error);
        process.exit(1);
    }
}

main().catch(error => {
    console.error('[Reorg Monitor] Critical error in main execution:', error);
    process.exit(1);
});

// Keep Node.js process alive (useful if only async operations are running, though setInterval should handle it)
// process.stdin.resume();
// This is often not needed if there's an active interval timer.
// The gRPC client or setInterval should keep it alive.
// Consider graceful shutdown if needed.
// process.on('SIGINT', async () => {
// console.log('[Reorg Monitor] Shutting down...');
// if (db) await new Promise(resolve => db.close(resolve));
// clearInterval(timerId); // Need to store timerId from setInterval
// process.exit(0);
// });
