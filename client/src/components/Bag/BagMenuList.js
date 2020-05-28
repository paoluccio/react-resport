import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';

import styles from './BagMenuList.module.scss';
import { selectBagProducts } from '../../redux';
import { addProduct, removeProduct, clearProductEntry } from '../../redux/bag/bagSlice';
import FadeTransition from '../shared/animations/FadeTransition';
import BagMenuListItem from './BagMenuListItem';
import Placeholder from '../shared/Placeholder';

const BagMenuList = () => {
  const products = useSelector(selectBagProducts);

  const dispatch = useDispatch();
  const actions = useMemo(() => ({
    addProduct: id => dispatch(addProduct(id)),
    removeProduct: id => dispatch(removeProduct(id)),
    clearProductEntry: id => dispatch(clearProductEntry(id))
  }), [dispatch]);

  return (
    <ul className={styles.list}>
      <TransitionGroup component={null}>
        {products.map(product => (
          <FadeTransition
            key={product.id}
            timeout={{ exit: 400 }}
            mode='scale2'
          >
            <BagMenuListItem product={product} actions={actions} />
          </FadeTransition>
        ))}
        {!products.length && (
          <FadeTransition
            timeout={{ enter: 700 }}
            mode='scale1'
          >
            <Placeholder>The bag is empty</Placeholder>
          </FadeTransition>
        )}
      </TransitionGroup>
    </ul>
  );
};

export default BagMenuList;