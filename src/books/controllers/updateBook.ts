import { NextFunction, Request, Response } from "express";
import { BookModel } from "../entity/models/bookModel";
import { CreateBook } from "../entity/types/BookInterface";
import { updateBookByIdService } from "../services/updateBookByIdService";

export const updateBook =async (
  req: Request<{id: string},{},CreateBook>,
  res: Response,
  next: NextFunction
) => {
  const {title, overview, price, category } = req.body;
  const updatedBook = await updateBookByIdService(req.params.id, {
    title, overview,price, category
  })
  res.status(201).json({ data: updatedBook });
}