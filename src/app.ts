import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import * as router from './routers';

const app = express();

app.use(express.json());

app.use('/products', router.productsRouter);
app.use('/users', router.userRouter);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

export default app;