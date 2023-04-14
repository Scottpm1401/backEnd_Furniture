import { model, Schema } from 'mongoose';

/*********************TYPE & INTERFACE*****************************/
export type SubscriptionType = {
  email: string;
  phone?: string;
  name?: string;
  address?: string;
};

export type SubscriptionModel = {} & SubscriptionType & Document;

/*******************************SCHEMA*****************************/
const subscriptionSchema = new Schema(
  {
    email: { type: String, required: true },
    phone: String,
    name: String,
    address: String,
  },
  { timestamps: true }
);

export default model<SubscriptionModel>('Subscription', subscriptionSchema);
