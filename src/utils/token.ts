import jwt from 'jsonwebtoken';
import { Request } from 'express';

export const tokenGen = (data: any, days?: number) => {
  return jwt.sign(data, process.env.JWT_KEY || '', {
    expiresIn: 60 * 60 * 24 * (days || 1), // 1 day
  });
};

export const resetPasswordTokenGen = (email: string, code: string) => {
  const payload = { email, code };
  const token = jwt.sign(payload, process.env.JWT_KEY || '', {
    expiresIn: 60 * 15, // 15 minutes
  });
  return token;
};

export const parseJwt = (token: string) => {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
};

export const getIdFromReq = (req: Request) => {
  const token = req.header('Authorization')?.slice(7); // cut Bearer
  const _id = parseJwt(token ?? '')._id;

  return _id as string;
};

export const generateCode = () => {
  const min = 100000;
  const max = 999999;
  const code = Math.floor(Math.random() * (max - min + 1)) + min;
  return code.toString();
};
