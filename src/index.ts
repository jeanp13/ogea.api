import express = require('express');
// import * as express from 'express';
// import express from 'express';
import { Request, Response } from 'express';
import 'express-async-errors';
// import * as cors from 'cors';
import cors = require('cors');
// import cors from 'cors';
import { AppDataSource } from './data-source';
import config from './configuration/config';
import uploadConfig from './configuration/upload';
// import { Routes } from "./routes";
import routes from './routes';
import AppError from './errors/AppError';
// import AppError from "./errors/AppError";
// import auth from "./configuration/auth";
// import auth from "./middleware/auth";

import './providers';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);

app.use(
  (
    err: Error,
    request: Request,
    response: Response,
    _: express.NextFunction,
  ) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }
    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  },
);

app.listen(config.port, async () => {
  console.log(`API has started on port ${config.port}`);
  try {
    await AppDataSource.initialize();
    console.log('Database connected');
  } catch (error) {
    console.log('Database not connected');
  }
});
