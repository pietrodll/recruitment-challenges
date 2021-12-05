import * as path from 'path';
import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';

import { authRouter } from './routes/auth';
import { fibonacciRouter } from './routes/fibonacci';
import { userRouter } from './routes/user';

import { authentication } from './middlewares/authentication';
import { errorHandler } from './middlewares/error-handler';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/', express.static(path.join(__dirname, 'static')));

app.use('/api/auth', authRouter);

app.use(authentication);

app.use('/api/user', userRouter);
app.use('/api/fibonacci', fibonacciRouter);

app.use(errorHandler);

export { app };
