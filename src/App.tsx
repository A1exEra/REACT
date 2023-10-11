import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/globalStyles';
import theme from './assets/styles/theme';
import Counter from './components/Counter';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Counter />
      </ThemeProvider>
    </>
  );
}

export default App;
