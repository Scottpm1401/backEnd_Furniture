import { model, Schema } from 'mongoose';
import { ProductCartType } from '../cart';
import { AddressType } from '../user';

/*********************TYPE & INTERFACE*****************************/
export type PurchaseType = {
  status: PurchaseStatus;
  total_bill: number;
  payment_method: string;
  package_date: string;
  arrive_date?: string;
  billingDetails: BillingDetailsType;
  products: PurchaseProduct[];
  id?: string;
  user_id: string;
  createdAt: Date;
  updatedAt: Date;
};

export enum PurchaseStatus {
  package = 'PACKAGE',
  shipping = 'SHIPPING',
  delivered = 'DELIVERED',
}

export type BillingDetailsType = {
  name: string;
  email: string;
  phone: string;
  address: AddressType;
};

export type PurchaseProduct = {
  rating?: number;
  id?: string;
} & ProductCartType;

export type PurchaseTypeModel = {} & PurchaseType & Document;

/*******************************SCHEMA*****************************/

export const BillingDetails = {
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: {
    country: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    line1: { type: String, required: true },
    line2: String,
  },
};

export const PurchaseProduct = {
  product_id: { type: String, required: true },
  img: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  quantity: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  rating: Number,
};

const purchaseSchema = new Schema(
  {
    status: {
      type: String,
      enum: ['PACKAGE', 'SHIPPING', 'DELIVERED'],
      default: 'PACKAGE',
    },
    user_id: { type: String, required: true },
    billingDetails: BillingDetails,
    products: [PurchaseProduct],
    total_bill: { type: Number, required: true },
    payment_method: { type: String, required: true },
    package_date: { type: String, required: true },
    arrive_date: String,
  },
  { timestamps: true }
);

export default model<PurchaseTypeModel>('Purchase', purchaseSchema);
