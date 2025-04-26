import * as jspb from "google-protobuf";

import * as types_pb from "./types_pb"; // proto import: "types.proto"
import * as sidechain_types_pb from "./sidechain_types_pb"; // proto import: "sidechain_types.proto"

export class TransactionKernel extends jspb.Message {
  getFeatures(): number;
  setFeatures(value: number): TransactionKernel;

  getFee(): number;
  setFee(value: number): TransactionKernel;

  getLockHeight(): number;
  setLockHeight(value: number): TransactionKernel;

  getExcess(): Uint8Array | string;
  getExcess_asU8(): Uint8Array;
  getExcess_asB64(): string;
  setExcess(value: Uint8Array | string): TransactionKernel;

  getExcessSig(): types_pb.Signature | undefined;
  setExcessSig(value?: types_pb.Signature): TransactionKernel;
  hasExcessSig(): boolean;
  clearExcessSig(): TransactionKernel;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): TransactionKernel;

  getVersion(): number;
  setVersion(value: number): TransactionKernel;

  getBurnCommitment(): Uint8Array | string;
  getBurnCommitment_asU8(): Uint8Array;
  getBurnCommitment_asB64(): string;
  setBurnCommitment(value: Uint8Array | string): TransactionKernel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionKernel.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionKernel): TransactionKernel.AsObject;
  static serializeBinaryToWriter(message: TransactionKernel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionKernel;
  static deserializeBinaryFromReader(message: TransactionKernel, reader: jspb.BinaryReader): TransactionKernel;
}

export namespace TransactionKernel {
  export type AsObject = {
    features: number;
    fee: number;
    lockHeight: number;
    excess: Uint8Array | string;
    excessSig?: types_pb.Signature.AsObject;
    hash: Uint8Array | string;
    version: number;
    burnCommitment: Uint8Array | string;
  };
}

export class TransactionInput extends jspb.Message {
  getFeatures(): OutputFeatures | undefined;
  setFeatures(value?: OutputFeatures): TransactionInput;
  hasFeatures(): boolean;
  clearFeatures(): TransactionInput;

  getCommitment(): Uint8Array | string;
  getCommitment_asU8(): Uint8Array;
  getCommitment_asB64(): string;
  setCommitment(value: Uint8Array | string): TransactionInput;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): TransactionInput;

  getScript(): Uint8Array | string;
  getScript_asU8(): Uint8Array;
  getScript_asB64(): string;
  setScript(value: Uint8Array | string): TransactionInput;

  getInputData(): Uint8Array | string;
  getInputData_asU8(): Uint8Array;
  getInputData_asB64(): string;
  setInputData(value: Uint8Array | string): TransactionInput;

  getScriptSignature(): types_pb.ComAndPubSignature | undefined;
  setScriptSignature(value?: types_pb.ComAndPubSignature): TransactionInput;
  hasScriptSignature(): boolean;
  clearScriptSignature(): TransactionInput;

  getSenderOffsetPublicKey(): Uint8Array | string;
  getSenderOffsetPublicKey_asU8(): Uint8Array;
  getSenderOffsetPublicKey_asB64(): string;
  setSenderOffsetPublicKey(value: Uint8Array | string): TransactionInput;

  getOutputHash(): Uint8Array | string;
  getOutputHash_asU8(): Uint8Array;
  getOutputHash_asB64(): string;
  setOutputHash(value: Uint8Array | string): TransactionInput;

  getCovenant(): Uint8Array | string;
  getCovenant_asU8(): Uint8Array;
  getCovenant_asB64(): string;
  setCovenant(value: Uint8Array | string): TransactionInput;

  getVersion(): number;
  setVersion(value: number): TransactionInput;

  getEncryptedData(): Uint8Array | string;
  getEncryptedData_asU8(): Uint8Array;
  getEncryptedData_asB64(): string;
  setEncryptedData(value: Uint8Array | string): TransactionInput;

  getMinimumValuePromise(): number;
  setMinimumValuePromise(value: number): TransactionInput;

  getMetadataSignature(): types_pb.ComAndPubSignature | undefined;
  setMetadataSignature(value?: types_pb.ComAndPubSignature): TransactionInput;
  hasMetadataSignature(): boolean;
  clearMetadataSignature(): TransactionInput;

  getRangeproofHash(): Uint8Array | string;
  getRangeproofHash_asU8(): Uint8Array;
  getRangeproofHash_asB64(): string;
  setRangeproofHash(value: Uint8Array | string): TransactionInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionInput.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionInput): TransactionInput.AsObject;
  static serializeBinaryToWriter(message: TransactionInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionInput;
  static deserializeBinaryFromReader(message: TransactionInput, reader: jspb.BinaryReader): TransactionInput;
}

export namespace TransactionInput {
  export type AsObject = {
    features?: OutputFeatures.AsObject;
    commitment: Uint8Array | string;
    hash: Uint8Array | string;
    script: Uint8Array | string;
    inputData: Uint8Array | string;
    scriptSignature?: types_pb.ComAndPubSignature.AsObject;
    senderOffsetPublicKey: Uint8Array | string;
    outputHash: Uint8Array | string;
    covenant: Uint8Array | string;
    version: number;
    encryptedData: Uint8Array | string;
    minimumValuePromise: number;
    metadataSignature?: types_pb.ComAndPubSignature.AsObject;
    rangeproofHash: Uint8Array | string;
  };
}

export class TransactionOutput extends jspb.Message {
  getFeatures(): OutputFeatures | undefined;
  setFeatures(value?: OutputFeatures): TransactionOutput;
  hasFeatures(): boolean;
  clearFeatures(): TransactionOutput;

  getCommitment(): Uint8Array | string;
  getCommitment_asU8(): Uint8Array;
  getCommitment_asB64(): string;
  setCommitment(value: Uint8Array | string): TransactionOutput;

  getRangeProof(): types_pb.RangeProof | undefined;
  setRangeProof(value?: types_pb.RangeProof): TransactionOutput;
  hasRangeProof(): boolean;
  clearRangeProof(): TransactionOutput;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): TransactionOutput;

  getScript(): Uint8Array | string;
  getScript_asU8(): Uint8Array;
  getScript_asB64(): string;
  setScript(value: Uint8Array | string): TransactionOutput;

  getSenderOffsetPublicKey(): Uint8Array | string;
  getSenderOffsetPublicKey_asU8(): Uint8Array;
  getSenderOffsetPublicKey_asB64(): string;
  setSenderOffsetPublicKey(value: Uint8Array | string): TransactionOutput;

  getMetadataSignature(): types_pb.ComAndPubSignature | undefined;
  setMetadataSignature(value?: types_pb.ComAndPubSignature): TransactionOutput;
  hasMetadataSignature(): boolean;
  clearMetadataSignature(): TransactionOutput;

  getCovenant(): Uint8Array | string;
  getCovenant_asU8(): Uint8Array;
  getCovenant_asB64(): string;
  setCovenant(value: Uint8Array | string): TransactionOutput;

  getVersion(): number;
  setVersion(value: number): TransactionOutput;

  getEncryptedData(): Uint8Array | string;
  getEncryptedData_asU8(): Uint8Array;
  getEncryptedData_asB64(): string;
  setEncryptedData(value: Uint8Array | string): TransactionOutput;

  getMinimumValuePromise(): number;
  setMinimumValuePromise(value: number): TransactionOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionOutput.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionOutput): TransactionOutput.AsObject;
  static serializeBinaryToWriter(message: TransactionOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionOutput;
  static deserializeBinaryFromReader(message: TransactionOutput, reader: jspb.BinaryReader): TransactionOutput;
}

export namespace TransactionOutput {
  export type AsObject = {
    features?: OutputFeatures.AsObject;
    commitment: Uint8Array | string;
    rangeProof?: types_pb.RangeProof.AsObject;
    hash: Uint8Array | string;
    script: Uint8Array | string;
    senderOffsetPublicKey: Uint8Array | string;
    metadataSignature?: types_pb.ComAndPubSignature.AsObject;
    covenant: Uint8Array | string;
    version: number;
    encryptedData: Uint8Array | string;
    minimumValuePromise: number;
  };
}

export class OutputFeatures extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): OutputFeatures;

  getOutputType(): number;
  setOutputType(value: number): OutputFeatures;

  getMaturity(): number;
  setMaturity(value: number): OutputFeatures;

  getCoinbaseExtra(): Uint8Array | string;
  getCoinbaseExtra_asU8(): Uint8Array;
  getCoinbaseExtra_asB64(): string;
  setCoinbaseExtra(value: Uint8Array | string): OutputFeatures;

  getSidechainFeature(): sidechain_types_pb.SideChainFeature | undefined;
  setSidechainFeature(value?: sidechain_types_pb.SideChainFeature): OutputFeatures;
  hasSidechainFeature(): boolean;
  clearSidechainFeature(): OutputFeatures;

  getRangeProofType(): number;
  setRangeProofType(value: number): OutputFeatures;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputFeatures.AsObject;
  static toObject(includeInstance: boolean, msg: OutputFeatures): OutputFeatures.AsObject;
  static serializeBinaryToWriter(message: OutputFeatures, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputFeatures;
  static deserializeBinaryFromReader(message: OutputFeatures, reader: jspb.BinaryReader): OutputFeatures;
}

export namespace OutputFeatures {
  export type AsObject = {
    version: number;
    outputType: number;
    maturity: number;
    coinbaseExtra: Uint8Array | string;
    sidechainFeature?: sidechain_types_pb.SideChainFeature.AsObject;
    rangeProofType: number;
  };
}

export class AggregateBody extends jspb.Message {
  getInputsList(): Array<TransactionInput>;
  setInputsList(value: Array<TransactionInput>): AggregateBody;
  clearInputsList(): AggregateBody;
  addInputs(value?: TransactionInput, index?: number): TransactionInput;

  getOutputsList(): Array<TransactionOutput>;
  setOutputsList(value: Array<TransactionOutput>): AggregateBody;
  clearOutputsList(): AggregateBody;
  addOutputs(value?: TransactionOutput, index?: number): TransactionOutput;

  getKernelsList(): Array<TransactionKernel>;
  setKernelsList(value: Array<TransactionKernel>): AggregateBody;
  clearKernelsList(): AggregateBody;
  addKernels(value?: TransactionKernel, index?: number): TransactionKernel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregateBody.AsObject;
  static toObject(includeInstance: boolean, msg: AggregateBody): AggregateBody.AsObject;
  static serializeBinaryToWriter(message: AggregateBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregateBody;
  static deserializeBinaryFromReader(message: AggregateBody, reader: jspb.BinaryReader): AggregateBody;
}

export namespace AggregateBody {
  export type AsObject = {
    inputsList: Array<TransactionInput.AsObject>;
    outputsList: Array<TransactionOutput.AsObject>;
    kernelsList: Array<TransactionKernel.AsObject>;
  };
}

export class Transaction extends jspb.Message {
  getOffset(): Uint8Array | string;
  getOffset_asU8(): Uint8Array;
  getOffset_asB64(): string;
  setOffset(value: Uint8Array | string): Transaction;

  getBody(): AggregateBody | undefined;
  setBody(value?: AggregateBody): Transaction;
  hasBody(): boolean;
  clearBody(): Transaction;

  getScriptOffset(): Uint8Array | string;
  getScriptOffset_asU8(): Uint8Array;
  getScriptOffset_asB64(): string;
  setScriptOffset(value: Uint8Array | string): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    offset: Uint8Array | string;
    body?: AggregateBody.AsObject;
    scriptOffset: Uint8Array | string;
  };
}

export class UnblindedOutput extends jspb.Message {
  getValue(): number;
  setValue(value: number): UnblindedOutput;

  getSpendingKey(): Uint8Array | string;
  getSpendingKey_asU8(): Uint8Array;
  getSpendingKey_asB64(): string;
  setSpendingKey(value: Uint8Array | string): UnblindedOutput;

  getFeatures(): OutputFeatures | undefined;
  setFeatures(value?: OutputFeatures): UnblindedOutput;
  hasFeatures(): boolean;
  clearFeatures(): UnblindedOutput;

  getScript(): Uint8Array | string;
  getScript_asU8(): Uint8Array;
  getScript_asB64(): string;
  setScript(value: Uint8Array | string): UnblindedOutput;

  getInputData(): Uint8Array | string;
  getInputData_asU8(): Uint8Array;
  getInputData_asB64(): string;
  setInputData(value: Uint8Array | string): UnblindedOutput;

  getScriptPrivateKey(): Uint8Array | string;
  getScriptPrivateKey_asU8(): Uint8Array;
  getScriptPrivateKey_asB64(): string;
  setScriptPrivateKey(value: Uint8Array | string): UnblindedOutput;

  getSenderOffsetPublicKey(): Uint8Array | string;
  getSenderOffsetPublicKey_asU8(): Uint8Array;
  getSenderOffsetPublicKey_asB64(): string;
  setSenderOffsetPublicKey(value: Uint8Array | string): UnblindedOutput;

  getMetadataSignature(): types_pb.ComAndPubSignature | undefined;
  setMetadataSignature(value?: types_pb.ComAndPubSignature): UnblindedOutput;
  hasMetadataSignature(): boolean;
  clearMetadataSignature(): UnblindedOutput;

  getScriptLockHeight(): number;
  setScriptLockHeight(value: number): UnblindedOutput;

  getCovenant(): Uint8Array | string;
  getCovenant_asU8(): Uint8Array;
  getCovenant_asB64(): string;
  setCovenant(value: Uint8Array | string): UnblindedOutput;

  getEncryptedData(): Uint8Array | string;
  getEncryptedData_asU8(): Uint8Array;
  getEncryptedData_asB64(): string;
  setEncryptedData(value: Uint8Array | string): UnblindedOutput;

  getMinimumValuePromise(): number;
  setMinimumValuePromise(value: number): UnblindedOutput;

  getRangeProof(): types_pb.RangeProof | undefined;
  setRangeProof(value?: types_pb.RangeProof): UnblindedOutput;
  hasRangeProof(): boolean;
  clearRangeProof(): UnblindedOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnblindedOutput.AsObject;
  static toObject(includeInstance: boolean, msg: UnblindedOutput): UnblindedOutput.AsObject;
  static serializeBinaryToWriter(message: UnblindedOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnblindedOutput;
  static deserializeBinaryFromReader(message: UnblindedOutput, reader: jspb.BinaryReader): UnblindedOutput;
}

export namespace UnblindedOutput {
  export type AsObject = {
    value: number;
    spendingKey: Uint8Array | string;
    features?: OutputFeatures.AsObject;
    script: Uint8Array | string;
    inputData: Uint8Array | string;
    scriptPrivateKey: Uint8Array | string;
    senderOffsetPublicKey: Uint8Array | string;
    metadataSignature?: types_pb.ComAndPubSignature.AsObject;
    scriptLockHeight: number;
    covenant: Uint8Array | string;
    encryptedData: Uint8Array | string;
    minimumValuePromise: number;
    rangeProof?: types_pb.RangeProof.AsObject;
  };
}
