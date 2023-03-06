import { combineReducers, configureStore } from '@reduxjs/toolkit';

import products from './slice/products';

const reducer = combineReducers({
  products,
});

export default configureStore({
  reducer,
});
