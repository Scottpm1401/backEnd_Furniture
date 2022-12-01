import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export const validateToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.header('Authorization')?.slice(6); // cut Beare

  if (!token) return response.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET || '');
    next();
  } catch (err) {
    return response.status(400).send('Invalid Token');
  }
};
