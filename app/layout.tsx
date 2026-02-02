import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Wajahat Ali Mir | Software Engineer & React Native Developer',
  description: 'Professional portfolio of Wajahat Ali Mir. Software engineer specializing in React Native, mobile app development, and scalable solutions.',
  keywords: 'React Native, Mobile Development, Software Engineer, JavaScript, TypeScript',
  generator: 'v0.app',
  openGraph: {
    title: 'Wajahat Ali Mir | Software Engineer',
    description: 'Building reliable, scalable mobile applications with clean design and smooth user experiences.',
    type: 'website',
    url: 'https://www.mrwajahatalimir.com',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
