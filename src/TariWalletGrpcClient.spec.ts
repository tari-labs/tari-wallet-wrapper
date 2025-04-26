import { setTimeout } from "timers/promises";

import { describe, it, expect, vi, beforeEach } from "vitest";
import { TariWalletGrpcWebClient } from "./TariWalletGrpcWebClient";
import { TransactionEventResponse } from "./grpc-web-client/wallet_pb";

describe("TariWalletGrpcWebClient", () => {
  let client: TariWalletGrpcWebClient;

  beforeEach(() => {
    vi.clearAllMocks();
    client = new TariWalletGrpcWebClient("http://localhost:28183");
  });

  describe("getVersion", () => {
    it("should return wallet version", async () => {
      const result = await client.getVersion();
      expect(result.version).toMatch(/^\d+/);
    });
  });

  describe("getAddress", () => {
    it("should return the wallet address", async () => {
      const result = await client.getAddress();

      expect(Object.keys(result)).toEqual(
        expect.arrayContaining([
          "interactiveAddress",
          "interactiveAddressBase58",
          "interactiveAddressEmoji",
          "oneSidedAddress",
          "oneSidedAddressBase58",
          "oneSidedAddressEmoji",
        ]),
      );
    });
  });

  describe("getBalance", () => {
    it("should return wallet balance", async () => {
      const result = await client.getBalance();

      expect(result.availableBalance).toBeDefined();
      expect(result.pendingIncomingBalance).toBeDefined();
      expect(result.pendingOutgoingBalance).toBeDefined();
      expect(result.timelockedBalance).toBeDefined();
    });
  });

  describe("streamTransactionEvents", () => {
    it(
      "should stream transaction events",
      async () => {
        const onData = (data: TransactionEventResponse.AsObject) => {
          console.log("Received data:", data);
        };
        const onError = vi.fn();
        const streamPromise = client.streamTransactionEvents(onData, onError);

        await setTimeout(60 * 1000); // Wait for 60 seconds to receive events
        const stream = await streamPromise;
        stream.cancel();

        expect(onError).not.toHaveBeenCalled();
      },
      {
        timeout: 60 * 2 * 1000, // 2 minutes
      },
    );
  });
});
