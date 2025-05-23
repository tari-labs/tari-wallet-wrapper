# Testing Strategy for Tari Example Exchange

This document outlines the testing strategy for the Tari Example Exchange project. It covers various types of testing and identifies key areas and components to test.

## 1. Testing Strategy Overview

A comprehensive testing strategy is crucial to ensure the reliability and correctness of the example exchange. This involves multiple layers of testing:

*   **Unit Tests:** Focus on testing individual functions, modules, or classes in isolation. They are quick to run and help ensure that the smallest parts of the application work correctly.
*   **Integration Tests:** Test the interaction between different components or modules. For example, testing how the API endpoints interact with the database, or how the wallet listener updates the database based on simulated wallet events.
*   **End-to-End (E2E) Tests:** Test the entire application flow from an end-user's perspective (or an external system's perspective in the case of an API). These are typically slower but provide high confidence in the overall system behavior.

**Suggested Tools/Frameworks:**

*   **Unit/Integration Testing:**
    *   **Jest:** A popular JavaScript testing framework with built-in mocking, assertions, and test runner.
    *   **Mocha & Chai:** Mocha as a test runner and Chai for assertions provide a flexible alternative.
*   **API E2E Testing:**
    *   **Supertest:** Useful for testing HTTP assertions against the Express API endpoints.
*   **UI E2E Testing (if a UI were added):**
    *   **Puppeteer or Selenium:** For automating browser interactions.
*   **Mocking:**
    *   **`jest.mock`:** Built-in Jest functionality for mocking modules and functions.
    *   **Sinon.JS:** A standalone library for spies, stubs, and mocks, usable with various testing frameworks.

## 2. Unit Tests

Unit tests should cover the following components:

**`src/database.ts`:**

*   **`initializeDB()`:**
    *   Verify that tables (`users`, `transactions`) are created successfully if they don't exist.
    *   Test behavior when the database file already exists with the correct schema.
    *   Test error handling if the database connection fails.
*   **Individual SQL Queries (if refactored into testable helper functions):**
    *   Test user creation logic (e.g., `INSERT INTO users`).
    *   Test fetching user data (e.g., `SELECT * FROM users WHERE user_id = ?`).
    *   Test updating user balance (e.g., `UPDATE users SET balance = ? WHERE user_id = ?`).
    *   Test inserting transactions (e.g., `INSERT INTO transactions`).
    *   Test uniqueness constraints (e.g., `deposit_address`, `wallet_transaction_id`).

**`src/config.ts`:**

*   Test that default configuration values are loaded correctly when no environment variables are set.
*   Test that environment variables correctly override the default values for each configurable property (e.g., `TARI_WALLET_GRPC_ADDRESS`, `EXPRESS_SERVER_PORT`).

**Helper Functions/Utilities:**

*   If any utility functions are created (e.g., for data transformation, specific calculations), they should have dedicated unit tests covering various input scenarios and edge cases.

## 3. Integration Tests

Integration tests will focus on the interaction points between different services within the application.

**API & Database (`src/index.ts` & `src/database.ts`):**

*   **`POST /users`:**
    *   Send a request to create a user.
    *   Verify that a new user record is created in the database.
    *   Verify that the `deposit_address` returned has a plausible format (though not its actual validity on the Tari network, as the wallet is mocked here).
*   **`PUT /users/:userId/withdrawal-address`:**
    *   Create a user, then send a request to update their withdrawal address.
    *   Verify that the `withdrawal_address` field is correctly updated in the database for that user.
    *   Test cases: user exists, user does not exist.
*   **`POST /users/:userId/withdraw`:**
    *   **Sufficient Funds:** Create a user, manually set their balance in the DB. Initiate a withdrawal. Verify that the user's balance is correctly debited and a 'withdrawal' transaction is recorded in the database.
    *   **Insufficient Funds:** Create a user with a low balance. Attempt to withdraw an amount greater than their balance. Verify that the API returns an appropriate error (e.g., 400) and that the user's balance and transactions table remain unchanged.
    *   Test with invalid inputs (amount, address).

**Wallet Listener & Database (`src/walletListener.ts` & `src/database.ts`):**

*   **Mock `TariWalletGrpcClient.streamTransactionEvents`:** This is crucial. The mock should allow simulating various transaction events.
*   **Simulate Events:**
    *   **Confirmed Deposit (Existing User):** Simulate a `TransactionEventResponse` indicating a `MINED_CONFIRMED`, `INBOUND` transaction with a `paymentId` matching an existing user. Verify a new 'deposit' transaction is created in the `transactions` table and the user's `balance` is correctly credited.
    *   **Confirmed Deposit (Non-Existing User):** Simulate the same event but with a `paymentId` not in the `users` table. Verify no new transaction is created and no user balance is updated.
    *   **Non-Relevant Status/Direction:** Simulate events with statuses other than `MINED_CONFIRMED` or directions other than `INBOUND`. Verify they are ignored.
    *   **Duplicate Wallet Transaction ID:** Simulate an event for a `wallet_transaction_id` that already exists in the `transactions` table. Verify it's handled gracefully (e.g., ignored or logged as an error, depending on desired behavior).

**Re-org Monitor & Database (`src/reorgMonitor.ts` & `src/database.ts`):**

*   **Mock `TariWalletGrpcClient.getState` and `TariWalletGrpcClient.getBlockHeightTransactions`**.
*   **Simulate Scenarios:**
    *   **Deposit Re-org:**
        1.  Add a "confirmed" deposit transaction to the local DB (status `MINED_CONFIRMED`, valid `confirmation_block_height`).
        2.  Simulate `getState` returning a current height.
        3.  Simulate `getBlockHeightTransactions` for the re-orged block *not* returning the above deposit's `wallet_transaction_id`.
        4.  Trigger `checkReorgs()`.
        5.  Verify the local transaction's status is updated to `REORG_DETECTED`, `confirmation_block_height` is nulled, and the corresponding user's balance is debited.
    *   **No Re-orgs:**
        1.  Add confirmed deposits to the local DB.
        2.  Simulate wallet API calls that show these transactions are still valid in their respective blocks.
        3.  Trigger `checkReorgs()`.
        4.  Verify no changes are made to the database.
    *   **Withdrawal Re-org (Logging only):** Simulate a withdrawal transaction in DB that is no longer in the wallet's view. Verify a warning is logged.

**API & Wallet Client (`src/index.ts` & Mocked `TariWalletGrpcClient`):**

*   **`POST /users`:**
    *   Mock `walletClient.getPaymentIdAddress()` to return a successful response. Verify the API endpoint processes it correctly.
    *   Mock `walletClient.getPaymentIdAddress()` to throw an error or return an error state. Verify the API endpoint handles the error gracefully (e.g., returns 500).
*   **`POST /users/:userId/withdraw`:**
    *   Mock `walletClient.transfer()` to return a successful `TransferResponse`. Verify the API endpoint processes it, updates the DB, and returns a success response.
    *   Mock `walletClient.transfer()` to return a failed `TransferResponse` (e.g., `isSuccess: false`). Verify the API returns an appropriate error and does not alter DB.
    *   Mock `walletClient.transfer()` to throw a gRPC error. Verify API error handling.

## 4. End-to-End (E2E) Tests (Conceptual)

E2E tests simulate real user scenarios and verify the entire application stack. These would typically require a running instance of the API, the Wallet Listener, the Re-org Monitor, and a (likely mocked) Tari Wallet gRPC service.

**Example E2E Scenario:**

1.  **User Creation:** Call `POST /users` API to create a new user. Store the `user_id` and `deposit_address`.
2.  **Simulate Deposit:**
    *   Manually trigger or mock the `walletListener.ts` to receive a `TransactionEventResponse` for an inbound, confirmed transaction to the user's `deposit_address` (using the `paymentId` derived from `user_id`).
    *   This step requires careful orchestration, potentially by having a test-specific way to inject events into the listener or by controlling the mocked gRPC stream.
3.  **Verify Balance Update:**
    *   (If a `GET /users/:userId/balance` or `GET /users/:userId` endpoint existed, call it to verify the balance).
    *   Alternatively, directly query the SQLite database to confirm the user's balance has increased by the deposit amount and a 'deposit' transaction is recorded.
4.  **Initiate Withdrawal:**
    *   Call `POST /users/:userId/withdraw` API with a valid amount (less than or equal to the new balance) and a destination address.
    *   This requires the mocked `TariWalletGrpcClient`'s `transfer` method to respond successfully.
5.  **Verify Withdrawal & Balance:**
    *   Query the database to confirm the user's balance has been debited by the withdrawal amount.
    *   Verify a 'withdrawal' transaction is recorded in the `transactions` table.

**Considerations for E2E Tests:**

*   **Test Environment:** Requires a dedicated test environment with all components running.
*   **Data Management:** Need strategies for resetting database state between tests.
*   **Mocking External Services:** The Tari Wallet gRPC service would still likely be mocked to provide deterministic behavior and avoid reliance on a real, live wallet for automated tests.

## 5. Mocking

Effective mocking of external dependencies is critical for reliable and fast unit and integration tests.

*   **`TariWalletGrpcClient`:** This is the primary candidate for mocking. All its methods (`getPaymentIdAddress`, `transfer`, `streamTransactionEvents`, `getState`, `getBlockHeightTransactions`) should be mockable.
    *   For streaming methods like `streamTransactionEvents`, the mock should allow test code to simulate emitting `data`, `error`, and `end` events.
*   **Database:** For some unit tests (e.g., testing business logic in `index.ts` without hitting the actual DB), the `sqlite3` module or the `db` instance itself might be mocked. However, for many integration tests, using an in-memory SQLite database or a test-specific file-based database is preferable to test actual database interactions.
*   **Libraries:**
    *   **`jest.mock()`:** Ideal for mocking entire modules. For example, `jest.mock('tari-bor/dist/client/wallet', () => { ... mocked implementation ... });`.
    *   **`sinon`:** Provides more fine-grained control with spies (to check if functions were called) and stubs (to replace functions with controlled behavior).

By implementing tests across these different levels, we can build confidence in the functionality and robustness of the Tari Example Exchange.I have created the `TESTING.md` file in the `example-exchange` directory with the specified content outlining the testing strategy.
