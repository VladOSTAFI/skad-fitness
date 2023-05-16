import * as process from 'process';

export const PORT = parseInt(process.env.PORT, 10) || 3000;

export const DB_URL = process.env.DB_URL; 

export const TIME = process.env.TIME;