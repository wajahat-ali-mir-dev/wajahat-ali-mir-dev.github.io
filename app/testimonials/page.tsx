import type { Metadata } from 'next';
import Link from 'next/link';
import { Testimonials } from '@/components/testimonials';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InternalLinks } from '@/components/ui/internal-links';

export const metadata: Metadata = {
  title: 'Client Testimonials | Wajahat Ali Mir – Proven Track Record',
  description: 'Real reviews from clients and colleagues of Wajahat Ali Mir. Read authentic feedback on project delivery, React Native expertise, communication, and professional collaboration.',
  keywords: ['Testimonials', 'Client Reviews', 'Wajahat Ali Mir Reviews', 'React Native Developer Reviews', 'Freelance Reviews', 'Engineer Feedback'],
  openGraph: {
    title: 'Client Testimonials | Wajahat Ali Mir',
    description: 'Authentic client reviews confirming Wajahat Ali Mir\'s expertise, reliability, and communication skills.',
    url: 'https://wajahat-ali-mir-dev.github.io/testimonials',
  },
  alternates: { canonical: 'https://wajahat-ali-mir-dev.github.io/testimonials/' },
};

export default function TestimonialsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://wajahat-ali-mir-dev.github.io/testimonials/#webpage',
    name: 'Client Testimonials | Wajahat Ali Mir',
    description: 'Client reviews and testimonials for Wajahat Ali Mir\'s software development work.',
    url: 'https://wajahat-ali-mir-dev.github.io/testimonials/',
    about: { '@id': 'https://wajahat-ali-mir-dev.github.io/#person' },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Client Testimonials',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Review',
            reviewBody: 'Outstanding technical expertise and professional delivery on React Native project.',
            author: { '@type': 'Person', name: 'Client' },
            itemReviewed: { '@id': 'https://wajahat-ali-mir-dev.github.io/#person' },
            reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
          },
        },
      ],
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wajahat-ali-mir-dev.github.io/' },
        { '@type': 'ListItem', position: 2, name: 'Testimonials', item: 'https://wajahat-ali-mir-dev.github.io/testimonials/' },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Client Testimonials</h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              The best measure of an engineer&apos;s value is not their resume — it is what their clients and colleagues
              say after the project is complete. These reviews represent authentic feedback from people who have
              worked directly with Wajahat Ali Mir on real professional projects.
            </p>
          </section>

          <Testimonials />

          <section className="mt-16 space-y-8 text-foreground/75 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-foreground">What Clients Consistently Say</h2>
            <p>
              Across all client relationships, three qualities appear consistently in feedback about working with Wajahat
              Ali Mir: <strong>technical excellence</strong>, <strong>reliable delivery</strong>, and
              <strong> clear communication</strong>. These are not accidental attributes — they are the result of
              deliberate professional habits developed over five years of working with clients from diverse industries
              and cultural backgrounds.
            </p>
            <p>
              Technical excellence means writing code that works correctly the first time, handling edge cases proactively,
              and building systems that can be maintained and extended after handoff. It means understanding the WHY behind
              a requirement, not just the WHAT, and raising concerns early when a proposed approach has risks that the client
              may not have considered.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">The Value of Reliable Delivery</h2>
            <p>
              In software development, reliability is rarer than raw talent. Many technically brilliant developers struggle
              to consistently deliver on commitments — whether due to underestimating complexity, poor scope management, or
              communication failures. Wajahat&apos;s track record of on-time delivery comes from disciplined project scoping,
              proactive identification of blockers, and honest communication when circumstances change.
            </p>
            <p>
              His approach to project management borrows from agile methodology: breaking large deliverables into small,
              demonstrable milestones; daily async updates during active development sprints; and feature flags that enable
              incremental releases rather than big-bang deployments. These practices give clients visibility into progress
              and reduce the risk of the final deliverable missing expectations.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">Communication as a Technical Skill</h2>
            <p>
              The ability to explain complex technical concepts to non-technical stakeholders is a genuine skill that many
              engineers undervalue. Clients should not need to understand the internals of React Native to have a productive
              conversation about their mobile application. Wajahat bridges this gap by translating technical constraints and
              trade-offs into business-level language that empowers clients to make informed decisions.
            </p>
            <p>
              This communication competency is particularly valuable in client-facing roles and is reflected in the feedback
              received from product managers and business stakeholders — not just technical leads. The ability to collaborate
              across disciplines is one of the key differentiators that makes him effective in cross-functional teams.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">Long-Term Client Relationships</h2>
            <p>
              Many of the clients represented in these testimonials have returned for multiple projects. This repeat business
              is the strongest indicator of client satisfaction — clients do not return to engineers who merely complete a
              task; they return to those who made them feel like valued partners throughout the engagement.
            </p>
            <p>
              Building long-term client relationships requires more than technical skills. It requires accountability,
              continuous improvement, and genuine interest in the client&apos;s business success beyond the immediate
              project scope. Wajahat takes pride in understanding the broader context of each client&apos;s business so
              that the technical recommendations he makes are aligned with long-term value, not just short-term deliverables.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">Ready to Start a Conversation?</h2>
            <p>
              If these testimonials give you confidence, the next step is a conversation. Visit the{' '}
              <Link href="/contact/" className="text-accent hover:underline">Contact page</Link> to send a message
              or propose a discovery call. Before reaching out, you may also want to review the{' '}
              <Link href="/projects/" className="text-accent hover:underline">Projects portfolio</Link> to see the
              type of work that has generated this positive feedback, for the full list of technical skills visit the{' '}
              <Link href="/skills/" className="text-accent hover:underline">Skills page</Link>, for the personal story
              visit the <Link href="/about/" className="text-accent hover:underline">About page</Link>, and for the
              technical writing visit the{' '}
              <Link href="/blog/" className="text-accent hover:underline">Blog</Link>.
            </p>
          </section>

          <InternalLinks exclude="/testimonials/" heading="Continue Exploring the Portfolio" />
        </div>
      </main>
      <Footer />
    </>
  );
}
