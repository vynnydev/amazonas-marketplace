/* eslint-disable no-undef */
import Footer from '@/presentation/components/footer'
import Navbar from '@/presentation/components/navbar/navbar'

import ModalProvider from '@/presentation/providers/modal-provider'
import ToastProvider from '@/presentation/providers/toast-provider'
import { ThemeProvider } from '@/presentation/providers/theme-provider'

import LoginModal from '@/presentation/components/modals/login-modal'
import RegisterModal from '@/presentation/components/modals/register-modal'
import SearchModal from '@/presentation/components/modals/search-modal'

import './globals.css'
import { Urbanist } from 'next/font/google'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Amazonas Store',
  description: 'Amazonas Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <ModalProvider />
          <Navbar />
          <div className="pt-52 pb-20">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
