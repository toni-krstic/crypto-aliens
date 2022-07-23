import '../styles/globals.css';
import { AlienProvider } from '../context/AlienContext';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
      <AlienProvider>
        <Navbar />
        <Component {...pageProps} />
      </AlienProvider>
  )
}

export default MyApp
