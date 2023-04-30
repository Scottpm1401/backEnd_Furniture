import Joi from 'joi';
import { UpdateSubscriptionRequest } from '../../models/api/cms';
import { SubscriptionType } from '../../models/subscription';

const SubscriptionSchema = {
  subscribe: Joi.object<SubscriptionType>({
    email: Joi.string().email().required(),
  }),
  update: Joi.object<UpdateSubscriptionRequest>({
    phone: Joi.string(),
    address: Joi.string(),
    name: Joi.string(),
  }),
};

export default SubscriptionSchema;
