import type { LoginDTO, LoginResponseDTO, RegisterDTO, RegisterResponseDTO } from "../dtos/AuthDTO.js";

export interface AuthService {
    login(data: LoginDTO):Promise<LoginResponseDTO>;
    register(data: RegisterDTO):Promise<RegisterResponseDTO>;
}
