'use client';
import { CssBaseline } from '@mui/material';
import './globals.css';
import Header from './components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <CssBaseline />
        <Header/>
        {children}
      </body>
    </html>
  );
}
