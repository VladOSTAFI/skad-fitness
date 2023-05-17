import * as process from 'process';

export const PORT = parseInt(process.env.PORT, 10) || 3000;

export const DB_URL = process.env.DB_URL;

export const TOKEN_EXPIRATION_TIME = process.env.TOKEN_EXPIRATION_TIME;

export const JWT_SECRET = process.env.JWT_SECRET;
