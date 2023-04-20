import { UserInfoType } from '../../user';

export type UpdateUserRequest = {
  displayName?: String;
  username?: string;
  birthday?: string;
  info?: UserInfoType;
  role?: 'ADMIN' | 'USER';
  email?: string;
  password?: string;
};

export type UpdateSelfUserRequest = {
  displayName?: String;
  username?: string;
  birthday?: string;
  info?: UserInfoType;
};
