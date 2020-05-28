import React from 'react';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <img
      src='https://dl.dropbox.com/s/rovdzcv9mnta76p/logo.png?dl=0'
      alt='logo'
      className={styles.logo}
    />
  );
};

export default Logo;