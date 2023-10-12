import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import authSlice from './authSlice';
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
////////////////////////////////////////////////////////////////
// import redux from 'redux';
// import { createStore } from 'redux';
// const counterReducer = (
//   state = initialState,
//   action: { type: string; amount: number }
// ) => {
//   if (action.type === 'increment') {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }
//   if (action.type === 'increaseby') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'decrement') {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }
//   if (action.type === 'toggle') {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

// const counterSubscriber = () => {
//   //getState() is a method that is provided by redux
//   const latestStore = store.getState();
//   console.log(latestStore);
// };

// store.subscribe(counterSubscriber);
// store.dispatch({ type: 'increment' });
// store.dispatch({ type: 'decrement' });
// export default store;
