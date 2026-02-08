import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Wajahat Ali Mir | Software Engineer & React Native Specialist',
  description: 'Wajahat Ali Mir is a Software Engineer specializing in React Native, Next.js, and mobile app development. Creating scalable, high-performance solutions for web and mobile.',
  keywords: ['Wajahat Ali Mir', 'Software Engineer', 'React Native Developer', 'Mobile App Developer', 'Next.js Developer', 'Full Stack Developer', 'React Developer', 'JavaScript', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Wajahat Ali Mir', url: 'https://wajahat-ali-mir-dev.github.io' }],
  creator: 'Wajahat Ali Mir',
  publisher: 'Wajahat Ali Mir',
  verification: {
    google: "oLqH14kJZyXdF0EL-juQ2o8s2KVcBp6lSYLq-R5CpBg",
    yandex: "a53070f63f56e499",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wajahat-ali-mir-dev.github.io',
    title: 'Wajahat Ali Mir | Software Engineer & React Native Specialist',
    description: 'Expert in building cross-platform mobile apps with React Native and performant web applications with Next.js.',
    siteName: 'Wajahat Ali Mir Portfolio',
    images: [
      {
        url: 'https://wajahat-ali-mir-dev.github.io/og-image.jpg', // Assuming you might add an OG image later or use a generic one
        width: 1200,
        height: 630,
        alt: 'Wajahat Ali Mir - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wajahat Ali Mir | Software Engineer',
    description: 'Building reliable, scalable mobile applications with clean design and smooth user experiences.',
    creator: '@mrwajahatalimir',
    images: ['https://wajahat-ali-mir-dev.github.io/og-image.jpg'],
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
    ],
    apple: '/wajahat-ali-mir-apple-logo.png',
  },
  manifest: '/site.webmanifest',
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
    "givenName": "Wajahat",
    "familyName": "Ali Mir",
    "jobTitle": ["Software Engineer", "React Native Developer", "Web Developer", "Full Stack Developer"],
    "url": "https://wajahat-ali-mir-dev.github.io",
    "image": "https://wajahat-ali-mir-dev.github.io/wajahat-ali-mir-dev-coding-image.gif",
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
      "https://api.whatsapp.com/send/?phone=%2B923700882006&text=Hello%20Wajahat!%20I%20hope%20you%20are%20doing%20well",
      "https://link.me/mrwajahatalimir",
      "https://soundcloud.com/wajahat-ali-mir-dev",
      "https://mrwajahatalimir.substack.com",
      "https://dev.to/wajahat_ali_mir_dev",
      "https://sketchfab.com/wajahat-ali-mir-dev",
      "https://www.crunchbase.com/organization/wajahat-ali-mir-solutions",
      "http://t.me/mrwajahatalimir",
      "https://wajahat-ali-mir-dev.vercel.app"
    ],
    "email": "mailto:mrwajahatalimir@gmail.com",
    "description": "Full-stack software engineer specializing in React Native mobile development, React and Next.js web applications, and scalable solutions.",
    "knowsAbout": ["React Native", "React", "Next.js", "JavaScript", "TypeScript", "Software Engineering", "Mobile Development", "Web Development"],
    "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "University Name" // Placeholder or remove if not needed
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

