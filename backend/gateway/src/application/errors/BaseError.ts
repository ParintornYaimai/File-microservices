export abstract class BaseError extends Error{
    abstract readonly statusCode: number
    abstract readonly code: string

    constructor(message: string){
        super(message);
    }
}