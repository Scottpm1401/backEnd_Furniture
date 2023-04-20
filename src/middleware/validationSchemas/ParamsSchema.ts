import Joi from 'joi';

const ParamsSchema = {
  common: Joi.object({
    id: Joi.string().required(),
  }),
  month: Joi.object({
    month: Joi.number().integer().min(1).max(12).required(),
  }),
};

export default ParamsSchema;
