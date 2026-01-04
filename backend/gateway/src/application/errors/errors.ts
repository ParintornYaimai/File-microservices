import { BaseError } from './BaseError.js'

export class UnauthorizedError extends BaseError {
  statusCode = 401
  code = 'UNAUTHORIZED'
}

export class ForbiddenError extends BaseError {
  statusCode = 403
  code = 'FORBIDDEN'
}

export class NotFoundError extends BaseError {
  statusCode = 404
  code = 'NOT_FOUND'
}

export class ValidationError extends BaseError {
  statusCode = 400
  code = 'VALIDATION_ERROR'
}

export class ServiceUnavailableError extends BaseError {
  statusCode = 503
  code = 'SERVICE_UNAVAILABLE'
}
