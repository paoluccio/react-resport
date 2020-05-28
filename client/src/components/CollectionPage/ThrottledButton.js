import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './ThrottledButton.module.scss';
import { ReactComponent as AddToBagSVG } from '../../assets/add-to-bag.svg';

const ThrottledButton = ({ onClick }) => {
  const [animationStatus, setAnimationStatus] = useState('idle');

  const handleClick = () => {
    setAnimationStatus('enter');
    onClick();
  };

  return (
    <CSSTransition
      in={animationStatus === 'enter'}
      timeout={400}
      onEntered={() => setAnimationStatus('exit')}
      onExited={() => setAnimationStatus('idle')}
      classNames={{ ...styles }}
    >
      <button
        className={styles.button}
        onClick={handleClick}
        disabled={animationStatus !== 'idle'}
      >
        <AddToBagSVG title='Add to bag' className={styles.icon} />
      </button>
    </CSSTransition>
  );
};

export default ThrottledButton;