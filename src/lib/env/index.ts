import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
	API_URL: z.string()
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
	throw new Error(`Error loading environment variables: ${_env.error.format()}`);
}

export const env = _env.data;
