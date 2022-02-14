import { NextFunction, Request, Response } from "express"
import { getBooksService } from "../services/getBooksService"

export const getBooks =async (
  _req: Request,
  res: Response,
  next: NextFunction
):Promise<void> => {
  try {
    const books = await getBooksService();
    res.status(200).json({data:books});
  } catch (error) {
    next(error)
  }
}