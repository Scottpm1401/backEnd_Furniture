import { NextFunction, Request, Response } from 'express';
import moment from 'moment';
import {
  BoughtProduct,
  Revenue,
  RevenuePerMonth,
  TopUser,
} from '../../models/analysis';
import Purchase from '../../models/purchase';

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

const getBoughtProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const month = req.params.month;

    const currentYear = moment().year();
    const startDate = moment(month, 'MM')
      .year(currentYear)
      .startOf('month')
      .toDate();
    const endDate = moment(month, 'MM')
      .year(currentYear)
      .endOf('month')
      .toDate();

    const purchases = await Purchase.find({
      createdAt: {
        $gte: startDate,
        $lt: endDate,
      },
    });

    const boughtProducts: BoughtProduct[] = [];

    purchases.forEach((purchase) => {
      purchase.products.forEach((product) => {
        const index = boughtProducts.findIndex(
          (item) => item.product_id === product.product_id
        );
        if (index !== -1) {
          boughtProducts[index].num_of_purchase += product.quantity;
        } else {
          boughtProducts.push({
            product_id: product.product_id,
            title: product.title,
            num_of_purchase: product.quantity,
          });
        }
      });
    });

    res.status(200).json(boughtProducts);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getTop10Users = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const month = req.params.month;

  const currentYear = moment().year();
  const startDate = moment(month, 'MM')
    .year(currentYear)
    .startOf('month')
    .toDate();
  const endDate = moment(month, 'MM').year(currentYear).endOf('month').toDate();

  try {
    const topUsers: TopUser[] = await Purchase.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: '$user_id',
          name: { $first: '$billingDetails.name' },
          email: { $first: '$billingDetails.email' },
          phone: { $first: '$billingDetails.phone' },
          paid: { $sum: '$total_bill' },
          bought_products_quantity: { $sum: { $size: '$products' } },
        },
      },
      { $sort: { paid: -1 } },
      { $limit: 10 },
    ]);

    res.json(topUsers);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default { getRevenuePerMonth, getBoughtProduct, getTop10Users };
