// globalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Roboto&family=Ubuntu&display=swap'); */
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
h5 {
  font-family: 'Roboto', sans-serif;
}

h6,
p {
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
