import { NextFunction, Request, Response } from "express";
import { getBookByIdService } from "../services/getBookByIdService";

export const getBookById =async (
  req: Request<{id: string}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const book = await getBookByIdService(req.params.id);
    res.status(200).json({data:book})
  } catch (error) {
    next(error);
  }
}