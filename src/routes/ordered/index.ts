import { Router } from 'express';

import controller from '../../controller/Ordered';
import { Schemas, ValidateJoi } from '../../middleware/Joi';
import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

router.get('/all', validateToken, validateAdmin, controller.getOrderedList);
router.get('/getself', validateToken, controller.getSelfOrdered);
router.get('/get/:id', validateToken, validateAdmin, controller.getOrdered);

export default router;
