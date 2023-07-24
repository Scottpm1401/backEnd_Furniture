import Joi from 'joi';
import { ProductRatingRequest } from 'src/models/api/product';
import { ProductType } from 'src/models/product';

const ProductSchema = {
  create: Joi.object<ProductType>({
    img: Joi.string().required(),
    gallery: Joi.array().items(Joi.string()),
    title: Joi.string().required(),
    description: Joi.string(),
    category: Joi.string().required(),
    brand: Joi.string().required(),
    price: Joi.number().required(),
    sku: Joi.string().required(),
    storage_quantity: Joi.number().integer().required(),
    colors: Joi.array().min(1).items(Joi.string())
  }),
  update: Joi.object<ProductType>({
    img: Joi.string(),
    gallery: Joi.array().items(Joi.string()),
    title: Joi.string(),
    description: Joi.string(),
    category: Joi.string(),
    brand: Joi.string(),
    price: Joi.number(),
    sku: Joi.string(),
    storage_quantity: Joi.number().integer(),
    colors: Joi.array().min(1).items(Joi.string())
  }),
  rating: Joi.object<ProductRatingRequest>({
    rate: Joi.number().min(1).max(5).required(),
    purchase_id: Joi.string().required(),
    color: Joi.string().required()
  })
};

export default ProductSchema;
