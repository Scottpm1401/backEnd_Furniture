import Joi from 'joi';
import { CheckoutRequest, ConfirmPaymentRequest } from 'src/models/api/payment';
import { BillingDetailsSchema } from './OrderedSchema';

const PaymentSchema = {
  product_check: Joi.object({
    quantity: Joi.number().integer().required()
  }),
  confirm: Joi.object<ConfirmPaymentRequest>({
    payment_method: Joi.string().required(),
    billing_details: BillingDetailsSchema.required()
  }),
  checkout: Joi.object<CheckoutRequest>({
    paymentMethodType: Joi.string().required(),
    currency: Joi.string()
  })
};

export default PaymentSchema;
