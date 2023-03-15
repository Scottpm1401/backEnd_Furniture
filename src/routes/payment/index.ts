import { Router } from 'express';

import controller from '../../controller/Payment';
import { validateToken } from '../../middleware/validate';
const router = Router();

router.post('/checkout', validateToken, controller.checkout);
router.post('/confirm', validateToken, controller.confirmPayment);
router.post('/check/:product_id', validateToken, controller.productCheck);

export default router;
