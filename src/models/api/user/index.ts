import { UserInfoType } from '../../user';

export type LoginRequest = {
  email?: string;
  username?: string;
  password: string;
};

export type LogoutRequest = {
  refreshToken: string;
};

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

export type ChangePasswordRequest = {
  password: string;
  newPassword: string;
};

export type RefreshTokenRequest = {
  refreshToken: string;
};
