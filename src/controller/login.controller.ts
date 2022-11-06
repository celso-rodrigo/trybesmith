import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import generateToken from '../middlewares/auth.generateToken';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  async signIn(req: Request, res: Response) {
    const { username, password } = req.body;
    const validUser = await this.loginService.findUser(username, password);
    if (!validUser) return res.status(401).json({ message: 'Username or password invalid' });
    const token = generateToken(validUser.id);
    res.status(200).json({ token });
  }
}