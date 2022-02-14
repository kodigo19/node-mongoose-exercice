import { Types } from "mongoose";

export interface IBook {
  id: BookIdType,
  title: string,
  overview: string,
  category: string,
  price: number,
  created_date: Date
}


export type BookIdType = {
  _id: Types.ObjectId;
};

export type CreateBook = Omit<IBook, 'created_date' | 'id'>;

export type UpdateBook = Omit<IBook, 'created_date' | 'id'>;