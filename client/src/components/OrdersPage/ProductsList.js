import React from 'react';

import styles from './ProductsList.module.scss';

const ProductsList = ({ products }) => {
  return (
    <ul className={styles.productsList}>
      {products.map(({ id, image, brand, name, quantity }) => (
        <li key={id} className={styles.product}>
          <div className={styles.imageBox}>
            <img src={image} alt='product' className={styles.image} />
          </div>
          <div className={styles.productDetails}>
            <div className={styles.brandAndNameBox}>
              <span className={styles.brand}>{brand}</span>
              <span>{name}</span>
            </div>
            <div className={styles.quantity}>
              <span>Quantity{String.fromCharCode(9656)}</span>
              {quantity}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;