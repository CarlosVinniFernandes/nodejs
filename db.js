<<<<<<< HEAD
import 'dotenv/config';
import postgres from 'postgres';
import { neon } from '@neondatabase/serverless';

=======
import 'dotenv/config';
import postgres from 'postgres';
import { neon } from '@neondatabase/serverless';

>>>>>>> e37509b (Api Node com Postgres)
export const sql = neon(process.env.DATABASE_URL);