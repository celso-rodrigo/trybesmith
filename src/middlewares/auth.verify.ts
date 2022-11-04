import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function verifyToken(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization: token } = req.headers;

    if (!token) return res.status(401).json({ message: 'Token not found' });
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    req.body.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}