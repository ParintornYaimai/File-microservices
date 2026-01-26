// src/interfaces/http/mappers/auth.mapper.ts
import type { LoginDTO, RegisterDTO } from '@//application/dtos/AuthDTO.js'
import { loginSchema, registerSchema } from '../validators/login.schema.js'
import { mapWithSchema } from './zod.mapper.js'

export const mapLoginRequest = (body: unknown): LoginDTO => mapWithSchema<LoginDTO>(loginSchema, body)
export const mapRegisterRequest = (body: unknown): RegisterDTO => mapWithSchema<RegisterDTO>(registerSchema, body);