export class CustomHttpError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

export const createCustomHttpError = (message, statusCode) => {
  return new CustomHttpError(message, statusCode)
}
