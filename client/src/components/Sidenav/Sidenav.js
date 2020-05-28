import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import styles from './Sidenav.module.scss';
import { useShopCategories } from '../../hooks/useShopCategories';

const Sidenav = () => {
  const { gender } = useParams();
  const { categories } = useShopCategories(gender);

  return (
    <ul className={styles.sidenav}>
      {categories.map(category => (
        <li key={category} className={styles.link}>
          <NavLink to={category} activeClassName={styles[gender]}>
            {category}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Sidenav;