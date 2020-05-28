import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './CategoryLink.module.scss';
import { ReactComponent as HatSVG } from '../../assets/hat.svg';
import { ReactComponent as HoodieSVG } from '../../assets/hoodie.svg';
import { ReactComponent as JacketSVG } from '../../assets/jacket.svg';
import { ReactComponent as LeggingsSVG } from '../../assets/leggings.svg';
import { ReactComponent as PantsSVG } from '../../assets/pants.svg';
import { ReactComponent as ShirtSVG } from '../../assets/shirt.svg';
import { ReactComponent as ShoeSVG } from '../../assets/shoe.svg';
import { ReactComponent as ShortsSVG } from '../../assets/shorts.svg';
import { ReactComponent as TankSVG } from '../../assets/tank.svg';

const icons = {
  hats: <HatSVG />,
  hoodies: <HoodieSVG />,
  jackets: <JacketSVG />,
  leggings: <LeggingsSVG />,
  pants: <PantsSVG />,
  shirts: <ShirtSVG />,
  shoes: <ShoeSVG />,
  shorts: <ShortsSVG />,
  tanks: <TankSVG />
};

const CategoryLink = ({ url, category, gender, ...rest }) => {
  return (
    <li className={styles.listItem} {...rest}>
      <Link
        to={`${url}/${category}`}
        className={cn(styles.link, styles[gender])}
      >
        <span>{category}</span>
        <span className={styles.icon}>{icons[category]}</span>
      </Link>
    </li>
  );
};

export default CategoryLink;