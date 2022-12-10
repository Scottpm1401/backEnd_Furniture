import { Router } from 'express';

import controller from '../../controller/Payment';
import { Schemas, ValidateJoi } from '../../middleware/Joi';
import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

router.get('/', validateToken, controller.checkout);

export default router;
