import { model } from "mongoose";
import { BookSchema } from "../schemas/bookSchema";
import { IBook } from "../types/BookInterface";

export const BookModel = model<IBook>('Book', BookSchema);