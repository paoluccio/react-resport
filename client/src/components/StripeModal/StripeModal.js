import React from 'react';
import { StripeProvider } from 'react-stripe-hooks';

import styles from './StripeModal.module.scss';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import StripeForm from './StripeForm';

const StripeModal = () => {
  useLockBodyScroll();

  return (
    <React.Fragment>
      <div className={styles.modal}>
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PK}>
          <StripeForm />
        </StripeProvider>
      </div>
      <div className={styles.hint}>
        <p>Please use 4242 4242 4242 4242 for card number.</p>
        <p>Any future date for expiration.</p>
        <p>And any numbers for CVC and ZIP.</p>
      </div>
    </React.Fragment>
  );
};

export default StripeModal;