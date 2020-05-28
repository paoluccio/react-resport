import React from 'react';
import cn from 'classnames';
import { useField } from 'formik';

import styles from './FormInput.module.scss';

const FormInput = ({ children, ...rest }) => {
  const [field, { touched, error }] = useField(rest);

  return (
    <div className={styles.formInput}>
      <input
        id={field.name}
        className={cn({
          [styles.input]: true,
          [styles.errorBorder]: error && touched
        })}
        {...field}
        {...rest}
      />
      <label
        htmlFor={field.name}
        className={cn({
          [styles.label]: true,
          [styles.lifted]: field.value
        })}
      >
        {children}
      </label>
      {(error && touched) && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}
    </div>
  );
};

export default FormInput;