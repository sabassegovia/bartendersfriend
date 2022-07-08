/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Nav from '../src/components/nav'
import Footer from './footer.js';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <Nav />
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  )
}

export default App;

