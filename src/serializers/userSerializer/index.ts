import { UserResponse, UserTypeModel } from 'src/models/user';

const userSerializer = (user: UserTypeModel) => {
  const formattedUse: UserResponse = {
    _id: user._id,
    displayName: user.displayName,
    email: user.email,
    username: user.username,
    role: user.role,
    birthday: user.birthday,
    info: user.info,
    cart_total: user.cart_total,
    cart: user.cart
  };

  return formattedUse;
};

export default userSerializer;
