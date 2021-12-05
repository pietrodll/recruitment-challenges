import { Pool, PoolClient, QueryConfig, QueryResult } from 'pg';
import { PoolManager } from '../services/pool';

export type WithId<T> = T & { id: string };

export abstract class BaseModel<T, U> {
    private pool: Pool;

    protected abstract table: string;

    protected abstract tableStructure: Record<keyof T, keyof U>;

    constructor() {
        this.pool = PoolManager.getInstance();
    }

    protected abstract mapToJson(dbItem: WithId<U>): WithId<T>;

    protected async runQuery(query: QueryConfig): Promise<WithId<T>[]> {
        const res = await this.pool.query(query);

        return res.rows.map(this.mapToJson);
    }

    protected async runRawQuery<R = any>(
        query: QueryConfig
    ): Promise<QueryResult<R>> {
        return this.pool.query(query);
    }

    protected getClient(): Promise<PoolClient> {
        return this.pool.connect();
    }

    protected async runTransaction<R>(
        query: QueryConfig
    ): Promise<QueryResult<R>> {
        const client = await this.getClient();

        try {
            await client.query('BEGIN');

            const res = await client.query<R>(query);

            await client.query('COMMIT');

            return res;
        } catch (e) {
            await client.query('ROLLBACK');

            throw e;
        } finally {
            client.release();
        }
    }

    public async getById(id: string): Promise<WithId<T>> {
        const query = {
            name: `get-${this.table}-by-id`,
            text: `SELECT * FROM ${this.table} WHERE id = $1 LIMIT 1`,
            values: [id],
        };

        const results = await this.runQuery(query);
        return results[0];
    }

    public async create(item: T): Promise<string> {
        const keys = Object.keys(this.tableStructure) as (keyof T)[];
        const tableKeys = keys.map(key => this.tableStructure[key]).join(', ');

        const query = {
            name: `create-${this.table}`,
            text: `INSERT INTO ${this.table} (${tableKeys}) VALUES(${keys
                .map((_, i) => `$${i + 1}`)
                .join(', ')}) RETURNING id`,
            values: keys.map(key => item[key]),
        };

        const res = await this.runTransaction<{ id: string }>(query);
        return res.rows[0].id;
    }
}
