import { Request, Response, NextFunction } from 'express';
import User from '../models/user';
import { getIdFromReq } from '../utils/token';
import Stripe from 'stripe';
import {
  CheckoutRequest,
  CheckoutResponse,
  ConfirmPaymentRequest,
} from '../models/api/payment';
import { PurchaseProduct, PurchaseType } from '../models/purchase';
import moment from 'moment';
import { stripe } from '..';
import { floor } from 'lodash';

const checkout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user_id = getIdFromReq(req);
    const { paymentMethodType, currency }: CheckoutRequest = req.body;

    const user = await User.findById(user_id);
    if (user) {
      // Create a PaymentIntent with the order amount and currency.
      const params: Stripe.PaymentIntentCreateParams = {
        amount: floor(user.cart_total, 2) * 100, //api count by cent (100cent = $1)
        currency: currency ?? 'usd',
        description: `name: ${user.username}, email: ${user.email}`,
        payment_method_types: [paymentMethodType],
      };

      // If this is for an ACSS payment, we add payment_method_options to create
      // the Mandate.
      if (paymentMethodType === 'acss_debit') {
        params.payment_method_options = {
          acss_debit: {
            mandate_options: {
              payment_schedule: 'sporadic',
              transaction_type: 'personal',
            },
          },
        };
      } else if (paymentMethodType === 'customer_balance') {
        params.payment_method_data = {
          type: 'customer_balance',
        } as any;
        params.confirm = true;
        params.customer =
          user_id || (await stripe.customers.create().then((data) => data.id));
      }

      const paymentIntent: Stripe.PaymentIntent =
        await stripe.paymentIntents.create(params);
      const resData: CheckoutResponse = {
        clientSecret: paymentIntent.client_secret,
        nextAction: paymentIntent.next_action,
      };
      return res.status(200).json(resData);
    } else {
      return res.status(500).json({ message: 'User Not Found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const confirmPayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user_id = getIdFromReq(req);
    const { card_brand, billing_details }: ConfirmPaymentRequest = req.body;
    const user = await User.findById(user_id);
    if (user) {
      const purchase: PurchaseType = {
        status: 'PACKAGE',
        total_bill: user.cart_total,
        payment_method: card_brand,
        package_date: moment().format(),
        billingDetails: billing_details,
        products: user.cart,
      };
      const newUser = await User.findOneAndUpdate(
        { _id: user_id },
        {
          $addToSet: {
            purchase,
          },
        },
        { new: true }
      );
      if (newUser) {
        return res.status(200).json(newUser.purchase);
      } else {
        return res.status(500).json({ message: 'Failed To Checkout' });
      }
    } else {
      return res.status(404).json({ message: 'User Not Found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default { checkout, confirmPayment };
