import jwt from 'jsonwebtoken';

export const tokenGen = (data: any, days?: number) => {
  return jwt.sign(data, process.env.JWT_KEY || '', {
    expiresIn: 60 * 60 * 24 * (days || 1), //1 day
  });
};
