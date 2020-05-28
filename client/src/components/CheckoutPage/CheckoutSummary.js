import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './CheckoutSummary.module.scss';
import { useAuthTravel } from '../../hooks/useAuthTravel';
import { selectBagTotalPrice, selectBagProductsCount, selectUser } from '../../redux';
import LabeledButton from '../shared/buttons/LabeledButton';
import Portal from '../shared/Portal';
import FadeTransition from '../shared/animations/FadeTransition';
import Backdrop from '../shared/Backdrop';
import StripeModal from '../StripeModal';

const CheckoutSummary = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(current => !current);

  const count = useSelector(selectBagProductsCount);
  const total = useSelector(selectBagTotalPrice);

  const user = useSelector(selectUser);
  const travelToAuth = useAuthTravel();
  const verifyAuth = () => !user ? travelToAuth() : toggleModal();

  return (
    <React.Fragment>
      <div className={styles.summary}>
        <h2 className={styles.heading}>Summary</h2>
        <div className={styles.details}>
          <span>
            Items in the bag
            <span>{String.fromCharCode(9656)}</span>
            <span className={styles.value}>{count}</span>
          </span>
          <span>
            Total amount
            <span>{String.fromCharCode(9656)}</span>
            <span className={styles.value}>${total}</span>
          </span>
        </div>
        <LabeledButton
          intent='Checkout with'
          label='stripe'
          disabled={count === 0}
          onClick={verifyAuth}
        />
      </div>
      <Portal>
        <FadeTransition
          in={isModalOpen}
          mode='basic'
        >
          <Backdrop onClick={toggleModal} />
        </FadeTransition>
        <FadeTransition
          in={isModalOpen}
          mode='basic3'
          timeout={{ enter: 1000, exit: 0 }}
        >
          <StripeModal />
        </FadeTransition>
      </Portal>
    </React.Fragment>
  );
};

export default CheckoutSummary;