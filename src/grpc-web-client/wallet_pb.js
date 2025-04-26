// source: wallet.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require("google-protobuf");
var goog = jspb;
var global =
  (typeof globalThis !== "undefined" && globalThis) ||
  (typeof window !== "undefined" && window) ||
  (typeof global !== "undefined" && global) ||
  (typeof self !== "undefined" && self) ||
  function () {
    return this;
  }.call(null) ||
  Function("return this")();

var google_protobuf_timestamp_pb = require("google-protobuf/google/protobuf/timestamp_pb.js");
goog.object.extend(proto, google_protobuf_timestamp_pb);
var types_pb = require("./types_pb.js");
goog.object.extend(proto, types_pb);
var transaction_pb = require("./transaction_pb.js");
goog.object.extend(proto, transaction_pb);
var sidechain_types_pb = require("./sidechain_types_pb.js");
goog.object.extend(proto, sidechain_types_pb);
var network_pb = require("./network_pb.js");
goog.object.extend(proto, network_pb);
goog.exportSymbol("proto.tari.rpc.CancelTransactionRequest", null, global);
goog.exportSymbol("proto.tari.rpc.CancelTransactionResponse", null, global);
goog.exportSymbol("proto.tari.rpc.CheckConnectivityResponse", null, global);
goog.exportSymbol("proto.tari.rpc.CheckConnectivityResponse.OnlineStatus", null, global);
goog.exportSymbol("proto.tari.rpc.ClaimHtlcRefundRequest", null, global);
goog.exportSymbol("proto.tari.rpc.ClaimHtlcRefundResponse", null, global);
goog.exportSymbol("proto.tari.rpc.ClaimShaAtomicSwapRequest", null, global);
goog.exportSymbol("proto.tari.rpc.ClaimShaAtomicSwapResponse", null, global);
goog.exportSymbol("proto.tari.rpc.CoinSplitRequest", null, global);
goog.exportSymbol("proto.tari.rpc.CoinSplitResponse", null, global);
goog.exportSymbol("proto.tari.rpc.CreateBurnTransactionRequest", null, global);
goog.exportSymbol("proto.tari.rpc.CreateBurnTransactionResponse", null, global);
goog.exportSymbol("proto.tari.rpc.CreateTemplateRegistrationRequest", null, global);
goog.exportSymbol("proto.tari.rpc.CreateTemplateRegistrationResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetAddressResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetBalanceRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetBalanceResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetCompleteAddressResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetCompletedTransactionsRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetCompletedTransactionsResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetConnectivityRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetStateRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetStateResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetTransactionInfoRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetTransactionInfoResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetUnspentAmountsResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetVersionRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetVersionResponse", null, global);
goog.exportSymbol("proto.tari.rpc.ImportUtxosRequest", null, global);
goog.exportSymbol("proto.tari.rpc.ImportUtxosResponse", null, global);
goog.exportSymbol("proto.tari.rpc.PaymentRecipient", null, global);
goog.exportSymbol("proto.tari.rpc.PaymentRecipient.PaymentType", null, global);
goog.exportSymbol("proto.tari.rpc.RegisterValidatorNodeRequest", null, global);
goog.exportSymbol("proto.tari.rpc.RegisterValidatorNodeResponse", null, global);
goog.exportSymbol("proto.tari.rpc.RevalidateRequest", null, global);
goog.exportSymbol("proto.tari.rpc.RevalidateResponse", null, global);
goog.exportSymbol("proto.tari.rpc.SendShaAtomicSwapRequest", null, global);
goog.exportSymbol("proto.tari.rpc.SendShaAtomicSwapResponse", null, global);
goog.exportSymbol("proto.tari.rpc.SetBaseNodeRequest", null, global);
goog.exportSymbol("proto.tari.rpc.SetBaseNodeResponse", null, global);
goog.exportSymbol("proto.tari.rpc.TransactionDirection", null, global);
goog.exportSymbol("proto.tari.rpc.TransactionEvent", null, global);
goog.exportSymbol("proto.tari.rpc.TransactionEventRequest", null, global);
goog.exportSymbol("proto.tari.rpc.TransactionEventResponse", null, global);
goog.exportSymbol("proto.tari.rpc.TransactionInfo", null, global);
goog.exportSymbol("proto.tari.rpc.TransactionStatus", null, global);
goog.exportSymbol("proto.tari.rpc.TransferRequest", null, global);
goog.exportSymbol("proto.tari.rpc.TransferResponse", null, global);
goog.exportSymbol("proto.tari.rpc.TransferResult", null, global);
goog.exportSymbol("proto.tari.rpc.ValidateRequest", null, global);
goog.exportSymbol("proto.tari.rpc.ValidateResponse", null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.GetVersionRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetVersionRequest.displayName = "proto.tari.rpc.GetVersionRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.GetVersionResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetVersionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetVersionResponse.displayName = "proto.tari.rpc.GetVersionResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.GetAddressResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetAddressResponse.displayName = "proto.tari.rpc.GetAddressResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.GetCompleteAddressResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetCompleteAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetCompleteAddressResponse.displayName = "proto.tari.rpc.GetCompleteAddressResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.TransferRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.TransferRequest.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.TransferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.TransferRequest.displayName = "proto.tari.rpc.TransferRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.SendShaAtomicSwapRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.SendShaAtomicSwapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.SendShaAtomicSwapRequest.displayName = "proto.tari.rpc.SendShaAtomicSwapRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.CreateBurnTransactionRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.CreateBurnTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.CreateBurnTransactionRequest.displayName = "proto.tari.rpc.CreateBurnTransactionRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.PaymentRecipient = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.PaymentRecipient, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.PaymentRecipient.displayName = "proto.tari.rpc.PaymentRecipient";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.TransferResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.TransferResponse.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.TransferResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.TransferResponse.displayName = "proto.tari.rpc.TransferResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.SendShaAtomicSwapResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.SendShaAtomicSwapResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.SendShaAtomicSwapResponse.displayName = "proto.tari.rpc.SendShaAtomicSwapResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.CreateBurnTransactionResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.CreateBurnTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.CreateBurnTransactionResponse.displayName = "proto.tari.rpc.CreateBurnTransactionResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.TransferResult = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.TransferResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.TransferResult.displayName = "proto.tari.rpc.TransferResult";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.ClaimShaAtomicSwapRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.ClaimShaAtomicSwapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.ClaimShaAtomicSwapRequest.displayName = "proto.tari.rpc.ClaimShaAtomicSwapRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.ClaimShaAtomicSwapResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.ClaimShaAtomicSwapResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.ClaimShaAtomicSwapResponse.displayName = "proto.tari.rpc.ClaimShaAtomicSwapResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.ClaimHtlcRefundRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.ClaimHtlcRefundRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.ClaimHtlcRefundRequest.displayName = "proto.tari.rpc.ClaimHtlcRefundRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.ClaimHtlcRefundResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.ClaimHtlcRefundResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.ClaimHtlcRefundResponse.displayName = "proto.tari.rpc.ClaimHtlcRefundResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.GetTransactionInfoRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.GetTransactionInfoRequest.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.GetTransactionInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetTransactionInfoRequest.displayName = "proto.tari.rpc.GetTransactionInfoRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.GetTransactionInfoResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.GetTransactionInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.GetTransactionInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetTransactionInfoResponse.displayName = "proto.tari.rpc.GetTransactionInfoResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.TransactionInfo = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.TransactionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.TransactionInfo.displayName = "proto.tari.rpc.TransactionInfo";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.GetCompletedTransactionsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetCompletedTransactionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetCompletedTransactionsRequest.displayName = "proto.tari.rpc.GetCompletedTransactionsRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.GetCompletedTransactionsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetCompletedTransactionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetCompletedTransactionsResponse.displayName = "proto.tari.rpc.GetCompletedTransactionsResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.GetBalanceRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetBalanceRequest.displayName = "proto.tari.rpc.GetBalanceRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.GetStateRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetStateRequest.displayName = "proto.tari.rpc.GetStateRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.GetBalanceResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetBalanceResponse.displayName = "proto.tari.rpc.GetBalanceResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.GetStateResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetStateResponse.displayName = "proto.tari.rpc.GetStateResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.GetUnspentAmountsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.GetUnspentAmountsResponse.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.GetUnspentAmountsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetUnspentAmountsResponse.displayName = "proto.tari.rpc.GetUnspentAmountsResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.CoinSplitRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.CoinSplitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.CoinSplitRequest.displayName = "proto.tari.rpc.CoinSplitRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.CoinSplitResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.CoinSplitResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.CoinSplitResponse.displayName = "proto.tari.rpc.CoinSplitResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.ImportUtxosRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.ImportUtxosRequest.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.ImportUtxosRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.ImportUtxosRequest.displayName = "proto.tari.rpc.ImportUtxosRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.ImportUtxosResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.ImportUtxosResponse.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.ImportUtxosResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.ImportUtxosResponse.displayName = "proto.tari.rpc.ImportUtxosResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.CreateTemplateRegistrationRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.CreateTemplateRegistrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.CreateTemplateRegistrationRequest.displayName = "proto.tari.rpc.CreateTemplateRegistrationRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.CreateTemplateRegistrationResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.CreateTemplateRegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.CreateTemplateRegistrationResponse.displayName = "proto.tari.rpc.CreateTemplateRegistrationResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.CancelTransactionRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.CancelTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.CancelTransactionRequest.displayName = "proto.tari.rpc.CancelTransactionRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.CancelTransactionResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.CancelTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.CancelTransactionResponse.displayName = "proto.tari.rpc.CancelTransactionResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.RevalidateRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.RevalidateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.RevalidateRequest.displayName = "proto.tari.rpc.RevalidateRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.RevalidateResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.RevalidateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.RevalidateResponse.displayName = "proto.tari.rpc.RevalidateResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.ValidateRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.ValidateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.ValidateRequest.displayName = "proto.tari.rpc.ValidateRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.ValidateResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.ValidateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.ValidateResponse.displayName = "proto.tari.rpc.ValidateResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.SetBaseNodeRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.SetBaseNodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.SetBaseNodeRequest.displayName = "proto.tari.rpc.SetBaseNodeRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.SetBaseNodeResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.SetBaseNodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.SetBaseNodeResponse.displayName = "proto.tari.rpc.SetBaseNodeResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.GetConnectivityRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetConnectivityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetConnectivityRequest.displayName = "proto.tari.rpc.GetConnectivityRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.CheckConnectivityResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.CheckConnectivityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.CheckConnectivityResponse.displayName = "proto.tari.rpc.CheckConnectivityResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.TransactionEventRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.TransactionEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.TransactionEventRequest.displayName = "proto.tari.rpc.TransactionEventRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.TransactionEvent = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.TransactionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.TransactionEvent.displayName = "proto.tari.rpc.TransactionEvent";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.TransactionEventResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.TransactionEventResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.TransactionEventResponse.displayName = "proto.tari.rpc.TransactionEventResponse";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.RegisterValidatorNodeRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.RegisterValidatorNodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.RegisterValidatorNodeRequest.displayName = "proto.tari.rpc.RegisterValidatorNodeRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tari.rpc.RegisterValidatorNodeResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.RegisterValidatorNodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.RegisterValidatorNodeResponse.displayName = "proto.tari.rpc.RegisterValidatorNodeResponse";
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.GetVersionRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetVersionRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetVersionRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetVersionRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.GetVersionRequest}
 */
proto.tari.rpc.GetVersionRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetVersionRequest();
  return proto.tari.rpc.GetVersionRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetVersionRequest}
 */
proto.tari.rpc.GetVersionRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetVersionRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetVersionRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.GetVersionResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetVersionResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetVersionResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetVersionResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        version: jspb.Message.getFieldWithDefault(msg, 1, ""),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.GetVersionResponse}
 */
proto.tari.rpc.GetVersionResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetVersionResponse();
  return proto.tari.rpc.GetVersionResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetVersionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetVersionResponse}
 */
proto.tari.rpc.GetVersionResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setVersion(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetVersionResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetVersionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetVersionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetVersionResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string version = 1;
 * @return {string}
 */
proto.tari.rpc.GetVersionResponse.prototype.getVersion = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.GetVersionResponse} returns this
 */
proto.tari.rpc.GetVersionResponse.prototype.setVersion = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.GetAddressResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetAddressResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetAddressResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetAddressResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        interactiveAddress: msg.getInteractiveAddress_asB64(),
        oneSidedAddress: msg.getOneSidedAddress_asB64(),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.GetAddressResponse}
 */
proto.tari.rpc.GetAddressResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetAddressResponse();
  return proto.tari.rpc.GetAddressResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetAddressResponse}
 */
proto.tari.rpc.GetAddressResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setInteractiveAddress(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setOneSidedAddress(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetAddressResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetAddressResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getInteractiveAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getOneSidedAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
};

/**
 * optional bytes interactive_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetAddressResponse.prototype.getInteractiveAddress = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes interactive_address = 1;
 * This is a type-conversion wrapper around `getInteractiveAddress()`
 * @return {string}
 */
proto.tari.rpc.GetAddressResponse.prototype.getInteractiveAddress_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getInteractiveAddress()));
};

/**
 * optional bytes interactive_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInteractiveAddress()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetAddressResponse.prototype.getInteractiveAddress_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getInteractiveAddress()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetAddressResponse} returns this
 */
proto.tari.rpc.GetAddressResponse.prototype.setInteractiveAddress = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional bytes one_sided_address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetAddressResponse.prototype.getOneSidedAddress = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * optional bytes one_sided_address = 2;
 * This is a type-conversion wrapper around `getOneSidedAddress()`
 * @return {string}
 */
proto.tari.rpc.GetAddressResponse.prototype.getOneSidedAddress_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getOneSidedAddress()));
};

/**
 * optional bytes one_sided_address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOneSidedAddress()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetAddressResponse.prototype.getOneSidedAddress_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getOneSidedAddress()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetAddressResponse} returns this
 */
proto.tari.rpc.GetAddressResponse.prototype.setOneSidedAddress = function (value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.GetCompleteAddressResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetCompleteAddressResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetCompleteAddressResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetCompleteAddressResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        interactiveAddress: msg.getInteractiveAddress_asB64(),
        oneSidedAddress: msg.getOneSidedAddress_asB64(),
        interactiveAddressBase58: jspb.Message.getFieldWithDefault(msg, 3, ""),
        oneSidedAddressBase58: jspb.Message.getFieldWithDefault(msg, 4, ""),
        interactiveAddressEmoji: jspb.Message.getFieldWithDefault(msg, 5, ""),
        oneSidedAddressEmoji: jspb.Message.getFieldWithDefault(msg, 6, ""),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.GetCompleteAddressResponse}
 */
proto.tari.rpc.GetCompleteAddressResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetCompleteAddressResponse();
  return proto.tari.rpc.GetCompleteAddressResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetCompleteAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetCompleteAddressResponse}
 */
proto.tari.rpc.GetCompleteAddressResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setInteractiveAddress(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setOneSidedAddress(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setInteractiveAddressBase58(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setOneSidedAddressBase58(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setInteractiveAddressEmoji(value);
        break;
      case 6:
        var value = /** @type {string} */ (reader.readString());
        msg.setOneSidedAddressEmoji(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetCompleteAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetCompleteAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetCompleteAddressResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getInteractiveAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getOneSidedAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
  f = message.getInteractiveAddressBase58();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getOneSidedAddressBase58();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getInteractiveAddressEmoji();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
  f = message.getOneSidedAddressEmoji();
  if (f.length > 0) {
    writer.writeString(6, f);
  }
};

/**
 * optional bytes interactive_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.getInteractiveAddress = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes interactive_address = 1;
 * This is a type-conversion wrapper around `getInteractiveAddress()`
 * @return {string}
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.getInteractiveAddress_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getInteractiveAddress()));
};

/**
 * optional bytes interactive_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInteractiveAddress()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.getInteractiveAddress_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getInteractiveAddress()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetCompleteAddressResponse} returns this
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.setInteractiveAddress = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional bytes one_sided_address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.getOneSidedAddress = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * optional bytes one_sided_address = 2;
 * This is a type-conversion wrapper around `getOneSidedAddress()`
 * @return {string}
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.getOneSidedAddress_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getOneSidedAddress()));
};

/**
 * optional bytes one_sided_address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOneSidedAddress()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.getOneSidedAddress_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getOneSidedAddress()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetCompleteAddressResponse} returns this
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.setOneSidedAddress = function (value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};

/**
 * optional string interactive_address_base58 = 3;
 * @return {string}
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.getInteractiveAddressBase58 = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.GetCompleteAddressResponse} returns this
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.setInteractiveAddressBase58 = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string one_sided_address_base58 = 4;
 * @return {string}
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.getOneSidedAddressBase58 = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.GetCompleteAddressResponse} returns this
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.setOneSidedAddressBase58 = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string interactive_address_emoji = 5;
 * @return {string}
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.getInteractiveAddressEmoji = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.GetCompleteAddressResponse} returns this
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.setInteractiveAddressEmoji = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional string one_sided_address_emoji = 6;
 * @return {string}
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.getOneSidedAddressEmoji = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.GetCompleteAddressResponse} returns this
 */
proto.tari.rpc.GetCompleteAddressResponse.prototype.setOneSidedAddressEmoji = function (value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.TransferRequest.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.TransferRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.TransferRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.TransferRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.TransferRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        recipientsList: jspb.Message.toObjectList(
          msg.getRecipientsList(),
          proto.tari.rpc.PaymentRecipient.toObject,
          includeInstance,
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.TransferRequest}
 */
proto.tari.rpc.TransferRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.TransferRequest();
  return proto.tari.rpc.TransferRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.TransferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.TransferRequest}
 */
proto.tari.rpc.TransferRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.tari.rpc.PaymentRecipient();
        reader.readMessage(value, proto.tari.rpc.PaymentRecipient.deserializeBinaryFromReader);
        msg.addRecipients(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.TransferRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.TransferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.TransferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.TransferRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.tari.rpc.PaymentRecipient.serializeBinaryToWriter);
  }
};

/**
 * repeated PaymentRecipient recipients = 1;
 * @return {!Array<!proto.tari.rpc.PaymentRecipient>}
 */
proto.tari.rpc.TransferRequest.prototype.getRecipientsList = function () {
  return /** @type{!Array<!proto.tari.rpc.PaymentRecipient>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tari.rpc.PaymentRecipient, 1)
  );
};

/**
 * @param {!Array<!proto.tari.rpc.PaymentRecipient>} value
 * @return {!proto.tari.rpc.TransferRequest} returns this
 */
proto.tari.rpc.TransferRequest.prototype.setRecipientsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.tari.rpc.PaymentRecipient=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.PaymentRecipient}
 */
proto.tari.rpc.TransferRequest.prototype.addRecipients = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tari.rpc.PaymentRecipient, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.TransferRequest} returns this
 */
proto.tari.rpc.TransferRequest.prototype.clearRecipientsList = function () {
  return this.setRecipientsList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.SendShaAtomicSwapRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.SendShaAtomicSwapRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.SendShaAtomicSwapRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.SendShaAtomicSwapRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        recipient: (f = msg.getRecipient()) && proto.tari.rpc.PaymentRecipient.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.SendShaAtomicSwapRequest}
 */
proto.tari.rpc.SendShaAtomicSwapRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.SendShaAtomicSwapRequest();
  return proto.tari.rpc.SendShaAtomicSwapRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.SendShaAtomicSwapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.SendShaAtomicSwapRequest}
 */
proto.tari.rpc.SendShaAtomicSwapRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.tari.rpc.PaymentRecipient();
        reader.readMessage(value, proto.tari.rpc.PaymentRecipient.deserializeBinaryFromReader);
        msg.setRecipient(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.SendShaAtomicSwapRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.SendShaAtomicSwapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.SendShaAtomicSwapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.SendShaAtomicSwapRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getRecipient();
  if (f != null) {
    writer.writeMessage(1, f, proto.tari.rpc.PaymentRecipient.serializeBinaryToWriter);
  }
};

/**
 * optional PaymentRecipient recipient = 1;
 * @return {?proto.tari.rpc.PaymentRecipient}
 */
proto.tari.rpc.SendShaAtomicSwapRequest.prototype.getRecipient = function () {
  return /** @type{?proto.tari.rpc.PaymentRecipient} */ (
    jspb.Message.getWrapperField(this, proto.tari.rpc.PaymentRecipient, 1)
  );
};

/**
 * @param {?proto.tari.rpc.PaymentRecipient|undefined} value
 * @return {!proto.tari.rpc.SendShaAtomicSwapRequest} returns this
 */
proto.tari.rpc.SendShaAtomicSwapRequest.prototype.setRecipient = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.SendShaAtomicSwapRequest} returns this
 */
proto.tari.rpc.SendShaAtomicSwapRequest.prototype.clearRecipient = function () {
  return this.setRecipient(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.SendShaAtomicSwapRequest.prototype.hasRecipient = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.CreateBurnTransactionRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.CreateBurnTransactionRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.CreateBurnTransactionRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.CreateBurnTransactionRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        amount: jspb.Message.getFieldWithDefault(msg, 1, 0),
        feePerGram: jspb.Message.getFieldWithDefault(msg, 2, 0),
        claimPublicKey: msg.getClaimPublicKey_asB64(),
        paymentId: msg.getPaymentId_asB64(),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.CreateBurnTransactionRequest}
 */
proto.tari.rpc.CreateBurnTransactionRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.CreateBurnTransactionRequest();
  return proto.tari.rpc.CreateBurnTransactionRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.CreateBurnTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.CreateBurnTransactionRequest}
 */
proto.tari.rpc.CreateBurnTransactionRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setAmount(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFeePerGram(value);
        break;
      case 4:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setClaimPublicKey(value);
        break;
      case 5:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setPaymentId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.CreateBurnTransactionRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.CreateBurnTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.CreateBurnTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.CreateBurnTransactionRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getFeePerGram();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getClaimPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(4, f);
  }
  f = message.getPaymentId_asU8();
  if (f.length > 0) {
    writer.writeBytes(5, f);
  }
};

/**
 * optional uint64 amount = 1;
 * @return {number}
 */
proto.tari.rpc.CreateBurnTransactionRequest.prototype.getAmount = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.CreateBurnTransactionRequest} returns this
 */
proto.tari.rpc.CreateBurnTransactionRequest.prototype.setAmount = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional uint64 fee_per_gram = 2;
 * @return {number}
 */
proto.tari.rpc.CreateBurnTransactionRequest.prototype.getFeePerGram = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.CreateBurnTransactionRequest} returns this
 */
proto.tari.rpc.CreateBurnTransactionRequest.prototype.setFeePerGram = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional bytes claim_public_key = 4;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.CreateBurnTransactionRequest.prototype.getClaimPublicKey = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};

/**
 * optional bytes claim_public_key = 4;
 * This is a type-conversion wrapper around `getClaimPublicKey()`
 * @return {string}
 */
proto.tari.rpc.CreateBurnTransactionRequest.prototype.getClaimPublicKey_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getClaimPublicKey()));
};

/**
 * optional bytes claim_public_key = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getClaimPublicKey()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.CreateBurnTransactionRequest.prototype.getClaimPublicKey_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getClaimPublicKey()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.CreateBurnTransactionRequest} returns this
 */
proto.tari.rpc.CreateBurnTransactionRequest.prototype.setClaimPublicKey = function (value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};

/**
 * optional bytes payment_id = 5;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.CreateBurnTransactionRequest.prototype.getPaymentId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};

/**
 * optional bytes payment_id = 5;
 * This is a type-conversion wrapper around `getPaymentId()`
 * @return {string}
 */
proto.tari.rpc.CreateBurnTransactionRequest.prototype.getPaymentId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getPaymentId()));
};

/**
 * optional bytes payment_id = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPaymentId()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.CreateBurnTransactionRequest.prototype.getPaymentId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getPaymentId()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.CreateBurnTransactionRequest} returns this
 */
proto.tari.rpc.CreateBurnTransactionRequest.prototype.setPaymentId = function (value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.PaymentRecipient.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.PaymentRecipient.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.PaymentRecipient} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.PaymentRecipient.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        address: jspb.Message.getFieldWithDefault(msg, 1, ""),
        amount: jspb.Message.getFieldWithDefault(msg, 2, 0),
        feePerGram: jspb.Message.getFieldWithDefault(msg, 3, 0),
        paymentType: jspb.Message.getFieldWithDefault(msg, 5, 0),
        paymentId: msg.getPaymentId_asB64(),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.PaymentRecipient}
 */
proto.tari.rpc.PaymentRecipient.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.PaymentRecipient();
  return proto.tari.rpc.PaymentRecipient.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.PaymentRecipient} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.PaymentRecipient}
 */
proto.tari.rpc.PaymentRecipient.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddress(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setAmount(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFeePerGram(value);
        break;
      case 5:
        var value = /** @type {!proto.tari.rpc.PaymentRecipient.PaymentType} */ (reader.readEnum());
        msg.setPaymentType(value);
        break;
      case 6:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setPaymentId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.PaymentRecipient.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.PaymentRecipient.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.PaymentRecipient} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.PaymentRecipient.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getFeePerGram();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
  f = message.getPaymentType();
  if (f !== 0.0) {
    writer.writeEnum(5, f);
  }
  f = message.getPaymentId_asU8();
  if (f.length > 0) {
    writer.writeBytes(6, f);
  }
};

/**
 * @enum {number}
 */
proto.tari.rpc.PaymentRecipient.PaymentType = {
  STANDARD_MIMBLEWIMBLE: 0,
  ONE_SIDED: 1,
  ONE_SIDED_TO_STEALTH_ADDRESS: 2,
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.tari.rpc.PaymentRecipient.prototype.getAddress = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.PaymentRecipient} returns this
 */
proto.tari.rpc.PaymentRecipient.prototype.setAddress = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional uint64 amount = 2;
 * @return {number}
 */
proto.tari.rpc.PaymentRecipient.prototype.getAmount = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.PaymentRecipient} returns this
 */
proto.tari.rpc.PaymentRecipient.prototype.setAmount = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional uint64 fee_per_gram = 3;
 * @return {number}
 */
proto.tari.rpc.PaymentRecipient.prototype.getFeePerGram = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.PaymentRecipient} returns this
 */
proto.tari.rpc.PaymentRecipient.prototype.setFeePerGram = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional PaymentType payment_type = 5;
 * @return {!proto.tari.rpc.PaymentRecipient.PaymentType}
 */
proto.tari.rpc.PaymentRecipient.prototype.getPaymentType = function () {
  return /** @type {!proto.tari.rpc.PaymentRecipient.PaymentType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {!proto.tari.rpc.PaymentRecipient.PaymentType} value
 * @return {!proto.tari.rpc.PaymentRecipient} returns this
 */
proto.tari.rpc.PaymentRecipient.prototype.setPaymentType = function (value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};

/**
 * optional bytes payment_id = 6;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.PaymentRecipient.prototype.getPaymentId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};

/**
 * optional bytes payment_id = 6;
 * This is a type-conversion wrapper around `getPaymentId()`
 * @return {string}
 */
proto.tari.rpc.PaymentRecipient.prototype.getPaymentId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getPaymentId()));
};

/**
 * optional bytes payment_id = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPaymentId()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.PaymentRecipient.prototype.getPaymentId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getPaymentId()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.PaymentRecipient} returns this
 */
proto.tari.rpc.PaymentRecipient.prototype.setPaymentId = function (value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.TransferResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.TransferResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.TransferResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.TransferResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.TransferResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        resultsList: jspb.Message.toObjectList(
          msg.getResultsList(),
          proto.tari.rpc.TransferResult.toObject,
          includeInstance,
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.TransferResponse}
 */
proto.tari.rpc.TransferResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.TransferResponse();
  return proto.tari.rpc.TransferResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.TransferResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.TransferResponse}
 */
proto.tari.rpc.TransferResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.tari.rpc.TransferResult();
        reader.readMessage(value, proto.tari.rpc.TransferResult.deserializeBinaryFromReader);
        msg.addResults(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.TransferResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.TransferResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.TransferResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.TransferResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.tari.rpc.TransferResult.serializeBinaryToWriter);
  }
};

/**
 * repeated TransferResult results = 1;
 * @return {!Array<!proto.tari.rpc.TransferResult>}
 */
proto.tari.rpc.TransferResponse.prototype.getResultsList = function () {
  return /** @type{!Array<!proto.tari.rpc.TransferResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tari.rpc.TransferResult, 1)
  );
};

/**
 * @param {!Array<!proto.tari.rpc.TransferResult>} value
 * @return {!proto.tari.rpc.TransferResponse} returns this
 */
proto.tari.rpc.TransferResponse.prototype.setResultsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.tari.rpc.TransferResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.TransferResult}
 */
proto.tari.rpc.TransferResponse.prototype.addResults = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tari.rpc.TransferResult, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.TransferResponse} returns this
 */
proto.tari.rpc.TransferResponse.prototype.clearResultsList = function () {
  return this.setResultsList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.SendShaAtomicSwapResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.SendShaAtomicSwapResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.SendShaAtomicSwapResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.SendShaAtomicSwapResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        transactionId: jspb.Message.getFieldWithDefault(msg, 1, 0),
        preImage: jspb.Message.getFieldWithDefault(msg, 2, ""),
        outputHash: jspb.Message.getFieldWithDefault(msg, 3, ""),
        isSuccess: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
        failureMessage: jspb.Message.getFieldWithDefault(msg, 5, ""),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.SendShaAtomicSwapResponse}
 */
proto.tari.rpc.SendShaAtomicSwapResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.SendShaAtomicSwapResponse();
  return proto.tari.rpc.SendShaAtomicSwapResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.SendShaAtomicSwapResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.SendShaAtomicSwapResponse}
 */
proto.tari.rpc.SendShaAtomicSwapResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTransactionId(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setPreImage(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setOutputHash(value);
        break;
      case 4:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setIsSuccess(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setFailureMessage(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.SendShaAtomicSwapResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.SendShaAtomicSwapResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.SendShaAtomicSwapResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.SendShaAtomicSwapResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTransactionId();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getPreImage();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getOutputHash();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getIsSuccess();
  if (f) {
    writer.writeBool(4, f);
  }
  f = message.getFailureMessage();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
};

/**
 * optional uint64 transaction_id = 1;
 * @return {number}
 */
proto.tari.rpc.SendShaAtomicSwapResponse.prototype.getTransactionId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.SendShaAtomicSwapResponse} returns this
 */
proto.tari.rpc.SendShaAtomicSwapResponse.prototype.setTransactionId = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string pre_image = 2;
 * @return {string}
 */
proto.tari.rpc.SendShaAtomicSwapResponse.prototype.getPreImage = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.SendShaAtomicSwapResponse} returns this
 */
proto.tari.rpc.SendShaAtomicSwapResponse.prototype.setPreImage = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string output_hash = 3;
 * @return {string}
 */
proto.tari.rpc.SendShaAtomicSwapResponse.prototype.getOutputHash = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.SendShaAtomicSwapResponse} returns this
 */
proto.tari.rpc.SendShaAtomicSwapResponse.prototype.setOutputHash = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional bool is_success = 4;
 * @return {boolean}
 */
proto.tari.rpc.SendShaAtomicSwapResponse.prototype.getIsSuccess = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};

/**
 * @param {boolean} value
 * @return {!proto.tari.rpc.SendShaAtomicSwapResponse} returns this
 */
proto.tari.rpc.SendShaAtomicSwapResponse.prototype.setIsSuccess = function (value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};

/**
 * optional string failure_message = 5;
 * @return {string}
 */
proto.tari.rpc.SendShaAtomicSwapResponse.prototype.getFailureMessage = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.SendShaAtomicSwapResponse} returns this
 */
proto.tari.rpc.SendShaAtomicSwapResponse.prototype.setFailureMessage = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.CreateBurnTransactionResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.CreateBurnTransactionResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.CreateBurnTransactionResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.CreateBurnTransactionResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        transactionId: jspb.Message.getFieldWithDefault(msg, 1, 0),
        isSuccess: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
        failureMessage: jspb.Message.getFieldWithDefault(msg, 3, ""),
        commitment: msg.getCommitment_asB64(),
        ownershipProof: (f = msg.getOwnershipProof()) && types_pb.CommitmentSignature.toObject(includeInstance, f),
        rangeProof: msg.getRangeProof_asB64(),
        reciprocalClaimPublicKey: msg.getReciprocalClaimPublicKey_asB64(),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.CreateBurnTransactionResponse}
 */
proto.tari.rpc.CreateBurnTransactionResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.CreateBurnTransactionResponse();
  return proto.tari.rpc.CreateBurnTransactionResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.CreateBurnTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.CreateBurnTransactionResponse}
 */
proto.tari.rpc.CreateBurnTransactionResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTransactionId(value);
        break;
      case 2:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setIsSuccess(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setFailureMessage(value);
        break;
      case 4:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setCommitment(value);
        break;
      case 5:
        var value = new types_pb.CommitmentSignature();
        reader.readMessage(value, types_pb.CommitmentSignature.deserializeBinaryFromReader);
        msg.setOwnershipProof(value);
        break;
      case 6:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setRangeProof(value);
        break;
      case 7:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setReciprocalClaimPublicKey(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.CreateBurnTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.CreateBurnTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.CreateBurnTransactionResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTransactionId();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getIsSuccess();
  if (f) {
    writer.writeBool(2, f);
  }
  f = message.getFailureMessage();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getCommitment_asU8();
  if (f.length > 0) {
    writer.writeBytes(4, f);
  }
  f = message.getOwnershipProof();
  if (f != null) {
    writer.writeMessage(5, f, types_pb.CommitmentSignature.serializeBinaryToWriter);
  }
  f = message.getRangeProof_asU8();
  if (f.length > 0) {
    writer.writeBytes(6, f);
  }
  f = message.getReciprocalClaimPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(7, f);
  }
};

/**
 * optional uint64 transaction_id = 1;
 * @return {number}
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.getTransactionId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.CreateBurnTransactionResponse} returns this
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.setTransactionId = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional bool is_success = 2;
 * @return {boolean}
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.getIsSuccess = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};

/**
 * @param {boolean} value
 * @return {!proto.tari.rpc.CreateBurnTransactionResponse} returns this
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.setIsSuccess = function (value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};

/**
 * optional string failure_message = 3;
 * @return {string}
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.getFailureMessage = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.CreateBurnTransactionResponse} returns this
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.setFailureMessage = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional bytes commitment = 4;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.getCommitment = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};

/**
 * optional bytes commitment = 4;
 * This is a type-conversion wrapper around `getCommitment()`
 * @return {string}
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.getCommitment_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getCommitment()));
};

/**
 * optional bytes commitment = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCommitment()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.getCommitment_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getCommitment()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.CreateBurnTransactionResponse} returns this
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.setCommitment = function (value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};

/**
 * optional CommitmentSignature ownership_proof = 5;
 * @return {?proto.tari.rpc.CommitmentSignature}
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.getOwnershipProof = function () {
  return /** @type{?proto.tari.rpc.CommitmentSignature} */ (
    jspb.Message.getWrapperField(this, types_pb.CommitmentSignature, 5)
  );
};

/**
 * @param {?proto.tari.rpc.CommitmentSignature|undefined} value
 * @return {!proto.tari.rpc.CreateBurnTransactionResponse} returns this
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.setOwnershipProof = function (value) {
  return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.CreateBurnTransactionResponse} returns this
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.clearOwnershipProof = function () {
  return this.setOwnershipProof(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.hasOwnershipProof = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional bytes range_proof = 6;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.getRangeProof = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};

/**
 * optional bytes range_proof = 6;
 * This is a type-conversion wrapper around `getRangeProof()`
 * @return {string}
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.getRangeProof_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getRangeProof()));
};

/**
 * optional bytes range_proof = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRangeProof()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.getRangeProof_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getRangeProof()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.CreateBurnTransactionResponse} returns this
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.setRangeProof = function (value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};

/**
 * optional bytes reciprocal_claim_public_key = 7;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.getReciprocalClaimPublicKey = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};

/**
 * optional bytes reciprocal_claim_public_key = 7;
 * This is a type-conversion wrapper around `getReciprocalClaimPublicKey()`
 * @return {string}
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.getReciprocalClaimPublicKey_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getReciprocalClaimPublicKey()));
};

/**
 * optional bytes reciprocal_claim_public_key = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReciprocalClaimPublicKey()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.getReciprocalClaimPublicKey_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getReciprocalClaimPublicKey()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.CreateBurnTransactionResponse} returns this
 */
proto.tari.rpc.CreateBurnTransactionResponse.prototype.setReciprocalClaimPublicKey = function (value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.TransferResult.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.TransferResult.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.TransferResult} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.TransferResult.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        address: jspb.Message.getFieldWithDefault(msg, 1, ""),
        transactionId: jspb.Message.getFieldWithDefault(msg, 2, 0),
        isSuccess: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
        failureMessage: jspb.Message.getFieldWithDefault(msg, 4, ""),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.TransferResult}
 */
proto.tari.rpc.TransferResult.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.TransferResult();
  return proto.tari.rpc.TransferResult.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.TransferResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.TransferResult}
 */
proto.tari.rpc.TransferResult.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddress(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTransactionId(value);
        break;
      case 3:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setIsSuccess(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setFailureMessage(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.TransferResult.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.TransferResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.TransferResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.TransferResult.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getTransactionId();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getIsSuccess();
  if (f) {
    writer.writeBool(3, f);
  }
  f = message.getFailureMessage();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.tari.rpc.TransferResult.prototype.getAddress = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.TransferResult} returns this
 */
proto.tari.rpc.TransferResult.prototype.setAddress = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional uint64 transaction_id = 2;
 * @return {number}
 */
proto.tari.rpc.TransferResult.prototype.getTransactionId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.TransferResult} returns this
 */
proto.tari.rpc.TransferResult.prototype.setTransactionId = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional bool is_success = 3;
 * @return {boolean}
 */
proto.tari.rpc.TransferResult.prototype.getIsSuccess = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};

/**
 * @param {boolean} value
 * @return {!proto.tari.rpc.TransferResult} returns this
 */
proto.tari.rpc.TransferResult.prototype.setIsSuccess = function (value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};

/**
 * optional string failure_message = 4;
 * @return {string}
 */
proto.tari.rpc.TransferResult.prototype.getFailureMessage = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.TransferResult} returns this
 */
proto.tari.rpc.TransferResult.prototype.setFailureMessage = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.ClaimShaAtomicSwapRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.ClaimShaAtomicSwapRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.ClaimShaAtomicSwapRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.ClaimShaAtomicSwapRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        output: jspb.Message.getFieldWithDefault(msg, 1, ""),
        preImage: jspb.Message.getFieldWithDefault(msg, 2, ""),
        feePerGram: jspb.Message.getFieldWithDefault(msg, 3, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.ClaimShaAtomicSwapRequest}
 */
proto.tari.rpc.ClaimShaAtomicSwapRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.ClaimShaAtomicSwapRequest();
  return proto.tari.rpc.ClaimShaAtomicSwapRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.ClaimShaAtomicSwapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.ClaimShaAtomicSwapRequest}
 */
proto.tari.rpc.ClaimShaAtomicSwapRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setOutput(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setPreImage(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFeePerGram(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.ClaimShaAtomicSwapRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.ClaimShaAtomicSwapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.ClaimShaAtomicSwapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.ClaimShaAtomicSwapRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getOutput();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getPreImage();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getFeePerGram();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
};

/**
 * optional string output = 1;
 * @return {string}
 */
proto.tari.rpc.ClaimShaAtomicSwapRequest.prototype.getOutput = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.ClaimShaAtomicSwapRequest} returns this
 */
proto.tari.rpc.ClaimShaAtomicSwapRequest.prototype.setOutput = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string pre_image = 2;
 * @return {string}
 */
proto.tari.rpc.ClaimShaAtomicSwapRequest.prototype.getPreImage = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.ClaimShaAtomicSwapRequest} returns this
 */
proto.tari.rpc.ClaimShaAtomicSwapRequest.prototype.setPreImage = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional uint64 fee_per_gram = 3;
 * @return {number}
 */
proto.tari.rpc.ClaimShaAtomicSwapRequest.prototype.getFeePerGram = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.ClaimShaAtomicSwapRequest} returns this
 */
proto.tari.rpc.ClaimShaAtomicSwapRequest.prototype.setFeePerGram = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.ClaimShaAtomicSwapResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.ClaimShaAtomicSwapResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.ClaimShaAtomicSwapResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.ClaimShaAtomicSwapResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        results: (f = msg.getResults()) && proto.tari.rpc.TransferResult.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.ClaimShaAtomicSwapResponse}
 */
proto.tari.rpc.ClaimShaAtomicSwapResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.ClaimShaAtomicSwapResponse();
  return proto.tari.rpc.ClaimShaAtomicSwapResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.ClaimShaAtomicSwapResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.ClaimShaAtomicSwapResponse}
 */
proto.tari.rpc.ClaimShaAtomicSwapResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.tari.rpc.TransferResult();
        reader.readMessage(value, proto.tari.rpc.TransferResult.deserializeBinaryFromReader);
        msg.setResults(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.ClaimShaAtomicSwapResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.ClaimShaAtomicSwapResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.ClaimShaAtomicSwapResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.ClaimShaAtomicSwapResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getResults();
  if (f != null) {
    writer.writeMessage(1, f, proto.tari.rpc.TransferResult.serializeBinaryToWriter);
  }
};

/**
 * optional TransferResult results = 1;
 * @return {?proto.tari.rpc.TransferResult}
 */
proto.tari.rpc.ClaimShaAtomicSwapResponse.prototype.getResults = function () {
  return /** @type{?proto.tari.rpc.TransferResult} */ (
    jspb.Message.getWrapperField(this, proto.tari.rpc.TransferResult, 1)
  );
};

/**
 * @param {?proto.tari.rpc.TransferResult|undefined} value
 * @return {!proto.tari.rpc.ClaimShaAtomicSwapResponse} returns this
 */
proto.tari.rpc.ClaimShaAtomicSwapResponse.prototype.setResults = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.ClaimShaAtomicSwapResponse} returns this
 */
proto.tari.rpc.ClaimShaAtomicSwapResponse.prototype.clearResults = function () {
  return this.setResults(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.ClaimShaAtomicSwapResponse.prototype.hasResults = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.ClaimHtlcRefundRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.ClaimHtlcRefundRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.ClaimHtlcRefundRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.ClaimHtlcRefundRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        outputHash: jspb.Message.getFieldWithDefault(msg, 1, ""),
        feePerGram: jspb.Message.getFieldWithDefault(msg, 2, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.ClaimHtlcRefundRequest}
 */
proto.tari.rpc.ClaimHtlcRefundRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.ClaimHtlcRefundRequest();
  return proto.tari.rpc.ClaimHtlcRefundRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.ClaimHtlcRefundRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.ClaimHtlcRefundRequest}
 */
proto.tari.rpc.ClaimHtlcRefundRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setOutputHash(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFeePerGram(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.ClaimHtlcRefundRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.ClaimHtlcRefundRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.ClaimHtlcRefundRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.ClaimHtlcRefundRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getOutputHash();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getFeePerGram();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
};

/**
 * optional string output_hash = 1;
 * @return {string}
 */
proto.tari.rpc.ClaimHtlcRefundRequest.prototype.getOutputHash = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.ClaimHtlcRefundRequest} returns this
 */
proto.tari.rpc.ClaimHtlcRefundRequest.prototype.setOutputHash = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional uint64 fee_per_gram = 2;
 * @return {number}
 */
proto.tari.rpc.ClaimHtlcRefundRequest.prototype.getFeePerGram = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.ClaimHtlcRefundRequest} returns this
 */
proto.tari.rpc.ClaimHtlcRefundRequest.prototype.setFeePerGram = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.ClaimHtlcRefundResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.ClaimHtlcRefundResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.ClaimHtlcRefundResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.ClaimHtlcRefundResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        results: (f = msg.getResults()) && proto.tari.rpc.TransferResult.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.ClaimHtlcRefundResponse}
 */
proto.tari.rpc.ClaimHtlcRefundResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.ClaimHtlcRefundResponse();
  return proto.tari.rpc.ClaimHtlcRefundResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.ClaimHtlcRefundResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.ClaimHtlcRefundResponse}
 */
proto.tari.rpc.ClaimHtlcRefundResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.tari.rpc.TransferResult();
        reader.readMessage(value, proto.tari.rpc.TransferResult.deserializeBinaryFromReader);
        msg.setResults(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.ClaimHtlcRefundResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.ClaimHtlcRefundResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.ClaimHtlcRefundResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.ClaimHtlcRefundResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getResults();
  if (f != null) {
    writer.writeMessage(1, f, proto.tari.rpc.TransferResult.serializeBinaryToWriter);
  }
};

/**
 * optional TransferResult results = 1;
 * @return {?proto.tari.rpc.TransferResult}
 */
proto.tari.rpc.ClaimHtlcRefundResponse.prototype.getResults = function () {
  return /** @type{?proto.tari.rpc.TransferResult} */ (
    jspb.Message.getWrapperField(this, proto.tari.rpc.TransferResult, 1)
  );
};

/**
 * @param {?proto.tari.rpc.TransferResult|undefined} value
 * @return {!proto.tari.rpc.ClaimHtlcRefundResponse} returns this
 */
proto.tari.rpc.ClaimHtlcRefundResponse.prototype.setResults = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.ClaimHtlcRefundResponse} returns this
 */
proto.tari.rpc.ClaimHtlcRefundResponse.prototype.clearResults = function () {
  return this.setResults(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.ClaimHtlcRefundResponse.prototype.hasResults = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.GetTransactionInfoRequest.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.GetTransactionInfoRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetTransactionInfoRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetTransactionInfoRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetTransactionInfoRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        transactionIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.GetTransactionInfoRequest}
 */
proto.tari.rpc.GetTransactionInfoRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetTransactionInfoRequest();
  return proto.tari.rpc.GetTransactionInfoRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetTransactionInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetTransactionInfoRequest}
 */
proto.tari.rpc.GetTransactionInfoRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var values = /** @type {!Array<number>} */ (
          reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]
        );
        for (var i = 0; i < values.length; i++) {
          msg.addTransactionIds(values[i]);
        }
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetTransactionInfoRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetTransactionInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetTransactionInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetTransactionInfoRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTransactionIdsList();
  if (f.length > 0) {
    writer.writePackedUint64(1, f);
  }
};

/**
 * repeated uint64 transaction_ids = 1;
 * @return {!Array<number>}
 */
proto.tari.rpc.GetTransactionInfoRequest.prototype.getTransactionIdsList = function () {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<number>} value
 * @return {!proto.tari.rpc.GetTransactionInfoRequest} returns this
 */
proto.tari.rpc.GetTransactionInfoRequest.prototype.setTransactionIdsList = function (value) {
  return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.GetTransactionInfoRequest} returns this
 */
proto.tari.rpc.GetTransactionInfoRequest.prototype.addTransactionIds = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.GetTransactionInfoRequest} returns this
 */
proto.tari.rpc.GetTransactionInfoRequest.prototype.clearTransactionIdsList = function () {
  return this.setTransactionIdsList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.GetTransactionInfoResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.GetTransactionInfoResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetTransactionInfoResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetTransactionInfoResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetTransactionInfoResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        transactionsList: jspb.Message.toObjectList(
          msg.getTransactionsList(),
          proto.tari.rpc.TransactionInfo.toObject,
          includeInstance,
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.GetTransactionInfoResponse}
 */
proto.tari.rpc.GetTransactionInfoResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetTransactionInfoResponse();
  return proto.tari.rpc.GetTransactionInfoResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetTransactionInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetTransactionInfoResponse}
 */
proto.tari.rpc.GetTransactionInfoResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.tari.rpc.TransactionInfo();
        reader.readMessage(value, proto.tari.rpc.TransactionInfo.deserializeBinaryFromReader);
        msg.addTransactions(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetTransactionInfoResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetTransactionInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetTransactionInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetTransactionInfoResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.tari.rpc.TransactionInfo.serializeBinaryToWriter);
  }
};

/**
 * repeated TransactionInfo transactions = 1;
 * @return {!Array<!proto.tari.rpc.TransactionInfo>}
 */
proto.tari.rpc.GetTransactionInfoResponse.prototype.getTransactionsList = function () {
  return /** @type{!Array<!proto.tari.rpc.TransactionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tari.rpc.TransactionInfo, 1)
  );
};

/**
 * @param {!Array<!proto.tari.rpc.TransactionInfo>} value
 * @return {!proto.tari.rpc.GetTransactionInfoResponse} returns this
 */
proto.tari.rpc.GetTransactionInfoResponse.prototype.setTransactionsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.tari.rpc.TransactionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.TransactionInfo}
 */
proto.tari.rpc.GetTransactionInfoResponse.prototype.addTransactions = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tari.rpc.TransactionInfo, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.GetTransactionInfoResponse} returns this
 */
proto.tari.rpc.GetTransactionInfoResponse.prototype.clearTransactionsList = function () {
  return this.setTransactionsList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.TransactionInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.TransactionInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.TransactionInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.TransactionInfo.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        txId: jspb.Message.getFieldWithDefault(msg, 1, 0),
        sourceAddress: msg.getSourceAddress_asB64(),
        destAddress: msg.getDestAddress_asB64(),
        status: jspb.Message.getFieldWithDefault(msg, 4, 0),
        direction: jspb.Message.getFieldWithDefault(msg, 5, 0),
        amount: jspb.Message.getFieldWithDefault(msg, 6, 0),
        fee: jspb.Message.getFieldWithDefault(msg, 7, 0),
        isCancelled: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
        excessSig: msg.getExcessSig_asB64(),
        timestamp: jspb.Message.getFieldWithDefault(msg, 10, 0),
        paymentId: msg.getPaymentId_asB64(),
        minedInBlockHeight: jspb.Message.getFieldWithDefault(msg, 13, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.TransactionInfo}
 */
proto.tari.rpc.TransactionInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.TransactionInfo();
  return proto.tari.rpc.TransactionInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.TransactionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.TransactionInfo}
 */
proto.tari.rpc.TransactionInfo.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTxId(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setSourceAddress(value);
        break;
      case 3:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setDestAddress(value);
        break;
      case 4:
        var value = /** @type {!proto.tari.rpc.TransactionStatus} */ (reader.readEnum());
        msg.setStatus(value);
        break;
      case 5:
        var value = /** @type {!proto.tari.rpc.TransactionDirection} */ (reader.readEnum());
        msg.setDirection(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setAmount(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFee(value);
        break;
      case 8:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setIsCancelled(value);
        break;
      case 9:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setExcessSig(value);
        break;
      case 10:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTimestamp(value);
        break;
      case 12:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setPaymentId(value);
        break;
      case 13:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setMinedInBlockHeight(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.TransactionInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.TransactionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.TransactionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.TransactionInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTxId();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getSourceAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
  f = message.getDestAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(3, f);
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(4, f);
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(5, f);
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(6, f);
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint64(7, f);
  }
  f = message.getIsCancelled();
  if (f) {
    writer.writeBool(8, f);
  }
  f = message.getExcessSig_asU8();
  if (f.length > 0) {
    writer.writeBytes(9, f);
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(10, f);
  }
  f = message.getPaymentId_asU8();
  if (f.length > 0) {
    writer.writeBytes(12, f);
  }
  f = message.getMinedInBlockHeight();
  if (f !== 0) {
    writer.writeUint64(13, f);
  }
};

/**
 * optional uint64 tx_id = 1;
 * @return {number}
 */
proto.tari.rpc.TransactionInfo.prototype.getTxId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.TransactionInfo} returns this
 */
proto.tari.rpc.TransactionInfo.prototype.setTxId = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional bytes source_address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.TransactionInfo.prototype.getSourceAddress = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * optional bytes source_address = 2;
 * This is a type-conversion wrapper around `getSourceAddress()`
 * @return {string}
 */
proto.tari.rpc.TransactionInfo.prototype.getSourceAddress_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getSourceAddress()));
};

/**
 * optional bytes source_address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSourceAddress()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.TransactionInfo.prototype.getSourceAddress_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getSourceAddress()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.TransactionInfo} returns this
 */
proto.tari.rpc.TransactionInfo.prototype.setSourceAddress = function (value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};

/**
 * optional bytes dest_address = 3;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.TransactionInfo.prototype.getDestAddress = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * optional bytes dest_address = 3;
 * This is a type-conversion wrapper around `getDestAddress()`
 * @return {string}
 */
proto.tari.rpc.TransactionInfo.prototype.getDestAddress_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getDestAddress()));
};

/**
 * optional bytes dest_address = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDestAddress()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.TransactionInfo.prototype.getDestAddress_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getDestAddress()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.TransactionInfo} returns this
 */
proto.tari.rpc.TransactionInfo.prototype.setDestAddress = function (value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};

/**
 * optional TransactionStatus status = 4;
 * @return {!proto.tari.rpc.TransactionStatus}
 */
proto.tari.rpc.TransactionInfo.prototype.getStatus = function () {
  return /** @type {!proto.tari.rpc.TransactionStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {!proto.tari.rpc.TransactionStatus} value
 * @return {!proto.tari.rpc.TransactionInfo} returns this
 */
proto.tari.rpc.TransactionInfo.prototype.setStatus = function (value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};

/**
 * optional TransactionDirection direction = 5;
 * @return {!proto.tari.rpc.TransactionDirection}
 */
proto.tari.rpc.TransactionInfo.prototype.getDirection = function () {
  return /** @type {!proto.tari.rpc.TransactionDirection} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {!proto.tari.rpc.TransactionDirection} value
 * @return {!proto.tari.rpc.TransactionInfo} returns this
 */
proto.tari.rpc.TransactionInfo.prototype.setDirection = function (value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};

/**
 * optional uint64 amount = 6;
 * @return {number}
 */
proto.tari.rpc.TransactionInfo.prototype.getAmount = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.TransactionInfo} returns this
 */
proto.tari.rpc.TransactionInfo.prototype.setAmount = function (value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};

/**
 * optional uint64 fee = 7;
 * @return {number}
 */
proto.tari.rpc.TransactionInfo.prototype.getFee = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.TransactionInfo} returns this
 */
proto.tari.rpc.TransactionInfo.prototype.setFee = function (value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};

/**
 * optional bool is_cancelled = 8;
 * @return {boolean}
 */
proto.tari.rpc.TransactionInfo.prototype.getIsCancelled = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};

/**
 * @param {boolean} value
 * @return {!proto.tari.rpc.TransactionInfo} returns this
 */
proto.tari.rpc.TransactionInfo.prototype.setIsCancelled = function (value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};

/**
 * optional bytes excess_sig = 9;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.TransactionInfo.prototype.getExcessSig = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};

/**
 * optional bytes excess_sig = 9;
 * This is a type-conversion wrapper around `getExcessSig()`
 * @return {string}
 */
proto.tari.rpc.TransactionInfo.prototype.getExcessSig_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getExcessSig()));
};

/**
 * optional bytes excess_sig = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExcessSig()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.TransactionInfo.prototype.getExcessSig_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getExcessSig()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.TransactionInfo} returns this
 */
proto.tari.rpc.TransactionInfo.prototype.setExcessSig = function (value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
};

/**
 * optional uint64 timestamp = 10;
 * @return {number}
 */
proto.tari.rpc.TransactionInfo.prototype.getTimestamp = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.TransactionInfo} returns this
 */
proto.tari.rpc.TransactionInfo.prototype.setTimestamp = function (value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};

/**
 * optional bytes payment_id = 12;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.TransactionInfo.prototype.getPaymentId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};

/**
 * optional bytes payment_id = 12;
 * This is a type-conversion wrapper around `getPaymentId()`
 * @return {string}
 */
proto.tari.rpc.TransactionInfo.prototype.getPaymentId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getPaymentId()));
};

/**
 * optional bytes payment_id = 12;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPaymentId()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.TransactionInfo.prototype.getPaymentId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getPaymentId()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.TransactionInfo} returns this
 */
proto.tari.rpc.TransactionInfo.prototype.setPaymentId = function (value) {
  return jspb.Message.setProto3BytesField(this, 12, value);
};

/**
 * optional uint64 mined_in_block_height = 13;
 * @return {number}
 */
proto.tari.rpc.TransactionInfo.prototype.getMinedInBlockHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.TransactionInfo} returns this
 */
proto.tari.rpc.TransactionInfo.prototype.setMinedInBlockHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.GetCompletedTransactionsRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetCompletedTransactionsRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetCompletedTransactionsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetCompletedTransactionsRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.GetCompletedTransactionsRequest}
 */
proto.tari.rpc.GetCompletedTransactionsRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetCompletedTransactionsRequest();
  return proto.tari.rpc.GetCompletedTransactionsRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetCompletedTransactionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetCompletedTransactionsRequest}
 */
proto.tari.rpc.GetCompletedTransactionsRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetCompletedTransactionsRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetCompletedTransactionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetCompletedTransactionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetCompletedTransactionsRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.GetCompletedTransactionsResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetCompletedTransactionsResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetCompletedTransactionsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetCompletedTransactionsResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        transaction: (f = msg.getTransaction()) && proto.tari.rpc.TransactionInfo.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.GetCompletedTransactionsResponse}
 */
proto.tari.rpc.GetCompletedTransactionsResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetCompletedTransactionsResponse();
  return proto.tari.rpc.GetCompletedTransactionsResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetCompletedTransactionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetCompletedTransactionsResponse}
 */
proto.tari.rpc.GetCompletedTransactionsResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.tari.rpc.TransactionInfo();
        reader.readMessage(value, proto.tari.rpc.TransactionInfo.deserializeBinaryFromReader);
        msg.setTransaction(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetCompletedTransactionsResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetCompletedTransactionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetCompletedTransactionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetCompletedTransactionsResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(1, f, proto.tari.rpc.TransactionInfo.serializeBinaryToWriter);
  }
};

/**
 * optional TransactionInfo transaction = 1;
 * @return {?proto.tari.rpc.TransactionInfo}
 */
proto.tari.rpc.GetCompletedTransactionsResponse.prototype.getTransaction = function () {
  return /** @type{?proto.tari.rpc.TransactionInfo} */ (
    jspb.Message.getWrapperField(this, proto.tari.rpc.TransactionInfo, 1)
  );
};

/**
 * @param {?proto.tari.rpc.TransactionInfo|undefined} value
 * @return {!proto.tari.rpc.GetCompletedTransactionsResponse} returns this
 */
proto.tari.rpc.GetCompletedTransactionsResponse.prototype.setTransaction = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.GetCompletedTransactionsResponse} returns this
 */
proto.tari.rpc.GetCompletedTransactionsResponse.prototype.clearTransaction = function () {
  return this.setTransaction(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.GetCompletedTransactionsResponse.prototype.hasTransaction = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.GetBalanceRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetBalanceRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetBalanceRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetBalanceRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.GetBalanceRequest}
 */
proto.tari.rpc.GetBalanceRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetBalanceRequest();
  return proto.tari.rpc.GetBalanceRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetBalanceRequest}
 */
proto.tari.rpc.GetBalanceRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetBalanceRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetBalanceRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.GetStateRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetStateRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetStateRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetStateRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.GetStateRequest}
 */
proto.tari.rpc.GetStateRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetStateRequest();
  return proto.tari.rpc.GetStateRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetStateRequest}
 */
proto.tari.rpc.GetStateRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetStateRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetStateRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.GetBalanceResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetBalanceResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetBalanceResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetBalanceResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        availableBalance: jspb.Message.getFieldWithDefault(msg, 1, 0),
        pendingIncomingBalance: jspb.Message.getFieldWithDefault(msg, 2, 0),
        pendingOutgoingBalance: jspb.Message.getFieldWithDefault(msg, 3, 0),
        timelockedBalance: jspb.Message.getFieldWithDefault(msg, 4, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.GetBalanceResponse}
 */
proto.tari.rpc.GetBalanceResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetBalanceResponse();
  return proto.tari.rpc.GetBalanceResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetBalanceResponse}
 */
proto.tari.rpc.GetBalanceResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setAvailableBalance(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setPendingIncomingBalance(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setPendingOutgoingBalance(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTimelockedBalance(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetBalanceResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetBalanceResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAvailableBalance();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getPendingIncomingBalance();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getPendingOutgoingBalance();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
  f = message.getTimelockedBalance();
  if (f !== 0) {
    writer.writeUint64(4, f);
  }
};

/**
 * optional uint64 available_balance = 1;
 * @return {number}
 */
proto.tari.rpc.GetBalanceResponse.prototype.getAvailableBalance = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetBalanceResponse} returns this
 */
proto.tari.rpc.GetBalanceResponse.prototype.setAvailableBalance = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional uint64 pending_incoming_balance = 2;
 * @return {number}
 */
proto.tari.rpc.GetBalanceResponse.prototype.getPendingIncomingBalance = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetBalanceResponse} returns this
 */
proto.tari.rpc.GetBalanceResponse.prototype.setPendingIncomingBalance = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional uint64 pending_outgoing_balance = 3;
 * @return {number}
 */
proto.tari.rpc.GetBalanceResponse.prototype.getPendingOutgoingBalance = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetBalanceResponse} returns this
 */
proto.tari.rpc.GetBalanceResponse.prototype.setPendingOutgoingBalance = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional uint64 timelocked_balance = 4;
 * @return {number}
 */
proto.tari.rpc.GetBalanceResponse.prototype.getTimelockedBalance = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetBalanceResponse} returns this
 */
proto.tari.rpc.GetBalanceResponse.prototype.setTimelockedBalance = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.GetStateResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetStateResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetStateResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetStateResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        scannedHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
        balance: (f = msg.getBalance()) && proto.tari.rpc.GetBalanceResponse.toObject(includeInstance, f),
        network: (f = msg.getNetwork()) && network_pb.NetworkStatusResponse.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.GetStateResponse}
 */
proto.tari.rpc.GetStateResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetStateResponse();
  return proto.tari.rpc.GetStateResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetStateResponse}
 */
proto.tari.rpc.GetStateResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setScannedHeight(value);
        break;
      case 2:
        var value = new proto.tari.rpc.GetBalanceResponse();
        reader.readMessage(value, proto.tari.rpc.GetBalanceResponse.deserializeBinaryFromReader);
        msg.setBalance(value);
        break;
      case 3:
        var value = new network_pb.NetworkStatusResponse();
        reader.readMessage(value, network_pb.NetworkStatusResponse.deserializeBinaryFromReader);
        msg.setNetwork(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetStateResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetStateResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getScannedHeight();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getBalance();
  if (f != null) {
    writer.writeMessage(2, f, proto.tari.rpc.GetBalanceResponse.serializeBinaryToWriter);
  }
  f = message.getNetwork();
  if (f != null) {
    writer.writeMessage(3, f, network_pb.NetworkStatusResponse.serializeBinaryToWriter);
  }
};

/**
 * optional uint64 scanned_height = 1;
 * @return {number}
 */
proto.tari.rpc.GetStateResponse.prototype.getScannedHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetStateResponse} returns this
 */
proto.tari.rpc.GetStateResponse.prototype.setScannedHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional GetBalanceResponse balance = 2;
 * @return {?proto.tari.rpc.GetBalanceResponse}
 */
proto.tari.rpc.GetStateResponse.prototype.getBalance = function () {
  return /** @type{?proto.tari.rpc.GetBalanceResponse} */ (
    jspb.Message.getWrapperField(this, proto.tari.rpc.GetBalanceResponse, 2)
  );
};

/**
 * @param {?proto.tari.rpc.GetBalanceResponse|undefined} value
 * @return {!proto.tari.rpc.GetStateResponse} returns this
 */
proto.tari.rpc.GetStateResponse.prototype.setBalance = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.GetStateResponse} returns this
 */
proto.tari.rpc.GetStateResponse.prototype.clearBalance = function () {
  return this.setBalance(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.GetStateResponse.prototype.hasBalance = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional NetworkStatusResponse network = 3;
 * @return {?proto.tari.rpc.NetworkStatusResponse}
 */
proto.tari.rpc.GetStateResponse.prototype.getNetwork = function () {
  return /** @type{?proto.tari.rpc.NetworkStatusResponse} */ (
    jspb.Message.getWrapperField(this, network_pb.NetworkStatusResponse, 3)
  );
};

/**
 * @param {?proto.tari.rpc.NetworkStatusResponse|undefined} value
 * @return {!proto.tari.rpc.GetStateResponse} returns this
 */
proto.tari.rpc.GetStateResponse.prototype.setNetwork = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.GetStateResponse} returns this
 */
proto.tari.rpc.GetStateResponse.prototype.clearNetwork = function () {
  return this.setNetwork(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.GetStateResponse.prototype.hasNetwork = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.GetUnspentAmountsResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.GetUnspentAmountsResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetUnspentAmountsResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetUnspentAmountsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetUnspentAmountsResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        amountList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.GetUnspentAmountsResponse}
 */
proto.tari.rpc.GetUnspentAmountsResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetUnspentAmountsResponse();
  return proto.tari.rpc.GetUnspentAmountsResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetUnspentAmountsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetUnspentAmountsResponse}
 */
proto.tari.rpc.GetUnspentAmountsResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var values = /** @type {!Array<number>} */ (
          reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]
        );
        for (var i = 0; i < values.length; i++) {
          msg.addAmount(values[i]);
        }
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetUnspentAmountsResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetUnspentAmountsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetUnspentAmountsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetUnspentAmountsResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAmountList();
  if (f.length > 0) {
    writer.writePackedUint64(1, f);
  }
};

/**
 * repeated uint64 amount = 1;
 * @return {!Array<number>}
 */
proto.tari.rpc.GetUnspentAmountsResponse.prototype.getAmountList = function () {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<number>} value
 * @return {!proto.tari.rpc.GetUnspentAmountsResponse} returns this
 */
proto.tari.rpc.GetUnspentAmountsResponse.prototype.setAmountList = function (value) {
  return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.GetUnspentAmountsResponse} returns this
 */
proto.tari.rpc.GetUnspentAmountsResponse.prototype.addAmount = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.GetUnspentAmountsResponse} returns this
 */
proto.tari.rpc.GetUnspentAmountsResponse.prototype.clearAmountList = function () {
  return this.setAmountList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.CoinSplitRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.CoinSplitRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.CoinSplitRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.CoinSplitRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        amountPerSplit: jspb.Message.getFieldWithDefault(msg, 1, 0),
        splitCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
        feePerGram: jspb.Message.getFieldWithDefault(msg, 3, 0),
        lockHeight: jspb.Message.getFieldWithDefault(msg, 5, 0),
        paymentId: msg.getPaymentId_asB64(),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.CoinSplitRequest}
 */
proto.tari.rpc.CoinSplitRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.CoinSplitRequest();
  return proto.tari.rpc.CoinSplitRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.CoinSplitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.CoinSplitRequest}
 */
proto.tari.rpc.CoinSplitRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setAmountPerSplit(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setSplitCount(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFeePerGram(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setLockHeight(value);
        break;
      case 6:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setPaymentId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.CoinSplitRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.CoinSplitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.CoinSplitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.CoinSplitRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAmountPerSplit();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getSplitCount();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getFeePerGram();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
  f = message.getLockHeight();
  if (f !== 0) {
    writer.writeUint64(5, f);
  }
  f = message.getPaymentId_asU8();
  if (f.length > 0) {
    writer.writeBytes(6, f);
  }
};

/**
 * optional uint64 amount_per_split = 1;
 * @return {number}
 */
proto.tari.rpc.CoinSplitRequest.prototype.getAmountPerSplit = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.CoinSplitRequest} returns this
 */
proto.tari.rpc.CoinSplitRequest.prototype.setAmountPerSplit = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional uint64 split_count = 2;
 * @return {number}
 */
proto.tari.rpc.CoinSplitRequest.prototype.getSplitCount = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.CoinSplitRequest} returns this
 */
proto.tari.rpc.CoinSplitRequest.prototype.setSplitCount = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional uint64 fee_per_gram = 3;
 * @return {number}
 */
proto.tari.rpc.CoinSplitRequest.prototype.getFeePerGram = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.CoinSplitRequest} returns this
 */
proto.tari.rpc.CoinSplitRequest.prototype.setFeePerGram = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional uint64 lock_height = 5;
 * @return {number}
 */
proto.tari.rpc.CoinSplitRequest.prototype.getLockHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.CoinSplitRequest} returns this
 */
proto.tari.rpc.CoinSplitRequest.prototype.setLockHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};

/**
 * optional bytes payment_id = 6;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.CoinSplitRequest.prototype.getPaymentId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};

/**
 * optional bytes payment_id = 6;
 * This is a type-conversion wrapper around `getPaymentId()`
 * @return {string}
 */
proto.tari.rpc.CoinSplitRequest.prototype.getPaymentId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getPaymentId()));
};

/**
 * optional bytes payment_id = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPaymentId()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.CoinSplitRequest.prototype.getPaymentId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getPaymentId()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.CoinSplitRequest} returns this
 */
proto.tari.rpc.CoinSplitRequest.prototype.setPaymentId = function (value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.CoinSplitResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.CoinSplitResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.CoinSplitResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.CoinSplitResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        txId: jspb.Message.getFieldWithDefault(msg, 1, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.CoinSplitResponse}
 */
proto.tari.rpc.CoinSplitResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.CoinSplitResponse();
  return proto.tari.rpc.CoinSplitResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.CoinSplitResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.CoinSplitResponse}
 */
proto.tari.rpc.CoinSplitResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTxId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.CoinSplitResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.CoinSplitResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.CoinSplitResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.CoinSplitResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTxId();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
};

/**
 * optional uint64 tx_id = 1;
 * @return {number}
 */
proto.tari.rpc.CoinSplitResponse.prototype.getTxId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.CoinSplitResponse} returns this
 */
proto.tari.rpc.CoinSplitResponse.prototype.setTxId = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.ImportUtxosRequest.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.ImportUtxosRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.ImportUtxosRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.ImportUtxosRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.ImportUtxosRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        outputsList: jspb.Message.toObjectList(
          msg.getOutputsList(),
          transaction_pb.UnblindedOutput.toObject,
          includeInstance,
        ),
        paymentId: msg.getPaymentId_asB64(),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.ImportUtxosRequest}
 */
proto.tari.rpc.ImportUtxosRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.ImportUtxosRequest();
  return proto.tari.rpc.ImportUtxosRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.ImportUtxosRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.ImportUtxosRequest}
 */
proto.tari.rpc.ImportUtxosRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new transaction_pb.UnblindedOutput();
        reader.readMessage(value, transaction_pb.UnblindedOutput.deserializeBinaryFromReader);
        msg.addOutputs(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setPaymentId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.ImportUtxosRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.ImportUtxosRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.ImportUtxosRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.ImportUtxosRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, transaction_pb.UnblindedOutput.serializeBinaryToWriter);
  }
  f = message.getPaymentId_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
};

/**
 * repeated UnblindedOutput outputs = 1;
 * @return {!Array<!proto.tari.rpc.UnblindedOutput>}
 */
proto.tari.rpc.ImportUtxosRequest.prototype.getOutputsList = function () {
  return /** @type{!Array<!proto.tari.rpc.UnblindedOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, transaction_pb.UnblindedOutput, 1)
  );
};

/**
 * @param {!Array<!proto.tari.rpc.UnblindedOutput>} value
 * @return {!proto.tari.rpc.ImportUtxosRequest} returns this
 */
proto.tari.rpc.ImportUtxosRequest.prototype.setOutputsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.tari.rpc.UnblindedOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.UnblindedOutput}
 */
proto.tari.rpc.ImportUtxosRequest.prototype.addOutputs = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tari.rpc.UnblindedOutput, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.ImportUtxosRequest} returns this
 */
proto.tari.rpc.ImportUtxosRequest.prototype.clearOutputsList = function () {
  return this.setOutputsList([]);
};

/**
 * optional bytes payment_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.ImportUtxosRequest.prototype.getPaymentId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * optional bytes payment_id = 2;
 * This is a type-conversion wrapper around `getPaymentId()`
 * @return {string}
 */
proto.tari.rpc.ImportUtxosRequest.prototype.getPaymentId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getPaymentId()));
};

/**
 * optional bytes payment_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPaymentId()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.ImportUtxosRequest.prototype.getPaymentId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getPaymentId()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.ImportUtxosRequest} returns this
 */
proto.tari.rpc.ImportUtxosRequest.prototype.setPaymentId = function (value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.ImportUtxosResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.ImportUtxosResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.ImportUtxosResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.ImportUtxosResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.ImportUtxosResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        txIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.ImportUtxosResponse}
 */
proto.tari.rpc.ImportUtxosResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.ImportUtxosResponse();
  return proto.tari.rpc.ImportUtxosResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.ImportUtxosResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.ImportUtxosResponse}
 */
proto.tari.rpc.ImportUtxosResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var values = /** @type {!Array<number>} */ (
          reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]
        );
        for (var i = 0; i < values.length; i++) {
          msg.addTxIds(values[i]);
        }
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.ImportUtxosResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.ImportUtxosResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.ImportUtxosResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.ImportUtxosResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTxIdsList();
  if (f.length > 0) {
    writer.writePackedUint64(1, f);
  }
};

/**
 * repeated uint64 tx_ids = 1;
 * @return {!Array<number>}
 */
proto.tari.rpc.ImportUtxosResponse.prototype.getTxIdsList = function () {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<number>} value
 * @return {!proto.tari.rpc.ImportUtxosResponse} returns this
 */
proto.tari.rpc.ImportUtxosResponse.prototype.setTxIdsList = function (value) {
  return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.ImportUtxosResponse} returns this
 */
proto.tari.rpc.ImportUtxosResponse.prototype.addTxIds = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.ImportUtxosResponse} returns this
 */
proto.tari.rpc.ImportUtxosResponse.prototype.clearTxIdsList = function () {
  return this.setTxIdsList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.CreateTemplateRegistrationRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.CreateTemplateRegistrationRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.CreateTemplateRegistrationRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.CreateTemplateRegistrationRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        templateRegistration:
          (f = msg.getTemplateRegistration()) && sidechain_types_pb.TemplateRegistration.toObject(includeInstance, f),
        feePerGram: jspb.Message.getFieldWithDefault(msg, 2, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.CreateTemplateRegistrationRequest}
 */
proto.tari.rpc.CreateTemplateRegistrationRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.CreateTemplateRegistrationRequest();
  return proto.tari.rpc.CreateTemplateRegistrationRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.CreateTemplateRegistrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.CreateTemplateRegistrationRequest}
 */
proto.tari.rpc.CreateTemplateRegistrationRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new sidechain_types_pb.TemplateRegistration();
        reader.readMessage(value, sidechain_types_pb.TemplateRegistration.deserializeBinaryFromReader);
        msg.setTemplateRegistration(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFeePerGram(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.CreateTemplateRegistrationRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.CreateTemplateRegistrationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.CreateTemplateRegistrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.CreateTemplateRegistrationRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTemplateRegistration();
  if (f != null) {
    writer.writeMessage(1, f, sidechain_types_pb.TemplateRegistration.serializeBinaryToWriter);
  }
  f = message.getFeePerGram();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
};

/**
 * optional TemplateRegistration template_registration = 1;
 * @return {?proto.tari.rpc.TemplateRegistration}
 */
proto.tari.rpc.CreateTemplateRegistrationRequest.prototype.getTemplateRegistration = function () {
  return /** @type{?proto.tari.rpc.TemplateRegistration} */ (
    jspb.Message.getWrapperField(this, sidechain_types_pb.TemplateRegistration, 1)
  );
};

/**
 * @param {?proto.tari.rpc.TemplateRegistration|undefined} value
 * @return {!proto.tari.rpc.CreateTemplateRegistrationRequest} returns this
 */
proto.tari.rpc.CreateTemplateRegistrationRequest.prototype.setTemplateRegistration = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.CreateTemplateRegistrationRequest} returns this
 */
proto.tari.rpc.CreateTemplateRegistrationRequest.prototype.clearTemplateRegistration = function () {
  return this.setTemplateRegistration(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.CreateTemplateRegistrationRequest.prototype.hasTemplateRegistration = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional uint64 fee_per_gram = 2;
 * @return {number}
 */
proto.tari.rpc.CreateTemplateRegistrationRequest.prototype.getFeePerGram = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.CreateTemplateRegistrationRequest} returns this
 */
proto.tari.rpc.CreateTemplateRegistrationRequest.prototype.setFeePerGram = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.CreateTemplateRegistrationResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.CreateTemplateRegistrationResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.CreateTemplateRegistrationResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.CreateTemplateRegistrationResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        txId: jspb.Message.getFieldWithDefault(msg, 1, 0),
        templateAddress: msg.getTemplateAddress_asB64(),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.CreateTemplateRegistrationResponse}
 */
proto.tari.rpc.CreateTemplateRegistrationResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.CreateTemplateRegistrationResponse();
  return proto.tari.rpc.CreateTemplateRegistrationResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.CreateTemplateRegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.CreateTemplateRegistrationResponse}
 */
proto.tari.rpc.CreateTemplateRegistrationResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTxId(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setTemplateAddress(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.CreateTemplateRegistrationResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.CreateTemplateRegistrationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.CreateTemplateRegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.CreateTemplateRegistrationResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTxId();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getTemplateAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
};

/**
 * optional uint64 tx_id = 1;
 * @return {number}
 */
proto.tari.rpc.CreateTemplateRegistrationResponse.prototype.getTxId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.CreateTemplateRegistrationResponse} returns this
 */
proto.tari.rpc.CreateTemplateRegistrationResponse.prototype.setTxId = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional bytes template_address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.CreateTemplateRegistrationResponse.prototype.getTemplateAddress = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * optional bytes template_address = 2;
 * This is a type-conversion wrapper around `getTemplateAddress()`
 * @return {string}
 */
proto.tari.rpc.CreateTemplateRegistrationResponse.prototype.getTemplateAddress_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getTemplateAddress()));
};

/**
 * optional bytes template_address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTemplateAddress()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.CreateTemplateRegistrationResponse.prototype.getTemplateAddress_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getTemplateAddress()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.CreateTemplateRegistrationResponse} returns this
 */
proto.tari.rpc.CreateTemplateRegistrationResponse.prototype.setTemplateAddress = function (value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.CancelTransactionRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.CancelTransactionRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.CancelTransactionRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.CancelTransactionRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        txId: jspb.Message.getFieldWithDefault(msg, 1, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.CancelTransactionRequest}
 */
proto.tari.rpc.CancelTransactionRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.CancelTransactionRequest();
  return proto.tari.rpc.CancelTransactionRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.CancelTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.CancelTransactionRequest}
 */
proto.tari.rpc.CancelTransactionRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTxId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.CancelTransactionRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.CancelTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.CancelTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.CancelTransactionRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTxId();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
};

/**
 * optional uint64 tx_id = 1;
 * @return {number}
 */
proto.tari.rpc.CancelTransactionRequest.prototype.getTxId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.CancelTransactionRequest} returns this
 */
proto.tari.rpc.CancelTransactionRequest.prototype.setTxId = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.CancelTransactionResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.CancelTransactionResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.CancelTransactionResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.CancelTransactionResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        isSuccess: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
        failureMessage: jspb.Message.getFieldWithDefault(msg, 2, ""),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.CancelTransactionResponse}
 */
proto.tari.rpc.CancelTransactionResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.CancelTransactionResponse();
  return proto.tari.rpc.CancelTransactionResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.CancelTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.CancelTransactionResponse}
 */
proto.tari.rpc.CancelTransactionResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setIsSuccess(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setFailureMessage(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.CancelTransactionResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.CancelTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.CancelTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.CancelTransactionResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getIsSuccess();
  if (f) {
    writer.writeBool(1, f);
  }
  f = message.getFailureMessage();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional bool is_success = 1;
 * @return {boolean}
 */
proto.tari.rpc.CancelTransactionResponse.prototype.getIsSuccess = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};

/**
 * @param {boolean} value
 * @return {!proto.tari.rpc.CancelTransactionResponse} returns this
 */
proto.tari.rpc.CancelTransactionResponse.prototype.setIsSuccess = function (value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};

/**
 * optional string failure_message = 2;
 * @return {string}
 */
proto.tari.rpc.CancelTransactionResponse.prototype.getFailureMessage = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.CancelTransactionResponse} returns this
 */
proto.tari.rpc.CancelTransactionResponse.prototype.setFailureMessage = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.RevalidateRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.RevalidateRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.RevalidateRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.RevalidateRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.RevalidateRequest}
 */
proto.tari.rpc.RevalidateRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.RevalidateRequest();
  return proto.tari.rpc.RevalidateRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.RevalidateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.RevalidateRequest}
 */
proto.tari.rpc.RevalidateRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.RevalidateRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.RevalidateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.RevalidateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.RevalidateRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.RevalidateResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.RevalidateResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.RevalidateResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.RevalidateResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.RevalidateResponse}
 */
proto.tari.rpc.RevalidateResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.RevalidateResponse();
  return proto.tari.rpc.RevalidateResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.RevalidateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.RevalidateResponse}
 */
proto.tari.rpc.RevalidateResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.RevalidateResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.RevalidateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.RevalidateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.RevalidateResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.ValidateRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.ValidateRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.ValidateRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.ValidateRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.ValidateRequest}
 */
proto.tari.rpc.ValidateRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.ValidateRequest();
  return proto.tari.rpc.ValidateRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.ValidateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.ValidateRequest}
 */
proto.tari.rpc.ValidateRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.ValidateRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.ValidateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.ValidateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.ValidateRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.ValidateResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.ValidateResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.ValidateResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.ValidateResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.ValidateResponse}
 */
proto.tari.rpc.ValidateResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.ValidateResponse();
  return proto.tari.rpc.ValidateResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.ValidateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.ValidateResponse}
 */
proto.tari.rpc.ValidateResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.ValidateResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.ValidateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.ValidateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.ValidateResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.SetBaseNodeRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.SetBaseNodeRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.SetBaseNodeRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.SetBaseNodeRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        publicKeyHex: jspb.Message.getFieldWithDefault(msg, 1, ""),
        netAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.SetBaseNodeRequest}
 */
proto.tari.rpc.SetBaseNodeRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.SetBaseNodeRequest();
  return proto.tari.rpc.SetBaseNodeRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.SetBaseNodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.SetBaseNodeRequest}
 */
proto.tari.rpc.SetBaseNodeRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setPublicKeyHex(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setNetAddress(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.SetBaseNodeRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.SetBaseNodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.SetBaseNodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.SetBaseNodeRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPublicKeyHex();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getNetAddress();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string public_key_hex = 1;
 * @return {string}
 */
proto.tari.rpc.SetBaseNodeRequest.prototype.getPublicKeyHex = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.SetBaseNodeRequest} returns this
 */
proto.tari.rpc.SetBaseNodeRequest.prototype.setPublicKeyHex = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string net_address = 2;
 * @return {string}
 */
proto.tari.rpc.SetBaseNodeRequest.prototype.getNetAddress = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.SetBaseNodeRequest} returns this
 */
proto.tari.rpc.SetBaseNodeRequest.prototype.setNetAddress = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.SetBaseNodeResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.SetBaseNodeResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.SetBaseNodeResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.SetBaseNodeResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.SetBaseNodeResponse}
 */
proto.tari.rpc.SetBaseNodeResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.SetBaseNodeResponse();
  return proto.tari.rpc.SetBaseNodeResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.SetBaseNodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.SetBaseNodeResponse}
 */
proto.tari.rpc.SetBaseNodeResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.SetBaseNodeResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.SetBaseNodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.SetBaseNodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.SetBaseNodeResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.GetConnectivityRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetConnectivityRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetConnectivityRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetConnectivityRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.GetConnectivityRequest}
 */
proto.tari.rpc.GetConnectivityRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetConnectivityRequest();
  return proto.tari.rpc.GetConnectivityRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetConnectivityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetConnectivityRequest}
 */
proto.tari.rpc.GetConnectivityRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetConnectivityRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetConnectivityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetConnectivityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetConnectivityRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.CheckConnectivityResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.CheckConnectivityResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.CheckConnectivityResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.CheckConnectivityResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        status: jspb.Message.getFieldWithDefault(msg, 1, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.CheckConnectivityResponse}
 */
proto.tari.rpc.CheckConnectivityResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.CheckConnectivityResponse();
  return proto.tari.rpc.CheckConnectivityResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.CheckConnectivityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.CheckConnectivityResponse}
 */
proto.tari.rpc.CheckConnectivityResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.tari.rpc.CheckConnectivityResponse.OnlineStatus} */ (reader.readEnum());
        msg.setStatus(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.CheckConnectivityResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.CheckConnectivityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.CheckConnectivityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.CheckConnectivityResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
};

/**
 * @enum {number}
 */
proto.tari.rpc.CheckConnectivityResponse.OnlineStatus = {
  CONNECTING: 0,
  ONLINE: 1,
  OFFLINE: 2,
};

/**
 * optional OnlineStatus status = 1;
 * @return {!proto.tari.rpc.CheckConnectivityResponse.OnlineStatus}
 */
proto.tari.rpc.CheckConnectivityResponse.prototype.getStatus = function () {
  return /** @type {!proto.tari.rpc.CheckConnectivityResponse.OnlineStatus} */ (
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};

/**
 * @param {!proto.tari.rpc.CheckConnectivityResponse.OnlineStatus} value
 * @return {!proto.tari.rpc.CheckConnectivityResponse} returns this
 */
proto.tari.rpc.CheckConnectivityResponse.prototype.setStatus = function (value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.TransactionEventRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.TransactionEventRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.TransactionEventRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.TransactionEventRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.TransactionEventRequest}
 */
proto.tari.rpc.TransactionEventRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.TransactionEventRequest();
  return proto.tari.rpc.TransactionEventRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.TransactionEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.TransactionEventRequest}
 */
proto.tari.rpc.TransactionEventRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.TransactionEventRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.TransactionEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.TransactionEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.TransactionEventRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.TransactionEvent.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.TransactionEvent.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.TransactionEvent} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.TransactionEvent.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        event: jspb.Message.getFieldWithDefault(msg, 1, ""),
        txId: jspb.Message.getFieldWithDefault(msg, 2, ""),
        sourceAddress: msg.getSourceAddress_asB64(),
        destAddress: msg.getDestAddress_asB64(),
        status: jspb.Message.getFieldWithDefault(msg, 5, ""),
        direction: jspb.Message.getFieldWithDefault(msg, 6, ""),
        amount: jspb.Message.getFieldWithDefault(msg, 7, 0),
        paymentId: msg.getPaymentId_asB64(),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.TransactionEvent}
 */
proto.tari.rpc.TransactionEvent.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.TransactionEvent();
  return proto.tari.rpc.TransactionEvent.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.TransactionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.TransactionEvent}
 */
proto.tari.rpc.TransactionEvent.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setEvent(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setTxId(value);
        break;
      case 3:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setSourceAddress(value);
        break;
      case 4:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setDestAddress(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setStatus(value);
        break;
      case 6:
        var value = /** @type {string} */ (reader.readString());
        msg.setDirection(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setAmount(value);
        break;
      case 9:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setPaymentId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.TransactionEvent.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.TransactionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.TransactionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.TransactionEvent.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getSourceAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(3, f);
  }
  f = message.getDestAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(4, f);
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(6, f);
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(7, f);
  }
  f = message.getPaymentId_asU8();
  if (f.length > 0) {
    writer.writeBytes(9, f);
  }
};

/**
 * optional string event = 1;
 * @return {string}
 */
proto.tari.rpc.TransactionEvent.prototype.getEvent = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.TransactionEvent} returns this
 */
proto.tari.rpc.TransactionEvent.prototype.setEvent = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string tx_id = 2;
 * @return {string}
 */
proto.tari.rpc.TransactionEvent.prototype.getTxId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.TransactionEvent} returns this
 */
proto.tari.rpc.TransactionEvent.prototype.setTxId = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional bytes source_address = 3;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.TransactionEvent.prototype.getSourceAddress = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * optional bytes source_address = 3;
 * This is a type-conversion wrapper around `getSourceAddress()`
 * @return {string}
 */
proto.tari.rpc.TransactionEvent.prototype.getSourceAddress_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getSourceAddress()));
};

/**
 * optional bytes source_address = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSourceAddress()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.TransactionEvent.prototype.getSourceAddress_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getSourceAddress()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.TransactionEvent} returns this
 */
proto.tari.rpc.TransactionEvent.prototype.setSourceAddress = function (value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};

/**
 * optional bytes dest_address = 4;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.TransactionEvent.prototype.getDestAddress = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};

/**
 * optional bytes dest_address = 4;
 * This is a type-conversion wrapper around `getDestAddress()`
 * @return {string}
 */
proto.tari.rpc.TransactionEvent.prototype.getDestAddress_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getDestAddress()));
};

/**
 * optional bytes dest_address = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDestAddress()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.TransactionEvent.prototype.getDestAddress_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getDestAddress()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.TransactionEvent} returns this
 */
proto.tari.rpc.TransactionEvent.prototype.setDestAddress = function (value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};

/**
 * optional string status = 5;
 * @return {string}
 */
proto.tari.rpc.TransactionEvent.prototype.getStatus = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.TransactionEvent} returns this
 */
proto.tari.rpc.TransactionEvent.prototype.setStatus = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional string direction = 6;
 * @return {string}
 */
proto.tari.rpc.TransactionEvent.prototype.getDirection = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.TransactionEvent} returns this
 */
proto.tari.rpc.TransactionEvent.prototype.setDirection = function (value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};

/**
 * optional uint64 amount = 7;
 * @return {number}
 */
proto.tari.rpc.TransactionEvent.prototype.getAmount = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.TransactionEvent} returns this
 */
proto.tari.rpc.TransactionEvent.prototype.setAmount = function (value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};

/**
 * optional bytes payment_id = 9;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.TransactionEvent.prototype.getPaymentId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};

/**
 * optional bytes payment_id = 9;
 * This is a type-conversion wrapper around `getPaymentId()`
 * @return {string}
 */
proto.tari.rpc.TransactionEvent.prototype.getPaymentId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getPaymentId()));
};

/**
 * optional bytes payment_id = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPaymentId()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.TransactionEvent.prototype.getPaymentId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getPaymentId()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.TransactionEvent} returns this
 */
proto.tari.rpc.TransactionEvent.prototype.setPaymentId = function (value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.TransactionEventResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.TransactionEventResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.TransactionEventResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.TransactionEventResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        transaction: (f = msg.getTransaction()) && proto.tari.rpc.TransactionEvent.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.TransactionEventResponse}
 */
proto.tari.rpc.TransactionEventResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.TransactionEventResponse();
  return proto.tari.rpc.TransactionEventResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.TransactionEventResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.TransactionEventResponse}
 */
proto.tari.rpc.TransactionEventResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.tari.rpc.TransactionEvent();
        reader.readMessage(value, proto.tari.rpc.TransactionEvent.deserializeBinaryFromReader);
        msg.setTransaction(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.TransactionEventResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.TransactionEventResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.TransactionEventResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.TransactionEventResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(1, f, proto.tari.rpc.TransactionEvent.serializeBinaryToWriter);
  }
};

/**
 * optional TransactionEvent transaction = 1;
 * @return {?proto.tari.rpc.TransactionEvent}
 */
proto.tari.rpc.TransactionEventResponse.prototype.getTransaction = function () {
  return /** @type{?proto.tari.rpc.TransactionEvent} */ (
    jspb.Message.getWrapperField(this, proto.tari.rpc.TransactionEvent, 1)
  );
};

/**
 * @param {?proto.tari.rpc.TransactionEvent|undefined} value
 * @return {!proto.tari.rpc.TransactionEventResponse} returns this
 */
proto.tari.rpc.TransactionEventResponse.prototype.setTransaction = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.TransactionEventResponse} returns this
 */
proto.tari.rpc.TransactionEventResponse.prototype.clearTransaction = function () {
  return this.setTransaction(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.TransactionEventResponse.prototype.hasTransaction = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.RegisterValidatorNodeRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.RegisterValidatorNodeRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.RegisterValidatorNodeRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.RegisterValidatorNodeRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        validatorNodePublicKey: msg.getValidatorNodePublicKey_asB64(),
        validatorNodeSignature:
          (f = msg.getValidatorNodeSignature()) && types_pb.Signature.toObject(includeInstance, f),
        feePerGram: jspb.Message.getFieldWithDefault(msg, 3, 0),
        paymentId: msg.getPaymentId_asB64(),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.RegisterValidatorNodeRequest}
 */
proto.tari.rpc.RegisterValidatorNodeRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.RegisterValidatorNodeRequest();
  return proto.tari.rpc.RegisterValidatorNodeRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.RegisterValidatorNodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.RegisterValidatorNodeRequest}
 */
proto.tari.rpc.RegisterValidatorNodeRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setValidatorNodePublicKey(value);
        break;
      case 2:
        var value = new types_pb.Signature();
        reader.readMessage(value, types_pb.Signature.deserializeBinaryFromReader);
        msg.setValidatorNodeSignature(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFeePerGram(value);
        break;
      case 5:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setPaymentId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.RegisterValidatorNodeRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.RegisterValidatorNodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.RegisterValidatorNodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.RegisterValidatorNodeRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getValidatorNodePublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getValidatorNodeSignature();
  if (f != null) {
    writer.writeMessage(2, f, types_pb.Signature.serializeBinaryToWriter);
  }
  f = message.getFeePerGram();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
  f = message.getPaymentId_asU8();
  if (f.length > 0) {
    writer.writeBytes(5, f);
  }
};

/**
 * optional bytes validator_node_public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.RegisterValidatorNodeRequest.prototype.getValidatorNodePublicKey = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes validator_node_public_key = 1;
 * This is a type-conversion wrapper around `getValidatorNodePublicKey()`
 * @return {string}
 */
proto.tari.rpc.RegisterValidatorNodeRequest.prototype.getValidatorNodePublicKey_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getValidatorNodePublicKey()));
};

/**
 * optional bytes validator_node_public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValidatorNodePublicKey()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.RegisterValidatorNodeRequest.prototype.getValidatorNodePublicKey_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getValidatorNodePublicKey()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.RegisterValidatorNodeRequest} returns this
 */
proto.tari.rpc.RegisterValidatorNodeRequest.prototype.setValidatorNodePublicKey = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional Signature validator_node_signature = 2;
 * @return {?proto.tari.rpc.Signature}
 */
proto.tari.rpc.RegisterValidatorNodeRequest.prototype.getValidatorNodeSignature = function () {
  return /** @type{?proto.tari.rpc.Signature} */ (jspb.Message.getWrapperField(this, types_pb.Signature, 2));
};

/**
 * @param {?proto.tari.rpc.Signature|undefined} value
 * @return {!proto.tari.rpc.RegisterValidatorNodeRequest} returns this
 */
proto.tari.rpc.RegisterValidatorNodeRequest.prototype.setValidatorNodeSignature = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.RegisterValidatorNodeRequest} returns this
 */
proto.tari.rpc.RegisterValidatorNodeRequest.prototype.clearValidatorNodeSignature = function () {
  return this.setValidatorNodeSignature(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.RegisterValidatorNodeRequest.prototype.hasValidatorNodeSignature = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional uint64 fee_per_gram = 3;
 * @return {number}
 */
proto.tari.rpc.RegisterValidatorNodeRequest.prototype.getFeePerGram = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.RegisterValidatorNodeRequest} returns this
 */
proto.tari.rpc.RegisterValidatorNodeRequest.prototype.setFeePerGram = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional bytes payment_id = 5;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.RegisterValidatorNodeRequest.prototype.getPaymentId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};

/**
 * optional bytes payment_id = 5;
 * This is a type-conversion wrapper around `getPaymentId()`
 * @return {string}
 */
proto.tari.rpc.RegisterValidatorNodeRequest.prototype.getPaymentId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getPaymentId()));
};

/**
 * optional bytes payment_id = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPaymentId()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.RegisterValidatorNodeRequest.prototype.getPaymentId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getPaymentId()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.RegisterValidatorNodeRequest} returns this
 */
proto.tari.rpc.RegisterValidatorNodeRequest.prototype.setPaymentId = function (value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tari.rpc.RegisterValidatorNodeResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.RegisterValidatorNodeResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.RegisterValidatorNodeResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.RegisterValidatorNodeResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        transactionId: jspb.Message.getFieldWithDefault(msg, 1, 0),
        isSuccess: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
        failureMessage: jspb.Message.getFieldWithDefault(msg, 3, ""),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tari.rpc.RegisterValidatorNodeResponse}
 */
proto.tari.rpc.RegisterValidatorNodeResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.RegisterValidatorNodeResponse();
  return proto.tari.rpc.RegisterValidatorNodeResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.RegisterValidatorNodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.RegisterValidatorNodeResponse}
 */
proto.tari.rpc.RegisterValidatorNodeResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTransactionId(value);
        break;
      case 2:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setIsSuccess(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setFailureMessage(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tari.rpc.RegisterValidatorNodeResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.RegisterValidatorNodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.RegisterValidatorNodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.RegisterValidatorNodeResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTransactionId();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getIsSuccess();
  if (f) {
    writer.writeBool(2, f);
  }
  f = message.getFailureMessage();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional uint64 transaction_id = 1;
 * @return {number}
 */
proto.tari.rpc.RegisterValidatorNodeResponse.prototype.getTransactionId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.RegisterValidatorNodeResponse} returns this
 */
proto.tari.rpc.RegisterValidatorNodeResponse.prototype.setTransactionId = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional bool is_success = 2;
 * @return {boolean}
 */
proto.tari.rpc.RegisterValidatorNodeResponse.prototype.getIsSuccess = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};

/**
 * @param {boolean} value
 * @return {!proto.tari.rpc.RegisterValidatorNodeResponse} returns this
 */
proto.tari.rpc.RegisterValidatorNodeResponse.prototype.setIsSuccess = function (value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};

/**
 * optional string failure_message = 3;
 * @return {string}
 */
proto.tari.rpc.RegisterValidatorNodeResponse.prototype.getFailureMessage = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.RegisterValidatorNodeResponse} returns this
 */
proto.tari.rpc.RegisterValidatorNodeResponse.prototype.setFailureMessage = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * @enum {number}
 */
proto.tari.rpc.TransactionDirection = {
  TRANSACTION_DIRECTION_UNKNOWN: 0,
  TRANSACTION_DIRECTION_INBOUND: 1,
  TRANSACTION_DIRECTION_OUTBOUND: 2,
};

/**
 * @enum {number}
 */
proto.tari.rpc.TransactionStatus = {
  TRANSACTION_STATUS_COMPLETED: 0,
  TRANSACTION_STATUS_BROADCAST: 1,
  TRANSACTION_STATUS_MINED_UNCONFIRMED: 2,
  TRANSACTION_STATUS_IMPORTED: 3,
  TRANSACTION_STATUS_PENDING: 4,
  TRANSACTION_STATUS_COINBASE: 5,
  TRANSACTION_STATUS_MINED_CONFIRMED: 6,
  TRANSACTION_STATUS_REJECTED: 7,
  TRANSACTION_STATUS_ONE_SIDED_UNCONFIRMED: 8,
  TRANSACTION_STATUS_ONE_SIDED_CONFIRMED: 9,
  TRANSACTION_STATUS_QUEUED: 10,
  TRANSACTION_STATUS_NOT_FOUND: 11,
  TRANSACTION_STATUS_COINBASE_UNCONFIRMED: 12,
  TRANSACTION_STATUS_COINBASE_CONFIRMED: 13,
  TRANSACTION_STATUS_COINBASE_NOT_IN_BLOCK_CHAIN: 14,
};

goog.object.extend(exports, proto.tari.rpc);
