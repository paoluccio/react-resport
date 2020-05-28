import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCategories } from '../redux';
import { fetchCategories } from '../redux/shop/categoriesSlice';

export const useShopCategories = gender => {
  const categoriesData = useSelector(
    state => selectCategories(state, gender)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories(gender));
  }, [dispatch, gender]);

  return categoriesData;
};