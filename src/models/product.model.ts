import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces';

export default class ProductModel {
  connection = connection;

  async getAllProducts(): Promise<IProduct[]> {
    const [result] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );
    return result;
  }

  async saveProduct(name: string, amount: string): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return insertId;
  }
}