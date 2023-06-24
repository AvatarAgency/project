'use client';
import { CssBaseline } from '@mui/material';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <CssBaseline />
        <Header/>
        {children}
      </body>
    </html>
  );
}
