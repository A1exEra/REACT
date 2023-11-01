/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect } from 'react-router-dom';

export const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate as any);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};
export const getItemFromLocalStorage = () => {
  const token = localStorage.getItem('token');
  const tokenDuration = getTokenDuration();
  if (!token) {
    return null;
  }
  if (tokenDuration < 0) {
    return 'EXPIRED';
  }
  return token;
};
export const tokenLoader = () => {
  return getItemFromLocalStorage();
};
export const checkAuthLoader = () => {
  const token = getItemFromLocalStorage();
  if (!token) {
    return redirect('/auth');
  }
};
