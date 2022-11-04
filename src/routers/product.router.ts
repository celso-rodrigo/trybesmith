import { Router } from 'express';
import ProductsController from '../controller/products.controller';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.get(
  '/',
  (req, res) => productsController.getAllProducts(req, res),
);

productsRouter.post(
  '/',
  (req, res) => productsController.saveProduct(req, res),
);

export default productsRouter;