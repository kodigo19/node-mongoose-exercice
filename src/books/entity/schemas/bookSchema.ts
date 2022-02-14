import { Schema } from "mongoose";
import { IBook } from "../types/BookInterface";

export const BookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: [true, 'Book Title is required'],
  },
  overview: {
    type: String,
    required: [true, 'Overview is required'],
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  created_date: {
    type: Date,
    default: new Date,
  }
})