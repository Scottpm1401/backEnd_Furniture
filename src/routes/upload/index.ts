import { Router } from 'express';

import controller from '../../controller/Upload';
import { validateToken } from '../../middleware/validate';
const router = Router();

router.post('/signature', validateToken, controller.getSignature);

export default router;
