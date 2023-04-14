import { Router } from 'express';
import { subscriptionController } from '../../controller';

const router = Router();

router.post('/subscribe', subscriptionController.subscribe);

export default router;
