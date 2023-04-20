import { Router } from 'express';
import { orderedController } from '../../controller';
import { ValidateJoi, ValidateJoiParam } from '../../middleware/Joi';

import { validateAdmin, validateToken } from '../../middleware/validate';
import {
  OrderedSchema,
  ParamsSchema,
} from '../../middleware/validationSchemas';
const router = Router();

router.get(
  '/all',
  validateToken,
  validateAdmin,
  orderedController.getOrderedList
);

router.get('/getself', validateToken, orderedController.getSelfOrdered);

router.get(
  '/get/:id',
  validateToken,
  validateAdmin,
  ValidateJoiParam(ParamsSchema.common),
  orderedController.getOrdered
);

router.post(
  '/update/:id',
  validateToken,
  validateAdmin,
  ValidateJoiParam(ParamsSchema.common),
  ValidateJoi(OrderedSchema.update),
  orderedController.updateOrdered
);

export default router;
