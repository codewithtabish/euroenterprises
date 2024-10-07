/** @format */

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(
  process.env.DATABASE_URL! ||
    'postgresql://neondb_owner:zdZ9qE3kWaUm@ep-damp-poetry-a7ofxgk8.ap-southeast-2.aws.neon.tech/euroenterprises?sslmode=require'
);
export const db = drizzle(sql);
