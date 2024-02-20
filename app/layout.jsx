/** @format */

import { ibmplexmono, raleway } from "./font";
import "./global.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${ibmplexmono.variable} ${raleway.variable} `}>
      <body className='flex flex-col min-h-screen bg-[#080808]'>
        <header className='px-[5.31rem] '>
          <Header />
        </header>
        <main className='grow bg-[#080808]'>{children}</main>
        <footer className='px-[11.25rem]'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
