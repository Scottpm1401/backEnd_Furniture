import {
  BillingDetailsType,
  PurchaseProduct,
  PurchaseStatus,
} from '../../purchase';
import { TemplateType } from '../../template';

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

export type CreateTemplateRequest = Omit<TemplateType, '_id' | 'active'>;

export type UpdateTemplateRequest = Partial<
  Omit<TemplateType, '_id' | 'active'>
>;
