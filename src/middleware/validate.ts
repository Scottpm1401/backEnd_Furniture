import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import Logging from '../library/Logging';
import { parseJwt } from '../utils/token';

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.slice(7); // cut Beare

  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_KEY || '');
    next();
  } catch (err) {
    return res.status(400).send('Invalid Token');
  }
};

export const validateAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.slice(7); // cut Beare
  const { role } = parseJwt(token ?? '');
  if (role === 'ADMIN') {
    next();
  } else {
    return res
      .status(401)
      .send('You Dont Have Permission To Access This Content');
  }
};
