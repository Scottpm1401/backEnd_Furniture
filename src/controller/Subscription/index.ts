import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Subscription, { SubscriptionType } from '../../models/subscription';
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

export default { subscribe };
