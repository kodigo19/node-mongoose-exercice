import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { BookModel } from "../entity/models/bookModel";
import { IBook, UpdateBook } from "../entity/types/BookInterface";

export const updateBookByIdService =async (
  _id: String,
  newBookInfo: UpdateBook,
): Promise<IBook | null> => {
  try {
    const book = await BookModel.findOneAndUpdate(_id,newBookInfo, {
      new: true
    });
    return book;
  } catch (error) {
    throw new ApplicationError(400,`error updating the Book ${_id}`);
  }
   
}