import * as grpc from '@grpc/grpc-js'
import {
    UnauthorizedError,
    ServiceUnavailableError,
    ForbiddenError,
    NotFoundError,
} from '@//application/errors/index.js'

export function mapGrpcError(err: any): never {
    switch (err.code) {
        case grpc.status.UNAUTHENTICATED:
            throw new UnauthorizedError('Invalid credentials')

        case grpc.status.PERMISSION_DENIED:
            throw new ForbiddenError('Permission denied')

        case grpc.status.NOT_FOUND:
            throw new NotFoundError('Resource not found')

        case grpc.status.UNAVAILABLE:
            throw new ServiceUnavailableError('Service unavailable')

        default:
            throw new ServiceUnavailableError('Unknown service error')
    }
}
