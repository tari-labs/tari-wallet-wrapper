/**
 * @file A store for persisting data
 */

import { Level } from 'level'
import BaseClass from './base_class.ts'
import BaseError from './base_error.ts'
import { randomSecret, sha256 } from './crypto.ts'
import { Swap } from './swap.ts'

/**
 * Defines the properties for the Store class
 * @typedef {Object} StoreProps
 * @property {string} id The unique identifier for the store
 * @property {Level<string, any>} db The LevelDB instance for the store
 */
export type StoreProps = {
  id?: string
  db: Level<string, any>
}

/**
 * A class for managing a store using the Level interface
 * @extends BaseClass
 */
export class Store extends BaseClass {
  private db: Level<string, any>
  secrets: Secrets
  swaps: Swaps

  constructor(props: StoreProps) {
    super({ id: props.id || 'store' })

    this.db = props.db

    /**
     * Handles log events
     * @param level The level of the log
     * @param event The event that triggered the log
     * @param args Contextual arguments for the log
     */
    const onLog = (level: string, event: string, ...args: any[]) => {
      switch (level) {
        case 'debug':
          this.debug(event, ...args)
          break

        case 'info':
          this.info(event, ...args)
          break

        case 'warn':
          this.warn(event, ...args)
          break

        case 'error':
          this.error(event, ...args)
          break

        default:
          this.warn('Unknown log level', level, ...args)
      }
    }

    /**
     * Handles error events
     * @param error The error that occurred
     */
    const onError = (err: Error, ...args: any[]) => {
      console.log('unhandledError', err, ...args)
      process.exit(1)
    }

    this.secrets = new Secrets(this.db).on('log', onLog).on('error', onError)
    this.swaps = new Swaps(this.db).on('log', onLog).on('error', onError)
  }

  /**
   * Starts the store by opening the database connection
   * @returns {Promise<this>}
   */
  async start(): Promise<this> {
    await this.db.open()
    this.info('start')
    return this
  }

  /**
   * Stops the store by closing the database connection
   * @returns {Promise<this>}
   */
  async stop(): Promise<this> {
    await this.db.close()
    this.info('stop')
    return this
  }
}

/**
 * A class for managing secrets in the store
 * @extends {BaseClass}
 */
class Secrets extends BaseClass {
  private db

  constructor(db: Level<string, any>) {
    super({ id: 'secrets' })
    this.db = db.sublevel<string, Buffer>(this.id, {
      keyEncoding: 'utf-8',
      valueEncoding: 'buffer',
    })
  }

  /**
   * Creates a random secret and stores it under its hex-encoded hash
   * @returns {Promise<string>} The hex-encoded hash of the secret
   */
  async create(): Promise<string> {
    try {
      const secret = randomSecret(32)
      const secretHash = sha256(secret)
      await this.db.put(secretHash, secret)
      this.info('create', { secretHash, secret: `${secret.length} bytes` })
      return secretHash
    } catch (err) {
      this.error('create', err)
      throw err
    }
  }

  /**
   * Retrieves a secret from the store using its hash
   * @param secretHash The hash of the secret to retrieve
   * @returns {Promise<Buffer>} The secret
   */
  async retrieve(secretHash: string): Promise<Buffer> {
    const secret = await this.db.get(secretHash)
    if (secret == null) {
      const err = Error(`secret hash ${secretHash} not found!`)
      this.error('retrieve', err, { secretHash })
      throw err
    }

    this.info('retrieve', { secretHash, secret: `${secret.length} bytes` })
    return secret
  }

  /**
   * Deletes a secret from the store using its hash and returns the secret
   * @param secretHash The hash of the secret to delete
   * @returns {Promise<string>} The deleted secret
   */
  async delete(secretHash: string): Promise<Buffer> {
    const secret = await this.db.get(secretHash)
    if (secret == null) {
      const err = Error(`secret hash ${secretHash} not found!`)
      this.error('delete', err, { secretHash })
      throw err
    }

    await this.db.del(secretHash)
    this.info('delete', { secretHash, secret: `${secret.length} bytes` })
    return secret
  }
}

/**
 * A class for managing swaps in the store
 * @extends {BaseClass}
 */
class Swaps extends BaseClass {
  private db

  constructor(db: Level<string, any>) {
    super({ id: 'swaps' })
    this.db = db.sublevel<string, any>(this.id, {
      keyEncoding: 'utf-8',
      valueEncoding: 'json',
    })
  }

  /**
   * Retrieves a swap from the store using its ID
   * @param id The ID of the swap to retrieve
   * @returns {Promise<Swap>} The swap object
   */
  async get(id: string): Promise<Swap> {
    const obj = await this.db.get(id)
    if (obj == null) {
      const err = StoreError.NotFound(id, this.id)
      this.error('get', err)
      throw err
    }
    const swap = new Swap(obj)
    this.debug('get', { swap })
    return swap
  }

  /**
   * Saves a swap to the store
   * @param {Swap} swap The swap instance to save to the store
   * @returns {Promise<void>}
   */
  async put(swap: Swap): Promise<void> {
    await this.db.put(swap.id, swap)
    this.debug('put', { swap: swap.toJSON() })
  }
}

/**
 * A class for managing errors in the store
 * @extends {BaseError}
 */
export class StoreError extends BaseError {
  /**
   * Reports an invalid native chain selection
   * @param chain The native chain that was selected
   * @returns {SdkError} The wrapped Sdk error
   */
  static NotFound(id: string, store: string): StoreError {
    const msg = `Not found!`
    const code = 'ENotFound'
    return new StoreError(msg, code, { store, id })
  }
}
