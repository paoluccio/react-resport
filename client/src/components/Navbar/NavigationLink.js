import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './NavigationLink.module.scss';
import { signOut } from '../../redux/auth/authSlice';

const NavigationLink = ({ to, intent, ...rest }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.listItem}>
      {intent === 'signOut' ? (
        <button
          className={styles.signOutBtn}
          onClick={() => dispatch(signOut())}
          {...rest}
        />
      ) : (
          <NavLink
            to={to}
            activeClassName={styles.active}
            {...rest}
          />
        )
      }
    </li>
  );
};

export default NavigationLink;