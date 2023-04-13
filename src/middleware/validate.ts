import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { parseJwt } from '../utils/token';

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.slice(7); // cut Bearer

  if (!token)
    return res.status(401).send({ message: 'error.auth.access_denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_KEY || '');
    next();
  } catch (err) {
    return res.status(401).send({ message: 'error.auth.invalid_token' });
  }
};

export const validateAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.slice(7); // cut Bearer
  const { role } = parseJwt(token ?? '');
  if (role === 'ADMIN') {
    next();
  } else {
    return res
      .status(403)
      .json({ message: 'error.auth.do_not_have_permission' });
  }
};
