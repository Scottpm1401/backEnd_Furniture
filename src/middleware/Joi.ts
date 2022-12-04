import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';

import Logging from '../library/Logging';
import { AddressType, UserInfoType, UserTypeModel } from '../models/user';

export const ValidateJoi = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);

      next();
    } catch (error) {
      Logging.error(error);

      return res.status(422).json({ error });
    }
  };
};

export const Schemas = {
  user: {
    login: Joi.object({
      username: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().required(),
    }),
    create: Joi.object<UserTypeModel>({
      email: Joi.string().email().required(),
      username: Joi.string().min(3).max(30).required(),
      password: Joi.string().min(6).max(30).required(),
      birthday: Joi.string().required(),
      displayName: Joi.string(),
      info: Joi.object<UserInfoType>({
        first_name: Joi.string().max(30),
        last_name: Joi.string().max(30),
        phone: Joi.string().max(20),
        sex: Joi.string().valid('MALE', 'FEMALE', 'OTHER'),
        avatar: Joi.string(),
        address: Joi.object<AddressType>({
          country: Joi.string(),
          city: Joi.string(),
          state: Joi.string(),
          line1: Joi.string(),
          line2: Joi.string(),
        }),
      }),
    }),
    update: Joi.object<UserTypeModel>({
      email: Joi.string().email(),
      username: Joi.string().min(3).max(30),
      password: Joi.string().min(6).max(30),
      birthday: Joi.string(),
      displayName: Joi.string(),
      info: Joi.object<UserInfoType>({
        first_name: Joi.string().max(30),
        last_name: Joi.string().max(30),
        phone: Joi.string().max(20),
        sex: Joi.string().valid('MALE', 'FEMALE', 'OTHER'),
        avatar: Joi.string(),
        address: Joi.object<AddressType>({
          country: Joi.string(),
          city: Joi.string(),
          state: Joi.string(),
          line1: Joi.string(),
          line2: Joi.string(),
        }),
      }),
    }),
  },
};
