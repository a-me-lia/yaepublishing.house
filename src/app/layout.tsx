import './globals.css'
import type { Metadata } from 'next'
import { Inter} from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] , variable:"--font-inter"})

export const metadata: Metadata = {
  title: "mikopublishing.house",
  description: "",
  keywords: ['mikopublishing.house', 'yae miko', 'fan site', 'miko', 'miko publishing house', 'genshin'],
  openGraph: {
    title: "Miko Publishing House",
    description: "Miko Publishing House",
    url: "https://mikopublishing.house",
    images: "https://mikopublishing.house/favicon.ico",
    siteName: "mikopublishing.house",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans text-neutral-800`}>{children}</body>
    </html>
  )
}
