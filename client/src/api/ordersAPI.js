import { firestore } from '../firebase';
import { formatDate } from '../utils/format';

export class OrdersAPI {
  static processPayment(token, amount) {
    const options = {
      method: 'POST',
      body: JSON.stringify({ token, amount }),
      headers: { 'Content-type': 'application/json' }
    };
    return fetch('/stripe-checkout', options);
  };

  static persistOrder(order) {
    return firestore.collection('orders').add(order);
  }

  static async fetchUserOrders(id) {
    const ordersSnapshot = await firestore
      .collection('orders')
      .where('clientId', '==', id)
      .orderBy('dateOfPurchase', 'desc')
      .get();

    const byDateObject = ordersSnapshot.docs.reduce((acc, orderDoc) => {
      const { dateOfPurchase, products, total, receiptUrl } = orderDoc.data();
      const date = formatDate(dateOfPurchase.toDate());
      const order = { id: orderDoc.id, products, total, receiptUrl };
      if (!acc[date]) {
        acc[date] = [order];
      } else {
        acc[date].push(order);
      }
      return acc;
    }, {});

    const byDateArray = Object
      .keys(byDateObject)
      .map(date => ({ date, ordersList: byDateObject[date] }));

    return byDateArray;
  }
};