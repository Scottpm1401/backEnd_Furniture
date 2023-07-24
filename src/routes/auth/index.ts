import { Router } from 'express';

import { authController } from 'src/controller';
import { ValidateJoi } from 'src/middleware/Joi';
import { validateToken } from 'src/middleware/validate';
import { AuthSchema } from 'src/middleware/validationSchemas';

const router = Router();

router.post('/signup', ValidateJoi(AuthSchema.signUp), authController.signup);

router.post('/login', ValidateJoi(AuthSchema.login), authController.login);

router.post('/logout', validateToken, ValidateJoi(AuthSchema.logout), authController.logout);

router.post('/refresh_token', ValidateJoi(AuthSchema.refreshToken), authController.refreshToken);

router.post(
  '/change_password',
  validateToken,
  ValidateJoi(AuthSchema.changePassword),
  authController.changePassword
);

router.post(
  '/forgot_password',
  ValidateJoi(AuthSchema.forgotPassword),
  authController.forgotPassword
);

router.post('/reset_password', ValidateJoi(AuthSchema.resetPassword), authController.resetPassword);

export default router;
