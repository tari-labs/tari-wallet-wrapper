# Tari Example Exchange

## Overview

This project is a simple example demonstrating how to use the `TariWalletGrpcClient` from the `tari-bor` library to build basic exchange functionalities. It showcases core operations such as user creation with unique deposit addresses, monitoring for new deposits, processing withdrawals, and handling potential blockchain re-organizations.

**Core Functionalities:**
*   User creation and deposit address generation.
*   Monitoring of the Tari wallet for incoming transactions (deposits).
*   Processing user-initiated withdrawals.
*   Detecting and handling deposit re-organizations.

**Technologies Used:**
*   Node.js
*   TypeScript
*   Express.js (for the API)
*   SQLite (as the database)
*   `tari-bor` library (for Tari Wallet gRPC communication)

## Prerequisites

*   **Node.js:** v18 or higher recommended.
*   **pnpm:** (Recommended, as `package.json` uses `file:..` for linking `tari-bor`). npm or yarn might also work but pnpm handles local linking efficiently.
*   **Running Tari Wallet:** A Tari Wallet instance must be running with its gRPC interface enabled and accessible at the configured address (default: `http://localhost:18143`).
*   **Running Tari Base Node:** The Tari Wallet should be connected to a running and synced Tari Base Node.

## Setup & Installation

1.  **Navigate to the example directory:**
    If you have cloned the `tari-bor` repository, navigate to the example:
    ```bash
    cd tari-bor/example-exchange 
    ```
    If this example is standalone, clone it first (details would be here).

2.  **Install Dependencies:**
    This command will install the necessary packages and link the local `tari-bor` library from the parent directory.
    ```bash
    pnpm install
    ```
    (Or `npm install` / `yarn install` if you prefer, though pnpm is recommended for the `file:..` dependency).

3.  **Build `tari-bor` (if necessary):**
    The `tari-bor` library (referenced as `file:..`) needs to be built for the `example-exchange` to use it. If it's not already built in the parent `tari-bor` directory:
    ```bash
    cd .. 
    pnpm build 
    cd example-exchange 
    ```
    (This command assumes `pnpm build` is the build script in the `tari-bor` root `package.json`. Adjust if `tari-bor`'s build process differs.)

## Configuration

Application configuration is managed in `src/config.ts`. You can override the default settings using environment variables:

*   `TARI_WALLET_GRPC_ADDRESS`: URL of the Tari Wallet gRPC service (e.g., `http://localhost:18143`).
*   `EXPRESS_SERVER_PORT`: Port for the Express API server (e.g., `3000`).
*   `DATABASE_FILE_PATH`: Absolute or relative path to the SQLite database file (e.g., `exchange.db`).
*   `REORG_CONFIRMATION_DEPTH`: Number of blocks to check for re-orgs (e.g., `10`).
*   `REORG_CHECK_INTERVAL_MS`: How often the re-org monitor checks, in milliseconds (e.g., `300000` for 5 minutes).
*   `DEFAULT_FEE_PER_GRAM`: Default fee in µTari per gram for withdrawals if not specified by the user (e.g., `25`).

Example:
```bash
export EXPRESS_SERVER_PORT=3001
export TARI_WALLET_GRPC_ADDRESS="http://127.0.0.1:18143"
```

## Running the Application

1.  **Build the Example Exchange:**
    This compiles the TypeScript code.
    ```bash
    pnpm build
    ```

2.  **Run the API Server:**
    This starts the Express server for handling API requests.
    ```bash
    pnpm start
    ```
    For development with automatic restarts on file changes:
    ```bash
    pnpm dev
    ```

3.  **Run the Wallet Listener:**
    This service listens for new transactions from the Tari Wallet and processes deposits.
    ```bash
    pnpm start:listener
    ```

4.  **Run the Re-org Monitor:**
    This service monitors for blockchain re-organizations that might affect confirmed deposits.
    ```bash
    pnpm start:reorg-monitor
    ```

    **Note:** It's recommended to run the API server, wallet listener, and re-org monitor in separate terminal sessions.

## API Endpoints

*   **`POST /users`**
    *   **Description:** Creates a new user and generates a unique deposit address linked to that user.
    *   **Request Body:** (None required)
    *   **Response (201 Created):**
        ```json
        {
          "user_id": "c7a5c1f2-a3b4-4c5d-8e6f-0a1b2c3d4e5f",
          "deposit_address": "t<wallet_address_with_payment_id>" 
        }
        ```

*   **`PUT /users/:userId/withdrawal-address`**
    *   **Description:** Sets or updates the primary withdrawal address for a user.
    *   **Request Body:**
        ```json
        {
          "withdrawal_address": "t<user_tari_withdrawal_address>"
        }
        ```
    *   **Response (200 OK):**
        ```json
        {
          "message": "Withdrawal address updated successfully.",
          "user_id": "c7a5c1f2-a3b4-4c5d-8e6f-0a1b2c3d4e5f",
          "withdrawal_address": "t<user_tari_withdrawal_address>"
        }
        ```

*   **`POST /users/:userId/withdraw`**
    *   **Description:** Initiates a withdrawal of funds from the user's account to a specified Tari address.
    *   **Request Body:**
        ```json
        {
          "amount": 100000, // Amount in µTari
          "address": "t<destination_tari_address>",
          "fee_per_gram": 25 // Optional: fee in µTari per gram
        }
        ```
    *   **Response (200 OK - On Successful Wallet Broadcast):**
        ```json
        {
          "message": "Withdrawal successful.",
          "transaction_id": "d8b6e2f4-1a2b-3c4d-5e6f-7a8b9c0d1e2f", // Local exchange transaction ID
          "wallet_transaction_id": "1234567890abcdef1234567890abcdef" // Tari Wallet transaction ID
        }
        ```
    *   **Response (400 Bad Request / 500 Internal Server Error):** On validation errors, insufficient funds, or wallet communication issues.

## Project Structure

```
example-exchange/
├── dist/                     # Compiled JavaScript files (after `pnpm build`)
├── node_modules/             # Project dependencies
├── src/
│   ├── config.ts             # Application configuration (ports, gRPC addresses, DB path)
│   ├── database.ts           # SQLite database initialization and schema setup
│   ├── index.ts              # Express API server setup and endpoint definitions
│   ├── reorgMonitor.ts       # Monitors for and handles blockchain re-organizations
│   └── walletListener.ts     # Listens to wallet events for new deposits
├── .gitignore
├── package.json              # Project metadata and scripts
├── README.md                 # This file
└── tsconfig.json             # TypeScript compiler options
```

## Disclaimer

This is an example project created for demonstration and educational purposes. It illustrates how to interact with a Tari Wallet via gRPC using the `tari-bor` library. **It is NOT production-ready.** Before considering for any real-world application, it requires thorough security audits, comprehensive error handling, robust testing, and significant hardening. Use at your own risk.
