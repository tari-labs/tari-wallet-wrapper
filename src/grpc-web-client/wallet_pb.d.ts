import * as jspb from "google-protobuf";

import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb"; // proto import: "google/protobuf/timestamp.proto"
import * as types_pb from "./types_pb"; // proto import: "types.proto"
import * as transaction_pb from "./transaction_pb"; // proto import: "transaction.proto"
import * as sidechain_types_pb from "./sidechain_types_pb"; // proto import: "sidechain_types.proto"
import * as network_pb from "./network_pb"; // proto import: "network.proto"

export class GetVersionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVersionRequest): GetVersionRequest.AsObject;
  static serializeBinaryToWriter(message: GetVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionRequest;
  static deserializeBinaryFromReader(message: GetVersionRequest, reader: jspb.BinaryReader): GetVersionRequest;
}

export namespace GetVersionRequest {
  export type AsObject = {};
}

export class GetVersionResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): GetVersionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVersionResponse): GetVersionResponse.AsObject;
  static serializeBinaryToWriter(message: GetVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionResponse;
  static deserializeBinaryFromReader(message: GetVersionResponse, reader: jspb.BinaryReader): GetVersionResponse;
}

export namespace GetVersionResponse {
  export type AsObject = {
    version: string;
  };
}

export class GetAddressResponse extends jspb.Message {
  getInteractiveAddress(): Uint8Array | string;
  getInteractiveAddress_asU8(): Uint8Array;
  getInteractiveAddress_asB64(): string;
  setInteractiveAddress(value: Uint8Array | string): GetAddressResponse;

  getOneSidedAddress(): Uint8Array | string;
  getOneSidedAddress_asU8(): Uint8Array;
  getOneSidedAddress_asB64(): string;
  setOneSidedAddress(value: Uint8Array | string): GetAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressResponse): GetAddressResponse.AsObject;
  static serializeBinaryToWriter(message: GetAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressResponse;
  static deserializeBinaryFromReader(message: GetAddressResponse, reader: jspb.BinaryReader): GetAddressResponse;
}

export namespace GetAddressResponse {
  export type AsObject = {
    interactiveAddress: Uint8Array | string;
    oneSidedAddress: Uint8Array | string;
  };
}

export class GetCompleteAddressResponse extends jspb.Message {
  getInteractiveAddress(): Uint8Array | string;
  getInteractiveAddress_asU8(): Uint8Array;
  getInteractiveAddress_asB64(): string;
  setInteractiveAddress(value: Uint8Array | string): GetCompleteAddressResponse;

  getOneSidedAddress(): Uint8Array | string;
  getOneSidedAddress_asU8(): Uint8Array;
  getOneSidedAddress_asB64(): string;
  setOneSidedAddress(value: Uint8Array | string): GetCompleteAddressResponse;

  getInteractiveAddressBase58(): string;
  setInteractiveAddressBase58(value: string): GetCompleteAddressResponse;

  getOneSidedAddressBase58(): string;
  setOneSidedAddressBase58(value: string): GetCompleteAddressResponse;

  getInteractiveAddressEmoji(): string;
  setInteractiveAddressEmoji(value: string): GetCompleteAddressResponse;

  getOneSidedAddressEmoji(): string;
  setOneSidedAddressEmoji(value: string): GetCompleteAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompleteAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompleteAddressResponse): GetCompleteAddressResponse.AsObject;
  static serializeBinaryToWriter(message: GetCompleteAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompleteAddressResponse;
  static deserializeBinaryFromReader(
    message: GetCompleteAddressResponse,
    reader: jspb.BinaryReader,
  ): GetCompleteAddressResponse;
}

export namespace GetCompleteAddressResponse {
  export type AsObject = {
    interactiveAddress: Uint8Array | string;
    oneSidedAddress: Uint8Array | string;
    interactiveAddressBase58: string;
    oneSidedAddressBase58: string;
    interactiveAddressEmoji: string;
    oneSidedAddressEmoji: string;
  };
}

export class TransferRequest extends jspb.Message {
  getRecipientsList(): Array<PaymentRecipient>;
  setRecipientsList(value: Array<PaymentRecipient>): TransferRequest;
  clearRecipientsList(): TransferRequest;
  addRecipients(value?: PaymentRecipient, index?: number): PaymentRecipient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferRequest): TransferRequest.AsObject;
  static serializeBinaryToWriter(message: TransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferRequest;
  static deserializeBinaryFromReader(message: TransferRequest, reader: jspb.BinaryReader): TransferRequest;
}

export namespace TransferRequest {
  export type AsObject = {
    recipientsList: Array<PaymentRecipient.AsObject>;
  };
}

export class SendShaAtomicSwapRequest extends jspb.Message {
  getRecipient(): PaymentRecipient | undefined;
  setRecipient(value?: PaymentRecipient): SendShaAtomicSwapRequest;
  hasRecipient(): boolean;
  clearRecipient(): SendShaAtomicSwapRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendShaAtomicSwapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendShaAtomicSwapRequest): SendShaAtomicSwapRequest.AsObject;
  static serializeBinaryToWriter(message: SendShaAtomicSwapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendShaAtomicSwapRequest;
  static deserializeBinaryFromReader(
    message: SendShaAtomicSwapRequest,
    reader: jspb.BinaryReader,
  ): SendShaAtomicSwapRequest;
}

export namespace SendShaAtomicSwapRequest {
  export type AsObject = {
    recipient?: PaymentRecipient.AsObject;
  };
}

export class CreateBurnTransactionRequest extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): CreateBurnTransactionRequest;

  getFeePerGram(): number;
  setFeePerGram(value: number): CreateBurnTransactionRequest;

  getClaimPublicKey(): Uint8Array | string;
  getClaimPublicKey_asU8(): Uint8Array;
  getClaimPublicKey_asB64(): string;
  setClaimPublicKey(value: Uint8Array | string): CreateBurnTransactionRequest;

  getPaymentId(): Uint8Array | string;
  getPaymentId_asU8(): Uint8Array;
  getPaymentId_asB64(): string;
  setPaymentId(value: Uint8Array | string): CreateBurnTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBurnTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBurnTransactionRequest): CreateBurnTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBurnTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBurnTransactionRequest;
  static deserializeBinaryFromReader(
    message: CreateBurnTransactionRequest,
    reader: jspb.BinaryReader,
  ): CreateBurnTransactionRequest;
}

export namespace CreateBurnTransactionRequest {
  export type AsObject = {
    amount: number;
    feePerGram: number;
    claimPublicKey: Uint8Array | string;
    paymentId: Uint8Array | string;
  };
}

export class PaymentRecipient extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): PaymentRecipient;

  getAmount(): number;
  setAmount(value: number): PaymentRecipient;

  getFeePerGram(): number;
  setFeePerGram(value: number): PaymentRecipient;

  getPaymentType(): PaymentRecipient.PaymentType;
  setPaymentType(value: PaymentRecipient.PaymentType): PaymentRecipient;

  getPaymentId(): Uint8Array | string;
  getPaymentId_asU8(): Uint8Array;
  getPaymentId_asB64(): string;
  setPaymentId(value: Uint8Array | string): PaymentRecipient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentRecipient.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentRecipient): PaymentRecipient.AsObject;
  static serializeBinaryToWriter(message: PaymentRecipient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentRecipient;
  static deserializeBinaryFromReader(message: PaymentRecipient, reader: jspb.BinaryReader): PaymentRecipient;
}

export namespace PaymentRecipient {
  export type AsObject = {
    address: string;
    amount: number;
    feePerGram: number;
    paymentType: PaymentRecipient.PaymentType;
    paymentId: Uint8Array | string;
  };

  export enum PaymentType {
    STANDARD_MIMBLEWIMBLE = 0,
    ONE_SIDED = 1,
    ONE_SIDED_TO_STEALTH_ADDRESS = 2,
  }
}

export class TransferResponse extends jspb.Message {
  getResultsList(): Array<TransferResult>;
  setResultsList(value: Array<TransferResult>): TransferResponse;
  clearResultsList(): TransferResponse;
  addResults(value?: TransferResult, index?: number): TransferResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferResponse): TransferResponse.AsObject;
  static serializeBinaryToWriter(message: TransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferResponse;
  static deserializeBinaryFromReader(message: TransferResponse, reader: jspb.BinaryReader): TransferResponse;
}

export namespace TransferResponse {
  export type AsObject = {
    resultsList: Array<TransferResult.AsObject>;
  };
}

export class SendShaAtomicSwapResponse extends jspb.Message {
  getTransactionId(): number;
  setTransactionId(value: number): SendShaAtomicSwapResponse;

  getPreImage(): string;
  setPreImage(value: string): SendShaAtomicSwapResponse;

  getOutputHash(): string;
  setOutputHash(value: string): SendShaAtomicSwapResponse;

  getIsSuccess(): boolean;
  setIsSuccess(value: boolean): SendShaAtomicSwapResponse;

  getFailureMessage(): string;
  setFailureMessage(value: string): SendShaAtomicSwapResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendShaAtomicSwapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendShaAtomicSwapResponse): SendShaAtomicSwapResponse.AsObject;
  static serializeBinaryToWriter(message: SendShaAtomicSwapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendShaAtomicSwapResponse;
  static deserializeBinaryFromReader(
    message: SendShaAtomicSwapResponse,
    reader: jspb.BinaryReader,
  ): SendShaAtomicSwapResponse;
}

export namespace SendShaAtomicSwapResponse {
  export type AsObject = {
    transactionId: number;
    preImage: string;
    outputHash: string;
    isSuccess: boolean;
    failureMessage: string;
  };
}

export class CreateBurnTransactionResponse extends jspb.Message {
  getTransactionId(): number;
  setTransactionId(value: number): CreateBurnTransactionResponse;

  getIsSuccess(): boolean;
  setIsSuccess(value: boolean): CreateBurnTransactionResponse;

  getFailureMessage(): string;
  setFailureMessage(value: string): CreateBurnTransactionResponse;

  getCommitment(): Uint8Array | string;
  getCommitment_asU8(): Uint8Array;
  getCommitment_asB64(): string;
  setCommitment(value: Uint8Array | string): CreateBurnTransactionResponse;

  getOwnershipProof(): types_pb.CommitmentSignature | undefined;
  setOwnershipProof(value?: types_pb.CommitmentSignature): CreateBurnTransactionResponse;
  hasOwnershipProof(): boolean;
  clearOwnershipProof(): CreateBurnTransactionResponse;

  getRangeProof(): Uint8Array | string;
  getRangeProof_asU8(): Uint8Array;
  getRangeProof_asB64(): string;
  setRangeProof(value: Uint8Array | string): CreateBurnTransactionResponse;

  getReciprocalClaimPublicKey(): Uint8Array | string;
  getReciprocalClaimPublicKey_asU8(): Uint8Array;
  getReciprocalClaimPublicKey_asB64(): string;
  setReciprocalClaimPublicKey(value: Uint8Array | string): CreateBurnTransactionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBurnTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBurnTransactionResponse): CreateBurnTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBurnTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBurnTransactionResponse;
  static deserializeBinaryFromReader(
    message: CreateBurnTransactionResponse,
    reader: jspb.BinaryReader,
  ): CreateBurnTransactionResponse;
}

export namespace CreateBurnTransactionResponse {
  export type AsObject = {
    transactionId: number;
    isSuccess: boolean;
    failureMessage: string;
    commitment: Uint8Array | string;
    ownershipProof?: types_pb.CommitmentSignature.AsObject;
    rangeProof: Uint8Array | string;
    reciprocalClaimPublicKey: Uint8Array | string;
  };
}

export class TransferResult extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): TransferResult;

  getTransactionId(): number;
  setTransactionId(value: number): TransferResult;

  getIsSuccess(): boolean;
  setIsSuccess(value: boolean): TransferResult;

  getFailureMessage(): string;
  setFailureMessage(value: string): TransferResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferResult.AsObject;
  static toObject(includeInstance: boolean, msg: TransferResult): TransferResult.AsObject;
  static serializeBinaryToWriter(message: TransferResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferResult;
  static deserializeBinaryFromReader(message: TransferResult, reader: jspb.BinaryReader): TransferResult;
}

export namespace TransferResult {
  export type AsObject = {
    address: string;
    transactionId: number;
    isSuccess: boolean;
    failureMessage: string;
  };
}

export class ClaimShaAtomicSwapRequest extends jspb.Message {
  getOutput(): string;
  setOutput(value: string): ClaimShaAtomicSwapRequest;

  getPreImage(): string;
  setPreImage(value: string): ClaimShaAtomicSwapRequest;

  getFeePerGram(): number;
  setFeePerGram(value: number): ClaimShaAtomicSwapRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimShaAtomicSwapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimShaAtomicSwapRequest): ClaimShaAtomicSwapRequest.AsObject;
  static serializeBinaryToWriter(message: ClaimShaAtomicSwapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimShaAtomicSwapRequest;
  static deserializeBinaryFromReader(
    message: ClaimShaAtomicSwapRequest,
    reader: jspb.BinaryReader,
  ): ClaimShaAtomicSwapRequest;
}

export namespace ClaimShaAtomicSwapRequest {
  export type AsObject = {
    output: string;
    preImage: string;
    feePerGram: number;
  };
}

export class ClaimShaAtomicSwapResponse extends jspb.Message {
  getResults(): TransferResult | undefined;
  setResults(value?: TransferResult): ClaimShaAtomicSwapResponse;
  hasResults(): boolean;
  clearResults(): ClaimShaAtomicSwapResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimShaAtomicSwapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimShaAtomicSwapResponse): ClaimShaAtomicSwapResponse.AsObject;
  static serializeBinaryToWriter(message: ClaimShaAtomicSwapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimShaAtomicSwapResponse;
  static deserializeBinaryFromReader(
    message: ClaimShaAtomicSwapResponse,
    reader: jspb.BinaryReader,
  ): ClaimShaAtomicSwapResponse;
}

export namespace ClaimShaAtomicSwapResponse {
  export type AsObject = {
    results?: TransferResult.AsObject;
  };
}

export class ClaimHtlcRefundRequest extends jspb.Message {
  getOutputHash(): string;
  setOutputHash(value: string): ClaimHtlcRefundRequest;

  getFeePerGram(): number;
  setFeePerGram(value: number): ClaimHtlcRefundRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimHtlcRefundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimHtlcRefundRequest): ClaimHtlcRefundRequest.AsObject;
  static serializeBinaryToWriter(message: ClaimHtlcRefundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimHtlcRefundRequest;
  static deserializeBinaryFromReader(
    message: ClaimHtlcRefundRequest,
    reader: jspb.BinaryReader,
  ): ClaimHtlcRefundRequest;
}

export namespace ClaimHtlcRefundRequest {
  export type AsObject = {
    outputHash: string;
    feePerGram: number;
  };
}

export class ClaimHtlcRefundResponse extends jspb.Message {
  getResults(): TransferResult | undefined;
  setResults(value?: TransferResult): ClaimHtlcRefundResponse;
  hasResults(): boolean;
  clearResults(): ClaimHtlcRefundResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimHtlcRefundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimHtlcRefundResponse): ClaimHtlcRefundResponse.AsObject;
  static serializeBinaryToWriter(message: ClaimHtlcRefundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimHtlcRefundResponse;
  static deserializeBinaryFromReader(
    message: ClaimHtlcRefundResponse,
    reader: jspb.BinaryReader,
  ): ClaimHtlcRefundResponse;
}

export namespace ClaimHtlcRefundResponse {
  export type AsObject = {
    results?: TransferResult.AsObject;
  };
}

export class GetTransactionInfoRequest extends jspb.Message {
  getTransactionIdsList(): Array<number>;
  setTransactionIdsList(value: Array<number>): GetTransactionInfoRequest;
  clearTransactionIdsList(): GetTransactionInfoRequest;
  addTransactionIds(value: number, index?: number): GetTransactionInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionInfoRequest): GetTransactionInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransactionInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionInfoRequest;
  static deserializeBinaryFromReader(
    message: GetTransactionInfoRequest,
    reader: jspb.BinaryReader,
  ): GetTransactionInfoRequest;
}

export namespace GetTransactionInfoRequest {
  export type AsObject = {
    transactionIdsList: Array<number>;
  };
}

export class GetTransactionInfoResponse extends jspb.Message {
  getTransactionsList(): Array<TransactionInfo>;
  setTransactionsList(value: Array<TransactionInfo>): GetTransactionInfoResponse;
  clearTransactionsList(): GetTransactionInfoResponse;
  addTransactions(value?: TransactionInfo, index?: number): TransactionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionInfoResponse): GetTransactionInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetTransactionInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionInfoResponse;
  static deserializeBinaryFromReader(
    message: GetTransactionInfoResponse,
    reader: jspb.BinaryReader,
  ): GetTransactionInfoResponse;
}

export namespace GetTransactionInfoResponse {
  export type AsObject = {
    transactionsList: Array<TransactionInfo.AsObject>;
  };
}

export class TransactionInfo extends jspb.Message {
  getTxId(): number;
  setTxId(value: number): TransactionInfo;

  getSourceAddress(): Uint8Array | string;
  getSourceAddress_asU8(): Uint8Array;
  getSourceAddress_asB64(): string;
  setSourceAddress(value: Uint8Array | string): TransactionInfo;

  getDestAddress(): Uint8Array | string;
  getDestAddress_asU8(): Uint8Array;
  getDestAddress_asB64(): string;
  setDestAddress(value: Uint8Array | string): TransactionInfo;

  getStatus(): TransactionStatus;
  setStatus(value: TransactionStatus): TransactionInfo;

  getDirection(): TransactionDirection;
  setDirection(value: TransactionDirection): TransactionInfo;

  getAmount(): number;
  setAmount(value: number): TransactionInfo;

  getFee(): number;
  setFee(value: number): TransactionInfo;

  getIsCancelled(): boolean;
  setIsCancelled(value: boolean): TransactionInfo;

  getExcessSig(): Uint8Array | string;
  getExcessSig_asU8(): Uint8Array;
  getExcessSig_asB64(): string;
  setExcessSig(value: Uint8Array | string): TransactionInfo;

  getTimestamp(): number;
  setTimestamp(value: number): TransactionInfo;

  getPaymentId(): Uint8Array | string;
  getPaymentId_asU8(): Uint8Array;
  getPaymentId_asB64(): string;
  setPaymentId(value: Uint8Array | string): TransactionInfo;

  getMinedInBlockHeight(): number;
  setMinedInBlockHeight(value: number): TransactionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionInfo): TransactionInfo.AsObject;
  static serializeBinaryToWriter(message: TransactionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionInfo;
  static deserializeBinaryFromReader(message: TransactionInfo, reader: jspb.BinaryReader): TransactionInfo;
}

export namespace TransactionInfo {
  export type AsObject = {
    txId: number;
    sourceAddress: Uint8Array | string;
    destAddress: Uint8Array | string;
    status: TransactionStatus;
    direction: TransactionDirection;
    amount: number;
    fee: number;
    isCancelled: boolean;
    excessSig: Uint8Array | string;
    timestamp: number;
    paymentId: Uint8Array | string;
    minedInBlockHeight: number;
  };
}

export class GetCompletedTransactionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompletedTransactionsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetCompletedTransactionsRequest,
  ): GetCompletedTransactionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetCompletedTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompletedTransactionsRequest;
  static deserializeBinaryFromReader(
    message: GetCompletedTransactionsRequest,
    reader: jspb.BinaryReader,
  ): GetCompletedTransactionsRequest;
}

export namespace GetCompletedTransactionsRequest {
  export type AsObject = {};
}

export class GetCompletedTransactionsResponse extends jspb.Message {
  getTransaction(): TransactionInfo | undefined;
  setTransaction(value?: TransactionInfo): GetCompletedTransactionsResponse;
  hasTransaction(): boolean;
  clearTransaction(): GetCompletedTransactionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompletedTransactionsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetCompletedTransactionsResponse,
  ): GetCompletedTransactionsResponse.AsObject;
  static serializeBinaryToWriter(message: GetCompletedTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompletedTransactionsResponse;
  static deserializeBinaryFromReader(
    message: GetCompletedTransactionsResponse,
    reader: jspb.BinaryReader,
  ): GetCompletedTransactionsResponse;
}

export namespace GetCompletedTransactionsResponse {
  export type AsObject = {
    transaction?: TransactionInfo.AsObject;
  };
}

export class GetBalanceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBalanceRequest): GetBalanceRequest.AsObject;
  static serializeBinaryToWriter(message: GetBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBalanceRequest;
  static deserializeBinaryFromReader(message: GetBalanceRequest, reader: jspb.BinaryReader): GetBalanceRequest;
}

export namespace GetBalanceRequest {
  export type AsObject = {};
}

export class GetStateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStateRequest): GetStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStateRequest;
  static deserializeBinaryFromReader(message: GetStateRequest, reader: jspb.BinaryReader): GetStateRequest;
}

export namespace GetStateRequest {
  export type AsObject = {};
}

export class GetBalanceResponse extends jspb.Message {
  getAvailableBalance(): number;
  setAvailableBalance(value: number): GetBalanceResponse;

  getPendingIncomingBalance(): number;
  setPendingIncomingBalance(value: number): GetBalanceResponse;

  getPendingOutgoingBalance(): number;
  setPendingOutgoingBalance(value: number): GetBalanceResponse;

  getTimelockedBalance(): number;
  setTimelockedBalance(value: number): GetBalanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBalanceResponse): GetBalanceResponse.AsObject;
  static serializeBinaryToWriter(message: GetBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBalanceResponse;
  static deserializeBinaryFromReader(message: GetBalanceResponse, reader: jspb.BinaryReader): GetBalanceResponse;
}

export namespace GetBalanceResponse {
  export type AsObject = {
    availableBalance: number;
    pendingIncomingBalance: number;
    pendingOutgoingBalance: number;
    timelockedBalance: number;
  };
}

export class GetStateResponse extends jspb.Message {
  getScannedHeight(): number;
  setScannedHeight(value: number): GetStateResponse;

  getBalance(): GetBalanceResponse | undefined;
  setBalance(value?: GetBalanceResponse): GetStateResponse;
  hasBalance(): boolean;
  clearBalance(): GetStateResponse;

  getNetwork(): network_pb.NetworkStatusResponse | undefined;
  setNetwork(value?: network_pb.NetworkStatusResponse): GetStateResponse;
  hasNetwork(): boolean;
  clearNetwork(): GetStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStateResponse): GetStateResponse.AsObject;
  static serializeBinaryToWriter(message: GetStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStateResponse;
  static deserializeBinaryFromReader(message: GetStateResponse, reader: jspb.BinaryReader): GetStateResponse;
}

export namespace GetStateResponse {
  export type AsObject = {
    scannedHeight: number;
    balance?: GetBalanceResponse.AsObject;
    network?: network_pb.NetworkStatusResponse.AsObject;
  };
}

export class GetUnspentAmountsResponse extends jspb.Message {
  getAmountList(): Array<number>;
  setAmountList(value: Array<number>): GetUnspentAmountsResponse;
  clearAmountList(): GetUnspentAmountsResponse;
  addAmount(value: number, index?: number): GetUnspentAmountsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnspentAmountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnspentAmountsResponse): GetUnspentAmountsResponse.AsObject;
  static serializeBinaryToWriter(message: GetUnspentAmountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnspentAmountsResponse;
  static deserializeBinaryFromReader(
    message: GetUnspentAmountsResponse,
    reader: jspb.BinaryReader,
  ): GetUnspentAmountsResponse;
}

export namespace GetUnspentAmountsResponse {
  export type AsObject = {
    amountList: Array<number>;
  };
}

export class CoinSplitRequest extends jspb.Message {
  getAmountPerSplit(): number;
  setAmountPerSplit(value: number): CoinSplitRequest;

  getSplitCount(): number;
  setSplitCount(value: number): CoinSplitRequest;

  getFeePerGram(): number;
  setFeePerGram(value: number): CoinSplitRequest;

  getLockHeight(): number;
  setLockHeight(value: number): CoinSplitRequest;

  getPaymentId(): Uint8Array | string;
  getPaymentId_asU8(): Uint8Array;
  getPaymentId_asB64(): string;
  setPaymentId(value: Uint8Array | string): CoinSplitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoinSplitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CoinSplitRequest): CoinSplitRequest.AsObject;
  static serializeBinaryToWriter(message: CoinSplitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoinSplitRequest;
  static deserializeBinaryFromReader(message: CoinSplitRequest, reader: jspb.BinaryReader): CoinSplitRequest;
}

export namespace CoinSplitRequest {
  export type AsObject = {
    amountPerSplit: number;
    splitCount: number;
    feePerGram: number;
    lockHeight: number;
    paymentId: Uint8Array | string;
  };
}

export class CoinSplitResponse extends jspb.Message {
  getTxId(): number;
  setTxId(value: number): CoinSplitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoinSplitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CoinSplitResponse): CoinSplitResponse.AsObject;
  static serializeBinaryToWriter(message: CoinSplitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoinSplitResponse;
  static deserializeBinaryFromReader(message: CoinSplitResponse, reader: jspb.BinaryReader): CoinSplitResponse;
}

export namespace CoinSplitResponse {
  export type AsObject = {
    txId: number;
  };
}

export class ImportUtxosRequest extends jspb.Message {
  getOutputsList(): Array<transaction_pb.UnblindedOutput>;
  setOutputsList(value: Array<transaction_pb.UnblindedOutput>): ImportUtxosRequest;
  clearOutputsList(): ImportUtxosRequest;
  addOutputs(value?: transaction_pb.UnblindedOutput, index?: number): transaction_pb.UnblindedOutput;

  getPaymentId(): Uint8Array | string;
  getPaymentId_asU8(): Uint8Array;
  getPaymentId_asB64(): string;
  setPaymentId(value: Uint8Array | string): ImportUtxosRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportUtxosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportUtxosRequest): ImportUtxosRequest.AsObject;
  static serializeBinaryToWriter(message: ImportUtxosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportUtxosRequest;
  static deserializeBinaryFromReader(message: ImportUtxosRequest, reader: jspb.BinaryReader): ImportUtxosRequest;
}

export namespace ImportUtxosRequest {
  export type AsObject = {
    outputsList: Array<transaction_pb.UnblindedOutput.AsObject>;
    paymentId: Uint8Array | string;
  };
}

export class ImportUtxosResponse extends jspb.Message {
  getTxIdsList(): Array<number>;
  setTxIdsList(value: Array<number>): ImportUtxosResponse;
  clearTxIdsList(): ImportUtxosResponse;
  addTxIds(value: number, index?: number): ImportUtxosResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportUtxosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ImportUtxosResponse): ImportUtxosResponse.AsObject;
  static serializeBinaryToWriter(message: ImportUtxosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportUtxosResponse;
  static deserializeBinaryFromReader(message: ImportUtxosResponse, reader: jspb.BinaryReader): ImportUtxosResponse;
}

export namespace ImportUtxosResponse {
  export type AsObject = {
    txIdsList: Array<number>;
  };
}

export class CreateTemplateRegistrationRequest extends jspb.Message {
  getTemplateRegistration(): sidechain_types_pb.TemplateRegistration | undefined;
  setTemplateRegistration(value?: sidechain_types_pb.TemplateRegistration): CreateTemplateRegistrationRequest;
  hasTemplateRegistration(): boolean;
  clearTemplateRegistration(): CreateTemplateRegistrationRequest;

  getFeePerGram(): number;
  setFeePerGram(value: number): CreateTemplateRegistrationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTemplateRegistrationRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateTemplateRegistrationRequest,
  ): CreateTemplateRegistrationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTemplateRegistrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTemplateRegistrationRequest;
  static deserializeBinaryFromReader(
    message: CreateTemplateRegistrationRequest,
    reader: jspb.BinaryReader,
  ): CreateTemplateRegistrationRequest;
}

export namespace CreateTemplateRegistrationRequest {
  export type AsObject = {
    templateRegistration?: sidechain_types_pb.TemplateRegistration.AsObject;
    feePerGram: number;
  };
}

export class CreateTemplateRegistrationResponse extends jspb.Message {
  getTxId(): number;
  setTxId(value: number): CreateTemplateRegistrationResponse;

  getTemplateAddress(): Uint8Array | string;
  getTemplateAddress_asU8(): Uint8Array;
  getTemplateAddress_asB64(): string;
  setTemplateAddress(value: Uint8Array | string): CreateTemplateRegistrationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTemplateRegistrationResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateTemplateRegistrationResponse,
  ): CreateTemplateRegistrationResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTemplateRegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTemplateRegistrationResponse;
  static deserializeBinaryFromReader(
    message: CreateTemplateRegistrationResponse,
    reader: jspb.BinaryReader,
  ): CreateTemplateRegistrationResponse;
}

export namespace CreateTemplateRegistrationResponse {
  export type AsObject = {
    txId: number;
    templateAddress: Uint8Array | string;
  };
}

export class CancelTransactionRequest extends jspb.Message {
  getTxId(): number;
  setTxId(value: number): CancelTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTransactionRequest): CancelTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: CancelTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTransactionRequest;
  static deserializeBinaryFromReader(
    message: CancelTransactionRequest,
    reader: jspb.BinaryReader,
  ): CancelTransactionRequest;
}

export namespace CancelTransactionRequest {
  export type AsObject = {
    txId: number;
  };
}

export class CancelTransactionResponse extends jspb.Message {
  getIsSuccess(): boolean;
  setIsSuccess(value: boolean): CancelTransactionResponse;

  getFailureMessage(): string;
  setFailureMessage(value: string): CancelTransactionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTransactionResponse): CancelTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: CancelTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTransactionResponse;
  static deserializeBinaryFromReader(
    message: CancelTransactionResponse,
    reader: jspb.BinaryReader,
  ): CancelTransactionResponse;
}

export namespace CancelTransactionResponse {
  export type AsObject = {
    isSuccess: boolean;
    failureMessage: string;
  };
}

export class RevalidateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevalidateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevalidateRequest): RevalidateRequest.AsObject;
  static serializeBinaryToWriter(message: RevalidateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevalidateRequest;
  static deserializeBinaryFromReader(message: RevalidateRequest, reader: jspb.BinaryReader): RevalidateRequest;
}

export namespace RevalidateRequest {
  export type AsObject = {};
}

export class RevalidateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevalidateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevalidateResponse): RevalidateResponse.AsObject;
  static serializeBinaryToWriter(message: RevalidateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevalidateResponse;
  static deserializeBinaryFromReader(message: RevalidateResponse, reader: jspb.BinaryReader): RevalidateResponse;
}

export namespace RevalidateResponse {
  export type AsObject = {};
}

export class ValidateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateRequest): ValidateRequest.AsObject;
  static serializeBinaryToWriter(message: ValidateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateRequest;
  static deserializeBinaryFromReader(message: ValidateRequest, reader: jspb.BinaryReader): ValidateRequest;
}

export namespace ValidateRequest {
  export type AsObject = {};
}

export class ValidateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateResponse): ValidateResponse.AsObject;
  static serializeBinaryToWriter(message: ValidateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateResponse;
  static deserializeBinaryFromReader(message: ValidateResponse, reader: jspb.BinaryReader): ValidateResponse;
}

export namespace ValidateResponse {
  export type AsObject = {};
}

export class SetBaseNodeRequest extends jspb.Message {
  getPublicKeyHex(): string;
  setPublicKeyHex(value: string): SetBaseNodeRequest;

  getNetAddress(): string;
  setNetAddress(value: string): SetBaseNodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetBaseNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetBaseNodeRequest): SetBaseNodeRequest.AsObject;
  static serializeBinaryToWriter(message: SetBaseNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetBaseNodeRequest;
  static deserializeBinaryFromReader(message: SetBaseNodeRequest, reader: jspb.BinaryReader): SetBaseNodeRequest;
}

export namespace SetBaseNodeRequest {
  export type AsObject = {
    publicKeyHex: string;
    netAddress: string;
  };
}

export class SetBaseNodeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetBaseNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetBaseNodeResponse): SetBaseNodeResponse.AsObject;
  static serializeBinaryToWriter(message: SetBaseNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetBaseNodeResponse;
  static deserializeBinaryFromReader(message: SetBaseNodeResponse, reader: jspb.BinaryReader): SetBaseNodeResponse;
}

export namespace SetBaseNodeResponse {
  export type AsObject = {};
}

export class GetConnectivityRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectivityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectivityRequest): GetConnectivityRequest.AsObject;
  static serializeBinaryToWriter(message: GetConnectivityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectivityRequest;
  static deserializeBinaryFromReader(
    message: GetConnectivityRequest,
    reader: jspb.BinaryReader,
  ): GetConnectivityRequest;
}

export namespace GetConnectivityRequest {
  export type AsObject = {};
}

export class CheckConnectivityResponse extends jspb.Message {
  getStatus(): CheckConnectivityResponse.OnlineStatus;
  setStatus(value: CheckConnectivityResponse.OnlineStatus): CheckConnectivityResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckConnectivityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckConnectivityResponse): CheckConnectivityResponse.AsObject;
  static serializeBinaryToWriter(message: CheckConnectivityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckConnectivityResponse;
  static deserializeBinaryFromReader(
    message: CheckConnectivityResponse,
    reader: jspb.BinaryReader,
  ): CheckConnectivityResponse;
}

export namespace CheckConnectivityResponse {
  export type AsObject = {
    status: CheckConnectivityResponse.OnlineStatus;
  };

  export enum OnlineStatus {
    CONNECTING = 0,
    ONLINE = 1,
    OFFLINE = 2,
  }
}

export class TransactionEventRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionEventRequest): TransactionEventRequest.AsObject;
  static serializeBinaryToWriter(message: TransactionEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionEventRequest;
  static deserializeBinaryFromReader(
    message: TransactionEventRequest,
    reader: jspb.BinaryReader,
  ): TransactionEventRequest;
}

export namespace TransactionEventRequest {
  export type AsObject = {};
}

export class TransactionEvent extends jspb.Message {
  getEvent(): string;
  setEvent(value: string): TransactionEvent;

  getTxId(): string;
  setTxId(value: string): TransactionEvent;

  getSourceAddress(): Uint8Array | string;
  getSourceAddress_asU8(): Uint8Array;
  getSourceAddress_asB64(): string;
  setSourceAddress(value: Uint8Array | string): TransactionEvent;

  getDestAddress(): Uint8Array | string;
  getDestAddress_asU8(): Uint8Array;
  getDestAddress_asB64(): string;
  setDestAddress(value: Uint8Array | string): TransactionEvent;

  getStatus(): string;
  setStatus(value: string): TransactionEvent;

  getDirection(): string;
  setDirection(value: string): TransactionEvent;

  getAmount(): number;
  setAmount(value: number): TransactionEvent;

  getPaymentId(): Uint8Array | string;
  getPaymentId_asU8(): Uint8Array;
  getPaymentId_asB64(): string;
  setPaymentId(value: Uint8Array | string): TransactionEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionEvent): TransactionEvent.AsObject;
  static serializeBinaryToWriter(message: TransactionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionEvent;
  static deserializeBinaryFromReader(message: TransactionEvent, reader: jspb.BinaryReader): TransactionEvent;
}

export namespace TransactionEvent {
  export type AsObject = {
    event: string;
    txId: string;
    sourceAddress: Uint8Array | string;
    destAddress: Uint8Array | string;
    status: string;
    direction: string;
    amount: number;
    paymentId: Uint8Array | string;
  };
}

export class TransactionEventResponse extends jspb.Message {
  getTransaction(): TransactionEvent | undefined;
  setTransaction(value?: TransactionEvent): TransactionEventResponse;
  hasTransaction(): boolean;
  clearTransaction(): TransactionEventResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionEventResponse): TransactionEventResponse.AsObject;
  static serializeBinaryToWriter(message: TransactionEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionEventResponse;
  static deserializeBinaryFromReader(
    message: TransactionEventResponse,
    reader: jspb.BinaryReader,
  ): TransactionEventResponse;
}

export namespace TransactionEventResponse {
  export type AsObject = {
    transaction?: TransactionEvent.AsObject;
  };
}

export class RegisterValidatorNodeRequest extends jspb.Message {
  getValidatorNodePublicKey(): Uint8Array | string;
  getValidatorNodePublicKey_asU8(): Uint8Array;
  getValidatorNodePublicKey_asB64(): string;
  setValidatorNodePublicKey(value: Uint8Array | string): RegisterValidatorNodeRequest;

  getValidatorNodeSignature(): types_pb.Signature | undefined;
  setValidatorNodeSignature(value?: types_pb.Signature): RegisterValidatorNodeRequest;
  hasValidatorNodeSignature(): boolean;
  clearValidatorNodeSignature(): RegisterValidatorNodeRequest;

  getFeePerGram(): number;
  setFeePerGram(value: number): RegisterValidatorNodeRequest;

  getPaymentId(): Uint8Array | string;
  getPaymentId_asU8(): Uint8Array;
  getPaymentId_asB64(): string;
  setPaymentId(value: Uint8Array | string): RegisterValidatorNodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterValidatorNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterValidatorNodeRequest): RegisterValidatorNodeRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterValidatorNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterValidatorNodeRequest;
  static deserializeBinaryFromReader(
    message: RegisterValidatorNodeRequest,
    reader: jspb.BinaryReader,
  ): RegisterValidatorNodeRequest;
}

export namespace RegisterValidatorNodeRequest {
  export type AsObject = {
    validatorNodePublicKey: Uint8Array | string;
    validatorNodeSignature?: types_pb.Signature.AsObject;
    feePerGram: number;
    paymentId: Uint8Array | string;
  };
}

export class RegisterValidatorNodeResponse extends jspb.Message {
  getTransactionId(): number;
  setTransactionId(value: number): RegisterValidatorNodeResponse;

  getIsSuccess(): boolean;
  setIsSuccess(value: boolean): RegisterValidatorNodeResponse;

  getFailureMessage(): string;
  setFailureMessage(value: string): RegisterValidatorNodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterValidatorNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterValidatorNodeResponse): RegisterValidatorNodeResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterValidatorNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterValidatorNodeResponse;
  static deserializeBinaryFromReader(
    message: RegisterValidatorNodeResponse,
    reader: jspb.BinaryReader,
  ): RegisterValidatorNodeResponse;
}

export namespace RegisterValidatorNodeResponse {
  export type AsObject = {
    transactionId: number;
    isSuccess: boolean;
    failureMessage: string;
  };
}

export enum TransactionDirection {
  TRANSACTION_DIRECTION_UNKNOWN = 0,
  TRANSACTION_DIRECTION_INBOUND = 1,
  TRANSACTION_DIRECTION_OUTBOUND = 2,
}
export enum TransactionStatus {
  TRANSACTION_STATUS_COMPLETED = 0,
  TRANSACTION_STATUS_BROADCAST = 1,
  TRANSACTION_STATUS_MINED_UNCONFIRMED = 2,
  TRANSACTION_STATUS_IMPORTED = 3,
  TRANSACTION_STATUS_PENDING = 4,
  TRANSACTION_STATUS_COINBASE = 5,
  TRANSACTION_STATUS_MINED_CONFIRMED = 6,
  TRANSACTION_STATUS_REJECTED = 7,
  TRANSACTION_STATUS_ONE_SIDED_UNCONFIRMED = 8,
  TRANSACTION_STATUS_ONE_SIDED_CONFIRMED = 9,
  TRANSACTION_STATUS_QUEUED = 10,
  TRANSACTION_STATUS_NOT_FOUND = 11,
  TRANSACTION_STATUS_COINBASE_UNCONFIRMED = 12,
  TRANSACTION_STATUS_COINBASE_CONFIRMED = 13,
  TRANSACTION_STATUS_COINBASE_NOT_IN_BLOCK_CHAIN = 14,
}
