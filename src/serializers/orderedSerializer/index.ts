import { PurchaseResponse, PurchaseTypeModel } from 'src/models/purchase';

const orderedSerializer = (ordered: PurchaseTypeModel) => {
  const formattedOrdered: PurchaseResponse = {
    _id: ordered._id,
    status: ordered.status,
    total_bill: ordered.total_bill,
    payment_method: ordered.payment_method,
    package_date: ordered.package_date,
    arrive_date: ordered.arrive_date,
    billingDetails: ordered.billingDetails,
    products: ordered.products,
    user_id: ordered.user_id,
    createdAt: ordered.createdAt,
    updatedAt: ordered.updatedAt
  };

  return formattedOrdered;
};

export default orderedSerializer;
