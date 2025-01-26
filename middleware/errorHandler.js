import { CustomHttpError } from '../errors/customError.js'

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomHttpError) {
    return res.status(err.status).json({ msg: err.message })
  }
  return res
    .status(500)
    .json({ msg: 'Something went wrong. Please try again later' })
}

export default errorHandler
