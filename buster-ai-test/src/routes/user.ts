import { Router } from 'express';
import { addCredit, getUser } from '../controllers/user';

export const userRouter = Router();

userRouter.get('/', getUser);
userRouter.post('/credit', addCredit);
