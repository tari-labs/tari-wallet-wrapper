import sqlite3 from 'sqlite3';
import crypto from 'crypto';
import { initializeDB } from './database';
// Path to tari-bor types might need adjustment based on the final project structure
import { 
    GetTransactionInfoRequest,
    GetTransactionInfoResponse,
    TransactionInfo,
    TransactionStatus
} from '@krakaw/wallet-interface/build/esm/client/wallet';
import Long from 'long'; // tari-bor uses Long for amounts
import { config } from './config'; // Import config
import { TariWalletGrpcClient } from '@krakaw/wallet-interface/build/esm/TariWalletGrpcClient';

// const TARI_WALLET_GRPC_ADDRESS = 'http://localhost:18143'; // Replaced by config
const PAYMENT_ID_ENCODING: BufferEncoding = 'utf-8'; 

let db: sqlite3.Database;
let walletClient: TariWalletGrpcClient;

async function startWalletListener() {
    try {
        // Use tariWalletGrpcAddress from config
        walletClient = new TariWalletGrpcClient(config.tariWalletGrpcAddress);
        console.log(`Wallet listener attempting to connect to Tari Wallet gRPC at ${config.tariWalletGrpcAddress}...`);
    } catch (error) {
        console.error(`Failed to initialize Tari Wallet Client for listener at ${config.tariWalletGrpcAddress}:`, error);
        process.exit(1);
    }

    console.log('Wallet listener initialized. Waiting for database...');
    db = await initializeDB();
    console.log('Database initialized for wallet listener.');

    console.log(`Starting Tari Wallet transaction event listener on ${config.tariWalletGrpcAddress}...`);

    const stream = await walletClient.streamTransactionEvents(); 

    stream.on('data', async (eventResponse: GetTransactionInfoResponse) => {
        console.log('[Wallet Event Received]:', JSON.stringify(eventResponse, (key, value) => {
            // Custom replacer to handle Uint8Array and Long for better logging
            if (value && value.type === 'Buffer' && Array.isArray(value.data)) {
                return Buffer.from(value.data).toString('hex'); // Log Buffers (like paymentId) as hex
            }
            if (Long.isLong(value)) {
                return value.toString(); // Log Longs as strings
            }
            return value;
        }, 2));

        const transaction = eventResponse.transaction;

        if (!transaction) {
            console.warn('[Wallet Event] Received event response without a transaction object. Skipping.', eventResponse);
            return;
        }

        // Check status and direction
        const isMinedConfirmed = transaction.status === TransactionStatus.TRANSACTION_STATUS_MINED_CONFIRMED;
        const isInbound = transaction.direction === TransactionDirection.TRANSACTION_DIRECTION_INBOUND;

        if (isMinedConfirmed && isInbound) {
            const paymentIdBytes = transaction.paymentId; // This is Uint8Array
            const walletTransactionId = transaction.txId; // This is string
            const amountLong = transaction.amount; // This is Long
            // sourceAddress is available as transaction.sourceAddress (Uint8Array)
            // destAddress is available as transaction.destAddress (Uint8Array)
            // TransactionEvent does not have minedInBlockHeight directly.
            const confirmationBlockHeight = null; // Set to null as per current type definition

            if (!paymentIdBytes || !walletTransactionId || amountLong == null) {
                console.warn('[Wallet Event] Received completed inbound transaction without essential data (paymentId, txId, or amount). Skipping.', transaction);
                return;
            }
            
            const paymentId = Buffer.from(paymentIdBytes).toString(PAYMENT_ID_ENCODING);
            const depositAmount = amountLong.toNumber();

            if (depositAmount <= 0) {
                console.warn(`[Wallet Event] Received transaction with non-positive amount (${depositAmount}) for payment_id: ${paymentId}. Skipping.`);
                return;
            }

            console.log(`[Wallet Event] Processing inbound confirmed transaction for payment_id: ${paymentId}, Wallet TxID: ${walletTransactionId}, Amount: ${depositAmount}`);

            try {
                const user = await new Promise<any>((resolve, reject) => {
                    db.get("SELECT user_id, balance FROM users WHERE user_id = ?", [paymentId], (err, row) => {
                        if (err) return reject(err);
                        resolve(row);
                    });
                });

                if (user) {
                    const localTransactionId = crypto.randomUUID();
                    
                    await new Promise<void>((resolve, reject) => {
                        db.serialize(() => {
                            db.run("BEGIN TRANSACTION;", (errBegin) => {
                                if (errBegin) return reject(new Error(`Begin transaction failed: ${errBegin.message}`));
                            });

                            const insertTxSql = `
                                INSERT INTO transactions 
                                (transaction_id, user_id, wallet_transaction_id, amount, type, status, payment_id, address, confirmation_block_height, created_at, updated_at)
                                VALUES (?, ?, ?, ?, 'deposit', ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
                            `;
                            // Using transaction.status (string) for the status column
                            db.run(insertTxSql, [
                                localTransactionId, 
                                user.user_id, 
                                walletTransactionId, 
                                depositAmount, 
                                transaction.status, 
                                paymentId, 
                                transaction.sourceAddress ? Buffer.from(transaction.sourceAddress).toString('hex') : null, // Store source address as hex
                                confirmationBlockHeight // This will be null
                            ], function(errInsert) {
                                if (errInsert) {
                                    db.run("ROLLBACK;", () => reject(new Error(`Insert transaction failed: ${errInsert.message}`)));
                                    return;
                                }

                                const updateUserSql = `UPDATE users SET balance = balance + ? WHERE user_id = ?`;
                                db.run(updateUserSql, [depositAmount, user.user_id], function(errUpdate) {
                                    if (errUpdate) {
                                        db.run("ROLLBACK;", () => reject(new Error(`Update user balance failed: ${errUpdate.message}`)));
                                        return;
                                    }
                                    if (this.changes === 0) {
                                        db.run("ROLLBACK;", () => reject(new Error(`User ${user.user_id} not found for balance update or balance unchanged.`)));
                                        return;
                                    }
                                    db.run("COMMIT;", (errCommit) => {
                                        if (errCommit) return reject(new Error(`Commit transaction failed: ${errCommit.message}`));
                                        console.log(`[Deposit Processed] User: ${user.user_id}, Amount: ${depositAmount}, Wallet TxID: ${walletTransactionId}`);
                                        resolve();
                                    });
                                });
                            });
                        });
                    });
                } else {
                    console.log(`[Wallet Event] User not found for payment_id: ${paymentId}. Transaction from wallet tx_id: ${walletTransactionId} not processed for any user.`);
                }
            } catch (dbError: any) {
                console.error(`[Wallet Event] Database error processing transaction for payment_id ${paymentId}:`, dbError.message);
            }
        } else {
            // Log if it's not an inbound confirmed transaction, for debugging purposes
            // console.log(`[Wallet Event] Skipping event: Not an inbound confirmed transaction. Status: ${transaction.status}, Direction: ${transaction.direction}`, transaction);
        }
    });

    stream.on('error', (err: Error) => {
        console.error('[Wallet Event Stream Error]:', err);
        // TODO: Implement reconnection logic if desired
        // For now, just log. Consider if process should exit or retry.
    });

    stream.on('end', () => {
        console.log('[Wallet Event Stream Ended]. Attempting to reconnect...');
        // TODO: Implement reconnection logic
        // setTimeout(startWalletListener, 5000); // Simple reconnect delay
    });

    // Keep the script running
    console.log('Wallet listener setup complete. Actively listening for transactions.');
}

// Start the listener process
startWalletListener().catch(error => {
    console.error("Failed to start wallet listener:", error);
    process.exit(1);
});

// Keep Node.js process alive (useful if only async operations are running)
// process.stdin.resume(); // Or use a more robust keep-alive mechanism
// This is often not needed if there's an active stream or server.
// The gRPC stream should keep it alive.

// Graceful shutdown (optional)
// process.on('SIGINT', () => {
//     console.log('Shutting down wallet listener...');
//     if (stream) stream.cancel(); // If stream has a cancel method
//     if (db) db.close();
//     process.exit(0);
// });
