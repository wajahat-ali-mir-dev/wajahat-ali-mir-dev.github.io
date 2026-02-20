import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
  preload: false,
  fallback: ['monospace'],
});

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://wajahat-ali-mir-dev.github.io'),
  title: {
    default: 'Wajahat Ali Mir | Senior Software Engineer',
    template: '%s | Wajahat Ali Mir'
  },
  description: 'Wajahat Ali Mir is a Senior Software Engineer with 5+ years experience specializing in React Native mobile apps and Next.js web solutions. Building scalable, high-performance applications.',
  keywords: ['Wajahat Ali Mir', 'Software Engineer', 'React Native Developer', 'Mobile App Developer', 'Next.js Expert', 'Full Stack Developer', 'TypeScript Developer', 'React Developer', 'JavaScript Expert', 'Mobile Development', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Wajahat Ali Mir', url: 'https://wajahat-ali-mir-dev.github.io' }],
  creator: 'Wajahat Ali Mir',
  publisher: 'Wajahat Ali Mir',
  applicationName: 'Wajahat Ali Mir Portfolio',
  generator: 'Next.js',
  referrer: 'strict-origin-when-cross-origin',
  verification: {
    google: "oLqH14kJZyXdF0EL-juQ2o8s2KVcBp6lSYLq-R5CpBg",
    yandex: "a53070f63f56e499",
    other: {
      'msvalidate.01': '5B6BBD08AAE0F0AF07217A96F3803D58',
    },
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
  alternates: {
    canonical: 'https://wajahat-ali-mir-dev.github.io/',
    languages: {
      'en-US': 'https://wajahat-ali-mir-dev.github.io/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wajahat-ali-mir-dev.github.io',
    siteName: 'Wajahat Ali Mir Portfolio',
    title: 'Wajahat Ali Mir | Senior Software Engineer',
    description: 'Expert in building cross-platform mobile apps with React Native and performant web applications with Next.js. 5+ years of experience.',
    images: [
      {
        url: 'https://wajahat-ali-mir-dev.github.io/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wajahat Ali Mir - Senior Software Engineer',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mrwajahatalimir',
    creator: '@mrwajahatalimir',
    title: 'Wajahat Ali Mir | Senior Software Engineer',
    description: 'Building reliable, scalable mobile applications with React Native and Next.js.',
    images: ['https://wajahat-ali-mir-dev.github.io/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/wajahat-ali-mir-apple-logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://wajahat-ali-mir-dev.github.io/#person",
        "name": "Wajahat Ali Mir",
        "givenName": "Wajahat",
        "familyName": "Ali Mir",
        "jobTitle": "Senior Software Engineer",
        "description": "Full-stack software engineer specializing in React Native mobile development and Next.js web applications.",
        "url": "https://wajahat-ali-mir-dev.github.io",
        "image": "https://wajahat-ali-mir-dev.github.io/og-image.jpg",
        "email": "mrwajahatalimir@gmail.com",
        "telephone": "+923700882006",
        "sameAs": [
          "https://github.com/wajahat-ali-mir-dev",
          "https://www.linkedin.com/in/wajahat-ali-mir-dev",
          "https://x.com/mrwajahatalimir",
          "https://dev.to/wajahat_ali_mir_dev",
          "https://mrwajahatalimir.medium.com",
        ],
        "knowsAbout": [
          "React Native", "React", "Next.js", "JavaScript", "TypeScript",
          "Mobile Development", "Web Development", "Node.js", "GraphQL", "REST APIs"
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://wajahat-ali-mir-dev.github.io/#website",
        "url": "https://wajahat-ali-mir-dev.github.io",
        "name": "Wajahat Ali Mir Portfolio",
        "description": "Portfolio website of Wajahat Ali Mir - Senior Software Engineer",
        "publisher": {
          "@id": "https://wajahat-ali-mir-dev.github.io/#person"
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Wajahat Ali Mir" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G24MWXB71R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G24MWXB71R');
          `}
        </Script>
      </body>
    </html>
  )
}
