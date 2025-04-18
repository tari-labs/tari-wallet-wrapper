/**
 * @file A base class for all native chains
 */

import { Asset } from './asset.ts'
import BaseClass from './base_class.ts'
import BaseError from './base_error.ts'
import { Liquidity } from './liquidity.ts'
import { Party, Swap } from './swap.ts'

/**
 * A base class for all native chains
 * @type {NativeChain}
 * @extends {BaseClass}
 */
export abstract class NativeChain extends BaseClass {
  /**
   * Returns the account address of the native chain
   * @type {string|null}
   */
  get address(): string | null {
    throw new NativeChainError('not implemented!', 'ENotImplemented')
  }

  /**
   * Connects to the native chain daemon and starts operations
   * @returns {Promise<NativeChain>}
   */
  async start(): Promise<this> {
    throw new NativeChainError('not implemented!', 'ENotImplemented')
  }

  /**
   * Disconnects from the native chain daemon and stops operations
   * @returns {Promise<NativeChain>}
   */
  async stop(): Promise<this> {
    throw new NativeChainError('not implemented!', 'ENotImplemented')
  }

  //////////////////////////////////////////////////////////////////////////////
  // Wallet Operations
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the balance of the account as a bigint value; the unit of the value
   * is chain-specific.
   * @param {Asset} asset The asset whose balance is to be returned
   * @returns {BigInt}
   */
  async balance(asset: Asset): Promise<bigint> {
    throw new NativeChainError('not implemented!', 'ENotImplemented', { asset })
  }

  //////////////////////////////////////////////////////////////////////////////
  // Asset Operations
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Registers an asset on the native chain
   * @param asset The asset to register
   * @returns {Promise<Asset>}
   */
  async registerAsset(asset: Asset): Promise<Asset> {
    throw new NativeChainError('not implemented!', 'ENotImplemented', { asset })
  }

  //////////////////////////////////////////////////////////////////////////////
  // Liquidity Operations
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Deposits the specified amount of the specified asset
   * @param {Liquidity} liquidity The liquidity being deposited
   * @returns {Promise<Liquidity>} The liquidity that was deposited
   */
  async deposit(liquidity: Liquidity): Promise<Liquidity> {
    throw new NativeChainError('not implemented!', 'ENotImplemented', {
      liquidity,
    })
  }

  /**
   * Withdraws the specified amount of the specified asset
   * @param {Liquidity} liquidity The liquidity to withdraw
   * @returns {Promise<Liquidity>} The liquidity that was withdrawn
   */
  async withdraw(liquidity: Liquidity): Promise<Liquidity> {
    throw new NativeChainError('not implemented!', 'ENotImplemented', {
      liquidity,
    })
  }

  //////////////////////////////////////////////////////////////////////////////
  // Swap Operations
  //////////////////////////////////////////////////////////////////////////////

  async createInvoice(party: Party): Promise<Party> {
    throw new NativeChainError('not implemented!', 'ENotImplemented', {
      party,
      swap: party.swap,
    })
  }

  async payInvoice(party: Party): Promise<Party> {
    throw new NativeChainError('not implemented!', 'ENotImplemented', {
      party,
      swap: party.swap,
    })
  }

  async validateReceipt(party: Party): Promise<Party> {
    throw new NativeChainError('not implemented!', 'ENotImplemented', {
      party,
      swap: party.swap,
    })
  }

  async settleInvoice(party: Party, secret: Buffer): Promise<Party> {
    throw new NativeChainError('not implemented!', 'ENotImplemented', {
      party,
      swap: party.swap,
      secret: `${secret.length} bytes`,
    })
  }

  //////////////////////////////////////////////////////////////////////////////
  // Internal Helpers
  //////////////////////////////////////////////////////////////////////////////
  protected emitWithDelay(event: string, ...args: any) {
    setTimeout(() => {
      this.info(`on${event[0].toUpperCase()}${event.slice(1)}`, ...args)
      this.emit(event, ...args)
    }, 1000)
  }
}

////////////////////////////////////////////////////////////////////////////////
// Errors
////////////////////////////////////////////////////////////////////////////////

/**
 * Defines an error class for the native chain
 * @type {NativeChainError}
 * @extends {BaseError}
 */
export class NativeChainError extends BaseError {
  /**
   * Handles an invalid native chain
   * @param assetChain The invalid native chain that caused the error
   * @returns {NativeChainError}
   */
  static InvalidChain(expected: string, actual: string, ctx?: any) {
    const message = 'invalid native chain!'
    const code = 'EInvalidChain'
    return new NativeChainError(message, code, { expected, actual, ctx })
  }

  /**
   * Handles an invalid asset
   * @param asset The invalid asset that caused the error
   * @returns {NativeChainError}
   */
  static InvalidAsset(expected: string, actual: string, ctx?: any) {
    const message = 'invalid asset!'
    const code = 'EInvalidAsset'
    return new NativeChainError(message, code, { expected, actual, ctx })
  }

  /**
   * Handles an insufficient balance
   * @param asset The asset whose balance is insufficient
   * @param required The required amount
   * @param available The available amount
   * @returns {NativeChainError}
   */
  static InsufficientBalance(
    asset: Asset,
    required: bigint,
    available: bigint,
  ) {
    const message = 'insufficient balance!'
    const code = 'EInsufficientBalance'
    const ctx = { asset, required, available }
    return new NativeChainError(message, code, ctx)
  }

  /**
   * Handles an invalid amount
   * @param amount The invalid amount
   * @returns {NativeChainError}
   */
  static InvalidAmount(amount: bigint) {
    const message = 'invalid amount!'
    const code = 'EInvalidAmount'
    const ctx = { amount }
    return new NativeChainError(message, code, ctx)
  }

  static InvalidLiquidity(liquidity: Liquidity | null, metadata: any) {
    const message = 'invalid liquidity!'
    const code = 'EInvalidLiquidity'
    const ctx = { liquidity, metadata }
    return new NativeChainError(message, code, ctx)
  }

  static InvalidSwap(swap: Swap | null, metadata?: any) {
    const message = 'invalid swap!'
    const code = 'EInvalidSwap'
    const ctx = { swap, metadata }
    return new NativeChainError(message, code, ctx)
  }
}
