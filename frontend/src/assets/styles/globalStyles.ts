// globalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  background-color: #242424;
  font-synthesis: none;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
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
  font-family: 'Oswald', sans-serif;
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
  cursor: pointer;
}
`;

export default GlobalStyle;
