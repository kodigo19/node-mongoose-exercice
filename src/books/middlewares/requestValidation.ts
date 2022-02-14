import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";

export const bookValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.body.title) {
    next(new ApplicationError(400, 'title is required', 'validation'));
  }
  if (!req.body.overview) {
    next(new ApplicationError(400, 'overview is required', 'validation'));
  }
  if (!req.body.price) {
    next(new ApplicationError(400, 'price is required', 'validation'));
  }
  next();
};