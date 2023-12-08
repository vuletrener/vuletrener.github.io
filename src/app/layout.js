import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vule Trener',
  description: 'Personalni i grupni treninzi na vračaru - na zdrav, sportski način bez jo-jo efekata.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
