import express, { Application, ErrorRequestHandler, NextFunction, Request, Response } from "express";
import bookRouter from './books/routes/bookRoutes';

const app: Application = express();

app.use(express.json());

app.use(bookRouter);

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  console.log(err.statusCode);

  res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message, type: err.errorType });
});

export default app;