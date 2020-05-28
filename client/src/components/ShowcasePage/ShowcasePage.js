import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import cn from 'classnames';

import styles from './ShowcasePage.module.scss';
import { useShopCategories } from '../../hooks/useShopCategories';
import BackgroundImage from '../shared/BackgroundImage';
import SlideTransition from '../shared/animations/SlideTransition';
import CategoryLink from './CategoryLink';

const bgImages = {
  mens: {
    main: 'https://dl.dropbox.com/s/qsdkqzp9e0oy268/mens.jpg?dl=0',
    fallback: 'https://dl.dropbox.com/s/9f2whewnz8rmbp3/mens-fallback.jpg?dl=0'
  },
  womens: {
    main: 'https://dl.dropbox.com/s/peyprhxvy2ov7cb/womens.jpg?dl=0',
    fallback: 'https://dl.dropbox.com/s/jnxhdqdkobnv6h0/womens-fallback.jpg?dl=0'
  }
}

const ShowcasePage = () => {
  const { url, params: { gender } } = useRouteMatch();
  const { categories } = useShopCategories(gender);

  return (
    <BackgroundImage className={styles.showcase} {...bgImages[gender]}>
      <div className={styles.container}>
        <SlideTransition
          in={!!categories.length}
          timeout={{ enter: 1200 }}
          direction='top'
        >
          <ul className={cn(styles.list, styles[gender])}>
            {categories.map(category => (
              <CategoryLink
                key={category}
                url={url}
                gender={gender}
                category={category}
              />
            ))}
          </ul>
        </SlideTransition>
      </div>
    </BackgroundImage>
  );
};

export default ShowcasePage;