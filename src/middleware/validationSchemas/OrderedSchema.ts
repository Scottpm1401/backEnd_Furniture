import Joi from 'joi';
import { UpdateOrderedRequest } from '../../models/api/cms';
import { BillingDetailsType, PurchaseProductType } from '../../models/purchase';
import { AddressType } from '../../models/user';

export const BillingDetailsSchema = Joi.object<BillingDetailsType>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.object<AddressType>({
    country: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    line1: Joi.string().required(),
    line2: Joi.string(),
  }).required(),
});

const PurchaseProductSchema = Joi.object<PurchaseProductType>({
  rating: Joi.number(),
  id: Joi.string(),
  product_id: Joi.string().required(),
  img: Joi.string().required(),
  title: Joi.string().required(),
  price: Joi.number().required(),
  color: Joi.string().required(),
  quantity: Joi.number().integer().required(),
  brand: Joi.string().required(),
  category: Joi.string().required(),
});

const OrderedSchema = {
  update: Joi.object<UpdateOrderedRequest>({
    status: Joi.string().valid('PACKAGE', 'SHIPPING', 'DELIVERED'),
    arrive_date: Joi.string(),
    package_date: Joi.string(),
    total_bill: Joi.number(),
    products: Joi.array().items(PurchaseProductSchema),
    billingDetails: BillingDetailsSchema,
  }),
};

export default OrderedSchema;
