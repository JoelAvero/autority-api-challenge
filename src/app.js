import 'dotenv/config';

import cors from 'cors';
import logger from 'morgan';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import * as configs from '@/config';
import { errorHandler, notFound } from '@/middlewares';

const app = express();

// Required middleware list
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(configs.corsConfig));
app.use(compression(configs.compressionConfig));
app.use(cookieParser());

// Load router paths
configs.routerConfig(app);

// catch 404 and forward to error handler
app.use(notFound);

// error handler
app.use(errorHandler);

export default app;
