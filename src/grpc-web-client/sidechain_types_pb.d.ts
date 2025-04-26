import * as jspb from "google-protobuf";

import * as types_pb from "./types_pb"; // proto import: "types.proto"

export class SideChainFeature extends jspb.Message {
  getValidatorNodeRegistration(): ValidatorNodeRegistration | undefined;
  setValidatorNodeRegistration(value?: ValidatorNodeRegistration): SideChainFeature;
  hasValidatorNodeRegistration(): boolean;
  clearValidatorNodeRegistration(): SideChainFeature;

  getTemplateRegistration(): TemplateRegistration | undefined;
  setTemplateRegistration(value?: TemplateRegistration): SideChainFeature;
  hasTemplateRegistration(): boolean;
  clearTemplateRegistration(): SideChainFeature;

  getConfidentialOutput(): ConfidentialOutputData | undefined;
  setConfidentialOutput(value?: ConfidentialOutputData): SideChainFeature;
  hasConfidentialOutput(): boolean;
  clearConfidentialOutput(): SideChainFeature;

  getSideChainFeatureCase(): SideChainFeature.SideChainFeatureCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SideChainFeature.AsObject;
  static toObject(includeInstance: boolean, msg: SideChainFeature): SideChainFeature.AsObject;
  static serializeBinaryToWriter(message: SideChainFeature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SideChainFeature;
  static deserializeBinaryFromReader(message: SideChainFeature, reader: jspb.BinaryReader): SideChainFeature;
}

export namespace SideChainFeature {
  export type AsObject = {
    validatorNodeRegistration?: ValidatorNodeRegistration.AsObject;
    templateRegistration?: TemplateRegistration.AsObject;
    confidentialOutput?: ConfidentialOutputData.AsObject;
  };

  export enum SideChainFeatureCase {
    SIDE_CHAIN_FEATURE_NOT_SET = 0,
    VALIDATOR_NODE_REGISTRATION = 1,
    TEMPLATE_REGISTRATION = 2,
    CONFIDENTIAL_OUTPUT = 3,
  }
}

export class ValidatorNodeRegistration extends jspb.Message {
  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): ValidatorNodeRegistration;

  getSignature(): types_pb.Signature | undefined;
  setSignature(value?: types_pb.Signature): ValidatorNodeRegistration;
  hasSignature(): boolean;
  clearSignature(): ValidatorNodeRegistration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorNodeRegistration.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorNodeRegistration): ValidatorNodeRegistration.AsObject;
  static serializeBinaryToWriter(message: ValidatorNodeRegistration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorNodeRegistration;
  static deserializeBinaryFromReader(
    message: ValidatorNodeRegistration,
    reader: jspb.BinaryReader,
  ): ValidatorNodeRegistration;
}

export namespace ValidatorNodeRegistration {
  export type AsObject = {
    publicKey: Uint8Array | string;
    signature?: types_pb.Signature.AsObject;
  };
}

export class TemplateRegistration extends jspb.Message {
  getAuthorPublicKey(): Uint8Array | string;
  getAuthorPublicKey_asU8(): Uint8Array;
  getAuthorPublicKey_asB64(): string;
  setAuthorPublicKey(value: Uint8Array | string): TemplateRegistration;

  getAuthorSignature(): types_pb.Signature | undefined;
  setAuthorSignature(value?: types_pb.Signature): TemplateRegistration;
  hasAuthorSignature(): boolean;
  clearAuthorSignature(): TemplateRegistration;

  getTemplateName(): string;
  setTemplateName(value: string): TemplateRegistration;

  getTemplateVersion(): number;
  setTemplateVersion(value: number): TemplateRegistration;

  getTemplateType(): TemplateType | undefined;
  setTemplateType(value?: TemplateType): TemplateRegistration;
  hasTemplateType(): boolean;
  clearTemplateType(): TemplateRegistration;

  getBuildInfo(): BuildInfo | undefined;
  setBuildInfo(value?: BuildInfo): TemplateRegistration;
  hasBuildInfo(): boolean;
  clearBuildInfo(): TemplateRegistration;

  getBinarySha(): Uint8Array | string;
  getBinarySha_asU8(): Uint8Array;
  getBinarySha_asB64(): string;
  setBinarySha(value: Uint8Array | string): TemplateRegistration;

  getBinaryUrl(): string;
  setBinaryUrl(value: string): TemplateRegistration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateRegistration.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateRegistration): TemplateRegistration.AsObject;
  static serializeBinaryToWriter(message: TemplateRegistration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateRegistration;
  static deserializeBinaryFromReader(message: TemplateRegistration, reader: jspb.BinaryReader): TemplateRegistration;
}

export namespace TemplateRegistration {
  export type AsObject = {
    authorPublicKey: Uint8Array | string;
    authorSignature?: types_pb.Signature.AsObject;
    templateName: string;
    templateVersion: number;
    templateType?: TemplateType.AsObject;
    buildInfo?: BuildInfo.AsObject;
    binarySha: Uint8Array | string;
    binaryUrl: string;
  };
}

export class ConfidentialOutputData extends jspb.Message {
  getClaimPublicKey(): Uint8Array | string;
  getClaimPublicKey_asU8(): Uint8Array;
  getClaimPublicKey_asB64(): string;
  setClaimPublicKey(value: Uint8Array | string): ConfidentialOutputData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfidentialOutputData.AsObject;
  static toObject(includeInstance: boolean, msg: ConfidentialOutputData): ConfidentialOutputData.AsObject;
  static serializeBinaryToWriter(message: ConfidentialOutputData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfidentialOutputData;
  static deserializeBinaryFromReader(
    message: ConfidentialOutputData,
    reader: jspb.BinaryReader,
  ): ConfidentialOutputData;
}

export namespace ConfidentialOutputData {
  export type AsObject = {
    claimPublicKey: Uint8Array | string;
  };
}

export class TemplateType extends jspb.Message {
  getWasm(): WasmInfo | undefined;
  setWasm(value?: WasmInfo): TemplateType;
  hasWasm(): boolean;
  clearWasm(): TemplateType;

  getFlow(): FlowInfo | undefined;
  setFlow(value?: FlowInfo): TemplateType;
  hasFlow(): boolean;
  clearFlow(): TemplateType;

  getManifest(): ManifestInfo | undefined;
  setManifest(value?: ManifestInfo): TemplateType;
  hasManifest(): boolean;
  clearManifest(): TemplateType;

  getTemplateTypeCase(): TemplateType.TemplateTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateType.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateType): TemplateType.AsObject;
  static serializeBinaryToWriter(message: TemplateType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateType;
  static deserializeBinaryFromReader(message: TemplateType, reader: jspb.BinaryReader): TemplateType;
}

export namespace TemplateType {
  export type AsObject = {
    wasm?: WasmInfo.AsObject;
    flow?: FlowInfo.AsObject;
    manifest?: ManifestInfo.AsObject;
  };

  export enum TemplateTypeCase {
    TEMPLATE_TYPE_NOT_SET = 0,
    WASM = 1,
    FLOW = 2,
    MANIFEST = 3,
  }
}

export class WasmInfo extends jspb.Message {
  getAbiVersion(): number;
  setAbiVersion(value: number): WasmInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WasmInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WasmInfo): WasmInfo.AsObject;
  static serializeBinaryToWriter(message: WasmInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WasmInfo;
  static deserializeBinaryFromReader(message: WasmInfo, reader: jspb.BinaryReader): WasmInfo;
}

export namespace WasmInfo {
  export type AsObject = {
    abiVersion: number;
  };
}

export class FlowInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlowInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FlowInfo): FlowInfo.AsObject;
  static serializeBinaryToWriter(message: FlowInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlowInfo;
  static deserializeBinaryFromReader(message: FlowInfo, reader: jspb.BinaryReader): FlowInfo;
}

export namespace FlowInfo {
  export type AsObject = {};
}

export class ManifestInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManifestInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ManifestInfo): ManifestInfo.AsObject;
  static serializeBinaryToWriter(message: ManifestInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManifestInfo;
  static deserializeBinaryFromReader(message: ManifestInfo, reader: jspb.BinaryReader): ManifestInfo;
}

export namespace ManifestInfo {
  export type AsObject = {};
}

export class BuildInfo extends jspb.Message {
  getRepoUrl(): string;
  setRepoUrl(value: string): BuildInfo;

  getCommitHash(): Uint8Array | string;
  getCommitHash_asU8(): Uint8Array;
  getCommitHash_asB64(): string;
  setCommitHash(value: Uint8Array | string): BuildInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BuildInfo): BuildInfo.AsObject;
  static serializeBinaryToWriter(message: BuildInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildInfo;
  static deserializeBinaryFromReader(message: BuildInfo, reader: jspb.BinaryReader): BuildInfo;
}

export namespace BuildInfo {
  export type AsObject = {
    repoUrl: string;
    commitHash: Uint8Array | string;
  };
}
