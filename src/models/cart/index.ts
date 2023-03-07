/*********************TYPE & INTERFACE*****************************/
export type ProductCartType = {
  product_id: string;
  img: string;
  title: string;
  price: number;
  color: string;
  quantity: number;
  brand: string;
  category: string;
};

/*******************************SCHEMA*****************************/
export const ProductCart = {
  product_id: { type: String, required: true },
  img: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  quantity: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
};
