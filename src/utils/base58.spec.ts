import { describe, it, expect } from "vitest";
import {  base58EncodeAddressHex } from "./base58";

describe("base58Encode", () => {
 
  it("should correctly encode a mainnet string to base58", () => {
    const hex =
      "000142c0591a6ae6ccdf94ab540ab7c9dc59e1a0e000a76cfa1e52f270158675ed27643a38b8dacd04c204ef2093734dcd6bbe7630d9c00b92c6946b1d7e6b0bc04de1";

    const expected = "126tekL2aN4rFAkZo4rSE2NvdoNKfS2jqLRG8GCnMR7s1Fwg1iqxoSDPdSGw8aW8uBqY1TrUD5Q6rb9MhAHhx2H6eec";
    const result = base58EncodeAddressHex(hex);

    expect(result).toBe(expected);
  });

  it("should correctly encode a testnet string to base58", () => {
    const hex =
      "2601a690c493b5f30b5af6cd2584147b1e38295d330a26975c050649a29f3728704e9e943c424809f5787857c61ba5451e33a58f5137350cb2ec566a47a81c677248bd";

    const expected = "f2FhXUsX4EiafVtZD1Ku8faodYxpmX7t4uPvwFFpywkFTkCRDiDADJ641o9483BzoVAy2QjcZAaKa63dR8zZYTBT1qn";
    const result = base58EncodeAddressHex(hex);

    expect(result).toBe(expected);
  });


});
