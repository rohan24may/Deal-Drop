import React from 'react'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata = {
  title: 'Deal Drop - Track Price Drops Effortlessly',
  description: 'Track prices from any e-commerce site and get instant alerts when prices drop. Save money effortlessly with Deal Drop.',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}


         <Toaster richColors />
      </body>
    </html>
  )
}

