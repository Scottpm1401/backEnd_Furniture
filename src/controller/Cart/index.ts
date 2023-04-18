import { NextFunction, Request, Response } from 'express';
import { UpdateProductCartQuantityResponse } from '../../models/api/user';
import { ProductCartType } from '../../models/cart';
import Product from '../../models/product';
import User from '../../models/user';
import { getIdFromReq } from '../../utils/token';

const addToCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = getIdFromReq(req);
    const { product_id, color, quantity } = req.body;
    if (product_id && color && quantity) {
      const product = await Product.findById(product_id);
      if (product && product.colors.findIndex((item) => item === color) > -1) {
        const newProductCart: ProductCartType = {
          product_id,
          color,
          img: product.img,
          title: product.title,
          price: product.price,
          quantity,
          brand: product.brand,
          category: product.category,
        };
        const user = await User.findOneAndUpdate(
          { _id },
          {
            $addToSet: { cart: newProductCart },
            $inc: { cart_total: product.price * quantity },
          },

          { new: true }
        );
        if (user) {
          return res.status(201).json(user.cart);
        } else {
          return res
            .status(500)
            .json({ message: 'error.user.cart.failed_to_add_product' });
        }
      } else {
        return res.status(500).json({ message: 'error.product.not_found' });
      }
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const removeFromCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = getIdFromReq(req);
    const { product_id, color } = req.body;
    const user_cart = (await User.findById(_id))?.cart;
    if (!user_cart)
      return res.status(404).json({ message: 'error.user.cart.not_found' });
    const product = user_cart.find((item) => item.product_id === product_id);
    if (!product || !product_id || !color)
      return res
        .status(404)
        .json({ message: 'error.user.cart.product_not_exist' });

    const updatedUser = await User.findOneAndUpdate(
      {
        _id,
        cart: { $elemMatch: { product_id, color } },
      },
      {
        $inc: {
          cart_total: -(product.price * product.quantity),
        },
        $pull: {
          cart: { product_id, color },
        },
      },
      { new: true }
    );
    if (!updatedUser)
      return res
        .status(500)
        .json({ message: 'error.user.cart.failed_to_remove' });
    return res.status(200).json(updatedUser.cart);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const clearCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = getIdFromReq(req);

    const updatedUser = await User.findOneAndUpdate(
      { _id },
      {
        $set: {
          cart: [],
          cart_total: 0,
        },
      },
      { new: true }
    );
    if (!updatedUser)
      return res
        .status(500)
        .json({ message: 'error.user.cart.failed_to_clear' });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const updateProductCartQuantity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = getIdFromReq(req);
    const { product_id, color, quantity } = req.body;
    const product = await Product.findById(product_id);
    if (!product_id || !product || !color || !quantity)
      return res.status(500).json({
        message: 'error.user.cart.product_not_exist',
      });

    let updatedUser = await User.findOne({
      _id,
      cart: { $elemMatch: { product_id, color } },
    });

    if (!updatedUser)
      return res
        .status(500)
        .json({ message: 'error.user.cart.failed_to_update_product' });

    let cart_total = 0;
    updatedUser.cart.forEach((item) => {
      if (item.product_id === product_id && item.color === color) {
        item.quantity = quantity;
      }
      cart_total += item.price * item.quantity;
    });
    updatedUser.cart_total = cart_total;
    await updatedUser.save();

    return res
      .status(200)
      .json({
        cart: updatedUser.cart,
        cart_total,
      } as UpdateProductCartQuantityResponse);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default {
  addToCart,
  removeFromCart,
  updateProductCartQuantity,
  clearCart,
};
