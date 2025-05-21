// Base58 alphabet used by Tari
const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

export function base58EncodeAddressHex(inputHex: string): string {
    const network = base58Encode(Buffer.from(inputHex.slice(0, 2), "hex"));
    const features = base58Encode(Buffer.from(inputHex.slice(2, 4), "hex"));
    const payload = base58Encode(Buffer.from(inputHex.slice(4), "hex"));
    return `${network}${features}${payload}`;
}

/**
 * Encodes a buffer to Base58 string
 * 
 * @param input - The input buffer to encode
 * @returns The Base58 encoded string
 */
export function base58Encode(input: Uint8Array): string {
  if (input.length === 0) {
    return '';
  }

  // Convert input to BigInt
  let num = BigInt(0);
  for (let i = 0; i < input.length; i++) {
    num = num * BigInt(256) + BigInt(input[i]);
  }

  // Convert to Base58
  let result = '';
  while (num > 0) {
    const mod = Number(num % BigInt(58));
    result = ALPHABET[mod] + result;
    num = num / BigInt(58);
  }

  // Handle leading zeros
  for (let i = 0; i < input.length && input[i] === 0; i++) {
    result = '1' + result;
  }

  return result;
}
