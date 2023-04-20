import Joi from 'joi';
import { SubscriptionType } from '../../models/subscription';

const SubscriptionSchema = {
  subscribe: Joi.object<SubscriptionType>({
    email: Joi.string().email().required(),
  }),
};

export default SubscriptionSchema;
