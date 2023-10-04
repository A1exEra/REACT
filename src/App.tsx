import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/globalStyles';
import theme from './assets/styles/theme';
import Test from './components/Test';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Test />
      </ThemeProvider>
    </>
  );
}

export default App;
