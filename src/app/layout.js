import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vule Trener',
  description: 'Personalni i grupni treninzi na vračaru - na zdrav, sportski način bez jo-jo efekata.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add more meta tags as needed */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
