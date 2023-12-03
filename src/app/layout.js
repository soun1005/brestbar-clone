import { Inter } from 'next/font/google';
import './globals.css';
import AppContextProvider from './Context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Brest Bar Clone',
  description: 'Brest bar clone',
};

export default function RootLayout({ children }) {
  return (
    <AppContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AppContextProvider>
  );
}
