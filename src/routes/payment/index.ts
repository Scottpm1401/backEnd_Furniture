import { Router } from 'express';
import { paymentController } from '../../controller';

import { validateToken } from '../../middleware/validate';
const router = Router();

router.post('/checkout', validateToken, paymentController.checkout);
router.post('/confirm', validateToken, paymentController.confirmPayment);
router.post(
  '/check/:product_id',
  validateToken,
  paymentController.productCheck
);

export default router;
