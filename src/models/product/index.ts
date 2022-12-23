import { Schema, model, Document } from 'mongoose';

/*********************TYPE & INTERFACE*****************************/

export enum ProductSort {
  price_asc = 'PRICE_ASC',
  price_des = 'PRICE_DES',
  name_asc = 'NAME_ASC',
  name_des = 'NAME_DES',
}

export type RatingType = {
  rate: number;
  num_of_rate: number;
};

export type ReviewType = {
  user_id: string;
  username: string;
  email: string;
  phone?: string;
};

export type ProductType = {
  img: string;
  gallery: string[];
  title: string;
  description?: string;
  category: string;
  brand: string;
  rating?: RatingType;
  review?: ReviewType;
  price: number;
  sku: string;
  storage_quantity: number;
  colors: string[];
};

export type ProductTypeModel = {} & ProductType & Document;

/*******************************SCHEMA*****************************/

export const Rating = {
  rate: Number,
  num_of_rate: Number,
};

export const Review = {
  user_id: String,
  username: String,
  email: String,
  phone: String,
};

const productSchema = new Schema({
  img: { type: String, required: true },
  gallery: { type: [String], default: [] },
  title: { type: String, required: true },
  description: String,
  category: { type: String, required: true },
  brand: { type: String, required: true },
  rating: Rating,
  review: [Review],
  price: { type: Number, required: true },
  sku: { type: String, required: true },
  storage_quantity: { type: Number, default: 0 },
  colors: { type: [String], default: [] },
});

export default model<ProductTypeModel>('Product', productSchema);
