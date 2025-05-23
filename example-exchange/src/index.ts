import express, { Request, Response } from 'express';
import crypto from 'crypto';
import { initializeDB } from './database';
import { 
    TariWalletGrpcClient, 
    GetPaymentIdAddressRequest, 
    GetPaymentIdAddressResponse,
    TransferRequest,
    PaymentRecipient,
    // Make sure this enum path is correct based on actual tari-bor structure
    // It might be directly under TariWalletGrpcClient or a sub-module
    PaymentRecipient_PaymentType 
} from 'tari-bor/dist/client/wallet'; // Adjusted path
import Long from 'long';
import sqlite3 from 'sqlite3';
import { config } from './config'; // Import config

// const TARI_WALLET_GRPC_ADDRESS = 'http://localhost:18143'; // Replaced by config
// const DEFAULT_FEE_PER_GRAM = 25; // Replaced by config
// const PORT = process.env.PORT || 3000; // Replaced by config

const app = express();
app.use(express.json());

// Initialize Tari Wallet Client
let walletClient: TariWalletGrpcClient;
try {
    // Use tariWalletGrpcAddress from config
    walletClient = new TariWalletGrpcClient(config.tariWalletGrpcAddress);
} catch (error) {
    console.error(`Failed to initialize Tari Wallet Client at ${config.tariWalletGrpcAddress}:`, error);
    process.exit(1); // Exit if wallet client fails to initialize
}


let db: sqlite3.Database;

// Initialize Database and Start Server
initializeDB()
  .then(databaseInstance => {
    db = databaseInstance;
    console.log('Database initialized successfully.');

    // Define POST /users endpoint
    app.post('/users', async (req: Request, res: Response) => {
      try {
        const userId = crypto.randomUUID();
        const paymentId = Buffer.from(userId); // Convert string userId to Buffer for payment_id

        // Call wallet to get a new deposit address
        const paymentIdAddressResponse: GetPaymentIdAddressResponse = await walletClient.getPaymentIdAddress({ payment_id: paymentId });
        
        // Assuming response.address is a Buffer, convert to hex string for storage/display
        const depositAddress = paymentIdAddressResponse.address.toString('hex'); 

        // Store user in the database
        const insertSql = `INSERT INTO users (user_id, deposit_address) VALUES (?, ?)`;
        
        db.run(insertSql, [userId, depositAddress], function (err) {
          if (err) {
            console.error('Error inserting user into database:', err.message);
            return res.status(500).json({ error: 'Failed to create user.', details: err.message });
          }
          console.log(`User created with ID: ${userId}, Deposit Address: ${depositAddress}`);
          res.status(201).json({ user_id: userId, deposit_address: depositAddress });
        });

      } catch (error: any) {
        console.error('Error creating user:', error);
        // Check if the error is from the gRPC call or other issues
        if (error.message && error.message.includes('gRPC')) {
          res.status(500).json({ error: 'Failed to generate deposit address from Tari wallet.', details: error.message });
        } else {
          res.status(500).json({ error: 'An unexpected error occurred.', details: error.message });
        }
      }
    });

    // Define POST /users/:userId/withdraw endpoint
    app.post('/users/:userId/withdraw', async (req: Request, res: Response) => {
      const { userId } = req.params;
      const { amount, address, fee_per_gram: feePerGram } = req.body;

      // 1. Validate inputs
      if (!amount || typeof amount !== 'number' || amount <= 0) {
        return res.status(400).json({ error: 'Invalid or missing amount. Amount must be a positive number.' });
      }
      if (!address || typeof address !== 'string' || address.trim() === '') {
        return res.status(400).json({ error: 'Invalid or missing destination address.' });
      }
      // Use defaultFeePerGram from config
      const fee = feePerGram && typeof feePerGram === 'number' && feePerGram > 0 ? feePerGram : config.defaultFeePerGram;

      try {
        // 2. Retrieve user and check balance
        const user = await new Promise<any>((resolve, reject) => {
          db.get("SELECT user_id, balance, withdrawal_address FROM users WHERE user_id = ?", [userId], (err, row) => {
            if (err) return reject(err);
            resolve(row);
          });
        });

        if (!user) {
          return res.status(404).json({ error: 'User not found.' });
        }

        const requestedAmountLong = Long.fromNumber(amount);
        const userBalance = user.balance; // Assuming balance is stored as REAL/number

        // Ensure balance is treated as a number for comparison
        if (typeof userBalance !== 'number' || isNaN(userBalance)) {
            console.error(`User ${userId} has invalid balance: ${userBalance}`);
            return res.status(500).json({ error: 'Internal server error: User balance is invalid.'});
        }
        
        if (requestedAmountLong.greaterThan(userBalance)) {
          return res.status(400).json({ error: 'Insufficient funds.' });
        }

        // 3. Construct TransferRequest
        const paymentRecipient: PaymentRecipient = {
          address: address,
          amount: requestedAmountLong,
          feePerGram: Long.fromNumber(fee),
          // Using STANDARD_MIMBLEWIMBLE. Adjust if another type is more appropriate for exchange withdrawals
          paymentType: PaymentRecipient_PaymentType.STANDARD_MIMBLEWIMBLE, 
          rawPaymentId: Buffer.from([]), // Empty or generate if needed for tracking
        };

        const transferRequest: TransferRequest = {
          recipients: [paymentRecipient],
          // Other fields like feePerGram at request level, message, etc., can be set if needed
          // For now, feePerGram is per recipient.
        };

        // 4. Call walletClient.transfer()
        console.log(`Attempting withdrawal for user ${userId} to address ${address} amount ${amount} feePerGram ${fee}`);
        const transferResponse = await walletClient.transfer(transferRequest);
        console.log('Transfer response:', JSON.stringify(transferResponse));

        if (!transferResponse || !transferResponse.results || transferResponse.results.length === 0) {
          console.error('Invalid transfer response from wallet:', transferResponse);
          return res.status(500).json({ error: 'Invalid response from wallet service during transfer.' });
        }

        const transferResult = transferResponse.results[0];

        // 5. Process response
        if (transferResult.isSuccess) {
          const localTransactionId = crypto.randomUUID();
          const walletTransactionId = transferResult.transactionId.toString(); // Assuming transactionId is Long or similar

          // Perform database transaction
          await new Promise<void>((resolve, reject) => {
            db.serialize(() => {
              db.run("BEGIN TRANSACTION;", (errBegin) => {
                if (errBegin) return reject(new Error(`Begin transaction failed: ${errBegin.message}`));
              });

              const updateUserSql = `UPDATE users SET balance = balance - ? WHERE user_id = ?`;
              db.run(updateUserSql, [amount, userId], function (errUpdate) {
                if (errUpdate) {
                  db.run("ROLLBACK;", () => reject(new Error(`Update user balance failed: ${errUpdate.message}`)));
                  return;
                }
                if (this.changes === 0) {
                    db.run("ROLLBACK;", () => reject(new Error(`User ${userId} not found for balance update or balance unchanged.`)));
                    return;
                }

                const insertTxSql = `
                  INSERT INTO transactions 
                  (transaction_id, user_id, wallet_transaction_id, amount, type, status, address, created_at, updated_at)
                  VALUES (?, ?, ?, ?, 'withdrawal', 'completed', ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
                `;
                // 'completed' status assumes transfer() only returns after successful broadcast.
                // If it's asynchronous, a 'pending' status and update via walletListener might be needed.
                db.run(insertTxSql, [
                  localTransactionId,
                  userId,
                  walletTransactionId,
                  amount, // Store as positive, 'type' indicates withdrawal
                  address,
                ], function (errInsert) {
                  if (errInsert) {
                    db.run("ROLLBACK;", () => reject(new Error(`Insert withdrawal transaction failed: ${errInsert.message}`)));
                    return;
                  }
                  db.run("COMMIT;", (errCommit) => {
                    if (errCommit) return reject(new Error(`Commit transaction failed: ${errCommit.message}`));
                    console.log(`Withdrawal successful for user ${userId}. Local TxID: ${localTransactionId}, Wallet TxID: ${walletTransactionId}`);
                    resolve();
                  });
                });
              });
            });
          });

          res.status(200).json({ 
            message: 'Withdrawal successful.', 
            transaction_id: localTransactionId, 
            wallet_transaction_id: walletTransactionId 
          });

        } else {
          console.error(`Withdrawal failed for user ${userId}: ${transferResult.failureMessage}`);
          res.status(400).json({ error: 'Withdrawal failed by wallet.', details: transferResult.failureMessage });
        }

      } catch (error: any) {
        console.error('Error processing withdrawal request:', error);
        if (error.message && (error.message.includes('gRPC') || error.message.includes('walletClient'))) {
          res.status(500).json({ error: 'Failed to communicate with Tari wallet service.', details: error.message });
        } else if (error.message && error.message.startsWith('Begin transaction failed') || error.message.startsWith('Update user balance failed') || error.message.startsWith('Insert withdrawal transaction failed') || error.message.startsWith('Commit transaction failed')) {
           res.status(500).json({ error: 'Database error during withdrawal processing.', details: error.message });
        }
        else {
          res.status(500).json({ error: 'An unexpected error occurred during withdrawal.', details: error.message });
        }
      }
    });

    // Define PUT /users/:userId/withdrawal-address endpoint
    app.put('/users/:userId/withdrawal-address', async (req: Request, res: Response) => {
      const { userId } = req.params;
      const { withdrawal_address } = req.body;

      if (!withdrawal_address) {
        return res.status(400).json({ error: 'Withdrawal address is required.' });
      }

      try {
        const updateSql = `UPDATE users SET withdrawal_address = ? WHERE user_id = ?`;
        
        db.run(updateSql, [withdrawal_address, userId], function (err) {
          if (err) {
            console.error('Error updating withdrawal address:', err.message);
            return res.status(500).json({ error: 'Failed to update withdrawal address.', details: err.message });
          }
          
          if (this.changes === 0) {
            return res.status(404).json({ error: 'User not found.' });
          }

          console.log(`Withdrawal address updated for user ID: ${userId}`);
          res.status(200).json({ message: 'Withdrawal address updated successfully.', user_id: userId, withdrawal_address: withdrawal_address });
        });

      } catch (error: any) {
        console.error('Error processing request to update withdrawal address:', error);
        res.status(500).json({ error: 'An unexpected error occurred while updating withdrawal address.', details: error.message });
      }
    });

    // Use expressServerPort from config
    app.listen(config.expressServerPort, () => {
      console.log(`Server is running on http://localhost:${config.expressServerPort}`);
    });

  })
  .catch(error => {
    console.error('Failed to initialize the database. Server not started.', error);
    process.exit(1); // Exit if database initialization fails
  });
