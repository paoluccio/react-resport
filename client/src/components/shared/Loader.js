import React from 'react';
import cn from 'classnames';

import styles from './Loader.module.scss';

const Loader = props => {
  return (
    <div
      style={props.style}
      className={cn(
        styles.loader,
        Object.values(props).map(prop => styles[prop]))}
    >
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Loader;