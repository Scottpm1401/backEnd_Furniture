import { Router } from 'express';

import { authController } from '../../controller';
import { Schemas, ValidateJoi } from '../../middleware/Joi';
import { validateToken } from '../../middleware/validate';

const router = Router();

router.post('/signup', ValidateJoi(Schemas.user.create), authController.signup);
router.post('/login', ValidateJoi(Schemas.user.login), authController.login);
router.post('/logout', validateToken, authController.logout);
router.post('/refresh_token', authController.refreshToken);
router.post('/change_password', validateToken, authController.changePassword);
router.post('/forgot_password', authController.forgotPassword);
router.post('/reset_password', authController.resetPassword);

export default router;
