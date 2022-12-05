import { NextFunction, Request, Response } from 'express';
import Logging from '../library/Logging';
import cloudinary from '../utils/cloudinary';
import { getIdFromReq } from '../utils/token';
import User from '../models/user';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadUserAva = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = getIdFromReq(req);
    const user = await User.findById(_id);
    const fileStr = req.body.img;
    if (user && fileStr) {
      const uploadedRes = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'furniture',
        folder: 'user_ava',
        public_id: user?.info.avatar,
      });
      Logging.info(uploadedRes);
      return res.status(200).json(uploadedRes);
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const uploadProductImg = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const uploadBanner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default { uploadUserAva, uploadProductImg, uploadBanner };
