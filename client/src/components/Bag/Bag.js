import React, { useState } from 'react';

import styles from './Bag.module.scss';
import BagMenuToggler from './BagMenuToggler';
import Portal from '../shared/Portal';
import FadeTransition from '../shared/animations/FadeTransition';
import Backdrop from '../shared/Backdrop';
import SlideTransition from '../shared/animations/SlideTransition';
import BagMenu from './BagMenu';

const Bag = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(state => !state);

  return (
    <React.Fragment>
      <div className={styles.bag}>
        <BagMenuToggler toggleMenu={toggleMenu} />
      </div>
      <Portal>
        <FadeTransition in={isMenuOpen} mode='basic'>
          <Backdrop onClick={toggleMenu} />
        </FadeTransition>
        <SlideTransition in={isMenuOpen} direction='left'>
          <BagMenu toggleMenu={toggleMenu} />
        </SlideTransition>
      </Portal>
    </React.Fragment>
  );
};

export default Bag;