import { NextFunction, Request, Response } from 'express';
import moment from 'moment';
import { Revenue, RevenuePerMonth } from '../models/analysis';
import Purchase from '../models/purchase';
import { getIdFromReq } from '../utils/token';

const getRevenuePerMonth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Calculate the start date for the past 5 years
    const startDate = moment().toDate();
    startDate.setFullYear(startDate.getFullYear() - 5);

    // Group purchases by month and year and calculate total revenue per month
    const revenuePerMonth: RevenuePerMonth[] = await Purchase.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate },
        },
      },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' },
          },
          revenue: { $sum: '$total_bill' },
        },
      },
      {
        $project: {
          _id: 0,
          year: '$_id.year',
          month: '$_id.month',
          revenue: 1,
        },
      },
      {
        $sort: {
          year: 1,
          month: 1,
        },
      },
    ]);

    // Reshape the result to match the desired format
    const revenuePerYear = revenuePerMonth.reduce(
      (acc: Revenue[], { year, month, revenue }) => {
        const yearData = acc.find((data) => data.year === year);
        if (yearData) {
          yearData.data.push({ month, revenue });
        } else {
          acc.push({ year, data: [{ month, revenue }] });
        }
        return acc;
      },
      []
    );

    res.json(revenuePerYear);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getMostBoughtProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const month = parseInt(req.params.month);
    const startDate = moment()
      .month(month - 1)
      .startOf('month')
      .toDate();
    const endDate = moment()
      .month(month - 1)
      .endOf('month')
      .toDate();
    const purchases = await Purchase.find({
      createdAt: {
        $gte: startDate,
        $lt: endDate,
      },
    }).populate('products.product_id');
    return res.json(purchases);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export default { getRevenuePerMonth, getMostBoughtProduct };
