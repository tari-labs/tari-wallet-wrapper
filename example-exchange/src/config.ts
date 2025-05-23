import path from 'path';

// Helper function to parse environment variables to numbers
const getEnvAsInt = (key: string, defaultValue: number): number => {
  const value = process.env[key];
  if (value === undefined || value === null) {
    return defaultValue;
  }
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
};

export const config = {
  // Tari Wallet gRPC address
  tariWalletGrpcAddress: process.env.TARI_WALLET_GRPC_ADDRESS || 'localhost:18143',

  // Express server port
  expressServerPort: getEnvAsInt('EXPRESS_SERVER_PORT', 3000),

  // Database file path (resolved to be relative to the project root 'example-exchange')
  // __dirname in a CommonJS module is the directory of the current file (e.g., /app/example-exchange/src)
  databaseFilePath: process.env.DATABASE_FILE_PATH || path.resolve(__dirname, '../exchange.db'),

  // Re-organization monitor settings
  reorgConfirmationDepth: getEnvAsInt('REORG_CONFIRMATION_DEPTH', 10),
  reorgCheckIntervalMs: getEnvAsInt('REORG_CHECK_INTERVAL_MS', 5 * 60 * 1000), // 5 minutes

  // Default fee per gram for withdrawals
  defaultFeePerGram: getEnvAsInt('DEFAULT_FEE_PER_GRAM', 25),
};

// Log the configuration being used (optional, but good for debugging)
console.log('Application Configuration:', config);
