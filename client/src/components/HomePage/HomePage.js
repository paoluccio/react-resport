import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './HomePage.module.scss';
import BackgroundImage from '../shared/BackgroundImage';

const bgImage = {
  main: 'https://dl.dropbox.com/s/rzx6cnxsfhnku03/home.jpg?dl=0',
  fallback: 'https://dl.dropbox.com/s/og7c5xnn4ld1ppk/home-fallback.jpg?dl=0'
};

const HomePage = () => {
  return (
    <BackgroundImage className={styles.home} {...bgImage}>
      <div className={styles.container}>
        <h1 className={styles.slogan}>
          <span>Whatever you’ve got in mind,</span>
          <br />
          <span>we’ve got inside.</span>
        </h1>
        <div className={styles.buttonsBox}>
          {['mens', 'womens'].map(gender => (
            <Link
              key={gender}
              to={`/shop/${gender}`}
              className={cn(styles.homeButton, styles[gender])}
            >
              Shop {gender}
            </Link>
          ))}
        </div>
      </div>
    </BackgroundImage>
  );
};

export default HomePage;