import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  async getAllOrders(req: Request, res: Response) {
    const ordersWithId = await this.orderService.getOrdersWithId();
    res.status(200).json(ordersWithId);
  }
}