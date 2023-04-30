import {
  SubscriptionModel,
  SubscriptionResponse,
} from '../../models/subscription';

const subscriptionSerializer = (subscription: SubscriptionModel) => {
  const formattedSubscription: SubscriptionResponse = {
    _id: subscription._id,
    email: subscription.email,
    name: subscription.name,
    phone: subscription.phone,
    address: subscription.address,
  };
  return formattedSubscription;
};

export default subscriptionSerializer;
