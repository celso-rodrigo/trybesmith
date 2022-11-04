import { Request, Response } from 'express';
import UserService from '../services/user.service';
import generateToken from '../middlewares/auth.generateToken';

export default class ProductController {
  constructor(private userService = new UserService()) {}

  async createUser(req: Request, res: Response) {
    const userId = await this.userService.createUser(req.body);
    const token = generateToken(userId);
    res.status(201).json({ token });
  }
}