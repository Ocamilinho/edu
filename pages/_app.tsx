import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { GlobalStyle } from '../styles/globalstyles'
import { theme } from '../styles/theme'
import "../styles/global.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Work+Sans:wght@300;400;500;600&display=swap');
    </style>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
