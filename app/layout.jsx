import Header from '../components/header';
import '../global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <h2>⚡App router</h2>
        {children}
        </main>
      </body>
    </html>
  )
}