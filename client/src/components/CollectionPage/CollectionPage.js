import React from 'react';

import styles from './CollectionPage.module.scss';
import Sidenav from '../Sidenav';
import CollectionList from './CollectionList';

const CollectionPage = () => {
  return (
    <div className={styles.collection}>
      <div className={styles.container}>
        <aside className={styles.leftPane}>
          <Sidenav />
        </aside>
        <main className={styles.rightPane}>
          <CollectionList />
        </main>
      </div>
    </div>
  );
};

export default CollectionPage;