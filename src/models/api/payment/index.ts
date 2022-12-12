import Stripe from 'stripe';
import { BillingDetailsType } from '../../purchase';

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
  card_brand: string;
};
