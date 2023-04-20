import { Router } from 'express';
import { analysisController } from '../../controller';
import { ValidateJoiParam } from '../../middleware/Joi';

import { validateAdmin, validateToken } from '../../middleware/validate';
import { ParamsSchema } from '../../middleware/validationSchemas';
const router = Router();

router.get(
  '/months_revenue',
  validateToken,
  validateAdmin,
  analysisController.getRevenuePerMonth
);

router.get(
  '/products_purchase/:month',
  validateToken,
  validateAdmin,
  ValidateJoiParam(ParamsSchema.month),
  analysisController.getBoughtProduct
);

router.get(
  '/top_10_users/:month',
  validateToken,
  validateAdmin,
  ValidateJoiParam(ParamsSchema.month),
  analysisController.getTop10Users
);

export default router;
