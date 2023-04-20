import { Router } from 'express';
import { paymentController } from '../../controller';
import { ValidateJoi, ValidateJoiParam } from '../../middleware/Joi';

import { validateToken } from '../../middleware/validate';
import {
  ParamsSchema,
  PaymentSchema,
} from '../../middleware/validationSchemas';
const router = Router();

router.post(
  '/checkout',
  validateToken,
  ValidateJoi(PaymentSchema.checkout),
  paymentController.checkout
);

router.post(
  '/confirm',
  validateToken,
  ValidateJoi(PaymentSchema.confirm),
  paymentController.confirmPayment
);

router.post(
  '/check/:id',
  validateToken,
  ValidateJoiParam(ParamsSchema.common),
  ValidateJoi(PaymentSchema.product_check),
  paymentController.productCheck
);

export default router;
