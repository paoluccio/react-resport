import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';

import { ShopAPI } from '../../api/shopAPI';
import * as fromRoot from '../';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ gender, category }) => {
    try {
      return await ShopAPI.getProducts(gender, category);
    } catch (error) {
      throw error;
    }
  },
  {
    condition: ({ gender, category }, { getState }) => {
      const { isFetching } = fromRoot.selectProducts(getState(), gender, category);
      return !isFetching;
    }
  }
);

const initialCategoryState = {
  isFetching: false,
  ids: [],
  error: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    pool: {},
    ids: {}
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      const { meta: { arg: { gender, category } } } = action;
      if (!state.ids[gender]?.[category]) {
        state.ids[gender] = {
          ...state.ids[gender],
          [category]: { ...initialCategoryState, isFetching: true }
        };
      } else {
        state.ids[gender][category].isFetching = true;
        state.ids[gender][category].error = null;
      }
    },
    [fetchProducts.fulfilled]: (state, action) => {
      const { meta: { arg: { gender, category } }, payload } = action;
      payload.forEach(product => state.pool[product.id] = product);
      state.ids[gender][category].isFetching = false;
      state.ids[gender][category].ids = payload.map(({ id }) => id);
    },
    [fetchProducts.rejected]: (state, action) => {
      const { meta: { arg: { gender, category } }, error } = action;
      state.ids[gender][category].isFetching = false;
      state.ids[gender][category].error = error;
    }
  }
});

export default productsSlice.reducer;

// Input selectors
const selectIsFetching = (state, gender, category) =>
  state.ids[gender]?.[category]?.isFetching || false;

const selectError = (state, gender, category) =>
  state.ids[gender]?.[category]?.error || null;

const selectCategoryIds = (state, gender, category) =>
  state.ids[gender]?.[category]?.ids || [];

const selectProductsPool = state => state.pool;

// Memoized selectors
const selectMappedProducts = createSelector(
  [selectCategoryIds, selectProductsPool],
  (ids, pool) => ids.map(id => pool[id])
);

export const selectProducts = createSelector(
  [selectIsFetching, selectMappedProducts, selectError],
  (isFetching, products, error) => ({ isFetching, products, error })
);