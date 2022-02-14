import { Request, Response } from "express";
import {addNewBookService} from "../services/addNewBookService";

export const addNewBook = async (
  req: Request,
  res: Response
  ): Promise<void> => {
    const { title, overview, category, price } = req.body;
    try {
      const newBook = await addNewBookService({
        title,
        overview,
        category,
        price,
      })
      res.status(201).json({ data: newBook });
    } catch (error) {
      res.status(400).json({error: 'error adding new book'});
    }
    
}