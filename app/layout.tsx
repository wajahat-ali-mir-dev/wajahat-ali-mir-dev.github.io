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
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Wajahat Ali Mir",
    "jobTitle": ["Software Engineer", "React Native Developer", "Web Developer", "Full Stack Developer"],
    "url": "https://www.mrwajahatalimir.com",
    "sameAs": [
      "https://wajahat-ali-mir-dev.github.io",
      "https://www.mrwajahatalimir.com",
      "https://github.com/wajahat-ali-mir-dev",
      "https://www.linkedin.com/in/wajahat-ali-mir-dev",
      "https://www.pinterest.com/mrwajahatalimir",
      "https://x.com/mrwajahatalimir",
      "https://about.me/wajahat-ali-mir-dev",
      "https://wajahat-ali-mir-dev.blogspot.com",
      "https://linktr.ee/wajahat_ali_mir_dev",
      "https://link.me/mrwajahatalimir",
      "https://soundcloud.com/wajahat-ali-mir-dev",
      "https://mrwajahatalimir.substack.com",
      "https://dev.to/wajahat_ali_mir_dev",
      "https://sketchfab.com/wajahat-ali-mir-dev",
      "http://t.me/mrwajahatalimir"
    ],
    "email": "mailto:mrwajahatalimir@gmail.com",
    "description": "Full-stack software engineer specializing in React Native mobile development, React and Next.js web applications, and scalable solutions."
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
