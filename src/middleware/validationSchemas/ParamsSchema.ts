import Joi from 'joi';

const ParamsSchema = {
  common: Joi.object({
    id: Joi.string().required(),
  }),
};

export default ParamsSchema;
