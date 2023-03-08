import { combineReducers, configureStore } from '@reduxjs/toolkit';

import products from './slice/products';
import cart from './slice/cart';


const reducer = combineReducers({
  products,
  cart
});

export default configureStore({
  reducer,
});
