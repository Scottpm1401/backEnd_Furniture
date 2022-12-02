import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import moment from 'moment';
import { floor } from 'lodash';
import User from '../models/User';
import { tokenGen, getIdFromReq } from '../utils/token';

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
        const token = tokenGen(
          { _id: _id.toString(), role: savedUser.role },
          7
        );
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
        const token = tokenGen(
          { _id: user._id.toString(), role: user.role },
          7
        );
        const refreshToken = tokenGen({ accessToken: token }, 30);
        return res
          .status(200)
          .json({ accessToken: token, expiredDate, refreshToken });
      } else {
        return res.status(500).json({ message: 'Incorrect Password' });
      }
    } else {
      return res.status(500).json({ message: 'Invalid Email or Username' });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getSelfUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = getIdFromReq(req);
    const user = await User.findById(_id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params.id;
    const { displayName, username, birthday, info, role, email, password } =
      req.body;
    const findUser = await User.find({ username });
    if (findUser.length > 0 && findUser[0]._id.toString() !== _id) {
      return res.status(500).json({ message: 'Username already existed' });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const updatedUser = await User.updateOne(
        { _id },
        {
          $set: {
            displayName,
            username,
            birthday,
            info,
            role,
            email,
            password: hashedPassword,
          },
        }
      );
      return res.status(200).json({ success: true });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const updateSelfUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = getIdFromReq(req);
    const { displayName, username, birthday, info } = req.body;
    const findUser = await User.find({ username });
    if (findUser.length > 0 && findUser[0]._id.toString() !== _id) {
      return res.status(500).json({ message: 'Username already existed' });
    } else {
      const updatedUser = await User.updateOne(
        { _id },
        { $set: { displayName, username, birthday, info } }
      );
      return res.status(200).json({ success: true });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params.id;
    const deletedUser = await User.deleteOne({ _id });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ messsage: err });
  }
};

const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { offset, limit } = req.query;
    const users = await User.find()
      .skip(parseInt(offset?.toString() ?? '0'))
      .limit(parseInt(limit?.toString() ?? '0'));
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default {
  login,
  signup,
  getUser,
  getSelfUser,
  updateUser,
  updateSelfUser,
  deleteUser,
  getAllUser,
};
