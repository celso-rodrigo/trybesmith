import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import router from './routers';

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

export default app;