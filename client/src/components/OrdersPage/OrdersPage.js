import React from 'react';

import styles from './OrdersPage.module.scss';
import UserInfo from './UserInfo';
import DatesList from './DatesList';

const OrdersPage = () => {
  return (
    <div className={styles.orders}>
      <div className={styles.container}>
        <div className={styles.leftPane}>
          <UserInfo />
        </div>
        <div className={styles.rightPane}>
          <DatesList />
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
