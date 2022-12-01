import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.slice(6); // cut Beare

  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET || '');
    next();
  } catch (err) {
    return res.status(400).send('Invalid Token');
  }
};
