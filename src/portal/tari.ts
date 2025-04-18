import { TariWalletGrpcClient } from "../lib";
import { NativeChain, NativeChainError } from "./native_chain";
import { Asset } from "./asset";
import { Party, SwapState } from "./swap";
import { Liquidity, LiquidityProps } from "./liquidity";
import { PaymentRecipient_PaymentType, TransactionEventResponse, TransferRequest, TransferResponse } from "../client/wallet";
import Long from "long";
import { randomSecret, sha256 } from "./crypto";
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
      this.#nodePubKey = address.oneSidedAddressBase58;
      this.debug('start.nodePubKey', this.#nodePubKey)
    } catch (error) {
      this.error('start.error', error)
      throw error
    }

    // subscribe to all transactions
    try {
      const streamPromise = this.#walletGrpc.streamTransactionEvents(
        this.#onInvoiceUpdated.bind(this),
        (error: Error) => {
          this.error('transaction.stream.error', error);
          this.emit('error', error);
        }
      );
      
      streamPromise.then(stream => {
        this.#subscriptions.transactions = stream;
      });
      
      this.#subscriptions.payments = {}
    } catch (e) {
      const err = parseTariError(e)
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
    if (this.#subscriptions.transactions) {
      this.#subscriptions.transactions.cancel();
    }
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

    // The Tari wallet does not support BigInts, forcing casting to Number.
    // This check ensures we don't lose precision when casting.
    const { nativeAmount } = liquidity
    if (nativeAmount <= 0 || nativeAmount > Number.MAX_SAFE_INTEGER) {
      throw NativeChainError.InvalidAmount(nativeAmount)
    }

    return new Promise((resolve, reject) => {
      try {
        const preimage = randomSecret(32)
        const id = sha256(preimage).slice(2) // drop the leading 0x for Tari
        const secret = preimage.toString('hex')

        // NOTE: shadow's incoming argument, liquidity, to create a new instance
        // with a unique id
        liquidity = new Liquidity({ ...liquidity, id: `0x${id}` })

        const request: TransferRequest = {
          recipients: [{
            address: liquidity.nativeAddress, // Use the provided address for deposit
            amount: Long.fromNumber(Number(liquidity.nativeAmount)), // checked to be in safe range
            feePerGram: Long.fromNumber(1), // TODO: Make this configurable
            paymentType: PaymentRecipient_PaymentType.STANDARD_MIMBLEWIMBLE,
            paymentId: Buffer.from(id, 'hex')
          }]
        };

        this.debug('deposit.starting', {
          request,
          lnd: { address: this.address },
        })

        // Send the transfer and wait for confirmation
        this.#walletGrpc.transfer(request)
          .then(async (response: TransferResponse) => {
            const result = response.results[0];
            if (!result.isSuccess) {
              throw new Error(`Failed to send transfer: ${result.failureMessage}`);
            }

            // Wait for the transaction to be confirmed
            await this.#waitForConfirmation(result.transactionId.toString());

            // Store the payment details for later use
            this.#subscriptions.payments[result.transactionId.toString()] = {
              preImage: secret,
              outputHash: result.transactionId.toString()
            };

            liquidity.nativeReceipt = result.transactionId.toString();
            resolve(liquidity);
          })
          .catch((e) => {
            const err = parseTariError(e, { liquidity });
            reject(err);
          });
      } catch (e) {
        const err = parseTariError(e, { liquidity });
        reject(err);
      }
    });
  }

  /**
   * Withdraws the specified amount of the specified asset
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

    // The Tari wallet does not support BigInts, forcing casting to Number.
    // This check ensures we don't lose precision when casting.
    const { nativeAmount } = liquidity
    if (nativeAmount >= 0 || nativeAmount < Number.MIN_SAFE_INTEGER) {
      throw NativeChainError.InvalidAmount(nativeAmount)
    }

    return new Promise((resolve, reject) => {
      try {
        const preimage = randomSecret(32)
        const id = sha256(preimage).slice(2) // drop the leading 0x for Tari
        const secret = preimage.toString('hex')

        // NOTE: shadow's incoming argument, liquidity, to create a new instance
        // with a unique id
        liquidity = new Liquidity({ ...liquidity, id: `0x${id}` })

        const request: TransferRequest = {
          recipients: [{
            address: liquidity.nativeAddress,
            amount: Long.fromNumber(Number(-liquidity.nativeAmount)), // Convert negative amount to positive
            feePerGram: Long.fromNumber(1), // TODO: Make this configurable
            paymentType: PaymentRecipient_PaymentType.STANDARD_MIMBLEWIMBLE,
            paymentId: Buffer.from(id, 'hex')
          }]
        };

        this.debug('withdraw.starting', {
          request,
          lnd: { address: this.address },
        })

        // Send the transfer and wait for confirmation
        this.#walletGrpc.transfer(request)
          .then(async (response: TransferResponse) => {
            const result = response.results[0];
            if (!result.isSuccess) {
              throw new Error(`Failed to send transfer: ${result.failureMessage}`);
            }

            // Wait for the transaction to be confirmed
            await this.#waitForConfirmation(result.transactionId.toString());

            // Store the payment details for later use
            this.#subscriptions.payments[result.transactionId.toString()] = {
              preImage: secret,
              outputHash: result.transactionId.toString()
            };

            liquidity.nativeReceipt = result.transactionId.toString();
            resolve(liquidity);
          })
          .catch((e) => {
            const err = parseTariError(e, { liquidity });
            reject(err);
          });
      } catch (e) {
        const err = parseTariError(e, { liquidity });
        reject(err);
      }
    });
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

  #onInvoiceUpdated(event: TransactionEventResponse) {
    try {
      if (!event.transaction) return;

      const txId = event.transaction.txId;
      const payment = this.#subscriptions.payments[txId];
      if (!payment) return;

      switch (event.transaction.status) {
        case 'TRANSACTION_STATUS_MINED_CONFIRMED':
          // Extract the liquidity message from the transaction
          const paymentId = Buffer.from(event.transaction.paymentId).toString('hex');
          const json = Buffer.from(paymentId, 'hex').toString('utf8');
          this.debug('onInvoiceUpdated.json', { json });

          let obj: LiquidityProps | null = null;
          try {
            obj = JSON.parse(json);
          } catch (e: any) {
            this.error('onInvoiceUpdated.json.parse', e, json);
            throw NativeChainError.InvalidLiquidity(null, event);
          }

          if (!obj) {
            throw new Error("Invalid liquidity object");
          }

          const liquidity = new Liquidity(obj);
          this.debug('onInvoiceUpdated.liquidity', { liquidity });

          // log and emit the event
          if (liquidity.isDeposit) {
            this.emitWithDelay('deposit', liquidity);
          } else if (liquidity.isWithdrawal) {
            this.emitWithDelay('withdraw', liquidity);
          } else {
            throw NativeChainError.InvalidLiquidity(liquidity, event);
          }
          break;
      }
    } catch (err) {
      this.error('onInvoiceUpdated', err, event);
      this.emit('error', err, event);
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

  async #waitForConfirmation(txId: string, timeoutMs: number = 30000): Promise<void> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        streamPromise.then(stream => stream.cancel());
        reject(new Error(`Transaction confirmation timed out after ${timeoutMs}ms`));
      }, timeoutMs);

      const streamPromise = this.#walletGrpc.streamTransactionEvents(
        () => {
          // Do nothing on data
        },
        (error: Error) => {
          clearTimeout(timeout);
          reject(error);
        }
      );

      streamPromise.then(stream => {
        stream.on('data', (event: TransactionEventResponse) => {
          if (event.transaction?.txId === txId) {
            switch (event.transaction.status) {
              case 'TRANSACTION_STATUS_MINED_CONFIRMED':
                clearTimeout(timeout);
                stream.cancel();
                resolve();
                break;
              case 'TRANSACTION_STATUS_REJECTED':
                clearTimeout(timeout);
                stream.cancel();
                reject(new Error(`Transaction was rejected: ${txId}`));
                break;
              case 'TRANSACTION_STATUS_NOT_FOUND':
                clearTimeout(timeout);
                stream.cancel();
                reject(new Error(`Transaction not found: ${txId}`));
                break;
            }
          }
        });
      });
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
  if (e instanceof Error) {
    return NativeChainError.Unexpected(ctx, e);
  }

  if (Array.isArray(e)) {
    const [, errorCode] = e;
    const message = errorCode.replace(/([A-Z])/g, ' $1').trim();
    const code = `E${errorCode}`;
    return new NativeChainError(message, code, ctx);
  }

  return NativeChainError.Unexpected(ctx, e);
}
