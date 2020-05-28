import React from 'react';

import styles from './CheckoutPage.module.scss';
import CheckoutList from './CheckoutList';
import CheckoutSummary from './CheckoutSummary';

const CheckoutPage = () => {
  return (
    <div className={styles.checkout}>
      <div className={styles.container}>
        <div className={styles.leftPane}>
          <CheckoutList />
        </div>
        <div className={styles.rightPane}>
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;