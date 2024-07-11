import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
  DATABASE_URL: z.string(),
  API_BASE_URL: z.string(),
  WEB_BASE_URL: z.string(),
  PORT: z.coerce.number().default(3336),
})

export const env = envSchema.parse(process.env)