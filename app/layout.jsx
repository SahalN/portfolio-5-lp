/** @format */

import { raleway } from "./font";
import "./global.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={raleway.variable}>
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
