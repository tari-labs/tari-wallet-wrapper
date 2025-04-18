/**
 * @file Interface to the lightning asset chain
 */

import { readFileSync } from 'fs'
import {
  AuthenticatedLnd,
  authenticatedLndGrpc,
  createHodlInvoice,
  decodePaymentRequest,
  getChannelBalance,
  getChannels,
  getWalletInfo,
  openChannel,
  payViaPaymentRequest,
  settleHodlInvoice,
  subscribeToInvoice,
  subscribeToInvoices,
  subscribeToPayViaDetails,
} from 'lightning'
import { Asset } from '../../poc/lib/core/asset.ts'
import { randomSecret, sha256 } from '../../poc/lib/core/crypto.ts'
import { Liquidity } from '../../poc/lib/core/liquidity.ts'
import {
  NativeChain,
  NativeChainError,
} from '../../poc/lib/core/native_chain.ts'
import { Party, SwapState } from '../../poc/lib/core/swap.ts'

/**
 * Properties required to instantiate a new Lightning instance
 * @type {LightningProps}
 * @property {string} url The "host:port" where the lnd instance is listening
 * @property {string} pathTlsCert The path to the tls certificate used by lnd
 * @property {string} pathMacaroon The path to the admin macaroon used by lnd
 * @property {object} [hub] The lnd "hub" operated by the Portal Foundation
 * @property {string} [hub.id] The lnd node id of the validator "hub"
 * @property {string} [hub.socket] The lnd peering url of the validator "hub"
 */
export type LightningProps = {
  url: string
  pathTlsCert: string
  pathMacaroon: string
  hub?: { id: string; socket: string }
}

/**
 * The type of an lnd invoice
 * @type {LndInvoice}
 */
type LndInvoice = {
  id: string
  created_at: Date
  confirmed_at: Date
  description: string
  is_confirmed: boolean
  is_held: boolean
  is_push: boolean
  received: number
  tokens: number
  payments: any[]
  payment: string
}

/**
 * The message types used in the lightning network
 * @type {object}
 */
const MESSAGE_TYPES: Record<string, string> = {
  secret: '5482373484',
  data: '34349331', // Hard-coded to match LDK/Mutiny WASM
}

/**
 * The native asset symbol for the lightning network
 * @type {string}
 */
const NATIVE_ASSET = 'BTC'

/**
 * The native asset address for the lightning network
 * @type {string}
 */
const NATIVE_ADDRESS = '0x0000000000000000000000000000000000000000'

/**
 * Interface to the lightning asset chain
 * @type {Lightning}
 * @extends {NativeChain}
 */
export class Lightning extends NativeChain {
  #lnd: { lnd: AuthenticatedLnd }
  #hub: { id: string | undefined; socket: string | undefined; channel: any }
  #nodePubKey: string | null = null
  #subscriptions: any = {}

  /**
   * Instantiates a new Lightning instance
   * @param props Properties required to instantiate a new Lightning instance
   * @param props.url The "host:port" where the lnd instance is listening
   * @param props.pathTlsCert The path to the tls certificate used by lnd
   * @param props.pathMacaroon The path to the admin macaroon used by lnd
   * @param [props.hub] The lnd "hub" operated by the Portal Foundation
   * @param [props.hub.id] The lnd node id of the validator "hub"
   * @param [props.hub.socket] The lnd node id of the validator "hub"
   * @returns {Lightning}
   */
  constructor(props: LightningProps) {
    super({ id: 'lightning' })

    const cert = readFileSync(props.pathTlsCert).toString('base64')
    const macaroon = readFileSync(props.pathMacaroon).toString('base64')
    const socket = props.url

    this.#lnd = authenticatedLndGrpc({ cert, macaroon, socket })
    this.#hub = {
      id: props.hub?.id,
      socket: props.hub?.socket,
      channel: null,
    }
  }

  /**
   * Returns the public key of the lnd node
   * @type {string}
   */
  get address() {
    return this.#nodePubKey
  }

  /**
   * Starts the lightning asset chain
   * @returns {Promise<Lightning>}
   */
  async start() {
    try {
      // Check if a channel is already open with the hub
      const { channels } = await getChannels(this.#lnd)
      const isHubChannel = (c: any) => c.partner_public_key === this.#hub.id
      this.#hub.channel = channels.find(isHubChannel)
      this.debug('start.hubChannel', this.#hub.channel)

      // If the hub channel is not open, open it
      if (this.#hub.id && !this.#hub.channel) {
        const args = {
          local_tokens: Number(10000000),
          // TODO: Figure out how to fund the remote channel reserve
          give_tokens: 5000000,
          partner_public_key: this.#hub.id,
          partner_socket: this.#hub.socket,
        }
        this.#hub.channel = await openChannelWithRetries(this.#lnd, args)
        this.debug('start.openChannel', this.#hub.channel)
        await waitForSync(this.#lnd)
      }

      // Load the wallet info
      const walletInfo = await getWalletInfo(this.#lnd)
      this.#nodePubKey = walletInfo.public_key
      this.debug('start.nodePubKey', this.#nodePubKey)
    } catch (e) {
      const err = parseLightningError(e)
      this.error('start', err)
      throw err
    }

    // subscribe to all invoices
    try {
      this.#subscriptions.invoices = subscribeToInvoices(this.#lnd).on(
        'invoice_updated',
        this.#onInvoiceUpdated.bind(this),
      )
      this.#subscriptions.payments = {}
    } catch (e) {
      const err = parseLightningError(e)
      this.error('start', err)
      throw err
    }

    this.info('start', { address: this.address, hub: this.#hub })
    return this
  }

  /**
   * Stops the lightning asset chain
   * @returns {Promise<Lightning>}
   */
  async stop() {
    this.#subscriptions.invoices.removeAllListeners()
    this.info('stop')
    return this
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event Handlers
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Handles LND invoice events
   *
   * As of this writing, deposits and withdrawals are handled by push payments.
   * Consequently, this method listens for invoice updates and emits deposit and
   * withdrawal events when a push payment is confirmed.
   *
   * @param invoice The LND invoice that was updated
   * @returns {void}
   */
  async #onInvoiceUpdated(invoice: LndInvoice) {
    try {
      // this.debug('onInvoiceUpdated', { invoice })

      // push invoices are for liquidity operations
      if (invoice.is_push) {
        // only process confirmed invoices
        if (!invoice.is_confirmed) return

        // extract the liquidity message from the invoice
        const { messages } = invoice.payments[0]
        const message = messages.find(
          (m: { type: string }) => m.type === MESSAGE_TYPES.data,
        )
        const json = Buffer.from(message?.value, 'hex').toString('utf8')
        this.debug('onInvoiceUpdated.json', { json })

        let liquidity = null
        let obj = null
        try {
          obj = JSON.parse(json)
          liquidity = new Liquidity(obj)
        } catch (e: any) {
          this.error('onInvoiceUpdated.json.parse', e, json)
          throw NativeChainError.InvalidLiquidity(obj, invoice)
        }
        this.debug('onInvoiceUpdated.liquidity', { liquidity })

        // log and emit the event
        if (liquidity.isDeposit) {
          this.emitWithDelay('deposit', liquidity)
        } else if (liquidity.isWithdrawal) {
          this.emitWithDelay('withdraw', liquidity)
        } else {
          throw NativeChainError.InvalidLiquidity(liquidity, invoice)
        }
      }
    } catch (err) {
      this.error('onInvoiceUpdated', err, invoice)
      this.emit('error', err, invoice)
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Wallet Operations
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the on-chain balance, in satoshis
   *
   * Once in a while, if the channel has unsettled balance, the balance is
   * fetched again after a short delay, until the balance is settled.
   *
   * @returns {BigInt}
   */
  async balance(asset: Asset): Promise<bigint> {
    // validate the arguments
    if (asset.chain !== this.id) {
      const expected = this.id
      const actual = asset.chain
      const ctx = { asset }
      throw NativeChainError.InvalidChain(expected, actual, ctx)
    }

    if (asset.symbol !== NATIVE_ASSET) {
      const expected = NATIVE_ASSET
      const actual = asset.symbol
      const ctx = { asset }
      throw NativeChainError.InvalidAsset(expected, actual, ctx)
    }

    const fetchBalance = async (): Promise<bigint> => {
      const result = await getChannelBalance(this.#lnd)
      const { channel_balance, unsettled_balance } = result

      if (unsettled_balance === 0) {
        const balance = BigInt(channel_balance)
        this.info('balance', { balance })
        return balance
      }

      // sleep for a bit and try again
      // TODO: Hard-coded value!
      await new Promise(resolve => setTimeout(resolve, 1000))
      return fetchBalance()
    }

    return fetchBalance()
  }

  //////////////////////////////////////////////////////////////////////////////
  // Asset Management
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The lightning only supports BTC as of this writing. So this method merely
   * validates that the asset is BTC on the lightning chain, with the contract
   * address being the zero address.
   * @param asset The asset to register
   */
  async registerAsset(asset: Asset): Promise<Asset> {
    if (asset.chain !== this.id) {
      const expected = this.id
      const actual = asset.chain
      const ctx = { asset }
      throw NativeChainError.InvalidChain(expected, actual, ctx)
    }

    if (asset.symbol !== NATIVE_ASSET) {
      const expected = NATIVE_ASSET
      const actual = asset.symbol
      const ctx = { asset }
      throw NativeChainError.InvalidAsset(expected, actual, ctx)
    }

    if (asset.contractAddress !== NATIVE_ADDRESS) {
      const expected = NATIVE_ADDRESS
      const actual = asset.contractAddress
      const ctx = { asset }
      throw NativeChainError.InvalidAsset(expected, actual, ctx)
    }

    return asset
  }

  //////////////////////////////////////////////////////////////////////////////
  // Liquidity Operations
  //////////////////////////////////////////////////////////////////////////////

  /**
   * This method deposits bitcoin over the lightning network to the hub node.
   *
   * A push-payment is made to the hub node for the specified amount.
   *
   * @param {Liquidity} liquidity The liquidity being deposited
   * @returns {Promise<Liquidity>} The liquidity that was deposited
   */
  async deposit(liquidity: Liquidity): Promise<Liquidity> {
    // validate the arguments
    if (liquidity.chain !== this.id) {
      const expected = this.id
      const actual = liquidity.chain
      const ctx = { liquidity }
      throw NativeChainError.InvalidChain(expected, actual, ctx)
    }

    if (liquidity.symbol !== NATIVE_ASSET) {
      const expected = NATIVE_ASSET
      const actual = liquidity.symbol
      const ctx = { liquidity }
      throw NativeChainError.InvalidAsset(expected, actual, ctx)
    }

    if (!liquidity.isDeposit) {
      throw NativeChainError.Unexpected(liquidity)
    }

    // The lighting module does not support BigInts, forcing casting to Number.
    // This check ensures we don't lose precision when casting.
    const { nativeAmount } = liquidity
    if (nativeAmount <= 0 || nativeAmount > Number.MAX_SAFE_INTEGER) {
      throw NativeChainError.InvalidAmount(nativeAmount)
    }

    return new Promise((resolve, reject) => {
      try {
        const preimage = randomSecret(32)
        const id = sha256(preimage).slice(2) // drop the leading 0x for lnd
        const secret = preimage.toString('hex')

        // NOTE: shadow's incoming argument, liquidity, to create a new instance
        // with a unique id
        liquidity = new Liquidity({ ...liquidity, id: `0x${id}` })

        const args = {
          id,
          lnd: this.#lnd.lnd,
          tokens: Number(liquidity.nativeAmount), // checked to be in safe range
          destination: this.#hub.id!,
          messages: [
            {
              type: MESSAGE_TYPES.secret,
              value: secret,
            },
            {
              type: MESSAGE_TYPES.data,
              value: Buffer.from(JSON.stringify(liquidity)).toString('hex'),
            },
          ],
        }

        this.debug('deposit.starting', {
          ...args,
          lnd: { address: this.address },
        })
        subscribeToPayViaDetails(args)
          .once('confirmed', receipt => {
            liquidity.nativeReceipt = receipt
            resolve(liquidity)
          })
          .once('failed', receipt => {
            const err = NativeChainError.Unexpected({
              liquidity,
              receipt,
            })
            reject(err)
          })
          .once('routing_failure', receipt => {
            const err = NativeChainError.Unexpected({
              liquidity,
              receipt,
            })
            reject(err)
          })
          .once('error', e => {
            const err = parseLightningError(e, { liquidity })
            reject(err)
          })
      } catch (e) {
        const err = parseLightningError(e, { liquidity })
        return reject(err)
      }
    })
  }

  /**
   * This method withdraws bitcoin over the lightning network from the hub node.
   *
   * This method is expected to be called by the validator to push a payment to
   * the withdrawer.
   *
   * @param {Liquidity} liquidity The liquidity to withdraw
   * @returns {Promise<Liquidity>} The liquidity that was withdrawn
   */
  async withdraw(liquidity: Liquidity): Promise<Liquidity> {
    // validate the arguments
    if (liquidity.chain !== this.id) {
      const expected = this.id
      const actual = liquidity.chain
      const ctx = { liquidity }
      throw NativeChainError.InvalidChain(expected, actual, ctx)
    }

    if (liquidity.symbol !== NATIVE_ASSET) {
      const expected = NATIVE_ASSET
      const actual = liquidity.symbol
      const ctx = { liquidity }
      throw NativeChainError.InvalidAsset(expected, actual, ctx)
    }

    if (!liquidity.isWithdrawal) {
      throw NativeChainError.Unexpected(liquidity)
    }

    // validate the amount; keep in mind, the amount is negative for withdrawals
    // The lighting module does not support BigInts, forcing casting to Number.
    // This check ensures we don't lose precision when casting.
    const { nativeAmount } = liquidity
    if (nativeAmount >= 0 || nativeAmount < Number.MIN_SAFE_INTEGER) {
      throw NativeChainError.InvalidAmount(nativeAmount)
    }

    return new Promise((resolve, reject) => {
      try {
        const preimage = randomSecret(32)
        const id = sha256(preimage).slice(2) // drop the leading 0x for lnd
        const secret = preimage.toString('hex')
        const args = {
          id,
          lnd: this.#lnd.lnd,
          // NOTE: This needs to be a positive number for LND to do its thing.
          tokens: Number(-liquidity.nativeAmount), // checked to be in safe range
          destination: liquidity.nativeAddress,
          messages: [
            {
              type: MESSAGE_TYPES.secret,
              value: secret,
            },
            {
              type: MESSAGE_TYPES.data,
              value: Buffer.from(JSON.stringify(liquidity)).toString('hex'),
            },
          ],
        }

        this.debug('withdraw.starting', {
          ...args,
          lnd: { address: this.address },
        })
        subscribeToPayViaDetails(args)
          .once('confirmed', receipt => {
            liquidity.nativeReceipt = receipt
            resolve(liquidity)
          })
          .once('failed', receipt => {
            const err = NativeChainError.Unexpected({ liquidity, receipt })
            reject(err)
          })
          .once('routing_failure', receipt => {
            const err = NativeChainError.Unexpected({ liquidity, receipt })
            reject(err)
          })
          .once('error', e => {
            const err = parseLightningError(e, { liquidity })
            reject(err)
          })
      } catch (e) {
        const err = parseLightningError(e, { liquidity })
        return reject(err)
      }
    })
  }

  //////////////////////////////////////////////////////////////////////////////
  // Swap Operations
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a HODL invoice
   * @param {Party} party The party that will pay the invoice
   * @returns {Promise<Party>} The updated party instance
   */
  async createInvoice(party: Party): Promise<Party> {
    try {
      if (!party.isSecretSeeker) {
        throw new Error('Expected party to be the secret-seeker!')
      }

      const result = await createHodlInvoice({
        ...this.#lnd,
        id: party.swap.secretHash.slice(2),
        tokens: Number(party.amount),
        description: party.swap.id,
      })
      party.invoice = result.request

      // Subscribe to the invoice events
      if (this.#subscriptions.payments[result.id]) {
        throw Error(`Conflicting secret hashes found: ${result.id}`)
      }

      // Subscribe to the invoice events
      // NOTE: This is a known quirk with the lightning.js library. The
      // subscribeToInvoices method does not track HODL invoice events. So we
      // need to subscribe to each invoice individually. The silver-lining is
      // that we no longer have to pass the Swap instance through an LND message
      // like we do for Liquidity events.
      this.#subscriptions.payments[result.id] = subscribeToInvoice({
        ...this.#lnd,
        id: result.id,
      }).on('invoice_updated', (invoice: LndInvoice) => {
        // only held invoices matter here
        if (!invoice.is_held) return

        // validate the invoice description to match the swap id
        if (invoice.description !== party.swap.id) {
          const err = Error('Invalid payment request!')
          this.error('createInvoice.update', err, party, invoice)
          this.emit('error', err, party, invoice)
        }

        // validate the invoice amount to match the swap amount
        if (BigInt(invoice.received) !== party.amount) {
          const err = Error('Payment request amount mismatch!')
          this.error('createInvoice.update', err, party, invoice)
          this.emit('error', err, party, invoice)
        }

        party.receipt = invoice.id

        if (party.isSecretSeeker) {
          // create a fresh swap instance with the updated state
          this.emitWithDelay('swapSeekerPaid', {
            id: party.swap.id,
            state: SwapState.SeekerPaid,
            secretSeeker: { receipt: invoice.id },
          })
        } else if (party.isSecretHolder) {
          // This should NEVER happen! On lightning swaps, the SecretHolder is
          // NEVER going to be paying the invoice because that would cause the
          // secret to be leaked!
          const err = Error('SecretHolder NEVER pays a lighting invoice!')
          this.error('onSwapHolderPaid', err, party, invoice)
          this.emit('error', err, party, invoice)
        } else {
          const err = Error('Unknown party subscribed to invoice!')
          this.error('createInvoice.update', err, party, invoice)
          this.emit('error', err, party, invoice)
        }
      })

      this.info('createInvoice', { party })
      return party
    } catch (e: any) {
      const err = parseLightningError(e, { party })
      this.error('createInvoice', err)
      throw err
    }
  }

  /**
   * Pays a HODL invoice
   * @param {Party} party The party that is paying the invoice
   * @returns {Promise<Party>} The updated party
   */
  async payInvoice(party: Party): Promise<Party> {
    try {
      if (!party.isSecretSeeker) {
        throw new Error('Only the secret seeker can pay the invoice!')
      } else if (party.invoice == null) {
        throw new Error('Missing invoice to pay!')
      }

      const reqArgs = { ...this.#lnd, request: party.invoice }
      const request = await decodePaymentRequest(reqArgs)
      if (request.description !== party.swap.id) {
        throw new Error('Invalid payment request!')
      } else if (BigInt(request.tokens) !== party.amount) {
        throw new Error('Payment request amount mismatch!')
      }

      // TODO: Validate the payment request for expiry, etc.

      this.debug('payInvoice.starting', { party, request })

      // Pay the invoice.
      // NOTE: The HODL invoice implementation in the lightning module blocks
      // waiting for the HODL invoice to be settled. Consequently, this call
      // will return only after the counterparty settles the HODL invoice.
      const payment = await payViaPaymentRequest(reqArgs)
      if (payment.confirmed_at == null) {
        throw new Error('Payment not confirmed!')
      } else if (payment.secret == null) {
        throw new Error('Secret not revealed!')
      }

      // Due to lightning semantics, the swapSeekerPaid and swapHolderSettled
      // events are fired too close to each, causing the events to be handled
      // out-of-order depending on the V8 event loop. To prevent this, we only
      // fire the swapHolderSettled event after the swapSeekerPaid event has been
      // handled.
      this.once('swapSeekerPaid', () =>
        this.emitWithDelay('swapHolderSettled', {
          id: party.swap.id,
          state: SwapState.HolderSettled,
          secret: Buffer.from(payment.secret, 'hex'),
        }),
      )

      // Handle the payment receipt and emit the swapSeekerPaid event
      this.emitWithDelay('swapSeekerPaid', {
        id: party.swap.id,
        state: SwapState.SeekerPaid,
        secretSeeker: { receipt: payment.id },
      })

      return party
    } catch (e: any) {
      const err = parseLightningError(e, { party })
      this.error('payInvoice', err)
      throw err
    }
  }

  /**
   * Settles the HODL invoice
   * @param {Party} party The party that will settle the invoice
   * @param {string} secret The secret to settle the invoice
   * @returns {Promise<void>}
   */
  async settleInvoice(party: Party, secret: Buffer): Promise<Party> {
    try {
      this.info('settleInvoice.starting', { party })
      await settleHodlInvoice({
        ...this.#lnd,
        secret: secret.toString('hex'),
      })

      this.emitWithDelay('swapHolderSettled', {
        id: party.swap.id,
        state: SwapState.HolderSettled,
        secret: secret,
      })

      this.info('settleInvoice', { party })
      return party
    } catch (e: any) {
      const err = parseLightningError(e, { party })
      this.error('settleInvoice', err)
      throw err
    }
  }
}

/**
 * Checks if the lnd instance is sync'd to the chain and graph
 * @param lnd The lnd instance to check for sync
 * @param opts Configuration options for the sync check
 * @param opts.maxAttempts The maximum number of attempts to check for sync
 * @param opts.timeout The time to wait between attempts
 * @returns Promise<void>
 */
function waitForSync(lnd: any, opts = { maxAttempts: 10, timeout: 1000 }) {
  return new Promise<void>((resolve, reject) => {
    const checkSync = async (attempt = 0) => {
      try {
        const info = await getWalletInfo(lnd)
        const { is_synced_to_chain, is_synced_to_graph } = info
        if (is_synced_to_chain && is_synced_to_graph) {
          return resolve()
        } else {
          setTimeout(checkSync, opts.timeout, ++attempt)
        }
      } catch (e) {
        const err = parseLightningError(e)
        return attempt >= opts.maxAttempts
          ? reject(err)
          : setTimeout(checkSync, opts.timeout, ++attempt)
      }
    }

    checkSync()
  })
}

/**
 * Opens a channel with the lnd instance, retrying if it fails
 * @param lnd The lnd instance to open the channel with
 * @param args Arguments for opening the channel
 * @param opts Configuration options for the operation
 * @returns {Promise<OpenChannelResult>}
 */
function openChannelWithRetries(
  lnd: any,
  args: any,
  opts = { maxAttempts: 10, timeout: 1000 },
) {
  return new Promise((resolve, reject) => {
    const OpenChannelWithRetries = async (attempt = 0) => {
      try {
        resolve(await openChannel({ ...lnd, ...args }))
      } catch (e) {
        const err = parseLightningError(e)
        return attempt >= opts.maxAttempts
          ? reject(err)
          : setTimeout(OpenChannelWithRetries, opts.timeout, ++attempt)
      }
    }

    OpenChannelWithRetries()
  })
}

/**
 * Parses a lightning module error into a AssetChainError instance
 * @param e The lightning error to parse
 * @param ctx Optional contextual information to include in the error
 * @returns {NativeChainError}
 */
function parseLightningError(e: any, ctx?: object): NativeChainError {
  if (Array.isArray(e)) {
    const [, errorCode] = e
    const message = errorCode.replace(/([A-Z])/g, ' $1').trim()
    const code = `E${errorCode}`
    return new NativeChainError(message, code, ctx)
  }

  return NativeChainError.Unexpected(ctx, e)
}
