import { Router } from 'express';
import { uploadController } from 'src/controller';
import { ValidateJoi } from 'src/middleware/Joi';

import { validateToken } from 'src/middleware/validate';
import { UploadSchema } from 'src/middleware/validationSchemas';
const router = Router();

router.post(
  '/signature',
  validateToken,
  ValidateJoi(UploadSchema.signature),
  uploadController.getSignature
);

export default router;
