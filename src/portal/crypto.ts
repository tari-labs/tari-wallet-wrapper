/**
 * @file Crypto utilities for the Portal network
 */

import { sha256 as sha256Hash } from '@noble/hashes/sha256'
import { bytesToHex, randomBytes } from '@noble/hashes/utils'

/**
 * Computes the SHA-256 hash of the given data, prefixed with '0x'
 * @param {string | string[]} data The data to hash
 * @returns {string} The SHA-256 hash
 */
export function sha256(data: string | string[] | Buffer): string {
  data = Array.isArray(data) ? data.join('') : data
  return `0x${bytesToHex(sha256Hash(data))}`
}

/**
 * Generates a random secret of the given length
 * @param {number} length The length of the secret
 * @returns {Buffer} The random secret
 */
export function randomSecret(length: number): Buffer {
  return Buffer.from(randomBytes(length))
}
