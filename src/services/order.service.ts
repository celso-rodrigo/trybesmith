import OrderModel from '../models/order.model';
import { IOrder } from '../interfaces';

export default class OrderService {
  constructor(private orderModel = new OrderModel()) {}

  async getOrdersWithId(): Promise<IOrder[]> {
    return this.orderModel.getOrdersWithId();
  }

  async saveOrder(userId: number): Promise<number> {
    return this.orderModel.saveOrder(userId);
  }

  async updateProducts(productsIds: Array<number>, orderId: number): Promise<void> {
    await Promise.all(
      productsIds.map(async (id) => 
        this.orderModel.updateProducts(id, orderId)),
    );
  }
}