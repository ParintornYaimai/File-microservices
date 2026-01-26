import type { FastifyRequest, FastifyReply } from "fastify";
import { AuthUseCase } from "@//application/use-cases/AuthService.js";
import { AuthPresenter } from "../presenters/authPresenter.js";
import { mapLoginRequest, mapRegisterRequest} from "../mappers/auth.mapper.js";

export class AuthController {
    constructor(private authUseCase: AuthUseCase){}

    login = async(req: FastifyRequest, reply: FastifyReply)=>{
        const dto = mapLoginRequest(req);
        const result = await this.authUseCase.login(dto);
        reply
            .setCookie('accessToken', result.refreshToken, {
                httpOnly: true,
                secure: false, 
                sameSite: 'lax',
                path: '/',
                maxAge: 30 * 60, 
            })
        .send({ success: true, data: AuthPresenter.login(result) });
    };

    register = async(req: FastifyRequest, reply: FastifyReply)=>{
        const registerDto = mapRegisterRequest(req);
        await this.authUseCase.register(registerDto);
        reply.send({ success: true });
    }
}