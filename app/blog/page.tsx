import type { Metadata } from 'next';
import Link from 'next/link';
import { Blog } from '@/components/blog';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InternalLinks } from '@/components/ui/internal-links';

export const metadata: Metadata = {
  title: 'Blog & Technical Articles | Wajahat Ali Mir – React Native Expert',
  description: 'Read Wajahat Ali Mir\'s articles on React Native, Next.js, TypeScript, performance optimization, and software architecture. Practical tutorials from 5+ years of mobile & web engineering.',
  keywords: ['Tech Blog', 'React Native Tutorials', 'Software Engineering Articles', 'Next.js Tips', 'Performance Optimization', 'TypeScript Blog'],
  openGraph: {
    title: 'Blog & Technical Insights | Wajahat Ali Mir',
    description: 'Deep dives into React Native, web performance, and modern software engineering by Wajahat Ali Mir.',
    url: 'https://wajahat-ali-mir-dev.github.io/blog',
  },
  alternates: { canonical: 'https://wajahat-ali-mir-dev.github.io/blog/' },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://wajahat-ali-mir-dev.github.io/blog/#webpage',
    name: 'Blog & Technical Insights | Wajahat Ali Mir',
    description: 'Articles and tutorials on React Native, Next.js, and modern software engineering by Wajahat Ali Mir.',
    url: 'https://wajahat-ali-mir-dev.github.io/blog/',
    author: { '@id': 'https://wajahat-ali-mir-dev.github.io/#person' },
    publisher: { '@id': 'https://wajahat-ali-mir-dev.github.io/#person' },
    inLanguage: 'en-US',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wajahat-ali-mir-dev.github.io/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://wajahat-ali-mir-dev.github.io/blog/' },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 max-w-5xl">

          <section className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Technical Insights &amp; Articles</h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Writing is how Wajahat Ali Mir crystallizes complex ideas into shareable knowledge. These articles cover
              React Native architecture, Next.js optimization, TypeScript patterns, and engineering career insights.
            </p>
          </section>

          <Blog />

          <section className="mt-16 space-y-8 text-foreground/75 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-foreground">Why Technical Writing Matters</h2>
            <p>
              Teaching is one of the most effective ways to deepen understanding. When Wajahat sits down to write an article,
              the process of explaining a concept clearly and concisely to another developer forces him to examine every assumption
              and close every logical gap. Articles that seem simple on the surface — &quot;How to use Redux in React Native&quot; —
              reveal surprising depth when you attempt to cover all the edge cases, common mistakes, and architectural trade-offs.
            </p>
            <p>
              The blog focuses primarily on <strong>practical, production-oriented content</strong>. Rather than theoretical
              introductions that cover only the happy path, these articles address the real problems engineers face in production:
              managing background sync in offline-first apps, optimizing FlatList performance for lists with thousands of items,
              handling authentication token refresh cycles in React Native, and structuring monorepos that serve both web and
              mobile clients.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">React Native Series</h2>
            <p>
              The React Native series is the most comprehensive body of writing on this blog. Starting from Redux and state
              management fundamentals, it progresses to advanced topics like custom native modules, the New Architecture migration
              path, and performance profiling techniques. Whether you are building your first React Native app or optimizing a
              mature production application, these articles will give you actionable insights.
            </p>
            <p>
              Key topics covered include: implementing Redux Toolkit with RTK Query for efficient API caching, setting up
              Detox for reliable end-to-end testing on real devices, configuring Metro bundler for faster builds, using Hermes
              engine profiles to diagnose JavaScript performance issues, and implementing deep linking with React Navigation.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">TypeScript &amp; Architecture</h2>
            <p>
              TypeScript articles dive beyond basic typing into the advanced patterns that make large codebases manageable.
              Topics include building type-safe API clients, using discriminated unions for explicit state machines, designing
              domain models with readonly arrays and Record types, and writing exhaustive switch statements that the TypeScript
              compiler can verify at build time.
            </p>
            <p>
              These articles are complemented by the <Link href="/skills/" className="text-accent hover:underline">Skills section</Link>,
              which lists the complete technology stack in a visual, scannable format. The skills described there are the same
              ones applied in the <Link href="/projects/" className="text-accent hover:underline">Projects portfolio</Link>,
              giving you a holistic view of how knowledge translates to shipped code. Independent verification of this expertise
              is available through real client feedback on the{' '}
              <Link href="/testimonials/" className="text-accent hover:underline">Testimonials page</Link>.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">Performance &amp; Optimization</h2>
            <p>
              Performance articles are among the most popular on the blog because the advice is immediately actionable. Slow
              applications lose users. Every 100ms of additional load time measurably reduces conversion rates in e-commerce.
              Every jank in a mobile UI animation costs user engagement. These articles teach you to measure first — using
              Flipper, Chrome DevTools, and Lighthouse — and then fix with precision rather than guesswork.
            </p>
            <p>
              Web performance articles cover the full Core Web Vitals spectrum: reducing Largest Contentful Paint (LCP) through
              image optimization and critical CSS, improving Cumulative Layout Shift (CLS) by reserving space for dynamic content,
              and minimizing First Input Delay (FID) and Interaction to Next Paint (INP) by deferring non-critical JavaScript.
              These are not theoretical improvements — they are the same optimizations applied to this portfolio site.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">Writing Schedule &amp; Platforms</h2>
            <p>
              New articles are published on a regular schedule across Medium and the engineering blog. Medium articles tend to
              cover broader concepts and career topics, while the engineering blog features more in-depth technical tutorials
              with code examples and interactive diagrams. Subscribe to the Medium publication to receive new articles as they
              are published.
            </p>
            <p>
              If you have a topic suggestion, are interested in co-authoring an article, or would simply like to discuss any
              of the published content, reach out through the{' '}
              <Link href="/contact/" className="text-accent hover:underline">Contact page</Link>.
              To learn more about the author&apos;s background and philosophy, visit the{' '}
              <Link href="/about/" className="text-accent hover:underline">About page</Link>.
            </p>
          </section>

          <InternalLinks exclude="/blog/" heading="Continue Exploring" />
        </div>
      </main>
      <Footer />
    </>
  );
}
