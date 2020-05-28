import React from 'react';
import cn from 'classnames';

import styles from './CheckoutListItem.module.scss';
import ControlButton from '../shared/buttons/ControlButton';

const CheckoutListItem = ({ product, actions }) => {
  const { id, gender, brand, image, name, price, quantity } = product;
  const { addProduct, removeProduct, clearProductEntry } = actions;

  return (
    <li className={styles.listItem}>
      <div className={styles.imageBox}>
        <img src={image} alt='product' className={styles.image} />
      </div>
      <div className={styles.info}>
        <div className={cn(styles.header, styles[gender])}>{gender}</div>
        <div className={styles.body}>
          <div className={styles.brandAndNameBox}>
            <span className={styles.brand}>{brand}</span>
            <span>{name}</span>
          </div>
          <div className={styles.controls}>
            <span className={styles.quantity}>
              <ControlButton intent='remove' onClick={() => removeProduct({ id })} />
              {quantity}
              <ControlButton intent='add' onClick={() => addProduct({ id })} />
            </span>
            <span>${price * quantity}</span>
            <ControlButton intent='clear' onClick={() => clearProductEntry({ id })} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default React.memo(CheckoutListItem);