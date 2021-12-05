import { RequestHandler } from 'express';
import { AuthService } from '../services/authentication';
import { createBadRequestError } from '../utils/errors';

export const signup: RequestHandler = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            next(createBadRequestError('Missing email or password'));
            return;
        }

        const token = await AuthService.getInstance().createUser(
            email,
            password
        );

        res.send({ token });
    } catch (e) {
        next(e);
    }
};

export const login: RequestHandler = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            next(createBadRequestError('Missing email or password'));
            return;
        }

        const token = await AuthService.getInstance().signInUser(
            email,
            password
        );

        res.send({ token });
    } catch (e) {
        next(e);
    }
};
