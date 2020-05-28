import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './CollectionList.module.scss';
import { useShopProducts } from '../../hooks/useShopProducts';
import { addProduct } from '../../redux/bag/bagSlice';
import Loader from '../shared/Loader';
import CollectionItem from './CollectionListItem';

const CollectionList = () => {
  const { gender, category } = useParams();
  const { isFetching, products } = useShopProducts(gender, category);

  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {(isFetching && !products.length) && (
        <Loader size='large' variant={gender} position='centered' />
      )}
      {products.map(product => (
        <CollectionItem
          key={product.id}
          addProduct={() => dispatch(addProduct(product))}
          {...product}
        />
      ))}
    </ul>
  );
};

export default CollectionList;