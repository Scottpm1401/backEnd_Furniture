import { Router } from 'express';
import { uploadController } from '../../controller';
import { ValidateJoi } from '../../middleware/Joi';

import { validateToken } from '../../middleware/validate';
import { UploadSchema } from '../../middleware/validationSchemas';
const router = Router();

router.post(
  '/signature',
  validateToken,
  ValidateJoi(UploadSchema.signature),
  uploadController.getSignature
);

export default router;
