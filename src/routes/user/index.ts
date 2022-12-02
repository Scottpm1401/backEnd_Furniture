import { Router } from 'express';

import controller from '../../controller/User';
import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.get('/getself', validateToken, controller.getSelfUser);
router.get('/get/:id', validateToken, validateAdmin, controller.getUser);
router.get('/all', validateToken, validateAdmin, controller.getAllUser);
router.delete(
  '/delete/:id',
  validateToken,
  validateAdmin,
  controller.deleteUser
);
router.patch(
  '/update/:id',
  validateToken,
  validateAdmin,
  controller.updateUser
);
router.patch('/update_self', validateToken, controller.updateSelfUser);

export default router;
