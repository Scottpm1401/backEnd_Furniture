import { ProductResponse, ProductTypeModel } from '../../models/product';

const productSerializer = (product: ProductTypeModel) => {
  const formattedProduct: ProductResponse = {
    _id: product._id,
    img: product.img,
    gallery: product.gallery,
    title: product.title,
    description: product.description,
    category: product.category,
    brand: product.brand,
    rating: product.rating,
    review: product.review,
    price: product.price,
    sku: product.sku,
    storage_quantity: product.storage_quantity,
    colors: product.colors,
  };

  return formattedProduct;
};

export default productSerializer;
