import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AuthProvider } from './contexts/authContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'yaepublishing.house',
  description: '',
  keywords: [
    'yaepublishing.house',
    'yae miko',
    'fan site',
    'miko',
    'yae publishing house',
    'genshin',
  ],
  openGraph: {
    title: 'Yae Publishing House',
    description: 'Yae Publishing House',
    url: 'https://yaepublishing.house',
    images: 'https://yaepublishing.house/favicon.ico',
    siteName: 'yaepublishing.house',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${inter.variable} font-sans text-neutral-800`}>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
