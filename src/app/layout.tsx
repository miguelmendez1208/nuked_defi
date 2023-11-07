import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GridWallet from './Wallet-provider';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'insert SEO crap here',
}

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
