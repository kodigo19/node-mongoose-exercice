import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { createResource } from "../../shared/factory/createResource";
import { BookModel } from "../entity/models/bookModel";
import { CreateBook, IBook } from "../entity/types/BookInterface";

export const addNewBookService = async (
  bookRequest: CreateBook
): Promise<IBook> => {
  try {
    const book = await createResource(BookModel)(bookRequest);
    return book as IBook;
  } catch (error:any) {
    throw new ApplicationError(
      403,
      error.message,
      error.code === 11000 ? 'db error' : ''
    );
  }
};