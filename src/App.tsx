import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/globalStyles';
import theme from './assets/styles/theme';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import ContextProvider from './store/ContextProvider';
function App() {
  const [cartIsShown, setCartIsShown] = useState<boolean>(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ContextProvider>
          {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <main>
            <Meals />
          </main>
        </ContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
