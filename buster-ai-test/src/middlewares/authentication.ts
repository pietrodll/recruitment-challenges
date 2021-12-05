import { RequestHandler } from 'express';
import { AuthService } from '../services/authentication';
import { createAuthorizationError } from '../utils/errors';

export const authentication: RequestHandler = async (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization && authorization.match(/Bearer (?<token>.*)/)?.groups?.token;

    if (!token) {
        next(createAuthorizationError('No token provided'));
        return;
    }

    try {
        const uid = AuthService.getInstance().verifyToken(token);
        res.locals.uid = uid;
        next();
    } catch (e) {
        next(createAuthorizationError('An error happened'));
    }
};
