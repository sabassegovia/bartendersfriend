/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Nav from '../src/components/nav'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App;

// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp



