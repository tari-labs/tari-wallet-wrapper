// source: base_node.proto
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

var types_pb = require("./types_pb.js");
goog.object.extend(proto, types_pb);
var transaction_pb = require("./transaction_pb.js");
goog.object.extend(proto, transaction_pb);
var block_pb = require("./block_pb.js");
goog.object.extend(proto, block_pb);
var network_pb = require("./network_pb.js");
goog.object.extend(proto, network_pb);
var sidechain_types_pb = require("./sidechain_types_pb.js");
goog.object.extend(proto, sidechain_types_pb);
goog.exportSymbol("proto.tari.rpc.BaseNodeState", null, global);
goog.exportSymbol("proto.tari.rpc.BlockBlobRequest", null, global);
goog.exportSymbol("proto.tari.rpc.BlockGroupRequest", null, global);
goog.exportSymbol("proto.tari.rpc.BlockGroupResponse", null, global);
goog.exportSymbol("proto.tari.rpc.BlockHeaderResponse", null, global);
goog.exportSymbol("proto.tari.rpc.BlockInfo", null, global);
goog.exportSymbol("proto.tari.rpc.BlockTimingResponse", null, global);
goog.exportSymbol("proto.tari.rpc.CalcType", null, global);
goog.exportSymbol("proto.tari.rpc.FetchMatchingUtxosRequest", null, global);
goog.exportSymbol("proto.tari.rpc.FetchMatchingUtxosResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetActiveValidatorNodesRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetActiveValidatorNodesResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetAssetMetadataRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetAssetMetadataResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetBlocksRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetBlocksResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetHeaderByHashRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetMempoolTransactionsRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetMempoolTransactionsResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetNetworkStateRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetNetworkStateResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetNewBlockBlobResult", null, global);
goog.exportSymbol("proto.tari.rpc.GetNewBlockResult", null, global);
goog.exportSymbol("proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetNewBlockWithCoinbasesRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetPeersRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetPeersResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetShardKeyRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetShardKeyResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetSideChainUtxosRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetSideChainUtxosResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetTemplateRegistrationResponse", null, global);
goog.exportSymbol("proto.tari.rpc.GetTemplateRegistrationsRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetTokensRequest", null, global);
goog.exportSymbol("proto.tari.rpc.GetTokensResponse", null, global);
goog.exportSymbol("proto.tari.rpc.HeightRequest", null, global);
goog.exportSymbol("proto.tari.rpc.IntegerValue", null, global);
goog.exportSymbol("proto.tari.rpc.ListAssetRegistrationsRequest", null, global);
goog.exportSymbol("proto.tari.rpc.ListAssetRegistrationsResponse", null, global);
goog.exportSymbol("proto.tari.rpc.ListHeadersRequest", null, global);
goog.exportSymbol("proto.tari.rpc.MempoolStatsResponse", null, global);
goog.exportSymbol("proto.tari.rpc.MetaData", null, global);
goog.exportSymbol("proto.tari.rpc.MinerData", null, global);
goog.exportSymbol("proto.tari.rpc.NetworkDifficultyResponse", null, global);
goog.exportSymbol("proto.tari.rpc.NewBlockCoinbase", null, global);
goog.exportSymbol("proto.tari.rpc.NewBlockTemplateRequest", null, global);
goog.exportSymbol("proto.tari.rpc.NewBlockTemplateResponse", null, global);
goog.exportSymbol("proto.tari.rpc.SearchKernelsRequest", null, global);
goog.exportSymbol("proto.tari.rpc.SearchUtxosRequest", null, global);
goog.exportSymbol("proto.tari.rpc.Sorting", null, global);
goog.exportSymbol("proto.tari.rpc.StringValue", null, global);
goog.exportSymbol("proto.tari.rpc.SubmitBlockResponse", null, global);
goog.exportSymbol("proto.tari.rpc.SubmitTransactionRequest", null, global);
goog.exportSymbol("proto.tari.rpc.SubmitTransactionResponse", null, global);
goog.exportSymbol("proto.tari.rpc.SubmitTransactionResult", null, global);
goog.exportSymbol("proto.tari.rpc.SyncInfoResponse", null, global);
goog.exportSymbol("proto.tari.rpc.SyncProgressResponse", null, global);
goog.exportSymbol("proto.tari.rpc.SyncState", null, global);
goog.exportSymbol("proto.tari.rpc.TipInfoResponse", null, global);
goog.exportSymbol("proto.tari.rpc.TransactionLocation", null, global);
goog.exportSymbol("proto.tari.rpc.TransactionStateRequest", null, global);
goog.exportSymbol("proto.tari.rpc.TransactionStateResponse", null, global);
goog.exportSymbol("proto.tari.rpc.ValueAtHeightResponse", null, global);
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
proto.tari.rpc.GetAssetMetadataRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetAssetMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetAssetMetadataRequest.displayName = "proto.tari.rpc.GetAssetMetadataRequest";
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
proto.tari.rpc.GetAssetMetadataResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetAssetMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetAssetMetadataResponse.displayName = "proto.tari.rpc.GetAssetMetadataResponse";
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
proto.tari.rpc.ListAssetRegistrationsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.ListAssetRegistrationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.ListAssetRegistrationsRequest.displayName = "proto.tari.rpc.ListAssetRegistrationsRequest";
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
proto.tari.rpc.ListAssetRegistrationsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.ListAssetRegistrationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.ListAssetRegistrationsResponse.displayName = "proto.tari.rpc.ListAssetRegistrationsResponse";
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
proto.tari.rpc.GetTokensRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.GetTokensRequest.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.GetTokensRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetTokensRequest.displayName = "proto.tari.rpc.GetTokensRequest";
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
proto.tari.rpc.GetTokensResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetTokensResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetTokensResponse.displayName = "proto.tari.rpc.GetTokensResponse";
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
proto.tari.rpc.SubmitBlockResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.SubmitBlockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.SubmitBlockResponse.displayName = "proto.tari.rpc.SubmitBlockResponse";
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
proto.tari.rpc.BlockBlobRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.BlockBlobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.BlockBlobRequest.displayName = "proto.tari.rpc.BlockBlobRequest";
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
proto.tari.rpc.TipInfoResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.TipInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.TipInfoResponse.displayName = "proto.tari.rpc.TipInfoResponse";
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
proto.tari.rpc.NewBlockTemplateResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.NewBlockTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.NewBlockTemplateResponse.displayName = "proto.tari.rpc.NewBlockTemplateResponse";
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
proto.tari.rpc.NewBlockTemplateRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.NewBlockTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.NewBlockTemplateRequest.displayName = "proto.tari.rpc.NewBlockTemplateRequest";
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
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.repeatedFields_,
    null,
  );
};
goog.inherits(proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.displayName =
    "proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest";
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
proto.tari.rpc.GetNewBlockWithCoinbasesRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.GetNewBlockWithCoinbasesRequest.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.GetNewBlockWithCoinbasesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetNewBlockWithCoinbasesRequest.displayName = "proto.tari.rpc.GetNewBlockWithCoinbasesRequest";
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
proto.tari.rpc.NewBlockCoinbase = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.NewBlockCoinbase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.NewBlockCoinbase.displayName = "proto.tari.rpc.NewBlockCoinbase";
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
proto.tari.rpc.NetworkDifficultyResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.NetworkDifficultyResponse.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.NetworkDifficultyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.NetworkDifficultyResponse.displayName = "proto.tari.rpc.NetworkDifficultyResponse";
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
proto.tari.rpc.ValueAtHeightResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.ValueAtHeightResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.ValueAtHeightResponse.displayName = "proto.tari.rpc.ValueAtHeightResponse";
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
proto.tari.rpc.IntegerValue = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.IntegerValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.IntegerValue.displayName = "proto.tari.rpc.IntegerValue";
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
proto.tari.rpc.StringValue = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.StringValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.StringValue.displayName = "proto.tari.rpc.StringValue";
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
proto.tari.rpc.BlockGroupRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.BlockGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.BlockGroupRequest.displayName = "proto.tari.rpc.BlockGroupRequest";
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
proto.tari.rpc.BlockGroupResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.BlockGroupResponse.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.BlockGroupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.BlockGroupResponse.displayName = "proto.tari.rpc.BlockGroupResponse";
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
proto.tari.rpc.HeightRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.HeightRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.HeightRequest.displayName = "proto.tari.rpc.HeightRequest";
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
proto.tari.rpc.BlockTimingResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.BlockTimingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.BlockTimingResponse.displayName = "proto.tari.rpc.BlockTimingResponse";
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
proto.tari.rpc.GetHeaderByHashRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetHeaderByHashRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetHeaderByHashRequest.displayName = "proto.tari.rpc.GetHeaderByHashRequest";
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
proto.tari.rpc.BlockHeaderResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.BlockHeaderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.BlockHeaderResponse.displayName = "proto.tari.rpc.BlockHeaderResponse";
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
proto.tari.rpc.ListHeadersRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.ListHeadersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.ListHeadersRequest.displayName = "proto.tari.rpc.ListHeadersRequest";
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
proto.tari.rpc.GetBlocksRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.GetBlocksRequest.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.GetBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetBlocksRequest.displayName = "proto.tari.rpc.GetBlocksRequest";
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
proto.tari.rpc.GetBlocksResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.GetBlocksResponse.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.GetBlocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetBlocksResponse.displayName = "proto.tari.rpc.GetBlocksResponse";
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
proto.tari.rpc.MetaData = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.MetaData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.MetaData.displayName = "proto.tari.rpc.MetaData";
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
proto.tari.rpc.SyncInfoResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.SyncInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.SyncInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.SyncInfoResponse.displayName = "proto.tari.rpc.SyncInfoResponse";
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
proto.tari.rpc.SyncProgressResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.SyncProgressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.SyncProgressResponse.displayName = "proto.tari.rpc.SyncProgressResponse";
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
proto.tari.rpc.GetNewBlockResult = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetNewBlockResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetNewBlockResult.displayName = "proto.tari.rpc.GetNewBlockResult";
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
proto.tari.rpc.GetNewBlockBlobResult = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetNewBlockBlobResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetNewBlockBlobResult.displayName = "proto.tari.rpc.GetNewBlockBlobResult";
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
proto.tari.rpc.MinerData = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.MinerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.MinerData.displayName = "proto.tari.rpc.MinerData";
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
proto.tari.rpc.SearchKernelsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.SearchKernelsRequest.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.SearchKernelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.SearchKernelsRequest.displayName = "proto.tari.rpc.SearchKernelsRequest";
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
proto.tari.rpc.SearchUtxosRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.SearchUtxosRequest.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.SearchUtxosRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.SearchUtxosRequest.displayName = "proto.tari.rpc.SearchUtxosRequest";
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
proto.tari.rpc.FetchMatchingUtxosRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.FetchMatchingUtxosRequest.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.FetchMatchingUtxosRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.FetchMatchingUtxosRequest.displayName = "proto.tari.rpc.FetchMatchingUtxosRequest";
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
proto.tari.rpc.FetchMatchingUtxosResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.FetchMatchingUtxosResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.FetchMatchingUtxosResponse.displayName = "proto.tari.rpc.FetchMatchingUtxosResponse";
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
proto.tari.rpc.GetPeersResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetPeersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetPeersResponse.displayName = "proto.tari.rpc.GetPeersResponse";
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
proto.tari.rpc.GetPeersRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetPeersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetPeersRequest.displayName = "proto.tari.rpc.GetPeersRequest";
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
proto.tari.rpc.SubmitTransactionRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.SubmitTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.SubmitTransactionRequest.displayName = "proto.tari.rpc.SubmitTransactionRequest";
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
proto.tari.rpc.SubmitTransactionResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.SubmitTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.SubmitTransactionResponse.displayName = "proto.tari.rpc.SubmitTransactionResponse";
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
proto.tari.rpc.GetMempoolTransactionsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetMempoolTransactionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetMempoolTransactionsRequest.displayName = "proto.tari.rpc.GetMempoolTransactionsRequest";
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
proto.tari.rpc.GetMempoolTransactionsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetMempoolTransactionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetMempoolTransactionsResponse.displayName = "proto.tari.rpc.GetMempoolTransactionsResponse";
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
proto.tari.rpc.TransactionStateRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.TransactionStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.TransactionStateRequest.displayName = "proto.tari.rpc.TransactionStateRequest";
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
proto.tari.rpc.TransactionStateResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.TransactionStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.TransactionStateResponse.displayName = "proto.tari.rpc.TransactionStateResponse";
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
proto.tari.rpc.MempoolStatsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.MempoolStatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.MempoolStatsResponse.displayName = "proto.tari.rpc.MempoolStatsResponse";
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
proto.tari.rpc.GetActiveValidatorNodesRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetActiveValidatorNodesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetActiveValidatorNodesRequest.displayName = "proto.tari.rpc.GetActiveValidatorNodesRequest";
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
proto.tari.rpc.GetActiveValidatorNodesResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetActiveValidatorNodesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetActiveValidatorNodesResponse.displayName = "proto.tari.rpc.GetActiveValidatorNodesResponse";
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
proto.tari.rpc.GetShardKeyRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetShardKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetShardKeyRequest.displayName = "proto.tari.rpc.GetShardKeyRequest";
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
proto.tari.rpc.GetShardKeyResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetShardKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetShardKeyResponse.displayName = "proto.tari.rpc.GetShardKeyResponse";
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
proto.tari.rpc.GetTemplateRegistrationsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetTemplateRegistrationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetTemplateRegistrationsRequest.displayName = "proto.tari.rpc.GetTemplateRegistrationsRequest";
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
proto.tari.rpc.GetTemplateRegistrationResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetTemplateRegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetTemplateRegistrationResponse.displayName = "proto.tari.rpc.GetTemplateRegistrationResponse";
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
proto.tari.rpc.BlockInfo = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.BlockInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.BlockInfo.displayName = "proto.tari.rpc.BlockInfo";
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
proto.tari.rpc.GetSideChainUtxosRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetSideChainUtxosRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetSideChainUtxosRequest.displayName = "proto.tari.rpc.GetSideChainUtxosRequest";
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
proto.tari.rpc.GetSideChainUtxosResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tari.rpc.GetSideChainUtxosResponse.repeatedFields_, null);
};
goog.inherits(proto.tari.rpc.GetSideChainUtxosResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetSideChainUtxosResponse.displayName = "proto.tari.rpc.GetSideChainUtxosResponse";
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
proto.tari.rpc.GetNetworkStateRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetNetworkStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetNetworkStateRequest.displayName = "proto.tari.rpc.GetNetworkStateRequest";
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
proto.tari.rpc.GetNetworkStateResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tari.rpc.GetNetworkStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tari.rpc.GetNetworkStateResponse.displayName = "proto.tari.rpc.GetNetworkStateResponse";
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
  proto.tari.rpc.GetAssetMetadataRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetAssetMetadataRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetAssetMetadataRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetAssetMetadataRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        assetPublicKey: msg.getAssetPublicKey_asB64(),
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
 * @return {!proto.tari.rpc.GetAssetMetadataRequest}
 */
proto.tari.rpc.GetAssetMetadataRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetAssetMetadataRequest();
  return proto.tari.rpc.GetAssetMetadataRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetAssetMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetAssetMetadataRequest}
 */
proto.tari.rpc.GetAssetMetadataRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setAssetPublicKey(value);
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
proto.tari.rpc.GetAssetMetadataRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetAssetMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetAssetMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetAssetMetadataRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAssetPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
};

/**
 * optional bytes asset_public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetAssetMetadataRequest.prototype.getAssetPublicKey = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes asset_public_key = 1;
 * This is a type-conversion wrapper around `getAssetPublicKey()`
 * @return {string}
 */
proto.tari.rpc.GetAssetMetadataRequest.prototype.getAssetPublicKey_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getAssetPublicKey()));
};

/**
 * optional bytes asset_public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetPublicKey()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetAssetMetadataRequest.prototype.getAssetPublicKey_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getAssetPublicKey()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetAssetMetadataRequest} returns this
 */
proto.tari.rpc.GetAssetMetadataRequest.prototype.setAssetPublicKey = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
  proto.tari.rpc.GetAssetMetadataResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetAssetMetadataResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetAssetMetadataResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetAssetMetadataResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        name: jspb.Message.getFieldWithDefault(msg, 2, ""),
        description: jspb.Message.getFieldWithDefault(msg, 3, ""),
        image: jspb.Message.getFieldWithDefault(msg, 4, ""),
        ownerCommitment: msg.getOwnerCommitment_asB64(),
        features: (f = msg.getFeatures()) && transaction_pb.OutputFeatures.toObject(includeInstance, f),
        minedHeight: jspb.Message.getFieldWithDefault(msg, 7, 0),
        minedInBlock: msg.getMinedInBlock_asB64(),
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
 * @return {!proto.tari.rpc.GetAssetMetadataResponse}
 */
proto.tari.rpc.GetAssetMetadataResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetAssetMetadataResponse();
  return proto.tari.rpc.GetAssetMetadataResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetAssetMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetAssetMetadataResponse}
 */
proto.tari.rpc.GetAssetMetadataResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setDescription(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setImage(value);
        break;
      case 5:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setOwnerCommitment(value);
        break;
      case 6:
        var value = new transaction_pb.OutputFeatures();
        reader.readMessage(value, transaction_pb.OutputFeatures.deserializeBinaryFromReader);
        msg.setFeatures(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setMinedHeight(value);
        break;
      case 8:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMinedInBlock(value);
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
proto.tari.rpc.GetAssetMetadataResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetAssetMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetAssetMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetAssetMetadataResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getOwnerCommitment_asU8();
  if (f.length > 0) {
    writer.writeBytes(5, f);
  }
  f = message.getFeatures();
  if (f != null) {
    writer.writeMessage(6, f, transaction_pb.OutputFeatures.serializeBinaryToWriter);
  }
  f = message.getMinedHeight();
  if (f !== 0) {
    writer.writeUint64(7, f);
  }
  f = message.getMinedInBlock_asU8();
  if (f.length > 0) {
    writer.writeBytes(8, f);
  }
};

/**
 * optional string name = 2;
 * @return {string}
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.GetAssetMetadataResponse} returns this
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string description = 3;
 * @return {string}
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.getDescription = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.GetAssetMetadataResponse} returns this
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.setDescription = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string image = 4;
 * @return {string}
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.getImage = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.GetAssetMetadataResponse} returns this
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.setImage = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional bytes owner_commitment = 5;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.getOwnerCommitment = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};

/**
 * optional bytes owner_commitment = 5;
 * This is a type-conversion wrapper around `getOwnerCommitment()`
 * @return {string}
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.getOwnerCommitment_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getOwnerCommitment()));
};

/**
 * optional bytes owner_commitment = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerCommitment()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.getOwnerCommitment_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getOwnerCommitment()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetAssetMetadataResponse} returns this
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.setOwnerCommitment = function (value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};

/**
 * optional OutputFeatures features = 6;
 * @return {?proto.tari.rpc.OutputFeatures}
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.getFeatures = function () {
  return /** @type{?proto.tari.rpc.OutputFeatures} */ (
    jspb.Message.getWrapperField(this, transaction_pb.OutputFeatures, 6)
  );
};

/**
 * @param {?proto.tari.rpc.OutputFeatures|undefined} value
 * @return {!proto.tari.rpc.GetAssetMetadataResponse} returns this
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.setFeatures = function (value) {
  return jspb.Message.setWrapperField(this, 6, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.GetAssetMetadataResponse} returns this
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.clearFeatures = function () {
  return this.setFeatures(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.hasFeatures = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional uint64 mined_height = 7;
 * @return {number}
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.getMinedHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetAssetMetadataResponse} returns this
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.setMinedHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};

/**
 * optional bytes mined_in_block = 8;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.getMinedInBlock = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};

/**
 * optional bytes mined_in_block = 8;
 * This is a type-conversion wrapper around `getMinedInBlock()`
 * @return {string}
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.getMinedInBlock_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMinedInBlock()));
};

/**
 * optional bytes mined_in_block = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMinedInBlock()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.getMinedInBlock_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getMinedInBlock()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetAssetMetadataResponse} returns this
 */
proto.tari.rpc.GetAssetMetadataResponse.prototype.setMinedInBlock = function (value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
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
  proto.tari.rpc.ListAssetRegistrationsRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.ListAssetRegistrationsRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.ListAssetRegistrationsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.ListAssetRegistrationsRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
        count: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.tari.rpc.ListAssetRegistrationsRequest}
 */
proto.tari.rpc.ListAssetRegistrationsRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.ListAssetRegistrationsRequest();
  return proto.tari.rpc.ListAssetRegistrationsRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.ListAssetRegistrationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.ListAssetRegistrationsRequest}
 */
proto.tari.rpc.ListAssetRegistrationsRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setOffset(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setCount(value);
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
proto.tari.rpc.ListAssetRegistrationsRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.ListAssetRegistrationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.ListAssetRegistrationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.ListAssetRegistrationsRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
};

/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.tari.rpc.ListAssetRegistrationsRequest.prototype.getOffset = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.ListAssetRegistrationsRequest} returns this
 */
proto.tari.rpc.ListAssetRegistrationsRequest.prototype.setOffset = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional uint64 count = 3;
 * @return {number}
 */
proto.tari.rpc.ListAssetRegistrationsRequest.prototype.getCount = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.ListAssetRegistrationsRequest} returns this
 */
proto.tari.rpc.ListAssetRegistrationsRequest.prototype.setCount = function (value) {
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
  proto.tari.rpc.ListAssetRegistrationsResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.ListAssetRegistrationsResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.ListAssetRegistrationsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.ListAssetRegistrationsResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        assetPublicKey: msg.getAssetPublicKey_asB64(),
        uniqueId: msg.getUniqueId_asB64(),
        ownerCommitment: msg.getOwnerCommitment_asB64(),
        minedHeight: jspb.Message.getFieldWithDefault(msg, 4, 0),
        minedInBlock: msg.getMinedInBlock_asB64(),
        features: (f = msg.getFeatures()) && transaction_pb.OutputFeatures.toObject(includeInstance, f),
        script: msg.getScript_asB64(),
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
 * @return {!proto.tari.rpc.ListAssetRegistrationsResponse}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.ListAssetRegistrationsResponse();
  return proto.tari.rpc.ListAssetRegistrationsResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.ListAssetRegistrationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.ListAssetRegistrationsResponse}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setAssetPublicKey(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setUniqueId(value);
        break;
      case 3:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setOwnerCommitment(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setMinedHeight(value);
        break;
      case 5:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMinedInBlock(value);
        break;
      case 6:
        var value = new transaction_pb.OutputFeatures();
        reader.readMessage(value, transaction_pb.OutputFeatures.deserializeBinaryFromReader);
        msg.setFeatures(value);
        break;
      case 7:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setScript(value);
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
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.ListAssetRegistrationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.ListAssetRegistrationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.ListAssetRegistrationsResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAssetPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getUniqueId_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
  f = message.getOwnerCommitment_asU8();
  if (f.length > 0) {
    writer.writeBytes(3, f);
  }
  f = message.getMinedHeight();
  if (f !== 0) {
    writer.writeUint64(4, f);
  }
  f = message.getMinedInBlock_asU8();
  if (f.length > 0) {
    writer.writeBytes(5, f);
  }
  f = message.getFeatures();
  if (f != null) {
    writer.writeMessage(6, f, transaction_pb.OutputFeatures.serializeBinaryToWriter);
  }
  f = message.getScript_asU8();
  if (f.length > 0) {
    writer.writeBytes(7, f);
  }
};

/**
 * optional bytes asset_public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getAssetPublicKey = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes asset_public_key = 1;
 * This is a type-conversion wrapper around `getAssetPublicKey()`
 * @return {string}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getAssetPublicKey_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getAssetPublicKey()));
};

/**
 * optional bytes asset_public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetPublicKey()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getAssetPublicKey_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getAssetPublicKey()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.ListAssetRegistrationsResponse} returns this
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.setAssetPublicKey = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional bytes unique_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getUniqueId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * optional bytes unique_id = 2;
 * This is a type-conversion wrapper around `getUniqueId()`
 * @return {string}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getUniqueId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getUniqueId()));
};

/**
 * optional bytes unique_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUniqueId()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getUniqueId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getUniqueId()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.ListAssetRegistrationsResponse} returns this
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.setUniqueId = function (value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};

/**
 * optional bytes owner_commitment = 3;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getOwnerCommitment = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * optional bytes owner_commitment = 3;
 * This is a type-conversion wrapper around `getOwnerCommitment()`
 * @return {string}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getOwnerCommitment_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getOwnerCommitment()));
};

/**
 * optional bytes owner_commitment = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerCommitment()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getOwnerCommitment_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getOwnerCommitment()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.ListAssetRegistrationsResponse} returns this
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.setOwnerCommitment = function (value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};

/**
 * optional uint64 mined_height = 4;
 * @return {number}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getMinedHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.ListAssetRegistrationsResponse} returns this
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.setMinedHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional bytes mined_in_block = 5;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getMinedInBlock = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};

/**
 * optional bytes mined_in_block = 5;
 * This is a type-conversion wrapper around `getMinedInBlock()`
 * @return {string}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getMinedInBlock_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMinedInBlock()));
};

/**
 * optional bytes mined_in_block = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMinedInBlock()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getMinedInBlock_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getMinedInBlock()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.ListAssetRegistrationsResponse} returns this
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.setMinedInBlock = function (value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};

/**
 * optional OutputFeatures features = 6;
 * @return {?proto.tari.rpc.OutputFeatures}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getFeatures = function () {
  return /** @type{?proto.tari.rpc.OutputFeatures} */ (
    jspb.Message.getWrapperField(this, transaction_pb.OutputFeatures, 6)
  );
};

/**
 * @param {?proto.tari.rpc.OutputFeatures|undefined} value
 * @return {!proto.tari.rpc.ListAssetRegistrationsResponse} returns this
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.setFeatures = function (value) {
  return jspb.Message.setWrapperField(this, 6, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.ListAssetRegistrationsResponse} returns this
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.clearFeatures = function () {
  return this.setFeatures(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.hasFeatures = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional bytes script = 7;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getScript = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};

/**
 * optional bytes script = 7;
 * This is a type-conversion wrapper around `getScript()`
 * @return {string}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getScript_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getScript()));
};

/**
 * optional bytes script = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScript()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.getScript_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getScript()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.ListAssetRegistrationsResponse} returns this
 */
proto.tari.rpc.ListAssetRegistrationsResponse.prototype.setScript = function (value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.GetTokensRequest.repeatedFields_ = [2];

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
  proto.tari.rpc.GetTokensRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetTokensRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetTokensRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetTokensRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        assetPublicKey: msg.getAssetPublicKey_asB64(),
        uniqueIdsList: msg.getUniqueIdsList_asB64(),
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
 * @return {!proto.tari.rpc.GetTokensRequest}
 */
proto.tari.rpc.GetTokensRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetTokensRequest();
  return proto.tari.rpc.GetTokensRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetTokensRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetTokensRequest}
 */
proto.tari.rpc.GetTokensRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setAssetPublicKey(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.addUniqueIds(value);
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
proto.tari.rpc.GetTokensRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetTokensRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetTokensRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetTokensRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAssetPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getUniqueIdsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(2, f);
  }
};

/**
 * optional bytes asset_public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetTokensRequest.prototype.getAssetPublicKey = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes asset_public_key = 1;
 * This is a type-conversion wrapper around `getAssetPublicKey()`
 * @return {string}
 */
proto.tari.rpc.GetTokensRequest.prototype.getAssetPublicKey_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getAssetPublicKey()));
};

/**
 * optional bytes asset_public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetPublicKey()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetTokensRequest.prototype.getAssetPublicKey_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getAssetPublicKey()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetTokensRequest} returns this
 */
proto.tari.rpc.GetTokensRequest.prototype.setAssetPublicKey = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * repeated bytes unique_ids = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.tari.rpc.GetTokensRequest.prototype.getUniqueIdsList = function () {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * repeated bytes unique_ids = 2;
 * This is a type-conversion wrapper around `getUniqueIdsList()`
 * @return {!Array<string>}
 */
proto.tari.rpc.GetTokensRequest.prototype.getUniqueIdsList_asB64 = function () {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(this.getUniqueIdsList()));
};

/**
 * repeated bytes unique_ids = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUniqueIdsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.tari.rpc.GetTokensRequest.prototype.getUniqueIdsList_asU8 = function () {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(this.getUniqueIdsList()));
};

/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.tari.rpc.GetTokensRequest} returns this
 */
proto.tari.rpc.GetTokensRequest.prototype.setUniqueIdsList = function (value) {
  return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.GetTokensRequest} returns this
 */
proto.tari.rpc.GetTokensRequest.prototype.addUniqueIds = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.GetTokensRequest} returns this
 */
proto.tari.rpc.GetTokensRequest.prototype.clearUniqueIdsList = function () {
  return this.setUniqueIdsList([]);
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
  proto.tari.rpc.GetTokensResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetTokensResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetTokensResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetTokensResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        uniqueId: msg.getUniqueId_asB64(),
        assetPublicKey: msg.getAssetPublicKey_asB64(),
        ownerCommitment: msg.getOwnerCommitment_asB64(),
        minedInBlock: msg.getMinedInBlock_asB64(),
        minedHeight: jspb.Message.getFieldWithDefault(msg, 5, 0),
        features: (f = msg.getFeatures()) && transaction_pb.OutputFeatures.toObject(includeInstance, f),
        script: msg.getScript_asB64(),
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
 * @return {!proto.tari.rpc.GetTokensResponse}
 */
proto.tari.rpc.GetTokensResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetTokensResponse();
  return proto.tari.rpc.GetTokensResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetTokensResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetTokensResponse}
 */
proto.tari.rpc.GetTokensResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setUniqueId(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setAssetPublicKey(value);
        break;
      case 3:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setOwnerCommitment(value);
        break;
      case 4:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMinedInBlock(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setMinedHeight(value);
        break;
      case 6:
        var value = new transaction_pb.OutputFeatures();
        reader.readMessage(value, transaction_pb.OutputFeatures.deserializeBinaryFromReader);
        msg.setFeatures(value);
        break;
      case 7:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setScript(value);
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
proto.tari.rpc.GetTokensResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetTokensResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetTokensResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetTokensResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getUniqueId_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getAssetPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
  f = message.getOwnerCommitment_asU8();
  if (f.length > 0) {
    writer.writeBytes(3, f);
  }
  f = message.getMinedInBlock_asU8();
  if (f.length > 0) {
    writer.writeBytes(4, f);
  }
  f = message.getMinedHeight();
  if (f !== 0) {
    writer.writeUint64(5, f);
  }
  f = message.getFeatures();
  if (f != null) {
    writer.writeMessage(6, f, transaction_pb.OutputFeatures.serializeBinaryToWriter);
  }
  f = message.getScript_asU8();
  if (f.length > 0) {
    writer.writeBytes(7, f);
  }
};

/**
 * optional bytes unique_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetTokensResponse.prototype.getUniqueId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes unique_id = 1;
 * This is a type-conversion wrapper around `getUniqueId()`
 * @return {string}
 */
proto.tari.rpc.GetTokensResponse.prototype.getUniqueId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getUniqueId()));
};

/**
 * optional bytes unique_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUniqueId()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetTokensResponse.prototype.getUniqueId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getUniqueId()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetTokensResponse} returns this
 */
proto.tari.rpc.GetTokensResponse.prototype.setUniqueId = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional bytes asset_public_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetTokensResponse.prototype.getAssetPublicKey = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * optional bytes asset_public_key = 2;
 * This is a type-conversion wrapper around `getAssetPublicKey()`
 * @return {string}
 */
proto.tari.rpc.GetTokensResponse.prototype.getAssetPublicKey_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getAssetPublicKey()));
};

/**
 * optional bytes asset_public_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetPublicKey()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetTokensResponse.prototype.getAssetPublicKey_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getAssetPublicKey()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetTokensResponse} returns this
 */
proto.tari.rpc.GetTokensResponse.prototype.setAssetPublicKey = function (value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};

/**
 * optional bytes owner_commitment = 3;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetTokensResponse.prototype.getOwnerCommitment = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * optional bytes owner_commitment = 3;
 * This is a type-conversion wrapper around `getOwnerCommitment()`
 * @return {string}
 */
proto.tari.rpc.GetTokensResponse.prototype.getOwnerCommitment_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getOwnerCommitment()));
};

/**
 * optional bytes owner_commitment = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerCommitment()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetTokensResponse.prototype.getOwnerCommitment_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getOwnerCommitment()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetTokensResponse} returns this
 */
proto.tari.rpc.GetTokensResponse.prototype.setOwnerCommitment = function (value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};

/**
 * optional bytes mined_in_block = 4;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetTokensResponse.prototype.getMinedInBlock = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};

/**
 * optional bytes mined_in_block = 4;
 * This is a type-conversion wrapper around `getMinedInBlock()`
 * @return {string}
 */
proto.tari.rpc.GetTokensResponse.prototype.getMinedInBlock_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMinedInBlock()));
};

/**
 * optional bytes mined_in_block = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMinedInBlock()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetTokensResponse.prototype.getMinedInBlock_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getMinedInBlock()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetTokensResponse} returns this
 */
proto.tari.rpc.GetTokensResponse.prototype.setMinedInBlock = function (value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};

/**
 * optional uint64 mined_height = 5;
 * @return {number}
 */
proto.tari.rpc.GetTokensResponse.prototype.getMinedHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetTokensResponse} returns this
 */
proto.tari.rpc.GetTokensResponse.prototype.setMinedHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};

/**
 * optional OutputFeatures features = 6;
 * @return {?proto.tari.rpc.OutputFeatures}
 */
proto.tari.rpc.GetTokensResponse.prototype.getFeatures = function () {
  return /** @type{?proto.tari.rpc.OutputFeatures} */ (
    jspb.Message.getWrapperField(this, transaction_pb.OutputFeatures, 6)
  );
};

/**
 * @param {?proto.tari.rpc.OutputFeatures|undefined} value
 * @return {!proto.tari.rpc.GetTokensResponse} returns this
 */
proto.tari.rpc.GetTokensResponse.prototype.setFeatures = function (value) {
  return jspb.Message.setWrapperField(this, 6, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.GetTokensResponse} returns this
 */
proto.tari.rpc.GetTokensResponse.prototype.clearFeatures = function () {
  return this.setFeatures(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.GetTokensResponse.prototype.hasFeatures = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional bytes script = 7;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetTokensResponse.prototype.getScript = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};

/**
 * optional bytes script = 7;
 * This is a type-conversion wrapper around `getScript()`
 * @return {string}
 */
proto.tari.rpc.GetTokensResponse.prototype.getScript_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getScript()));
};

/**
 * optional bytes script = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScript()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetTokensResponse.prototype.getScript_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getScript()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetTokensResponse} returns this
 */
proto.tari.rpc.GetTokensResponse.prototype.setScript = function (value) {
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
  proto.tari.rpc.SubmitBlockResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.SubmitBlockResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.SubmitBlockResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.SubmitBlockResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        blockHash: msg.getBlockHash_asB64(),
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
 * @return {!proto.tari.rpc.SubmitBlockResponse}
 */
proto.tari.rpc.SubmitBlockResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.SubmitBlockResponse();
  return proto.tari.rpc.SubmitBlockResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.SubmitBlockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.SubmitBlockResponse}
 */
proto.tari.rpc.SubmitBlockResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setBlockHash(value);
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
proto.tari.rpc.SubmitBlockResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.SubmitBlockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.SubmitBlockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.SubmitBlockResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getBlockHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
};

/**
 * optional bytes block_hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.SubmitBlockResponse.prototype.getBlockHash = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes block_hash = 1;
 * This is a type-conversion wrapper around `getBlockHash()`
 * @return {string}
 */
proto.tari.rpc.SubmitBlockResponse.prototype.getBlockHash_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getBlockHash()));
};

/**
 * optional bytes block_hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockHash()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.SubmitBlockResponse.prototype.getBlockHash_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getBlockHash()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.SubmitBlockResponse} returns this
 */
proto.tari.rpc.SubmitBlockResponse.prototype.setBlockHash = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
  proto.tari.rpc.BlockBlobRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.BlockBlobRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.BlockBlobRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.BlockBlobRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        headerBlob: msg.getHeaderBlob_asB64(),
        bodyBlob: msg.getBodyBlob_asB64(),
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
 * @return {!proto.tari.rpc.BlockBlobRequest}
 */
proto.tari.rpc.BlockBlobRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.BlockBlobRequest();
  return proto.tari.rpc.BlockBlobRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.BlockBlobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.BlockBlobRequest}
 */
proto.tari.rpc.BlockBlobRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setHeaderBlob(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setBodyBlob(value);
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
proto.tari.rpc.BlockBlobRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.BlockBlobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.BlockBlobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.BlockBlobRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeaderBlob_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getBodyBlob_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
};

/**
 * optional bytes header_blob = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.BlockBlobRequest.prototype.getHeaderBlob = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes header_blob = 1;
 * This is a type-conversion wrapper around `getHeaderBlob()`
 * @return {string}
 */
proto.tari.rpc.BlockBlobRequest.prototype.getHeaderBlob_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getHeaderBlob()));
};

/**
 * optional bytes header_blob = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHeaderBlob()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.BlockBlobRequest.prototype.getHeaderBlob_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getHeaderBlob()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.BlockBlobRequest} returns this
 */
proto.tari.rpc.BlockBlobRequest.prototype.setHeaderBlob = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional bytes body_blob = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.BlockBlobRequest.prototype.getBodyBlob = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * optional bytes body_blob = 2;
 * This is a type-conversion wrapper around `getBodyBlob()`
 * @return {string}
 */
proto.tari.rpc.BlockBlobRequest.prototype.getBodyBlob_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getBodyBlob()));
};

/**
 * optional bytes body_blob = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBodyBlob()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.BlockBlobRequest.prototype.getBodyBlob_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getBodyBlob()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.BlockBlobRequest} returns this
 */
proto.tari.rpc.BlockBlobRequest.prototype.setBodyBlob = function (value) {
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
  proto.tari.rpc.TipInfoResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.TipInfoResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.TipInfoResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.TipInfoResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        metadata: (f = msg.getMetadata()) && proto.tari.rpc.MetaData.toObject(includeInstance, f),
        initialSyncAchieved: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
        baseNodeState: jspb.Message.getFieldWithDefault(msg, 3, 0),
        failedCheckpoints: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
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
 * @return {!proto.tari.rpc.TipInfoResponse}
 */
proto.tari.rpc.TipInfoResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.TipInfoResponse();
  return proto.tari.rpc.TipInfoResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.TipInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.TipInfoResponse}
 */
proto.tari.rpc.TipInfoResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.tari.rpc.MetaData();
        reader.readMessage(value, proto.tari.rpc.MetaData.deserializeBinaryFromReader);
        msg.setMetadata(value);
        break;
      case 2:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setInitialSyncAchieved(value);
        break;
      case 3:
        var value = /** @type {!proto.tari.rpc.BaseNodeState} */ (reader.readEnum());
        msg.setBaseNodeState(value);
        break;
      case 4:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setFailedCheckpoints(value);
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
proto.tari.rpc.TipInfoResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.TipInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.TipInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.TipInfoResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(1, f, proto.tari.rpc.MetaData.serializeBinaryToWriter);
  }
  f = message.getInitialSyncAchieved();
  if (f) {
    writer.writeBool(2, f);
  }
  f = message.getBaseNodeState();
  if (f !== 0.0) {
    writer.writeEnum(3, f);
  }
  f = message.getFailedCheckpoints();
  if (f) {
    writer.writeBool(4, f);
  }
};

/**
 * optional MetaData metadata = 1;
 * @return {?proto.tari.rpc.MetaData}
 */
proto.tari.rpc.TipInfoResponse.prototype.getMetadata = function () {
  return /** @type{?proto.tari.rpc.MetaData} */ (jspb.Message.getWrapperField(this, proto.tari.rpc.MetaData, 1));
};

/**
 * @param {?proto.tari.rpc.MetaData|undefined} value
 * @return {!proto.tari.rpc.TipInfoResponse} returns this
 */
proto.tari.rpc.TipInfoResponse.prototype.setMetadata = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.TipInfoResponse} returns this
 */
proto.tari.rpc.TipInfoResponse.prototype.clearMetadata = function () {
  return this.setMetadata(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.TipInfoResponse.prototype.hasMetadata = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional bool initial_sync_achieved = 2;
 * @return {boolean}
 */
proto.tari.rpc.TipInfoResponse.prototype.getInitialSyncAchieved = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};

/**
 * @param {boolean} value
 * @return {!proto.tari.rpc.TipInfoResponse} returns this
 */
proto.tari.rpc.TipInfoResponse.prototype.setInitialSyncAchieved = function (value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};

/**
 * optional BaseNodeState base_node_state = 3;
 * @return {!proto.tari.rpc.BaseNodeState}
 */
proto.tari.rpc.TipInfoResponse.prototype.getBaseNodeState = function () {
  return /** @type {!proto.tari.rpc.BaseNodeState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {!proto.tari.rpc.BaseNodeState} value
 * @return {!proto.tari.rpc.TipInfoResponse} returns this
 */
proto.tari.rpc.TipInfoResponse.prototype.setBaseNodeState = function (value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};

/**
 * optional bool failed_checkpoints = 4;
 * @return {boolean}
 */
proto.tari.rpc.TipInfoResponse.prototype.getFailedCheckpoints = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};

/**
 * @param {boolean} value
 * @return {!proto.tari.rpc.TipInfoResponse} returns this
 */
proto.tari.rpc.TipInfoResponse.prototype.setFailedCheckpoints = function (value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
  proto.tari.rpc.NewBlockTemplateResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.NewBlockTemplateResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.NewBlockTemplateResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.NewBlockTemplateResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        newBlockTemplate: (f = msg.getNewBlockTemplate()) && block_pb.NewBlockTemplate.toObject(includeInstance, f),
        initialSyncAchieved: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
        minerData: (f = msg.getMinerData()) && proto.tari.rpc.MinerData.toObject(includeInstance, f),
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
 * @return {!proto.tari.rpc.NewBlockTemplateResponse}
 */
proto.tari.rpc.NewBlockTemplateResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.NewBlockTemplateResponse();
  return proto.tari.rpc.NewBlockTemplateResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.NewBlockTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.NewBlockTemplateResponse}
 */
proto.tari.rpc.NewBlockTemplateResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new block_pb.NewBlockTemplate();
        reader.readMessage(value, block_pb.NewBlockTemplate.deserializeBinaryFromReader);
        msg.setNewBlockTemplate(value);
        break;
      case 3:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setInitialSyncAchieved(value);
        break;
      case 4:
        var value = new proto.tari.rpc.MinerData();
        reader.readMessage(value, proto.tari.rpc.MinerData.deserializeBinaryFromReader);
        msg.setMinerData(value);
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
proto.tari.rpc.NewBlockTemplateResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.NewBlockTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.NewBlockTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.NewBlockTemplateResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getNewBlockTemplate();
  if (f != null) {
    writer.writeMessage(1, f, block_pb.NewBlockTemplate.serializeBinaryToWriter);
  }
  f = message.getInitialSyncAchieved();
  if (f) {
    writer.writeBool(3, f);
  }
  f = message.getMinerData();
  if (f != null) {
    writer.writeMessage(4, f, proto.tari.rpc.MinerData.serializeBinaryToWriter);
  }
};

/**
 * optional NewBlockTemplate new_block_template = 1;
 * @return {?proto.tari.rpc.NewBlockTemplate}
 */
proto.tari.rpc.NewBlockTemplateResponse.prototype.getNewBlockTemplate = function () {
  return /** @type{?proto.tari.rpc.NewBlockTemplate} */ (
    jspb.Message.getWrapperField(this, block_pb.NewBlockTemplate, 1)
  );
};

/**
 * @param {?proto.tari.rpc.NewBlockTemplate|undefined} value
 * @return {!proto.tari.rpc.NewBlockTemplateResponse} returns this
 */
proto.tari.rpc.NewBlockTemplateResponse.prototype.setNewBlockTemplate = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.NewBlockTemplateResponse} returns this
 */
proto.tari.rpc.NewBlockTemplateResponse.prototype.clearNewBlockTemplate = function () {
  return this.setNewBlockTemplate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.NewBlockTemplateResponse.prototype.hasNewBlockTemplate = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional bool initial_sync_achieved = 3;
 * @return {boolean}
 */
proto.tari.rpc.NewBlockTemplateResponse.prototype.getInitialSyncAchieved = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};

/**
 * @param {boolean} value
 * @return {!proto.tari.rpc.NewBlockTemplateResponse} returns this
 */
proto.tari.rpc.NewBlockTemplateResponse.prototype.setInitialSyncAchieved = function (value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};

/**
 * optional MinerData miner_data = 4;
 * @return {?proto.tari.rpc.MinerData}
 */
proto.tari.rpc.NewBlockTemplateResponse.prototype.getMinerData = function () {
  return /** @type{?proto.tari.rpc.MinerData} */ (jspb.Message.getWrapperField(this, proto.tari.rpc.MinerData, 4));
};

/**
 * @param {?proto.tari.rpc.MinerData|undefined} value
 * @return {!proto.tari.rpc.NewBlockTemplateResponse} returns this
 */
proto.tari.rpc.NewBlockTemplateResponse.prototype.setMinerData = function (value) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.NewBlockTemplateResponse} returns this
 */
proto.tari.rpc.NewBlockTemplateResponse.prototype.clearMinerData = function () {
  return this.setMinerData(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.NewBlockTemplateResponse.prototype.hasMinerData = function () {
  return jspb.Message.getField(this, 4) != null;
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
  proto.tari.rpc.NewBlockTemplateRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.NewBlockTemplateRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.NewBlockTemplateRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.NewBlockTemplateRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        algo: (f = msg.getAlgo()) && block_pb.PowAlgo.toObject(includeInstance, f),
        maxWeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.tari.rpc.NewBlockTemplateRequest}
 */
proto.tari.rpc.NewBlockTemplateRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.NewBlockTemplateRequest();
  return proto.tari.rpc.NewBlockTemplateRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.NewBlockTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.NewBlockTemplateRequest}
 */
proto.tari.rpc.NewBlockTemplateRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new block_pb.PowAlgo();
        reader.readMessage(value, block_pb.PowAlgo.deserializeBinaryFromReader);
        msg.setAlgo(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setMaxWeight(value);
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
proto.tari.rpc.NewBlockTemplateRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.NewBlockTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.NewBlockTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.NewBlockTemplateRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAlgo();
  if (f != null) {
    writer.writeMessage(1, f, block_pb.PowAlgo.serializeBinaryToWriter);
  }
  f = message.getMaxWeight();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
};

/**
 * optional PowAlgo algo = 1;
 * @return {?proto.tari.rpc.PowAlgo}
 */
proto.tari.rpc.NewBlockTemplateRequest.prototype.getAlgo = function () {
  return /** @type{?proto.tari.rpc.PowAlgo} */ (jspb.Message.getWrapperField(this, block_pb.PowAlgo, 1));
};

/**
 * @param {?proto.tari.rpc.PowAlgo|undefined} value
 * @return {!proto.tari.rpc.NewBlockTemplateRequest} returns this
 */
proto.tari.rpc.NewBlockTemplateRequest.prototype.setAlgo = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.NewBlockTemplateRequest} returns this
 */
proto.tari.rpc.NewBlockTemplateRequest.prototype.clearAlgo = function () {
  return this.setAlgo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.NewBlockTemplateRequest.prototype.hasAlgo = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional uint64 max_weight = 2;
 * @return {number}
 */
proto.tari.rpc.NewBlockTemplateRequest.prototype.getMaxWeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.NewBlockTemplateRequest} returns this
 */
proto.tari.rpc.NewBlockTemplateRequest.prototype.setMaxWeight = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.repeatedFields_ = [3];

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
  proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        algo: (f = msg.getAlgo()) && block_pb.PowAlgo.toObject(includeInstance, f),
        maxWeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
        coinbasesList: jspb.Message.toObjectList(
          msg.getCoinbasesList(),
          proto.tari.rpc.NewBlockCoinbase.toObject,
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
 * @return {!proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest}
 */
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest();
  return proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest}
 */
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new block_pb.PowAlgo();
        reader.readMessage(value, block_pb.PowAlgo.deserializeBinaryFromReader);
        msg.setAlgo(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setMaxWeight(value);
        break;
      case 3:
        var value = new proto.tari.rpc.NewBlockCoinbase();
        reader.readMessage(value, proto.tari.rpc.NewBlockCoinbase.deserializeBinaryFromReader);
        msg.addCoinbases(value);
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
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAlgo();
  if (f != null) {
    writer.writeMessage(1, f, block_pb.PowAlgo.serializeBinaryToWriter);
  }
  f = message.getMaxWeight();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getCoinbasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, proto.tari.rpc.NewBlockCoinbase.serializeBinaryToWriter);
  }
};

/**
 * optional PowAlgo algo = 1;
 * @return {?proto.tari.rpc.PowAlgo}
 */
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.prototype.getAlgo = function () {
  return /** @type{?proto.tari.rpc.PowAlgo} */ (jspb.Message.getWrapperField(this, block_pb.PowAlgo, 1));
};

/**
 * @param {?proto.tari.rpc.PowAlgo|undefined} value
 * @return {!proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest} returns this
 */
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.prototype.setAlgo = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest} returns this
 */
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.prototype.clearAlgo = function () {
  return this.setAlgo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.prototype.hasAlgo = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional uint64 max_weight = 2;
 * @return {number}
 */
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.prototype.getMaxWeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest} returns this
 */
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.prototype.setMaxWeight = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * repeated NewBlockCoinbase coinbases = 3;
 * @return {!Array<!proto.tari.rpc.NewBlockCoinbase>}
 */
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.prototype.getCoinbasesList = function () {
  return /** @type{!Array<!proto.tari.rpc.NewBlockCoinbase>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tari.rpc.NewBlockCoinbase, 3)
  );
};

/**
 * @param {!Array<!proto.tari.rpc.NewBlockCoinbase>} value
 * @return {!proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest} returns this
 */
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.prototype.setCoinbasesList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.tari.rpc.NewBlockCoinbase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.NewBlockCoinbase}
 */
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.prototype.addCoinbases = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tari.rpc.NewBlockCoinbase, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest} returns this
 */
proto.tari.rpc.GetNewBlockTemplateWithCoinbasesRequest.prototype.clearCoinbasesList = function () {
  return this.setCoinbasesList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.GetNewBlockWithCoinbasesRequest.repeatedFields_ = [2];

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
  proto.tari.rpc.GetNewBlockWithCoinbasesRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetNewBlockWithCoinbasesRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetNewBlockWithCoinbasesRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetNewBlockWithCoinbasesRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        newTemplate: (f = msg.getNewTemplate()) && block_pb.NewBlockTemplate.toObject(includeInstance, f),
        coinbasesList: jspb.Message.toObjectList(
          msg.getCoinbasesList(),
          proto.tari.rpc.NewBlockCoinbase.toObject,
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
 * @return {!proto.tari.rpc.GetNewBlockWithCoinbasesRequest}
 */
proto.tari.rpc.GetNewBlockWithCoinbasesRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetNewBlockWithCoinbasesRequest();
  return proto.tari.rpc.GetNewBlockWithCoinbasesRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetNewBlockWithCoinbasesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetNewBlockWithCoinbasesRequest}
 */
proto.tari.rpc.GetNewBlockWithCoinbasesRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new block_pb.NewBlockTemplate();
        reader.readMessage(value, block_pb.NewBlockTemplate.deserializeBinaryFromReader);
        msg.setNewTemplate(value);
        break;
      case 2:
        var value = new proto.tari.rpc.NewBlockCoinbase();
        reader.readMessage(value, proto.tari.rpc.NewBlockCoinbase.deserializeBinaryFromReader);
        msg.addCoinbases(value);
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
proto.tari.rpc.GetNewBlockWithCoinbasesRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetNewBlockWithCoinbasesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetNewBlockWithCoinbasesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetNewBlockWithCoinbasesRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getNewTemplate();
  if (f != null) {
    writer.writeMessage(1, f, block_pb.NewBlockTemplate.serializeBinaryToWriter);
  }
  f = message.getCoinbasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, proto.tari.rpc.NewBlockCoinbase.serializeBinaryToWriter);
  }
};

/**
 * optional NewBlockTemplate new_template = 1;
 * @return {?proto.tari.rpc.NewBlockTemplate}
 */
proto.tari.rpc.GetNewBlockWithCoinbasesRequest.prototype.getNewTemplate = function () {
  return /** @type{?proto.tari.rpc.NewBlockTemplate} */ (
    jspb.Message.getWrapperField(this, block_pb.NewBlockTemplate, 1)
  );
};

/**
 * @param {?proto.tari.rpc.NewBlockTemplate|undefined} value
 * @return {!proto.tari.rpc.GetNewBlockWithCoinbasesRequest} returns this
 */
proto.tari.rpc.GetNewBlockWithCoinbasesRequest.prototype.setNewTemplate = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.GetNewBlockWithCoinbasesRequest} returns this
 */
proto.tari.rpc.GetNewBlockWithCoinbasesRequest.prototype.clearNewTemplate = function () {
  return this.setNewTemplate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.GetNewBlockWithCoinbasesRequest.prototype.hasNewTemplate = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated NewBlockCoinbase coinbases = 2;
 * @return {!Array<!proto.tari.rpc.NewBlockCoinbase>}
 */
proto.tari.rpc.GetNewBlockWithCoinbasesRequest.prototype.getCoinbasesList = function () {
  return /** @type{!Array<!proto.tari.rpc.NewBlockCoinbase>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tari.rpc.NewBlockCoinbase, 2)
  );
};

/**
 * @param {!Array<!proto.tari.rpc.NewBlockCoinbase>} value
 * @return {!proto.tari.rpc.GetNewBlockWithCoinbasesRequest} returns this
 */
proto.tari.rpc.GetNewBlockWithCoinbasesRequest.prototype.setCoinbasesList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.tari.rpc.NewBlockCoinbase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.NewBlockCoinbase}
 */
proto.tari.rpc.GetNewBlockWithCoinbasesRequest.prototype.addCoinbases = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tari.rpc.NewBlockCoinbase, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.GetNewBlockWithCoinbasesRequest} returns this
 */
proto.tari.rpc.GetNewBlockWithCoinbasesRequest.prototype.clearCoinbasesList = function () {
  return this.setCoinbasesList([]);
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
  proto.tari.rpc.NewBlockCoinbase.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.NewBlockCoinbase.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.NewBlockCoinbase} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.NewBlockCoinbase.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        address: jspb.Message.getFieldWithDefault(msg, 1, ""),
        value: jspb.Message.getFieldWithDefault(msg, 2, 0),
        stealthPayment: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
        revealedValueProof: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
        coinbaseExtra: msg.getCoinbaseExtra_asB64(),
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
 * @return {!proto.tari.rpc.NewBlockCoinbase}
 */
proto.tari.rpc.NewBlockCoinbase.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.NewBlockCoinbase();
  return proto.tari.rpc.NewBlockCoinbase.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.NewBlockCoinbase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.NewBlockCoinbase}
 */
proto.tari.rpc.NewBlockCoinbase.deserializeBinaryFromReader = function (msg, reader) {
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
        msg.setValue(value);
        break;
      case 3:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setStealthPayment(value);
        break;
      case 4:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setRevealedValueProof(value);
        break;
      case 5:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setCoinbaseExtra(value);
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
proto.tari.rpc.NewBlockCoinbase.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.NewBlockCoinbase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.NewBlockCoinbase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.NewBlockCoinbase.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getStealthPayment();
  if (f) {
    writer.writeBool(3, f);
  }
  f = message.getRevealedValueProof();
  if (f) {
    writer.writeBool(4, f);
  }
  f = message.getCoinbaseExtra_asU8();
  if (f.length > 0) {
    writer.writeBytes(5, f);
  }
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.tari.rpc.NewBlockCoinbase.prototype.getAddress = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.NewBlockCoinbase} returns this
 */
proto.tari.rpc.NewBlockCoinbase.prototype.setAddress = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional uint64 value = 2;
 * @return {number}
 */
proto.tari.rpc.NewBlockCoinbase.prototype.getValue = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.NewBlockCoinbase} returns this
 */
proto.tari.rpc.NewBlockCoinbase.prototype.setValue = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional bool stealth_payment = 3;
 * @return {boolean}
 */
proto.tari.rpc.NewBlockCoinbase.prototype.getStealthPayment = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};

/**
 * @param {boolean} value
 * @return {!proto.tari.rpc.NewBlockCoinbase} returns this
 */
proto.tari.rpc.NewBlockCoinbase.prototype.setStealthPayment = function (value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};

/**
 * optional bool revealed_value_proof = 4;
 * @return {boolean}
 */
proto.tari.rpc.NewBlockCoinbase.prototype.getRevealedValueProof = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};

/**
 * @param {boolean} value
 * @return {!proto.tari.rpc.NewBlockCoinbase} returns this
 */
proto.tari.rpc.NewBlockCoinbase.prototype.setRevealedValueProof = function (value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};

/**
 * optional bytes coinbase_extra = 5;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.NewBlockCoinbase.prototype.getCoinbaseExtra = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};

/**
 * optional bytes coinbase_extra = 5;
 * This is a type-conversion wrapper around `getCoinbaseExtra()`
 * @return {string}
 */
proto.tari.rpc.NewBlockCoinbase.prototype.getCoinbaseExtra_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getCoinbaseExtra()));
};

/**
 * optional bytes coinbase_extra = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCoinbaseExtra()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.NewBlockCoinbase.prototype.getCoinbaseExtra_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getCoinbaseExtra()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.NewBlockCoinbase} returns this
 */
proto.tari.rpc.NewBlockCoinbase.prototype.setCoinbaseExtra = function (value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.NetworkDifficultyResponse.repeatedFields_ = [9];

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
  proto.tari.rpc.NetworkDifficultyResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.NetworkDifficultyResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.NetworkDifficultyResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.NetworkDifficultyResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        difficulty: jspb.Message.getFieldWithDefault(msg, 1, 0),
        estimatedHashRate: jspb.Message.getFieldWithDefault(msg, 2, 0),
        height: jspb.Message.getFieldWithDefault(msg, 3, 0),
        timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0),
        powAlgo: jspb.Message.getFieldWithDefault(msg, 5, 0),
        sha3xEstimatedHashRate: jspb.Message.getFieldWithDefault(msg, 6, 0),
        randomxEstimatedHashRate: jspb.Message.getFieldWithDefault(msg, 7, 0),
        numCoinbases: jspb.Message.getFieldWithDefault(msg, 8, 0),
        coinbaseExtrasList: msg.getCoinbaseExtrasList_asB64(),
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
 * @return {!proto.tari.rpc.NetworkDifficultyResponse}
 */
proto.tari.rpc.NetworkDifficultyResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.NetworkDifficultyResponse();
  return proto.tari.rpc.NetworkDifficultyResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.NetworkDifficultyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.NetworkDifficultyResponse}
 */
proto.tari.rpc.NetworkDifficultyResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setDifficulty(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setEstimatedHashRate(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setHeight(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTimestamp(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setPowAlgo(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setSha3xEstimatedHashRate(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setRandomxEstimatedHashRate(value);
        break;
      case 8:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setNumCoinbases(value);
        break;
      case 9:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.addCoinbaseExtras(value);
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
proto.tari.rpc.NetworkDifficultyResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.NetworkDifficultyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.NetworkDifficultyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.NetworkDifficultyResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getDifficulty();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getEstimatedHashRate();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(4, f);
  }
  f = message.getPowAlgo();
  if (f !== 0) {
    writer.writeUint64(5, f);
  }
  f = message.getSha3xEstimatedHashRate();
  if (f !== 0) {
    writer.writeUint64(6, f);
  }
  f = message.getRandomxEstimatedHashRate();
  if (f !== 0) {
    writer.writeUint64(7, f);
  }
  f = message.getNumCoinbases();
  if (f !== 0) {
    writer.writeUint64(8, f);
  }
  f = message.getCoinbaseExtrasList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(9, f);
  }
};

/**
 * optional uint64 difficulty = 1;
 * @return {number}
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.getDifficulty = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.NetworkDifficultyResponse} returns this
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.setDifficulty = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional uint64 estimated_hash_rate = 2;
 * @return {number}
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.getEstimatedHashRate = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.NetworkDifficultyResponse} returns this
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.setEstimatedHashRate = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional uint64 height = 3;
 * @return {number}
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.getHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.NetworkDifficultyResponse} returns this
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.setHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional uint64 timestamp = 4;
 * @return {number}
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.getTimestamp = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.NetworkDifficultyResponse} returns this
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.setTimestamp = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional uint64 pow_algo = 5;
 * @return {number}
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.getPowAlgo = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.NetworkDifficultyResponse} returns this
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.setPowAlgo = function (value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};

/**
 * optional uint64 sha3x_estimated_hash_rate = 6;
 * @return {number}
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.getSha3xEstimatedHashRate = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.NetworkDifficultyResponse} returns this
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.setSha3xEstimatedHashRate = function (value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};

/**
 * optional uint64 randomx_estimated_hash_rate = 7;
 * @return {number}
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.getRandomxEstimatedHashRate = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.NetworkDifficultyResponse} returns this
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.setRandomxEstimatedHashRate = function (value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};

/**
 * optional uint64 num_coinbases = 8;
 * @return {number}
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.getNumCoinbases = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.NetworkDifficultyResponse} returns this
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.setNumCoinbases = function (value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};

/**
 * repeated bytes coinbase_extras = 9;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.getCoinbaseExtrasList = function () {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 9));
};

/**
 * repeated bytes coinbase_extras = 9;
 * This is a type-conversion wrapper around `getCoinbaseExtrasList()`
 * @return {!Array<string>}
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.getCoinbaseExtrasList_asB64 = function () {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(this.getCoinbaseExtrasList()));
};

/**
 * repeated bytes coinbase_extras = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCoinbaseExtrasList()`
 * @return {!Array<!Uint8Array>}
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.getCoinbaseExtrasList_asU8 = function () {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(this.getCoinbaseExtrasList()));
};

/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.tari.rpc.NetworkDifficultyResponse} returns this
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.setCoinbaseExtrasList = function (value) {
  return jspb.Message.setField(this, 9, value || []);
};

/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.NetworkDifficultyResponse} returns this
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.addCoinbaseExtras = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.NetworkDifficultyResponse} returns this
 */
proto.tari.rpc.NetworkDifficultyResponse.prototype.clearCoinbaseExtrasList = function () {
  return this.setCoinbaseExtrasList([]);
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
  proto.tari.rpc.ValueAtHeightResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.ValueAtHeightResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.ValueAtHeightResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.ValueAtHeightResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        value: jspb.Message.getFieldWithDefault(msg, 1, 0),
        height: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.tari.rpc.ValueAtHeightResponse}
 */
proto.tari.rpc.ValueAtHeightResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.ValueAtHeightResponse();
  return proto.tari.rpc.ValueAtHeightResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.ValueAtHeightResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.ValueAtHeightResponse}
 */
proto.tari.rpc.ValueAtHeightResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setValue(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setHeight(value);
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
proto.tari.rpc.ValueAtHeightResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.ValueAtHeightResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.ValueAtHeightResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.ValueAtHeightResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
};

/**
 * optional uint64 value = 1;
 * @return {number}
 */
proto.tari.rpc.ValueAtHeightResponse.prototype.getValue = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.ValueAtHeightResponse} returns this
 */
proto.tari.rpc.ValueAtHeightResponse.prototype.setValue = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional uint64 height = 2;
 * @return {number}
 */
proto.tari.rpc.ValueAtHeightResponse.prototype.getHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.ValueAtHeightResponse} returns this
 */
proto.tari.rpc.ValueAtHeightResponse.prototype.setHeight = function (value) {
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
  proto.tari.rpc.IntegerValue.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.IntegerValue.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.IntegerValue} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.IntegerValue.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        value: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.tari.rpc.IntegerValue}
 */
proto.tari.rpc.IntegerValue.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.IntegerValue();
  return proto.tari.rpc.IntegerValue.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.IntegerValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.IntegerValue}
 */
proto.tari.rpc.IntegerValue.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setValue(value);
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
proto.tari.rpc.IntegerValue.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.IntegerValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.IntegerValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.IntegerValue.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
};

/**
 * optional uint64 value = 1;
 * @return {number}
 */
proto.tari.rpc.IntegerValue.prototype.getValue = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.IntegerValue} returns this
 */
proto.tari.rpc.IntegerValue.prototype.setValue = function (value) {
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
  proto.tari.rpc.StringValue.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.StringValue.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.StringValue} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.StringValue.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        value: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.tari.rpc.StringValue}
 */
proto.tari.rpc.StringValue.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.StringValue();
  return proto.tari.rpc.StringValue.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.StringValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.StringValue}
 */
proto.tari.rpc.StringValue.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setValue(value);
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
proto.tari.rpc.StringValue.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.StringValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.StringValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.StringValue.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string value = 1;
 * @return {string}
 */
proto.tari.rpc.StringValue.prototype.getValue = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.StringValue} returns this
 */
proto.tari.rpc.StringValue.prototype.setValue = function (value) {
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
  proto.tari.rpc.BlockGroupRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.BlockGroupRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.BlockGroupRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.BlockGroupRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        fromTip: jspb.Message.getFieldWithDefault(msg, 1, 0),
        startHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
        endHeight: jspb.Message.getFieldWithDefault(msg, 3, 0),
        calcType: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.tari.rpc.BlockGroupRequest}
 */
proto.tari.rpc.BlockGroupRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.BlockGroupRequest();
  return proto.tari.rpc.BlockGroupRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.BlockGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.BlockGroupRequest}
 */
proto.tari.rpc.BlockGroupRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFromTip(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setStartHeight(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setEndHeight(value);
        break;
      case 4:
        var value = /** @type {!proto.tari.rpc.CalcType} */ (reader.readEnum());
        msg.setCalcType(value);
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
proto.tari.rpc.BlockGroupRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.BlockGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.BlockGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.BlockGroupRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getFromTip();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getStartHeight();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getEndHeight();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
  f = message.getCalcType();
  if (f !== 0.0) {
    writer.writeEnum(4, f);
  }
};

/**
 * optional uint64 from_tip = 1;
 * @return {number}
 */
proto.tari.rpc.BlockGroupRequest.prototype.getFromTip = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.BlockGroupRequest} returns this
 */
proto.tari.rpc.BlockGroupRequest.prototype.setFromTip = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional uint64 start_height = 2;
 * @return {number}
 */
proto.tari.rpc.BlockGroupRequest.prototype.getStartHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.BlockGroupRequest} returns this
 */
proto.tari.rpc.BlockGroupRequest.prototype.setStartHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional uint64 end_height = 3;
 * @return {number}
 */
proto.tari.rpc.BlockGroupRequest.prototype.getEndHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.BlockGroupRequest} returns this
 */
proto.tari.rpc.BlockGroupRequest.prototype.setEndHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional CalcType calc_type = 4;
 * @return {!proto.tari.rpc.CalcType}
 */
proto.tari.rpc.BlockGroupRequest.prototype.getCalcType = function () {
  return /** @type {!proto.tari.rpc.CalcType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {!proto.tari.rpc.CalcType} value
 * @return {!proto.tari.rpc.BlockGroupRequest} returns this
 */
proto.tari.rpc.BlockGroupRequest.prototype.setCalcType = function (value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.BlockGroupResponse.repeatedFields_ = [1];

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
  proto.tari.rpc.BlockGroupResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.BlockGroupResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.BlockGroupResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.BlockGroupResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        valueList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
        calcType: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.tari.rpc.BlockGroupResponse}
 */
proto.tari.rpc.BlockGroupResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.BlockGroupResponse();
  return proto.tari.rpc.BlockGroupResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.BlockGroupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.BlockGroupResponse}
 */
proto.tari.rpc.BlockGroupResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var values = /** @type {!Array<number>} */ (
          reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]
        );
        for (var i = 0; i < values.length; i++) {
          msg.addValue(values[i]);
        }
        break;
      case 2:
        var value = /** @type {!proto.tari.rpc.CalcType} */ (reader.readEnum());
        msg.setCalcType(value);
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
proto.tari.rpc.BlockGroupResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.BlockGroupResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.BlockGroupResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.BlockGroupResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writePackedDouble(1, f);
  }
  f = message.getCalcType();
  if (f !== 0.0) {
    writer.writeEnum(2, f);
  }
};

/**
 * repeated double value = 1;
 * @return {!Array<number>}
 */
proto.tari.rpc.BlockGroupResponse.prototype.getValueList = function () {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};

/**
 * @param {!Array<number>} value
 * @return {!proto.tari.rpc.BlockGroupResponse} returns this
 */
proto.tari.rpc.BlockGroupResponse.prototype.setValueList = function (value) {
  return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.BlockGroupResponse} returns this
 */
proto.tari.rpc.BlockGroupResponse.prototype.addValue = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.BlockGroupResponse} returns this
 */
proto.tari.rpc.BlockGroupResponse.prototype.clearValueList = function () {
  return this.setValueList([]);
};

/**
 * optional CalcType calc_type = 2;
 * @return {!proto.tari.rpc.CalcType}
 */
proto.tari.rpc.BlockGroupResponse.prototype.getCalcType = function () {
  return /** @type {!proto.tari.rpc.CalcType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {!proto.tari.rpc.CalcType} value
 * @return {!proto.tari.rpc.BlockGroupResponse} returns this
 */
proto.tari.rpc.BlockGroupResponse.prototype.setCalcType = function (value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
  proto.tari.rpc.HeightRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.HeightRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.HeightRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.HeightRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        fromTip: jspb.Message.getFieldWithDefault(msg, 1, 0),
        startHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
        endHeight: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.tari.rpc.HeightRequest}
 */
proto.tari.rpc.HeightRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.HeightRequest();
  return proto.tari.rpc.HeightRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.HeightRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.HeightRequest}
 */
proto.tari.rpc.HeightRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFromTip(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setStartHeight(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setEndHeight(value);
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
proto.tari.rpc.HeightRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.HeightRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.HeightRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.HeightRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getFromTip();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getStartHeight();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getEndHeight();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
};

/**
 * optional uint64 from_tip = 1;
 * @return {number}
 */
proto.tari.rpc.HeightRequest.prototype.getFromTip = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.HeightRequest} returns this
 */
proto.tari.rpc.HeightRequest.prototype.setFromTip = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional uint64 start_height = 2;
 * @return {number}
 */
proto.tari.rpc.HeightRequest.prototype.getStartHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.HeightRequest} returns this
 */
proto.tari.rpc.HeightRequest.prototype.setStartHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional uint64 end_height = 3;
 * @return {number}
 */
proto.tari.rpc.HeightRequest.prototype.getEndHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.HeightRequest} returns this
 */
proto.tari.rpc.HeightRequest.prototype.setEndHeight = function (value) {
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
  proto.tari.rpc.BlockTimingResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.BlockTimingResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.BlockTimingResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.BlockTimingResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        max: jspb.Message.getFieldWithDefault(msg, 1, 0),
        min: jspb.Message.getFieldWithDefault(msg, 2, 0),
        avg: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
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
 * @return {!proto.tari.rpc.BlockTimingResponse}
 */
proto.tari.rpc.BlockTimingResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.BlockTimingResponse();
  return proto.tari.rpc.BlockTimingResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.BlockTimingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.BlockTimingResponse}
 */
proto.tari.rpc.BlockTimingResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setMax(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setMin(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readDouble());
        msg.setAvg(value);
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
proto.tari.rpc.BlockTimingResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.BlockTimingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.BlockTimingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.BlockTimingResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMax();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getMin();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getAvg();
  if (f !== 0.0) {
    writer.writeDouble(3, f);
  }
};

/**
 * optional uint64 max = 1;
 * @return {number}
 */
proto.tari.rpc.BlockTimingResponse.prototype.getMax = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.BlockTimingResponse} returns this
 */
proto.tari.rpc.BlockTimingResponse.prototype.setMax = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional uint64 min = 2;
 * @return {number}
 */
proto.tari.rpc.BlockTimingResponse.prototype.getMin = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.BlockTimingResponse} returns this
 */
proto.tari.rpc.BlockTimingResponse.prototype.setMin = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional double avg = 3;
 * @return {number}
 */
proto.tari.rpc.BlockTimingResponse.prototype.getAvg = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.BlockTimingResponse} returns this
 */
proto.tari.rpc.BlockTimingResponse.prototype.setAvg = function (value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
  proto.tari.rpc.GetHeaderByHashRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetHeaderByHashRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetHeaderByHashRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetHeaderByHashRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        hash: msg.getHash_asB64(),
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
 * @return {!proto.tari.rpc.GetHeaderByHashRequest}
 */
proto.tari.rpc.GetHeaderByHashRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetHeaderByHashRequest();
  return proto.tari.rpc.GetHeaderByHashRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetHeaderByHashRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetHeaderByHashRequest}
 */
proto.tari.rpc.GetHeaderByHashRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setHash(value);
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
proto.tari.rpc.GetHeaderByHashRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetHeaderByHashRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetHeaderByHashRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetHeaderByHashRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
};

/**
 * optional bytes hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetHeaderByHashRequest.prototype.getHash = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes hash = 1;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.tari.rpc.GetHeaderByHashRequest.prototype.getHash_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getHash()));
};

/**
 * optional bytes hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetHeaderByHashRequest.prototype.getHash_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getHash()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetHeaderByHashRequest} returns this
 */
proto.tari.rpc.GetHeaderByHashRequest.prototype.setHash = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
  proto.tari.rpc.BlockHeaderResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.BlockHeaderResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.BlockHeaderResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.BlockHeaderResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && block_pb.BlockHeader.toObject(includeInstance, f),
        confirmations: jspb.Message.getFieldWithDefault(msg, 2, 0),
        reward: jspb.Message.getFieldWithDefault(msg, 3, 0),
        difficulty: jspb.Message.getFieldWithDefault(msg, 4, 0),
        numTransactions: jspb.Message.getFieldWithDefault(msg, 5, 0),
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
 * @return {!proto.tari.rpc.BlockHeaderResponse}
 */
proto.tari.rpc.BlockHeaderResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.BlockHeaderResponse();
  return proto.tari.rpc.BlockHeaderResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.BlockHeaderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.BlockHeaderResponse}
 */
proto.tari.rpc.BlockHeaderResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new block_pb.BlockHeader();
        reader.readMessage(value, block_pb.BlockHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setConfirmations(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setReward(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setDifficulty(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setNumTransactions(value);
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
proto.tari.rpc.BlockHeaderResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.BlockHeaderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.BlockHeaderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.BlockHeaderResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, block_pb.BlockHeader.serializeBinaryToWriter);
  }
  f = message.getConfirmations();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getReward();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
  f = message.getDifficulty();
  if (f !== 0) {
    writer.writeUint64(4, f);
  }
  f = message.getNumTransactions();
  if (f !== 0) {
    writer.writeUint32(5, f);
  }
};

/**
 * optional BlockHeader header = 1;
 * @return {?proto.tari.rpc.BlockHeader}
 */
proto.tari.rpc.BlockHeaderResponse.prototype.getHeader = function () {
  return /** @type{?proto.tari.rpc.BlockHeader} */ (jspb.Message.getWrapperField(this, block_pb.BlockHeader, 1));
};

/**
 * @param {?proto.tari.rpc.BlockHeader|undefined} value
 * @return {!proto.tari.rpc.BlockHeaderResponse} returns this
 */
proto.tari.rpc.BlockHeaderResponse.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.BlockHeaderResponse} returns this
 */
proto.tari.rpc.BlockHeaderResponse.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.BlockHeaderResponse.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional uint64 confirmations = 2;
 * @return {number}
 */
proto.tari.rpc.BlockHeaderResponse.prototype.getConfirmations = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.BlockHeaderResponse} returns this
 */
proto.tari.rpc.BlockHeaderResponse.prototype.setConfirmations = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional uint64 reward = 3;
 * @return {number}
 */
proto.tari.rpc.BlockHeaderResponse.prototype.getReward = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.BlockHeaderResponse} returns this
 */
proto.tari.rpc.BlockHeaderResponse.prototype.setReward = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional uint64 difficulty = 4;
 * @return {number}
 */
proto.tari.rpc.BlockHeaderResponse.prototype.getDifficulty = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.BlockHeaderResponse} returns this
 */
proto.tari.rpc.BlockHeaderResponse.prototype.setDifficulty = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional uint32 num_transactions = 5;
 * @return {number}
 */
proto.tari.rpc.BlockHeaderResponse.prototype.getNumTransactions = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.BlockHeaderResponse} returns this
 */
proto.tari.rpc.BlockHeaderResponse.prototype.setNumTransactions = function (value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
  proto.tari.rpc.ListHeadersRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.ListHeadersRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.ListHeadersRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.ListHeadersRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        fromHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
        numHeaders: jspb.Message.getFieldWithDefault(msg, 2, 0),
        sorting: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.tari.rpc.ListHeadersRequest}
 */
proto.tari.rpc.ListHeadersRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.ListHeadersRequest();
  return proto.tari.rpc.ListHeadersRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.ListHeadersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.ListHeadersRequest}
 */
proto.tari.rpc.ListHeadersRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFromHeight(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setNumHeaders(value);
        break;
      case 3:
        var value = /** @type {!proto.tari.rpc.Sorting} */ (reader.readEnum());
        msg.setSorting(value);
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
proto.tari.rpc.ListHeadersRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.ListHeadersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.ListHeadersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.ListHeadersRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getFromHeight();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getNumHeaders();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getSorting();
  if (f !== 0.0) {
    writer.writeEnum(3, f);
  }
};

/**
 * optional uint64 from_height = 1;
 * @return {number}
 */
proto.tari.rpc.ListHeadersRequest.prototype.getFromHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.ListHeadersRequest} returns this
 */
proto.tari.rpc.ListHeadersRequest.prototype.setFromHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional uint64 num_headers = 2;
 * @return {number}
 */
proto.tari.rpc.ListHeadersRequest.prototype.getNumHeaders = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.ListHeadersRequest} returns this
 */
proto.tari.rpc.ListHeadersRequest.prototype.setNumHeaders = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional Sorting sorting = 3;
 * @return {!proto.tari.rpc.Sorting}
 */
proto.tari.rpc.ListHeadersRequest.prototype.getSorting = function () {
  return /** @type {!proto.tari.rpc.Sorting} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {!proto.tari.rpc.Sorting} value
 * @return {!proto.tari.rpc.ListHeadersRequest} returns this
 */
proto.tari.rpc.ListHeadersRequest.prototype.setSorting = function (value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.GetBlocksRequest.repeatedFields_ = [1];

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
  proto.tari.rpc.GetBlocksRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetBlocksRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetBlocksRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetBlocksRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        heightsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
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
 * @return {!proto.tari.rpc.GetBlocksRequest}
 */
proto.tari.rpc.GetBlocksRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetBlocksRequest();
  return proto.tari.rpc.GetBlocksRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetBlocksRequest}
 */
proto.tari.rpc.GetBlocksRequest.deserializeBinaryFromReader = function (msg, reader) {
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
          msg.addHeights(values[i]);
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
proto.tari.rpc.GetBlocksRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetBlocksRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeightsList();
  if (f.length > 0) {
    writer.writePackedUint64(1, f);
  }
};

/**
 * repeated uint64 heights = 1;
 * @return {!Array<number>}
 */
proto.tari.rpc.GetBlocksRequest.prototype.getHeightsList = function () {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<number>} value
 * @return {!proto.tari.rpc.GetBlocksRequest} returns this
 */
proto.tari.rpc.GetBlocksRequest.prototype.setHeightsList = function (value) {
  return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.GetBlocksRequest} returns this
 */
proto.tari.rpc.GetBlocksRequest.prototype.addHeights = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.GetBlocksRequest} returns this
 */
proto.tari.rpc.GetBlocksRequest.prototype.clearHeightsList = function () {
  return this.setHeightsList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.GetBlocksResponse.repeatedFields_ = [1];

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
  proto.tari.rpc.GetBlocksResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetBlocksResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetBlocksResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetBlocksResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        blocksList: jspb.Message.toObjectList(msg.getBlocksList(), block_pb.HistoricalBlock.toObject, includeInstance),
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
 * @return {!proto.tari.rpc.GetBlocksResponse}
 */
proto.tari.rpc.GetBlocksResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetBlocksResponse();
  return proto.tari.rpc.GetBlocksResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetBlocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetBlocksResponse}
 */
proto.tari.rpc.GetBlocksResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new block_pb.HistoricalBlock();
        reader.readMessage(value, block_pb.HistoricalBlock.deserializeBinaryFromReader);
        msg.addBlocks(value);
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
proto.tari.rpc.GetBlocksResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetBlocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetBlocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetBlocksResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, block_pb.HistoricalBlock.serializeBinaryToWriter);
  }
};

/**
 * repeated HistoricalBlock blocks = 1;
 * @return {!Array<!proto.tari.rpc.HistoricalBlock>}
 */
proto.tari.rpc.GetBlocksResponse.prototype.getBlocksList = function () {
  return /** @type{!Array<!proto.tari.rpc.HistoricalBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, block_pb.HistoricalBlock, 1)
  );
};

/**
 * @param {!Array<!proto.tari.rpc.HistoricalBlock>} value
 * @return {!proto.tari.rpc.GetBlocksResponse} returns this
 */
proto.tari.rpc.GetBlocksResponse.prototype.setBlocksList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.tari.rpc.HistoricalBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.HistoricalBlock}
 */
proto.tari.rpc.GetBlocksResponse.prototype.addBlocks = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tari.rpc.HistoricalBlock, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.GetBlocksResponse} returns this
 */
proto.tari.rpc.GetBlocksResponse.prototype.clearBlocksList = function () {
  return this.setBlocksList([]);
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
  proto.tari.rpc.MetaData.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.MetaData.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.MetaData} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.MetaData.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        bestBlockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
        bestBlockHash: msg.getBestBlockHash_asB64(),
        accumulatedDifficulty: msg.getAccumulatedDifficulty_asB64(),
        prunedHeight: jspb.Message.getFieldWithDefault(msg, 6, 0),
        timestamp: jspb.Message.getFieldWithDefault(msg, 7, 0),
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
 * @return {!proto.tari.rpc.MetaData}
 */
proto.tari.rpc.MetaData.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.MetaData();
  return proto.tari.rpc.MetaData.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.MetaData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.MetaData}
 */
proto.tari.rpc.MetaData.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setBestBlockHeight(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setBestBlockHash(value);
        break;
      case 5:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setAccumulatedDifficulty(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setPrunedHeight(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTimestamp(value);
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
proto.tari.rpc.MetaData.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.MetaData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.MetaData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.MetaData.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getBestBlockHeight();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getBestBlockHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
  f = message.getAccumulatedDifficulty_asU8();
  if (f.length > 0) {
    writer.writeBytes(5, f);
  }
  f = message.getPrunedHeight();
  if (f !== 0) {
    writer.writeUint64(6, f);
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(7, f);
  }
};

/**
 * optional uint64 best_block_height = 1;
 * @return {number}
 */
proto.tari.rpc.MetaData.prototype.getBestBlockHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.MetaData} returns this
 */
proto.tari.rpc.MetaData.prototype.setBestBlockHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional bytes best_block_hash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.MetaData.prototype.getBestBlockHash = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * optional bytes best_block_hash = 2;
 * This is a type-conversion wrapper around `getBestBlockHash()`
 * @return {string}
 */
proto.tari.rpc.MetaData.prototype.getBestBlockHash_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getBestBlockHash()));
};

/**
 * optional bytes best_block_hash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBestBlockHash()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.MetaData.prototype.getBestBlockHash_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getBestBlockHash()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.MetaData} returns this
 */
proto.tari.rpc.MetaData.prototype.setBestBlockHash = function (value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};

/**
 * optional bytes accumulated_difficulty = 5;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.MetaData.prototype.getAccumulatedDifficulty = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};

/**
 * optional bytes accumulated_difficulty = 5;
 * This is a type-conversion wrapper around `getAccumulatedDifficulty()`
 * @return {string}
 */
proto.tari.rpc.MetaData.prototype.getAccumulatedDifficulty_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getAccumulatedDifficulty()));
};

/**
 * optional bytes accumulated_difficulty = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccumulatedDifficulty()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.MetaData.prototype.getAccumulatedDifficulty_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getAccumulatedDifficulty()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.MetaData} returns this
 */
proto.tari.rpc.MetaData.prototype.setAccumulatedDifficulty = function (value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};

/**
 * optional uint64 pruned_height = 6;
 * @return {number}
 */
proto.tari.rpc.MetaData.prototype.getPrunedHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.MetaData} returns this
 */
proto.tari.rpc.MetaData.prototype.setPrunedHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};

/**
 * optional uint64 timestamp = 7;
 * @return {number}
 */
proto.tari.rpc.MetaData.prototype.getTimestamp = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.MetaData} returns this
 */
proto.tari.rpc.MetaData.prototype.setTimestamp = function (value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.SyncInfoResponse.repeatedFields_ = [3];

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
  proto.tari.rpc.SyncInfoResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.SyncInfoResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.SyncInfoResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.SyncInfoResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        tipHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
        localHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
        peerNodeIdList: msg.getPeerNodeIdList_asB64(),
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
 * @return {!proto.tari.rpc.SyncInfoResponse}
 */
proto.tari.rpc.SyncInfoResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.SyncInfoResponse();
  return proto.tari.rpc.SyncInfoResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.SyncInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.SyncInfoResponse}
 */
proto.tari.rpc.SyncInfoResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTipHeight(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setLocalHeight(value);
        break;
      case 3:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.addPeerNodeId(value);
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
proto.tari.rpc.SyncInfoResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.SyncInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.SyncInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.SyncInfoResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTipHeight();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getLocalHeight();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getPeerNodeIdList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(3, f);
  }
};

/**
 * optional uint64 tip_height = 1;
 * @return {number}
 */
proto.tari.rpc.SyncInfoResponse.prototype.getTipHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.SyncInfoResponse} returns this
 */
proto.tari.rpc.SyncInfoResponse.prototype.setTipHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional uint64 local_height = 2;
 * @return {number}
 */
proto.tari.rpc.SyncInfoResponse.prototype.getLocalHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.SyncInfoResponse} returns this
 */
proto.tari.rpc.SyncInfoResponse.prototype.setLocalHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * repeated bytes peer_node_id = 3;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.tari.rpc.SyncInfoResponse.prototype.getPeerNodeIdList = function () {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 3));
};

/**
 * repeated bytes peer_node_id = 3;
 * This is a type-conversion wrapper around `getPeerNodeIdList()`
 * @return {!Array<string>}
 */
proto.tari.rpc.SyncInfoResponse.prototype.getPeerNodeIdList_asB64 = function () {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(this.getPeerNodeIdList()));
};

/**
 * repeated bytes peer_node_id = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPeerNodeIdList()`
 * @return {!Array<!Uint8Array>}
 */
proto.tari.rpc.SyncInfoResponse.prototype.getPeerNodeIdList_asU8 = function () {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(this.getPeerNodeIdList()));
};

/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.tari.rpc.SyncInfoResponse} returns this
 */
proto.tari.rpc.SyncInfoResponse.prototype.setPeerNodeIdList = function (value) {
  return jspb.Message.setField(this, 3, value || []);
};

/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.SyncInfoResponse} returns this
 */
proto.tari.rpc.SyncInfoResponse.prototype.addPeerNodeId = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.SyncInfoResponse} returns this
 */
proto.tari.rpc.SyncInfoResponse.prototype.clearPeerNodeIdList = function () {
  return this.setPeerNodeIdList([]);
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
  proto.tari.rpc.SyncProgressResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.SyncProgressResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.SyncProgressResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.SyncProgressResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        tipHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
        localHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
        state: jspb.Message.getFieldWithDefault(msg, 3, 0),
        shortDesc: jspb.Message.getFieldWithDefault(msg, 4, ""),
        initialConnectedPeers: jspb.Message.getFieldWithDefault(msg, 5, 0),
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
 * @return {!proto.tari.rpc.SyncProgressResponse}
 */
proto.tari.rpc.SyncProgressResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.SyncProgressResponse();
  return proto.tari.rpc.SyncProgressResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.SyncProgressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.SyncProgressResponse}
 */
proto.tari.rpc.SyncProgressResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTipHeight(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setLocalHeight(value);
        break;
      case 3:
        var value = /** @type {!proto.tari.rpc.SyncState} */ (reader.readEnum());
        msg.setState(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setShortDesc(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setInitialConnectedPeers(value);
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
proto.tari.rpc.SyncProgressResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.SyncProgressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.SyncProgressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.SyncProgressResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTipHeight();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getLocalHeight();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(3, f);
  }
  f = message.getShortDesc();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getInitialConnectedPeers();
  if (f !== 0) {
    writer.writeUint64(5, f);
  }
};

/**
 * optional uint64 tip_height = 1;
 * @return {number}
 */
proto.tari.rpc.SyncProgressResponse.prototype.getTipHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.SyncProgressResponse} returns this
 */
proto.tari.rpc.SyncProgressResponse.prototype.setTipHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional uint64 local_height = 2;
 * @return {number}
 */
proto.tari.rpc.SyncProgressResponse.prototype.getLocalHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.SyncProgressResponse} returns this
 */
proto.tari.rpc.SyncProgressResponse.prototype.setLocalHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional SyncState state = 3;
 * @return {!proto.tari.rpc.SyncState}
 */
proto.tari.rpc.SyncProgressResponse.prototype.getState = function () {
  return /** @type {!proto.tari.rpc.SyncState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {!proto.tari.rpc.SyncState} value
 * @return {!proto.tari.rpc.SyncProgressResponse} returns this
 */
proto.tari.rpc.SyncProgressResponse.prototype.setState = function (value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};

/**
 * optional string short_desc = 4;
 * @return {string}
 */
proto.tari.rpc.SyncProgressResponse.prototype.getShortDesc = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};

/**
 * @param {string} value
 * @return {!proto.tari.rpc.SyncProgressResponse} returns this
 */
proto.tari.rpc.SyncProgressResponse.prototype.setShortDesc = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional uint64 initial_connected_peers = 5;
 * @return {number}
 */
proto.tari.rpc.SyncProgressResponse.prototype.getInitialConnectedPeers = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.SyncProgressResponse} returns this
 */
proto.tari.rpc.SyncProgressResponse.prototype.setInitialConnectedPeers = function (value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
  proto.tari.rpc.GetNewBlockResult.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetNewBlockResult.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetNewBlockResult} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetNewBlockResult.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        blockHash: msg.getBlockHash_asB64(),
        block: (f = msg.getBlock()) && block_pb.Block.toObject(includeInstance, f),
        mergeMiningHash: msg.getMergeMiningHash_asB64(),
        tariUniqueId: msg.getTariUniqueId_asB64(),
        minerData: (f = msg.getMinerData()) && proto.tari.rpc.MinerData.toObject(includeInstance, f),
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
 * @return {!proto.tari.rpc.GetNewBlockResult}
 */
proto.tari.rpc.GetNewBlockResult.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetNewBlockResult();
  return proto.tari.rpc.GetNewBlockResult.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetNewBlockResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetNewBlockResult}
 */
proto.tari.rpc.GetNewBlockResult.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setBlockHash(value);
        break;
      case 2:
        var value = new block_pb.Block();
        reader.readMessage(value, block_pb.Block.deserializeBinaryFromReader);
        msg.setBlock(value);
        break;
      case 3:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMergeMiningHash(value);
        break;
      case 4:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setTariUniqueId(value);
        break;
      case 5:
        var value = new proto.tari.rpc.MinerData();
        reader.readMessage(value, proto.tari.rpc.MinerData.deserializeBinaryFromReader);
        msg.setMinerData(value);
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
proto.tari.rpc.GetNewBlockResult.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetNewBlockResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetNewBlockResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetNewBlockResult.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getBlockHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(2, f, block_pb.Block.serializeBinaryToWriter);
  }
  f = message.getMergeMiningHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(3, f);
  }
  f = message.getTariUniqueId_asU8();
  if (f.length > 0) {
    writer.writeBytes(4, f);
  }
  f = message.getMinerData();
  if (f != null) {
    writer.writeMessage(5, f, proto.tari.rpc.MinerData.serializeBinaryToWriter);
  }
};

/**
 * optional bytes block_hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetNewBlockResult.prototype.getBlockHash = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes block_hash = 1;
 * This is a type-conversion wrapper around `getBlockHash()`
 * @return {string}
 */
proto.tari.rpc.GetNewBlockResult.prototype.getBlockHash_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getBlockHash()));
};

/**
 * optional bytes block_hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockHash()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetNewBlockResult.prototype.getBlockHash_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getBlockHash()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetNewBlockResult} returns this
 */
proto.tari.rpc.GetNewBlockResult.prototype.setBlockHash = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional Block block = 2;
 * @return {?proto.tari.rpc.Block}
 */
proto.tari.rpc.GetNewBlockResult.prototype.getBlock = function () {
  return /** @type{?proto.tari.rpc.Block} */ (jspb.Message.getWrapperField(this, block_pb.Block, 2));
};

/**
 * @param {?proto.tari.rpc.Block|undefined} value
 * @return {!proto.tari.rpc.GetNewBlockResult} returns this
 */
proto.tari.rpc.GetNewBlockResult.prototype.setBlock = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.GetNewBlockResult} returns this
 */
proto.tari.rpc.GetNewBlockResult.prototype.clearBlock = function () {
  return this.setBlock(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.GetNewBlockResult.prototype.hasBlock = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional bytes merge_mining_hash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetNewBlockResult.prototype.getMergeMiningHash = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * optional bytes merge_mining_hash = 3;
 * This is a type-conversion wrapper around `getMergeMiningHash()`
 * @return {string}
 */
proto.tari.rpc.GetNewBlockResult.prototype.getMergeMiningHash_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMergeMiningHash()));
};

/**
 * optional bytes merge_mining_hash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMergeMiningHash()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetNewBlockResult.prototype.getMergeMiningHash_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getMergeMiningHash()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetNewBlockResult} returns this
 */
proto.tari.rpc.GetNewBlockResult.prototype.setMergeMiningHash = function (value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};

/**
 * optional bytes tari_unique_id = 4;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetNewBlockResult.prototype.getTariUniqueId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};

/**
 * optional bytes tari_unique_id = 4;
 * This is a type-conversion wrapper around `getTariUniqueId()`
 * @return {string}
 */
proto.tari.rpc.GetNewBlockResult.prototype.getTariUniqueId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getTariUniqueId()));
};

/**
 * optional bytes tari_unique_id = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTariUniqueId()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetNewBlockResult.prototype.getTariUniqueId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getTariUniqueId()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetNewBlockResult} returns this
 */
proto.tari.rpc.GetNewBlockResult.prototype.setTariUniqueId = function (value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};

/**
 * optional MinerData miner_data = 5;
 * @return {?proto.tari.rpc.MinerData}
 */
proto.tari.rpc.GetNewBlockResult.prototype.getMinerData = function () {
  return /** @type{?proto.tari.rpc.MinerData} */ (jspb.Message.getWrapperField(this, proto.tari.rpc.MinerData, 5));
};

/**
 * @param {?proto.tari.rpc.MinerData|undefined} value
 * @return {!proto.tari.rpc.GetNewBlockResult} returns this
 */
proto.tari.rpc.GetNewBlockResult.prototype.setMinerData = function (value) {
  return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.GetNewBlockResult} returns this
 */
proto.tari.rpc.GetNewBlockResult.prototype.clearMinerData = function () {
  return this.setMinerData(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.GetNewBlockResult.prototype.hasMinerData = function () {
  return jspb.Message.getField(this, 5) != null;
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
  proto.tari.rpc.GetNewBlockBlobResult.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetNewBlockBlobResult.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetNewBlockBlobResult} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetNewBlockBlobResult.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        blockHash: msg.getBlockHash_asB64(),
        header: msg.getHeader_asB64(),
        blockBody: msg.getBlockBody_asB64(),
        mergeMiningHash: msg.getMergeMiningHash_asB64(),
        utxoMr: msg.getUtxoMr_asB64(),
        tariUniqueId: msg.getTariUniqueId_asB64(),
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
 * @return {!proto.tari.rpc.GetNewBlockBlobResult}
 */
proto.tari.rpc.GetNewBlockBlobResult.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetNewBlockBlobResult();
  return proto.tari.rpc.GetNewBlockBlobResult.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetNewBlockBlobResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetNewBlockBlobResult}
 */
proto.tari.rpc.GetNewBlockBlobResult.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setBlockHash(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setHeader(value);
        break;
      case 3:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setBlockBody(value);
        break;
      case 4:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMergeMiningHash(value);
        break;
      case 5:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setUtxoMr(value);
        break;
      case 6:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setTariUniqueId(value);
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
proto.tari.rpc.GetNewBlockBlobResult.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetNewBlockBlobResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetNewBlockBlobResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetNewBlockBlobResult.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getBlockHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getHeader_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
  f = message.getBlockBody_asU8();
  if (f.length > 0) {
    writer.writeBytes(3, f);
  }
  f = message.getMergeMiningHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(4, f);
  }
  f = message.getUtxoMr_asU8();
  if (f.length > 0) {
    writer.writeBytes(5, f);
  }
  f = message.getTariUniqueId_asU8();
  if (f.length > 0) {
    writer.writeBytes(6, f);
  }
};

/**
 * optional bytes block_hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getBlockHash = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes block_hash = 1;
 * This is a type-conversion wrapper around `getBlockHash()`
 * @return {string}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getBlockHash_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getBlockHash()));
};

/**
 * optional bytes block_hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockHash()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getBlockHash_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getBlockHash()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetNewBlockBlobResult} returns this
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.setBlockHash = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional bytes header = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getHeader = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * optional bytes header = 2;
 * This is a type-conversion wrapper around `getHeader()`
 * @return {string}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getHeader_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getHeader()));
};

/**
 * optional bytes header = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHeader()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getHeader_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getHeader()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetNewBlockBlobResult} returns this
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.setHeader = function (value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};

/**
 * optional bytes block_body = 3;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getBlockBody = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * optional bytes block_body = 3;
 * This is a type-conversion wrapper around `getBlockBody()`
 * @return {string}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getBlockBody_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getBlockBody()));
};

/**
 * optional bytes block_body = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockBody()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getBlockBody_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getBlockBody()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetNewBlockBlobResult} returns this
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.setBlockBody = function (value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};

/**
 * optional bytes merge_mining_hash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getMergeMiningHash = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};

/**
 * optional bytes merge_mining_hash = 4;
 * This is a type-conversion wrapper around `getMergeMiningHash()`
 * @return {string}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getMergeMiningHash_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMergeMiningHash()));
};

/**
 * optional bytes merge_mining_hash = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMergeMiningHash()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getMergeMiningHash_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getMergeMiningHash()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetNewBlockBlobResult} returns this
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.setMergeMiningHash = function (value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};

/**
 * optional bytes utxo_mr = 5;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getUtxoMr = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};

/**
 * optional bytes utxo_mr = 5;
 * This is a type-conversion wrapper around `getUtxoMr()`
 * @return {string}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getUtxoMr_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getUtxoMr()));
};

/**
 * optional bytes utxo_mr = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUtxoMr()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getUtxoMr_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getUtxoMr()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetNewBlockBlobResult} returns this
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.setUtxoMr = function (value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};

/**
 * optional bytes tari_unique_id = 6;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getTariUniqueId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};

/**
 * optional bytes tari_unique_id = 6;
 * This is a type-conversion wrapper around `getTariUniqueId()`
 * @return {string}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getTariUniqueId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getTariUniqueId()));
};

/**
 * optional bytes tari_unique_id = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTariUniqueId()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.getTariUniqueId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getTariUniqueId()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetNewBlockBlobResult} returns this
 */
proto.tari.rpc.GetNewBlockBlobResult.prototype.setTariUniqueId = function (value) {
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
  proto.tari.rpc.MinerData.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.MinerData.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.MinerData} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.MinerData.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        algo: (f = msg.getAlgo()) && block_pb.PowAlgo.toObject(includeInstance, f),
        targetDifficulty: jspb.Message.getFieldWithDefault(msg, 2, 0),
        reward: jspb.Message.getFieldWithDefault(msg, 3, 0),
        totalFees: jspb.Message.getFieldWithDefault(msg, 5, 0),
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
 * @return {!proto.tari.rpc.MinerData}
 */
proto.tari.rpc.MinerData.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.MinerData();
  return proto.tari.rpc.MinerData.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.MinerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.MinerData}
 */
proto.tari.rpc.MinerData.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new block_pb.PowAlgo();
        reader.readMessage(value, block_pb.PowAlgo.deserializeBinaryFromReader);
        msg.setAlgo(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTargetDifficulty(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setReward(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTotalFees(value);
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
proto.tari.rpc.MinerData.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.MinerData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.MinerData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.MinerData.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAlgo();
  if (f != null) {
    writer.writeMessage(1, f, block_pb.PowAlgo.serializeBinaryToWriter);
  }
  f = message.getTargetDifficulty();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getReward();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
  f = message.getTotalFees();
  if (f !== 0) {
    writer.writeUint64(5, f);
  }
};

/**
 * optional PowAlgo algo = 1;
 * @return {?proto.tari.rpc.PowAlgo}
 */
proto.tari.rpc.MinerData.prototype.getAlgo = function () {
  return /** @type{?proto.tari.rpc.PowAlgo} */ (jspb.Message.getWrapperField(this, block_pb.PowAlgo, 1));
};

/**
 * @param {?proto.tari.rpc.PowAlgo|undefined} value
 * @return {!proto.tari.rpc.MinerData} returns this
 */
proto.tari.rpc.MinerData.prototype.setAlgo = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.MinerData} returns this
 */
proto.tari.rpc.MinerData.prototype.clearAlgo = function () {
  return this.setAlgo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.MinerData.prototype.hasAlgo = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional uint64 target_difficulty = 2;
 * @return {number}
 */
proto.tari.rpc.MinerData.prototype.getTargetDifficulty = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.MinerData} returns this
 */
proto.tari.rpc.MinerData.prototype.setTargetDifficulty = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional uint64 reward = 3;
 * @return {number}
 */
proto.tari.rpc.MinerData.prototype.getReward = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.MinerData} returns this
 */
proto.tari.rpc.MinerData.prototype.setReward = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional uint64 total_fees = 5;
 * @return {number}
 */
proto.tari.rpc.MinerData.prototype.getTotalFees = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.MinerData} returns this
 */
proto.tari.rpc.MinerData.prototype.setTotalFees = function (value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.SearchKernelsRequest.repeatedFields_ = [1];

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
  proto.tari.rpc.SearchKernelsRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.SearchKernelsRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.SearchKernelsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.SearchKernelsRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        signaturesList: jspb.Message.toObjectList(
          msg.getSignaturesList(),
          types_pb.Signature.toObject,
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
 * @return {!proto.tari.rpc.SearchKernelsRequest}
 */
proto.tari.rpc.SearchKernelsRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.SearchKernelsRequest();
  return proto.tari.rpc.SearchKernelsRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.SearchKernelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.SearchKernelsRequest}
 */
proto.tari.rpc.SearchKernelsRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new types_pb.Signature();
        reader.readMessage(value, types_pb.Signature.deserializeBinaryFromReader);
        msg.addSignatures(value);
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
proto.tari.rpc.SearchKernelsRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.SearchKernelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.SearchKernelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.SearchKernelsRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, types_pb.Signature.serializeBinaryToWriter);
  }
};

/**
 * repeated Signature signatures = 1;
 * @return {!Array<!proto.tari.rpc.Signature>}
 */
proto.tari.rpc.SearchKernelsRequest.prototype.getSignaturesList = function () {
  return /** @type{!Array<!proto.tari.rpc.Signature>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_pb.Signature, 1)
  );
};

/**
 * @param {!Array<!proto.tari.rpc.Signature>} value
 * @return {!proto.tari.rpc.SearchKernelsRequest} returns this
 */
proto.tari.rpc.SearchKernelsRequest.prototype.setSignaturesList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.tari.rpc.Signature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.Signature}
 */
proto.tari.rpc.SearchKernelsRequest.prototype.addSignatures = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tari.rpc.Signature, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.SearchKernelsRequest} returns this
 */
proto.tari.rpc.SearchKernelsRequest.prototype.clearSignaturesList = function () {
  return this.setSignaturesList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.SearchUtxosRequest.repeatedFields_ = [1];

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
  proto.tari.rpc.SearchUtxosRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.SearchUtxosRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.SearchUtxosRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.SearchUtxosRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        commitmentsList: msg.getCommitmentsList_asB64(),
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
 * @return {!proto.tari.rpc.SearchUtxosRequest}
 */
proto.tari.rpc.SearchUtxosRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.SearchUtxosRequest();
  return proto.tari.rpc.SearchUtxosRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.SearchUtxosRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.SearchUtxosRequest}
 */
proto.tari.rpc.SearchUtxosRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.addCommitments(value);
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
proto.tari.rpc.SearchUtxosRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.SearchUtxosRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.SearchUtxosRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.SearchUtxosRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCommitmentsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(1, f);
  }
};

/**
 * repeated bytes commitments = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.tari.rpc.SearchUtxosRequest.prototype.getCommitmentsList = function () {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * repeated bytes commitments = 1;
 * This is a type-conversion wrapper around `getCommitmentsList()`
 * @return {!Array<string>}
 */
proto.tari.rpc.SearchUtxosRequest.prototype.getCommitmentsList_asB64 = function () {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(this.getCommitmentsList()));
};

/**
 * repeated bytes commitments = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCommitmentsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.tari.rpc.SearchUtxosRequest.prototype.getCommitmentsList_asU8 = function () {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(this.getCommitmentsList()));
};

/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.tari.rpc.SearchUtxosRequest} returns this
 */
proto.tari.rpc.SearchUtxosRequest.prototype.setCommitmentsList = function (value) {
  return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.SearchUtxosRequest} returns this
 */
proto.tari.rpc.SearchUtxosRequest.prototype.addCommitments = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.SearchUtxosRequest} returns this
 */
proto.tari.rpc.SearchUtxosRequest.prototype.clearCommitmentsList = function () {
  return this.setCommitmentsList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.FetchMatchingUtxosRequest.repeatedFields_ = [1];

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
  proto.tari.rpc.FetchMatchingUtxosRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.FetchMatchingUtxosRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.FetchMatchingUtxosRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.FetchMatchingUtxosRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        hashesList: msg.getHashesList_asB64(),
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
 * @return {!proto.tari.rpc.FetchMatchingUtxosRequest}
 */
proto.tari.rpc.FetchMatchingUtxosRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.FetchMatchingUtxosRequest();
  return proto.tari.rpc.FetchMatchingUtxosRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.FetchMatchingUtxosRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.FetchMatchingUtxosRequest}
 */
proto.tari.rpc.FetchMatchingUtxosRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.addHashes(value);
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
proto.tari.rpc.FetchMatchingUtxosRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.FetchMatchingUtxosRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.FetchMatchingUtxosRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.FetchMatchingUtxosRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHashesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(1, f);
  }
};

/**
 * repeated bytes hashes = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.tari.rpc.FetchMatchingUtxosRequest.prototype.getHashesList = function () {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * repeated bytes hashes = 1;
 * This is a type-conversion wrapper around `getHashesList()`
 * @return {!Array<string>}
 */
proto.tari.rpc.FetchMatchingUtxosRequest.prototype.getHashesList_asB64 = function () {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(this.getHashesList()));
};

/**
 * repeated bytes hashes = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHashesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.tari.rpc.FetchMatchingUtxosRequest.prototype.getHashesList_asU8 = function () {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(this.getHashesList()));
};

/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.tari.rpc.FetchMatchingUtxosRequest} returns this
 */
proto.tari.rpc.FetchMatchingUtxosRequest.prototype.setHashesList = function (value) {
  return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.FetchMatchingUtxosRequest} returns this
 */
proto.tari.rpc.FetchMatchingUtxosRequest.prototype.addHashes = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.FetchMatchingUtxosRequest} returns this
 */
proto.tari.rpc.FetchMatchingUtxosRequest.prototype.clearHashesList = function () {
  return this.setHashesList([]);
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
  proto.tari.rpc.FetchMatchingUtxosResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.FetchMatchingUtxosResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.FetchMatchingUtxosResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.FetchMatchingUtxosResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        output: (f = msg.getOutput()) && transaction_pb.TransactionOutput.toObject(includeInstance, f),
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
 * @return {!proto.tari.rpc.FetchMatchingUtxosResponse}
 */
proto.tari.rpc.FetchMatchingUtxosResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.FetchMatchingUtxosResponse();
  return proto.tari.rpc.FetchMatchingUtxosResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.FetchMatchingUtxosResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.FetchMatchingUtxosResponse}
 */
proto.tari.rpc.FetchMatchingUtxosResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new transaction_pb.TransactionOutput();
        reader.readMessage(value, transaction_pb.TransactionOutput.deserializeBinaryFromReader);
        msg.setOutput(value);
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
proto.tari.rpc.FetchMatchingUtxosResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.FetchMatchingUtxosResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.FetchMatchingUtxosResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.FetchMatchingUtxosResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(1, f, transaction_pb.TransactionOutput.serializeBinaryToWriter);
  }
};

/**
 * optional TransactionOutput output = 1;
 * @return {?proto.tari.rpc.TransactionOutput}
 */
proto.tari.rpc.FetchMatchingUtxosResponse.prototype.getOutput = function () {
  return /** @type{?proto.tari.rpc.TransactionOutput} */ (
    jspb.Message.getWrapperField(this, transaction_pb.TransactionOutput, 1)
  );
};

/**
 * @param {?proto.tari.rpc.TransactionOutput|undefined} value
 * @return {!proto.tari.rpc.FetchMatchingUtxosResponse} returns this
 */
proto.tari.rpc.FetchMatchingUtxosResponse.prototype.setOutput = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.FetchMatchingUtxosResponse} returns this
 */
proto.tari.rpc.FetchMatchingUtxosResponse.prototype.clearOutput = function () {
  return this.setOutput(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.FetchMatchingUtxosResponse.prototype.hasOutput = function () {
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
  proto.tari.rpc.GetPeersResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetPeersResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetPeersResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetPeersResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        peer: (f = msg.getPeer()) && network_pb.Peer.toObject(includeInstance, f),
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
 * @return {!proto.tari.rpc.GetPeersResponse}
 */
proto.tari.rpc.GetPeersResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetPeersResponse();
  return proto.tari.rpc.GetPeersResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetPeersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetPeersResponse}
 */
proto.tari.rpc.GetPeersResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new network_pb.Peer();
        reader.readMessage(value, network_pb.Peer.deserializeBinaryFromReader);
        msg.setPeer(value);
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
proto.tari.rpc.GetPeersResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetPeersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetPeersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetPeersResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(1, f, network_pb.Peer.serializeBinaryToWriter);
  }
};

/**
 * optional Peer peer = 1;
 * @return {?proto.tari.rpc.Peer}
 */
proto.tari.rpc.GetPeersResponse.prototype.getPeer = function () {
  return /** @type{?proto.tari.rpc.Peer} */ (jspb.Message.getWrapperField(this, network_pb.Peer, 1));
};

/**
 * @param {?proto.tari.rpc.Peer|undefined} value
 * @return {!proto.tari.rpc.GetPeersResponse} returns this
 */
proto.tari.rpc.GetPeersResponse.prototype.setPeer = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.GetPeersResponse} returns this
 */
proto.tari.rpc.GetPeersResponse.prototype.clearPeer = function () {
  return this.setPeer(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.GetPeersResponse.prototype.hasPeer = function () {
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
  proto.tari.rpc.GetPeersRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetPeersRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetPeersRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetPeersRequest.toObject = function (includeInstance, msg) {
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
 * @return {!proto.tari.rpc.GetPeersRequest}
 */
proto.tari.rpc.GetPeersRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetPeersRequest();
  return proto.tari.rpc.GetPeersRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetPeersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetPeersRequest}
 */
proto.tari.rpc.GetPeersRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.tari.rpc.GetPeersRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetPeersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetPeersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetPeersRequest.serializeBinaryToWriter = function (message, writer) {
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
  proto.tari.rpc.SubmitTransactionRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.SubmitTransactionRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.SubmitTransactionRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.SubmitTransactionRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        transaction: (f = msg.getTransaction()) && transaction_pb.Transaction.toObject(includeInstance, f),
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
 * @return {!proto.tari.rpc.SubmitTransactionRequest}
 */
proto.tari.rpc.SubmitTransactionRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.SubmitTransactionRequest();
  return proto.tari.rpc.SubmitTransactionRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.SubmitTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.SubmitTransactionRequest}
 */
proto.tari.rpc.SubmitTransactionRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new transaction_pb.Transaction();
        reader.readMessage(value, transaction_pb.Transaction.deserializeBinaryFromReader);
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
proto.tari.rpc.SubmitTransactionRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.SubmitTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.SubmitTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.SubmitTransactionRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(1, f, transaction_pb.Transaction.serializeBinaryToWriter);
  }
};

/**
 * optional Transaction transaction = 1;
 * @return {?proto.tari.rpc.Transaction}
 */
proto.tari.rpc.SubmitTransactionRequest.prototype.getTransaction = function () {
  return /** @type{?proto.tari.rpc.Transaction} */ (jspb.Message.getWrapperField(this, transaction_pb.Transaction, 1));
};

/**
 * @param {?proto.tari.rpc.Transaction|undefined} value
 * @return {!proto.tari.rpc.SubmitTransactionRequest} returns this
 */
proto.tari.rpc.SubmitTransactionRequest.prototype.setTransaction = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.SubmitTransactionRequest} returns this
 */
proto.tari.rpc.SubmitTransactionRequest.prototype.clearTransaction = function () {
  return this.setTransaction(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.SubmitTransactionRequest.prototype.hasTransaction = function () {
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
  proto.tari.rpc.SubmitTransactionResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.SubmitTransactionResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.SubmitTransactionResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.SubmitTransactionResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        result: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.tari.rpc.SubmitTransactionResponse}
 */
proto.tari.rpc.SubmitTransactionResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.SubmitTransactionResponse();
  return proto.tari.rpc.SubmitTransactionResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.SubmitTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.SubmitTransactionResponse}
 */
proto.tari.rpc.SubmitTransactionResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.tari.rpc.SubmitTransactionResult} */ (reader.readEnum());
        msg.setResult(value);
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
proto.tari.rpc.SubmitTransactionResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.SubmitTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.SubmitTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.SubmitTransactionResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
};

/**
 * optional SubmitTransactionResult result = 1;
 * @return {!proto.tari.rpc.SubmitTransactionResult}
 */
proto.tari.rpc.SubmitTransactionResponse.prototype.getResult = function () {
  return /** @type {!proto.tari.rpc.SubmitTransactionResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.tari.rpc.SubmitTransactionResult} value
 * @return {!proto.tari.rpc.SubmitTransactionResponse} returns this
 */
proto.tari.rpc.SubmitTransactionResponse.prototype.setResult = function (value) {
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
  proto.tari.rpc.GetMempoolTransactionsRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetMempoolTransactionsRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetMempoolTransactionsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetMempoolTransactionsRequest.toObject = function (includeInstance, msg) {
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
 * @return {!proto.tari.rpc.GetMempoolTransactionsRequest}
 */
proto.tari.rpc.GetMempoolTransactionsRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetMempoolTransactionsRequest();
  return proto.tari.rpc.GetMempoolTransactionsRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetMempoolTransactionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetMempoolTransactionsRequest}
 */
proto.tari.rpc.GetMempoolTransactionsRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.tari.rpc.GetMempoolTransactionsRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetMempoolTransactionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetMempoolTransactionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetMempoolTransactionsRequest.serializeBinaryToWriter = function (message, writer) {
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
  proto.tari.rpc.GetMempoolTransactionsResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetMempoolTransactionsResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetMempoolTransactionsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetMempoolTransactionsResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        transaction: (f = msg.getTransaction()) && transaction_pb.Transaction.toObject(includeInstance, f),
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
 * @return {!proto.tari.rpc.GetMempoolTransactionsResponse}
 */
proto.tari.rpc.GetMempoolTransactionsResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetMempoolTransactionsResponse();
  return proto.tari.rpc.GetMempoolTransactionsResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetMempoolTransactionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetMempoolTransactionsResponse}
 */
proto.tari.rpc.GetMempoolTransactionsResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new transaction_pb.Transaction();
        reader.readMessage(value, transaction_pb.Transaction.deserializeBinaryFromReader);
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
proto.tari.rpc.GetMempoolTransactionsResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetMempoolTransactionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetMempoolTransactionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetMempoolTransactionsResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(1, f, transaction_pb.Transaction.serializeBinaryToWriter);
  }
};

/**
 * optional Transaction transaction = 1;
 * @return {?proto.tari.rpc.Transaction}
 */
proto.tari.rpc.GetMempoolTransactionsResponse.prototype.getTransaction = function () {
  return /** @type{?proto.tari.rpc.Transaction} */ (jspb.Message.getWrapperField(this, transaction_pb.Transaction, 1));
};

/**
 * @param {?proto.tari.rpc.Transaction|undefined} value
 * @return {!proto.tari.rpc.GetMempoolTransactionsResponse} returns this
 */
proto.tari.rpc.GetMempoolTransactionsResponse.prototype.setTransaction = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.GetMempoolTransactionsResponse} returns this
 */
proto.tari.rpc.GetMempoolTransactionsResponse.prototype.clearTransaction = function () {
  return this.setTransaction(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.GetMempoolTransactionsResponse.prototype.hasTransaction = function () {
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
  proto.tari.rpc.TransactionStateRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.TransactionStateRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.TransactionStateRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.TransactionStateRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        excessSig: (f = msg.getExcessSig()) && types_pb.Signature.toObject(includeInstance, f),
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
 * @return {!proto.tari.rpc.TransactionStateRequest}
 */
proto.tari.rpc.TransactionStateRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.TransactionStateRequest();
  return proto.tari.rpc.TransactionStateRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.TransactionStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.TransactionStateRequest}
 */
proto.tari.rpc.TransactionStateRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new types_pb.Signature();
        reader.readMessage(value, types_pb.Signature.deserializeBinaryFromReader);
        msg.setExcessSig(value);
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
proto.tari.rpc.TransactionStateRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.TransactionStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.TransactionStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.TransactionStateRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getExcessSig();
  if (f != null) {
    writer.writeMessage(1, f, types_pb.Signature.serializeBinaryToWriter);
  }
};

/**
 * optional Signature excess_sig = 1;
 * @return {?proto.tari.rpc.Signature}
 */
proto.tari.rpc.TransactionStateRequest.prototype.getExcessSig = function () {
  return /** @type{?proto.tari.rpc.Signature} */ (jspb.Message.getWrapperField(this, types_pb.Signature, 1));
};

/**
 * @param {?proto.tari.rpc.Signature|undefined} value
 * @return {!proto.tari.rpc.TransactionStateRequest} returns this
 */
proto.tari.rpc.TransactionStateRequest.prototype.setExcessSig = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.TransactionStateRequest} returns this
 */
proto.tari.rpc.TransactionStateRequest.prototype.clearExcessSig = function () {
  return this.setExcessSig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.TransactionStateRequest.prototype.hasExcessSig = function () {
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
  proto.tari.rpc.TransactionStateResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.TransactionStateResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.TransactionStateResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.TransactionStateResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        result: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.tari.rpc.TransactionStateResponse}
 */
proto.tari.rpc.TransactionStateResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.TransactionStateResponse();
  return proto.tari.rpc.TransactionStateResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.TransactionStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.TransactionStateResponse}
 */
proto.tari.rpc.TransactionStateResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.tari.rpc.TransactionLocation} */ (reader.readEnum());
        msg.setResult(value);
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
proto.tari.rpc.TransactionStateResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.TransactionStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.TransactionStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.TransactionStateResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
};

/**
 * optional TransactionLocation result = 1;
 * @return {!proto.tari.rpc.TransactionLocation}
 */
proto.tari.rpc.TransactionStateResponse.prototype.getResult = function () {
  return /** @type {!proto.tari.rpc.TransactionLocation} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {!proto.tari.rpc.TransactionLocation} value
 * @return {!proto.tari.rpc.TransactionStateResponse} returns this
 */
proto.tari.rpc.TransactionStateResponse.prototype.setResult = function (value) {
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
  proto.tari.rpc.MempoolStatsResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.MempoolStatsResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.MempoolStatsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.MempoolStatsResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        unconfirmedTxs: jspb.Message.getFieldWithDefault(msg, 2, 0),
        reorgTxs: jspb.Message.getFieldWithDefault(msg, 3, 0),
        unconfirmedWeight: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.tari.rpc.MempoolStatsResponse}
 */
proto.tari.rpc.MempoolStatsResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.MempoolStatsResponse();
  return proto.tari.rpc.MempoolStatsResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.MempoolStatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.MempoolStatsResponse}
 */
proto.tari.rpc.MempoolStatsResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setUnconfirmedTxs(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setReorgTxs(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setUnconfirmedWeight(value);
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
proto.tari.rpc.MempoolStatsResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.MempoolStatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.MempoolStatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.MempoolStatsResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getUnconfirmedTxs();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getReorgTxs();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
  f = message.getUnconfirmedWeight();
  if (f !== 0) {
    writer.writeUint64(4, f);
  }
};

/**
 * optional uint64 unconfirmed_txs = 2;
 * @return {number}
 */
proto.tari.rpc.MempoolStatsResponse.prototype.getUnconfirmedTxs = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.MempoolStatsResponse} returns this
 */
proto.tari.rpc.MempoolStatsResponse.prototype.setUnconfirmedTxs = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional uint64 reorg_txs = 3;
 * @return {number}
 */
proto.tari.rpc.MempoolStatsResponse.prototype.getReorgTxs = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.MempoolStatsResponse} returns this
 */
proto.tari.rpc.MempoolStatsResponse.prototype.setReorgTxs = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional uint64 unconfirmed_weight = 4;
 * @return {number}
 */
proto.tari.rpc.MempoolStatsResponse.prototype.getUnconfirmedWeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.MempoolStatsResponse} returns this
 */
proto.tari.rpc.MempoolStatsResponse.prototype.setUnconfirmedWeight = function (value) {
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
  proto.tari.rpc.GetActiveValidatorNodesRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetActiveValidatorNodesRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetActiveValidatorNodesRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetActiveValidatorNodesRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        height: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.tari.rpc.GetActiveValidatorNodesRequest}
 */
proto.tari.rpc.GetActiveValidatorNodesRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetActiveValidatorNodesRequest();
  return proto.tari.rpc.GetActiveValidatorNodesRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetActiveValidatorNodesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetActiveValidatorNodesRequest}
 */
proto.tari.rpc.GetActiveValidatorNodesRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setHeight(value);
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
proto.tari.rpc.GetActiveValidatorNodesRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetActiveValidatorNodesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetActiveValidatorNodesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetActiveValidatorNodesRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
};

/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.tari.rpc.GetActiveValidatorNodesRequest.prototype.getHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetActiveValidatorNodesRequest} returns this
 */
proto.tari.rpc.GetActiveValidatorNodesRequest.prototype.setHeight = function (value) {
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
  proto.tari.rpc.GetActiveValidatorNodesResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetActiveValidatorNodesResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetActiveValidatorNodesResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetActiveValidatorNodesResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        shardKey: msg.getShardKey_asB64(),
        publicKey: msg.getPublicKey_asB64(),
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
 * @return {!proto.tari.rpc.GetActiveValidatorNodesResponse}
 */
proto.tari.rpc.GetActiveValidatorNodesResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetActiveValidatorNodesResponse();
  return proto.tari.rpc.GetActiveValidatorNodesResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetActiveValidatorNodesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetActiveValidatorNodesResponse}
 */
proto.tari.rpc.GetActiveValidatorNodesResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setShardKey(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setPublicKey(value);
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
proto.tari.rpc.GetActiveValidatorNodesResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetActiveValidatorNodesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetActiveValidatorNodesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetActiveValidatorNodesResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getShardKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
};

/**
 * optional bytes shard_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetActiveValidatorNodesResponse.prototype.getShardKey = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes shard_key = 1;
 * This is a type-conversion wrapper around `getShardKey()`
 * @return {string}
 */
proto.tari.rpc.GetActiveValidatorNodesResponse.prototype.getShardKey_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getShardKey()));
};

/**
 * optional bytes shard_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getShardKey()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetActiveValidatorNodesResponse.prototype.getShardKey_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getShardKey()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetActiveValidatorNodesResponse} returns this
 */
proto.tari.rpc.GetActiveValidatorNodesResponse.prototype.setShardKey = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional bytes public_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetActiveValidatorNodesResponse.prototype.getPublicKey = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * optional bytes public_key = 2;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.tari.rpc.GetActiveValidatorNodesResponse.prototype.getPublicKey_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getPublicKey()));
};

/**
 * optional bytes public_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetActiveValidatorNodesResponse.prototype.getPublicKey_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getPublicKey()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetActiveValidatorNodesResponse} returns this
 */
proto.tari.rpc.GetActiveValidatorNodesResponse.prototype.setPublicKey = function (value) {
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
  proto.tari.rpc.GetShardKeyRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetShardKeyRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetShardKeyRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetShardKeyRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        height: jspb.Message.getFieldWithDefault(msg, 1, 0),
        publicKey: msg.getPublicKey_asB64(),
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
 * @return {!proto.tari.rpc.GetShardKeyRequest}
 */
proto.tari.rpc.GetShardKeyRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetShardKeyRequest();
  return proto.tari.rpc.GetShardKeyRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetShardKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetShardKeyRequest}
 */
proto.tari.rpc.GetShardKeyRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setHeight(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setPublicKey(value);
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
proto.tari.rpc.GetShardKeyRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetShardKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetShardKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetShardKeyRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
};

/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.tari.rpc.GetShardKeyRequest.prototype.getHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetShardKeyRequest} returns this
 */
proto.tari.rpc.GetShardKeyRequest.prototype.setHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional bytes public_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetShardKeyRequest.prototype.getPublicKey = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * optional bytes public_key = 2;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.tari.rpc.GetShardKeyRequest.prototype.getPublicKey_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getPublicKey()));
};

/**
 * optional bytes public_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetShardKeyRequest.prototype.getPublicKey_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getPublicKey()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetShardKeyRequest} returns this
 */
proto.tari.rpc.GetShardKeyRequest.prototype.setPublicKey = function (value) {
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
  proto.tari.rpc.GetShardKeyResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetShardKeyResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetShardKeyResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetShardKeyResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        shardKey: msg.getShardKey_asB64(),
        found: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
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
 * @return {!proto.tari.rpc.GetShardKeyResponse}
 */
proto.tari.rpc.GetShardKeyResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetShardKeyResponse();
  return proto.tari.rpc.GetShardKeyResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetShardKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetShardKeyResponse}
 */
proto.tari.rpc.GetShardKeyResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setShardKey(value);
        break;
      case 2:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setFound(value);
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
proto.tari.rpc.GetShardKeyResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetShardKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetShardKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetShardKeyResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getShardKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getFound();
  if (f) {
    writer.writeBool(2, f);
  }
};

/**
 * optional bytes shard_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetShardKeyResponse.prototype.getShardKey = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes shard_key = 1;
 * This is a type-conversion wrapper around `getShardKey()`
 * @return {string}
 */
proto.tari.rpc.GetShardKeyResponse.prototype.getShardKey_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getShardKey()));
};

/**
 * optional bytes shard_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getShardKey()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetShardKeyResponse.prototype.getShardKey_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getShardKey()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetShardKeyResponse} returns this
 */
proto.tari.rpc.GetShardKeyResponse.prototype.setShardKey = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional bool found = 2;
 * @return {boolean}
 */
proto.tari.rpc.GetShardKeyResponse.prototype.getFound = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};

/**
 * @param {boolean} value
 * @return {!proto.tari.rpc.GetShardKeyResponse} returns this
 */
proto.tari.rpc.GetShardKeyResponse.prototype.setFound = function (value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
  proto.tari.rpc.GetTemplateRegistrationsRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetTemplateRegistrationsRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetTemplateRegistrationsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetTemplateRegistrationsRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        startHash: msg.getStartHash_asB64(),
        count: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.tari.rpc.GetTemplateRegistrationsRequest}
 */
proto.tari.rpc.GetTemplateRegistrationsRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetTemplateRegistrationsRequest();
  return proto.tari.rpc.GetTemplateRegistrationsRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetTemplateRegistrationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetTemplateRegistrationsRequest}
 */
proto.tari.rpc.GetTemplateRegistrationsRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setStartHash(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setCount(value);
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
proto.tari.rpc.GetTemplateRegistrationsRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetTemplateRegistrationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetTemplateRegistrationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetTemplateRegistrationsRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getStartHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
};

/**
 * optional bytes start_hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetTemplateRegistrationsRequest.prototype.getStartHash = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes start_hash = 1;
 * This is a type-conversion wrapper around `getStartHash()`
 * @return {string}
 */
proto.tari.rpc.GetTemplateRegistrationsRequest.prototype.getStartHash_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getStartHash()));
};

/**
 * optional bytes start_hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStartHash()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetTemplateRegistrationsRequest.prototype.getStartHash_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getStartHash()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetTemplateRegistrationsRequest} returns this
 */
proto.tari.rpc.GetTemplateRegistrationsRequest.prototype.setStartHash = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional uint64 count = 2;
 * @return {number}
 */
proto.tari.rpc.GetTemplateRegistrationsRequest.prototype.getCount = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetTemplateRegistrationsRequest} returns this
 */
proto.tari.rpc.GetTemplateRegistrationsRequest.prototype.setCount = function (value) {
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
  proto.tari.rpc.GetTemplateRegistrationResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetTemplateRegistrationResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetTemplateRegistrationResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetTemplateRegistrationResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        utxoHash: msg.getUtxoHash_asB64(),
        registration:
          (f = msg.getRegistration()) && sidechain_types_pb.TemplateRegistration.toObject(includeInstance, f),
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
 * @return {!proto.tari.rpc.GetTemplateRegistrationResponse}
 */
proto.tari.rpc.GetTemplateRegistrationResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetTemplateRegistrationResponse();
  return proto.tari.rpc.GetTemplateRegistrationResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetTemplateRegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetTemplateRegistrationResponse}
 */
proto.tari.rpc.GetTemplateRegistrationResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setUtxoHash(value);
        break;
      case 2:
        var value = new sidechain_types_pb.TemplateRegistration();
        reader.readMessage(value, sidechain_types_pb.TemplateRegistration.deserializeBinaryFromReader);
        msg.setRegistration(value);
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
proto.tari.rpc.GetTemplateRegistrationResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetTemplateRegistrationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetTemplateRegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetTemplateRegistrationResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getUtxoHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getRegistration();
  if (f != null) {
    writer.writeMessage(2, f, sidechain_types_pb.TemplateRegistration.serializeBinaryToWriter);
  }
};

/**
 * optional bytes utxo_hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetTemplateRegistrationResponse.prototype.getUtxoHash = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes utxo_hash = 1;
 * This is a type-conversion wrapper around `getUtxoHash()`
 * @return {string}
 */
proto.tari.rpc.GetTemplateRegistrationResponse.prototype.getUtxoHash_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getUtxoHash()));
};

/**
 * optional bytes utxo_hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUtxoHash()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetTemplateRegistrationResponse.prototype.getUtxoHash_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getUtxoHash()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetTemplateRegistrationResponse} returns this
 */
proto.tari.rpc.GetTemplateRegistrationResponse.prototype.setUtxoHash = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional TemplateRegistration registration = 2;
 * @return {?proto.tari.rpc.TemplateRegistration}
 */
proto.tari.rpc.GetTemplateRegistrationResponse.prototype.getRegistration = function () {
  return /** @type{?proto.tari.rpc.TemplateRegistration} */ (
    jspb.Message.getWrapperField(this, sidechain_types_pb.TemplateRegistration, 2)
  );
};

/**
 * @param {?proto.tari.rpc.TemplateRegistration|undefined} value
 * @return {!proto.tari.rpc.GetTemplateRegistrationResponse} returns this
 */
proto.tari.rpc.GetTemplateRegistrationResponse.prototype.setRegistration = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.GetTemplateRegistrationResponse} returns this
 */
proto.tari.rpc.GetTemplateRegistrationResponse.prototype.clearRegistration = function () {
  return this.setRegistration(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.GetTemplateRegistrationResponse.prototype.hasRegistration = function () {
  return jspb.Message.getField(this, 2) != null;
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
  proto.tari.rpc.BlockInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.BlockInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.BlockInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.BlockInfo.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        height: jspb.Message.getFieldWithDefault(msg, 1, 0),
        hash: msg.getHash_asB64(),
        nextBlockHash: msg.getNextBlockHash_asB64(),
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
 * @return {!proto.tari.rpc.BlockInfo}
 */
proto.tari.rpc.BlockInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.BlockInfo();
  return proto.tari.rpc.BlockInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.BlockInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.BlockInfo}
 */
proto.tari.rpc.BlockInfo.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setHeight(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setHash(value);
        break;
      case 3:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setNextBlockHash(value);
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
proto.tari.rpc.BlockInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.BlockInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.BlockInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.BlockInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
  f = message.getNextBlockHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(3, f);
  }
};

/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.tari.rpc.BlockInfo.prototype.getHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.BlockInfo} returns this
 */
proto.tari.rpc.BlockInfo.prototype.setHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional bytes hash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.BlockInfo.prototype.getHash = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * optional bytes hash = 2;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.tari.rpc.BlockInfo.prototype.getHash_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getHash()));
};

/**
 * optional bytes hash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.BlockInfo.prototype.getHash_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getHash()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.BlockInfo} returns this
 */
proto.tari.rpc.BlockInfo.prototype.setHash = function (value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};

/**
 * optional bytes next_block_hash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.BlockInfo.prototype.getNextBlockHash = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * optional bytes next_block_hash = 3;
 * This is a type-conversion wrapper around `getNextBlockHash()`
 * @return {string}
 */
proto.tari.rpc.BlockInfo.prototype.getNextBlockHash_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getNextBlockHash()));
};

/**
 * optional bytes next_block_hash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextBlockHash()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.BlockInfo.prototype.getNextBlockHash_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getNextBlockHash()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.BlockInfo} returns this
 */
proto.tari.rpc.BlockInfo.prototype.setNextBlockHash = function (value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
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
  proto.tari.rpc.GetSideChainUtxosRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetSideChainUtxosRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetSideChainUtxosRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetSideChainUtxosRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        startHash: msg.getStartHash_asB64(),
        count: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.tari.rpc.GetSideChainUtxosRequest}
 */
proto.tari.rpc.GetSideChainUtxosRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetSideChainUtxosRequest();
  return proto.tari.rpc.GetSideChainUtxosRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetSideChainUtxosRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetSideChainUtxosRequest}
 */
proto.tari.rpc.GetSideChainUtxosRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setStartHash(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setCount(value);
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
proto.tari.rpc.GetSideChainUtxosRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetSideChainUtxosRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetSideChainUtxosRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetSideChainUtxosRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getStartHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
};

/**
 * optional bytes start_hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tari.rpc.GetSideChainUtxosRequest.prototype.getStartHash = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * optional bytes start_hash = 1;
 * This is a type-conversion wrapper around `getStartHash()`
 * @return {string}
 */
proto.tari.rpc.GetSideChainUtxosRequest.prototype.getStartHash_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getStartHash()));
};

/**
 * optional bytes start_hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStartHash()`
 * @return {!Uint8Array}
 */
proto.tari.rpc.GetSideChainUtxosRequest.prototype.getStartHash_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getStartHash()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tari.rpc.GetSideChainUtxosRequest} returns this
 */
proto.tari.rpc.GetSideChainUtxosRequest.prototype.setStartHash = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional uint64 count = 2;
 * @return {number}
 */
proto.tari.rpc.GetSideChainUtxosRequest.prototype.getCount = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetSideChainUtxosRequest} returns this
 */
proto.tari.rpc.GetSideChainUtxosRequest.prototype.setCount = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tari.rpc.GetSideChainUtxosResponse.repeatedFields_ = [2];

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
  proto.tari.rpc.GetSideChainUtxosResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetSideChainUtxosResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetSideChainUtxosResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetSideChainUtxosResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        blockInfo: (f = msg.getBlockInfo()) && proto.tari.rpc.BlockInfo.toObject(includeInstance, f),
        outputsList: jspb.Message.toObjectList(
          msg.getOutputsList(),
          transaction_pb.TransactionOutput.toObject,
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
 * @return {!proto.tari.rpc.GetSideChainUtxosResponse}
 */
proto.tari.rpc.GetSideChainUtxosResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetSideChainUtxosResponse();
  return proto.tari.rpc.GetSideChainUtxosResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetSideChainUtxosResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetSideChainUtxosResponse}
 */
proto.tari.rpc.GetSideChainUtxosResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.tari.rpc.BlockInfo();
        reader.readMessage(value, proto.tari.rpc.BlockInfo.deserializeBinaryFromReader);
        msg.setBlockInfo(value);
        break;
      case 2:
        var value = new transaction_pb.TransactionOutput();
        reader.readMessage(value, transaction_pb.TransactionOutput.deserializeBinaryFromReader);
        msg.addOutputs(value);
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
proto.tari.rpc.GetSideChainUtxosResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetSideChainUtxosResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetSideChainUtxosResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetSideChainUtxosResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getBlockInfo();
  if (f != null) {
    writer.writeMessage(1, f, proto.tari.rpc.BlockInfo.serializeBinaryToWriter);
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, transaction_pb.TransactionOutput.serializeBinaryToWriter);
  }
};

/**
 * optional BlockInfo block_info = 1;
 * @return {?proto.tari.rpc.BlockInfo}
 */
proto.tari.rpc.GetSideChainUtxosResponse.prototype.getBlockInfo = function () {
  return /** @type{?proto.tari.rpc.BlockInfo} */ (jspb.Message.getWrapperField(this, proto.tari.rpc.BlockInfo, 1));
};

/**
 * @param {?proto.tari.rpc.BlockInfo|undefined} value
 * @return {!proto.tari.rpc.GetSideChainUtxosResponse} returns this
 */
proto.tari.rpc.GetSideChainUtxosResponse.prototype.setBlockInfo = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.GetSideChainUtxosResponse} returns this
 */
proto.tari.rpc.GetSideChainUtxosResponse.prototype.clearBlockInfo = function () {
  return this.setBlockInfo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.GetSideChainUtxosResponse.prototype.hasBlockInfo = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated TransactionOutput outputs = 2;
 * @return {!Array<!proto.tari.rpc.TransactionOutput>}
 */
proto.tari.rpc.GetSideChainUtxosResponse.prototype.getOutputsList = function () {
  return /** @type{!Array<!proto.tari.rpc.TransactionOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, transaction_pb.TransactionOutput, 2)
  );
};

/**
 * @param {!Array<!proto.tari.rpc.TransactionOutput>} value
 * @return {!proto.tari.rpc.GetSideChainUtxosResponse} returns this
 */
proto.tari.rpc.GetSideChainUtxosResponse.prototype.setOutputsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.tari.rpc.TransactionOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tari.rpc.TransactionOutput}
 */
proto.tari.rpc.GetSideChainUtxosResponse.prototype.addOutputs = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tari.rpc.TransactionOutput, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tari.rpc.GetSideChainUtxosResponse} returns this
 */
proto.tari.rpc.GetSideChainUtxosResponse.prototype.clearOutputsList = function () {
  return this.setOutputsList([]);
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
  proto.tari.rpc.GetNetworkStateRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetNetworkStateRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetNetworkStateRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetNetworkStateRequest.toObject = function (includeInstance, msg) {
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
 * @return {!proto.tari.rpc.GetNetworkStateRequest}
 */
proto.tari.rpc.GetNetworkStateRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetNetworkStateRequest();
  return proto.tari.rpc.GetNetworkStateRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetNetworkStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetNetworkStateRequest}
 */
proto.tari.rpc.GetNetworkStateRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.tari.rpc.GetNetworkStateRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetNetworkStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetNetworkStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetNetworkStateRequest.serializeBinaryToWriter = function (message, writer) {
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
  proto.tari.rpc.GetNetworkStateResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.tari.rpc.GetNetworkStateResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tari.rpc.GetNetworkStateResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tari.rpc.GetNetworkStateResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        metadata: (f = msg.getMetadata()) && proto.tari.rpc.MetaData.toObject(includeInstance, f),
        initialSyncAchieved: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
        baseNodeState: jspb.Message.getFieldWithDefault(msg, 3, 0),
        failedCheckpoints: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
        reward: jspb.Message.getFieldWithDefault(msg, 5, 0),
        sha3xEstimatedHashRate: jspb.Message.getFieldWithDefault(msg, 6, 0),
        randomxEstimatedHashRate: jspb.Message.getFieldWithDefault(msg, 7, 0),
        numConnections: jspb.Message.getFieldWithDefault(msg, 8, 0),
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
 * @return {!proto.tari.rpc.GetNetworkStateResponse}
 */
proto.tari.rpc.GetNetworkStateResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tari.rpc.GetNetworkStateResponse();
  return proto.tari.rpc.GetNetworkStateResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tari.rpc.GetNetworkStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tari.rpc.GetNetworkStateResponse}
 */
proto.tari.rpc.GetNetworkStateResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.tari.rpc.MetaData();
        reader.readMessage(value, proto.tari.rpc.MetaData.deserializeBinaryFromReader);
        msg.setMetadata(value);
        break;
      case 2:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setInitialSyncAchieved(value);
        break;
      case 3:
        var value = /** @type {!proto.tari.rpc.BaseNodeState} */ (reader.readEnum());
        msg.setBaseNodeState(value);
        break;
      case 4:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setFailedCheckpoints(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setReward(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setSha3xEstimatedHashRate(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setRandomxEstimatedHashRate(value);
        break;
      case 8:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setNumConnections(value);
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
proto.tari.rpc.GetNetworkStateResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tari.rpc.GetNetworkStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tari.rpc.GetNetworkStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tari.rpc.GetNetworkStateResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(1, f, proto.tari.rpc.MetaData.serializeBinaryToWriter);
  }
  f = message.getInitialSyncAchieved();
  if (f) {
    writer.writeBool(2, f);
  }
  f = message.getBaseNodeState();
  if (f !== 0.0) {
    writer.writeEnum(3, f);
  }
  f = message.getFailedCheckpoints();
  if (f) {
    writer.writeBool(4, f);
  }
  f = message.getReward();
  if (f !== 0) {
    writer.writeUint64(5, f);
  }
  f = message.getSha3xEstimatedHashRate();
  if (f !== 0) {
    writer.writeUint64(6, f);
  }
  f = message.getRandomxEstimatedHashRate();
  if (f !== 0) {
    writer.writeUint64(7, f);
  }
  f = message.getNumConnections();
  if (f !== 0) {
    writer.writeUint64(8, f);
  }
};

/**
 * optional MetaData metadata = 1;
 * @return {?proto.tari.rpc.MetaData}
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.getMetadata = function () {
  return /** @type{?proto.tari.rpc.MetaData} */ (jspb.Message.getWrapperField(this, proto.tari.rpc.MetaData, 1));
};

/**
 * @param {?proto.tari.rpc.MetaData|undefined} value
 * @return {!proto.tari.rpc.GetNetworkStateResponse} returns this
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.setMetadata = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tari.rpc.GetNetworkStateResponse} returns this
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.clearMetadata = function () {
  return this.setMetadata(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.hasMetadata = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional bool initial_sync_achieved = 2;
 * @return {boolean}
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.getInitialSyncAchieved = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};

/**
 * @param {boolean} value
 * @return {!proto.tari.rpc.GetNetworkStateResponse} returns this
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.setInitialSyncAchieved = function (value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};

/**
 * optional BaseNodeState base_node_state = 3;
 * @return {!proto.tari.rpc.BaseNodeState}
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.getBaseNodeState = function () {
  return /** @type {!proto.tari.rpc.BaseNodeState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {!proto.tari.rpc.BaseNodeState} value
 * @return {!proto.tari.rpc.GetNetworkStateResponse} returns this
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.setBaseNodeState = function (value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};

/**
 * optional bool failed_checkpoints = 4;
 * @return {boolean}
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.getFailedCheckpoints = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};

/**
 * @param {boolean} value
 * @return {!proto.tari.rpc.GetNetworkStateResponse} returns this
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.setFailedCheckpoints = function (value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};

/**
 * optional uint64 reward = 5;
 * @return {number}
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.getReward = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetNetworkStateResponse} returns this
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.setReward = function (value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};

/**
 * optional uint64 sha3x_estimated_hash_rate = 6;
 * @return {number}
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.getSha3xEstimatedHashRate = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetNetworkStateResponse} returns this
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.setSha3xEstimatedHashRate = function (value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};

/**
 * optional uint64 randomx_estimated_hash_rate = 7;
 * @return {number}
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.getRandomxEstimatedHashRate = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetNetworkStateResponse} returns this
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.setRandomxEstimatedHashRate = function (value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};

/**
 * optional uint64 num_connections = 8;
 * @return {number}
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.getNumConnections = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};

/**
 * @param {number} value
 * @return {!proto.tari.rpc.GetNetworkStateResponse} returns this
 */
proto.tari.rpc.GetNetworkStateResponse.prototype.setNumConnections = function (value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};

/**
 * @enum {number}
 */
proto.tari.rpc.BaseNodeState = {
  START_UP: 0,
  HEADER_SYNC: 1,
  HORIZON_SYNC: 2,
  CONNECTING: 3,
  BLOCK_SYNC: 4,
  LISTENING: 5,
  SYNC_FAILED: 6,
};

/**
 * @enum {number}
 */
proto.tari.rpc.CalcType = {
  MEAN: 0,
  MEDIAN: 1,
  QUANTILE: 2,
  QUARTILE: 3,
};

/**
 * @enum {number}
 */
proto.tari.rpc.Sorting = {
  SORTING_DESC: 0,
  SORTING_ASC: 1,
};

/**
 * @enum {number}
 */
proto.tari.rpc.SyncState = {
  STARTUP: 0,
  HEADER_STARTING: 1,
  HEADER: 2,
  BLOCK_STARTING: 3,
  BLOCK: 4,
  DONE: 5,
};

/**
 * @enum {number}
 */
proto.tari.rpc.SubmitTransactionResult = {
  NONE: 0,
  ACCEPTED: 1,
  NOT_PROCESSABLE_AT_THIS_TIME: 2,
  ALREADY_MINED: 3,
  REJECTED: 4,
};

/**
 * @enum {number}
 */
proto.tari.rpc.TransactionLocation = {
  UNKNOWN: 0,
  MEMPOOL: 1,
  MINED: 2,
  NOT_STORED: 3,
};

goog.object.extend(exports, proto.tari.rpc);
