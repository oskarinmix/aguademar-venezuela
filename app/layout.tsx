import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import localFont from 'next/font/local'

const TTLakes = localFont({
  src: [
    {
      path: './fonts/TTLakesNeueRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/TTLakesNeueItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/TTLakesNeueBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-ttlakes'
})

export const metadata: Metadata = {
  title: "Agua de Mar Venezuela",
  description: "Descubre y protege la belleza del mar venezolano",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={TTLakes.className}>
      <body className={TTLakes.className} >{children}</body>
    </html>
  )
}



import './globals.css'