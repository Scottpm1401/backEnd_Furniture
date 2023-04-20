import Joi from 'joi';
import {
  ForgotPasswordRequest,
  ResetPasswordRequest,
  ChangePasswordRequest,
  LogoutRequest,
  RefreshTokenRequest,
} from '../../models/api/auth';

import { UserTypeModel } from '../../models/user';
import { FORM_VALIDATE } from '../Joi';

const AuthSchema = {
  login: Joi.object({
    username: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().required(),
  }),
  signUp: Joi.object<UserTypeModel>({
    email: Joi.string().email().required(),
    username: Joi.string()
      .min(FORM_VALIDATE.username.min)
      .max(FORM_VALIDATE.username.max)
      .required(),
    password: Joi.string()
      .min(FORM_VALIDATE.password.min)
      .max(FORM_VALIDATE.password.max)
      .required(),
    birthday: Joi.string().required(),
    displayName: Joi.string().required(),
  }),
  logout: Joi.object<LogoutRequest>({
    refreshToken: Joi.string().required(),
  }),
  refreshToken: Joi.object<RefreshTokenRequest>({
    refreshToken: Joi.string().required(),
  }),
  changePassword: Joi.object<ChangePasswordRequest>({
    password: Joi.string().required(),
    newPassword: Joi.string()
      .min(FORM_VALIDATE.password.min)
      .max(FORM_VALIDATE.password.max)
      .required(),
  }),
  forgotPassword: Joi.object<ForgotPasswordRequest>({
    email: Joi.string().email().required(),
  }),
  resetPassword: Joi.object<ResetPasswordRequest>({
    password: Joi.string()
      .min(FORM_VALIDATE.password.min)
      .max(FORM_VALIDATE.password.max)
      .required(),
    token: Joi.string().required(),
  }),
};

export default AuthSchema;
