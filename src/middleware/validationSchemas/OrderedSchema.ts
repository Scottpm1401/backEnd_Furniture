import Joi from 'joi';
import { UpdateOrderedRequest } from 'src/models/api/cms';
import { BillingDetailsType } from 'src/models/purchase';
import { AddressType } from 'src/models/user';

export const BillingDetailsSchema = Joi.object<BillingDetailsType>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.object<AddressType>({
    country: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    line1: Joi.string().required(),
    line2: Joi.string()
  }).required()
});

const OrderedSchema = {
  update: Joi.object<UpdateOrderedRequest>({
    status: Joi.string().valid('PACKAGE', 'SHIPPING', 'DELIVERED'),
    arrive_date: Joi.string(),
    package_date: Joi.string(),
    total_bill: Joi.number(),
    billingDetails: BillingDetailsSchema
  })
};

export default OrderedSchema;
