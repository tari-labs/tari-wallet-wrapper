import { TariWalletGrpcClient, utils } from "../lib";
import { NativeChain, NativeChainError } from "./native_chain";
import { Asset } from "./asset";
import { Party, SwapState } from "./swap";
import { Liquidity } from "./liquidity";
import { PaymentRecipient_PaymentType, TransactionEventResponse } from "../client/wallet";
import Long from "long";
/**
 * The native asset symbol for the lightning network
 * @type {string}
 */
const NATIVE_ASSET = 'XTM'

/**
 * The native asset address for the lightning network
 * @type {string}
 */
const NATIVE_ADDRESS = '0x0000000000000000000000000000000000000000'


export type TariProps = {
  url: string;
}

/**
 * Interface to the Tari asset chain
 * @type {Tari}
 * @extends {NativeChain}
 */
export class Tari extends NativeChain {
  #walletGrpc: TariWalletGrpcClient;
  #nodePubKey: string | null = null
  #subscriptions: any = {}

  constructor(props: TariProps) {
    super({ 'id': 'tari' })

    this.#walletGrpc = new TariWalletGrpcClient(props.url);

  }


  /**
  * Returns the account address of the native chain
  * @type {string|null}
  */
  get address(): string | null {
    return this.#nodePubKey;
  }

  /**
   * Connects to the native chain daemon and starts operations
   * @returns {Promise<NativeChain>}
   */
  async start() {
    try {
      const address = await this.#walletGrpc.getAddress();
      this.#nodePubKey = utils.parseTariAddress(Buffer.from(address.oneSidedAddress)).publicViewKey;
      this.debug('start.nodePubKey', this.#nodePubKey)
    } catch (error) {
      this.error('start.error', error)
      throw error
    }
    // subscribe to all invoices
    try {
      this.#subscriptions.invoices = subscribeToInvoices(this.#walletGrpc).on(
        'invoice_updated',
        this.#onInvoiceUpdated.bind(this),
      )
      this.#subscriptions.payments = {}
    } catch (e) {
      const err = utils.parseTariError(e)
      this.error('start', err)
      throw err
    }

    this.info('start', { address: this.address, walletGrpc: this.#walletGrpc })
    return this;
  }

  /**
   * Disconnects from the native chain daemon and stops operations
   * @returns {Promise<NativeChain>}
   */
  async stop(): Promise<this> {
    this.#subscriptions.invoices.removeAllListeners()
    this.info('stop')
    return this
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

    const balance = await this.#walletGrpc.getBalance()
    return balance.availableBalance.toBigInt();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Asset Management
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Tari only supports XTM as of this writing. So this method merely
   * validates that the asset is XTM on the Tari chain, with the contract
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

  /**
   * Creates an invoice
   * @param {Party} party The party that will pay the invoice
   * @returns {Promise<Party>} The updated party instance
   */
  async createInvoice(party: Party): Promise<Party> {
    try {
      if (!party.isSecretSeeker) {
        throw new Error('Expected party to be the secret-seeker!')
      }
      // Create the atomic swap transaction
      const recipient = {
        address: party.swap.secretHolder.portalAddress,
        amount: Long.fromNumber(Number(party.amount)),
        feePerGram: Long.fromNumber(1), // TODO: Make this configurable
        paymentType: PaymentRecipient_PaymentType.STANDARD_MIMBLEWIMBLE,
        paymentId: Buffer.from(party.swap.secretHash.slice(2), 'hex')
      };

      const result = await this.#walletGrpc.sendShaAtomicSwap({ recipient });

      if (!result.isSuccess) {
        throw new Error(`Failed to create atomic swap: ${result.failureMessage}`);
      }

      party.invoice = result.transactionId.toString();

      // Store the pre-image for later use
      this.#subscriptions.payments[result.transactionId.toString()] = {
        preImage: result.preImage,
        outputHash: result.outputHash
      };

      return party;

    } catch (error) {
      const err = parseTariError(error, { party })
      this.error('createInvoice', error)
      throw error
    }

  }

  async payInvoice(party: Party): Promise<Party> {
    try {
      if (!party.isSecretSeeker) {
        throw new Error('Only the secret seeker can pay the invoice!');
      }

      // The payment is already part of the atomic swap transaction
      // We just need to wait for it to be confirmed
      await this.#waitForConfirmation(party.invoice!);

      return party;
    } catch (e: any) {
      const err = parseTariError(e, { party });
      this.error('payInvoice', err);
      throw err;
    }
  }

  async validateReceipt(party: Party): Promise<Party> {
    throw new NativeChainError('not implemented!', 'ENotImplemented', {
      party,
      swap: party.swap,
    })
  }

  async settleInvoice(party: Party, secret: Buffer): Promise<Party> {
    try {
      const payment = this.#subscriptions.payments[party.invoice!];
      if (!payment) {
        throw new Error('Payment not found!');
      }

      const claimRequest = {
        output: payment.outputHash,
        preImage: payment.preImage,
        feePerGram: Long.fromNumber(1), // TODO: Make fee configurable
      };
      // Claim the atomic swap with the secret
      const result = await this.#walletGrpc.claimShaAtomicSwap(
        claimRequest
      );

      if (!result.results?.isSuccess) {
        throw new Error(`Failed to claim atomic swap: ${result.results?.failureMessage}`);
      }

      // Wait for the claim to be confirmed
      await this.#waitForConfirmation(result.results.transactionId.toString());

      return party;
    } catch (e: any) {
      const err = parseTariError(e, { party });
      this.error('settleInvoice', err);
      throw err;
    }
  }


  #onTransactionEvent(event: TransactionEventResponse, party: Party) {
    if (event.transaction?.status === 'TRANSACTION_STATUS_MINED_CONFIRMED') {
      if (party.isSecretSeeker) {
        this.emitWithDelay('swapSeekerPaid', {
          id: party.swap.id,
          state: SwapState.SeekerPaid,
          secretSeeker: { receipt: event.transaction?.txId },
        });
      } else if (party.isSecretHolder) {
        this.emitWithDelay('swapHolderSettled', {
          id: party.swap.id,
          state: SwapState.HolderSettled,
          secret: Buffer.from(event.transaction?.paymentId),
        });
      }
    }
  }


  async #waitForConfirmation(txId: string): Promise<void> {

    // @TODO Add a timeout
    const stream = await this.#walletGrpc.streamTransactionEvents(
      () => {
        // Do nothing
      },
      (error: Error) => {
        throw error;
      }
    );

    stream.on('data', (event: TransactionEventResponse) => {
      if (event.transaction?.txId === txId) {
        switch (event.transaction.status) {
          case 'TRANSACTION_STATUS_MINED_CONFIRMED':
            return true;
          case 'TRANSACTION_STATUS_REJECTED':
            throw new Error(`Transaction was rejected: ${txId}`);
          case 'TRANSACTION_STATUS_NOT_FOUND':
            throw new Error(`Transaction not found: ${txId}`);
        }
        // Close the stream
        stream.cancel();
      }
    });

  }


}


/**
 * Parses a tari module error into a AssetChainError instance
 * @param e The tari error to parse
 * @param ctx Optional contextual information to include in the error
 * @returns {NativeChainError}
 */
function parseTariError(e: any, ctx?: object): NativeChainError {
  if (Array.isArray(e)) {
    const [, errorCode] = e
    const message = errorCode.replace(/([A-Z])/g, ' $1').trim()
    const code = `E${errorCode}`
    return new NativeChainError(message, code, ctx)
  }

  return NativeChainError.Unexpected(ctx, e)
}
