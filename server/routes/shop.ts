import { Router } from 'express';

import shopController from '../controllers/shop';

const router = Router();

router.get('/', shopController.getIndex);
router.get('/cart', shopController.showCart);

router.get('/products', shopController.getProducts);
router.get('/checkout', shopController.getCheckout);

export default router;
