import { Router } from 'express';

import controller from '../../controller/Analysis';
import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

export default router;
