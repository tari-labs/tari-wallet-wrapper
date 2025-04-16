import { ChannelCredentials, ServiceError } from "@grpc/grpc-js";

import {
  CheckConnectivityResponse,
  GetAddressResponse,
  GetBalanceResponse,
  GetStateResponse,
  GetVersionResponse,
  TransferRequest,
  TransferResponse,
  WalletClient,
} from "./client/wallet";
import { GetIdentityResponse } from "./client/network";

export interface ITariWalletGrpcClient {
  close(): void;
  getVersion(): Promise<GetVersionResponse>;
  getState(): Promise<GetStateResponse>;
  checkConnectivity(): Promise<CheckConnectivityResponse>;
  identify(): Promise<GetIdentityResponse>;
  getBalance(): Promise<GetBalanceResponse>;
  getAddress(): Promise<GetAddressResponse>;
  transfer(transferRequest: TransferRequest): Promise<TransferResponse>;
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

  public async getBalance(): Promise<GetBalanceResponse> {
    const stateResponse = await new Promise<GetBalanceResponse>((resolve, reject) => {
      this.client.getBalance({}, (error: ServiceError | null, response: GetBalanceResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
    return stateResponse;
  }

  public async getAddress(): Promise<GetAddressResponse> {
    const stateResponse = await new Promise<GetAddressResponse>((resolve, reject) => {
      this.client.getAddress({}, (error: ServiceError | null, response: GetAddressResponse) => {
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
}

export function buildTariNodeClient(walletGrpcAddress: string): ITariWalletGrpcClient {
  return new TariWalletGrpcClient(walletGrpcAddress);
}
