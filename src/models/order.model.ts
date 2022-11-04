import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces';
import connection from './connection';

export default class OrderModel {
  connection = connection;

  async getOrdersWithId(): Promise<IOrder[]> {
    const query = `
    SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) AS 'productsIds'
    FROM Trybesmith.Orders AS ord
    INNER JOIN Trybesmith.Products AS prod
    ON ord.id = prod.orderId
    GROUP BY ord.id
    `;
    const [result] = await this.connection.execute<IOrder[] & RowDataPacket[]>(query);
    return result;
  }
}