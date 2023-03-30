import { Router } from 'express';

import { templateController } from '../../controller';
import { validateAdmin, validateToken } from '../../middleware/validate';
const router = Router();

router.get(
  '/all',
  validateToken,
  validateAdmin,
  templateController.getAllTemplates
);
router.get(
  '/get/:id',
  validateToken,
  validateAdmin,
  templateController.getTemplate
);
router.post(
  '/create',
  validateToken,
  validateAdmin,
  templateController.createTemplate
);
router.patch(
  '/update/:id',
  validateToken,
  validateAdmin,
  templateController.updateTemplate
);
router.post(
  '/active/:id',
  validateToken,
  validateAdmin,
  templateController.activeTemplate
);
router.delete(
  '/delete/:id',
  validateToken,
  validateAdmin,
  templateController.deleteTemplate
);

export default router;
