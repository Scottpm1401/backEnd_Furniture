/*********************TYPE & INTERFACE*****************************/
export type ProductCartType = {
  img: string;
  title: string;
  price: number;
  color: string;
  quantity: number;
};

/*******************************SCHEMA*****************************/
export const ProductCart = {
  img: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  quantity: { type: Number, required: true },
};
