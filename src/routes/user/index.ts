import { Router } from 'express';

import controller from '../../controller/User';
import cartController from '../../controller/Cart';
import { Schemas, ValidateJoi } from '../../middleware/Joi';
import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

//Auth routes
router.post('/signup', ValidateJoi(Schemas.user.create), controller.signup);
router.post('/login', ValidateJoi(Schemas.user.login), controller.login);
router.post('/logout', validateToken, controller.logout);
router.post('/refresh_token', controller.refreshToken);

//User Routes (role==='USER')
router.get('/getself', validateToken, controller.getSelfUser);
router.patch('/update_self', validateToken, controller.updateSelfUser);
router.post('/change_password', validateToken, controller.changePassword);

//User Router (role==='ADMIN')
router.get('/get/:id', validateToken, validateAdmin, controller.getUser);
router.get('/all', validateToken, validateAdmin, controller.getAllUser);
router.delete(
  '/delete/:id',
  validateToken,
  validateAdmin,
  controller.deleteUser
);
router.post(
  '/update/:id',
  validateToken,
  validateAdmin,
  ValidateJoi(Schemas.user.update),
  controller.updateUser
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
