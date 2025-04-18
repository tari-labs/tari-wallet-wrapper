/**
 * @file Defines a swap and its associated classes and types.
 */

import { sha256 } from './crypto.ts'

/**
 * A null hash value for unknown secret hashes
 * @type {string}
 */
const NULL_HASH: string = `0x${'0'.repeat(64)}`

/**
 * A type representing a hash value that is not NULL_HASH.
 * @type {string}
 */
type NonNullHash = Exclude<string, typeof NULL_HASH>

/**
 * Enum representing the different states of a Swap in the lifecycle.
 * @type {SwapState}
 * @property {number} Matched The initial state when the swap is created.
 * @property {number} HolderInvoiced The state when the holder has been invoiced.
 * @property {number} SeekerInvoiced The state when the seeker has been invoiced.
 * @property {number} HolderPaid The state when the holder has paid.
 * @property {number} SeekerPaid The state when the seeker has paid.
 * @property {number} HolderSettled The state when the holder has settled.
 * @property {number} SeekerSettled The state when the seeker has settled.
 */
export enum SwapState {
  Matched,
  HolderInvoiced,
  SeekerInvoiced,
  HolderPaid,
  SeekerPaid,
  HolderSettled,
  SeekerSettled,
}

/**
 * Represents a swap when it is matched.
 * @type {MatchedSwap}
 */
export type MatchedSwap = {
  id: string
  state: SwapState.Matched
  secretHash: typeof NULL_HASH
  secretHolder: PartyBase
  secretSeeker: PartyBase
}

/**
 * Represents a swap when the holder has created an invoice
 * @type {HolderInvoicedSwap}
 */
export type HolderInvoicedSwap = {
  id: string
  state: SwapState.HolderInvoiced
  secretHash: NonNullHash
  secretSeeker: { invoice: Invoice }
}

/**
 * Represents a swap when the seeker has created an invoice
 * @type {SeekerInvoicedSwap}
 */
export type SeekerInvoicedSwap = {
  id: string
  state: SwapState.SeekerInvoiced
  secretHolder: { invoice: Invoice }
}

/**
 * Represents a swap when the holder has paid
 * @type {HolderPaidSwap}
 */
export type HolderPaidSwap = {
  id: string
  state: SwapState.HolderPaid
  secretHolder: { receipt: Receipt }
}

/**
 * Represents a swap when the seeker has paid
 * @type {SeekerPaidSwap}
 */
export type SeekerPaidSwap = {
  id: string
  state: SwapState.SeekerPaid
  secretSeeker: PartyBase & { receipt: Receipt }
}

/**
 * Represents a swap when the holder has settled
 * @type {HolderSettledSwap}
 */
export type HolderSettledSwap = {
  id: string
  state: SwapState.HolderSettled
  secret: Buffer
}

/**
 * Represents a swap when the seeker has settled
 * @type {SeekerSettledSwap}
 */
export type SeekerSettledSwap = {
  id: string
  state: SwapState.SeekerSettled
}

/**
 * Represents a swap in all possible states.
 * @type {SwapDiff}
 */
export type SwapDiff =
  | MatchedSwap
  | HolderInvoicedSwap
  | SeekerInvoicedSwap
  | HolderPaidSwap
  | SeekerPaidSwap
  | HolderSettledSwap
  | SeekerSettledSwap

type PartyBase = {
  portalAddress: string
  chain: string
  symbol: string
  contractAddress: string
  amount: bigint
}

/**
 * Valid state transitions for the Swap state machine.
 */
export const VALID_SWAP_TRANSITIONS: Record<SwapState, SwapState[]> = {
  [SwapState.Matched]: [SwapState.HolderInvoiced],
  [SwapState.HolderInvoiced]: [SwapState.SeekerInvoiced],
  [SwapState.SeekerInvoiced]: [SwapState.HolderPaid],
  [SwapState.HolderPaid]: [SwapState.SeekerPaid],
  [SwapState.SeekerPaid]: [SwapState.HolderSettled],
  [SwapState.HolderSettled]: [SwapState.SeekerSettled],
  [SwapState.SeekerSettled]: [],
}

export type SwapProps = {
  id: string
  state: SwapState
  secret?: Buffer
  secretHash: string
  secretHolder: PartyBase
  secretSeeker: PartyBase
}

export type PartyProps = {
  portalAddress: string
  chain: string
  symbol: string
  contractAddress: string
  amount: bigint
  invoice?: Invoice
  receipt?: Receipt
}

/**
 * Represents a Swap, containing metadata and state for cross-chain atomic swaps.
 * @type {Swap}
 */
export class Swap {
  readonly id: string
  readonly secretHolder: Party
  readonly secretSeeker: Party

  #state: SwapState
  #secret?: Buffer
  #secretHash: string

  /**
   * Creates a new instance of the Swap class.
   * @param {SwapProps} props The properties of the Swap instance.
   * @param {string} props.id The unique identifier of the Swap.
   * @param {SwapState} props.state The current status of the Swap.
   * @param {PartyBase} props.secretHolder The party holding the secret.
   * @param {PartyBase} props.secretSeeker The party seeking the secret.
   */
  constructor(props: SwapProps) {
    this.id = props.id
    this.secretHolder = new Party(this, props.secretHolder)
    this.secretSeeker = new Party(this, props.secretSeeker)

    this.#state = props.state
    // prettier-ignore
    this.#secretHash = props.state === SwapState.Matched
      ? NULL_HASH
      : props.secretHash

    if (this.state === SwapState.HolderSettled) {
      const secret = Buffer.isBuffer(props.secret)
        ? props.secret
        : Buffer.from(props.secret!)
      const secretHash = sha256(secret)
      if (this.#secretHash !== secretHash) {
        throw Error(`secretHash mismatch: ${this.#secretHash} vs ${secretHash}`)
      }
      this.#secret = secret
    }
  }

  /**
   * Returns the current state of this swap
   * @returns {SwapState} The state of this swap
   */
  get state() {
    return this.#state
  }

  /**
   * Sets the state of this swap
   * @param {SwapState} state The state to set
   */
  set state(state: SwapState) {
    const allowed = VALID_SWAP_TRANSITIONS[this.state]
    if (!allowed.includes(state)) {
      throw new Error(`Invalid transition: ${this.state} → ${state}`)
    }
    this.#state = state
  }

  /**
   * Returns the secret used by this swap
   * @returns {string} The secret used by this swap
   */
  get secret() {
    return this.#secret
  }

  /**
   * Returns the secret hash of this swap
   * @returns {string} The secret hash of this swap
   */
  get secretHash() {
    return this.#secretHash
  }

  /**
   * Sets the secret hash of this swap
   * @param {string} secretHash The secret hash to set
   */
  set secretHash(secretHash: string) {
    if (this.#secretHash != NULL_HASH && this.#secretHash !== secretHash) {
      throw Error('secretHash cannot be set more than once!')
    }

    this.#secretHash = secretHash.startsWith('0x')
      ? secretHash
      : `0x${secretHash}`
  }

  /**
   * Returns this instance as a JSON object; useful for debugging
   * @returns {object}
   */
  [Symbol.for('nodejs.util.inspect.custom')]() {
    const obj = {
      id: this.id,
      state: SwapState[this.state],
      secret: this.#secret == null ? undefined : `${this.#secret.length} bytes`,
      secretHash: this.secretHash,
      secretHolder: this.secretHolder,
      secretSeeker: this.secretSeeker,
    }
    return obj
  }

  /**
   * Returns a JSON representation of the Swap instance.
   * @returns {Swap}
   */
  toJSON() {
    return {
      id: this.id,
      state: this.state,
      secret: this.#secret,
      secretHash: this.secretHash,
      secretHolder: this.secretHolder,
      secretSeeker: this.secretSeeker,
    }
  }

  /**
   * Returns true if a party is part of this swap
   * @param party The party to check
   * @returns True if the party is part of this swap
   */
  hasParty(party: string) {
    return (
      this.secretHolder.portalAddress === party ||
      this.secretSeeker.portalAddress === party
    )
  }

  /**
   * Returns true if a party is the secret holder in this swap
   * @param party The party to check
   * @returns True if the party is the secret holder
   */
  isSecretHolder(party: string) {
    return (
      this.secretHolder.portalAddress === party ||
      this.secretHolder.portalAddress.toLowerCase() === party.toLowerCase()
    )
  }

  /**
   * Returns true if a party is the secret seeker in this swap
   * @param party The party to check
   * @returns True if the party is the secret seeker
   */
  isSecretSeeker(party: string) {
    return (
      this.secretSeeker.portalAddress === party ||
      this.secretSeeker.portalAddress.toLowerCase() === party.toLowerCase()
    )
  }

  /**
   * Updates the swap state and properties based on the provided diff.
   * @param {SwapDiff} diff The diff object containing the new state and properties.
   */
  update(diff: SwapDiff) {
    this.state = diff.state
    // prettier-ignore
    this.secretHash = diff.state === SwapState.HolderInvoiced
        ? diff.secretHash
        : this.secretHash

    if (diff.state === SwapState.HolderInvoiced) {
      this.secretSeeker.invoice = diff.secretSeeker.invoice
    } else if (diff.state === SwapState.SeekerInvoiced) {
      this.secretHolder.invoice = diff.secretHolder.invoice
    } else if (diff.state === SwapState.HolderPaid) {
      this.secretHolder.receipt = diff.secretHolder.receipt
    } else if (diff.state === SwapState.SeekerPaid) {
      this.secretSeeker.receipt = diff.secretSeeker.receipt
    } else if (diff.state === SwapState.HolderSettled) {
      const secretHash = sha256(diff.secret)
      if (this.#secretHash !== secretHash) {
        throw Error(`secretHash mismatch: ${this.#secretHash} vs ${secretHash}`)
      }
      this.#secret = diff.secret
    }
  }
}

/**
 * Type alias for representing an invoice string.
 */
export type Invoice = string

/**
 * Type alias for representing a receipt string.
 */
export type Receipt = string

/**
 * Represents a party involved in a Swap, either the secret holder or the secret seeker.
 */
export class Party {
  readonly swap: Swap
  readonly portalAddress: string
  readonly chain: string
  readonly symbol: string
  readonly contractAddress: string
  readonly amount: bigint

  invoice?: Invoice
  receipt?: Receipt

  /**
   * Constructs a new Party instance.
   */
  constructor(swap: Swap, props: PartyProps) {
    this.swap = swap

    this.portalAddress = props.portalAddress
    this.chain = props.chain
    this.symbol = props.symbol
    this.contractAddress = props.contractAddress
    this.amount =
      typeof props.amount === 'string' ? BigInt(props.amount) : props.amount

    // TODO: These should be optional; not empty strings
    this.invoice = props.invoice === '' ? undefined : props.invoice
    this.receipt = props.receipt === '' ? undefined : props.receipt
  }

  /**
   * Returns true if this party is the secret holder in the swap
   * @returns {boolean} True if this party is the secret holder
   */
  get isSecretHolder() {
    return this.swap.secretHolder === this
  }

  /**
   * Returns true if this party is the secret seeker in the swap
   * @returns {boolean} True if this party is the secret seeker
   */
  get isSecretSeeker() {
    return this.swap.secretSeeker === this
  }

  /**
   * Returns this instance as a JSON object; useful for debugging
   * @returns {object}
   */
  [Symbol.for('nodejs.util.inspect.custom')]() {
    return {
      portalAddress: this.portalAddress,
      chain: this.chain,
      symbol: this.symbol,
      contractAddress: this.contractAddress,
      amount: this.amount,
      invoice: this.invoice,
      receipt: this.receipt,
    }
  }

  /**
   * Returns a JSON representation of the Party instance.
   */
  toJSON() {
    return {
      portalAddress: this.portalAddress,
      chain: this.chain,
      symbol: this.symbol,
      contractAddress: this.contractAddress,
      amount: this.amount.toString(),
      invoice: this.invoice,
    }
  }
}
