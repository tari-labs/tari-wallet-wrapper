# Tari Wallet Interface

A TypeScript client library for interacting with the Tari cryptocurrency wallet system via gRPC and CLI interfaces.

## Features

### Core Connectivity
- **gRPC Wallet Client** - High-performance connection to Tari wallets with streaming support
- **gRPC Base Node Client** - Direct blockchain queries and network state monitoring  
- **CLI Wallet Client** - Command-line interface wrapper for atomic swap operations

### Transaction Management
- **Multi-recipient transfers** - Send to multiple addresses in single or bundled transactions
- **Transaction cancellation** - Cancel pending transactions by ID
- **Real-time transaction streaming** - Monitor transaction events as they occur
- **Transaction history** - Retrieve complete transaction history with filtering and pagination
- **Payment references** - Cryptographic payment verification and tracking

### Advanced Transfer Types
- **Standard Mimblewimble** - Interactive transactions with full privacy
- **One-sided transactions** - Send without recipient participation
- **One-sided stealth** - Enhanced privacy transfers
- **Coin splitting** - Create multiple smaller outputs from larger ones
- **Burn transactions** - Destroy Tari currency permanently

### Atomic Swap Support
- **SHA Atomic Swaps** - Cross-chain trading with cryptographic guarantees
- **HTLC operations** - Hash Time Locked Contract management
- **Pre-image handling** - Secure swap secret management
- **Refund claiming** - Automated refund mechanisms

### Wallet Operations
- **Comprehensive balance queries** - Available, pending, and timelocked balances
- **Address generation** - Multiple formats including Base58 and emoji encoding
- **Payment ID support** - Tagged transactions and address generation  
- **Wallet state monitoring** - Sync status, network connectivity, validation state
- **Identity management** - Public keys and node identification

### Blockchain Integration
- **Block streaming** - Real-time blockchain data access
- **Chain metadata** - Tip information and network statistics
- **Token circulation** - Supply metrics by block height
- **Network diagnostics** - Connection quality and peer status

### Developer Features
- **Full TypeScript support** - Complete type safety with generated protobuf types
- **Dual module output** - Both CommonJS and ES modules support
- **Promise-based API** - Modern async/await compatible interface
- **Comprehensive error handling** - Detailed error messages and status codes
- **High-precision arithmetic** - Long integer support for blockchain amounts

## Installation

This package is published to GitHub Packages. You need to configure your package manager to use GitHub's registry for the `@tari-labs` scope.

### 1. Configure Registry

Create or update your `.npmrc` file in your project root:

```bash
@tari-labs:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### 2. Set GitHub Token

You'll need a GitHub Personal Access Token with `read:packages` permission:

```bash
# Set as environment variable
export GITHUB_TOKEN=your_github_token_here

# Or add to your shell profile (.bashrc, .zshrc, etc.)
echo "export GITHUB_TOKEN=your_github_token_here" >> ~/.bashrc
```

**To create a GitHub token:**
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Select `read:packages` scope
4. Copy the generated token

### 3. Install Package

```bash
npm install @tari-labs/wallet-interface
# or
pnpm add @tari-labs/wallet-interface
# or  
yarn add @tari-labs/wallet-interface
```

### Alternative: Project-specific .npmrc

You can also configure the registry in your project's `.npmrc` file instead of globally:

```bash
# In your project directory
echo "@tari-labs:registry=https://npm.pkg.github.com" >> .npmrc
echo "//npm.pkg.github.com/:_authToken=\${GITHUB_TOKEN}" >> .npmrc
```

## Usage

### gRPC Wallet Client

```typescript
import { TariWalletGrpcClient } from "@tari-labs/wallet-interface";

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
import { TariBaseNodeGrpcClient } from "@tari-labs/wallet-interface";

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
import { TariWalletCliClient } from "@tari-labs/wallet-interface";

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
