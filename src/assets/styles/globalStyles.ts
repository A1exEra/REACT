// globalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  background-color: #242424;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
*,
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  line-height: 1.25;
  font-family: "Oswald",sans-serif;
}
h1,h2,h3 {
  font-family: 'Oswald', sans-serif;
}

h4,
h5,h6,p {
  font-family: 'Ubuntu', sans-serif;
}

ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
button {
  font-family: 'Oswald';
  cursor: pointer;
  background-color: #535bf2;
  border: 1px solid #747bff;
  color: ${({ theme }) => theme.colors.whiteSecondary};
  font-size: 1rem;
  letter-spacing: 0.1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  &:disabled {
      background-color: #4a4160;
      border-color: #747bff;
    }
    &:hover,
    &:active {
      background-color: #747bff;
      border-color: #535bf2;
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    }
}

`;

export default GlobalStyle;
