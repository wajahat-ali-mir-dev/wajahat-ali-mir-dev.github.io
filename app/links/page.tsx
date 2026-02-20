import type { Metadata } from 'next';
import Link from 'next/link';
import { LinksHub } from '@/components/links-hub';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InternalLinks } from '@/components/ui/internal-links';

export const metadata: Metadata = {
  title: 'Connect with Wajahat Ali Mir | Social Media & Professional Links',
  description: 'All the places to find Wajahat Ali Mir online: GitHub, LinkedIn, Medium blog, email, and more. Your central hub for connecting with this senior software engineer.',
  keywords: ['Links', 'Wajahat Ali Mir Social Media', 'GitHub Profile', 'LinkedIn', 'Medium', 'Connect', 'Portfolio Links'],
  openGraph: {
    title: 'Connect with Wajahat Ali Mir | Professional Links',
    description: 'All social media profiles and online platforms for connecting with Wajahat Ali Mir.',
    url: 'https://wajahat-ali-mir-dev.github.io/links',
  },
  alternates: { canonical: 'https://wajahat-ali-mir-dev.github.io/links/' },
};

export default function LinksPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': 'https://wajahat-ali-mir-dev.github.io/links/#webpage',
    name: 'Connect with Wajahat Ali Mir | Social & Professional Links',
    description: 'Central hub for all of Wajahat Ali Mir\'s social profiles, projects, and resources.',
    url: 'https://wajahat-ali-mir-dev.github.io/links/',
    mainEntity: { '@id': 'https://wajahat-ali-mir-dev.github.io/#person' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wajahat-ali-mir-dev.github.io/' },
        { '@type': 'ListItem', position: 2, name: 'Links', item: 'https://wajahat-ali-mir-dev.github.io/links/' },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Connect with Wajahat Ali Mir</h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              All the places you can find Wajahat Ali Mir online — from code repositories to professional networks,
              technical writing platforms, and direct contact. Choose your preferred way to connect.
            </p>
          </section>

          <LinksHub />

          <section className="mt-16 space-y-8 text-foreground/75 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-foreground">Where to Find Wajahat Online</h2>
            <p>
              In today&apos;s digital-first world, a developer&apos;s online presence is as important as their resume.
              Wajahat Ali Mir maintains active profiles across all major professional and developer platforms, ensuring
              that potential clients, employers, and collaborators can easily find, verify, and connect with him regardless
              of their preferred platform.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">GitHub – Open Source &amp; Code Portfolio</h2>
            <p>
              GitHub is where Wajahat&apos;s code lives. His profile includes repositories for personal projects, open-source
              contributions, and template codebases that other developers can use as starting points. The commit history,
              pull request reviews, and issue discussions on GitHub provide authentic evidence of how he works in collaborative
              engineering environments.
            </p>
            <p>
              Active open-source contributions include React Native utilities, TypeScript type definitions, and Next.js starter
              templates. Following his GitHub account is the best way to stay updated when new repositories are published.
              The repositories featured in the <Link href="/projects/" className="text-accent hover:underline">Projects portfolio</Link>
              link directly to their GitHub source code.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">LinkedIn – Professional Network</h2>
            <p>
              LinkedIn is Wajahat&apos;s primary professional networking platform. His profile includes a complete work
              history, endorsed skills, recommendations from past colleagues and clients, and published articles. Connecting
              on LinkedIn is the appropriate way to stay in touch after a professional interaction or to reach out for
              long-term networking rather than immediate project work.
            </p>
            <p>
              LinkedIn recommendations on his profile complement the testimonials available on the{' '}
              <Link href="/testimonials/" className="text-accent hover:underline">Testimonials page</Link>, providing
              additional social proof from verified professional connections.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">Medium – Technical Writing</h2>
            <p>
              Wajahat publishes in-depth technical articles on Medium covering React Native, TypeScript, and web performance.
              The Medium publication reaches thousands of developers globally and is the best place to follow his writing
              in a platform optimized for reading. Articles published on Medium are also referenced and summarized on the{' '}
              <Link href="/blog/" className="text-accent hover:underline">Blog page</Link> of this portfolio.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">Email – Direct Professional Contact</h2>
            <p>
              For business inquiries, project proposals, and professional collaboration, direct email remains the most
              effective communication channel. Email allows for the detailed, asynchronous communication that complex
              project discussions require. Wajahat checks and responds to professional emails every business day.
            </p>
            <p>
              If you are ready to start a conversation about a project, the{' '}
              <Link href="/contact/" className="text-accent hover:underline">Contact page</Link> includes a form
              that will pre-fill an email to send directly. Alternatively, you can browse the{' '}
              <Link href="/about/" className="text-accent hover:underline">About page</Link> to learn more before
              reaching out, or review the{' '}
              <Link href="/skills/" className="text-accent hover:underline">Skills section</Link> to confirm that
              the required expertise is available for your specific project needs.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">Maintaining an Authentic Online Presence</h2>
            <p>
              Wajahat believes in maintaining an authentic, consistent online presence across all platforms. This means keeping
              all profiles updated with current information, responding to messages promptly and professionally, and ensuring
              that the code, writing, and photography shared publicly represent his real capabilities and personality accurately.
            </p>
            <p>
              The integration of this portfolio — connecting the <Link href="/projects/" className="text-accent hover:underline">code portfolio</Link>,
              the <Link href="/gallery/" className="text-accent hover:underline">visual gallery</Link>,
              the <Link href="/blog/" className="text-accent hover:underline">technical writing</Link>,
              and all external social profiles — is intentional. It creates a complete, multi-dimensional picture of
              a person who is not just technically competent, but creative, communicative, and genuinely engaged with
              his field.
            </p>
          </section>

          <InternalLinks exclude="/links/" heading="Explore the Portfolio" />
        </div>
      </main>
      <Footer />
    </>
  );
}
