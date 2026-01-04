import Fastify from 'fastify';
import cors from '@fastify/cors'
import { randomUUID } from 'node:crypto';
import { authRoutes } from './interfaces/http/routes/authRoutes.js'
import { buildAuthController } from './container.js';


export function createServer() {
    const fastify = Fastify({
        logger: {
            level: process.env.LOG_LEVEL ?? 'debug',
            redact: ['headers.authorization'],
        },
        genReqId(req) {
            return (req.headers['request-id'] as string) ?? randomUUID();
        },
        ignoreDuplicateSlashes: true,
    });

    fastify.register(cors, {
        origin: [
            'http://localhost:3000',
        ],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })

    const authController = buildAuthController();
    fastify.register(async (app) => {
        await authRoutes(app, authController,)
    }, { prefix: '/auth' });

    // fastify.register(fileRoutes);


    //health check
    fastify.get('/health', async (_req, res) => {
        res.code(200);
        return { message: 'server is ok' };
    })

    return fastify;
}
