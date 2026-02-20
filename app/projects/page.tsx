import type { Metadata } from 'next';
import Link from 'next/link';
import { Projects } from '@/components/projects';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InternalLinks } from '@/components/ui/internal-links';

export const metadata: Metadata = {
  title: 'Projects & Portfolio | Wajahat Ali Mir – React Native & Next.js',
  description: 'Explore Wajahat Ali Mir\'s portfolio of production apps: React Native mobile apps, Next.js dashboards, offline-first applications, real-time chat, and e-commerce platforms.',
  keywords: ['Wajahat Ali Mir Projects', 'Portfolio', 'React Native Apps', 'Open Source', 'Web Development', 'Case Studies', 'Mobile Apps'],
  openGraph: {
    title: 'Projects & Portfolio | Wajahat Ali Mir',
    description: 'Production-ready React Native mobile apps and Next.js web platforms built by Wajahat Ali Mir.',
    url: 'https://wajahat-ali-mir-dev.github.io/projects',
  },
  alternates: { canonical: 'https://wajahat-ali-mir-dev.github.io/projects/' },
};

export default function ProjectsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://wajahat-ali-mir-dev.github.io/projects/#webpage',
    name: 'Projects & Portfolio | Wajahat Ali Mir',
    description: 'Portfolio of software projects by Wajahat Ali Mir including React Native mobile apps and Next.js web applications.',
    url: 'https://wajahat-ali-mir-dev.github.io/projects/',
    creator: { '@id': 'https://wajahat-ali-mir-dev.github.io/#person' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wajahat-ali-mir-dev.github.io/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://wajahat-ali-mir-dev.github.io/projects/' },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 max-w-7xl">

          <section className="mb-12 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Projects</h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              A showcase of production-ready projects built over five years of professional software engineering.
              Each project represents a real-world challenge solved with clean architecture and modern technology.
            </p>
          </section>

          <Projects />

          <section className="mt-16 max-w-4xl mx-auto space-y-8 text-foreground/75 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-foreground">How These Projects Were Built</h2>
            <p>
              Every project in this portfolio began with a clear understanding of the problem to be solved. Wajahat&apos;s
              engineering process starts with discovery — understanding the user&apos;s needs, the business constraints, and
              the technical environment before writing a single line of code. This approach reduces rework and ensures that
              the final product genuinely serves its intended purpose.
            </p>
            <p>
              <strong>Mobile applications</strong> are built with React Native using a feature-based folder structure that keeps
              related code collocated and prevents the codebase from becoming fragmented as the project grows. State management
              is handled with Redux Toolkit, which provides a predictable single source of truth, powerful DevTools debugging,
              and the RTK Query library for efficient API data fetching with built-in caching.
            </p>
            <p>
              <strong>Web applications</strong> follow Next.js best practices: server components for data-heavy pages, client
              components only where interactivity is required, API route handlers for secure backend operations, and static
              generation for content-heavy pages that benefit from CDN caching. All web projects are optimized for SEO with
              proper metadata, structured data, canonical URLs, and sitemap generation — the same optimizations applied to
              this very portfolio site.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">Technology Choices &amp; Trade-offs</h2>
            <p>
              One of the most valuable skills a senior engineer develops is the ability to make informed technology trade-offs.
              Not every project needs a complex state management library — sometimes React Context is the right tool. Not every
              mobile feature needs to be built in React Native — sometimes a WebView or a native module is the better choice.
              Wajahat brings the experience to make these decisions correctly the first time, saving projects from costly rewrites.
            </p>
            <p>
              His database choices reflect the same pragmatism. Firebase is excellent for rapid prototyping and real-time features,
              but PostgreSQL with a well-designed schema is superior for complex relational data. Realm provides exceptional
              offline support in mobile apps, while Redis is perfect for caching and session management in web backends.
              Understanding when to use which tool comes from years of working across different project types and scales.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">Quality &amp; Testing Standards</h2>
            <p>
              All projects include comprehensive test coverage. Unit tests with Jest ensure individual functions behave correctly.
              Integration tests verify that components interact as expected. End-to-end tests with Detox (for mobile) and Playwright
              (for web) confirm that complete user flows work correctly in real device environments. A project without tests is a
              project that cannot be maintained or scaled safely.
            </p>
            <p>
              The technical foundations behind these projects are detailed in the{' '}
              <Link href="/skills/" className="text-accent hover:underline">Skills section</Link>.
              Clients who have worked on these types of projects have shared their experiences on the{' '}
              <Link href="/testimonials/" className="text-accent hover:underline">Testimonials page</Link>.
              Deep technical explanations of specific patterns used in these projects appear in the{' '}
              <Link href="/blog/" className="text-accent hover:underline">Blog</Link>.
              Learn more about the person behind the code on the{' '}
              <Link href="/about/" className="text-accent hover:underline">About page</Link>.
              Ready to start your own project? Visit the{' '}
              <Link href="/contact/" className="text-accent hover:underline">Contact page</Link>.
            </p>
          </section>

          <InternalLinks exclude="/projects/" heading="More From the Portfolio" />
        </div>
      </main>
      <Footer />
    </>
  );
}
