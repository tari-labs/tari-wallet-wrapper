/**
 * @file A base class for all errors
 */

export default class BaseError extends Error {
  code: string
  ctx: object | undefined
  cause: Error | undefined

  constructor(message: string, code: string, ctx?: object, cause?: Error) {
    super(message)

    this.name = this.constructor.name
    this.code = code
    this.ctx = ctx
    this.cause = cause

    Error.captureStackTrace(this, this.constructor)
    Object.freeze(this)
  }

  // /**
  //  * Converts the error to a string
  //  * @returns {string} The error as a string
  //  */
  // toString(): string {
  //   let str = `${this.code}: ${this.message}`
  //   if (this.ctx) {
  //     str += `\n  ${JSON.stringify(this.ctx)}`
  //   }
  //   if (this.cause) {
  //     str += `\n  Caused by: ${this.cause}`
  //   }
  //   return str
  // }

  // /**
  //  * Returns the current state of the instance
  //  * @type {Object}
  //  */
  // [Symbol.for('nodejs.util.inspect.custom')](): string {
  //   return this.toString()
  // }

  /**
   * Captures an unexpected error that can't be handled (yet) by the application
   * @param [ctx] Context information for the error
   * @param [cause] An optional cause for the error
   * @returns {Error} An error object
   */
  static Unexpected(ctx?: object, cause?: Error): BaseError {
    return new BaseError('Unexpected error!', 'EUnexpected', ctx, cause)
  }
}
