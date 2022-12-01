import jwt from 'jsonwebtoken';

export const tokenGen = (_id: string, days?: number) => {
  return jwt.sign({ _id }, process.env.JWT_KEY || '', {
    expiresIn: 60 * 60 * 24 * (days || 1), //1 day
  });
};
