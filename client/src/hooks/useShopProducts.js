import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectProducts } from '../redux';
import { fetchProducts } from '../redux/shop/productsSlice';

export const useShopProducts = (gender, category) => {
  const productsData = useSelector(
    state => selectProducts(state, gender, category)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts({ gender, category }));
  }, [dispatch, gender, category]);

  return productsData;
};