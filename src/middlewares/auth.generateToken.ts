import jwt from 'jsonwebtoken';

export default (userId: number) => jwt.sign(
  { userId },
  process.env.JWT_SECRET as string,
  { expiresIn: '7d', algorithm: 'HS256' },
);
