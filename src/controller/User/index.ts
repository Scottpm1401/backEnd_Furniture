import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { parseInt } from 'lodash';
import { FilterQuery } from 'mongoose';
import { CMSList } from '../../models/api/cms';
import {
  UpdateSelfUserRequest,
  UpdateUserRequest,
} from '../../models/api/user';

import User, { UserResponse, UserTypeModel } from '../../models/user';
import { userSerializer } from '../../serializers';
import { getIdFromReq } from '../../utils/token';

const getSelfUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = getIdFromReq(req);
    const user = await User.findById(_id);
    if (user) return res.status(200).json(userSerializer(user));
    return res.status(404).json({ message: 'error.user.not_found' });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id);
    if (user) return res.status(200).json(userSerializer(user));
    return res.status(404).json({ message: 'error.user.not_found' });
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
    if (findUserByEmail.length > 0 && findUserByEmail[0]._id.toString() !== _id)
      return res
        .status(500)
        .json({ message: 'error.auth.email_already_existed' });
    if (
      findUserByUsername.length > 0 &&
      findUserByUsername[0]._id.toString() !== _id
    )
      return res
        .status(500)
        .json({ message: 'error.auth.username_already_existed' });

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
    );

    if (!updatedUser)
      return res
        .status(500)
        .json({ message: 'error.user.failed_to_update_user' });
    return res.status(200).json(userSerializer(updatedUser));
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

    if (findUser.length > 0 && findUser[0]._id.toString() !== _id) {
      return res
        .status(500)
        .json({ message: 'error.auth.username_already_existed' });
    } else {
      const updatedUser = await User.findOneAndUpdate(
        { _id },
        { $set: { displayName, username, birthday, info } },
        { new: true }
      );
      if (!updatedUser)
        return res
          .status(500)
          .json({ message: 'error.user.failed_to_update_user' });
      return res.status(200).json(userSerializer(updatedUser));
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
    return res.status(500).json({ message: err });
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
      .limit(parseInt(limit?.toString() ?? '0'));

    const total = await User.find(filter).count();

    const formattedUsers = users.map((user) => userSerializer(user));

    return res.status(200).json({
      data: formattedUsers,
      total,
    } as CMSList<UserResponse[]>);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default {
  getUser,
  getSelfUser,
  updateUser,
  updateSelfUser,
  deleteUser,
  getAllUser,
};
