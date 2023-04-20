import { Router } from 'express';
import { subscriptionController } from '../../controller';
import { ValidateJoi } from '../../middleware/Joi';
import { SubscriptionSchema } from '../../middleware/validationSchemas';

const router = Router();

router.post(
  '/subscribe',
  ValidateJoi(SubscriptionSchema.subscribe),
  subscriptionController.subscribe
);

export default router;
