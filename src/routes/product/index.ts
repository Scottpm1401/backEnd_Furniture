import { Router } from 'express';
import { productController } from '../../controller';

import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

router.get('/all', productController.getAllProducts);
router.get('/get/:id', productController.getProduct);
router.get('/featured', productController.getFeaturedProducts);
router.get(
  '/cms_all',
  validateToken,
  validateAdmin,
  productController.getCmsAllProducts
);
router.post(
  '/create',
  validateToken,
  validateAdmin,
  productController.createProduct
);
router.patch(
  '/update/:id',
  validateToken,
  validateAdmin,
  productController.updateProduct
);
router.delete(
  '/delete/:id',
  validateToken,
  validateAdmin,
  productController.deleteProduct
);
router.post('/rating/:id', validateToken, productController.ratingProduct);

export default router;
