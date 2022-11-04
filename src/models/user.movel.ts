import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

export default class UserModel {
  connection = connection;

  async createUser(user: IUser): Promise<number> {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ? ,? ,?)',
      [username, classe, level, password],
    );
    return insertId;
  }
}