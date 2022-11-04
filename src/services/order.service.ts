import OrderModel from '../models/order.model';
import { IOrder } from '../interfaces';

export default class OrderService {
  constructor(private orderModel = new OrderModel()) {}

  async getOrdersWithId(): Promise<IOrder[]> {
    return this.orderModel.getOrdersWithId();
  }
}