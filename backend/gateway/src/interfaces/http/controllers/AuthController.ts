import type { FastifyRequest, FastifyReply } from "fastify";
import { AuthUseCase } from "@//application/use-cases/AuthService.js";

export class AuthController {
    constructor(private authUseCase: AuthUseCase){}

    login = async(req: FastifyRequest, res: FastifyReply)=>{
        const result = await this.authUseCase.login(req.body)
        res.send(result);
    };

    regis = async(req: FastifyRequest, res: FastifyReply)=>{
        const result = await this.authUseCase.register(req.body);
        res.send(result);
    };
}