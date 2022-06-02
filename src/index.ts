import * as express from 'express';
import { AppDataSource } from './data-source';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { Routes } from './routes';
import config from './configuration/config';
import uploadConfig from './configuration/upload';
// create express app
const app = express();
app.use(bodyParser.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));

// register express routes from defined application routes
Routes.forEach((route) => {
  (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
    const result = new (route.controller as any)()[route.action](req, res, next);
    if (result instanceof Promise) {
      result.then((result) =>
        result !== null && result !== undefined ? res.send(result) : undefined
      );
    } else if (result !== null && result !== undefined) {
      res.json(result);
    }
  });
});

// setup express app here
// ...

// start express server
app.listen(config.port, async () => {
  console.log(`API has started on port ${config.port}`);
  try {
    await AppDataSource.initialize();
    console.log('Database connected');
  } catch (error) {
    console.log('Database not connected');
  }
});
