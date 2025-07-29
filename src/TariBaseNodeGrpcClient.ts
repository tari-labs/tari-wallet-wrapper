import { ChannelCredentials, ServiceError } from "@grpc/grpc-js";

import { BaseNodeClient, BlockHeaderResponse, TipInfoResponse, GetBlocksRequest, GetNetworkStateRequest, GetNetworkStateResponse, ValueAtHeightResponse } from "./client/base_node.js";
import { HistoricalBlock } from "./client/block.js";
import { Empty } from "./client/types.js";
import Long from "long";
import { GetVersionResponse } from "./client/wallet.js";

export interface ITariBaseNodeGrpcClient {
  close(): void;
  getTipInfo(): Promise<TipInfoResponse>;
  getBlocks(request: GetBlocksRequest): AsyncIterable<HistoricalBlock>;
  checkConnectivity(): Promise<{ status: number }>;
  getTokensInCirculation(heights: number[]): AsyncIterable<ValueAtHeightResponse>;
}

export class TariBaseNodeGrpcClient implements ITariBaseNodeGrpcClient {
  private readonly client: BaseNodeClient;

  constructor(baseNodeGrpcAddress: string) {
    this.client = new BaseNodeClient(baseNodeGrpcAddress, ChannelCredentials.createInsecure());
  }

  public close(): void {
    this.client.close();
  }

  public async getTipInfo(): Promise<TipInfoResponse> {
    const tipInfo = await new Promise<TipInfoResponse>((resolve, reject) => {
      this.client.getTipInfo(Empty.create(), (error: ServiceError | null, response: TipInfoResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
    return tipInfo;
  }

  public getBlocks(request: GetBlocksRequest): AsyncIterable<HistoricalBlock> {
    const stream = this.client.getBlocks(request);
    
    return {
      [Symbol.asyncIterator]() {
        return {
          async next() {
            return new Promise((resolve, reject) => {
              stream.on('data', (block: HistoricalBlock) => {
                console.log('block', block);
                resolve({ value: block, done: false });
              });
              stream.on('end', () => {
                resolve({ value: undefined, done: true });
              });
              stream.on('error', (error) => {
                reject(error);
              });
            });
          }
        };
      }
    };
  }

  public async getVersion(): Promise<string> {
    const request = Empty.create();
    const response = await new Promise<GetVersionResponse>((resolve, reject) => {
      this.client.getVersion(request, (error: ServiceError | null, response: GetVersionResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
    return response.version;
  }

  public async *getTokensInCirculation(heights: number[] = []): AsyncIterable<ValueAtHeightResponse> {
    const request = GetBlocksRequest.create({ heights });
    const stream = this.client.getTokensInCirculation(request);
    
    for await (const response of stream) {
      yield response;
    }
  }

  public async checkConnectivity(): Promise<{ status: number }> {
    const request = GetNetworkStateRequest.create();
    const response = await new Promise<GetNetworkStateResponse>((resolve, reject) => {
      this.client.getNetworkState(request, (error: ServiceError | null, response: GetNetworkStateResponse) => {
        console.log('getNetworkState', error, response);
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });

    // Return a simple status object that matches the test expectations
    return {
      status: response.initialSyncAchieved ? 1 : 0
    };
  }
}

export function buildTariNodeClient(baseNodeGrpcAddress: string): ITariBaseNodeGrpcClient {
  return new TariBaseNodeGrpcClient(baseNodeGrpcAddress);
}
