import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  products: [],
  product: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setProduct: (state, { payload }) => {
      state.product = payload;
    },
  },
});

export const { setProducts, setProduct } = productsSlice.actions;
export default productsSlice.reducer;

export const productsSelector = (state) => state.products;
