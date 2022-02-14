import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { deleteBookByIdService } from "../services/deleteBookByIdService";

export const deleteBook =async (
  req: Request<{id:string}>,
  res: Response,
  next: NextFunction
):Promise<void> => {
  try {
    const deletedBook = await deleteBookByIdService(req.params.id);
    if (deletedBook > 0) {
      res.status(200).json({data:[], message:'user deleted successfully'}); 
      console.log('book deleted successfully');
    }
    res.status(200).json({data:[], message:'No book founded'}); 
    console.log('No book founded');
  } catch (error: any) {
    next(new ApplicationError(400,error.message));
  }
}