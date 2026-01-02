auth-service/
│
├─ src/
│   ├─ domain/             # Business logic ของระบบ
│   │   ├─ entities/       # ตัว object หลัก เช่น User.ts
│   │   └─ value-objects/  # value objects เช่น Email.ts, Password.ts
│   │
│   ├─ use-cases/          # กฎธุรกิจของแต่ละ action
│   │   ├─ RegisterUser.ts
│   │   └─ LoginUser.ts
│   │
│   ├─ infrastructure/     # การเชื่อมต่อระบบภายนอก
│   │   ├─ database/       # mongoose / postgres / mysql
│   │   │   └─ UserRepository.ts
│   │   ├─ grpc/           # grpc server/client
│   │   │   ├─ proto/      # .proto files
│   │   │   └─ AuthGrpcServer.ts
│   │   └─ jwt/            # token management
│   │
│   ├─ interfaces/         # การ expose service ออกไป
│   │   ├─ http/           # fastify route controllers
│   │   │   ├─ AuthController.ts
│   │   │   └─ routes.ts
│   │   └─ grpc/           # grpc handlers (implement use-case)
│   │
│   └─ shared/             # shared logic/util
│       └─ errors/
│
├─ tests/                  # unit / integration tests
├─ package.json
├─ tsconfig.json
└─ index.ts                # entry point
