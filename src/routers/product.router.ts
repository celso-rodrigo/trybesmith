import { Router } from 'express';
import ProductsController from '../controller/products.controller';
import { validateName, validateAmount } from '../middlewares/validate.productsInputs';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.get(
  '/',
  (req, res) => productsController.getAllProducts(req, res),
);

productsRouter.post(
  '/',
  (req, res, next) => validateName(req, res, next),
  (req, res, next) => validateAmount(req, res, next),
  (req, res) => productsController.saveProduct(req, res),
);

export default productsRouter;