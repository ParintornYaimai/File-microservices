auth-service/
├─ src/
│  ├─ domain/
│  │  ├─ entities/
│  │  │  └─ User.ts
│  │  └─ value-objects/
│  │     ├─ Email.ts
│  │     └─ Password.ts
│  │
│  ├─ application/
│  │  ├─ use-cases/
│  │  │  ├─ RegisterUser.ts
│  │  │  └─ LoginUser.ts
│  │  ├─ ports/
│  │  │  ├─ UserRepository.ts
│  │  │  ├─ TokenService.ts
│  │  │  └─ PasswordHasher.ts
│  │  └─ dtos/
│  │     ├─ Login.dto.ts
│  │     └─ Register.dto.ts
│  │
│  ├─ infrastructure/
│  │  ├─ database/
│  │  │  ├─ mongoose/
│  │  │  │  ├─ connection.ts
│  │  │  │  └─ UserModel.ts
│  │  │  └─ MongoUserRepository.ts
│  │  │
│  │  ├─ jwt/
│  │  │  └─ JwtTokenService.ts
│  │  │
│  │  ├─ security/
│  │  │  └─ BcryptPasswordHasher.ts
│  │  │
│  │  └─ grpc/
│  │     ├─ proto/
│  │     │  └─ auth.proto
│  │     └─ AuthGrpcServer.ts
│  │
│  ├─ interfaces/
│  │  ├─ http/
│  │  │  ├─ server.ts
│  │  │  ├─ routes.ts
│  │  │  └─ AuthController.ts
│  │  │
│  │  └─ grpc/
│  │     └─ AuthGrpcHandler.ts
│  │
│  ├─ shared/
│  │  └─ errors/
│  │     ├─ BaseError.ts
│  │     ├─ ValidationError.ts
│  │     ├─ UnauthorizedError.ts
│  │     └─ NotFoundError.ts
│  │
│  ├─ container.ts
│  └─ index.ts
│
├─ tests/
│  ├─ unit/
│  │  ├─ domain/
│  │  │  └─ Email.test.ts
│  │  └─ application/
│  │     ├─ LoginUser.test.ts
│  │     └─ RegisterUser.test.ts
│  │
│  └─ integration/
│     └─ http.auth.test.ts
│
├─ .env.example
├─ .gitignore
├─ package.json
├─ tsconfig.json
└─ README.md
