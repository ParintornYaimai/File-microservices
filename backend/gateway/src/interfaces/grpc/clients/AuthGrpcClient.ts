import type { LoginDTO, LoginResponseDTO, RegisterDTO, RegisterResponseDTO } from '@//application/dtos/AuthDTO.js'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PROTO_PATH = path.join(__dirname, '../proto/auth.proto')

const packageDef = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
})

const proto = grpc.loadPackageDefinition(packageDef) as any

export class AuthGrpcClient {
    private client: any

    constructor(
        address: string = 'localhost:3001' 
    ) {
        this.client = new proto.auth.AuthService(
            address,
            grpc.credentials.createInsecure()
        )
    }

    login(data: LoginDTO): Promise<LoginResponseDTO> {
        return new Promise((resolve, reject) => {
            this.client.Login(data, (err: any, res: any) => {
                if (err) return reject(err)
                resolve(res)
            })
        })
    }

    register(data: RegisterDTO): Promise<RegisterResponseDTO> {
        return new Promise((resolve, reject) => {
            this.client.Register(data, (err: any, res: any) => {
                if (err) return reject(err)
                resolve(res)
            })
        })
    }
}
