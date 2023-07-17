import Joi from 'joi';
import { UpdateSelfUserRequest } from '../../models/api/user';
import { AddressType, UserInfoType, UserType } from '../../models/user';
import { FORM_VALIDATE } from '../Joi';

const UserInfoSchema = Joi.object<UserInfoType>({
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
});

const UserSchema = {
  update: Joi.object<UserType>({
    email: Joi.string().email(),
    username: Joi.string()
      .min(FORM_VALIDATE.username.min)
      .max(FORM_VALIDATE.username.max),
    password: Joi.string()
      .min(FORM_VALIDATE.password.min)
      .max(FORM_VALIDATE.password.max),
    birthday: Joi.string(),
    displayName: Joi.string(),
    role: Joi.string().valid('USER', 'ADMIN', 'SUPER_ADMIN', 'SHIPPER'),
    info: UserInfoSchema,
  }),
  update_self: Joi.object<UpdateSelfUserRequest>({
    username: Joi.string()
      .min(FORM_VALIDATE.username.min)
      .max(FORM_VALIDATE.username.max),
    displayName: Joi.string(),
    birthday: Joi.string(),
    info: UserInfoSchema,
  }),
};

export default UserSchema;
