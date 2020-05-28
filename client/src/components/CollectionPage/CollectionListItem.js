import React from 'react';

import styles from './CollectionListItem.module.scss';
import ProductImage from '../shared/ProductImage';
import ThrottledButton from './ThrottledButton';

const CollectionListItem = ({ brand, image, name, price, addProduct }) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.header}>
        <ProductImage image={image} />
        <div className={styles.brandAndIcon}>
          <span>{brand}</span>
          <ThrottledButton onClick={addProduct} />
        </div>
      </div>
      <div className={styles.footer}>
        <span>{name}</span>
        <span>${price}</span>
      </div>
    </li>
  );
};

export default CollectionListItem;