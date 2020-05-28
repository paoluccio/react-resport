import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './FadeTransition.module.scss';

const FadeTransition = ({ mode, ...rest }) => {
  const prefix = mode ? `${mode}-` : '';

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 600, exit: 250 }}
      classNames={{
        enter: styles[`${prefix}enter`],
        enterActive: styles[`${prefix}enter-active`],
        exit: styles[`${prefix}exit`],
        exitActive: styles[`${prefix}exit-active`],
      }}
      {...rest}
    />
  );
};

export default FadeTransition;