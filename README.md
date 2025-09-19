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

## License

ISC
