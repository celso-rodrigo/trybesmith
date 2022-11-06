import LoginModel from '../models/login.model';
import { IUser } from '../interfaces';

export default class LoginService {
  constructor(private loginModel = new LoginModel()) {}

  async findUser(username: string, password: string): Promise<IUser | undefined> {
    const validLogin = await this.loginModel.findUser(username, password);
    return validLogin[0];
  }
}