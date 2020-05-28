import React from 'react';
import cn from 'classnames';

import styles from './ControlButton.module.scss';

const intents = {
  'remove': { iconCode: 10094, title: 'Remove one' },
  'add': { iconCode: 10095, title: 'Add one' },
  'clear': { iconCode: 10006, title: 'Clear entry' },
  'close': { iconCode: 10006, title: 'Close' }
};

const ControlButton = ({ intent, className, ...props }) => {
  const { iconCode, title } = intents[intent];

  return (
    <button
      type='button'
      title={title}
      className={cn(styles.button, className)}
      {...props}
    >
      {String.fromCodePoint(iconCode)}
    </button>
  );
};

export default ControlButton;