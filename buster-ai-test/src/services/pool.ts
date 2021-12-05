import { Pool } from 'pg';

const POOL_CONFIG = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PWD
};

export class PoolManager {
    private static instance?: Pool;

    public static getInstance(): Pool {
        if (!this.instance) {
            this.instance = new Pool(POOL_CONFIG);
        }

        return this.instance;
    }
}
