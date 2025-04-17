# tari-portal-wallet

A TypeScript client library for interacting with the Tari cryptocurrency wallet system via gRPC and CLI interfaces.

## Features

- Connect to Tari wallets via gRPC
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
import { buildTariNodeClient } from '@krakaw/wallet-interface';

// Create a client connected to a Tari wallet gRPC service
const client = buildTariNodeClient('localhost:18142');

// Get wallet balance
const balance = await client.getBalance();
console.log(`Available balance: ${balance.availableBalance}`);

// Get wallet address
const address = await client.getAddress();

// Transfer funds
const result = await client.transfer({
  recipients: [{
    address: 'recipient-address',
    amount: 1000,
    feePerGram: 25,
    paymentType: 0 // STANDARD_MIMBLEWIMBLE
  }]
});

// Close the connection when done
client.close();
```

### CLI Wallet Client

```typescript
import { TariWalletCliClient } from '@krakaw/wallet-interface';

// Create a client using the Tari wallet CLI executable
const client = new TariWalletCliClient('/path/to/tari_wallet_cli');

// Initialize a SHA atomic swap
const swapResult = await client.initShaAtomicSwap({
  amount: 1000,
  pubKey: 'recipient-public-key'
});

// Finalize a SHA atomic swap
await client.finaliseShaAtomicSwap({
  outputHash: swapResult.outputHash,
  preImageHex: swapResult.preImageHex
});
```

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test
```

## License

ISC