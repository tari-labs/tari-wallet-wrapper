import { ChannelCredentials, ServiceError } from "@grpc/grpc-js";

import {
  CheckConnectivityResponse,
  GetAddressResponse,
  GetBalanceResponse,
  GetStateResponse,
  GetVersionResponse,
  TransactionEventResponse,
  TransferRequest,
  TransferResponse,
  WalletClient,
  PaymentRecipient,
  SendShaAtomicSwapRequest,
  SendShaAtomicSwapResponse,
  ClaimShaAtomicSwapRequest,
  ClaimShaAtomicSwapResponse,
  GetCompleteAddressResponse,
} from "./client/wallet";
import { GetIdentityResponse } from "./client/network";
import { ClientReadableStream } from "@grpc/grpc-js";
export interface ITariWalletGrpcClient {
  close(): void;
  getVersion(): Promise<GetVersionResponse>;
  getState(): Promise<GetStateResponse>;
  checkConnectivity(): Promise<CheckConnectivityResponse>;
  identify(): Promise<GetIdentityResponse>;
  getBalance(): Promise<GetBalanceResponse>;
  getAddress(): Promise<GetAddressResponse>;
  transfer(transferRequest: TransferRequest): Promise<TransferResponse>;
  streamTransactionEvents(onData: any, onError: any): Promise<ClientReadableStream<TransactionEventResponse>>;
  sendShaAtomicSwap(sendRequest: SendShaAtomicSwapRequest): Promise<SendShaAtomicSwapResponse>;
  claimShaAtomicSwap(claimRequest: ClaimShaAtomicSwapRequest): Promise<ClaimShaAtomicSwapResponse>;
}

export class TariWalletGrpcClient implements ITariWalletGrpcClient {
  private readonly client: WalletClient;

  constructor(walletGrpcAddress: string) {
    this.client = new WalletClient(walletGrpcAddress, ChannelCredentials.createInsecure());
  }

  public close(): void {
    this.client.close();
  }

  public async getVersion(): Promise<GetVersionResponse> {
    const versionResponse = await new Promise<GetVersionResponse>((resolve, reject) => {
      this.client.getVersion({}, (error: ServiceError | null, response: GetVersionResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
    return versionResponse;
  }

  public async getState(): Promise<GetStateResponse> {
    const stateResponse = await new Promise<GetStateResponse>((resolve, reject) => {
      this.client.getState({}, (error: ServiceError | null, response: GetStateResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
    return stateResponse;
  }

  public async checkConnectivity(): Promise<CheckConnectivityResponse> {
    const stateResponse = await new Promise<CheckConnectivityResponse>((resolve, reject) => {
      this.client.checkConnectivity({}, (error: ServiceError | null, response: CheckConnectivityResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
    return stateResponse;
  }

  public async identify(): Promise<GetIdentityResponse> {
    const stateResponse = await new Promise<GetIdentityResponse>((resolve, reject) => {
      this.client.identify({}, (error: ServiceError | null, response: GetIdentityResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
    return stateResponse;
  }

  public async getBalance(paymentId?: any): Promise<GetBalanceResponse> {
    const stateResponse = await new Promise<GetBalanceResponse>((resolve, reject) => {
      this.client.getBalance({ paymentId }, (error: ServiceError | null, response: GetBalanceResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
    return stateResponse;
  }

  public async getAddress(): Promise<GetCompleteAddressResponse> {
    const stateResponse = await new Promise<GetCompleteAddressResponse>((resolve, reject) => {
      this.client.getCompleteAddress({}, (error: ServiceError | null, response: GetCompleteAddressResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
    return stateResponse;
  }


  public async getPaymentIdAddress(paymentId: string): Promise<GetCompleteAddressResponse> {
    const stateResponse = await new Promise<GetCompleteAddressResponse>((resolve, reject) => {
      this.client.getPaymentIdAddress({ paymentId: Buffer.from(paymentId, 'hex') }, (error: ServiceError | null, response: GetCompleteAddressResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
    return stateResponse;
  }
  


  public async transfer(transferRequest: TransferRequest): Promise<TransferResponse> {
    const stateResponse = await new Promise<TransferResponse>((resolve, reject) => {
      this.client.transfer(transferRequest, (error: ServiceError | null, response: TransferResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
    return stateResponse;
  }

  public async streamTransactionEvents(): Promise<ClientReadableStream<TransactionEventResponse>> {
    return this.client.streamTransactionEvents({});
    
  }

  public async sendShaAtomicSwap(sendRequest: SendShaAtomicSwapRequest): Promise<SendShaAtomicSwapResponse> {

    return new Promise<SendShaAtomicSwapResponse>((resolve, reject) => {
      this.client.sendShaAtomicSwapTransaction(sendRequest, (error: ServiceError | null, response: SendShaAtomicSwapResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  public async claimShaAtomicSwap(claimRequest: ClaimShaAtomicSwapRequest): Promise<ClaimShaAtomicSwapResponse> {
    return new Promise<ClaimShaAtomicSwapResponse>((resolve, reject) => {
      this.client.claimShaAtomicSwapTransaction(claimRequest, (error: ServiceError | null, response: ClaimShaAtomicSwapResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export function buildTariNodeClient(walletGrpcAddress: string): ITariWalletGrpcClient {
  return new TariWalletGrpcClient(walletGrpcAddress);
}
