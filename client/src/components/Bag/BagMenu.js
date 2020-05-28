import React from 'react';

import styles from './BagMenu.module.scss';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import BagMenuLoft from './BagMenuLoft';
import BagMenuList from './BagMenuList';

const BagMenu = ({ toggleMenu }) => {
  useLockBodyScroll();

  return (
    <div className={styles.menu}>
      <BagMenuLoft toggleMenu={toggleMenu} />
      <BagMenuList />
    </div>
  );
};

export default BagMenu;