import React from 'react';

import styles from './OrdersList.module.scss';
import ProductsList from './ProductsList';

const OrdersList = ({ ordersList }) => {
  return (
    <ul className={styles.ordersList}>
      {ordersList.map(({ id, products, total, receiptUrl }) => (
        <li key={id} className={styles.singleOrder}>
          <div className={styles.orderId}>
            Order id - {id}
          </div>
          <ProductsList products={products} />
          <div className={styles.orderDetails}>
            <span className={styles.itemsTotal}>
              Total items{String.fromCharCode(9656)}
              {products.reduce(
                (count, product) => count + product.quantity, 0
              )}
            </span>
            <span className={styles.amountTotal}>
              Total paid{String.fromCharCode(9656)}${total}
            </span>
            <a
              href={receiptUrl}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.receipt}
            >
              Receipt
          </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OrdersList;