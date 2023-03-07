import Purchase, { PurchaseType, PurchaseTypeModel } from '../models/purchase';
import { NextFunction, Request, Response } from 'express';
import { getIdFromReq } from '../utils/token';
import { FilterQuery } from 'mongoose';
import { CMSList, UpdateOrderedRequest } from '../models/api/cms';

const getAnalysisProductByBrand = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default { getAnalysisProductByBrand };
