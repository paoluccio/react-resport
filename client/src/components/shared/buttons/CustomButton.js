import React from 'react';
import cn from 'classnames';

import styles from './CustomButton.module.scss';

const CustomButton = ({ variant, adjustable, ...rest }) => {
  return (
    <button
      type='button'
      className={cn({
        [styles.button]: true,
        [styles[variant]]: true,
        [styles.adjustable]: adjustable
      })}
      {...rest}
    />
  );
};

export default CustomButton;