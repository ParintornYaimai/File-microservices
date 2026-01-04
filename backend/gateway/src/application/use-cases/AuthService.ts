import type { AuthService } from "../ports/AuthService.js";

export class AuthUseCase {
    constructor(private authService: AuthService){}

    async login(data: any){
        return await this.authService.login(data);
    }

    async register(data: any){
        return await this.authService.register(data);
    }
}