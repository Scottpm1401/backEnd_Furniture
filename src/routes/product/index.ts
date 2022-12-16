import { Router } from 'express';

import controller from '../../controller/Product';
import { Schemas, ValidateJoi } from '../../middleware/Joi';
import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

router.get('/all', controller.getAllProducts);
router.get('/get/:id', controller.getProduct);
router.get('/featured', controller.getFeaturedProducts);
router.post('/create', validateToken, validateAdmin, controller.createProduct);
router.patch(
  '/update/:id',
  validateToken,
  validateAdmin,
  controller.updateProduct
);
router.delete(
  '/delete/:id',
  validateToken,
  validateAdmin,
  controller.deleteProduct
);
router.post('/rating/:id', validateToken, controller.ratingProduct);

export default router;
