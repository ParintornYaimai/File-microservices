import { AuthGrpcClient } from './interfaces/grpc/clients/AuthGrpcClient.js'
import { AuthGrpcService } from './infrastructure/grpc/AuthGrpcService.js'
import { AuthUseCase } from './application/use-cases/AuthService.js'
import { AuthController } from './interfaces/http/controllers/AuthController.js'

export function buildAuthController(){
    const grpcClient = new AuthGrpcClient();
    const authService = new AuthGrpcService(grpcClient)
    const authUseCase = new AuthUseCase(authService);

    return new AuthController(authUseCase);
}