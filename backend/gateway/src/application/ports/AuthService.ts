export interface AuthService {
    login(data:any):Promise<any>;
    register(data:any):Promise<any>;
}