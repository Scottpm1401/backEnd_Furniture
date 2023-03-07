import { NextFunction, Request, Response } from 'express';
import { ProductCartType } from '../models/cart';
import Product from '../models/product';
import User from '../models/user';
import { getIdFromReq } from '../utils/token';

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
            $inc: { cart_total: product.price },
          },

          { new: true }
        );
        if (user) {
          return res.status(201).json(user.cart);
        } else {
          return res.status(500).json({ message: 'Failed To Add Product' });
        }
      } else {
        return res.status(500).json({ message: 'Product Does Not Exist' });
      }
    } else {
      return res.status(500).json({ message: 'Product Does Not Exist' });
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
    const product = user_cart?.find((item) => item.product_id === product_id);
    if (product_id && color && product && user_cart) {
      const user = await User.findOneAndUpdate(
        { _id, cart: { $elemMatch: { product_id, color } } },
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
      if (user) {
        return res.status(200).json(user.cart);
      } else {
        return res.status(500).json({ message: 'Failed To Remove Product' });
      }
    } else {
      return res.status(500).json({
        message: 'Product Does Not Existed In Your Cart',
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const clearCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = getIdFromReq(req);
    const user = await User.findOneAndUpdate(
      { _id },
      {
        $set: {
          cart: [],
          cart_total: 0,
        },
      },
      { new: true }
    );
    if (user) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ message: 'Failed To Clear Cart' });
    }
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
    if (product_id && product && color && quantity) {
      const user = await User.findOneAndUpdate(
        { _id, cart: { $elemMatch: { product_id, color } } },
        {
          $inc: {
            'cart.$.quantity': quantity,
            cart_total: product.price * quantity,
          },
        },
        { new: true }
      );
      if (user) {
        return res.status(200).json(user.cart);
      } else {
        return res
          .status(500)
          .json({ message: 'Failed To Update Product Cart' });
      }
    } else {
      return res.status(500).json({
        message: 'Product Does Not Existed In Your Cart',
      });
    }
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
