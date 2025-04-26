import * as jspb from "google-protobuf";

import * as transaction_pb from "./transaction_pb"; // proto import: "transaction.proto"

export class BlockHeader extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): BlockHeader;

  getVersion(): number;
  setVersion(value: number): BlockHeader;

  getHeight(): number;
  setHeight(value: number): BlockHeader;

  getPrevHash(): Uint8Array | string;
  getPrevHash_asU8(): Uint8Array;
  getPrevHash_asB64(): string;
  setPrevHash(value: Uint8Array | string): BlockHeader;

  getTimestamp(): number;
  setTimestamp(value: number): BlockHeader;

  getOutputMr(): Uint8Array | string;
  getOutputMr_asU8(): Uint8Array;
  getOutputMr_asB64(): string;
  setOutputMr(value: Uint8Array | string): BlockHeader;

  getBlockOutputMr(): Uint8Array | string;
  getBlockOutputMr_asU8(): Uint8Array;
  getBlockOutputMr_asB64(): string;
  setBlockOutputMr(value: Uint8Array | string): BlockHeader;

  getKernelMr(): Uint8Array | string;
  getKernelMr_asU8(): Uint8Array;
  getKernelMr_asB64(): string;
  setKernelMr(value: Uint8Array | string): BlockHeader;

  getInputMr(): Uint8Array | string;
  getInputMr_asU8(): Uint8Array;
  getInputMr_asB64(): string;
  setInputMr(value: Uint8Array | string): BlockHeader;

  getTotalKernelOffset(): Uint8Array | string;
  getTotalKernelOffset_asU8(): Uint8Array;
  getTotalKernelOffset_asB64(): string;
  setTotalKernelOffset(value: Uint8Array | string): BlockHeader;

  getNonce(): number;
  setNonce(value: number): BlockHeader;

  getPow(): ProofOfWork | undefined;
  setPow(value?: ProofOfWork): BlockHeader;
  hasPow(): boolean;
  clearPow(): BlockHeader;

  getKernelMmrSize(): number;
  setKernelMmrSize(value: number): BlockHeader;

  getOutputMmrSize(): number;
  setOutputMmrSize(value: number): BlockHeader;

  getTotalScriptOffset(): Uint8Array | string;
  getTotalScriptOffset_asU8(): Uint8Array;
  getTotalScriptOffset_asB64(): string;
  setTotalScriptOffset(value: Uint8Array | string): BlockHeader;

  getValidatorNodeMr(): Uint8Array | string;
  getValidatorNodeMr_asU8(): Uint8Array;
  getValidatorNodeMr_asB64(): string;
  setValidatorNodeMr(value: Uint8Array | string): BlockHeader;

  getValidatorNodeSize(): number;
  setValidatorNodeSize(value: number): BlockHeader;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHeader.AsObject;
  static toObject(includeInstance: boolean, msg: BlockHeader): BlockHeader.AsObject;
  static serializeBinaryToWriter(message: BlockHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockHeader;
  static deserializeBinaryFromReader(message: BlockHeader, reader: jspb.BinaryReader): BlockHeader;
}

export namespace BlockHeader {
  export type AsObject = {
    hash: Uint8Array | string;
    version: number;
    height: number;
    prevHash: Uint8Array | string;
    timestamp: number;
    outputMr: Uint8Array | string;
    blockOutputMr: Uint8Array | string;
    kernelMr: Uint8Array | string;
    inputMr: Uint8Array | string;
    totalKernelOffset: Uint8Array | string;
    nonce: number;
    pow?: ProofOfWork.AsObject;
    kernelMmrSize: number;
    outputMmrSize: number;
    totalScriptOffset: Uint8Array | string;
    validatorNodeMr: Uint8Array | string;
    validatorNodeSize: number;
  };
}

export class ProofOfWork extends jspb.Message {
  getPowAlgo(): number;
  setPowAlgo(value: number): ProofOfWork;

  getPowData(): Uint8Array | string;
  getPowData_asU8(): Uint8Array;
  getPowData_asB64(): string;
  setPowData(value: Uint8Array | string): ProofOfWork;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProofOfWork.AsObject;
  static toObject(includeInstance: boolean, msg: ProofOfWork): ProofOfWork.AsObject;
  static serializeBinaryToWriter(message: ProofOfWork, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProofOfWork;
  static deserializeBinaryFromReader(message: ProofOfWork, reader: jspb.BinaryReader): ProofOfWork;
}

export namespace ProofOfWork {
  export type AsObject = {
    powAlgo: number;
    powData: Uint8Array | string;
  };
}

export class PowAlgo extends jspb.Message {
  getPowAlgo(): PowAlgo.PowAlgos;
  setPowAlgo(value: PowAlgo.PowAlgos): PowAlgo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PowAlgo.AsObject;
  static toObject(includeInstance: boolean, msg: PowAlgo): PowAlgo.AsObject;
  static serializeBinaryToWriter(message: PowAlgo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PowAlgo;
  static deserializeBinaryFromReader(message: PowAlgo, reader: jspb.BinaryReader): PowAlgo;
}

export namespace PowAlgo {
  export type AsObject = {
    powAlgo: PowAlgo.PowAlgos;
  };

  export enum PowAlgos {
    POW_ALGOS_RANDOMX = 0,
    POW_ALGOS_SHA3X = 1,
  }
}

export class Block extends jspb.Message {
  getHeader(): BlockHeader | undefined;
  setHeader(value?: BlockHeader): Block;
  hasHeader(): boolean;
  clearHeader(): Block;

  getBody(): transaction_pb.AggregateBody | undefined;
  setBody(value?: transaction_pb.AggregateBody): Block;
  hasBody(): boolean;
  clearBody(): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    header?: BlockHeader.AsObject;
    body?: transaction_pb.AggregateBody.AsObject;
  };
}

export class HistoricalBlock extends jspb.Message {
  getConfirmations(): number;
  setConfirmations(value: number): HistoricalBlock;

  getBlock(): Block | undefined;
  setBlock(value?: Block): HistoricalBlock;
  hasBlock(): boolean;
  clearBlock(): HistoricalBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoricalBlock.AsObject;
  static toObject(includeInstance: boolean, msg: HistoricalBlock): HistoricalBlock.AsObject;
  static serializeBinaryToWriter(message: HistoricalBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoricalBlock;
  static deserializeBinaryFromReader(message: HistoricalBlock, reader: jspb.BinaryReader): HistoricalBlock;
}

export namespace HistoricalBlock {
  export type AsObject = {
    confirmations: number;
    block?: Block.AsObject;
  };
}

export class NewBlockHeaderTemplate extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): NewBlockHeaderTemplate;

  getHeight(): number;
  setHeight(value: number): NewBlockHeaderTemplate;

  getPrevHash(): Uint8Array | string;
  getPrevHash_asU8(): Uint8Array;
  getPrevHash_asB64(): string;
  setPrevHash(value: Uint8Array | string): NewBlockHeaderTemplate;

  getTotalKernelOffset(): Uint8Array | string;
  getTotalKernelOffset_asU8(): Uint8Array;
  getTotalKernelOffset_asB64(): string;
  setTotalKernelOffset(value: Uint8Array | string): NewBlockHeaderTemplate;

  getPow(): ProofOfWork | undefined;
  setPow(value?: ProofOfWork): NewBlockHeaderTemplate;
  hasPow(): boolean;
  clearPow(): NewBlockHeaderTemplate;

  getTotalScriptOffset(): Uint8Array | string;
  getTotalScriptOffset_asU8(): Uint8Array;
  getTotalScriptOffset_asB64(): string;
  setTotalScriptOffset(value: Uint8Array | string): NewBlockHeaderTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewBlockHeaderTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: NewBlockHeaderTemplate): NewBlockHeaderTemplate.AsObject;
  static serializeBinaryToWriter(message: NewBlockHeaderTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewBlockHeaderTemplate;
  static deserializeBinaryFromReader(
    message: NewBlockHeaderTemplate,
    reader: jspb.BinaryReader,
  ): NewBlockHeaderTemplate;
}

export namespace NewBlockHeaderTemplate {
  export type AsObject = {
    version: number;
    height: number;
    prevHash: Uint8Array | string;
    totalKernelOffset: Uint8Array | string;
    pow?: ProofOfWork.AsObject;
    totalScriptOffset: Uint8Array | string;
  };
}

export class NewBlockTemplate extends jspb.Message {
  getHeader(): NewBlockHeaderTemplate | undefined;
  setHeader(value?: NewBlockHeaderTemplate): NewBlockTemplate;
  hasHeader(): boolean;
  clearHeader(): NewBlockTemplate;

  getBody(): transaction_pb.AggregateBody | undefined;
  setBody(value?: transaction_pb.AggregateBody): NewBlockTemplate;
  hasBody(): boolean;
  clearBody(): NewBlockTemplate;

  getIsMempoolInSync(): boolean;
  setIsMempoolInSync(value: boolean): NewBlockTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewBlockTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: NewBlockTemplate): NewBlockTemplate.AsObject;
  static serializeBinaryToWriter(message: NewBlockTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewBlockTemplate;
  static deserializeBinaryFromReader(message: NewBlockTemplate, reader: jspb.BinaryReader): NewBlockTemplate;
}

export namespace NewBlockTemplate {
  export type AsObject = {
    header?: NewBlockHeaderTemplate.AsObject;
    body?: transaction_pb.AggregateBody.AsObject;
    isMempoolInSync: boolean;
  };
}
