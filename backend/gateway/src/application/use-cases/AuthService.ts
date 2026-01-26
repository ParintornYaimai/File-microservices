import type { LoginDTO, LoginResponseDTO, RegisterDTO, RegisterResponseDTO } from "../dtos/AuthDTO.js";
import type { AuthService } from "../ports/AuthService.js";

export class AuthUseCase {
    constructor(private authService: AuthService){}

    async login(data: LoginDTO):Promise<LoginResponseDTO>{

        const payload: LoginDTO = {
            ...data,
            email: data.email.trim().toLowerCase()
        }

        const result = await this.authService.login(payload); 
        return result 
    }

    async register(data: RegisterDTO):Promise<RegisterResponseDTO>{
        const result = await this.authService.register(data);

        return result;
    }
}