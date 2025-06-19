import { describe, it, expect, vi, beforeEach, afterEach, beforeAll } from 'vitest';
import { TariBaseNodeGrpcClient } from './TariBaseNodeGrpcClient.js';
import { GetBlocksRequest } from './client/base_node.js';
import Long from 'long';
import { HistoricalBlock } from './client/block.js';

describe('TariBaseNodeGrpcClient', () => {
  let client: TariBaseNodeGrpcClient;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  beforeAll(async () => {
    client = new TariBaseNodeGrpcClient('localhost:18182');
  });

  describe('getVersion', () => {
    it('should return version', async () => {
      // Act
      const result = await client.getVersion();

      // Assert
      expect(result).toBeDefined();
      expect(result).toBeDefined();
    });
  });


  // describe('getTipInfo', () => {
  //   it('should return tip info', async () => {
  //     // Act
  //     const result = await client.getTipInfo();
      
  //     // Assert
  //     expect(result).toBeDefined();
  //     expect(result.metadata).toBeDefined();
  //     expect(result.initialSyncAchieved).toBeDefined();
  //     expect(result.baseNodeState).toBeDefined();
  //     expect(result.failedCheckpoints).toBeDefined();
  //   });
  // });

  // describe('checkConnectivity', () => {
  //   it('should return connectivity status', async () => {
  //     // Act
  //     const result = await client.checkConnectivity();
      
  //     // Assert
  //     expect(result).toBeDefined();
  //     expect(result.status).toBeDefined();
  //     expect(result.status).toBe(1);
  //   });
  // });

  describe('getBlocks', () => {

    it('should stream blocks for given heights', async () => {
      // Use a promise to wait for the blocks to be streamed
      const request = GetBlocksRequest.create({
        heights: [Long.fromNumber(1), Long.fromNumber(2)]
      });
      const blocksPromise = new Promise<HistoricalBlock[]>((resolve, reject) => {
        const stream = client.getBlocks(request);
      
      });
      // Arrange
   

      // Act
      const blocks: any[] = [];
      for await (const block of client.getBlocks(request)) {
        blocks.push(block);
      }

      // Assert
      expect(blocks).toBeDefined();
      expect(Array.isArray(blocks)).toBe(true);
      expect(blocks.length).toBeGreaterThan(0);
      
      // Verify block structure
      blocks.forEach(block => {
        expect(block).toHaveProperty('header');
        expect(block).toHaveProperty('body');
        expect(block.header).toHaveProperty('height');
        expect(block.header).toHaveProperty('hash');
      });
    });
  });
});