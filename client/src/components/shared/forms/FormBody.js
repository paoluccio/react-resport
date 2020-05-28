import React from 'react';

import styles from './FormBody.module.scss';

const FormBody = props => {
  return <div className={styles.body} {...props} />;
};

export default FormBody;