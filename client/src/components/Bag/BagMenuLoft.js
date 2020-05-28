import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './BagMenuLoft.module.scss';
import { selectBagTotalPrice } from '../../redux';
import ControlButton from '../shared/buttons/ControlButton';
import SwapTransition from '../shared/animations/SwapTransition';
import CustomButton from '../shared/buttons/CustomButton';

const BagMenuLoft = ({ toggleMenu }) => {
  const total = useSelector(selectBagTotalPrice);

  const history = useHistory();
  const proceedToCheckout = () => {
    history.push('/checkout');
    toggleMenu();
  };

  return (
    <div className={styles.loft}>
      <div className={styles.leftPane}>
        <ControlButton
          intent='close'
          onClick={toggleMenu}
          className={styles.closeIcon}
        />
        <span className={styles.totalText}>
          Total of
          <span>{String.fromCharCode(9656)}</span>
        </span>
        <span className={styles.totalBuck}>$</span>
        <SwapTransition trigger={total}>
          <span>{total}</span>
        </SwapTransition>
      </div>
      <CustomButton
        variant='primary'
        onClick={proceedToCheckout}
        disabled={total === 0}
      >
        Checkout
      </CustomButton>
    </div>
  );
};

export default BagMenuLoft;