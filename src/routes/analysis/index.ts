import { Router } from 'express';
import { analysisController } from '../../controller';

import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

router.get(
  '/months_revenue',
  validateToken,
  validateAdmin,
  analysisController.getRevenuePerMonth
);

router.get(
  '/products_purchase',
  validateToken,
  validateAdmin,
  analysisController.getBoughtProduct
);

router.get(
  '/top_10_users',
  validateToken,
  validateAdmin,
  analysisController.getTop10Users
);

export default router;
