import { NextFunction, Request, Response } from 'express';

const EMPTY_PRODUCTSIDS = { message: '"productsIds" is required' };
const WRONG_PRODUCTSIDS_TYPE = { message: '"productsIds" must be an array' };
const INVALID_CONTENT = { message: '"productsIds" must include only numbers' };

export default function validateProductsIds(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;
  if (!productsIds) return res.status(400).json(EMPTY_PRODUCTSIDS);
  if (!Array.isArray(productsIds)) return res.status(422).json(WRONG_PRODUCTSIDS_TYPE);
  const isAllNumbers = productsIds.every((pid: number) => typeof pid === 'number');  
  if (!isAllNumbers || productsIds.length === 0) return res.status(422).json(INVALID_CONTENT);
  next();
}
