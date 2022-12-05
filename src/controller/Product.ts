import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Product, { ProductType } from '../models/product';

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { offset, limit } = req.query;
    const products = await Product.find()
      .skip(parseInt(offset?.toString() ?? '0'))
      .limit(parseInt(limit?.toString() ?? '0'));
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params.id;
    const product = await Product.findById(_id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      img,
      gallery,
      title,
      description,
      category,
      brand,
      price,
      sku,
      shipping,
      storage_quantity,
      colors,
      review,
      rating,
    } = req.body as ProductType;
    const _id = new mongoose.Types.ObjectId();
    const product = new Product({
      _id,
      img,
      gallery,
      title,
      description,
      category,
      brand,
      price,
      sku,
      shipping,
      storage_quantity,
      colors,
      review,
      rating,
    });
    const savedProduct = await product.save();
    if (savedProduct) {
      return res.status(201).json(savedProduct);
    } else {
      return res.status(500).json({ message: 'Faild to create new product' });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = req.params.id;
    const {
      img,
      gallery,
      title,
      description,
      category,
      brand,
      price,
      sku,
      shipping,
      storage_quantity,
      colors,
      review,
      rating,
    } = req.body as ProductType;
    const updatedProduct = await Product.findOneAndUpdate(
      { _id },
      {
        $set: {
          img,
          gallery,
          title,
          description,
          category,
          brand,
          price,
          sku,
          shipping,
          storage_quantity,
          colors,
          review,
          rating,
        },
      },
      { new: true }
    );
    return res.status(200).json(updatedProduct);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = req.params.id;
    const deletedProduct = await Product.deleteOne({ _id });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
