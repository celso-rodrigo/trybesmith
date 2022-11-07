import { Router } from 'express';
import OrderController from '../controller/order.controller';
import verifyToken from '../middlewares/auth.verify';
import validateProductsIds from '../middlewares/validate.orderInputs';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get(
  '/',
  (req, res) => orderController.getAllOrders(req, res),
);

orderRouter.post(
  '/',
  (req, res, next) => verifyToken(req, res, next),
  (req, res, next) => validateProductsIds(req, res, next),
  (req, res) => orderController.saveOrder(req, res),
);

export default orderRouter;