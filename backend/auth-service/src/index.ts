import { buildAuthGrcpServer } from "./infrastructure/grpc/authGrpcServer.js";
// import { createServer } from "./interfaces/http/server.js"; // optional (health)

async function bootstrap() {
    const grpcPort = Number(process.env.GRPC_PORT ?? 3001);
    const grpcHost = process.env.GRPC_HOST ?? "0.0.0.0";
    const grpcAddress = `${grpcHost}:${grpcPort}`;

    await buildAuthGrcpServer(grpcAddress);
    console.log(`[gRPC] AuthService listening on ${grpcAddress}`);

    // if (process.env.ENABLE_HTTP === "true") {
    //     const http = createServer();
    //     const httpPort = Number(process.env.HTTP_PORT ?? 3101);
    //     const httpHost = process.env.HTTP_HOST ?? "0.0.0.0";
    //     await http.listen({ port: httpPort, host: httpHost });
    //     console.log(`[HTTP] listening on http://${httpHost}:${httpPort}`);
    // }
}

bootstrap().catch((err) => {
    console.error(err);
    process.exit(1);
});
