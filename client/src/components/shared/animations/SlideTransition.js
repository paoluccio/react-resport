import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './SlideTransition.module.scss';

const SlideTransition = ({ direction, ...rest }) => {
  const prefix = direction ? `${direction}-` : '';

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

export default SlideTransition;