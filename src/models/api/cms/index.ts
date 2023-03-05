import {
  BillingDetailsType,
  PurchaseProduct,
  PurchaseStatus,
} from '../../purchase';

export type CMSList<T> = {
  total: number;
  data: T;
};

export type UpdateOrderedRequest = {
  status?: PurchaseStatus;
  arrive_date?: string;
  package_date?: string;
  total_bill?: number;
  products?: PurchaseProduct[];
  billingDetails?: BillingDetailsType;
};
