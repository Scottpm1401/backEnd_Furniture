import { Router } from 'express';

import controller from '../../controller/Analysis';
import { Schemas, ValidateJoi } from '../../middleware/Joi';
import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

export default router;
