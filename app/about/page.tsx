import type { Metadata } from 'next';
import Link from 'next/link';
import { About } from '@/components/about';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InternalLinks } from '@/components/ui/internal-links';

export const metadata: Metadata = {
  title: 'About Me | Wajahat Ali Mir - Senior Software Engineer',
  description: 'Wajahat Ali Mir is a Senior Software Engineer with 5+ years of expertise in React Native, Next.js, and TypeScript. Discover his background, philosophy, and career journey.',
  keywords: ['Wajahat Ali Mir', 'About', 'Software Engineer', 'React Native', 'Mobile Development', 'Experience', 'Bio', 'Next.js Developer'],
  openGraph: {
    title: 'About Wajahat Ali Mir | Senior Software Engineer',
    description: 'Senior Software Engineer with 5+ years experience in React Native, Next.js, and TypeScript.',
    url: 'https://wajahat-ali-mir-dev.github.io/about',
  },
  alternates: { canonical: 'https://wajahat-ali-mir-dev.github.io/about/' },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': 'https://wajahat-ali-mir-dev.github.io/about/#webpage',
    name: 'About Wajahat Ali Mir | Senior Software Engineer',
    description: 'Learn about Wajahat Ali Mir, a Senior Software Engineer with 5+ years experience in React Native and Next.js.',
    url: 'https://wajahat-ali-mir-dev.github.io/about/',
    mainEntity: { '@id': 'https://wajahat-ali-mir-dev.github.io/#person' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wajahat-ali-mir-dev.github.io/' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://wajahat-ali-mir-dev.github.io/about/' },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Hero section */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Wajahat Ali Mir</h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4 max-w-3xl mx-auto">
              I am a dedicated <strong>Senior Software Engineer</strong> with a passion for crafting exceptional digital experiences.
              My journey in technology spans over five years, consistently specializing in
              <strong> React Native</strong> for mobile and <strong>Next.js</strong> for the web.
            </p>
          </section>

          {/* About component */}
          <About />

          {/* Long-form SEO content */}
          <section className="mt-16 space-y-8 text-foreground/75 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-foreground">My Engineering Journey</h2>
            <p>
              My professional journey began with a deep curiosity about how software interacts with users in real life. Early in my
              career, I discovered that mobile applications represent the most intimate interface between technology and people — apps
              live in users' pockets, wake them up in the morning, help them navigate their day, and connect them with loved ones.
              This insight drove me to specialize in <strong>React Native</strong>, the framework that allows engineers to build
              truly cross-platform experiences from a single JavaScript codebase.
            </p>
            <p>
              Over the years, I have worked across a diverse range of industries — from fintech and e-commerce to healthcare and
              content platforms. Each domain presented unique challenges: strict security requirements in fintech, high-traffic
              scalability in e-commerce, privacy considerations in healthcare, and real-time performance in content delivery.
              Solving these challenges has given me a broad and deep perspective on software engineering that goes far beyond
              any single framework or language.
            </p>
            <p>
              In parallel with my mobile development, I developed mastery in full-stack web development using <strong>Next.js</strong>.
              The React ecosystem's philosophy of component-driven development resonates deeply with my engineering values — building
              small, testable, composable units that can be assembled into complex systems. Next.js adds server-side rendering,
              static generation, and edge deployment capabilities that make it the ideal framework for SEO-critical and
              performance-sensitive web applications.
            </p>
            <h2 className="text-3xl font-bold text-foreground mt-12">My Technical Philosophy</h2>
            <p>
              I believe great software is invisible — when done right, the technology serves the user without friction or confusion.
              This philosophy informs every technical decision I make: from choosing the right state management pattern to selecting
              the appropriate data fetching strategy. I prioritize readability and maintainability over clever one-liners, because
              code is read far more often than it is written.
            </p>
            <p>
              <strong>TypeScript</strong> is central to my workflow. The confidence that comes from strong type safety is not
              just a developer convenience — it directly reduces production bugs and speeds up onboarding for new team members.
              I write TypeScript interfaces and types as first-class architectural artifacts, treating them as living documentation
              of the system's contract.
            </p>
            <p>
              Performance is not an afterthought in my work — it is a requirement from day one. On mobile, this means using
              FlatList correctly, minimizing re-renders, leveraging the React Native new architecture, and profiling with
              Flipper. On the web, it means optimizing Core Web Vitals, implementing proper lazy loading, using next/image
              efficiently, and ensuring the Time to First Byte (TTFB) is minimized.
            </p>
            <h2 className="text-3xl font-bold text-foreground mt-12">Beyond the Code</h2>
            <p>
              Outside of engineering, I am deeply interested in travel, photography, and continuous learning. Traveling to
              places like the spectacular <strong>Deosai National Park</strong> in Pakistan has given me a broader worldview
              and appreciation for diverse cultures — qualities that make me a more empathetic and communicative collaborator.
              You can explore some of these experiences in the{' '}
              <Link href="/gallery/" className="text-accent hover:underline">photo gallery</Link>.
            </p>
            <p>
              I also write extensively about software engineering. My articles on{' '}
              <Link href="/blog/" className="text-accent hover:underline">the blog</Link> cover
              topics from Redux architecture in React Native to TypeScript best practices and performance profiling techniques.
              Writing helps me clarify my own thinking and gives back to the developer community that has helped shape my skills.
            </p>
            <p>
              If you are interested in my technical capabilities, the{' '}
              <Link href="/skills/" className="text-accent hover:underline">Skills page</Link> provides
              a comprehensive overview of every tool, framework, and methodology in my toolkit. To see these skills applied
              in real projects, visit the{' '}
              <Link href="/projects/" className="text-accent hover:underline">Projects portfolio</Link>.
              And if you have read enough and want to discuss working together, go directly to the{' '}
              <Link href="/contact/" className="text-accent hover:underline">Contact page</Link>.
              I look forward to hearing about your project challenges.
            </p>
          </section>

          <InternalLinks exclude="/about/" heading="Explore More of the Portfolio" />
        </div>
      </main>
      <Footer />
    </>
  );
}
