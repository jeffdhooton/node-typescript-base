import { Request, Response } from 'express';

export const notImplemented = (name: string, req: Request, res: Response) => {
  res.send(`Route ${name} has not been implemented yet`);
};
