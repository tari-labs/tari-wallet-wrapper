import * as jspb from "google-protobuf";

import * as base_node_pb from "./base_node_pb"; // proto import: "base_node.proto"
import * as block_pb from "./block_pb"; // proto import: "block.proto"

export class GetTipInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTipInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTipInfoRequest): GetTipInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetTipInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTipInfoRequest;
  static deserializeBinaryFromReader(message: GetTipInfoRequest, reader: jspb.BinaryReader): GetTipInfoRequest;
}

export namespace GetTipInfoRequest {
  export type AsObject = {};
}

export class GetTipInfoResponse extends jspb.Message {
  getNodeHeight(): number;
  setNodeHeight(value: number): GetTipInfoResponse;

  getNodeTipHash(): Uint8Array | string;
  getNodeTipHash_asU8(): Uint8Array;
  getNodeTipHash_asB64(): string;
  setNodeTipHash(value: Uint8Array | string): GetTipInfoResponse;

  getP2poolRxHeight(): number;
  setP2poolRxHeight(value: number): GetTipInfoResponse;

  getP2poolRxTipHash(): Uint8Array | string;
  getP2poolRxTipHash_asU8(): Uint8Array;
  getP2poolRxTipHash_asB64(): string;
  setP2poolRxTipHash(value: Uint8Array | string): GetTipInfoResponse;

  getP2poolShaHeight(): number;
  setP2poolShaHeight(value: number): GetTipInfoResponse;

  getP2poolShaTipHash(): Uint8Array | string;
  getP2poolShaTipHash_asU8(): Uint8Array;
  getP2poolShaTipHash_asB64(): string;
  setP2poolShaTipHash(value: Uint8Array | string): GetTipInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTipInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTipInfoResponse): GetTipInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetTipInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTipInfoResponse;
  static deserializeBinaryFromReader(message: GetTipInfoResponse, reader: jspb.BinaryReader): GetTipInfoResponse;
}

export namespace GetTipInfoResponse {
  export type AsObject = {
    nodeHeight: number;
    nodeTipHash: Uint8Array | string;
    p2poolRxHeight: number;
    p2poolRxTipHash: Uint8Array | string;
    p2poolShaHeight: number;
    p2poolShaTipHash: Uint8Array | string;
  };
}

export class GetNewBlockRequest extends jspb.Message {
  getPow(): block_pb.PowAlgo | undefined;
  setPow(value?: block_pb.PowAlgo): GetNewBlockRequest;
  hasPow(): boolean;
  clearPow(): GetNewBlockRequest;

  getCoinbaseExtra(): string;
  setCoinbaseExtra(value: string): GetNewBlockRequest;

  getWalletPaymentAddress(): string;
  setWalletPaymentAddress(value: string): GetNewBlockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewBlockRequest): GetNewBlockRequest.AsObject;
  static serializeBinaryToWriter(message: GetNewBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewBlockRequest;
  static deserializeBinaryFromReader(message: GetNewBlockRequest, reader: jspb.BinaryReader): GetNewBlockRequest;
}

export namespace GetNewBlockRequest {
  export type AsObject = {
    pow?: block_pb.PowAlgo.AsObject;
    coinbaseExtra: string;
    walletPaymentAddress: string;
  };
}

export class GetNewBlockResponse extends jspb.Message {
  getBlock(): base_node_pb.GetNewBlockResult | undefined;
  setBlock(value?: base_node_pb.GetNewBlockResult): GetNewBlockResponse;
  hasBlock(): boolean;
  clearBlock(): GetNewBlockResponse;

  getTargetDifficulty(): number;
  setTargetDifficulty(value: number): GetNewBlockResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewBlockResponse): GetNewBlockResponse.AsObject;
  static serializeBinaryToWriter(message: GetNewBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewBlockResponse;
  static deserializeBinaryFromReader(message: GetNewBlockResponse, reader: jspb.BinaryReader): GetNewBlockResponse;
}

export namespace GetNewBlockResponse {
  export type AsObject = {
    block?: base_node_pb.GetNewBlockResult.AsObject;
    targetDifficulty: number;
  };
}

export class SubmitBlockRequest extends jspb.Message {
  getBlock(): block_pb.Block | undefined;
  setBlock(value?: block_pb.Block): SubmitBlockRequest;
  hasBlock(): boolean;
  clearBlock(): SubmitBlockRequest;

  getWalletPaymentAddress(): string;
  setWalletPaymentAddress(value: string): SubmitBlockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitBlockRequest): SubmitBlockRequest.AsObject;
  static serializeBinaryToWriter(message: SubmitBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitBlockRequest;
  static deserializeBinaryFromReader(message: SubmitBlockRequest, reader: jspb.BinaryReader): SubmitBlockRequest;
}

export namespace SubmitBlockRequest {
  export type AsObject = {
    block?: block_pb.Block.AsObject;
    walletPaymentAddress: string;
  };
}
