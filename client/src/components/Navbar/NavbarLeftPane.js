import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavbarLeftPane.module.scss';
import Logo from '../shared/Logo';
import NavigationLink from './NavigationLink';

const NavbarLeftPane = () => {
  return (
    <div className={styles.leftPane}>
      <div className={styles.linkedLogo}>
        <Link to='/' className={styles.homeLink}>
          <Logo />
        </Link>
      </div>
      <ul className={styles.list}>
        <NavigationLink to='/shop/mens'>Mens</NavigationLink>
        <NavigationLink to='/shop/womens'>Womens</NavigationLink>
      </ul>
    </div>
  );
};

export default NavbarLeftPane;