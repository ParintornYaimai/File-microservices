file-service/
│
├─ src/
│   ├─ domain/            
│   │   └─ entities/
│   │       └─ File.ts          # entity หลักของไฟล์
│   │
│   ├─ use-cases/
│   │   ├─ UploadFile.ts        # logic อัปโหลดไฟล์
│   │   └─ GetFile.ts           # logic ดึงไฟล์
│   │
│   ├─ infrastructure/
│   │   ├─ storage/
│   │   │   └─ LocalFileStorage.ts   # implement การเก็บไฟล์ (local หรือ cloud)
│   │   ├─ grpc/
│   │   │   ├─ proto/
│   │   │   │   └─ file.proto
│   │   │   └─ FileGrpcServer.ts
│   │   └─ db/
│   │       └─ FileRepository.ts    # ถ้ามี DB เก็บ metadata
│   │
│   ├─ interfaces/
│   │   ├─ http/
│   │   │   ├─ FileController.ts
│   │   │   └─ routes.ts
│   │   └─ grpc/
│   │       └─ FileGrpcHandler.ts
│   │
│   └─ shared/
│       └─ errors/
│           └─ FileError.ts
│
├─ tests/
├─ package.json
├─ tsconfig.json
└─ index.ts                # entry point
