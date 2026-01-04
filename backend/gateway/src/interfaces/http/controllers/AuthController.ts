import type { FastifyRequest, FastifyReply } from "fastify";
import { AuthUseCase } from "@//application/use-cases/AuthService.js";
import { AuthPresenter } from "../presenters/authPresenter.js";

export class AuthController {
    constructor(private authUseCase: AuthUseCase){}

    login = async(req: FastifyRequest, res: FastifyReply)=>{
        const result = await this.authUseCase.login(req.body);
        res.send({ success: true, data: AuthPresenter.login(result) });
    };

    register = async(req: FastifyRequest, res: FastifyReply)=>{
        const result = await this.authUseCase.register(req.body);
        res.send(result);
    };
}