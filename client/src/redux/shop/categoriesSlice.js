import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { ShopAPI } from '../../api/shopAPI';
import * as fromRoot from '../';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async gender => {
    try {
      return await ShopAPI.getCategories(gender);
    } catch (error) {
      throw error;
    }
  },
  {
    condition: (gender, { getState }) => {
      const {
        isFetching,
        categories
      } = fromRoot.selectCategories(getState(), gender);
      return !isFetching && !categories.length;
    }
  }
);

const initialGenderState = {
  isFetching: false,
  categories: [],
  error: null
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {},
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {
      const { meta: { arg: gender } } = action;
      if (!state[gender]) {
        state[gender] = { ...initialGenderState, isFetching: true };
      } else {
        state[gender].isFetching = true;
        state[gender].error = null;
      }
    },
    [fetchCategories.fulfilled]: (state, action) => {
      const { meta: { arg: gender }, payload } = action;
      state[gender].isFetching = false;
      state[gender].categories = payload;
    },
    [fetchCategories.rejected]: (state, action) => {
      const { meta: { arg: gender }, error } = action;
      state[gender].isFetching = false;
      state[gender].error = error;
    }
  }
});

export default categoriesSlice.reducer;

// Input selectors
export const selectCategories = (state, gender) =>
  state[gender] || initialGenderState;