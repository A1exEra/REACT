import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/globalStyles';
import theme from './assets/styles/theme';
// import SimpleInput from './components/SimpleInput';
import styled from 'styled-components';
import BasicForm from './components/BasicForm';
function App() {
  return (
    <Styled>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <SimpleInput /> */}
        <BasicForm />
      </ThemeProvider>
    </Styled>
  );
}
const Styled = styled.div`
  width: 90%;
  max-width: 43rem;
  padding: 1rem;
  border-radius: 12px;
  background-color: white;
  margin: 3rem auto;
`;
export default App;
