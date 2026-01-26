import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import { fileURLToPath } from "url";
import { buildAuthGrpcHandler } from "../../interfaces/grpc/authGrpcHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function buildAuthGrcpServer(address: string) {
    const PROTO_PATH = path.join(__dirname,"./proto/auth.proto")

    const packageDef = protoLoader.loadSync(PROTO_PATH,{
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true, 
        oneofs: true,
    })

    const proto = grpc.loadPackageDefinition(packageDef) as any;

    const server = new grpc.Server();

    const handler = buildAuthGrpcHandler()

    server.addService(proto.auth.AuthService.server, handler);

    await new Promise<void>((resolve, reject)=>{
        server.bindAsync(address, grpc.ServerCredentials.createInsecure(),(err)=>{
            if(err) return reject(err)
            // server.start();
            resolve();
        })
    })

    return server;
}