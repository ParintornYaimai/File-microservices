import Fastify from 'fastify';
import { randomUUID } from 'node:crypto';

// import authRoutes from './interfaces/http/routes/authRoutes.js';
// import fileRoutes from './interfaces/http/routes/fileRoutes.js';


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

    // fastify.register(authRoutes);
    // fastify.register(fileRoutes);


    //health check
    fastify.get('/health',async(_req, res)=>{
        res.code(200);
        return {message: 'server is ok'};
    })

    return fastify;
}
