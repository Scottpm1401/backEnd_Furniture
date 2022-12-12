import { Router } from 'express';

import controller from '../../controller/Payment';
import { Schemas, ValidateJoi } from '../../middleware/Joi';
import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

router.post('/checkout', validateToken, controller.checkout);
router.post('/confirm', validateToken, controller.confirmPayment);

export default router;
