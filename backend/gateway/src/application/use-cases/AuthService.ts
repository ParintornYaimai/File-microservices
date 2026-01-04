import type { AuthService } from "../ports/AuthService.js";

export class AuthUseCase {
    constructor(private authService: AuthService){}

    login(data: any){
        return this.authService.login(data);
    }

    register(data: any){
        return this.authService.register(data);
    }
}