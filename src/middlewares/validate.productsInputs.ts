import { NextFunction, Request, Response } from 'express';

const EMPTY_NAME = { message: '"name" is required' };
const EMPTY_AMOUNT = { message: '"amount" is required' };
const WRONG_NAME_TYPE = { message: '"name" must be a string' };
const WRONG_AMOUNT_TYPE = { message: '"amount" must be a string' };
const SHORT_NAME = { message: '"name" length must be at least 3 characters long' };
const SHORT_AMOUNT = { message: '"amount" length must be at least 3 characters long' };

export function validateName(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  if (!name) return res.status(400).json(EMPTY_NAME);
  if (typeof name !== 'string') return res.status(422).json(WRONG_NAME_TYPE);
  if (name.length < 3) return res.status(422).json(SHORT_NAME);
  next();
}

export function validateAmount(req: Request, res: Response, next: NextFunction) {
  const { amount } = req.body;
  if (!amount) return res.status(400).json(EMPTY_AMOUNT);
  if (typeof amount !== 'string') return res.status(422).json(WRONG_AMOUNT_TYPE);
  if (amount.length < 3) return res.status(422).json(SHORT_AMOUNT);
  next();
}
