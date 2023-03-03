import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { parseInt } from 'lodash';
import moment from 'moment';
import mongoose, { FilterQuery } from 'mongoose';
import { CMSList } from '../models/api/cms';
import {
  ChangePasswordRequest,
  LoginRequest,
  LogoutRequest,
  RefreshTokenRequest,
  UpdateSelfUserRequest,
  UpdateUserRequest,
} from '../models/api/user';

import User, { UserType, UserTypeModel } from '../models/user';
import { getIdFromReq, parseJwt, tokenGen } from '../utils/token';

let refreshTokens: string[] = [];

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { displayName, email, username, password, birthday }: UserType =
      req.body;
    const findUserByEmail = await User.find({ email });
    const findUserByUsername = await User.find({ username });
    if (findUserByEmail.length > 0)
      return res.status(500).json({ message: 'email_already_existed' });
    if (findUserByUsername.length > 0)
      return res.status(500).json({ message: 'username_already_existed' });

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
      const expiredDate = moment().add(7, 'days').format();
      const token = tokenGen({ _id: _id.toString(), role: savedUser.role }, 7);
      const refreshToken = tokenGen({ _id: _id.toString() }, 30);
      refreshTokens.push(refreshToken);
      return res
        .status(201)
        .json({ accessToken: token, expiredDate, refreshToken });
    } else {
      return res.status(500).json({ message: 'user_already_existed' });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, username, password }: LoginRequest = req.body;
    const findUser = username
      ? await User.find({ username })
      : await User.find({ email });
    if (findUser.length > 0) {
      const user = findUser[0];
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        const expiredDate = moment().add(7, 'days').format();
        const token = tokenGen(
          { _id: user._id.toString(), role: user.role },
          7
        );
        const refreshToken = tokenGen({ _id: user._id.toString() }, 30);
        refreshTokens.push(refreshToken);
        return res
          .status(200)
          .json({ accessToken: token, expiredDate, refreshToken });
      } else {
        return res.status(500).json({ message: 'incorrect_password' });
      }
    } else {
      return res.status(500).json({ message: 'invalid_email_username' });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const logout = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken }: LogoutRequest = req.body;
    if (refreshToken) {
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    }
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = getIdFromReq(req);
    const { password, newPassword }: ChangePasswordRequest = req.body;
    const user = await User.findById(_id);
    if (user) {
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const updatedUser = await User.findOneAndUpdate(
          { _id },
          { $set: { password: hashedPassword } },
          { new: true }
        );
        if (updatedUser) {
          const expiredDate = moment().add(7, 'days').format();
          const token = tokenGen(
            { _id: user._id.toString(), role: user.role },
            7
          );
          const refreshToken = tokenGen({ _id: user._id.toString() }, 30);
          refreshTokens.push(refreshToken);
          return res.status(200).json({
            accessToken: token,
            expiredDate,
            refreshToken,
          });
        } else
          res.status(500).json({ message: 'Failed to change user password' });
      } else {
        return res.status(500).json({ message: 'incorrect_password' });
      }
    }
    return res.status(500).json({ message: 'User not found' });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getSelfUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = getIdFromReq(req);
    const user = await User.findById(_id).select('-password');
    if (user) return res.status(200).json(user);
    return res.status(404).json({ message: 'User not found' });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id).select('-password');
    if (user) return res.status(200).json(user);
    return res.status(404).json({ message: 'User not found' });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params.id;
    const {
      displayName,
      username,
      birthday,
      info,
      role,
      email,
      password,
    }: UpdateUserRequest = req.body;
    const findUserByUsername = await User.find({ username });
    const findUserByEmail = await User.find({ email });
    if (findUserByEmail[0]._id.toString() !== _id)
      return res.status(500).json({ message: 'email_already_existed' });
    if (findUserByUsername[0]._id.toString() !== _id)
      return res.status(500).json({ message: 'username_already_existed' });

    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : undefined;
    const updatedUser = await User.findOneAndUpdate(
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
      },
      { new: true }
    ).select('-password');
    return res.status(200).json(updatedUser);
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
    const { displayName, username, birthday, info }: UpdateSelfUserRequest =
      req.body;
    const findUser = await User.find({ username });
    if (findUser.length > 0) {
      if (findUser[0]._id.toString() !== _id) {
        return res.status(500).json({ message: 'username_already_existed' });
      } else {
        const updatedUser = await User.findOneAndUpdate(
          { _id },
          { $set: { displayName, username, birthday, info } },
          { new: true }
        ).select('-password');
        return res.status(200).json(updatedUser);
      }
    } else {
      return res.status(500).json({ message: 'User not found' });
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
    const { offset, limit, search } = req.query;

    const searchFilter = search
      ? { $text: { $search: search.toString() } }
      : {};
    const filter: FilterQuery<UserTypeModel> = {
      ...searchFilter,
    };

    const users = await User.find(filter)
      .skip(parseInt(offset?.toString() ?? '0'))
      .limit(parseInt(limit?.toString() ?? '0'))
      .select('-password');

    const total = await User.find(filter).count();

    return res.status(200).json({ data: users, total } as CMSList<UserType[]>);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken }: RefreshTokenRequest = req.body;
    if (
      refreshToken &&
      refreshTokens.findIndex((token) => token === refreshToken) > -1
    ) {
      const { _id } = parseJwt(refreshToken);
      const user = await User.findById(_id);
      if (user) {
        const expiredDate = moment().add(7, 'days').format();
        const token = tokenGen(
          { _id: user._id.toString(), role: user.role },
          7
        );
        refreshTokens.push(refreshToken);
        return res.status(200).json({ accessToken: token, expiredDate });
      } else {
        return res.status(404).json({ message: 'User Not Found' });
      }
    } else {
      return res.status(500).json({ message: 'Invalid Refresh Token' });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default {
  login,
  logout,
  signup,
  getUser,
  getSelfUser,
  changePassword,
  updateUser,
  updateSelfUser,
  deleteUser,
  getAllUser,
  refreshToken,
};
