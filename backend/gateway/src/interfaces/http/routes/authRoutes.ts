import type { FastifyInstance } from "fastify";
import { AuthController } from "../controllers/AuthController.js";

export async function authRoutes(
    fastify: FastifyInstance,
    controllers: AuthController
) {
    fastify.post('/register', controllers.register);
    fastify.post('/login', controllers.login);
} 