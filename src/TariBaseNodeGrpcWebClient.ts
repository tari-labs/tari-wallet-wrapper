import { TipInfoResponse } from "./grpc-web-client/base_node_pb";
import { BaseNodeClient } from "./grpc-web-client/Base_nodeServiceClientPb";
import { Empty } from "./grpc-web-client/types_pb";

export interface ITariBaseNodeGrpcWebClient {
  getTipInfo(): Promise<TipInfoResponse>;
}

export class TariBaseNodeGrpcWebClient implements ITariBaseNodeGrpcWebClient {
  private readonly client: BaseNodeClient;

  constructor(baseNodeGrpcAddress: string) {
    this.client = new BaseNodeClient(baseNodeGrpcAddress);
  }

  public getTipInfo(): Promise<TipInfoResponse> {
    return this.client.getTipInfo(new Empty());
  }
}

export function buildTariBaseNodeGrpcWebClient(baseNodeGrpcAddress: string): ITariBaseNodeGrpcWebClient {
  return new TariBaseNodeGrpcWebClient(baseNodeGrpcAddress);
}
