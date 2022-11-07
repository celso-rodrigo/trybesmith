import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  async getAllOrders(req: Request, res: Response) {
    const ordersWithId = await this.orderService.getOrdersWithId();
    res.status(200).json(ordersWithId);
  }

  async saveOrder(req: Request, res: Response) {
    const { productsIds, user: { userId } } = req.body;
    const orderId = await this.orderService.saveOrder(userId);
    await this.orderService.updateProducts(productsIds, orderId);
    res.status(201).json({ userId, productsIds });
  }
}