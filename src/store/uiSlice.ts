import { createSlice } from '@reduxjs/toolkit';
import { NOTIFICATION } from '../types';

const initialUiSlice = {
  isCartOpen: false,
  isLoading: false,
  isInitial: true,
  notification: null as NOTIFICATION | null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiSlice,
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    showLoadingSpinner(state, action) {
      state.isLoading = action.payload;
    },
    showNotification(state, action) {
      const notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
      state.notification = notification;
    },
    setIsInitial(state) {
      state.isInitial = false;
    },
  },
});
export default uiSlice;
