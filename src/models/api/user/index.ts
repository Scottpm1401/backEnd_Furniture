import { Role, UserInfoType } from '../../user';

export type UpdateUserRequest = {
  displayName?: String;
  username?: string;
  birthday?: string;
  info?: UserInfoType;
  role?: Role;
  email?: string;
  password?: string;
};

export type UpdateSelfUserRequest = {
  displayName?: String;
  username?: string;
  birthday?: string;
  info?: UserInfoType;
};
