import mongoose from 'mongoose';

export const Address = {
  country: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  line1: { type: String, required: true },
  line2: String,
};

export const UserInfo = {
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phong: { type: String, required: true },
  sex: { type: String, enum: ['MALE', 'FEMALE', 'OTHER'] },
  avatar: String,
  address: Address,
};

const userSchema = new mongoose.Schema({
  displayName: String,
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  roll: { type: String, enum: ['USER', 'ADMIN'], default: 'USER' },
  birthday: { type: String, required: true },
  info: UserInfo,
});
