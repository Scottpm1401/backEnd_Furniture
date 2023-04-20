import { Router } from 'express';

import { cartController, userController } from '../../controller';
import { ValidateJoi, ValidateJoiParam } from '../../middleware/Joi';
import { validateAdmin, validateToken } from '../../middleware/validate';
import {
  CartSchema,
  ParamsSchema,
  UserSchema,
} from '../../middleware/validationSchemas';

const router = Router();

//User Routes (role==='USER')
router.get('/getself', validateToken, userController.getSelfUser);
router.patch(
  '/update_self',
  validateToken,
  ValidateJoi(UserSchema.update_self),
  userController.updateSelfUser
);

//User Router (role==='ADMIN')
router.get(
  '/get/:id',
  validateToken,
  validateAdmin,
  ValidateJoiParam(ParamsSchema.common),
  userController.getUser
);

router.get('/all', validateToken, validateAdmin, userController.getAllUser);

router.delete(
  '/delete/:id',
  validateToken,
  validateAdmin,
  ValidateJoiParam(ParamsSchema.common),
  userController.deleteUser
);

router.post(
  '/update/:id',
  validateToken,
  validateAdmin,
  ValidateJoiParam(ParamsSchema.common),
  ValidateJoi(UserSchema.update),
  userController.updateUser
);

//Cart routes
router.post(
  '/cart/add',
  validateToken,
  ValidateJoi(CartSchema.add),
  cartController.addToCart
);
router.post(
  '/cart/remove',
  validateToken,
  ValidateJoi(CartSchema.remove),
  cartController.removeFromCart
);
router.post(
  '/cart/update_quantity',
  validateToken,
  ValidateJoi(CartSchema.update_quantity),
  cartController.updateProductCartQuantity
);
router.post('/cart/clear', validateToken, cartController.clearCart);

export default router;
