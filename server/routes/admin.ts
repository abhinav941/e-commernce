import { Router } from 'express';

import adminController from '../controllers/admin';

const router = Router();

router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProduct);

router.get('/products', adminController.getProducts);

export default router;
