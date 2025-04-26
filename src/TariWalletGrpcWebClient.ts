import { ClientReadableStream, RpcError } from "grpc-web";
import { WalletClient } from "./grpc-web-client/WalletServiceClientPb";
import { GetIdentityRequest, GetIdentityResponse } from "./grpc-web-client/network_pb";
import { Empty } from "./grpc-web-client/types_pb";
import {
  CheckConnectivityResponse,
  ClaimShaAtomicSwapRequest,
  ClaimShaAtomicSwapResponse,
  GetAddressResponse,
  GetBalanceRequest,
  GetBalanceResponse,
  GetCompleteAddressResponse,
  GetConnectivityRequest,
  GetStateRequest,
  GetStateResponse,
  GetVersionRequest,
  GetVersionResponse,
  SendShaAtomicSwapRequest,
  SendShaAtomicSwapResponse,
  TransactionEventRequest,
  TransactionEventResponse,
  TransferRequest,
  TransferResponse,
} from "./grpc-web-client/wallet_pb";

export interface ITariWalletGrpcWebClient {
  getVersion(): Promise<GetVersionResponse.AsObject>;
  getState(): Promise<GetStateResponse.AsObject>;
  checkConnectivity(): Promise<CheckConnectivityResponse.AsObject>;
  identify(): Promise<GetIdentityResponse.AsObject>;
  getBalance(): Promise<GetBalanceResponse.AsObject>;
  getAddress(): Promise<GetAddressResponse.AsObject>;
  transfer(transferRequest: TransferRequest): Promise<TransferResponse.AsObject>;
  streamTransactionEvents(
    onData: (data: TransactionEventResponse.AsObject) => void,
    onError: (error: RpcError) => void,
  ): Promise<ClientReadableStream<TransactionEventResponse>>;
  sendShaAtomicSwap(sendRequest: SendShaAtomicSwapRequest): Promise<SendShaAtomicSwapResponse.AsObject>;
  claimShaAtomicSwap(claimRequest: ClaimShaAtomicSwapRequest): Promise<ClaimShaAtomicSwapResponse.AsObject>;
}

export class TariWalletGrpcWebClient implements ITariWalletGrpcWebClient {
  private readonly client: WalletClient;

  constructor(walletGrpcAddress: string) {
    this.client = new WalletClient(walletGrpcAddress);
  }

  public async getVersion(): Promise<GetVersionResponse.AsObject> {
    const response = await this.client.getVersion(new GetVersionRequest());
    return response.toObject();
  }

  public async getState(): Promise<GetStateResponse.AsObject> {
    const response = await this.client.getState(new GetStateRequest());
    return response.toObject();
  }

  public async checkConnectivity(): Promise<CheckConnectivityResponse.AsObject> {
    const response = await this.client.checkConnectivity(new GetConnectivityRequest());
    return response.toObject();
  }

  public async identify(): Promise<GetIdentityResponse.AsObject> {
    const response = await this.client.identify(new GetIdentityRequest());
    return response.toObject();
  }

  public async getBalance(): Promise<GetBalanceResponse.AsObject> {
    const response = await this.client.getBalance(new GetBalanceRequest());
    return response.toObject();
  }

  public async getAddress(): Promise<GetCompleteAddressResponse.AsObject> {
    const response = await this.client.getCompleteAddress(new Empty());
    return response.toObject();
  }

  public async transfer(transferRequest: TransferRequest): Promise<TransferResponse.AsObject> {
    const response = await this.client.transfer(transferRequest);
    return response.toObject();
  }

  public async streamTransactionEvents(
    onData: (data: TransactionEventResponse.AsObject) => void,
    onError: (error: RpcError) => void,
  ): Promise<ClientReadableStream<TransactionEventResponse>> {
    return new Promise<ClientReadableStream<TransactionEventResponse>>((resolve, reject) => {
      const stream = this.client.streamTransactionEvents(new TransactionEventRequest());
      stream.on("error", (error) => {
        onError(error);
        reject(error);
      });
      stream.on("data", (data) => {
        onData(data.toObject());
      });
      resolve(stream);
    });
  }

  public async sendShaAtomicSwap(sendRequest: SendShaAtomicSwapRequest): Promise<SendShaAtomicSwapResponse.AsObject> {
    const response = await this.client.sendShaAtomicSwapTransaction(sendRequest);
    return response.toObject();
  }

  public async claimShaAtomicSwap(
    claimRequest: ClaimShaAtomicSwapRequest,
  ): Promise<ClaimShaAtomicSwapResponse.AsObject> {
    const response = await this.client.claimShaAtomicSwapTransaction(claimRequest);
    return response.toObject();
  }
}

export function buildTariWalletGrpcWebClient(walletGrpcAddress: string): ITariWalletGrpcWebClient {
  return new TariWalletGrpcWebClient(walletGrpcAddress);
}
