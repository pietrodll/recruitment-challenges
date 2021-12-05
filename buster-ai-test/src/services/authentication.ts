import * as jwt from 'jsonwebtoken';
import { User, userModel } from '../models/user';
import { createBadRequestError } from '../utils/errors';

type TokenPayload = {
    uid: string;
};

export class AuthService {
    private static instance?: AuthService;
    private privateKey: string;
    private expiration = 60 * 60;

    private constructor(privateKey: string) {
        this.privateKey = privateKey;
    }

    public static getInstance(): AuthService {
        if (!this.instance) {
            this.instance = new AuthService(process.env.AUTH_PRIVATE_KEY!)
        }

        return this.instance;
    }

    public verifyToken(token: string): string {
        const { uid } = jwt.verify(token, this.privateKey) as TokenPayload;
        return uid;
    }

    public generateToken(uid: string): string {
        const token = jwt.sign({ uid }, this.privateKey, { expiresIn: this.expiration });
        return token;
    }

    public async createUser(email: string, password: string): Promise<string> {
        const uid = await userModel.create(new User({ email, pwdHash: password }));
        return this.generateToken(uid);
    }

    public async signInUser(email: string, password: string): Promise<string> {
        const user = await userModel.getByEmail(email);
        
        if (user.pwdHash !== password) {
            throw createBadRequestError('Wrong email or password');
        }
        
        return this.generateToken(user.id);
    }
}
