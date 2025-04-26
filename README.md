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

The clients are expected to be run via browser using GRPC-WEB protocol. It is not a pure GRPC,
and it needs a translation layer. You can use [Envoy](https://www.envoyproxy.io/) proxy or [grpcwebproxy](https://github.com/improbable-eng/grpc-web/tree/master/go/grpcwebproxy)

1. Run Tari console wallet (minotari_console_wallet --grpc-enabled)

```sh
minotari_console_wallet --grpc-enabled
```

2. Run GRPC-WEB proxy

```sh
grpcwebproxy --backend_addr=localhost:18183 --run_tls_server=false --allow_all_origins --server_http_debug_port=28183
```

If you need to run clients using NodeJs, you will need to add a shim for `XMLHttpRequest`.

```ts
import XMLHttpRequest from "xhr2";

global.XMLHttpRequest = XMLHttpRequest;
```

### gRPC Wallet Client

```typescript
import { TariWalletGrpcWebClient } from "@krakaw/wallet-interface";

// Create a client connected to a Tari wallet gRPC service
const client = new TariWalletGrpcWebClient("http://localhost:28142");

// Get wallet balance
const balance = await client.getBalance();
console.log(`Available balance: ${balance.availableBalance}`);

// Get wallet address
const address = await client.getAddress();

// Transfer funds
const recipient = new PaymentRecipient()
  .setAddress("recipient-address")
  .setAmount(1000)
  .setFeePerGram(25)
  .setPaymentType(0); // STANDARD_MIMBLEWIMBLE

const transferRequest = new TransferRequest();
transferRequest.setRecipientsList([recipient]);

await client.transfer(transferRequest);
```

### Base Node gRPC Client

```typescript
import { TariBaseNodeGrpcWebClient } from "@krakaw/wallet-interface";

// Create a client connected to a Tari base node gRPC service
const baseNodeClient = new TariBaseNodeGrpcWebClient("httpL//localhost:28141");

// Get chain metadata
const metadata = await baseNodeClient.getChainMetadata();
console.log(`Current height: ${metadata.metadata.bestBlock.height}`);
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
