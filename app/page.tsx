import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Blog } from '@/components/blog';
import { Testimonials } from '@/components/testimonials';
import { Contact } from '@/components/contact';
import { LinksHub } from '@/components/links-hub';
import { Hero } from '@/components/hero';

export const metadata: Metadata = {
  title: 'Wajahat Ali Mir | Senior Software Engineer – React Native & Next.js',
  description: 'Official portfolio of Wajahat Ali Mir, a Senior Software Engineer specializing in React Native, Next.js, and TypeScript. Building scalable, high-performance apps for mobile and web.',
  alternates: { canonical: 'https://wajahat-ali-mir-dev.github.io/' },
};

const internalPages = [
  { href: '/about/',        label: 'About Me',      desc: 'Background, experience & values',              emoji: '👤' },
  { href: '/skills/',       label: 'Skills',         desc: 'React Native, TypeScript & full stack',        emoji: '⚡' },
  { href: '/projects/',     label: 'Projects',       desc: 'Portfolio of production-ready apps & sites',   emoji: '🚀' },
  { href: '/blog/',         label: 'Blog',           desc: 'Technical tutorials & engineering articles',   emoji: '📝' },
  { href: '/gallery/',      label: 'Gallery',        desc: 'Photography, travel & branding visuals',       emoji: '🎨' },
  { href: '/testimonials/', label: 'Testimonials',   desc: 'Client reviews & success stories',             emoji: '⭐' },
  { href: '/links/',        label: 'Connect',        desc: 'All social media profiles',                    emoji: '🔗' },
  { href: '/contact/',      label: 'Contact',        desc: 'Start a project or ask a question',            emoji: '✉️' },
];

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://wajahat-ali-mir-dev.github.io/#webpage',
    name: 'Wajahat Ali Mir | Senior Software Engineer',
    description: 'Portfolio of Wajahat Ali Mir – Senior Software Engineer specializing in React Native and Next.js',
    url: 'https://wajahat-ali-mir-dev.github.io/',
    isPartOf: { '@id': 'https://wajahat-ali-mir-dev.github.io/#website' },
    about: { '@id': 'https://wajahat-ali-mir-dev.github.io/#person' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wajahat-ali-mir-dev.github.io/' }],
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Hero />

      {/* Quick Navigation – 5 links from homepage to all pages */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-2">Explore the Portfolio</h2>
          <p className="text-foreground/60 mb-8 text-base">
            Navigate through the different sections of Wajahat Ali Mir&apos;s professional portfolio to learn about
            his expertise, past work, writing, and how to get in touch.
          </p>
          <nav aria-label="Portfolio sections" className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {internalPages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group flex flex-col items-center text-center gap-2 p-4 rounded-xl border border-border/50 hover:border-accent/60 bg-card/40 hover:bg-accent/5 transition-all duration-300"
                title={p.desc}
              >
                <span className="text-2xl">{p.emoji}</span>
                <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">{p.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Blog />
      <Testimonials />
      <LinksHub />
      <Contact />

      {/* SEO-rich text section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-6">Why Work With Wajahat Ali Mir?</h2>
        <div className="prose prose-invert max-w-none space-y-5 text-foreground/75 text-lg leading-relaxed">
          <p>
            With over five years of focused experience in software engineering, Wajahat Ali Mir has established himself as a
            specialist in cross-platform mobile development using <strong>React Native</strong> and modern web development
            with <strong>Next.js</strong>. His work spans from early-stage startups to established enterprises, always
            delivering robust, maintainable, and production-ready code.
          </p>
          <p>
            Wajahat approaches every project with a deep understanding of clean architecture, type safety with TypeScript,
            and performance-first engineering. Whether optimizing an existing mobile application or architecting a greenfield
            web platform, he brings both the technical depth and the communication skills needed to collaborate effectively
            with teams, product managers, and clients.
          </p>
          <p>
            Explore the <Link href="/projects/" className="text-accent hover:underline">Projects section</Link> for a complete portfolio,
            read the <Link href="/blog/" className="text-accent hover:underline">technical blog</Link> for in-depth articles,
            check <Link href="/skills/" className="text-accent hover:underline">Skills &amp; expertise</Link> for a full technology overview,
            browse <Link href="/testimonials/" className="text-accent hover:underline">Testimonials</Link> for client feedback,
            or go directly to the <Link href="/contact/" className="text-accent hover:underline">Contact page</Link> to start a conversation.
          </p>
          <p>
            Wajahat is currently open to remote freelance projects, long-term contracts, and full-time senior engineering roles.
            If you are building something that requires expertise in mobile-first architecture, JavaScript, TypeScript, or modern React,
            he would love to connect. Visit <Link href="/links/" className="text-accent hover:underline">the links page</Link> to
            find all social profiles, or the <Link href="/gallery/" className="text-accent hover:underline">gallery</Link> for a
            personal look beyond the code.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
