import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from './theme-provider';
import GridWallet from './Wallet-provider';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'insert SEO crap here',
}
//unsure if I want this to be as minimal as possible or not
//do I shove all my shit into here
//or do I do it into ThemeProvider?
//shit u know what I think I need to make wallet provider the main provider
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GridWallet>{children}</GridWallet>
      </body>
    </html>
  )
}
