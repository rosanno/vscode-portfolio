import '../styles/globals.css';
import Main from '../components/Main';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Header />
      <Component {...pageProps} />
    </Main>
  );
}

export default MyApp;
