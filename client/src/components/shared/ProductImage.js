import React from 'react';

import styles from './ProductImage.module.scss';
import { useImagePreloader } from '../../hooks/useImagePreloader';
import FadeTransition from './animations/FadeTransition';

const ProductImage = ({ image, ...rest }) => {
  const isPreloaded = useImagePreloader(image);

  return (
    <React.Fragment>
      {!isPreloaded && <div className={styles.filler} />}
      <FadeTransition
        in={isPreloaded}
        timeout={{ enter: 400 }}
        mode='basic2'
      >
        <img
          src={image}
          alt='product'
          className={styles.image}
          {...rest}
        />
      </FadeTransition>
    </React.Fragment>
  );
};

export default ProductImage;