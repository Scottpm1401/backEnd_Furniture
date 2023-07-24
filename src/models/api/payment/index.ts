import { BillingDetailsType } from 'src/models/purchase';
import Stripe from 'stripe';

export type CheckoutRequest = {
  paymentMethodType: string;
  currency?: string;
};

export type CheckoutResponse = {
  clientSecret: string | null;
  nextAction: Stripe.PaymentIntent.NextAction | null;
};

export type ConfirmPaymentRequest = {
  billing_details: BillingDetailsType;
  payment_method: string;
};
