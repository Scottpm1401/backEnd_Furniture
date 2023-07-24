import { Router } from 'express';
import { productController } from 'src/controller';
import { ValidateJoi, ValidateJoiParam } from 'src/middleware/Joi';

import { validateAdmin, validateToken } from 'src/middleware/validate';
import { ParamsSchema, ProductSchema } from 'src/middleware/validationSchemas';
const router = Router();

router.get('/all', productController.getAllProducts);
router.get('/get/:id', ValidateJoiParam(ParamsSchema.common), productController.getProduct);
router.get('/featured', productController.getFeaturedProducts);
router.get('/cms_all', validateToken, validateAdmin, productController.getCmsAllProducts);
router.post(
  '/create',
  validateToken,
  validateAdmin,
  ValidateJoi(ProductSchema.create),
  productController.createProduct
);
router.patch(
  '/update/:id',
  validateToken,
  validateAdmin,
  ValidateJoiParam(ParamsSchema.common),
  ValidateJoi(ProductSchema.update),
  productController.updateProduct
);
router.delete(
  '/delete/:id',
  validateToken,
  validateAdmin,
  ValidateJoiParam(ParamsSchema.common),
  productController.deleteProduct
);
router.post(
  '/rating/:id',
  validateToken,
  ValidateJoiParam(ParamsSchema.common),
  ValidateJoi(ProductSchema.rating),
  productController.ratingProduct
);

export default router;
