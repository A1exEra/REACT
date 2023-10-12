import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
  userData: { email: '', password: '' },
};
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    showUserData(state, action) {
      state.userData = {
        email: action.payload.email,
        password: action.payload.password,
      };
    },
  },
});
export default authSlice;
