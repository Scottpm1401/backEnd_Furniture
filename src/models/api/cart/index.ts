import { ProductCartType } from '../../cart';
import { UserType } from '../../user';

export type AddToCartRequest = Pick<
  ProductCartType,
  'product_id' | 'color' | 'quantity'
>;

export type RemoveFromCartRequest = Pick<
  ProductCartType,
  'product_id' | 'color'
>;

export type UpdateProductCartQuantityResponse = Pick<
  UserType,
  'cart' | 'cart_total'
>;

export type UpdateProductCartQuantityRequest = Pick<
  ProductCartType,
  'product_id' | 'color' | 'quantity'
>;
