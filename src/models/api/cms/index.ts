import { BillingDetailsType, PurchaseStatus } from '../../purchase';
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
  billingDetails?: BillingDetailsType;
};

export type CreateTemplateRequest = Omit<TemplateType, 'active'>;

export type UpdateTemplateRequest = Partial<Omit<TemplateType, 'active'>>;
