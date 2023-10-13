/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/globalStyles';
import theme from './assets/styles/theme';
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LoadingSpinner from './components/UI/LoadingSpinner';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cartActions';

function App() {
  const { isCartOpen, isLoading, notification, isInitial } = useSelector(
    (state: any) => state.ui
  );
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData() as any);
  }, [dispatch]);
  useEffect(() => {
    // if (!isInitial) {
    //   dispatch(sendCartData(cart) as any);
    // }
    if (cart.changed) {
      dispatch(sendCartData(cart) as any);
    }
  }, [cart, dispatch, isInitial]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {notification && <Notification notification={notification} />}
        <Layout>
          {isLoading && <LoadingSpinner />}
          {isCartOpen && <Cart />}
          <Products />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
