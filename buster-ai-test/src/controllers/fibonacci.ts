import { RequestHandler } from 'express';
import { userModel } from '../models/user';
import { fibonacci } from '../services/fibonacci';
import { createBadRequestError } from '../utils/errors';

export const getFibonacciNumber: RequestHandler = async (req, res, next) => {
    const index = Number(req.query.index);

    if (!Number.isInteger(index)) {
        next(createBadRequestError('The provided index must be an integer'));
        return;
    }

    try {
        const creditLeft = await userModel.useCredit(res.locals.uid);
    
        const result = fibonacci(index);
    
        res.send({ result, creditLeft });
    } catch (e) {
        next(e);
    }
};
