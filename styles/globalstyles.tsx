import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --branco:#F4F4F4;
    --preto:#050505;
    --vermelho: #D00000;
    --amarelo: #FABA08;
    --azulescuro: #032B43;
    --azul: #3F88C5;
    --bgcfundo: #1d1d1d;
    --fundocard: #333333;

    --vermelhonav: #C50311;
    --amarelonav: #DE9627;
    --azulnav:#006B9B;
    --azulnav2: #002B42;

    --verdesub: #008722;
    --marromsub: #964F13;
    --amarelosub: #8E821B;
    --vermelhosub: #A0020C;
    --azulsub: #005F85;

  }
    body::-webkit-scrollbar {
    width: 5px;               /* width of the entire scrollbar */
  }
    
  body::-webkit-scrollbar-track {
    background: var(--fundocard);        /* color of the tracking area */
  }
    
  body::-webkit-scrollbar-thumb {
    background-color: var(--vermelho); 
  }
  html,
  body {
    padding: 0;
    margin: 0;
    color: white;
    font-family: 'Space Grotesk',-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: var(--bgcfundo);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
