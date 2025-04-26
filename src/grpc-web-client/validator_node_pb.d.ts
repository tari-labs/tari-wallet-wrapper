import * as jspb from "google-protobuf";

import * as types_pb from "./types_pb"; // proto import: "types.proto"
import * as network_pb from "./network_pb"; // proto import: "network.proto"
import * as transaction_pb from "./transaction_pb"; // proto import: "transaction.proto"

export class GetConstitutionRequestsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConstitutionRequestsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetConstitutionRequestsRequest,
  ): GetConstitutionRequestsRequest.AsObject;
  static serializeBinaryToWriter(message: GetConstitutionRequestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConstitutionRequestsRequest;
  static deserializeBinaryFromReader(
    message: GetConstitutionRequestsRequest,
    reader: jspb.BinaryReader,
  ): GetConstitutionRequestsRequest;
}

export namespace GetConstitutionRequestsRequest {
  export type AsObject = {};
}

export class GetMetadataRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetadataRequest): GetMetadataRequest.AsObject;
  static serializeBinaryToWriter(message: GetMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetadataRequest;
  static deserializeBinaryFromReader(message: GetMetadataRequest, reader: jspb.BinaryReader): GetMetadataRequest;
}

export namespace GetMetadataRequest {
  export type AsObject = {};
}

export class PublishContractAcceptanceRequest extends jspb.Message {
  getContractId(): Uint8Array | string;
  getContractId_asU8(): Uint8Array;
  getContractId_asB64(): string;
  setContractId(value: Uint8Array | string): PublishContractAcceptanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishContractAcceptanceRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PublishContractAcceptanceRequest,
  ): PublishContractAcceptanceRequest.AsObject;
  static serializeBinaryToWriter(message: PublishContractAcceptanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishContractAcceptanceRequest;
  static deserializeBinaryFromReader(
    message: PublishContractAcceptanceRequest,
    reader: jspb.BinaryReader,
  ): PublishContractAcceptanceRequest;
}

export namespace PublishContractAcceptanceRequest {
  export type AsObject = {
    contractId: Uint8Array | string;
  };
}

export class PublishContractAcceptanceResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): PublishContractAcceptanceResponse;

  getTxId(): number;
  setTxId(value: number): PublishContractAcceptanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishContractAcceptanceResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PublishContractAcceptanceResponse,
  ): PublishContractAcceptanceResponse.AsObject;
  static serializeBinaryToWriter(message: PublishContractAcceptanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishContractAcceptanceResponse;
  static deserializeBinaryFromReader(
    message: PublishContractAcceptanceResponse,
    reader: jspb.BinaryReader,
  ): PublishContractAcceptanceResponse;
}

export namespace PublishContractAcceptanceResponse {
  export type AsObject = {
    status: string;
    txId: number;
  };
}

export class PublishContractUpdateProposalAcceptanceRequest extends jspb.Message {
  getContractId(): Uint8Array | string;
  getContractId_asU8(): Uint8Array;
  getContractId_asB64(): string;
  setContractId(value: Uint8Array | string): PublishContractUpdateProposalAcceptanceRequest;

  getProposalId(): number;
  setProposalId(value: number): PublishContractUpdateProposalAcceptanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishContractUpdateProposalAcceptanceRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PublishContractUpdateProposalAcceptanceRequest,
  ): PublishContractUpdateProposalAcceptanceRequest.AsObject;
  static serializeBinaryToWriter(
    message: PublishContractUpdateProposalAcceptanceRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): PublishContractUpdateProposalAcceptanceRequest;
  static deserializeBinaryFromReader(
    message: PublishContractUpdateProposalAcceptanceRequest,
    reader: jspb.BinaryReader,
  ): PublishContractUpdateProposalAcceptanceRequest;
}

export namespace PublishContractUpdateProposalAcceptanceRequest {
  export type AsObject = {
    contractId: Uint8Array | string;
    proposalId: number;
  };
}

export class PublishContractUpdateProposalAcceptanceResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): PublishContractUpdateProposalAcceptanceResponse;

  getTxId(): number;
  setTxId(value: number): PublishContractUpdateProposalAcceptanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishContractUpdateProposalAcceptanceResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PublishContractUpdateProposalAcceptanceResponse,
  ): PublishContractUpdateProposalAcceptanceResponse.AsObject;
  static serializeBinaryToWriter(
    message: PublishContractUpdateProposalAcceptanceResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): PublishContractUpdateProposalAcceptanceResponse;
  static deserializeBinaryFromReader(
    message: PublishContractUpdateProposalAcceptanceResponse,
    reader: jspb.BinaryReader,
  ): PublishContractUpdateProposalAcceptanceResponse;
}

export namespace PublishContractUpdateProposalAcceptanceResponse {
  export type AsObject = {
    status: string;
    txId: number;
  };
}

export class GetMetadataResponse extends jspb.Message {
  getSidechainsList(): Array<SidechainMetadata>;
  setSidechainsList(value: Array<SidechainMetadata>): GetMetadataResponse;
  clearSidechainsList(): GetMetadataResponse;
  addSidechains(value?: SidechainMetadata, index?: number): SidechainMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetadataResponse): GetMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: GetMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetadataResponse;
  static deserializeBinaryFromReader(message: GetMetadataResponse, reader: jspb.BinaryReader): GetMetadataResponse;
}

export namespace GetMetadataResponse {
  export type AsObject = {
    sidechainsList: Array<SidechainMetadata.AsObject>;
  };
}

export class SidechainMetadata extends jspb.Message {
  getAssetPublicKey(): Uint8Array | string;
  getAssetPublicKey_asU8(): Uint8Array;
  getAssetPublicKey_asB64(): string;
  setAssetPublicKey(value: Uint8Array | string): SidechainMetadata;

  getCommittedHeight(): number;
  setCommittedHeight(value: number): SidechainMetadata;

  getCommittedHash(): Uint8Array | string;
  getCommittedHash_asU8(): Uint8Array;
  getCommittedHash_asB64(): string;
  setCommittedHash(value: Uint8Array | string): SidechainMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SidechainMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: SidechainMetadata): SidechainMetadata.AsObject;
  static serializeBinaryToWriter(message: SidechainMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SidechainMetadata;
  static deserializeBinaryFromReader(message: SidechainMetadata, reader: jspb.BinaryReader): SidechainMetadata;
}

export namespace SidechainMetadata {
  export type AsObject = {
    assetPublicKey: Uint8Array | string;
    committedHeight: number;
    committedHash: Uint8Array | string;
  };
}

export class GetTokenDataRequest extends jspb.Message {
  getAssetPubKey(): Uint8Array | string;
  getAssetPubKey_asU8(): Uint8Array;
  getAssetPubKey_asB64(): string;
  setAssetPubKey(value: Uint8Array | string): GetTokenDataRequest;

  getUniqueId(): Uint8Array | string;
  getUniqueId_asU8(): Uint8Array;
  getUniqueId_asB64(): string;
  setUniqueId(value: Uint8Array | string): GetTokenDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokenDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokenDataRequest): GetTokenDataRequest.AsObject;
  static serializeBinaryToWriter(message: GetTokenDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokenDataRequest;
  static deserializeBinaryFromReader(message: GetTokenDataRequest, reader: jspb.BinaryReader): GetTokenDataRequest;
}

export namespace GetTokenDataRequest {
  export type AsObject = {
    assetPubKey: Uint8Array | string;
    uniqueId: Uint8Array | string;
  };
}

export class GetTokenDataResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokenDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokenDataResponse): GetTokenDataResponse.AsObject;
  static serializeBinaryToWriter(message: GetTokenDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokenDataResponse;
  static deserializeBinaryFromReader(message: GetTokenDataResponse, reader: jspb.BinaryReader): GetTokenDataResponse;
}

export namespace GetTokenDataResponse {
  export type AsObject = {};
}

export class InvokeReadMethodRequest extends jspb.Message {
  getContractId(): Uint8Array | string;
  getContractId_asU8(): Uint8Array;
  getContractId_asB64(): string;
  setContractId(value: Uint8Array | string): InvokeReadMethodRequest;

  getTemplateId(): number;
  setTemplateId(value: number): InvokeReadMethodRequest;

  getMethod(): string;
  setMethod(value: string): InvokeReadMethodRequest;

  getArgs(): Uint8Array | string;
  getArgs_asU8(): Uint8Array;
  getArgs_asB64(): string;
  setArgs(value: Uint8Array | string): InvokeReadMethodRequest;

  getSender(): Uint8Array | string;
  getSender_asU8(): Uint8Array;
  getSender_asB64(): string;
  setSender(value: Uint8Array | string): InvokeReadMethodRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokeReadMethodRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InvokeReadMethodRequest): InvokeReadMethodRequest.AsObject;
  static serializeBinaryToWriter(message: InvokeReadMethodRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokeReadMethodRequest;
  static deserializeBinaryFromReader(
    message: InvokeReadMethodRequest,
    reader: jspb.BinaryReader,
  ): InvokeReadMethodRequest;
}

export namespace InvokeReadMethodRequest {
  export type AsObject = {
    contractId: Uint8Array | string;
    templateId: number;
    method: string;
    args: Uint8Array | string;
    sender: Uint8Array | string;
  };
}

export class InvokeReadMethodResponse extends jspb.Message {
  getResult(): Uint8Array | string;
  getResult_asU8(): Uint8Array;
  getResult_asB64(): string;
  setResult(value: Uint8Array | string): InvokeReadMethodResponse;

  getAuthority(): Authority | undefined;
  setAuthority(value?: Authority): InvokeReadMethodResponse;
  hasAuthority(): boolean;
  clearAuthority(): InvokeReadMethodResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokeReadMethodResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InvokeReadMethodResponse): InvokeReadMethodResponse.AsObject;
  static serializeBinaryToWriter(message: InvokeReadMethodResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokeReadMethodResponse;
  static deserializeBinaryFromReader(
    message: InvokeReadMethodResponse,
    reader: jspb.BinaryReader,
  ): InvokeReadMethodResponse;
}

export namespace InvokeReadMethodResponse {
  export type AsObject = {
    result: Uint8Array | string;
    authority?: Authority.AsObject;
  };
}

export class Authority extends jspb.Message {
  getNodePublicKey(): Uint8Array | string;
  getNodePublicKey_asU8(): Uint8Array;
  getNodePublicKey_asB64(): string;
  setNodePublicKey(value: Uint8Array | string): Authority;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): Authority;

  getProxiedBy(): Uint8Array | string;
  getProxiedBy_asU8(): Uint8Array;
  getProxiedBy_asB64(): string;
  setProxiedBy(value: Uint8Array | string): Authority;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Authority.AsObject;
  static toObject(includeInstance: boolean, msg: Authority): Authority.AsObject;
  static serializeBinaryToWriter(message: Authority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Authority;
  static deserializeBinaryFromReader(message: Authority, reader: jspb.BinaryReader): Authority;
}

export namespace Authority {
  export type AsObject = {
    nodePublicKey: Uint8Array | string;
    signature: Uint8Array | string;
    proxiedBy: Uint8Array | string;
  };
}

export class InvokeMethodRequest extends jspb.Message {
  getContractId(): Uint8Array | string;
  getContractId_asU8(): Uint8Array;
  getContractId_asB64(): string;
  setContractId(value: Uint8Array | string): InvokeMethodRequest;

  getTemplateId(): number;
  setTemplateId(value: number): InvokeMethodRequest;

  getMethod(): string;
  setMethod(value: string): InvokeMethodRequest;

  getArgs(): Uint8Array | string;
  getArgs_asU8(): Uint8Array;
  getArgs_asB64(): string;
  setArgs(value: Uint8Array | string): InvokeMethodRequest;

  getSender(): Uint8Array | string;
  getSender_asU8(): Uint8Array;
  getSender_asB64(): string;
  setSender(value: Uint8Array | string): InvokeMethodRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokeMethodRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InvokeMethodRequest): InvokeMethodRequest.AsObject;
  static serializeBinaryToWriter(message: InvokeMethodRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokeMethodRequest;
  static deserializeBinaryFromReader(message: InvokeMethodRequest, reader: jspb.BinaryReader): InvokeMethodRequest;
}

export namespace InvokeMethodRequest {
  export type AsObject = {
    contractId: Uint8Array | string;
    templateId: number;
    method: string;
    args: Uint8Array | string;
    sender: Uint8Array | string;
  };
}

export class InvokeMethodResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): InvokeMethodResponse;

  getResult(): Uint8Array | string;
  getResult_asU8(): Uint8Array;
  getResult_asB64(): string;
  setResult(value: Uint8Array | string): InvokeMethodResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokeMethodResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InvokeMethodResponse): InvokeMethodResponse.AsObject;
  static serializeBinaryToWriter(message: InvokeMethodResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokeMethodResponse;
  static deserializeBinaryFromReader(message: InvokeMethodResponse, reader: jspb.BinaryReader): InvokeMethodResponse;
}

export namespace InvokeMethodResponse {
  export type AsObject = {
    status: string;
    result: Uint8Array | string;
  };
}
