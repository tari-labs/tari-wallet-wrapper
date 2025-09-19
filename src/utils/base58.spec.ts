import { describe, it, expect } from "vitest";
import { base58EncodeAddressHex } from "./base58";

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

  it("should correctly encode a Buffer to base58", () => {
    const bufferBytesRaw = [
      0x00, 0x01, 0x42, 0xc0, 0x59, 0x1a, 0x6a, 0xe6, 0xcc, 0xdf, 0x94, 0xab, 0x54, 0x0a, 0xb7, 0xc9, 0xdc, 0x59, 0xe1,
      0xa0, 0xe0, 0x00, 0xa7, 0x6c, 0xfa, 0x1e, 0x52, 0xf2, 0x70, 0x15, 0x86, 0x75, 0xed, 0x27, 0x64, 0x3a, 0x38, 0xb8,
      0xda, 0xcd, 0x04, 0xc2, 0x04, 0xef, 0x20, 0x93, 0x73, 0x4d, 0xcd, 0x6b, 0xbe, 0x76, 0x30, 0xd9, 0xc0, 0x0b, 0x92,
      0xc6, 0x94, 0x6b, 0x1d, 0x7e, 0x6b, 0x0b, 0xc0, 0x4d, 0xe1,
    ];
    const buffer = Buffer.from(bufferBytesRaw);
    const expected = "126tekL2aN4rFAkZo4rSE2NvdoNKfS2jqLRG8GCnMR7s1Fwg1iqxoSDPdSGw8aW8uBqY1TrUD5Q6rb9MhAHhx2H6eec";
    const result = base58EncodeAddressHex(buffer.toString("hex"));

    expect(result).toBe(expected);
  });
});
