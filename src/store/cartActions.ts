/* eslint-disable @typescript-eslint/no-explicit-any */
import { CART_ITEM } from '../types';
import { uiActions } from './store';
import { cartActions } from './store';
const url = import.meta.env.VITE_URL;
//custom action creator

export const fetchCartData = () => {
  return async (dispatch: any) => {
    dispatch(uiActions.showLoadingSpinner(true));
    const fetchData = async () => {
      const response = await fetch(`${url}/books/cart.json`);
      if (!response.ok) {
        throw new Error('Could not fetch data!');
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          cartItems: cartData.cartItems || [],
          totalCartItems: cartData.totalCartItems,
        })
      );
      dispatch(uiActions.showLoadingSpinner(false));
      return;
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: `Could not fetch data from server...${error}`,
        })
      );
      dispatch(uiActions.showLoadingSpinner(false));
    }
  };
};
export const sendCartData = (cart: {
  cartItems: CART_ITEM[];
  totalCartItems: number;
}) => {
  return async (dispatch: any) => {
    dispatch(uiActions.showLoadingSpinner(true));
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data...',
      })
    );
    try {
      const response = await fetch(`${url}/books/cart.json`, {
        method: 'PUT',
        body: JSON.stringify({
          cartItems: cart.cartItems,
          totalCartItems: cart.totalCartItems,
        }),
      });
      if (!response.ok) {
        throw new Error('Could not perform request!');
      }
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Data was successsfully sent to a server.',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: `Could not send data to a server...${error}`,
        })
      );
    }
    dispatch(uiActions.showLoadingSpinner(false));
  };
};
