import React from 'react';

import styles from './Navbar.module.scss';
import NavbarLeftPane from './NavbarLeftPane';
import NavbarRightPane from './NavbarRightPane';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavbarLeftPane />
      <NavbarRightPane />
    </nav>
  );
};

export default Navbar;