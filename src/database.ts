import mongoose from 'mongoose';

export const db = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB || '');
    console.log('database connected');
  } catch (err) {
    console.log('failed to connect db', err);
  }
};
