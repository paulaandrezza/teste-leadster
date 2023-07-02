import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${theme.colors['bg-primary']};
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }

  button, select {
    font-family: inherit;
  }
`;

export default GlobalStyle;
