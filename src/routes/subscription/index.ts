import { Router } from 'express';
import { subscriptionController } from '../../controller';
import { ValidateJoi, ValidateJoiParam } from '../../middleware/Joi';
import { validateAdmin, validateToken } from '../../middleware/validate';
import {
  ParamsSchema,
  SubscriptionSchema,
} from '../../middleware/validationSchemas';

const router = Router();

router.get(
  '/all',
  validateToken,
  validateAdmin,
  subscriptionController.getSubscriptions
);

router.get(
  '/get/:id',
  validateToken,
  validateAdmin,
  subscriptionController.getSubscription
);

router.post(
  '/update/:id',
  validateToken,
  validateAdmin,
  ValidateJoiParam(ParamsSchema.common),
  ValidateJoi(SubscriptionSchema.update),
  subscriptionController.updateSubscription
);

router.post(
  '/subscribe',
  ValidateJoi(SubscriptionSchema.subscribe),
  subscriptionController.subscribe
);

export default router;
