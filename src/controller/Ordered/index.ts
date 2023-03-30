import Purchase, {
  PurchaseType,
  PurchaseTypeModel,
} from '../../models/purchase';
import { NextFunction, Request, Response } from 'express';
import { getIdFromReq } from '../../utils/token';
import { FilterQuery } from 'mongoose';
import { CMSList, UpdateOrderedRequest } from '../../models/api/cms';

const getOrderedList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { offset, limit, search } = req.query;
    const searchFilter = search
      ? { $text: { $search: search.toString() } }
      : {};
    const filter: FilterQuery<PurchaseTypeModel> = {
      ...searchFilter,
    };

    const ordered = await Purchase.find(filter)
      .skip(parseInt(offset?.toString() ?? '0'))
      .limit(parseInt(limit?.toString() ?? '0'))
      .sort({ createdAt: -1 });
    const total = await Purchase.find(filter).count();

    return res
      .status(200)
      .json({ data: ordered, total } as CMSList<PurchaseType[]>);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getSelfOrdered = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = getIdFromReq(req);
    const purchase = await Purchase.find({ user_id: _id }).sort({
      createdAt: -1,
    });
    if (purchase) return res.status(200).json(purchase);
    return res.status(404).json({ message: 'Purchase not found' });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getOrdered = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params.id;
    const purchase = await Purchase.findById(_id);
    if (purchase) return res.status(200).json(purchase);
    return res.status(404).json({ message: 'Purchase not found' });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const updateOrdered = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = req.params.id;
    const {
      status,
      arrive_date,
      package_date,
      total_bill,
      products,
      billingDetails,
    }: UpdateOrderedRequest = req.body;
    const purchase = await Purchase.findOneAndUpdate(
      { _id },
      {
        $set: {
          status,
          arrive_date,
          package_date,
          total_bill,
          products,
          billingDetails,
        },
      },
      { new: true }
    );
    return res.status(200).json(purchase);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default {
  getOrdered,
  getOrderedList,
  getSelfOrdered,
  updateOrdered,
};
