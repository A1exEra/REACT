import { createSlice } from '@reduxjs/toolkit';
import { CART_ITEM } from '../types';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [] as CART_ITEM[],
    totalCartItems: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.cartItems = action.payload.cartItems;
      state.totalCartItems = action.payload.totalCartItems;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push(newItem);
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.total + existingItem.price;
      }
      state.totalCartItems++;
      state.changed = true;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem?.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem!.quantity--;
        existingItem!.total = existingItem!.total - existingItem!.price;
      }
      state.totalCartItems--;
      state.changed = true;
    },
  },
});

export default cartSlice;
