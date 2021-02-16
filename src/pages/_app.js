import Navbar from '../components/Navbar';
import '../styles/app.css';

export default function App({ Component, pageProps}) {
  return (
    <div> 
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

