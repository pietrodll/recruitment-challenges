import { RequestHandler } from 'express';
import { userModel } from '../models/user';
import { createBadRequestError } from '../utils/errors';

export const getUser: RequestHandler = async (_, res, next) => {
    try {
        const user = await userModel.getById(res.locals.uid);

        res.status(200).send({ email: user.email, credit: user.credit });
    } catch (e) {
        next(e);
    }
};

export const addCredit: RequestHandler = async (req, res, next) => {
    try {
        const { amount } = req.body;

        if (!Number.isInteger(amount)) {
            next(
                createBadRequestError('The provided amount must be an integer')
            );
            return;
        }

        const credit = await userModel.addCredit(res.locals.uid, amount);

        res.status(200).send({ credit });
    } catch (e) {
        next(e);
    }
};
