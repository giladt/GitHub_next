import Navbar from '../components/Navbar';
import { ThemeProvider } from 'theme-ui';
import theme from '../../theme'


export default function App({ Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

