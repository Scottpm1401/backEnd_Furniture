import { Router } from 'express';

import controller from '../../controller/Analysis';
import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

router.get(
  '/months_revenue',
  validateToken,
  validateAdmin,
  controller.getRevenuePerMonth
);

router.get(
  '/products_purchase/:month',
  validateToken,
  validateAdmin,
  controller.getBoughtProduct
);

router.get(
  '/top_10_users/:month',
  validateToken,
  validateAdmin,
  controller.getTop10Users
);

export default router;
