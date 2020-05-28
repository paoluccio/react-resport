import React from 'react';

import styles from './Placeholder.module.scss';

const Placeholder = props => {
  return <div className={styles.placeholder} {...props} />
};

export default Placeholder;