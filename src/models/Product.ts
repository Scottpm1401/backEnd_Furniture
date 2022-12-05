import { Schema, model, Document } from 'mongoose';

/*********************TYPE & INTERFACE*****************************/

export type ProductType = {
  img: string;
  gallery: string[];
  title: string;
  description?: string;
  category: string;
  brand: string;
  rating?: number;
  review?: number;
  price: number;
  sku: string;
  storage_quantity: number;
  shipping?: number;
  colors: string[];
};

export type ProductTypeModel = {} & ProductType & Document;

/*******************************SCHEMA*****************************/
const productSchema = new Schema({
  img: { type: String, required: true },
  gallery: { type: [String], default: [] },
  title: { type: String, required: true },
  description: String,
  category: { type: String, required: true },
  brand: { type: String, required: true },
  rating: Number,
  review: Number,
  price: { type: Number, required: true },
  sku: { type: String, required: true },
  storage_quantity: { type: Number, default: 0 },
  shipping: Number,
  colors: { type: [String], default: [] },
});

export default model<ProductTypeModel>('Product', productSchema);
