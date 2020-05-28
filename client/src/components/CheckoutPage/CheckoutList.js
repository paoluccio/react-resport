import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';

import styles from './CheckoutList.module.scss';
import { selectBagProducts } from '../../redux';
import { addProduct, removeProduct, clearProductEntry } from '../../redux/bag/bagSlice';
import FadeTransition from '../shared/animations/FadeTransition';
import CheckoutListItem from './CheckoutListItem';
import Placeholder from '../shared/Placeholder';

const CheckoutList = () => {
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
            <CheckoutListItem product={product} actions={actions} />
          </FadeTransition>
        ))}
        {!products.length && (
          <FadeTransition
            timeout={{ enter: 700 }}
            mode='scale1'
          >
            <Placeholder>
              Currently there are no items in your shopping bag
            </Placeholder>
          </FadeTransition>
        )}
      </TransitionGroup>
    </ul>
  );
};

export default CheckoutList;