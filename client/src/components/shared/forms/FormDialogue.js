import React from 'react';

import styles from './FormDialogue.module.scss';

const FormDialogue = props => {
  return <div className={styles.dialogue} {...props} />;
};

export default FormDialogue;