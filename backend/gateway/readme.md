gateway/
│
├─ src/
│   ├─ interfaces/                 # Interface Adapters
│   │   ├─ http/
│   │   │   ├─ routes/
│   │   │   │   ├─ auth.routes.ts
│   │   │   │   ├─ file.routes.ts
│   │   │   │   └─ index.ts
│   │   │   └─ controllers/
│   │   │       ├─ AuthController.ts
│   │   │       └─ FileController.ts
│   │   │
│   │   └─ grpc/
│   │       ├─ clients/
│   │       │   ├─ AuthGrpcClient.ts
│   │       │   └─ FileGrpcClient.ts
│   │
│   ├─ application/                # Use cases / orchestration
│   │   ├─ ports/                  # interfaces (สำคัญ!)
│   │   │   ├─ AuthService.ts
│   │   │   └─ FileService.ts
│   │   └─ use-cases/
│   │       ├─ AuthUseCase.ts
│   │       └─ FileUseCase.ts
│   │
│   ├─ infrastructure/             # Frameworks & Drivers
│   │   └─ grpc/
│   │       ├─ AuthGrpcService.ts
│   │       └─ FileGrpcService.ts
│   │
│   ├─ server.ts                   # fastify config
│   └─ container.ts                #Composition Root (DI)
│
├─ index.ts
└─ package.json
