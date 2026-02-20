import type { Metadata } from 'next';
import Link from 'next/link';
import { Skills } from '@/components/skills';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InternalLinks } from '@/components/ui/internal-links';

export const metadata: Metadata = {
  title: 'Technical Skills | Wajahat Ali Mir - React Native Expert',
  description: 'Explore Wajahat Ali Mir\'s full tech stack: React Native, TypeScript, Next.js, GraphQL, Node.js, Redux, Firebase, and more. 5+ years of production experience across mobile and web.',
  keywords: ['React Native', 'TypeScript', 'Next.js', 'Mobile Development', 'System Design', 'Performance Optimization', 'Redux', 'GraphQL', 'Node.js'],
  openGraph: {
    title: 'Technical Skills & Expertise | Wajahat Ali Mir',
    description: 'React Native, TypeScript, Next.js and full-stack expertise of Wajahat Ali Mir.',
    url: 'https://wajahat-ali-mir-dev.github.io/skills',
  },
  alternates: { canonical: 'https://wajahat-ali-mir-dev.github.io/skills/' },
};

export default function SkillsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://wajahat-ali-mir-dev.github.io/skills/#webpage',
    name: 'Technical Skills & Expertise | Wajahat Ali Mir',
    description: 'Wajahat Ali Mir\'s technical skills: React Native, TypeScript, Next.js, GraphQL, Node.js, system architecture.',
    url: 'https://wajahat-ali-mir-dev.github.io/skills/',
    about: { '@id': 'https://wajahat-ali-mir-dev.github.io/#person' },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Technical Skills',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'React Native' },
        { '@type': 'ListItem', position: 2, name: 'TypeScript' },
        { '@type': 'ListItem', position: 3, name: 'Next.js' },
        { '@type': 'ListItem', position: 4, name: 'Node.js' },
        { '@type': 'ListItem', position: 5, name: 'GraphQL' },
        { '@type': 'ListItem', position: 6, name: 'System Architecture' },
      ],
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wajahat-ali-mir-dev.github.io/' },
        { '@type': 'ListItem', position: 2, name: 'Skills', item: 'https://wajahat-ali-mir-dev.github.io/skills/' },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Technical Skills &amp; Expertise</h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              A comprehensive overview of the tools, frameworks, and methodologies that Wajahat Ali Mir uses to build
              world-class mobile and web applications. Every skill listed below represents production-level proficiency
              backed by real-world projects.
            </p>
          </section>

          <Skills />

          <section className="mt-16 space-y-8 text-foreground/75 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-foreground">React Native – Core Expertise</h2>
            <p>
              React Native is Wajahat&apos;s primary specialization. With over five years of experience shipping React Native
              applications to the App Store and Google Play, he has an intimate understanding of the framework&apos;s strengths,
              limitations, and the best practices that separate maintainable production apps from prototypes.
            </p>
            <p>
              His React Native expertise includes working with the <strong>New Architecture (JSI, Fabric, TurboModules)</strong>,
              setting up continuous integration pipelines for mobile, managing complex state with <strong>Redux Toolkit</strong>,
              building offline-first experiences with Realm and AsyncStorage, integrating native modules in both Swift and Kotlin,
              and optimizing FlatList rendering for large datasets. He has also implemented comprehensive testing strategies
              using Jest, Detox, and React Native Testing Library.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">TypeScript – Type-Safe Development</h2>
            <p>
              TypeScript is not optional in Wajahat&apos;s projects — it is a fundamental requirement. Strong typing allows teams
              to move faster, catch bugs at compile time rather than runtime, and communicate system contracts clearly through
              code. He uses TypeScript across the entire stack: React Native apps, Next.js frontends, and Node.js backends.
            </p>
            <p>
              Advanced TypeScript patterns in his toolkit include <strong>discriminated unions</strong> for state machines,
              <strong>conditional types</strong> for flexible generics, <strong>template literal types</strong> for API contracts,
              and custom utility types for domain modeling. He also writes strict ESLint and TypeScript configurations that
              maintain code quality across large teams without hindering developer velocity.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">Next.js &amp; Web Development</h2>
            <p>
              Wajahat builds modern web applications using <strong>Next.js</strong>, leveraging its powerful hybrid rendering model.
              He chooses between Static Site Generation (SSG), Server-Side Rendering (SSR), and Incremental Static Regeneration (ISR)
              based on the specific requirements of each page. His web projects consistently achieve excellent Core Web Vitals scores
              by implementing proper image optimization, code splitting, and font loading strategies.
            </p>
            <p>
              The projects featured in the <Link href="/projects/" className="text-accent hover:underline">Projects section</Link> demonstrate
              his Next.js expertise applied to real-world scenarios. You can also read detailed technical explanations of these
              approaches on the <Link href="/blog/" className="text-accent hover:underline">Blog</Link>. If you are
              interested in working with someone who brings this level of frontend mastery, visit the{' '}
              <Link href="/contact/" className="text-accent hover:underline">Contact page</Link>.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">Backend &amp; Database Expertise</h2>
            <p>
              While primarily a frontend and mobile specialist, Wajahat has deep backend experience in <strong>Node.js</strong>,
              <strong>Express.js</strong>, and <strong>GraphQL</strong>. He designs RESTful and GraphQL APIs with a focus on
              security, performance, and developer experience. Database expertise includes both relational databases
              (PostgreSQL, MySQL) and NoSQL solutions (MongoDB, Firebase, Realm).
            </p>
            <p>
              His API integration skills extend to third-party services including payment gateways (Stripe, PayPal), push
              notification services (Firebase Cloud Messaging, APNs), mapping solutions (Google Maps, Mapbox), and analytics
              platforms. Understanding the full request lifecycle from the mobile or web client through the API layer to the
              database gives him a unique ability to optimize system performance holistically.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">DevOps &amp; Deployment</h2>
            <p>
              Modern software engineering requires understanding deployment and infrastructure. Wajahat is proficient with
              <strong> CI/CD pipelines</strong> using GitHub Actions and Bitbucket Pipelines, containerization with Docker,
              and cloud deployments on AWS, Google Cloud, and Vercel. He automates testing, build, and deployment processes
              to enable teams to ship confidently and frequently.
            </p>
            <p>
              To see these skills referenced by actual clients and collaborators, visit the{' '}
              <Link href="/testimonials/" className="text-accent hover:underline">Testimonials page</Link>.
              To learn about his background and how he developed these skills over time, read the{' '}
              <Link href="/about/" className="text-accent hover:underline">About page</Link>.
            </p>
          </section>

          <InternalLinks exclude="/skills/" heading="Explore the Full Portfolio" />
        </div>
      </main>
      <Footer />
    </>
  );
}
