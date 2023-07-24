import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Role } from 'src/models/user';
import { getRole, isHasPermission } from 'src/utils/common';

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.slice(7); // cut Bearer

  if (!token) return res.status(401).send({ message: 'error.auth.access_denied' });

  try {
    jwt.verify(token, process.env.JWT_KEY || '');
    next();
  } catch (err) {
    return res.status(401).send({ message: 'error.auth.invalid_token' });
  }
};

export const validateAdmin = (req: Request, res: Response, next: NextFunction) => {
  const role = getRole(req);
  if (isHasPermission(role, Role.admin)) {
    next();
  } else {
    return res.status(403).json({ message: 'error.auth.do_not_have_permission' });
  }
};

export const validateSuperAdmin = (req: Request, res: Response, next: NextFunction) => {
  const role = getRole(req);

  if (isHasPermission(role, Role.super_admin)) {
    next();
  } else {
    return res.status(403).json({ message: 'error.auth.do_not_have_permission' });
  }
};

export const validateOwner = (req: Request, res: Response, next: NextFunction) => {
  const role = getRole(req);

  if (isHasPermission(role, Role.owner)) {
    next();
  } else {
    return res.status(403).json({ message: 'error.auth.do_not_have_permission' });
  }
};

export const validateShipper = (req: Request, res: Response, next: NextFunction) => {
  const role = getRole(req);

  if (role === Role.shipper) {
    next();
  } else {
    return res.status(403).json({ message: 'error.auth.do_not_have_permission' });
  }
};
