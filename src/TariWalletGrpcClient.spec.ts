import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { TariWalletGrpcClient } from './TariWalletGrpcClient.js';
import { PaymentRecipient_PaymentType, TransferRequest } from './client/wallet.js';
import Long from 'long';

describe('TariWalletGrpcClient', () => {
  let client: TariWalletGrpcClient;

  beforeEach(() => {
    vi.clearAllMocks();
    client = new TariWalletGrpcClient('localhost:18183');
  });

  afterEach(() => {
    client.close();
  });

  describe('getVersion', () => {
    it('should return the wallet version', async () => {
      // Act
      const result = await client.getVersion();
      
      // Assert
      expect(result).toBeDefined();
      expect(result.version).toBeDefined();
      expect(typeof result.version).toBe('string');
    });
  });

  describe('checkConnectivity', () => {
    it('should return connectivity status', async () => {
      // Act
      const result = await client.checkConnectivity();
      
      // Assert
      expect(result).toBeDefined();
      expect(result.status).toBeDefined();
      expect( result.status).toBe(1);
    });
  });

  describe('getBalance', () => {
    it('should return wallet balance', async () => {
      // Act
      const result = await client.getBalance();
      
      console.log(typeof result.availableBalance)
      // Assert
      expect(result).toBeDefined();
      expect(result.availableBalance).toBeDefined();
      expect(result.pendingIncomingBalance).toBeDefined();
      expect(result.pendingOutgoingBalance).toBeDefined();
      expect(result.availableBalance).toBeDefined();
      expect(result.pendingIncomingBalance).toBeDefined(); 
      expect(result.pendingOutgoingBalance).toBeDefined();
    });
  });

  describe('getAddress', () => {
    it('should return the wallet address', async () => {
      // Act
      const result = await client.getAddress();
      
      // Assert
      expect(result).toBeDefined();
      expect(result.interactiveAddressBase58).toBeDefined();
      expect(typeof result.interactiveAddressBase58).toBe('string');
      expect(result.interactiveAddressBase58.length).toBeGreaterThan(0);
    });
  });

  describe('getPaymentIdAddress', () => {
    it('should return a payment ID address', async () => {
      // Arrange
      const paymentId = '1234567890abcdef';
      
      // Act
      const result = await client.getPaymentIdAddress(paymentId);
      
      // Assert
      expect(result).toBeDefined();
      expect(result.interactiveAddressBase58).toBeDefined();
      expect(typeof result.interactiveAddressBase58).toBe('string');
      expect(result.interactiveAddressBase58.length).toBeGreaterThan(0);
    });

  });

  describe('transfer', () => {
    it('should attempt totransfer funds to a recipient', async () => {
      // Arrange
      const transferRequest: TransferRequest = {
        recipients: [{
          address: '18AFWJbqQtbZ5o5vDK5821RLqoJHYF1vC2aFf1gXfWaABhXGY3G6Ap8fucfDEFEYAQLQgGDD5rYBw6JVMneGiAzY2g6GB28URp3yz8SyyMi8BQM',
          amount: Long.fromNumber(1000000), // 1 Tari
          feePerGram: Long.fromNumber(25),
          paymentType: PaymentRecipient_PaymentType.ONE_SIDED,
          paymentId: new Uint8Array(0)
        }]
      };

      // Act
      const result = await client.transfer(transferRequest);

      console.log(result)
      // Assert
      expect(result).toBeDefined();
      expect(result.results).toBeDefined();
      expect(result.results.length).toBe(1);
      expect(result.results[0].address).toBe('18AFWJbqQtbZ5o5vDK5821RLqoJHYF1vC2aFf1gXfWaABhXGY3G6Ap8fucfDEFEYAQLQgGDD5rYBw6JVMneGiAzY2g6GB28URp3yz8SyyMi8BQM');
      expect(result.results[0].isSuccess).toBe(false);
      expect(result.results[0].transactionId).toBeDefined();
      expect(result.results[0].failureMessage).toBe('Output manager error: `Not enough funds to fulfil transaction`');
    });
  });
});