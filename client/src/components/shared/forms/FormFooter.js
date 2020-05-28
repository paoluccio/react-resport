import React from 'react';

import styles from './FormFooter.module.scss';

const FormFooter = ({ variant, ...rest }) => {
  return <div className={styles[variant]} {...rest} />;
};

export default FormFooter;