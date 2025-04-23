import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TariWalletGrpcClient } from './TariWalletGrpcClient.js';


describe('TariWalletGrpcClient', () => {
  let client: TariWalletGrpcClient;

  beforeEach(() => {
    vi.clearAllMocks();
    client = new TariWalletGrpcClient('localhost:18183');
  });

  describe('getAddress', () => {
    it('should return the wallet address', async () => {
      // Act
      const result = await client.getAddress();
      
      // Assert
      expect(result).toEqual({ address: 'test-wallet-address' });
    });
  });
});