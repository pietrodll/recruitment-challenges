import { ErrorRequestHandler } from 'express';
import { createInternalServerError } from '../utils/errors';

export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
    let errorToSend = err;

    if (!err.status) {
        // it's not an HTTP error, return 500 internal server error
        errorToSend = createInternalServerError();
        console.log(err);
    }

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(errorToSend.status || 500);
    res.send(errorToSend);
};
