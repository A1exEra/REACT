/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/globalStyles';
import theme from './assets/styles/theme';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';
function App() {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {isAuthenticated ? <UserProfile /> : <Auth />}
        <Counter />
      </ThemeProvider>
    </>
  );
}

export default App;
