import { createServer } from './src/server.js';
import GracefulServer from '@gquittet/graceful-server';

async function bootstrap() {
    const fastify = createServer();

    const graceful = GracefulServer(fastify.server);

    graceful.on(GracefulServer.READY, () => {
        fastify.log.info('Server ready');
    });

    graceful.on(GracefulServer.SHUTTING_DOWN, () => {
        fastify.log.info('Shutting down...');
    });

    await fastify.listen({
        port: Number(process.env.PORT ?? 3000),
        host: '0.0.0.0',
    });

    graceful.setReady();
}

bootstrap();
