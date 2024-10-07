/** @format */

import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './src/models',
  dialect: 'postgresql',
  dbCredentials: {
    url:
      process.env.DATABASE_URL! ||
      'postgresql://neondb_owner:zdZ9qE3kWaUm@ep-damp-poetry-a7ofxgk8.ap-southeast-2.aws.neon.tech/euroenterprises?sslmode=require',
  },
  verbose: true,
  strict: true,
});
