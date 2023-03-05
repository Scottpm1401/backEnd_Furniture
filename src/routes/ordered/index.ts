import { Router } from 'express';

import controller from '../../controller/Ordered';
import { Schemas, ValidateJoi } from '../../middleware/Joi';
import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

router.get('/all', validateToken, validateAdmin, controller.getOrderedList);
router.get('/getself', validateToken, controller.getSelfOrdered);
router.get('/get/:id', validateToken, validateAdmin, controller.getOrdered);
router.post(
  '/update/:id',
  validateToken,
  validateAdmin,
  controller.updateOrdered
);

export default router;
