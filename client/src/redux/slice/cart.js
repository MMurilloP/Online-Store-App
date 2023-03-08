import { createSlice } from '@reduxjs/toolkit';

const calculateSubtotal = (cartState) => {
  let result = 0;
  cartState.map((item) => (result += item.qty * item.price));
  return Number(result).toFixed(2);
};

export const initialState = {
  cart: [],
  subtotal: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartItemAdd: (state, { payload }) => {
      const existingItem = state.cart.find((item) => item.id === payload.id);

      if (existingItem) {
        state.cart = state.cart.map((item) => (item.id === existingItem.id ? payload : item));
      } else {
        state.cart = [...state.cart, payload];
      }
      state.subtotal = calculateSubtotal(state.cart);
    },
    cartItemRemoval: (state, { payload }) => {
      state.cart = [...state.cart].filter((item) => item.id !== payload);
      state.subtotal = calculateSubtotal(state.cart);
    },
  },
});

export const { cartItemAdd, cartItemRemoval } = cartSlice.actions;
export default cartSlice.reducer;

export const cartSelector = (state) => state.cart;
