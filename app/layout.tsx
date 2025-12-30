import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NeonCode Solutions - Inovação em Software e SaaS/ERP',
  description: 'Especializada em desenvolvimento de software personalizado e soluções SaaS/ERP para empresas. Transforme sua empresa com tecnologia de ponta.',
  keywords: 'software house, desenvolvimento de software, SaaS, ERP, soluções empresariais, tecnologia',
  authors: [{ name: 'NeonCode Solutions' }],
  openGraph: {
    title: 'NeonCode Solutions - Inovação em Software e SaaS/ERP',
    description: 'Especializada em desenvolvimento de software personalizado e soluções SaaS/ERP para empresas.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeToggle />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}

