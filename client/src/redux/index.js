import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import authReducer, * as fromAuth from './auth/authSlice';
import categoriesReducer, * as fromCategories from './shop/categoriesSlice';
import productsReducer, * as fromProducts from './shop/productsSlice';
import bagReducer, * as fromBag from './bag/bagSlice';
import ordersReducer, * as fromOrders from './orders/ordersSlice';

const bagPersistConfig = {
  key: 'bag',
  storage
};

const rootReducer = combineReducers({
  auth: authReducer,
  shop: combineReducers({
    categories: categoriesReducer,
    products: productsReducer
  }),
  bag: persistReducer(bagPersistConfig, bagReducer),
  orders: ordersReducer
});

export default rootReducer;

// Auth
export const selectIsOnBootAuthVerified = state =>
  fromAuth.selectIsOnBootAuthVerified(state.auth);

export const selectUser = state =>
  fromAuth.selectUser(state.auth);

export const selectRedirectPath = state =>
  fromAuth.selectRedirectPath(state.auth);

// Shop
export const selectCategories = (state, gender) =>
  fromCategories.selectCategories(state.shop.categories, gender);

export const selectProducts = (state, gender, category) =>
  fromProducts.selectProducts(state.shop.products, gender, category);

// Bag
export const selectBagProducts = state =>
  fromBag.selectBagProducts(state.bag);

export const selectBagProductsCount = state =>
  fromBag.selectBagProductsCount(state.bag);

export const selectBagTotalPrice = state =>
  fromBag.selectBagTotalPrice(state.bag);

// Orders
export const selectOrders = state =>
  fromOrders.selectOrders(state.orders);