import * as process from 'process';

export const PORT = parseInt(process.env.PORT, 10) || 3000;

export const DB = {
  USERNAME: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
} as const;
