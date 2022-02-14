import { ApplicationError } from "../../shared/customErrors/ApplicationError"
import { BookModel } from "../entity/models/bookModel";

export const deleteBookByIdService = async (
  id: String
): Promise<Number> => {
  try {
    console.log(id);
    const {deletedCount} = await BookModel.deleteOne({id});
    console.log(deletedCount);
    return deletedCount;
  } catch (error) {
    throw new ApplicationError(400, `error finding the Book ${id}`);
  }
}