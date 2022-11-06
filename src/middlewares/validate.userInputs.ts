import { NextFunction, Request, Response } from 'express';

const EMPTY_USERNAME = { message: '"username" is required' };
const EMPTY_CLASSE = { message: '"classe" is required' };
const EMPTY_LEVEL = { message: '"level" is required' };
const EMPTY_PASSWORD = { message: '"password" is required' };
const WRONG_USERNAME_TYPE = { message: '"username" must be a string' };
const WRONG_CLASSE_TYPE = { message: '"classe" must be a string' };
const WRONG_LEVEL_TYPE = { message: '"level" must be a number' };
const WRONG_PASSWORD_TYPE = { message: '"password" must be a string' };
const SHORT_USERNAME = { message: '"username" length must be at least 3 characters long' };
const SHORT_CLASSE = { message: '"classe" length must be at least 3 characters long' };
const INVALID_LEVEL = { message: '"level" must be greater than or equal to 1' };
const INVALID_PASSWORD = { message: '"password" length must be at least 8 characters long' };

export function validateUsername(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;
  if (!username) return res.status(400).json(EMPTY_USERNAME);
  if (typeof username !== 'string') return res.status(422).json(WRONG_USERNAME_TYPE);
  if (username.length < 3) return res.status(422).json(SHORT_USERNAME);
  next();
}

export function validateClasse(req: Request, res: Response, next: NextFunction) {
  const { classe } = req.body;
  if (!classe) return res.status(400).json(EMPTY_CLASSE);
  if (typeof classe !== 'string') return res.status(422).json(WRONG_CLASSE_TYPE);
  if (classe.length < 3) return res.status(422).json(SHORT_CLASSE);
  next();
}

export function validateLevel(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body;
  if (level === undefined) return res.status(400).json(EMPTY_LEVEL);
  if (typeof level !== 'number') return res.status(422).json(WRONG_LEVEL_TYPE);
  if (level <= 0) return res.status(422).json(INVALID_LEVEL);
  next();
}

export function validatePassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (!password) return res.status(400).json(EMPTY_PASSWORD);
  if (typeof password !== 'string') return res.status(422).json(WRONG_PASSWORD_TYPE);
  if (password.length < 8) return res.status(422).json(INVALID_PASSWORD);
  next();
}