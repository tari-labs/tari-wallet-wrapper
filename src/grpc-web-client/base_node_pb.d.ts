import * as jspb from "google-protobuf";

import * as types_pb from "./types_pb"; // proto import: "types.proto"
import * as transaction_pb from "./transaction_pb"; // proto import: "transaction.proto"
import * as block_pb from "./block_pb"; // proto import: "block.proto"
import * as network_pb from "./network_pb"; // proto import: "network.proto"
import * as sidechain_types_pb from "./sidechain_types_pb"; // proto import: "sidechain_types.proto"

export class GetAssetMetadataRequest extends jspb.Message {
  getAssetPublicKey(): Uint8Array | string;
  getAssetPublicKey_asU8(): Uint8Array;
  getAssetPublicKey_asB64(): string;
  setAssetPublicKey(value: Uint8Array | string): GetAssetMetadataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssetMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssetMetadataRequest): GetAssetMetadataRequest.AsObject;
  static serializeBinaryToWriter(message: GetAssetMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssetMetadataRequest;
  static deserializeBinaryFromReader(
    message: GetAssetMetadataRequest,
    reader: jspb.BinaryReader,
  ): GetAssetMetadataRequest;
}

export namespace GetAssetMetadataRequest {
  export type AsObject = {
    assetPublicKey: Uint8Array | string;
  };
}

export class GetAssetMetadataResponse extends jspb.Message {
  getName(): string;
  setName(value: string): GetAssetMetadataResponse;

  getDescription(): string;
  setDescription(value: string): GetAssetMetadataResponse;

  getImage(): string;
  setImage(value: string): GetAssetMetadataResponse;

  getOwnerCommitment(): Uint8Array | string;
  getOwnerCommitment_asU8(): Uint8Array;
  getOwnerCommitment_asB64(): string;
  setOwnerCommitment(value: Uint8Array | string): GetAssetMetadataResponse;

  getFeatures(): transaction_pb.OutputFeatures | undefined;
  setFeatures(value?: transaction_pb.OutputFeatures): GetAssetMetadataResponse;
  hasFeatures(): boolean;
  clearFeatures(): GetAssetMetadataResponse;

  getMinedHeight(): number;
  setMinedHeight(value: number): GetAssetMetadataResponse;

  getMinedInBlock(): Uint8Array | string;
  getMinedInBlock_asU8(): Uint8Array;
  getMinedInBlock_asB64(): string;
  setMinedInBlock(value: Uint8Array | string): GetAssetMetadataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssetMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssetMetadataResponse): GetAssetMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: GetAssetMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssetMetadataResponse;
  static deserializeBinaryFromReader(
    message: GetAssetMetadataResponse,
    reader: jspb.BinaryReader,
  ): GetAssetMetadataResponse;
}

export namespace GetAssetMetadataResponse {
  export type AsObject = {
    name: string;
    description: string;
    image: string;
    ownerCommitment: Uint8Array | string;
    features?: transaction_pb.OutputFeatures.AsObject;
    minedHeight: number;
    minedInBlock: Uint8Array | string;
  };
}

export class ListAssetRegistrationsRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): ListAssetRegistrationsRequest;

  getCount(): number;
  setCount(value: number): ListAssetRegistrationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssetRegistrationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssetRegistrationsRequest): ListAssetRegistrationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAssetRegistrationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssetRegistrationsRequest;
  static deserializeBinaryFromReader(
    message: ListAssetRegistrationsRequest,
    reader: jspb.BinaryReader,
  ): ListAssetRegistrationsRequest;
}

export namespace ListAssetRegistrationsRequest {
  export type AsObject = {
    offset: number;
    count: number;
  };
}

export class ListAssetRegistrationsResponse extends jspb.Message {
  getAssetPublicKey(): Uint8Array | string;
  getAssetPublicKey_asU8(): Uint8Array;
  getAssetPublicKey_asB64(): string;
  setAssetPublicKey(value: Uint8Array | string): ListAssetRegistrationsResponse;

  getUniqueId(): Uint8Array | string;
  getUniqueId_asU8(): Uint8Array;
  getUniqueId_asB64(): string;
  setUniqueId(value: Uint8Array | string): ListAssetRegistrationsResponse;

  getOwnerCommitment(): Uint8Array | string;
  getOwnerCommitment_asU8(): Uint8Array;
  getOwnerCommitment_asB64(): string;
  setOwnerCommitment(value: Uint8Array | string): ListAssetRegistrationsResponse;

  getMinedHeight(): number;
  setMinedHeight(value: number): ListAssetRegistrationsResponse;

  getMinedInBlock(): Uint8Array | string;
  getMinedInBlock_asU8(): Uint8Array;
  getMinedInBlock_asB64(): string;
  setMinedInBlock(value: Uint8Array | string): ListAssetRegistrationsResponse;

  getFeatures(): transaction_pb.OutputFeatures | undefined;
  setFeatures(value?: transaction_pb.OutputFeatures): ListAssetRegistrationsResponse;
  hasFeatures(): boolean;
  clearFeatures(): ListAssetRegistrationsResponse;

  getScript(): Uint8Array | string;
  getScript_asU8(): Uint8Array;
  getScript_asB64(): string;
  setScript(value: Uint8Array | string): ListAssetRegistrationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssetRegistrationsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListAssetRegistrationsResponse,
  ): ListAssetRegistrationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAssetRegistrationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssetRegistrationsResponse;
  static deserializeBinaryFromReader(
    message: ListAssetRegistrationsResponse,
    reader: jspb.BinaryReader,
  ): ListAssetRegistrationsResponse;
}

export namespace ListAssetRegistrationsResponse {
  export type AsObject = {
    assetPublicKey: Uint8Array | string;
    uniqueId: Uint8Array | string;
    ownerCommitment: Uint8Array | string;
    minedHeight: number;
    minedInBlock: Uint8Array | string;
    features?: transaction_pb.OutputFeatures.AsObject;
    script: Uint8Array | string;
  };
}

export class GetTokensRequest extends jspb.Message {
  getAssetPublicKey(): Uint8Array | string;
  getAssetPublicKey_asU8(): Uint8Array;
  getAssetPublicKey_asB64(): string;
  setAssetPublicKey(value: Uint8Array | string): GetTokensRequest;

  getUniqueIdsList(): Array<Uint8Array | string>;
  setUniqueIdsList(value: Array<Uint8Array | string>): GetTokensRequest;
  clearUniqueIdsList(): GetTokensRequest;
  addUniqueIds(value: Uint8Array | string, index?: number): GetTokensRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokensRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokensRequest): GetTokensRequest.AsObject;
  static serializeBinaryToWriter(message: GetTokensRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokensRequest;
  static deserializeBinaryFromReader(message: GetTokensRequest, reader: jspb.BinaryReader): GetTokensRequest;
}

export namespace GetTokensRequest {
  export type AsObject = {
    assetPublicKey: Uint8Array | string;
    uniqueIdsList: Array<Uint8Array | string>;
  };
}

export class GetTokensResponse extends jspb.Message {
  getUniqueId(): Uint8Array | string;
  getUniqueId_asU8(): Uint8Array;
  getUniqueId_asB64(): string;
  setUniqueId(value: Uint8Array | string): GetTokensResponse;

  getAssetPublicKey(): Uint8Array | string;
  getAssetPublicKey_asU8(): Uint8Array;
  getAssetPublicKey_asB64(): string;
  setAssetPublicKey(value: Uint8Array | string): GetTokensResponse;

  getOwnerCommitment(): Uint8Array | string;
  getOwnerCommitment_asU8(): Uint8Array;
  getOwnerCommitment_asB64(): string;
  setOwnerCommitment(value: Uint8Array | string): GetTokensResponse;

  getMinedInBlock(): Uint8Array | string;
  getMinedInBlock_asU8(): Uint8Array;
  getMinedInBlock_asB64(): string;
  setMinedInBlock(value: Uint8Array | string): GetTokensResponse;

  getMinedHeight(): number;
  setMinedHeight(value: number): GetTokensResponse;

  getFeatures(): transaction_pb.OutputFeatures | undefined;
  setFeatures(value?: transaction_pb.OutputFeatures): GetTokensResponse;
  hasFeatures(): boolean;
  clearFeatures(): GetTokensResponse;

  getScript(): Uint8Array | string;
  getScript_asU8(): Uint8Array;
  getScript_asB64(): string;
  setScript(value: Uint8Array | string): GetTokensResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokensResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokensResponse): GetTokensResponse.AsObject;
  static serializeBinaryToWriter(message: GetTokensResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokensResponse;
  static deserializeBinaryFromReader(message: GetTokensResponse, reader: jspb.BinaryReader): GetTokensResponse;
}

export namespace GetTokensResponse {
  export type AsObject = {
    uniqueId: Uint8Array | string;
    assetPublicKey: Uint8Array | string;
    ownerCommitment: Uint8Array | string;
    minedInBlock: Uint8Array | string;
    minedHeight: number;
    features?: transaction_pb.OutputFeatures.AsObject;
    script: Uint8Array | string;
  };
}

export class SubmitBlockResponse extends jspb.Message {
  getBlockHash(): Uint8Array | string;
  getBlockHash_asU8(): Uint8Array;
  getBlockHash_asB64(): string;
  setBlockHash(value: Uint8Array | string): SubmitBlockResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitBlockResponse): SubmitBlockResponse.AsObject;
  static serializeBinaryToWriter(message: SubmitBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitBlockResponse;
  static deserializeBinaryFromReader(message: SubmitBlockResponse, reader: jspb.BinaryReader): SubmitBlockResponse;
}

export namespace SubmitBlockResponse {
  export type AsObject = {
    blockHash: Uint8Array | string;
  };
}

export class BlockBlobRequest extends jspb.Message {
  getHeaderBlob(): Uint8Array | string;
  getHeaderBlob_asU8(): Uint8Array;
  getHeaderBlob_asB64(): string;
  setHeaderBlob(value: Uint8Array | string): BlockBlobRequest;

  getBodyBlob(): Uint8Array | string;
  getBodyBlob_asU8(): Uint8Array;
  getBodyBlob_asB64(): string;
  setBodyBlob(value: Uint8Array | string): BlockBlobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockBlobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlockBlobRequest): BlockBlobRequest.AsObject;
  static serializeBinaryToWriter(message: BlockBlobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockBlobRequest;
  static deserializeBinaryFromReader(message: BlockBlobRequest, reader: jspb.BinaryReader): BlockBlobRequest;
}

export namespace BlockBlobRequest {
  export type AsObject = {
    headerBlob: Uint8Array | string;
    bodyBlob: Uint8Array | string;
  };
}

export class TipInfoResponse extends jspb.Message {
  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): TipInfoResponse;
  hasMetadata(): boolean;
  clearMetadata(): TipInfoResponse;

  getInitialSyncAchieved(): boolean;
  setInitialSyncAchieved(value: boolean): TipInfoResponse;

  getBaseNodeState(): BaseNodeState;
  setBaseNodeState(value: BaseNodeState): TipInfoResponse;

  getFailedCheckpoints(): boolean;
  setFailedCheckpoints(value: boolean): TipInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TipInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TipInfoResponse): TipInfoResponse.AsObject;
  static serializeBinaryToWriter(message: TipInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TipInfoResponse;
  static deserializeBinaryFromReader(message: TipInfoResponse, reader: jspb.BinaryReader): TipInfoResponse;
}

export namespace TipInfoResponse {
  export type AsObject = {
    metadata?: MetaData.AsObject;
    initialSyncAchieved: boolean;
    baseNodeState: BaseNodeState;
    failedCheckpoints: boolean;
  };
}

export class NewBlockTemplateResponse extends jspb.Message {
  getNewBlockTemplate(): block_pb.NewBlockTemplate | undefined;
  setNewBlockTemplate(value?: block_pb.NewBlockTemplate): NewBlockTemplateResponse;
  hasNewBlockTemplate(): boolean;
  clearNewBlockTemplate(): NewBlockTemplateResponse;

  getInitialSyncAchieved(): boolean;
  setInitialSyncAchieved(value: boolean): NewBlockTemplateResponse;

  getMinerData(): MinerData | undefined;
  setMinerData(value?: MinerData): NewBlockTemplateResponse;
  hasMinerData(): boolean;
  clearMinerData(): NewBlockTemplateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewBlockTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewBlockTemplateResponse): NewBlockTemplateResponse.AsObject;
  static serializeBinaryToWriter(message: NewBlockTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewBlockTemplateResponse;
  static deserializeBinaryFromReader(
    message: NewBlockTemplateResponse,
    reader: jspb.BinaryReader,
  ): NewBlockTemplateResponse;
}

export namespace NewBlockTemplateResponse {
  export type AsObject = {
    newBlockTemplate?: block_pb.NewBlockTemplate.AsObject;
    initialSyncAchieved: boolean;
    minerData?: MinerData.AsObject;
  };
}

export class NewBlockTemplateRequest extends jspb.Message {
  getAlgo(): block_pb.PowAlgo | undefined;
  setAlgo(value?: block_pb.PowAlgo): NewBlockTemplateRequest;
  hasAlgo(): boolean;
  clearAlgo(): NewBlockTemplateRequest;

  getMaxWeight(): number;
  setMaxWeight(value: number): NewBlockTemplateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewBlockTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewBlockTemplateRequest): NewBlockTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: NewBlockTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewBlockTemplateRequest;
  static deserializeBinaryFromReader(
    message: NewBlockTemplateRequest,
    reader: jspb.BinaryReader,
  ): NewBlockTemplateRequest;
}

export namespace NewBlockTemplateRequest {
  export type AsObject = {
    algo?: block_pb.PowAlgo.AsObject;
    maxWeight: number;
  };
}

export class GetNewBlockTemplateWithCoinbasesRequest extends jspb.Message {
  getAlgo(): block_pb.PowAlgo | undefined;
  setAlgo(value?: block_pb.PowAlgo): GetNewBlockTemplateWithCoinbasesRequest;
  hasAlgo(): boolean;
  clearAlgo(): GetNewBlockTemplateWithCoinbasesRequest;

  getMaxWeight(): number;
  setMaxWeight(value: number): GetNewBlockTemplateWithCoinbasesRequest;

  getCoinbasesList(): Array<NewBlockCoinbase>;
  setCoinbasesList(value: Array<NewBlockCoinbase>): GetNewBlockTemplateWithCoinbasesRequest;
  clearCoinbasesList(): GetNewBlockTemplateWithCoinbasesRequest;
  addCoinbases(value?: NewBlockCoinbase, index?: number): NewBlockCoinbase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewBlockTemplateWithCoinbasesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetNewBlockTemplateWithCoinbasesRequest,
  ): GetNewBlockTemplateWithCoinbasesRequest.AsObject;
  static serializeBinaryToWriter(message: GetNewBlockTemplateWithCoinbasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewBlockTemplateWithCoinbasesRequest;
  static deserializeBinaryFromReader(
    message: GetNewBlockTemplateWithCoinbasesRequest,
    reader: jspb.BinaryReader,
  ): GetNewBlockTemplateWithCoinbasesRequest;
}

export namespace GetNewBlockTemplateWithCoinbasesRequest {
  export type AsObject = {
    algo?: block_pb.PowAlgo.AsObject;
    maxWeight: number;
    coinbasesList: Array<NewBlockCoinbase.AsObject>;
  };
}

export class GetNewBlockWithCoinbasesRequest extends jspb.Message {
  getNewTemplate(): block_pb.NewBlockTemplate | undefined;
  setNewTemplate(value?: block_pb.NewBlockTemplate): GetNewBlockWithCoinbasesRequest;
  hasNewTemplate(): boolean;
  clearNewTemplate(): GetNewBlockWithCoinbasesRequest;

  getCoinbasesList(): Array<NewBlockCoinbase>;
  setCoinbasesList(value: Array<NewBlockCoinbase>): GetNewBlockWithCoinbasesRequest;
  clearCoinbasesList(): GetNewBlockWithCoinbasesRequest;
  addCoinbases(value?: NewBlockCoinbase, index?: number): NewBlockCoinbase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewBlockWithCoinbasesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetNewBlockWithCoinbasesRequest,
  ): GetNewBlockWithCoinbasesRequest.AsObject;
  static serializeBinaryToWriter(message: GetNewBlockWithCoinbasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewBlockWithCoinbasesRequest;
  static deserializeBinaryFromReader(
    message: GetNewBlockWithCoinbasesRequest,
    reader: jspb.BinaryReader,
  ): GetNewBlockWithCoinbasesRequest;
}

export namespace GetNewBlockWithCoinbasesRequest {
  export type AsObject = {
    newTemplate?: block_pb.NewBlockTemplate.AsObject;
    coinbasesList: Array<NewBlockCoinbase.AsObject>;
  };
}

export class NewBlockCoinbase extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): NewBlockCoinbase;

  getValue(): number;
  setValue(value: number): NewBlockCoinbase;

  getStealthPayment(): boolean;
  setStealthPayment(value: boolean): NewBlockCoinbase;

  getRevealedValueProof(): boolean;
  setRevealedValueProof(value: boolean): NewBlockCoinbase;

  getCoinbaseExtra(): Uint8Array | string;
  getCoinbaseExtra_asU8(): Uint8Array;
  getCoinbaseExtra_asB64(): string;
  setCoinbaseExtra(value: Uint8Array | string): NewBlockCoinbase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewBlockCoinbase.AsObject;
  static toObject(includeInstance: boolean, msg: NewBlockCoinbase): NewBlockCoinbase.AsObject;
  static serializeBinaryToWriter(message: NewBlockCoinbase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewBlockCoinbase;
  static deserializeBinaryFromReader(message: NewBlockCoinbase, reader: jspb.BinaryReader): NewBlockCoinbase;
}

export namespace NewBlockCoinbase {
  export type AsObject = {
    address: string;
    value: number;
    stealthPayment: boolean;
    revealedValueProof: boolean;
    coinbaseExtra: Uint8Array | string;
  };
}

export class NetworkDifficultyResponse extends jspb.Message {
  getDifficulty(): number;
  setDifficulty(value: number): NetworkDifficultyResponse;

  getEstimatedHashRate(): number;
  setEstimatedHashRate(value: number): NetworkDifficultyResponse;

  getHeight(): number;
  setHeight(value: number): NetworkDifficultyResponse;

  getTimestamp(): number;
  setTimestamp(value: number): NetworkDifficultyResponse;

  getPowAlgo(): number;
  setPowAlgo(value: number): NetworkDifficultyResponse;

  getSha3xEstimatedHashRate(): number;
  setSha3xEstimatedHashRate(value: number): NetworkDifficultyResponse;

  getRandomxEstimatedHashRate(): number;
  setRandomxEstimatedHashRate(value: number): NetworkDifficultyResponse;

  getNumCoinbases(): number;
  setNumCoinbases(value: number): NetworkDifficultyResponse;

  getCoinbaseExtrasList(): Array<Uint8Array | string>;
  setCoinbaseExtrasList(value: Array<Uint8Array | string>): NetworkDifficultyResponse;
  clearCoinbaseExtrasList(): NetworkDifficultyResponse;
  addCoinbaseExtras(value: Uint8Array | string, index?: number): NetworkDifficultyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkDifficultyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkDifficultyResponse): NetworkDifficultyResponse.AsObject;
  static serializeBinaryToWriter(message: NetworkDifficultyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkDifficultyResponse;
  static deserializeBinaryFromReader(
    message: NetworkDifficultyResponse,
    reader: jspb.BinaryReader,
  ): NetworkDifficultyResponse;
}

export namespace NetworkDifficultyResponse {
  export type AsObject = {
    difficulty: number;
    estimatedHashRate: number;
    height: number;
    timestamp: number;
    powAlgo: number;
    sha3xEstimatedHashRate: number;
    randomxEstimatedHashRate: number;
    numCoinbases: number;
    coinbaseExtrasList: Array<Uint8Array | string>;
  };
}

export class ValueAtHeightResponse extends jspb.Message {
  getValue(): number;
  setValue(value: number): ValueAtHeightResponse;

  getHeight(): number;
  setHeight(value: number): ValueAtHeightResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueAtHeightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValueAtHeightResponse): ValueAtHeightResponse.AsObject;
  static serializeBinaryToWriter(message: ValueAtHeightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueAtHeightResponse;
  static deserializeBinaryFromReader(message: ValueAtHeightResponse, reader: jspb.BinaryReader): ValueAtHeightResponse;
}

export namespace ValueAtHeightResponse {
  export type AsObject = {
    value: number;
    height: number;
  };
}

export class IntegerValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): IntegerValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegerValue.AsObject;
  static toObject(includeInstance: boolean, msg: IntegerValue): IntegerValue.AsObject;
  static serializeBinaryToWriter(message: IntegerValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegerValue;
  static deserializeBinaryFromReader(message: IntegerValue, reader: jspb.BinaryReader): IntegerValue;
}

export namespace IntegerValue {
  export type AsObject = {
    value: number;
  };
}

export class StringValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): StringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringValue.AsObject;
  static toObject(includeInstance: boolean, msg: StringValue): StringValue.AsObject;
  static serializeBinaryToWriter(message: StringValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringValue;
  static deserializeBinaryFromReader(message: StringValue, reader: jspb.BinaryReader): StringValue;
}

export namespace StringValue {
  export type AsObject = {
    value: string;
  };
}

export class BlockGroupRequest extends jspb.Message {
  getFromTip(): number;
  setFromTip(value: number): BlockGroupRequest;

  getStartHeight(): number;
  setStartHeight(value: number): BlockGroupRequest;

  getEndHeight(): number;
  setEndHeight(value: number): BlockGroupRequest;

  getCalcType(): CalcType;
  setCalcType(value: CalcType): BlockGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlockGroupRequest): BlockGroupRequest.AsObject;
  static serializeBinaryToWriter(message: BlockGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockGroupRequest;
  static deserializeBinaryFromReader(message: BlockGroupRequest, reader: jspb.BinaryReader): BlockGroupRequest;
}

export namespace BlockGroupRequest {
  export type AsObject = {
    fromTip: number;
    startHeight: number;
    endHeight: number;
    calcType: CalcType;
  };
}

export class BlockGroupResponse extends jspb.Message {
  getValueList(): Array<number>;
  setValueList(value: Array<number>): BlockGroupResponse;
  clearValueList(): BlockGroupResponse;
  addValue(value: number, index?: number): BlockGroupResponse;

  getCalcType(): CalcType;
  setCalcType(value: CalcType): BlockGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockGroupResponse): BlockGroupResponse.AsObject;
  static serializeBinaryToWriter(message: BlockGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockGroupResponse;
  static deserializeBinaryFromReader(message: BlockGroupResponse, reader: jspb.BinaryReader): BlockGroupResponse;
}

export namespace BlockGroupResponse {
  export type AsObject = {
    valueList: Array<number>;
    calcType: CalcType;
  };
}

export class HeightRequest extends jspb.Message {
  getFromTip(): number;
  setFromTip(value: number): HeightRequest;

  getStartHeight(): number;
  setStartHeight(value: number): HeightRequest;

  getEndHeight(): number;
  setEndHeight(value: number): HeightRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HeightRequest): HeightRequest.AsObject;
  static serializeBinaryToWriter(message: HeightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeightRequest;
  static deserializeBinaryFromReader(message: HeightRequest, reader: jspb.BinaryReader): HeightRequest;
}

export namespace HeightRequest {
  export type AsObject = {
    fromTip: number;
    startHeight: number;
    endHeight: number;
  };
}

export class BlockTimingResponse extends jspb.Message {
  getMax(): number;
  setMax(value: number): BlockTimingResponse;

  getMin(): number;
  setMin(value: number): BlockTimingResponse;

  getAvg(): number;
  setAvg(value: number): BlockTimingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockTimingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockTimingResponse): BlockTimingResponse.AsObject;
  static serializeBinaryToWriter(message: BlockTimingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockTimingResponse;
  static deserializeBinaryFromReader(message: BlockTimingResponse, reader: jspb.BinaryReader): BlockTimingResponse;
}

export namespace BlockTimingResponse {
  export type AsObject = {
    max: number;
    min: number;
    avg: number;
  };
}

export class GetHeaderByHashRequest extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): GetHeaderByHashRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHeaderByHashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHeaderByHashRequest): GetHeaderByHashRequest.AsObject;
  static serializeBinaryToWriter(message: GetHeaderByHashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHeaderByHashRequest;
  static deserializeBinaryFromReader(
    message: GetHeaderByHashRequest,
    reader: jspb.BinaryReader,
  ): GetHeaderByHashRequest;
}

export namespace GetHeaderByHashRequest {
  export type AsObject = {
    hash: Uint8Array | string;
  };
}

export class BlockHeaderResponse extends jspb.Message {
  getHeader(): block_pb.BlockHeader | undefined;
  setHeader(value?: block_pb.BlockHeader): BlockHeaderResponse;
  hasHeader(): boolean;
  clearHeader(): BlockHeaderResponse;

  getConfirmations(): number;
  setConfirmations(value: number): BlockHeaderResponse;

  getReward(): number;
  setReward(value: number): BlockHeaderResponse;

  getDifficulty(): number;
  setDifficulty(value: number): BlockHeaderResponse;

  getNumTransactions(): number;
  setNumTransactions(value: number): BlockHeaderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHeaderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockHeaderResponse): BlockHeaderResponse.AsObject;
  static serializeBinaryToWriter(message: BlockHeaderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockHeaderResponse;
  static deserializeBinaryFromReader(message: BlockHeaderResponse, reader: jspb.BinaryReader): BlockHeaderResponse;
}

export namespace BlockHeaderResponse {
  export type AsObject = {
    header?: block_pb.BlockHeader.AsObject;
    confirmations: number;
    reward: number;
    difficulty: number;
    numTransactions: number;
  };
}

export class ListHeadersRequest extends jspb.Message {
  getFromHeight(): number;
  setFromHeight(value: number): ListHeadersRequest;

  getNumHeaders(): number;
  setNumHeaders(value: number): ListHeadersRequest;

  getSorting(): Sorting;
  setSorting(value: Sorting): ListHeadersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHeadersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListHeadersRequest): ListHeadersRequest.AsObject;
  static serializeBinaryToWriter(message: ListHeadersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHeadersRequest;
  static deserializeBinaryFromReader(message: ListHeadersRequest, reader: jspb.BinaryReader): ListHeadersRequest;
}

export namespace ListHeadersRequest {
  export type AsObject = {
    fromHeight: number;
    numHeaders: number;
    sorting: Sorting;
  };
}

export class GetBlocksRequest extends jspb.Message {
  getHeightsList(): Array<number>;
  setHeightsList(value: Array<number>): GetBlocksRequest;
  clearHeightsList(): GetBlocksRequest;
  addHeights(value: number, index?: number): GetBlocksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlocksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlocksRequest): GetBlocksRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlocksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlocksRequest;
  static deserializeBinaryFromReader(message: GetBlocksRequest, reader: jspb.BinaryReader): GetBlocksRequest;
}

export namespace GetBlocksRequest {
  export type AsObject = {
    heightsList: Array<number>;
  };
}

export class GetBlocksResponse extends jspb.Message {
  getBlocksList(): Array<block_pb.HistoricalBlock>;
  setBlocksList(value: Array<block_pb.HistoricalBlock>): GetBlocksResponse;
  clearBlocksList(): GetBlocksResponse;
  addBlocks(value?: block_pb.HistoricalBlock, index?: number): block_pb.HistoricalBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlocksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlocksResponse): GetBlocksResponse.AsObject;
  static serializeBinaryToWriter(message: GetBlocksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlocksResponse;
  static deserializeBinaryFromReader(message: GetBlocksResponse, reader: jspb.BinaryReader): GetBlocksResponse;
}

export namespace GetBlocksResponse {
  export type AsObject = {
    blocksList: Array<block_pb.HistoricalBlock.AsObject>;
  };
}

export class MetaData extends jspb.Message {
  getBestBlockHeight(): number;
  setBestBlockHeight(value: number): MetaData;

  getBestBlockHash(): Uint8Array | string;
  getBestBlockHash_asU8(): Uint8Array;
  getBestBlockHash_asB64(): string;
  setBestBlockHash(value: Uint8Array | string): MetaData;

  getAccumulatedDifficulty(): Uint8Array | string;
  getAccumulatedDifficulty_asU8(): Uint8Array;
  getAccumulatedDifficulty_asB64(): string;
  setAccumulatedDifficulty(value: Uint8Array | string): MetaData;

  getPrunedHeight(): number;
  setPrunedHeight(value: number): MetaData;

  getTimestamp(): number;
  setTimestamp(value: number): MetaData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetaData.AsObject;
  static toObject(includeInstance: boolean, msg: MetaData): MetaData.AsObject;
  static serializeBinaryToWriter(message: MetaData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetaData;
  static deserializeBinaryFromReader(message: MetaData, reader: jspb.BinaryReader): MetaData;
}

export namespace MetaData {
  export type AsObject = {
    bestBlockHeight: number;
    bestBlockHash: Uint8Array | string;
    accumulatedDifficulty: Uint8Array | string;
    prunedHeight: number;
    timestamp: number;
  };
}

export class SyncInfoResponse extends jspb.Message {
  getTipHeight(): number;
  setTipHeight(value: number): SyncInfoResponse;

  getLocalHeight(): number;
  setLocalHeight(value: number): SyncInfoResponse;

  getPeerNodeIdList(): Array<Uint8Array | string>;
  setPeerNodeIdList(value: Array<Uint8Array | string>): SyncInfoResponse;
  clearPeerNodeIdList(): SyncInfoResponse;
  addPeerNodeId(value: Uint8Array | string, index?: number): SyncInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SyncInfoResponse): SyncInfoResponse.AsObject;
  static serializeBinaryToWriter(message: SyncInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncInfoResponse;
  static deserializeBinaryFromReader(message: SyncInfoResponse, reader: jspb.BinaryReader): SyncInfoResponse;
}

export namespace SyncInfoResponse {
  export type AsObject = {
    tipHeight: number;
    localHeight: number;
    peerNodeIdList: Array<Uint8Array | string>;
  };
}

export class SyncProgressResponse extends jspb.Message {
  getTipHeight(): number;
  setTipHeight(value: number): SyncProgressResponse;

  getLocalHeight(): number;
  setLocalHeight(value: number): SyncProgressResponse;

  getState(): SyncState;
  setState(value: SyncState): SyncProgressResponse;

  getShortDesc(): string;
  setShortDesc(value: string): SyncProgressResponse;

  getInitialConnectedPeers(): number;
  setInitialConnectedPeers(value: number): SyncProgressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncProgressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SyncProgressResponse): SyncProgressResponse.AsObject;
  static serializeBinaryToWriter(message: SyncProgressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncProgressResponse;
  static deserializeBinaryFromReader(message: SyncProgressResponse, reader: jspb.BinaryReader): SyncProgressResponse;
}

export namespace SyncProgressResponse {
  export type AsObject = {
    tipHeight: number;
    localHeight: number;
    state: SyncState;
    shortDesc: string;
    initialConnectedPeers: number;
  };
}

export class GetNewBlockResult extends jspb.Message {
  getBlockHash(): Uint8Array | string;
  getBlockHash_asU8(): Uint8Array;
  getBlockHash_asB64(): string;
  setBlockHash(value: Uint8Array | string): GetNewBlockResult;

  getBlock(): block_pb.Block | undefined;
  setBlock(value?: block_pb.Block): GetNewBlockResult;
  hasBlock(): boolean;
  clearBlock(): GetNewBlockResult;

  getMergeMiningHash(): Uint8Array | string;
  getMergeMiningHash_asU8(): Uint8Array;
  getMergeMiningHash_asB64(): string;
  setMergeMiningHash(value: Uint8Array | string): GetNewBlockResult;

  getTariUniqueId(): Uint8Array | string;
  getTariUniqueId_asU8(): Uint8Array;
  getTariUniqueId_asB64(): string;
  setTariUniqueId(value: Uint8Array | string): GetNewBlockResult;

  getMinerData(): MinerData | undefined;
  setMinerData(value?: MinerData): GetNewBlockResult;
  hasMinerData(): boolean;
  clearMinerData(): GetNewBlockResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewBlockResult.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewBlockResult): GetNewBlockResult.AsObject;
  static serializeBinaryToWriter(message: GetNewBlockResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewBlockResult;
  static deserializeBinaryFromReader(message: GetNewBlockResult, reader: jspb.BinaryReader): GetNewBlockResult;
}

export namespace GetNewBlockResult {
  export type AsObject = {
    blockHash: Uint8Array | string;
    block?: block_pb.Block.AsObject;
    mergeMiningHash: Uint8Array | string;
    tariUniqueId: Uint8Array | string;
    minerData?: MinerData.AsObject;
  };
}

export class GetNewBlockBlobResult extends jspb.Message {
  getBlockHash(): Uint8Array | string;
  getBlockHash_asU8(): Uint8Array;
  getBlockHash_asB64(): string;
  setBlockHash(value: Uint8Array | string): GetNewBlockBlobResult;

  getHeader(): Uint8Array | string;
  getHeader_asU8(): Uint8Array;
  getHeader_asB64(): string;
  setHeader(value: Uint8Array | string): GetNewBlockBlobResult;

  getBlockBody(): Uint8Array | string;
  getBlockBody_asU8(): Uint8Array;
  getBlockBody_asB64(): string;
  setBlockBody(value: Uint8Array | string): GetNewBlockBlobResult;

  getMergeMiningHash(): Uint8Array | string;
  getMergeMiningHash_asU8(): Uint8Array;
  getMergeMiningHash_asB64(): string;
  setMergeMiningHash(value: Uint8Array | string): GetNewBlockBlobResult;

  getUtxoMr(): Uint8Array | string;
  getUtxoMr_asU8(): Uint8Array;
  getUtxoMr_asB64(): string;
  setUtxoMr(value: Uint8Array | string): GetNewBlockBlobResult;

  getTariUniqueId(): Uint8Array | string;
  getTariUniqueId_asU8(): Uint8Array;
  getTariUniqueId_asB64(): string;
  setTariUniqueId(value: Uint8Array | string): GetNewBlockBlobResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewBlockBlobResult.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewBlockBlobResult): GetNewBlockBlobResult.AsObject;
  static serializeBinaryToWriter(message: GetNewBlockBlobResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewBlockBlobResult;
  static deserializeBinaryFromReader(message: GetNewBlockBlobResult, reader: jspb.BinaryReader): GetNewBlockBlobResult;
}

export namespace GetNewBlockBlobResult {
  export type AsObject = {
    blockHash: Uint8Array | string;
    header: Uint8Array | string;
    blockBody: Uint8Array | string;
    mergeMiningHash: Uint8Array | string;
    utxoMr: Uint8Array | string;
    tariUniqueId: Uint8Array | string;
  };
}

export class MinerData extends jspb.Message {
  getAlgo(): block_pb.PowAlgo | undefined;
  setAlgo(value?: block_pb.PowAlgo): MinerData;
  hasAlgo(): boolean;
  clearAlgo(): MinerData;

  getTargetDifficulty(): number;
  setTargetDifficulty(value: number): MinerData;

  getReward(): number;
  setReward(value: number): MinerData;

  getTotalFees(): number;
  setTotalFees(value: number): MinerData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinerData.AsObject;
  static toObject(includeInstance: boolean, msg: MinerData): MinerData.AsObject;
  static serializeBinaryToWriter(message: MinerData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinerData;
  static deserializeBinaryFromReader(message: MinerData, reader: jspb.BinaryReader): MinerData;
}

export namespace MinerData {
  export type AsObject = {
    algo?: block_pb.PowAlgo.AsObject;
    targetDifficulty: number;
    reward: number;
    totalFees: number;
  };
}

export class SearchKernelsRequest extends jspb.Message {
  getSignaturesList(): Array<types_pb.Signature>;
  setSignaturesList(value: Array<types_pb.Signature>): SearchKernelsRequest;
  clearSignaturesList(): SearchKernelsRequest;
  addSignatures(value?: types_pb.Signature, index?: number): types_pb.Signature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchKernelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchKernelsRequest): SearchKernelsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchKernelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchKernelsRequest;
  static deserializeBinaryFromReader(message: SearchKernelsRequest, reader: jspb.BinaryReader): SearchKernelsRequest;
}

export namespace SearchKernelsRequest {
  export type AsObject = {
    signaturesList: Array<types_pb.Signature.AsObject>;
  };
}

export class SearchUtxosRequest extends jspb.Message {
  getCommitmentsList(): Array<Uint8Array | string>;
  setCommitmentsList(value: Array<Uint8Array | string>): SearchUtxosRequest;
  clearCommitmentsList(): SearchUtxosRequest;
  addCommitments(value: Uint8Array | string, index?: number): SearchUtxosRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchUtxosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchUtxosRequest): SearchUtxosRequest.AsObject;
  static serializeBinaryToWriter(message: SearchUtxosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchUtxosRequest;
  static deserializeBinaryFromReader(message: SearchUtxosRequest, reader: jspb.BinaryReader): SearchUtxosRequest;
}

export namespace SearchUtxosRequest {
  export type AsObject = {
    commitmentsList: Array<Uint8Array | string>;
  };
}

export class FetchMatchingUtxosRequest extends jspb.Message {
  getHashesList(): Array<Uint8Array | string>;
  setHashesList(value: Array<Uint8Array | string>): FetchMatchingUtxosRequest;
  clearHashesList(): FetchMatchingUtxosRequest;
  addHashes(value: Uint8Array | string, index?: number): FetchMatchingUtxosRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchMatchingUtxosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchMatchingUtxosRequest): FetchMatchingUtxosRequest.AsObject;
  static serializeBinaryToWriter(message: FetchMatchingUtxosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchMatchingUtxosRequest;
  static deserializeBinaryFromReader(
    message: FetchMatchingUtxosRequest,
    reader: jspb.BinaryReader,
  ): FetchMatchingUtxosRequest;
}

export namespace FetchMatchingUtxosRequest {
  export type AsObject = {
    hashesList: Array<Uint8Array | string>;
  };
}

export class FetchMatchingUtxosResponse extends jspb.Message {
  getOutput(): transaction_pb.TransactionOutput | undefined;
  setOutput(value?: transaction_pb.TransactionOutput): FetchMatchingUtxosResponse;
  hasOutput(): boolean;
  clearOutput(): FetchMatchingUtxosResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchMatchingUtxosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchMatchingUtxosResponse): FetchMatchingUtxosResponse.AsObject;
  static serializeBinaryToWriter(message: FetchMatchingUtxosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchMatchingUtxosResponse;
  static deserializeBinaryFromReader(
    message: FetchMatchingUtxosResponse,
    reader: jspb.BinaryReader,
  ): FetchMatchingUtxosResponse;
}

export namespace FetchMatchingUtxosResponse {
  export type AsObject = {
    output?: transaction_pb.TransactionOutput.AsObject;
  };
}

export class GetPeersResponse extends jspb.Message {
  getPeer(): network_pb.Peer | undefined;
  setPeer(value?: network_pb.Peer): GetPeersResponse;
  hasPeer(): boolean;
  clearPeer(): GetPeersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeersResponse): GetPeersResponse.AsObject;
  static serializeBinaryToWriter(message: GetPeersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeersResponse;
  static deserializeBinaryFromReader(message: GetPeersResponse, reader: jspb.BinaryReader): GetPeersResponse;
}

export namespace GetPeersResponse {
  export type AsObject = {
    peer?: network_pb.Peer.AsObject;
  };
}

export class GetPeersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeersRequest): GetPeersRequest.AsObject;
  static serializeBinaryToWriter(message: GetPeersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeersRequest;
  static deserializeBinaryFromReader(message: GetPeersRequest, reader: jspb.BinaryReader): GetPeersRequest;
}

export namespace GetPeersRequest {
  export type AsObject = {};
}

export class SubmitTransactionRequest extends jspb.Message {
  getTransaction(): transaction_pb.Transaction | undefined;
  setTransaction(value?: transaction_pb.Transaction): SubmitTransactionRequest;
  hasTransaction(): boolean;
  clearTransaction(): SubmitTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitTransactionRequest): SubmitTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: SubmitTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitTransactionRequest;
  static deserializeBinaryFromReader(
    message: SubmitTransactionRequest,
    reader: jspb.BinaryReader,
  ): SubmitTransactionRequest;
}

export namespace SubmitTransactionRequest {
  export type AsObject = {
    transaction?: transaction_pb.Transaction.AsObject;
  };
}

export class SubmitTransactionResponse extends jspb.Message {
  getResult(): SubmitTransactionResult;
  setResult(value: SubmitTransactionResult): SubmitTransactionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitTransactionResponse): SubmitTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: SubmitTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitTransactionResponse;
  static deserializeBinaryFromReader(
    message: SubmitTransactionResponse,
    reader: jspb.BinaryReader,
  ): SubmitTransactionResponse;
}

export namespace SubmitTransactionResponse {
  export type AsObject = {
    result: SubmitTransactionResult;
  };
}

export class GetMempoolTransactionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMempoolTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMempoolTransactionsRequest): GetMempoolTransactionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetMempoolTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMempoolTransactionsRequest;
  static deserializeBinaryFromReader(
    message: GetMempoolTransactionsRequest,
    reader: jspb.BinaryReader,
  ): GetMempoolTransactionsRequest;
}

export namespace GetMempoolTransactionsRequest {
  export type AsObject = {};
}

export class GetMempoolTransactionsResponse extends jspb.Message {
  getTransaction(): transaction_pb.Transaction | undefined;
  setTransaction(value?: transaction_pb.Transaction): GetMempoolTransactionsResponse;
  hasTransaction(): boolean;
  clearTransaction(): GetMempoolTransactionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMempoolTransactionsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetMempoolTransactionsResponse,
  ): GetMempoolTransactionsResponse.AsObject;
  static serializeBinaryToWriter(message: GetMempoolTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMempoolTransactionsResponse;
  static deserializeBinaryFromReader(
    message: GetMempoolTransactionsResponse,
    reader: jspb.BinaryReader,
  ): GetMempoolTransactionsResponse;
}

export namespace GetMempoolTransactionsResponse {
  export type AsObject = {
    transaction?: transaction_pb.Transaction.AsObject;
  };
}

export class TransactionStateRequest extends jspb.Message {
  getExcessSig(): types_pb.Signature | undefined;
  setExcessSig(value?: types_pb.Signature): TransactionStateRequest;
  hasExcessSig(): boolean;
  clearExcessSig(): TransactionStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionStateRequest): TransactionStateRequest.AsObject;
  static serializeBinaryToWriter(message: TransactionStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionStateRequest;
  static deserializeBinaryFromReader(
    message: TransactionStateRequest,
    reader: jspb.BinaryReader,
  ): TransactionStateRequest;
}

export namespace TransactionStateRequest {
  export type AsObject = {
    excessSig?: types_pb.Signature.AsObject;
  };
}

export class TransactionStateResponse extends jspb.Message {
  getResult(): TransactionLocation;
  setResult(value: TransactionLocation): TransactionStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionStateResponse): TransactionStateResponse.AsObject;
  static serializeBinaryToWriter(message: TransactionStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionStateResponse;
  static deserializeBinaryFromReader(
    message: TransactionStateResponse,
    reader: jspb.BinaryReader,
  ): TransactionStateResponse;
}

export namespace TransactionStateResponse {
  export type AsObject = {
    result: TransactionLocation;
  };
}

export class MempoolStatsResponse extends jspb.Message {
  getUnconfirmedTxs(): number;
  setUnconfirmedTxs(value: number): MempoolStatsResponse;

  getReorgTxs(): number;
  setReorgTxs(value: number): MempoolStatsResponse;

  getUnconfirmedWeight(): number;
  setUnconfirmedWeight(value: number): MempoolStatsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MempoolStatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MempoolStatsResponse): MempoolStatsResponse.AsObject;
  static serializeBinaryToWriter(message: MempoolStatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MempoolStatsResponse;
  static deserializeBinaryFromReader(message: MempoolStatsResponse, reader: jspb.BinaryReader): MempoolStatsResponse;
}

export namespace MempoolStatsResponse {
  export type AsObject = {
    unconfirmedTxs: number;
    reorgTxs: number;
    unconfirmedWeight: number;
  };
}

export class GetActiveValidatorNodesRequest extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): GetActiveValidatorNodesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActiveValidatorNodesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetActiveValidatorNodesRequest,
  ): GetActiveValidatorNodesRequest.AsObject;
  static serializeBinaryToWriter(message: GetActiveValidatorNodesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActiveValidatorNodesRequest;
  static deserializeBinaryFromReader(
    message: GetActiveValidatorNodesRequest,
    reader: jspb.BinaryReader,
  ): GetActiveValidatorNodesRequest;
}

export namespace GetActiveValidatorNodesRequest {
  export type AsObject = {
    height: number;
  };
}

export class GetActiveValidatorNodesResponse extends jspb.Message {
  getShardKey(): Uint8Array | string;
  getShardKey_asU8(): Uint8Array;
  getShardKey_asB64(): string;
  setShardKey(value: Uint8Array | string): GetActiveValidatorNodesResponse;

  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): GetActiveValidatorNodesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActiveValidatorNodesResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetActiveValidatorNodesResponse,
  ): GetActiveValidatorNodesResponse.AsObject;
  static serializeBinaryToWriter(message: GetActiveValidatorNodesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActiveValidatorNodesResponse;
  static deserializeBinaryFromReader(
    message: GetActiveValidatorNodesResponse,
    reader: jspb.BinaryReader,
  ): GetActiveValidatorNodesResponse;
}

export namespace GetActiveValidatorNodesResponse {
  export type AsObject = {
    shardKey: Uint8Array | string;
    publicKey: Uint8Array | string;
  };
}

export class GetShardKeyRequest extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): GetShardKeyRequest;

  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): GetShardKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetShardKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetShardKeyRequest): GetShardKeyRequest.AsObject;
  static serializeBinaryToWriter(message: GetShardKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetShardKeyRequest;
  static deserializeBinaryFromReader(message: GetShardKeyRequest, reader: jspb.BinaryReader): GetShardKeyRequest;
}

export namespace GetShardKeyRequest {
  export type AsObject = {
    height: number;
    publicKey: Uint8Array | string;
  };
}

export class GetShardKeyResponse extends jspb.Message {
  getShardKey(): Uint8Array | string;
  getShardKey_asU8(): Uint8Array;
  getShardKey_asB64(): string;
  setShardKey(value: Uint8Array | string): GetShardKeyResponse;

  getFound(): boolean;
  setFound(value: boolean): GetShardKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetShardKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetShardKeyResponse): GetShardKeyResponse.AsObject;
  static serializeBinaryToWriter(message: GetShardKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetShardKeyResponse;
  static deserializeBinaryFromReader(message: GetShardKeyResponse, reader: jspb.BinaryReader): GetShardKeyResponse;
}

export namespace GetShardKeyResponse {
  export type AsObject = {
    shardKey: Uint8Array | string;
    found: boolean;
  };
}

export class GetTemplateRegistrationsRequest extends jspb.Message {
  getStartHash(): Uint8Array | string;
  getStartHash_asU8(): Uint8Array;
  getStartHash_asB64(): string;
  setStartHash(value: Uint8Array | string): GetTemplateRegistrationsRequest;

  getCount(): number;
  setCount(value: number): GetTemplateRegistrationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTemplateRegistrationsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetTemplateRegistrationsRequest,
  ): GetTemplateRegistrationsRequest.AsObject;
  static serializeBinaryToWriter(message: GetTemplateRegistrationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTemplateRegistrationsRequest;
  static deserializeBinaryFromReader(
    message: GetTemplateRegistrationsRequest,
    reader: jspb.BinaryReader,
  ): GetTemplateRegistrationsRequest;
}

export namespace GetTemplateRegistrationsRequest {
  export type AsObject = {
    startHash: Uint8Array | string;
    count: number;
  };
}

export class GetTemplateRegistrationResponse extends jspb.Message {
  getUtxoHash(): Uint8Array | string;
  getUtxoHash_asU8(): Uint8Array;
  getUtxoHash_asB64(): string;
  setUtxoHash(value: Uint8Array | string): GetTemplateRegistrationResponse;

  getRegistration(): sidechain_types_pb.TemplateRegistration | undefined;
  setRegistration(value?: sidechain_types_pb.TemplateRegistration): GetTemplateRegistrationResponse;
  hasRegistration(): boolean;
  clearRegistration(): GetTemplateRegistrationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTemplateRegistrationResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetTemplateRegistrationResponse,
  ): GetTemplateRegistrationResponse.AsObject;
  static serializeBinaryToWriter(message: GetTemplateRegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTemplateRegistrationResponse;
  static deserializeBinaryFromReader(
    message: GetTemplateRegistrationResponse,
    reader: jspb.BinaryReader,
  ): GetTemplateRegistrationResponse;
}

export namespace GetTemplateRegistrationResponse {
  export type AsObject = {
    utxoHash: Uint8Array | string;
    registration?: sidechain_types_pb.TemplateRegistration.AsObject;
  };
}

export class BlockInfo extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): BlockInfo;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): BlockInfo;

  getNextBlockHash(): Uint8Array | string;
  getNextBlockHash_asU8(): Uint8Array;
  getNextBlockHash_asB64(): string;
  setNextBlockHash(value: Uint8Array | string): BlockInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BlockInfo): BlockInfo.AsObject;
  static serializeBinaryToWriter(message: BlockInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockInfo;
  static deserializeBinaryFromReader(message: BlockInfo, reader: jspb.BinaryReader): BlockInfo;
}

export namespace BlockInfo {
  export type AsObject = {
    height: number;
    hash: Uint8Array | string;
    nextBlockHash: Uint8Array | string;
  };
}

export class GetSideChainUtxosRequest extends jspb.Message {
  getStartHash(): Uint8Array | string;
  getStartHash_asU8(): Uint8Array;
  getStartHash_asB64(): string;
  setStartHash(value: Uint8Array | string): GetSideChainUtxosRequest;

  getCount(): number;
  setCount(value: number): GetSideChainUtxosRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSideChainUtxosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSideChainUtxosRequest): GetSideChainUtxosRequest.AsObject;
  static serializeBinaryToWriter(message: GetSideChainUtxosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSideChainUtxosRequest;
  static deserializeBinaryFromReader(
    message: GetSideChainUtxosRequest,
    reader: jspb.BinaryReader,
  ): GetSideChainUtxosRequest;
}

export namespace GetSideChainUtxosRequest {
  export type AsObject = {
    startHash: Uint8Array | string;
    count: number;
  };
}

export class GetSideChainUtxosResponse extends jspb.Message {
  getBlockInfo(): BlockInfo | undefined;
  setBlockInfo(value?: BlockInfo): GetSideChainUtxosResponse;
  hasBlockInfo(): boolean;
  clearBlockInfo(): GetSideChainUtxosResponse;

  getOutputsList(): Array<transaction_pb.TransactionOutput>;
  setOutputsList(value: Array<transaction_pb.TransactionOutput>): GetSideChainUtxosResponse;
  clearOutputsList(): GetSideChainUtxosResponse;
  addOutputs(value?: transaction_pb.TransactionOutput, index?: number): transaction_pb.TransactionOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSideChainUtxosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSideChainUtxosResponse): GetSideChainUtxosResponse.AsObject;
  static serializeBinaryToWriter(message: GetSideChainUtxosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSideChainUtxosResponse;
  static deserializeBinaryFromReader(
    message: GetSideChainUtxosResponse,
    reader: jspb.BinaryReader,
  ): GetSideChainUtxosResponse;
}

export namespace GetSideChainUtxosResponse {
  export type AsObject = {
    blockInfo?: BlockInfo.AsObject;
    outputsList: Array<transaction_pb.TransactionOutput.AsObject>;
  };
}

export class GetNetworkStateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkStateRequest): GetNetworkStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetNetworkStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkStateRequest;
  static deserializeBinaryFromReader(
    message: GetNetworkStateRequest,
    reader: jspb.BinaryReader,
  ): GetNetworkStateRequest;
}

export namespace GetNetworkStateRequest {
  export type AsObject = {};
}

export class GetNetworkStateResponse extends jspb.Message {
  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): GetNetworkStateResponse;
  hasMetadata(): boolean;
  clearMetadata(): GetNetworkStateResponse;

  getInitialSyncAchieved(): boolean;
  setInitialSyncAchieved(value: boolean): GetNetworkStateResponse;

  getBaseNodeState(): BaseNodeState;
  setBaseNodeState(value: BaseNodeState): GetNetworkStateResponse;

  getFailedCheckpoints(): boolean;
  setFailedCheckpoints(value: boolean): GetNetworkStateResponse;

  getReward(): number;
  setReward(value: number): GetNetworkStateResponse;

  getSha3xEstimatedHashRate(): number;
  setSha3xEstimatedHashRate(value: number): GetNetworkStateResponse;

  getRandomxEstimatedHashRate(): number;
  setRandomxEstimatedHashRate(value: number): GetNetworkStateResponse;

  getNumConnections(): number;
  setNumConnections(value: number): GetNetworkStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkStateResponse): GetNetworkStateResponse.AsObject;
  static serializeBinaryToWriter(message: GetNetworkStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkStateResponse;
  static deserializeBinaryFromReader(
    message: GetNetworkStateResponse,
    reader: jspb.BinaryReader,
  ): GetNetworkStateResponse;
}

export namespace GetNetworkStateResponse {
  export type AsObject = {
    metadata?: MetaData.AsObject;
    initialSyncAchieved: boolean;
    baseNodeState: BaseNodeState;
    failedCheckpoints: boolean;
    reward: number;
    sha3xEstimatedHashRate: number;
    randomxEstimatedHashRate: number;
    numConnections: number;
  };
}

export enum BaseNodeState {
  START_UP = 0,
  HEADER_SYNC = 1,
  HORIZON_SYNC = 2,
  CONNECTING = 3,
  BLOCK_SYNC = 4,
  LISTENING = 5,
  SYNC_FAILED = 6,
}
export enum CalcType {
  MEAN = 0,
  MEDIAN = 1,
  QUANTILE = 2,
  QUARTILE = 3,
}
export enum Sorting {
  SORTING_DESC = 0,
  SORTING_ASC = 1,
}
export enum SyncState {
  STARTUP = 0,
  HEADER_STARTING = 1,
  HEADER = 2,
  BLOCK_STARTING = 3,
  BLOCK = 4,
  DONE = 5,
}
export enum SubmitTransactionResult {
  NONE = 0,
  ACCEPTED = 1,
  NOT_PROCESSABLE_AT_THIS_TIME = 2,
  ALREADY_MINED = 3,
  REJECTED = 4,
}
export enum TransactionLocation {
  UNKNOWN = 0,
  MEMPOOL = 1,
  MINED = 2,
  NOT_STORED = 3,
}
