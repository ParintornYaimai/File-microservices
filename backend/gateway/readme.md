gateway/
│
├─ src/
│   ├─ interfaces/             # main layer ของ gateway
│   │   ├─ http/
│   │   │   ├─ routes/
│   │   │   │   ├─ authRoutes.ts
│   │   │   │   ├─ fileRoutes.ts
│   │   │   │   └─ index.ts
│   │   │   └─ controllers/
│   │   │       ├─ AuthController.ts
│   │   │       └─ FileController.ts
│   │   │
│   │   └─ grpc/
│   │       ├─ clients/
│   │       │   ├─ AuthGrpcClient.ts
│   │       │   └─ FileGrpcClient.ts
│   │       └─ proto/
│   │           ├─ auth.proto
│   │           └─ file.proto
│   │
│   ├─ use-cases/              # orchestrator logic (optional)
│   │   └─ GatewayUseCases.ts
│   │
│   └─ shared/
│       └─ utils/
│           └─ logger.ts
│
├─ package.json
├─ tsconfig.json
└─ index.ts