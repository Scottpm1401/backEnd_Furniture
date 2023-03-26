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
  controller.getMostBoughtProduct
);

export default router;
