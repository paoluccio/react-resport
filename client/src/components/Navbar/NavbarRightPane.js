import React from 'react';
import { useSelector } from 'react-redux';

import styles from './NavbarRightPane.module.scss';
import { selectIsOnBootAuthVerified, selectUser } from '../../redux';
import Loader from '../shared/Loader';
import FadeTransition from '../shared/animations/FadeTransition';
import NavigationLink from './NavigationLink';
import SwapTransition from '../shared/animations/SwapTransition';
import Bag from '../Bag';

const NavbarRightPane = () => {
  const isOnBootAuthVerified = useSelector(selectIsOnBootAuthVerified);
  const user = useSelector(selectUser);

  return (
    <React.Fragment>
      {!isOnBootAuthVerified && (
        <Loader
          style={{ marginRight: '2.5rem' }}
          size='small'
        />
      )}
      <FadeTransition
        in={isOnBootAuthVerified}
        mode='basic'
      >
        <div className={styles.rightPane}>
          <SwapTransition trigger={!!user}>
            <ul className={styles.list}>
              {!user ? (
                <NavigationLink to='/auth/signin'>Sign in</NavigationLink>
              ) : (
                  <React.Fragment>
                    <NavigationLink to='/orders'>My orders</NavigationLink>
                    <NavigationLink intent='signOut'>Sign out</NavigationLink>
                  </React.Fragment>
                )}
            </ul>
          </SwapTransition>
          <Bag />
        </div>
      </FadeTransition>
    </React.Fragment>
  );
};

export default NavbarRightPane;