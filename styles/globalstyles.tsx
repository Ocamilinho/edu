import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
  :root{
    --branco:#F4F4F4;
    --preto:#050505;
    --vermelho: #D00000;
    --amarelo: #FABA08;
    --azulescuro: #032B43;
    --azul: #3F88C5;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    color: white;
    font-family: 'Space Grotesk',-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`
