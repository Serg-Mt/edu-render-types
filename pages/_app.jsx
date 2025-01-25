import '../global.css';

import Header from '../components/header';


export default function App({ Component, pageProps }) {
  return <>
    <Header />
    <main>
      <h2>Page Router</h2>
      <Component {...pageProps} />
    </main>
    <footer>

    </footer>
  </>
}