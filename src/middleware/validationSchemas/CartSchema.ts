import Joi from 'joi';

const CartSchema = {
  add: Joi.object({
    product_id: Joi.string().required(),
    color: Joi.string().required(),
    quantity: Joi.number().integer().min(1),
  }),
  remove: Joi.object({
    product_id: Joi.string().required(),
    color: Joi.string().required(),
  }),
  update_quantity: Joi.object({
    product_id: Joi.string().required(),
    color: Joi.string().required(),
    quantity: Joi.number().integer(),
  }),
};

export default CartSchema;
