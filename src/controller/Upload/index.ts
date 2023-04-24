import { NextFunction, Request, Response } from 'express';
import moment from 'moment';
import { GetSignatureType, SignedUpload } from '../../models/upload';
import cloudinary from '../../utils/cloudinary';

const getSignature = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { folder, public_id }: GetSignatureType = req.body;
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
    return res.status(200).json({ timestamp, signature } as SignedUpload);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
export default { getSignature };
