import { Router } from 'express';
import UserController from '../controller/user.controller';
import {
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
} from '../middlewares/validate.userInputs';

const userRouter = Router();

const userController = new UserController();

userRouter.post(
  '/',
  (req, res, next) => validateUsername(req, res, next),
  (req, res, next) => validateClasse(req, res, next),
  (req, res, next) => validateLevel(req, res, next),
  (req, res, next) => validatePassword(req, res, next),
  (req, res) => userController.createUser(req, res),
);

export default userRouter;