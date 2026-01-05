// src/interfaces/http/mappers/auth.mapper.ts
import type { LoginDTO } from '@//application/dtos/AuthDTO.js'
import { loginSchema } from '../validators/login.schema.js'
import { mapWithSchema } from './zod.mapper.js'

export const mapLoginRequest = (body: unknown): LoginDTO => mapWithSchema<LoginDTO>(loginSchema, body)
