import { Router } from 'express';
import { uploadController } from '../../controller';

import { validateToken } from '../../middleware/validate';
const router = Router();

router.post('/signature', validateToken, uploadController.getSignature);

export default router;
