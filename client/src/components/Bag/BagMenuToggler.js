import React from 'react';
import { useSelector } from 'react-redux';

import styles from './BagMenuToggler.module.scss';
import { selectBagProductsCount } from '../../redux';
import { ReactComponent as BagSVG } from '../../assets/bag.svg';
import SwapTransition from '../shared/animations/SwapTransition';

const BagMenuToggler = ({ toggleMenu }) => {
  const count = useSelector(selectBagProductsCount);

  return (
    <div className={styles.wrapper} onClick={toggleMenu}>
      <BagSVG className={styles.bagSVG} />
      <SwapTransition trigger={count}>
        <span className={styles.productsCount}>
          {count > 0 && count}
        </span>
      </SwapTransition>
    </div>
  );
};

export default BagMenuToggler;