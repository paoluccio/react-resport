import React from 'react';

import styles from './FormDialogueHeader.module.scss';

const FormDialogueHeader = ({ children, ...rest }) => {
  return (
    <h3 className={styles.header} {...rest}>
      {children}
    </h3>
  );
};

export default FormDialogueHeader;