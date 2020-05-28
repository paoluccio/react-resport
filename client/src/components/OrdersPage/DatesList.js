import React from 'react';

import styles from './DatesList.module.scss';
import { useOrders } from '../../hooks/useOrders';
import Loader from '../shared/Loader';
import OrdersList from './OrdersList';
import Placeholder from '../shared/Placeholder';

const DatesList = () => {
  const { isFetching, ordersByDate } = useOrders();

  return (
    <ul className={styles.datesList}>
      <React.Fragment>
        {(isFetching && !ordersByDate.length) && (
          <Loader size='large' variant='dark' position='centered' />
        )}
        {ordersByDate.map(({ date, ordersList }) => (
          <li key={date} className={styles.singleDate}>
            <div className={styles.header}>
              <h2 className={styles.date}>{date}</h2>
              <h4 className={styles.ordersQuantity}>
                {ordersList.length} {ordersList.length > 1 ? 'orders' : 'order'}
              </h4>
            </div>
            <OrdersList ordersList={ordersList} />
          </li>
        ))}
        {(!isFetching && !ordersByDate.length) && (
          <Placeholder style={{ textAlign: 'center' }}>
            No fulfilled orders found
          </Placeholder>
        )}
      </React.Fragment>
    </ul>
  );
};

export default DatesList;