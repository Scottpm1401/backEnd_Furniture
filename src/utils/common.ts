import { Request } from 'express';
import { Role } from '../models/user';
import { parseJwt } from './token';

export const isOwner = (req: Request) => {
  const role = getRole(req);

  return role === Role.owner;
};

export const isAdmin = (req: Request) => {
  const role = getRole(req);

  return role === Role.admin;
};

export const isSuperAdmin = (req: Request) => {
  const role = getRole(req);

  return role === Role.super_admin;
};

export const isShipper = (req: Request) => {
  const role = getRole(req);

  return role === Role.shipper;
};

export const getRole = (req: Request) => {
  const token = req.header('Authorization')?.slice(7);
  const { role } = parseJwt(token ?? '');

  return role as Role;
};

export const isHasPermission = (role: Role, compare_role: Role) => {
  if (role === Role.shipper || role === Role.user) return false;
  if (role === compare_role) return true;
  if (role === Role.owner) return true;
  if (role === Role.super_admin && compare_role !== Role.owner) return true;
  if (
    role === Role.admin &&
    compare_role !== Role.owner &&
    compare_role !== Role.super_admin
  )
    return true;
  return false;
};
