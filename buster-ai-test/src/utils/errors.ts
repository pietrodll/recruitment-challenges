import * as createError from 'http-errors';

// ─── HTTP ERRORS ────────────────────────────────────────────────────────────────

const errorFactory = (code: number) => (message?: string): createError.HttpError => (
    message ? createError(code, message) : createError(code)
);

export const createAuthorizationError = errorFactory(401);
export const createBadRequestError = errorFactory(400);
export const createForbiddenError = errorFactory(403);
export const createNotFoundError = errorFactory(404);
export const createInternalServerError = errorFactory(500);
