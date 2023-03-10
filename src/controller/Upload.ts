import { NextFunction, Request, Response } from 'express';
import moment from 'moment';
import cloudinary from '../utils/cloudinary';

const getSignature = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { folder, public_id } = req.body;
    const timestamp = moment().unix();

    const api_secret = cloudinary.config().api_secret || '';

    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp,
        folder,
        public_id,
      },
      api_secret
    );
    res.json({ timestamp, signature });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
export default { getSignature };
