import Fastify from 'fastify';
import cors from '@fastify/cors'
import { randomUUID } from 'node:crypto';
import { authRoutes } from './interfaces/http/routes/authRoutes.js'
import { buildAuthController } from './container.js';
import { BaseError } from './application/errors/BaseError.js';


export function createServer() {
    const fastify = Fastify({
        logger: {
            level: process.env.LOG_LEVEL ?? 'debug',
            redact: ['headers.authorization'],
        },
        genReqId(req) {
            return (req.headers['request-id'] as string) ?? randomUUID();
        },
        routerOptions: {
            ignoreDuplicateSlashes: true,
        }
    });

    fastify.register(cors, {
        origin: [
            'http://localhost:3000',
        ],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })

    fastify.setErrorHandler((err, req, reply) => {
        if (err instanceof BaseError) {
            return reply.status(err.statusCode)
                .send({ code: err.code, message: err.message })
        }

        return reply
            .status(500)
            .send({ code: 'INTERNAL_ERROR', message: 'Internal Server Error' });
    })

    const authController = buildAuthController();
    fastify.register(async (app) => {
        await authRoutes(app, authController,)
    }, { prefix: '/auth' });


    //health check
    fastify.get('/health', async (_req, res) => {
        res.code(200);
        return { message: 'server is ok' };
    })

    return fastify;
}
