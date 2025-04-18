/**
 * @file Defines liquidity in the Portal network
 */

/**
 * Represents the properties of a liquidity instance
 */
export type LiquidityProps = {
  id?: string
  ts?: number
  chain: string
  symbol: string
  contractAddress: string
  nativeAmount: bigint
  nativeAddress: string
  portalAddress: string
  nativeReceipt?: Receipt
  portalReceipt?: Receipt
}

/**
 * Represents a receipt for a liquidity transaction
 * @type {Receipt}
 */
export type Receipt = string

/**
 * Represents liquidity in the Portal network
 */
export class Liquidity {
  readonly id: string
  readonly ts: number
  readonly chain: string
  readonly symbol: string
  readonly contractAddress: string
  readonly nativeAmount: bigint
  readonly portalAmount: bigint
  readonly nativeAddress: string
  readonly portalAddress: string

  #nativeReceipt?: Receipt
  #portalReceipt?: Receipt

  /**
   * Creates a new liquidity instance
   * @param props The properties of the liquidity instance
   * @constructor
   */
  constructor(props: LiquidityProps) {
    if (props.nativeAmount === 0n) {
      throw new Error('nativeAmount cannot be 0!')
    }

    this.id = props.id || `0x${'0'.repeat(64)}`
    this.ts = Number(props.ts) || Date.now()

    this.chain = props.chain
    this.symbol = props.symbol
    this.contractAddress = props.contractAddress

    this.nativeAmount =
      typeof props.nativeAmount === 'string'
        ? BigInt(props.nativeAmount)
        : props.nativeAmount
    this.portalAmount = this.nativeAmount * 100n // 1:100 ratio
    this.nativeAddress = props.nativeAddress
    this.portalAddress = props.portalAddress

    this.#nativeReceipt = props.nativeReceipt
    this.#portalReceipt = props.portalReceipt
  }

  /**
   * Returns the native receipt for this liquidity instance
   * @returns {Receipt} The native receipt
   */
  get nativeReceipt(): Receipt | undefined {
    return this.#nativeReceipt
  }

  /**
   * Sets the native receipt for this liquidity instance
   * @param receipt The native receipt
   */
  set nativeReceipt(receipt: Receipt) {
    if (this.#nativeReceipt) {
      throw new Error('nativeReceipt already set!')
    }
    this.#nativeReceipt = receipt
  }

  /**
   * Returns the portal receipt for this liquidity instance
   * @returns {Receipt} The portal receipt
   */
  get portalReceipt(): Receipt | undefined {
    return this.#portalReceipt
  }

  /**
   * Sets the portal receipt for this liquidity instance
   * @param receipt The portal receipt
   */
  set portalReceipt(receipt: Receipt) {
    if (this.#portalReceipt) {
      throw new Error('portalReceipt already set!')
    }
    this.#portalReceipt = receipt
  }

  /**
   * Returns true if this liquidity instance represents a deposit/mint
   * @returns {boolean} True if the native amount is positive
   */
  get isDeposit() {
    return this.nativeAmount > 0n
  }

  /**
   * Returns true if this liquidity instance represents a withdrawal/burn
   * @returns {boolean} True if the native amount is negative
   */
  get isWithdrawal() {
    return this.nativeAmount < 0n
  }

  /**
   * Returns this liquidity instance for debugging
   * @returns {object} This liquidity instance
   */
  [Symbol.for('nodejs.util.inspect.custom')]() {
    return {
      id: this.id,
      ts: this.ts,
      chain: this.chain,
      symbol: this.symbol,
      contractAddress: this.contractAddress,
      nativeAmount: this.nativeAmount,
      portalAmount: this.portalAmount,
      nativeAddress: this.nativeAddress,
      portalAddress: this.portalAddress,
    }
  }

  /**
   * Returns a JSON representation of this liquidity instance
   * @returns {string} A JSON representation of this liquidity instance
   */
  toJSON() {
    return {
      id: this.id,
      ts: this.ts,
      chain: this.chain,
      symbol: this.symbol,
      contractAddress: this.contractAddress,
      nativeAmount: this.nativeAmount.toString(),
      portalAmount: this.portalAmount.toString(),
      nativeAddress: this.nativeAddress,
      portalAddress: this.portalAddress,
    }
  }

  /**
   * Compares this liquidity object to another
   * @param other The other liquidity to compare
   * @returns True if the two liquidity objects are equal
   */
  equals(other: Liquidity) {
    return this.id === other.id
  }
}
