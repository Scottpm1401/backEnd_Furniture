import { Role, UserInfoType } from 'src/models/user';

export type UpdateUserRequest = {
  displayName?: string;
  username?: string;
  birthday?: string;
  info?: UserInfoType;
  role?: Role;
  email?: string;
  password?: string;
};

export type UpdateSelfUserRequest = {
  displayName?: string;
  username?: string;
  birthday?: string;
  info?: UserInfoType;
};
