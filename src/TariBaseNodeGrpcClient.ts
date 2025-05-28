import { ChannelCredentials, ServiceError } from "@grpc/grpc-js";

import { BaseNodeClient, TipInfoResponse, ValueAtHeightResponse, GetBlocksRequest } from "./client/base_node.js";
import { Empty } from "./client/types.js";

export interface ITariBaseNodeGrpcClient {
  close(): void;
  getTipInfo(): Promise<TipInfoResponse>;
  getTokensInCirculation(): AsyncIterable<ValueAtHeightResponse>;
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

  public async *getTokensInCirculation(heights: number[] = []): AsyncIterable<ValueAtHeightResponse> {
    const request = GetBlocksRequest.create({ heights });
    const stream = this.client.getTokensInCirculation(request);
    
    for await (const response of stream) {
      yield response;
    }
  }
}

export function buildTariNodeClient(baseNodeGrpcAddress: string): ITariBaseNodeGrpcClient {
  return new TariBaseNodeGrpcClient(baseNodeGrpcAddress);
}
