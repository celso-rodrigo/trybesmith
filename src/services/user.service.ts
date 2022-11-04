import UserModel from '../models/user.model';
import { IUser } from '../interfaces';

export default class UserService {
  constructor(private userModel = new UserModel()) {}

  async createUser(user: IUser): Promise<number> {
    return this.userModel.createUser(user);
  }
}