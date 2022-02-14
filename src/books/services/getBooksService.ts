import { BookModel } from "../entity/models/bookModel";
import { IBook } from "../entity/types/BookInterface";

export const getBooksService = async (): Promise<IBook[]> => {
  const books = await BookModel.find({});
  return books;
}