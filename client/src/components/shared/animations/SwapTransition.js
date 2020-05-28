import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import styles from './SwapTransition.module.scss';

const SwapTransition = ({ trigger, ...rest }) => {
  return (
    <SwitchTransition mode='out-in'>
      <CSSTransition
        key={trigger}
        timeout={200}
        classNames={{ ...styles }}
        {...rest}
      />
    </SwitchTransition>
  );
};

export default SwapTransition;