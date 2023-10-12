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
   padding: 0.5rem 1.5rem;
  border-radius: 6px;
  background-color: transparent;
  color: #1a8ed1;
  border: 1px solid #1a8ed1;
 &:hover,&:active {
  background-color: #1ac5d1;
  border-color: #1ac5d1;
  color: white;
}
}
`;

export default GlobalStyle;
