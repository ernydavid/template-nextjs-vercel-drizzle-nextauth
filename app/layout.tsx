import React from 'react'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import Navbar from '@/components/navigation-bar'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Template NextJs With authentication and DB',
  description: 'This project is a template made with VercelPostgres, DrizzleOrm, AuthJs, Shadcn'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable
      )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          <Navbar />
          <div className='w-full max-w-7xl pt-20 flex justify-center mx-auto'>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
