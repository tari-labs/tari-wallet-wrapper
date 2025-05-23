import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.resolve(__dirname, '..', 'exchange.db');

export function initializeDB(): Promise<sqlite3.Database> {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error('Error connecting to database:', err.message);
        return reject(err);
      }
      console.log('Connected to the SQLite database.');

      db.serialize(() => {
        // Create users table
        db.run(`
          CREATE TABLE IF NOT EXISTS users (
            user_id TEXT PRIMARY KEY,
            deposit_address TEXT NOT NULL UNIQUE,
            withdrawal_address TEXT,
            balance REAL DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
          )
        `, (err) => {
          if (err) {
            console.error('Error creating users table:', err.message);
            return reject(err);
          }
          console.log('Users table created or already exists.');
        });

        // Create transactions table
        db.run(`
          CREATE TABLE IF NOT EXISTS transactions (
            transaction_id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            wallet_transaction_id TEXT UNIQUE,
            amount REAL NOT NULL,
            type TEXT NOT NULL CHECK(type IN ('deposit', 'withdrawal')),
            status TEXT NOT NULL,
            payment_id TEXT,
            address TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            confirmation_block_height INTEGER,
            FOREIGN KEY (user_id) REFERENCES users(user_id)
          )
        `, (err) => {
          if (err) {
            console.error('Error creating transactions table:', err.message);
            return reject(err);
          }
          console.log('Transactions table created or already exists.');
          resolve(db);
        });
      });
    });
  });
}

// Example of how to get the db instance.
// initializeDB().then(db => {
//   // Use the db instance for operations
//   // Remember to close the database when done, if applicable, or keep it open for the app's lifecycle
// }).catch(error => {
//   console.error("Failed to initialize the database:", error);
// });
