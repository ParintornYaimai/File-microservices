import type { AuthService } from '@//application/ports/AuthService.js';
import { AuthGrpcClient } from '@//interfaces/grpc/clients/AuthGrpcClient.js';
import { mapGrpcError } from './GrpcErrorMapper.js';

export class AuthGrpcService implements AuthService{
    constructor(
        private readonly client: AuthGrpcClient
    ){}

    async login(data: any): Promise<any>{
        try {
            return await this.client.login(data)
        } catch (err: any) {
            mapGrpcError(err) 
        }
    };
    
    async register(data: any): Promise<any> {
        try{
            return await this.client.register(data)
        }catch(err: any){
           mapGrpcError(err) 
        }
    };
}