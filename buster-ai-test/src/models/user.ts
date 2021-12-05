import { CREDIT_DECREMENT, INIT_CREDIT } from '../constants';
import { createForbiddenError } from '../utils/errors';
import { BaseModel, WithId } from './base';

interface UserInit {
    email: string;
    pwdHash: string;
}

interface DBUser {
    email: string;
    pwd_hash: string;
    credit: number;
}

export class User {
    public email: string;
    public pwdHash: string;
    public credit: number;

    constructor(init: UserInit & Partial<User>) {
        this.email = init.email;
        this.pwdHash = init.pwdHash;
        this.credit =
            typeof init.credit == 'number' ? init.credit : INIT_CREDIT;
    }

    public static fromDB(dbItem: DBUser): User {
        return new User({
            ...dbItem,
            pwdHash: dbItem.pwd_hash,
        });
    }
}

export class UserModel extends BaseModel<User, DBUser> {
    protected mapToJson(dbItem: WithId<DBUser>): WithId<User> {
        return {
            id: dbItem.id,
            ...User.fromDB(dbItem),
        };
    }

    protected table = 'users';

    protected tableStructure: Record<keyof User, keyof DBUser> = {
        email: 'email',
        pwdHash: 'pwd_hash',
        credit: 'credit',
    };

    public async getByEmail(email: string): Promise<WithId<User>> {
        const query = {
            name: 'get-user-by-email',
            text: `SELECT * FROM ${this.table} WHERE email = $1`,
            values: [email],
        };

        const [res] = await this.runQuery(query);
        return res;
    }

    public async useCredit(id: string): Promise<number> {
        const user = await this.getById(id);

        if (user.credit < CREDIT_DECREMENT) {
            throw createForbiddenError('Not enough credit');
        }

        const query = {
            name: 'decrement-user-credit',
            text: `UPDATE ${this.table} SET credit = credit - $1 WHERE id = $2 AND credit >= $1 RETURNING credit`,
            values: [CREDIT_DECREMENT, id],
        };

        const res = await this.runTransaction<{ credit: number }>(query);
        return res.rows[0].credit;
    }

    public async addCredit(id: string, value: number): Promise<number> {
        const query = {
            name: 'increment-user-credit',
            text: `UPDATE ${this.table} SET credit = credit + $1 WHERE id = $2 RETURNING credit`,
            values: [value, id],
        };

        const res = await this.runTransaction<{ credit: number }>(query);
        return res.rows[0].credit;
    }
}

export const userModel = new UserModel();
