import React from 'react';

import styles from './Layout.module.scss';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <Navbar />
      </header>
      <div className={styles.content}>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;