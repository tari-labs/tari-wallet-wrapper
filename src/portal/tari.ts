import { TariWalletGrpcClient } from "../lib";
import { NativeChain } from "./native_chain";

export type TariProps = {
    url: string;
}


export class Tari extends NativeChain {
    #walletGrpc: TariWalletGrpcClient;
    #nodePubKey: string | null = null
  #subscriptions: any = {}
  
    constructor(props: TariProps) {
      super({'id': 'tari'})
  
      this.#walletGrpc = new TariWalletGrpcClient(props.url);
  
    }
  
    get address() {
        return this.#walletGrpc.getAddress();
    }

    async start() {
        try {
            const walletInfo = await this.#walletGrpc.getWalletInfo()
            this.#nodePubKey = walletInfo.public_key
            this.debug('start.nodePubKey', this.#nodePubKey)
        } catch (error) {
            this.error('start.error', error)
            throw error
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
        return this;
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
  

  }