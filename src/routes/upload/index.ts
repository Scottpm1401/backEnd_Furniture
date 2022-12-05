import { Router } from 'express';

import controller from '../../controller/Upload';
import { Schemas, ValidateJoi } from '../../middleware/Joi';
import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

router.post('/user_ava', validateToken, controller.uploadUserAva);
router.post(
  '/product/:id',
  validateToken,
  validateAdmin,
  controller.uploadProductImg
);
router.post('/banner', validateToken, validateAdmin, controller.uploadBanner);

export default router;
