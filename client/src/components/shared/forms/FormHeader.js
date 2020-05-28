import React from 'react';

import styles from './FormHeader.module.scss';
import Logo from '../Logo';

const FormHeader = ({ variant, children, ...rest }) => {
  if (variant === 'brand-image') {
    return (
      <div className={styles.imageHeader}>
        <div className={styles.logoBox}>
          <Logo />
        </div>
      </div>
    );
  }

  return (
    <h2 className={styles.textHeader} {...rest}>
      {children}
    </h2>
  );
}

export default FormHeader;