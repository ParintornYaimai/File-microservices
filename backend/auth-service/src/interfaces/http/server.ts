// import Fastify from "fastify";
// import cors from "@fastify/cors";
// import { randomUUID } from "node:crypto";

// export function createServer() {
//     const fastify = Fastify({
//         logger: {
//             level: process.env.LOG_LEVEL ?? "debug",
//             redact: ["headers.authorization"],
//         },
//         genReqId(req) {
//             return (req.headers["request-id"] as string) ?? randomUUID();
//         },
//     });

//     fastify.register(cors, {
//         origin: ["http://localhost:3000"],
//         credentials: true,
//         methods: ["GET"],
//     });

//     fastify.get("/health", async () => {
//         return { message: "auth-service ok" };
//     });

//     return fastify;
// }
