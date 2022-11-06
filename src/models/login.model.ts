import { RowDataPacket } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

export default class LoginModel {
  connection = connection;

  async findUser(username: string, password: string): Promise<IUser[]> {
    const [result] = await this.connection.execute<IUser[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ? LIMIT 1',
      [username, password],
    );
    return result;
  }
}