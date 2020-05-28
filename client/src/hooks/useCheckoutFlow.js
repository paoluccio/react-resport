import { useSelector } from 'react-redux';
import { useStripe } from 'react-stripe-hooks';

import { OrdersAPI } from '../api/ordersAPI';
import { selectBagProducts, selectBagTotalPrice, selectUser } from '../redux';
import { generateCheckoutError } from '../utils/errors';

export const useCheckoutFlow = () => {
  const { stripe } = useStripe();
  const { id, email } = useSelector(selectUser);
  const products = useSelector(selectBagProducts);
  const total = useSelector(selectBagTotalPrice);

  return async clientName => {
    const { token, error } = await stripe.createToken({ name: clientName || email });
    if (error) {
      generateCheckoutError('token', error.message);
    }

    const paymentResponse = await OrdersAPI.processPayment(token.id, total);
    if (!paymentResponse.ok) {
      const error = await paymentResponse.json();
      generateCheckoutError('charge', error.message);
    }
    const paymentData = await paymentResponse.json();

    await OrdersAPI.persistOrder({
      clientId: id,
      products,
      total,
      ...paymentData,
      dateOfPurchase: new Date()
    });
  };
};