import { Router } from 'express';
import LoginController from '../controller/login.controller';
import validateLoginInputs from '../middlewares/validateLoginInputs';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post(
  '/',
  (req, res, next) => validateLoginInputs(req, res, next),
  (req, res) => loginController.signIn(req, res),
);

export default loginRouter;