import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import moment from 'moment';
import { floor } from 'lodash';
import User from '../models/User';
import { tokenGen } from '../utils/token';

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { displayName, email, username, password, birthday } = req.body;
    const findUser = await User.find({ email });

    if (findUser.length > 0) {
      return res.status(500).json({ message: 'User already existed' });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const _id = new mongoose.Types.ObjectId();
      const user = new User({
        _id,
        displayName,
        email,
        username,
        password: hashedPassword,
        birthday,
        info: undefined,
        cart: [],
      });
      const savedUser = await user.save();
      if (savedUser) {
        const expiredDate = floor(moment().add(7, 'days').valueOf() / 1000);
        const token = tokenGen({ _id: _id.toString() }, 7);
        const refreshToken = tokenGen({ accessToken: token }, 30);
        return res
          .status(201)
          .json({ accessToken: token, expiredDate, refreshToken });
      }
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, username, password } = req.body;
    const findUser = username
      ? await User.find({ username })
      : await User.find({ email });
    if (findUser.length > 0) {
      const user = findUser[0];
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        const expiredDate = floor(moment().add(7, 'days').valueOf() / 1000);
        const token = tokenGen({ _id: user._id.toString() }, 7);
        const refreshToken = tokenGen({ accessToken: token }, 30);
        return res
          .status(200)
          .json({ accessToken: token, expiredDate, refreshToken });
      } else {
        return res.status(500).json({ message: 'Incorrect Passwrod' });
      }
    } else {
      return res.status(500).json({ message: 'Invalid Email or Username' });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getUser = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
const updateUser = (req: Request, res: Response, next: NextFunction) => {};
const deleteUser = (req: Request, res: Response, next: NextFunction) => {};
const getAllUser = (req: Request, res: Response, next: NextFunction) => {};

export default { login, signup, getUser, updateUser, deleteUser, getAllUser };
