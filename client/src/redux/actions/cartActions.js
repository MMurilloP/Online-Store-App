import axios from 'axios';
import { cartItemAdd, cartItemRemoval } from '../slice/cart';

export const addCartItem = (id, qty) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    const itemToAdd = {
      id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      stock: data.stock,
      qty,
    };
    dispatch(cartItemAdd(itemToAdd));
  } catch (error) {
    console.log(error);
  }
};

export const removeCartItem = (id) => async (dispatch) => {
  dispatch(cartItemRemoval(id));
};
