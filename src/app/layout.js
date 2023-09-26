'use client';
import { CssBaseline } from '@mui/material';
import './globals.css';
 import { Barlow_Condensed } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/home/Footer';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';


const barlow = Barlow_Condensed({
  weight: ['200', '400', '500', '600', '700','800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <html lang='en'>
      
      <body className={barlow.className}>
        <CssBaseline />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
