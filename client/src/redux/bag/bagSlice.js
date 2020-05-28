import { createSlice, createSelector } from '@reduxjs/toolkit';

const bagSlice = createSlice({
  name: 'bag',
  initialState: {
    pool: {},
    ids: []
  },
  reducers: {
    addProduct(state, action) {
      const { id: productId } = action.payload;
      if (!state.pool[productId]) {
        state.pool[productId] = { ...action.payload, quantity: 1 };
        state.ids.push(productId);
      } else {
        state.pool[productId].quantity += 1;
      }
    },
    removeProduct(state, action) {
      const { id: productId } = action.payload;
      if (state.pool[productId].quantity === 1) {
        state.ids = state.ids.filter(id => id !== productId);
        delete state.pool[productId];
      } else {
        state.pool[productId].quantity -= 1;
      }
    },
    clearProductEntry(state, action) {
      const { id: productId } = action.payload;
      state.ids = state.ids.filter(id => id !== productId);
      delete state.pool[productId];
    },
    clearBag(state) {
      state.pool = {};
      state.ids = [];
    }
  }
});

export const {
  addProduct,
  removeProduct,
  clearProductEntry,
  clearBag
} = bagSlice.actions;

export default bagSlice.reducer;

// Input selectors
const selectProductsPool = state => state.pool;
const selectProductsIds = state => state.ids;

// Memoized selectors
export const selectBagProducts = createSelector(
  [selectProductsIds, selectProductsPool],
  (ids, pool) => ids.map(id => pool[id])
);

export const selectBagProductsCount = createSelector(
  [selectProductsPool],
  pool => Object.values(pool).reduce(
    (count, { quantity }) => count + quantity, 0
  )
);

export const selectBagTotalPrice = createSelector(
  [selectProductsPool],
  pool => Object.values(pool).reduce(
    (total, { price, quantity }) => total + price * quantity, 0
  )
);
