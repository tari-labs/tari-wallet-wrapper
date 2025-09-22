# Tari Wallet Interface

A TypeScript client library for interacting with the Tari cryptocurrency wallet system via gRPC and CLI interfaces.

## Features

- Connect to Tari wallets via gRPC
- Connect to Tari base nodes via gRPC
- Execute wallet commands using CLI
- Transfer funds
- Manage SHA atomic swaps (initialize, finalize, claim refunds)
- Query wallet information (balance, address, state)

## Installation

```bash
npm install @krakaw/wallet-interface
# or
pnpm add @krakaw/wallet-interface
```

## Usage

### gRPC Wallet Client

```typescript
import { TariWalletGrpcClient } from "@krakaw/wallet-interface";

// Create a client connected to a Tari wallet gRPC service
const client = new TariWalletGrpcClient("localhost:18142");

// Get wallet balance
const balance = await client.getBalance();
console.log(`Available balance: ${balance.availableBalance}`);

// Get wallet address
const address = await client.getAddress();

// Transfer funds (single recipient)
const result = await client.transfer({
  recipients: [
    {
      address: "recipient-address",
      amount: 1000,
      feePerGram: 25,
      paymentType: 0, // STANDARD_MIMBLEWIMBLE
    },
  ],
  singleTx: false, // Optional: bundle multiple recipients in one transaction
});

// Multi-recipient transfer (new feature)
const multiResult = await client.transfer({
  recipients: [
    {
      address: "recipient-1-address",
      amount: 1000,
      feePerGram: 25,
      paymentType: 1, // ONE_SIDED
    },
    {
      address: "recipient-2-address",
      amount: 2000,
      feePerGram: 25,
      paymentType: 1, // ONE_SIDED
    },
  ],
  singleTx: true, // Bundle all recipients into single on-chain transaction
});

// Cancel a transaction by its ID
const cancelResult = await client.cancelTransaction({
  txId: 12345, // Transaction ID to cancel
});

if (cancelResult.isSuccess) {
  console.log('Transaction cancelled successfully');
} else {
  console.log('Failed to cancel:', cancelResult.failureMessage);
}

// Get transaction history (streaming)
const historyStream = await client.getTransactionHistory({
  offset: 0,
  limit: 50,
  statusBitflag: 0 // All statuses
});

historyStream.on('data', (transaction) => {
  console.log('Transaction:', transaction);
});

// Get specific transaction info by ID
const txInfo = await client.getTransactionInfo({ txId: 12345 });
console.log('Transaction details:', txInfo);

// Close the connection when done
client.close();
```

### Base Node gRPC Client

```typescript
import { TariBaseNodeGrpcClient } from "@krakaw/wallet-interface";

// Create a client connected to a Tari base node gRPC service
const baseNodeClient = new TariBaseNodeGrpcClient("localhost:18141");

// Get chain metadata
const metadata = await baseNodeClient.getChainMetadata();
console.log(`Current height: ${metadata.metadata.bestBlock.height}`);

// Close the connection when done
baseNodeClient.close();
```

### CLI Wallet Client

```typescript
import { TariWalletCliClient } from "@krakaw/wallet-interface";

// Create a client using the Tari wallet CLI executable
const client = new TariWalletCliClient("/path/to/tari_wallet_cli");

// Initialize a SHA atomic swap
const swapResult = await client.initShaAtomicSwap({
  amount: 1000,
  pubKey: "recipient-public-key",
});

// Finalize a SHA atomic swap
await client.finaliseShaAtomicSwap({
  outputHash: swapResult.outputHash,
  preImageHex: swapResult.preImageHex,
});
```

## Development

```bash
# Install dependencies
pnpm install

# Build the project
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format:fix
```

## Adding New/ Updating gRPC methods

When new functionality is added to the Tari protocol, you can extend this library by following these steps:

### 1. Update Protocol Buffer Definitions

First, add the new method to the appropriate `.proto` file in `src/proto/`:

```protobuf
// In src/proto/wallet.proto
service Wallet {
  // Add new method to service definition
  rpc NewFeature(NewFeatureRequest) returns (NewFeatureResponse);
}

// Add message definitions at bottom of file
message NewFeatureRequest {
  uint64 some_param = 1;
}

message NewFeatureResponse {
  bool success = 1;
  string message = 2;
}
```

### 2. Generate TypeScript Types

Run the generation script to create TypeScript types from the updated proto files:

```bash
cd src/proto
./generate.sh --tari-path ../../../tari --no-dry-run
```

This script will:
- Copy the latest `.proto` files from the Tari repository
- Use `protoc` with the `ts-proto` plugin to generate TypeScript code
- Update generated files in `src/client/` directory

### 3. Implement Client Method

Add the new method to the appropriate client class:

```typescript
// In src/TariWalletGrpcClient.ts

// 1. Add to interface
export interface ITariWalletGrpcClient {
  // ... existing methods
  newFeature(request: NewFeatureRequest): Promise<NewFeatureResponse>;
}

// 2. Add to class implementation  
export class TariWalletGrpcClient implements ITariWalletGrpcClient {
  
  public async newFeature(request: NewFeatureRequest): Promise<NewFeatureResponse> {
    return new Promise<NewFeatureResponse>((resolve, reject) => {
      this.client.newFeature(request, (error: ServiceError | null, response: NewFeatureResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}
```

### 4. Update Imports

Add the new types to the import statement:

```typescript
// In src/TariWalletGrpcClient.ts
import {
  // ... existing imports
  NewFeatureRequest,
  NewFeatureResponse,
} from "./client/wallet";
```

### 5. Add Tests

Create tests for the new functionality:

```typescript
// In src/TariWalletGrpcClient.spec.ts
describe("newFeature", () => {
  it("should execute new feature successfully", async () => {
    const request = { some_param: 123 };
    const result = await client.newFeature(request);
    
    expect(result).toBeDefined();
    expect(result.success).toBe(true);
  });
});
```

### Important Notes

- **Never edit generated files** in `src/client/` - they will be overwritten
- **Proto files are the source of truth** - all changes start there
- **All methods follow the same Promise-based pattern** with proper error handling
- **Run tests** after implementation to ensure everything works correctly
- **Generated TypeScript provides full type safety** for requests and responses

## License

ISC
