import * as jspb from "google-protobuf";

import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb"; // proto import: "google/protobuf/timestamp.proto"

export class NodeIdentity extends jspb.Message {
  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): NodeIdentity;

  getPublicAddressesList(): Array<string>;
  setPublicAddressesList(value: Array<string>): NodeIdentity;
  clearPublicAddressesList(): NodeIdentity;
  addPublicAddresses(value: string, index?: number): NodeIdentity;

  getNodeId(): Uint8Array | string;
  getNodeId_asU8(): Uint8Array;
  getNodeId_asB64(): string;
  setNodeId(value: Uint8Array | string): NodeIdentity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeIdentity.AsObject;
  static toObject(includeInstance: boolean, msg: NodeIdentity): NodeIdentity.AsObject;
  static serializeBinaryToWriter(message: NodeIdentity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeIdentity;
  static deserializeBinaryFromReader(message: NodeIdentity, reader: jspb.BinaryReader): NodeIdentity;
}

export namespace NodeIdentity {
  export type AsObject = {
    publicKey: Uint8Array | string;
    publicAddressesList: Array<string>;
    nodeId: Uint8Array | string;
  };
}

export class Peer extends jspb.Message {
  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): Peer;

  getNodeId(): Uint8Array | string;
  getNodeId_asU8(): Uint8Array;
  getNodeId_asB64(): string;
  setNodeId(value: Uint8Array | string): Peer;

  getAddressesList(): Array<Address>;
  setAddressesList(value: Array<Address>): Peer;
  clearAddressesList(): Peer;
  addAddresses(value?: Address, index?: number): Address;

  getLastConnection(): number;
  setLastConnection(value: number): Peer;

  getFlags(): number;
  setFlags(value: number): Peer;

  getBannedUntil(): number;
  setBannedUntil(value: number): Peer;

  getBannedReason(): string;
  setBannedReason(value: string): Peer;

  getOfflineAt(): number;
  setOfflineAt(value: number): Peer;

  getFeatures(): number;
  setFeatures(value: number): Peer;

  getSupportedProtocolsList(): Array<Uint8Array | string>;
  setSupportedProtocolsList(value: Array<Uint8Array | string>): Peer;
  clearSupportedProtocolsList(): Peer;
  addSupportedProtocols(value: Uint8Array | string, index?: number): Peer;

  getUserAgent(): string;
  setUserAgent(value: string): Peer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Peer.AsObject;
  static toObject(includeInstance: boolean, msg: Peer): Peer.AsObject;
  static serializeBinaryToWriter(message: Peer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Peer;
  static deserializeBinaryFromReader(message: Peer, reader: jspb.BinaryReader): Peer;
}

export namespace Peer {
  export type AsObject = {
    publicKey: Uint8Array | string;
    nodeId: Uint8Array | string;
    addressesList: Array<Address.AsObject>;
    lastConnection: number;
    flags: number;
    bannedUntil: number;
    bannedReason: string;
    offlineAt: number;
    features: number;
    supportedProtocolsList: Array<Uint8Array | string>;
    userAgent: string;
  };
}

export class NetworkStatusResponse extends jspb.Message {
  getStatus(): ConnectivityStatus;
  setStatus(value: ConnectivityStatus): NetworkStatusResponse;

  getAvgLatencyMs(): number;
  setAvgLatencyMs(value: number): NetworkStatusResponse;

  getNumNodeConnections(): number;
  setNumNodeConnections(value: number): NetworkStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkStatusResponse): NetworkStatusResponse.AsObject;
  static serializeBinaryToWriter(message: NetworkStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkStatusResponse;
  static deserializeBinaryFromReader(message: NetworkStatusResponse, reader: jspb.BinaryReader): NetworkStatusResponse;
}

export namespace NetworkStatusResponse {
  export type AsObject = {
    status: ConnectivityStatus;
    avgLatencyMs: number;
    numNodeConnections: number;
  };
}

export class Address extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): Address;

  getLastSeen(): string;
  setLastSeen(value: string): Address;

  getConnectionAttempts(): number;
  setConnectionAttempts(value: number): Address;

  getAvgLatency(): AverageLatency | undefined;
  setAvgLatency(value?: AverageLatency): Address;
  hasAvgLatency(): boolean;
  clearAvgLatency(): Address;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    address: Uint8Array | string;
    lastSeen: string;
    connectionAttempts: number;
    avgLatency?: AverageLatency.AsObject;
  };
}

export class AverageLatency extends jspb.Message {
  getLatency(): number;
  setLatency(value: number): AverageLatency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AverageLatency.AsObject;
  static toObject(includeInstance: boolean, msg: AverageLatency): AverageLatency.AsObject;
  static serializeBinaryToWriter(message: AverageLatency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AverageLatency;
  static deserializeBinaryFromReader(message: AverageLatency, reader: jspb.BinaryReader): AverageLatency;
}

export namespace AverageLatency {
  export type AsObject = {
    latency: number;
  };
}

export class ListConnectedPeersResponse extends jspb.Message {
  getConnectedPeersList(): Array<Peer>;
  setConnectedPeersList(value: Array<Peer>): ListConnectedPeersResponse;
  clearConnectedPeersList(): ListConnectedPeersResponse;
  addConnectedPeers(value?: Peer, index?: number): Peer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectedPeersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectedPeersResponse): ListConnectedPeersResponse.AsObject;
  static serializeBinaryToWriter(message: ListConnectedPeersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectedPeersResponse;
  static deserializeBinaryFromReader(
    message: ListConnectedPeersResponse,
    reader: jspb.BinaryReader,
  ): ListConnectedPeersResponse;
}

export namespace ListConnectedPeersResponse {
  export type AsObject = {
    connectedPeersList: Array<Peer.AsObject>;
  };
}

export class SoftwareUpdate extends jspb.Message {
  getHasUpdate(): boolean;
  setHasUpdate(value: boolean): SoftwareUpdate;

  getVersion(): string;
  setVersion(value: string): SoftwareUpdate;

  getSha(): string;
  setSha(value: string): SoftwareUpdate;

  getDownloadUrl(): string;
  setDownloadUrl(value: string): SoftwareUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SoftwareUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: SoftwareUpdate): SoftwareUpdate.AsObject;
  static serializeBinaryToWriter(message: SoftwareUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SoftwareUpdate;
  static deserializeBinaryFromReader(message: SoftwareUpdate, reader: jspb.BinaryReader): SoftwareUpdate;
}

export namespace SoftwareUpdate {
  export type AsObject = {
    hasUpdate: boolean;
    version: string;
    sha: string;
    downloadUrl: string;
  };
}

export class GetIdentityRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentityRequest): GetIdentityRequest.AsObject;
  static serializeBinaryToWriter(message: GetIdentityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentityRequest;
  static deserializeBinaryFromReader(message: GetIdentityRequest, reader: jspb.BinaryReader): GetIdentityRequest;
}

export namespace GetIdentityRequest {
  export type AsObject = {};
}

export class GetIdentityResponse extends jspb.Message {
  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): GetIdentityResponse;

  getPublicAddress(): string;
  setPublicAddress(value: string): GetIdentityResponse;

  getNodeId(): Uint8Array | string;
  getNodeId_asU8(): Uint8Array;
  getNodeId_asB64(): string;
  setNodeId(value: Uint8Array | string): GetIdentityResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentityResponse): GetIdentityResponse.AsObject;
  static serializeBinaryToWriter(message: GetIdentityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentityResponse;
  static deserializeBinaryFromReader(message: GetIdentityResponse, reader: jspb.BinaryReader): GetIdentityResponse;
}

export namespace GetIdentityResponse {
  export type AsObject = {
    publicKey: Uint8Array | string;
    publicAddress: string;
    nodeId: Uint8Array | string;
  };
}

export enum ConnectivityStatus {
  INITIALIZING = 0,
  ONLINE = 1,
  DEGRADED = 2,
  OFFLINE = 3,
}
