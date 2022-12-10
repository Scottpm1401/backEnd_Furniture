import { Request, Response, NextFunction } from 'express';

const checkout = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default { checkout };
