import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { OrdersAPI } from '../../api/ordersAPI';
import { signOut } from '../auth/authSlice';

export const fetchUserOrders = createAsyncThunk(
  'orders/fetchOrders',
  async userId => {
    try {
      return await OrdersAPI.fetchUserOrders(userId);
    } catch (error) {
      throw error;
    }
  }
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    isFetching: false,
    ordersByDate: [],
    error: null
  },
  extraReducers: {
    [fetchUserOrders.pending]: state => {
      state.isFetching = true;
      state.error = null;
    },
    [fetchUserOrders.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.ordersByDate = action.payload;
    },
    [fetchUserOrders.rejected]: (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    },
    [signOut.fulfilled]: state => {
      state.ordersByDate = [];
    }
  }
});

export default ordersSlice.reducer;

// Input selectors
export const selectOrders = state => state;