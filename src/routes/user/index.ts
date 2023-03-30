import { Router } from 'express';

import { userController, cartController } from '../../controller';
import { Schemas, ValidateJoi } from '../../middleware/Joi';
import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

//Auth routes
router.post('/signup', ValidateJoi(Schemas.user.create), userController.signup);
router.post('/login', ValidateJoi(Schemas.user.login), userController.login);
router.post('/logout', validateToken, userController.logout);
router.post('/refresh_token', userController.refreshToken);

//User Routes (role==='USER')
router.get('/getself', validateToken, userController.getSelfUser);
router.patch('/update_self', validateToken, userController.updateSelfUser);
router.post('/change_password', validateToken, userController.changePassword);

//User Router (role==='ADMIN')
router.get('/get/:id', validateToken, validateAdmin, userController.getUser);
router.get('/all', validateToken, validateAdmin, userController.getAllUser);
router.delete(
  '/delete/:id',
  validateToken,
  validateAdmin,
  userController.deleteUser
);
router.post(
  '/update/:id',
  validateToken,
  validateAdmin,
  ValidateJoi(Schemas.user.update),
  userController.updateUser
);

//Cart routes
router.post('/cart/add', validateToken, cartController.addToCart);
router.post('/cart/remove', validateToken, cartController.removeFromCart);
router.post(
  '/cart/update_quantity',
  validateToken,
  cartController.updateProductCartQuantity
);
router.post('/cart/clear', validateToken, cartController.clearCart);

export default router;
