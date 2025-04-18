/**
 * @file Defines an asset in the Portal network
 */

import { sha256 } from './crypto.ts'

/**
 * Represents the properties of an asset instance
 * @type {AssetProps}
 */
export type AssetProps = {
  id: string
  name: string
  chain: string
  symbol: string
  contractAddress: string
  decimals: number
}

/**
 * Represents an asset in the Portal network
 * @type {Asset}
 */
export class Asset {
  readonly id: string
  readonly name: string
  readonly chain: string
  readonly symbol: string
  readonly contractAddress: string
  readonly decimals: number

  /**
   * Creates a new asset
   * @param {object} props The properties of the asset
   * @param {string} props.id The unique identifier of the asset
   * @param {string} props.name The human-readable name of the asset
   * @param {string} props.chain The name of the native chain of the asset
   * @param {string} props.symbol Ticker symbol of the asset
   * @param {string} props.contractAddress The address of the asset on the native chain
   * @param {string} props.decimals The number of decimal places the asset supports
   */
  constructor(props: AssetProps) {
    // create a unique id for the asset based on the chain and symbol
    const id = sha256([props.chain, props.symbol, props.contractAddress])
    if (props.id != null && props.id !== id) {
      throw new Error(`Invalid asset! Expected ${id}; got ${props.id}!`)
    }

    this.id = id
    this.name = props.name
    this.chain = props.chain
    this.symbol = props.symbol
    this.contractAddress = props.contractAddress
    this.decimals = props.decimals
  }

  /**
   * Returns the address of the asset
   *
   * This alias is required since `address` is a reserved word in solidity.
   *
   * @type {string}
   */
  get nativeAddress() {
    return this.contractAddress
  }

  /**
   * Returns this liquidity instance for debugging
   * @returns {object} A string representation of this liquidity instance
   */
  [Symbol.for('nodejs.util.inspect.custom')]() {
    return {
      id: this.id,
      name: this.name,
      chain: this.chain,
      symbol: this.symbol,
      contractAddress: this.contractAddress,
      decimals: this.decimals,
    }
  }
}
