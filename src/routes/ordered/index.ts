import { Router } from 'express';
import { orderedController } from '../../controller';

import { validateAdmin, validateToken } from '../../middleware/validate';
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
  orderedController.getOrdered
);
router.post(
  '/update/:id',
  validateToken,
  validateAdmin,
  orderedController.updateOrdered
);

export default router;
