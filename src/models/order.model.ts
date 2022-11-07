import { RowDataPacket, ResultSetHeader } from 'mysql2';
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

  async saveOrder(userId: number): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    return insertId;
  }

  async updateProducts(productId: number, orderId: number): Promise<void> {
    await this.connection.execute<RowDataPacket[]>(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, productId],
    );
  }
}