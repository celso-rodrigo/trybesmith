import { Router } from 'express';
import productsRouter from './product.router';

const router = Router();

router.use('/products', productsRouter);

export default router;