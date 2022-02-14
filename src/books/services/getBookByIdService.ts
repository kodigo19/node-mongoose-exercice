import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { BookModel } from "../entity/models/bookModel";
import { IBook } from "../entity/types/BookInterface";

export const getBookByIdService =async (
  bookId: String
): Promise<IBook | null> => {
  try {
    const book = await BookModel.findById(bookId);
    return book;
  } catch (error: any) {
    throw new ApplicationError(400, `error finding the Book ${bookId}`);
  }
}