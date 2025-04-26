import * as jspb from "google-protobuf";

export class Range extends jspb.Message {
  getMin(): number;
  setMin(value: number): Range;

  getMax(): number;
  setMax(value: number): Range;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Range.AsObject;
  static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
  static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Range;
  static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
}

export namespace Range {
  export type AsObject = {
    min: number;
    max: number;
  };
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {};
}

export class BlockHeight extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): BlockHeight;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHeight.AsObject;
  static toObject(includeInstance: boolean, msg: BlockHeight): BlockHeight.AsObject;
  static serializeBinaryToWriter(message: BlockHeight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockHeight;
  static deserializeBinaryFromReader(message: BlockHeight, reader: jspb.BinaryReader): BlockHeight;
}

export namespace BlockHeight {
  export type AsObject = {
    blockHeight: number;
  };
}

export class Signature extends jspb.Message {
  getPublicNonce(): Uint8Array | string;
  getPublicNonce_asU8(): Uint8Array;
  getPublicNonce_asB64(): string;
  setPublicNonce(value: Uint8Array | string): Signature;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): Signature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signature.AsObject;
  static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
  static serializeBinaryToWriter(message: Signature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signature;
  static deserializeBinaryFromReader(message: Signature, reader: jspb.BinaryReader): Signature;
}

export namespace Signature {
  export type AsObject = {
    publicNonce: Uint8Array | string;
    signature: Uint8Array | string;
  };
}

export class ComAndPubSignature extends jspb.Message {
  getEphemeralCommitment(): Uint8Array | string;
  getEphemeralCommitment_asU8(): Uint8Array;
  getEphemeralCommitment_asB64(): string;
  setEphemeralCommitment(value: Uint8Array | string): ComAndPubSignature;

  getEphemeralPubkey(): Uint8Array | string;
  getEphemeralPubkey_asU8(): Uint8Array;
  getEphemeralPubkey_asB64(): string;
  setEphemeralPubkey(value: Uint8Array | string): ComAndPubSignature;

  getUA(): Uint8Array | string;
  getUA_asU8(): Uint8Array;
  getUA_asB64(): string;
  setUA(value: Uint8Array | string): ComAndPubSignature;

  getUX(): Uint8Array | string;
  getUX_asU8(): Uint8Array;
  getUX_asB64(): string;
  setUX(value: Uint8Array | string): ComAndPubSignature;

  getUY(): Uint8Array | string;
  getUY_asU8(): Uint8Array;
  getUY_asB64(): string;
  setUY(value: Uint8Array | string): ComAndPubSignature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComAndPubSignature.AsObject;
  static toObject(includeInstance: boolean, msg: ComAndPubSignature): ComAndPubSignature.AsObject;
  static serializeBinaryToWriter(message: ComAndPubSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComAndPubSignature;
  static deserializeBinaryFromReader(message: ComAndPubSignature, reader: jspb.BinaryReader): ComAndPubSignature;
}

export namespace ComAndPubSignature {
  export type AsObject = {
    ephemeralCommitment: Uint8Array | string;
    ephemeralPubkey: Uint8Array | string;
    uA: Uint8Array | string;
    uX: Uint8Array | string;
    uY: Uint8Array | string;
  };
}

export class CommitmentSignature extends jspb.Message {
  getPublicNonce(): Uint8Array | string;
  getPublicNonce_asU8(): Uint8Array;
  getPublicNonce_asB64(): string;
  setPublicNonce(value: Uint8Array | string): CommitmentSignature;

  getU(): Uint8Array | string;
  getU_asU8(): Uint8Array;
  getU_asB64(): string;
  setU(value: Uint8Array | string): CommitmentSignature;

  getV(): Uint8Array | string;
  getV_asU8(): Uint8Array;
  getV_asB64(): string;
  setV(value: Uint8Array | string): CommitmentSignature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitmentSignature.AsObject;
  static toObject(includeInstance: boolean, msg: CommitmentSignature): CommitmentSignature.AsObject;
  static serializeBinaryToWriter(message: CommitmentSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitmentSignature;
  static deserializeBinaryFromReader(message: CommitmentSignature, reader: jspb.BinaryReader): CommitmentSignature;
}

export namespace CommitmentSignature {
  export type AsObject = {
    publicNonce: Uint8Array | string;
    u: Uint8Array | string;
    v: Uint8Array | string;
  };
}

export class PowAlgorithmConstants extends jspb.Message {
  getMinDifficulty(): number;
  setMinDifficulty(value: number): PowAlgorithmConstants;

  getMaxDifficulty(): number;
  setMaxDifficulty(value: number): PowAlgorithmConstants;

  getTargetTime(): number;
  setTargetTime(value: number): PowAlgorithmConstants;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PowAlgorithmConstants.AsObject;
  static toObject(includeInstance: boolean, msg: PowAlgorithmConstants): PowAlgorithmConstants.AsObject;
  static serializeBinaryToWriter(message: PowAlgorithmConstants, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PowAlgorithmConstants;
  static deserializeBinaryFromReader(message: PowAlgorithmConstants, reader: jspb.BinaryReader): PowAlgorithmConstants;
}

export namespace PowAlgorithmConstants {
  export type AsObject = {
    minDifficulty: number;
    maxDifficulty: number;
    targetTime: number;
  };
}

export class WeightParams extends jspb.Message {
  getKernelWeight(): number;
  setKernelWeight(value: number): WeightParams;

  getInputWeight(): number;
  setInputWeight(value: number): WeightParams;

  getOutputWeight(): number;
  setOutputWeight(value: number): WeightParams;

  getFeaturesAndScriptsBytesPerGram(): number;
  setFeaturesAndScriptsBytesPerGram(value: number): WeightParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeightParams.AsObject;
  static toObject(includeInstance: boolean, msg: WeightParams): WeightParams.AsObject;
  static serializeBinaryToWriter(message: WeightParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeightParams;
  static deserializeBinaryFromReader(message: WeightParams, reader: jspb.BinaryReader): WeightParams;
}

export namespace WeightParams {
  export type AsObject = {
    kernelWeight: number;
    inputWeight: number;
    outputWeight: number;
    featuresAndScriptsBytesPerGram: number;
  };
}

export class OutputsVersion extends jspb.Message {
  getOutputs(): Range | undefined;
  setOutputs(value?: Range): OutputsVersion;
  hasOutputs(): boolean;
  clearOutputs(): OutputsVersion;

  getFeatures(): Range | undefined;
  setFeatures(value?: Range): OutputsVersion;
  hasFeatures(): boolean;
  clearFeatures(): OutputsVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputsVersion.AsObject;
  static toObject(includeInstance: boolean, msg: OutputsVersion): OutputsVersion.AsObject;
  static serializeBinaryToWriter(message: OutputsVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputsVersion;
  static deserializeBinaryFromReader(message: OutputsVersion, reader: jspb.BinaryReader): OutputsVersion;
}

export namespace OutputsVersion {
  export type AsObject = {
    outputs?: Range.AsObject;
    features?: Range.AsObject;
  };
}

export class PermittedRangeProofs extends jspb.Message {
  getOutputType(): OutputType;
  setOutputType(value: OutputType): PermittedRangeProofs;

  getRangeProofTypesList(): Array<RangeProofType>;
  setRangeProofTypesList(value: Array<RangeProofType>): PermittedRangeProofs;
  clearRangeProofTypesList(): PermittedRangeProofs;
  addRangeProofTypes(value: RangeProofType, index?: number): PermittedRangeProofs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermittedRangeProofs.AsObject;
  static toObject(includeInstance: boolean, msg: PermittedRangeProofs): PermittedRangeProofs.AsObject;
  static serializeBinaryToWriter(message: PermittedRangeProofs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermittedRangeProofs;
  static deserializeBinaryFromReader(message: PermittedRangeProofs, reader: jspb.BinaryReader): PermittedRangeProofs;
}

export namespace PermittedRangeProofs {
  export type AsObject = {
    outputType: OutputType;
    rangeProofTypesList: Array<RangeProofType>;
  };
}

export class RangeProof extends jspb.Message {
  getProofBytes(): Uint8Array | string;
  getProofBytes_asU8(): Uint8Array;
  getProofBytes_asB64(): string;
  setProofBytes(value: Uint8Array | string): RangeProof;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RangeProof.AsObject;
  static toObject(includeInstance: boolean, msg: RangeProof): RangeProof.AsObject;
  static serializeBinaryToWriter(message: RangeProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RangeProof;
  static deserializeBinaryFromReader(message: RangeProof, reader: jspb.BinaryReader): RangeProof;
}

export namespace RangeProof {
  export type AsObject = {
    proofBytes: Uint8Array | string;
  };
}

export class ConsensusConstants extends jspb.Message {
  getCoinbaseMinMaturity(): number;
  setCoinbaseMinMaturity(value: number): ConsensusConstants;

  getBlockchainVersion(): number;
  setBlockchainVersion(value: number): ConsensusConstants;

  getFutureTimeLimit(): number;
  setFutureTimeLimit(value: number): ConsensusConstants;

  getDifficultyBlockWindow(): number;
  setDifficultyBlockWindow(value: number): ConsensusConstants;

  getMaxBlockTransactionWeight(): number;
  setMaxBlockTransactionWeight(value: number): ConsensusConstants;

  getPowAlgoCount(): number;
  setPowAlgoCount(value: number): ConsensusConstants;

  getMedianTimestampCount(): number;
  setMedianTimestampCount(value: number): ConsensusConstants;

  getEmissionInitial(): number;
  setEmissionInitial(value: number): ConsensusConstants;

  getEmissionDecayList(): Array<number>;
  setEmissionDecayList(value: Array<number>): ConsensusConstants;
  clearEmissionDecayList(): ConsensusConstants;
  addEmissionDecay(value: number, index?: number): ConsensusConstants;

  getEmissionTail(): number;
  setEmissionTail(value: number): ConsensusConstants;

  getMinSha3xPowDifficulty(): number;
  setMinSha3xPowDifficulty(value: number): ConsensusConstants;

  getBlockWeightInputs(): number;
  setBlockWeightInputs(value: number): ConsensusConstants;

  getBlockWeightOutputs(): number;
  setBlockWeightOutputs(value: number): ConsensusConstants;

  getBlockWeightKernels(): number;
  setBlockWeightKernels(value: number): ConsensusConstants;

  getPreMineValue(): number;
  setPreMineValue(value: number): ConsensusConstants;

  getMaxScriptByteSize(): number;
  setMaxScriptByteSize(value: number): ConsensusConstants;

  getValidatorNodeValidityPeriod(): number;
  setValidatorNodeValidityPeriod(value: number): ConsensusConstants;

  getEffectiveFromHeight(): number;
  setEffectiveFromHeight(value: number): ConsensusConstants;

  getValidBlockchainVersionRange(): Range | undefined;
  setValidBlockchainVersionRange(value?: Range): ConsensusConstants;
  hasValidBlockchainVersionRange(): boolean;
  clearValidBlockchainVersionRange(): ConsensusConstants;

  getMaxRandomxSeedHeight(): number;
  setMaxRandomxSeedHeight(value: number): ConsensusConstants;

  getProofOfWorkMap(): jspb.Map<number, PowAlgorithmConstants>;
  clearProofOfWorkMap(): ConsensusConstants;

  getTransactionWeight(): WeightParams | undefined;
  setTransactionWeight(value?: WeightParams): ConsensusConstants;
  hasTransactionWeight(): boolean;
  clearTransactionWeight(): ConsensusConstants;

  getInputVersionRange(): Range | undefined;
  setInputVersionRange(value?: Range): ConsensusConstants;
  hasInputVersionRange(): boolean;
  clearInputVersionRange(): ConsensusConstants;

  getOutputVersionRange(): OutputsVersion | undefined;
  setOutputVersionRange(value?: OutputsVersion): ConsensusConstants;
  hasOutputVersionRange(): boolean;
  clearOutputVersionRange(): ConsensusConstants;

  getKernelVersionRange(): Range | undefined;
  setKernelVersionRange(value?: Range): ConsensusConstants;
  hasKernelVersionRange(): boolean;
  clearKernelVersionRange(): ConsensusConstants;

  getPermittedOutputTypesList(): Array<OutputType>;
  setPermittedOutputTypesList(value: Array<OutputType>): ConsensusConstants;
  clearPermittedOutputTypesList(): ConsensusConstants;
  addPermittedOutputTypes(value: OutputType, index?: number): ConsensusConstants;

  getEpochLength(): number;
  setEpochLength(value: number): ConsensusConstants;

  getValidatorNodeRegistrationMinDepositAmount(): number;
  setValidatorNodeRegistrationMinDepositAmount(value: number): ConsensusConstants;

  getValidatorNodeRegistrationMinLockHeight(): number;
  setValidatorNodeRegistrationMinLockHeight(value: number): ConsensusConstants;

  getValidatorNodeRegistrationShuffleIntervalEpoch(): number;
  setValidatorNodeRegistrationShuffleIntervalEpoch(value: number): ConsensusConstants;

  getPermittedRangeProofTypesList(): Array<PermittedRangeProofs>;
  setPermittedRangeProofTypesList(value: Array<PermittedRangeProofs>): ConsensusConstants;
  clearPermittedRangeProofTypesList(): ConsensusConstants;
  addPermittedRangeProofTypes(value?: PermittedRangeProofs, index?: number): PermittedRangeProofs;

  getInflationBips(): number;
  setInflationBips(value: number): ConsensusConstants;

  getTailEpochLength(): number;
  setTailEpochLength(value: number): ConsensusConstants;

  getMaxBlockCoinbaseCount(): number;
  setMaxBlockCoinbaseCount(value: number): ConsensusConstants;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusConstants.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusConstants): ConsensusConstants.AsObject;
  static serializeBinaryToWriter(message: ConsensusConstants, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusConstants;
  static deserializeBinaryFromReader(message: ConsensusConstants, reader: jspb.BinaryReader): ConsensusConstants;
}

export namespace ConsensusConstants {
  export type AsObject = {
    coinbaseMinMaturity: number;
    blockchainVersion: number;
    futureTimeLimit: number;
    difficultyBlockWindow: number;
    maxBlockTransactionWeight: number;
    powAlgoCount: number;
    medianTimestampCount: number;
    emissionInitial: number;
    emissionDecayList: Array<number>;
    emissionTail: number;
    minSha3xPowDifficulty: number;
    blockWeightInputs: number;
    blockWeightOutputs: number;
    blockWeightKernels: number;
    preMineValue: number;
    maxScriptByteSize: number;
    validatorNodeValidityPeriod: number;
    effectiveFromHeight: number;
    validBlockchainVersionRange?: Range.AsObject;
    maxRandomxSeedHeight: number;
    proofOfWorkMap: Array<[number, PowAlgorithmConstants.AsObject]>;
    transactionWeight?: WeightParams.AsObject;
    inputVersionRange?: Range.AsObject;
    outputVersionRange?: OutputsVersion.AsObject;
    kernelVersionRange?: Range.AsObject;
    permittedOutputTypesList: Array<OutputType>;
    epochLength: number;
    validatorNodeRegistrationMinDepositAmount: number;
    validatorNodeRegistrationMinLockHeight: number;
    validatorNodeRegistrationShuffleIntervalEpoch: number;
    permittedRangeProofTypesList: Array<PermittedRangeProofs.AsObject>;
    inflationBips: number;
    tailEpochLength: number;
    maxBlockCoinbaseCount: number;
  };
}

export enum OutputType {
  STANDARD = 0,
  COINBASE = 1,
  BURN = 2,
  VALIDATOR_NODE_REGISTRATION = 3,
  CODE_TEMPLATE_REGISTRATION = 4,
}
export enum RangeProofType {
  BULLETPROOF_PLUS = 0,
  REVEALED_VALUE = 1,
}
