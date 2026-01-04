import type { AuthService } from '@//application/ports/AuthService.js';
import { AuthGrpcClient } from '@//interfaces/grpc/clients/AuthGrpcClient.js';

export class AuthGrpcService implements AuthService{
    constructor(
        private readonly client: AuthGrpcClient
    ){}

    async login(data: any): Promise<any>{
        return this.client.login(data)
    };
    
    async register(data: any): Promise<any> {
        return this.client.register(data)
    };
}