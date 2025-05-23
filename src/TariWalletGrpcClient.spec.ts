import { describe, it, expect, vi, beforeEach, afterEach, beforeAll } from 'vitest';
import { TariWalletGrpcClient } from './TariWalletGrpcClient.js';
import { PaymentRecipient_PaymentType, TransactionEvent, TransactionEventResponse, TransferRequest } from './client/wallet.js';
import Long from 'long';

const ESME_DESTINATION_ADDRESS = 'f2FhXUsX4EiafVtZD1Ku8faodYxpmX7t4uPvwFFpywkFTkCRDiDADJ641o9483BzoVAy2QjcZAaKa63dR8zZYTBT1qn';
describe('TariWalletGrpcClient', () => {
  let client: TariWalletGrpcClient;
  let stream: any;

  beforeEach(() => {
    vi.clearAllMocks();
    
  });

  beforeAll(async () => {
    client = new TariWalletGrpcClient('localhost:18183');
     stream = await client.streamTransactionEvents();
      
  });

  afterEach(() => {
    // client.close();
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

  // describe('transaction event stream',  () => {
  //   it('should track transaction events', async () => {
  //     // Set up event tracking
  //     const events: TransactionEvent[] = [];
  //     const eventPromise = new Promise<void>( (resolve, reject) => {
  //       stream.on('data', (data: TransactionEventResponse) => {
  //         console.log('Source Address:', data.transaction?.sourceAddress ? Buffer.from(data.transaction.sourceAddress).toString('hex') : 'N/A');
  //         console.log('Destination Address:', data.transaction?.destAddress ? Buffer.from(data.transaction.destAddress).toString('hex') : 'N/A');
  //         console.log('Payment ID:', data.transaction?.paymentId ? Buffer.from(data.transaction.paymentId).toString('hex') : 'N/A');
  //         console.log('Transaction:', data.transaction);

  //         if (data.transaction) {
  //           events.push(data.transaction);
  //           // Resolve when we see a transaction with "Failed" status
  //           if (data.transaction.status === 'Failed') {
  //             // resolve();
  //           }
  //         }
  //       });
  //       stream.on('error', (error: any) => {
  //         console.error('Error in transaction event stream:', error);
  //         // reject(error);
  //       });

  //       const transferRequest: TransferRequest = {
  //         recipients: [{
  //           address: '18AFWJbqQtbZ5o5vDK5821RLqoJHYF1vC2aFf1gXfWaABhXGY3G6Ap8fucfDEFEYAQLQgGDD5rYBw6JVMneGiAzY2g6GB28URp3yz8SyyMi8BQM',
  //           amount: Long.fromNumber(1), // 1 Tari
  //           feePerGram: Long.fromNumber(25),
  //           paymentType: PaymentRecipient_PaymentType.ONE_SIDED,
  //           paymentId: Buffer.from(`wallet-wrapper-test-${Date.now()}`)
  //         }]
  //       };
  
  //       // Act
  //       //  client.transfer(transferRequest).then(() => {
  //       //  });
        

  //     });
  //     await eventPromise;

  //     // Arrange
    
  //   });
  // });

  describe('transfer', () => {
    it('should attempt to transfer funds to a recipient', async () => {
      // Arrange
      const transferRequest: TransferRequest = {
        recipients: [{
          address: ESME_DESTINATION_ADDRESS,
          amount: Long.fromNumber(1), // 1 Tari
          feePerGram: Long.fromNumber(25),
          paymentType: PaymentRecipient_PaymentType.ONE_SIDED,
          rawPaymentId: Buffer.from(`wallet-wrapper-test-${Date.now()}`),
          userPaymentId: {
            utf8String: `wallet-wrapper-test-${Date.now()}`,
            u256: Buffer.from([]),
            userBytes: Buffer.from([])
          }
        }]
      };

      // Act
      const result = await client.transfer(transferRequest);
      // Assert
      expect(result).toBeDefined();
      expect(result.results).toBeDefined();
      expect(result.results.length).toBe(1);
      expect(result.results[0].address).toBe(ESME_DESTINATION_ADDRESS);
      expect(result.results[0].isSuccess).toBe(false);
      expect(result.results[0].transactionId).toBeDefined();
      expect(result.results[0].failureMessage).toBe('Output manager error: `Not enough funds to fulfil transaction`');
    });
  });
});