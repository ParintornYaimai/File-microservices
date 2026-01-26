import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const registerSchema = z.object({
  firstname: z.string().min(6),
  lastname: z.string().min(6),
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .regex(/[a-z]/, "need to lower case min 1 char")
})