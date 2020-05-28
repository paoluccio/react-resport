import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserOrders } from '../redux/orders/ordersSlice';
import { selectUser, selectOrders } from '../redux';

export const useOrders = () => {
  const { id } = useSelector(selectUser);
  const ordersData = useSelector(selectOrders);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserOrders(id));
  }, [dispatch, id]);

  return ordersData;
};