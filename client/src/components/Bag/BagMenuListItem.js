import React from 'react';

import styles from './BagMenuListItem.module.scss';
import ControlButton from '../shared/buttons/ControlButton';

const BagMenuListItem = ({ product, actions }) => {
  const { id, brand, image, name, price, quantity } = product;
  const { addProduct, removeProduct, clearProductEntry } = actions;

  return (
    <li className={styles.listItem}>
      <img src={image} alt='product' className={styles.image} />
      <div className={styles.details}>
        <span className={styles.brand}>{brand}</span>
        <span>{name}</span>
        <span>{quantity} &times; {price} = {`$${quantity * price}`}</span>
      </div>
      <div className={styles.controls}>
        <ControlButton intent='remove' onClick={() => removeProduct({ id })} />
        <ControlButton intent='add' onClick={() => addProduct({ id })} />
        <ControlButton intent='clear' onClick={() => clearProductEntry({ id })} />
      </div>
    </li>
  );
};

export default React.memo(BagMenuListItem);