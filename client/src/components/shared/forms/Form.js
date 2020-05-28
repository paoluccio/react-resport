import React from 'react';
import cn from 'classnames';

import styles from './Form.module.scss';

const Form = ({ isSubmitting, ...rest }) => {
  return (
    <form
      className={cn({
        [styles.form]: true,
        [styles.inactive]: isSubmitting
      })}
      {...rest}
    />
  );
};

export default Form;