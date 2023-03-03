import { NextFunction, Request, Response } from 'express';
import mongoose, { FilterQuery } from 'mongoose';
import Product, {
  ProductSort,
  ProductType,
  ProductTypeModel,
  RatingType,
} from '../models/product';
import Purchase from '../models/purchase';
import User from '../models/user';
import { getIdFromReq } from '../utils/token';

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { offset, limit, title, category, brand, color, price, sort } =
      req.query;

    const titleFilter = title ? { $text: { $search: title.toString() } } : {};
    const categoryFilter = category ? { category: category.toString() } : {};
    const brandFilter = brand ? { brand: brand.toString() } : {};
    const colorFilter = color ? { colors: { $in: [color.toString()] } } : {};
    const priceFilter = price
      ? { price: { $lte: parseFloat(price.toString()) } }
      : {};
    const filter: FilterQuery<ProductTypeModel> = {
      ...titleFilter,
      ...categoryFilter,
      ...brandFilter,
      ...colorFilter,
      ...priceFilter,
    };
    let sortBy = {};
    switch (sort?.toString()) {
      case ProductSort.price_des:
        sortBy = { price: -1 };
        break;
      case ProductSort.price_asc:
        sortBy = { price: 1 };
        break;
      case ProductSort.name_des:
        sortBy = { title: -1 };
        break;
      case ProductSort.name_asc:
        sortBy = { title: 1 };
        break;
      default:
        sortBy = {};
        break;
    }

    const products = await Product.find(filter)
      .sort(sortBy)
      .skip(parseInt(offset?.toString() ?? '0'))
      .limit(parseInt(limit?.toString() ?? '0'));
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getFeaturedProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { limit } = req.query;
    const featuredProducts = await Product.find()
      .sort({
        'rating.rate': 'desc',
        'rating.num_of_rate': 'desc',
        price: 'desc',
      })
      .limit(parseInt(limit?.toString() ?? '3'));
    return res.status(200).json(featuredProducts);
  } catch (err) {
    return res.status(500).json({ messsage: err });
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
      storage_quantity,
      colors,
      review,
      rating,
    }: ProductType = req.body;
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
      storage_quantity,
      colors,
      review,
      rating,
    }: ProductType = req.body;
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

const ratingProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = getIdFromReq(req);
    const product_id = req.params.id;
    const { rate, purchase_id, color } = req.body;

    if (_id && product_id && rate && purchase_id && color) {
      const user = await User.findById(_id);
      const purchase = await Purchase.findById(purchase_id);
      if (purchase && user) {
        const productIndex = purchase.products.findIndex(
          (item) => item.product_id === product_id && item.color === color
        );
        if (productIndex > -1) {
          purchase.products[productIndex].rating = rate;
          await purchase.save();
          const product = await Product.findById(product_id);
          if (product) {
            const newRating: RatingType = {
              rate: product.rating?.rate
                ? (product.rating.rate * product.rating.num_of_rate + rate) /
                  (product.rating.num_of_rate + 1)
                : rate,
              num_of_rate: product.rating?.num_of_rate
                ? product.rating.num_of_rate + 1
                : 1,
            };

            const updatedProduct = await Product.findOneAndUpdate(
              { _id: product_id },
              {
                $addToSet: {
                  review: {
                    user_id: user._id,
                    name: user.username,
                    email: user.email,
                    phone: user.info.phone,
                  },
                },

                $set: {
                  rating: newRating,
                },
              },
              { new: true }
            );
            if (updatedProduct) {
              res.status(200).json({ success: true });
            } else {
              return res
                .status(500)
                .json({ message: 'Failed To Rating Product' });
            }
          } else {
            return res
              .status(500)
              .json({ message: 'Failed To Rating Product' });
          }
        } else {
          return res
            .status(500)
            .json({ message: 'Failed To find product in purchase' });
        }
      } else {
        return res.status(500).json({ message: 'Failed to find purchase' });
      }
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default {
  getFeaturedProducts,
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  ratingProduct,
};
