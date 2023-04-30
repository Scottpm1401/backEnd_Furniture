import { NextFunction, Request, Response } from 'express';
import mongoose, { FilterQuery } from 'mongoose';
import { CMSList } from '../../models/api/cms';
import Subscription, {
  SubscriptionModel,
  SubscriptionResponse,
  SubscriptionType,
} from '../../models/subscription';
import { subscriptionSerializer } from '../../serializers';
import { sendSubscriptionEmail } from '../../utils/email';

const subscribe = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, address, phone, name }: SubscriptionType = req.body;

    const findSubscription = await Subscription.find({ email });

    if (findSubscription.length > 0)
      return res.status(500).json({
        message: 'error.subscription.already_subscribe',
      });

    const _id = new mongoose.Types.ObjectId();

    const subscription = new Subscription({
      _id,
      email,
      address,
      phone,
      name,
    });

    const savedSubscription = await subscription.save();
    if (!savedSubscription)
      return res
        .status(500)
        .json({ message: 'error.subscription.failed_to_subscribe' });
    await sendSubscriptionEmail(email);
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getSubscriptions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { offset, limit, search } = req.query;
    const searchFilter = search
      ? { $text: { $search: search.toString() } }
      : {};
    const filter: FilterQuery<SubscriptionModel> = {
      ...searchFilter,
    };

    const subscriptions = await Subscription.find(filter)
      .skip(parseInt(offset?.toString() ?? '0'))
      .limit(parseInt(limit?.toString() ?? '0'))
      .sort({ createdAt: -1 });
    const total = await Subscription.find(filter).count();

    const formattedSubscriptions = subscriptions.map((order) =>
      subscriptionSerializer(order)
    );

    return res
      .status(200)
      .json({ data: formattedSubscriptions, total } as CMSList<
        SubscriptionResponse[]
      >);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default { subscribe, getSubscriptions };
