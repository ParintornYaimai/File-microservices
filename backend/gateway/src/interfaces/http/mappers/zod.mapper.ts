import { ZodError, type ZodTypeAny } from 'zod'
import { ValidationError } from '@//application/errors/index.js'

export function mapWithSchema<T>(
    schema: ZodTypeAny,
    input: unknown
): T {
    try {
        return schema.parse(input) as T
    } catch (err) {
        if (err instanceof ZodError) {
            throw new ValidationError(err.message)
        }
        throw err
    }
}
