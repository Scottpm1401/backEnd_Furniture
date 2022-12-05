import { Router } from 'express';

import controller from '../../controller/Product';
import { Schemas, ValidateJoi } from '../../middleware/Joi';
import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

router.post('/user_ava', validateToken);
router.post('/product/:id', validateToken, validateAdmin);
router.post('/banner', validateToken, validateAdmin);

export default router;
