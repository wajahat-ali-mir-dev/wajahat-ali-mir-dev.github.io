import type { Metadata } from 'next';
import Link from 'next/link';
import { Contact } from '@/components/contact';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InternalLinks } from '@/components/ui/internal-links';

export const metadata: Metadata = {
  title: 'Contact Wajahat Ali Mir | Hire a Senior Software Engineer',
  description: 'Get in touch with Wajahat Ali Mir for React Native and Next.js development projects, freelance consulting, or full-time senior engineering roles. Fast response guaranteed.',
  keywords: ['Wajahat Ali Mir', 'Contact', 'Hire Software Engineer', 'React Native Developer', 'Freelance', 'Consulting', 'Mobile App Development'],
  openGraph: {
    title: 'Contact Wajahat Ali Mir | Senior Software Engineer',
    description: 'Get in touch for React Native, Next.js, and TypeScript development projects. Available for freelance and contract work.',
    url: 'https://wajahat-ali-mir-dev.github.io/contact',
  },
  alternates: { canonical: 'https://wajahat-ali-mir-dev.github.io/contact/' },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://wajahat-ali-mir-dev.github.io/contact/#webpage',
    name: 'Contact Wajahat Ali Mir | Senior Software Engineer',
    description: 'Contact Wajahat Ali Mir for software development projects, consulting, and collaboration opportunities.',
    url: 'https://wajahat-ali-mir-dev.github.io/contact/',
    mainEntity: { '@id': 'https://wajahat-ali-mir-dev.github.io/#person' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wajahat-ali-mir-dev.github.io/' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://wajahat-ali-mir-dev.github.io/contact/' },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get In Touch</h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Whether you have a specific project in mind or just want to explore possibilities, Wajahat Ali Mir is
              available for conversations about React Native, Next.js, and TypeScript engineering challenges.
            </p>
          </section>

          <Contact />

          <section className="mt-16 max-w-4xl mx-auto space-y-8 text-foreground/75 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-foreground">What to Expect When You Reach Out</h2>
            <p>
              Wajahat responds to all professional inquiries within 24 hours on business days. The initial response will
              either answer your question directly or propose a brief discovery call to better understand your requirements.
              He values clear, efficient communication and will never leave you wondering about the status of your inquiry.
            </p>
            <p>
              For project inquiries, it helps to come prepared with a description of the problem you are trying to solve,
              the platforms you need to target (iOS, Android, web, or all three), your timeline expectations, and any
              existing code or architecture that the new work must integrate with. The more context you provide upfront,
              the more accurate and useful the initial response will be.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">Types of Projects Wajahat Takes On</h2>
            <p>
              <strong>React Native Mobile Applications:</strong> From brand new apps to complex migrations of existing
              native iOS/Android apps to React Native, Wajahat handles the full mobile development lifecycle. This includes
              architecture planning, UI/UX implementation, API integration, offline capabilities, push notifications, app
              store submission, and ongoing maintenance.
            </p>
            <p>
              <strong>Next.js Web Applications:</strong> Modern web applications built with Next.js, TypeScript, and
              Tailwind CSS. Includes SEO optimization, Core Web Vitals tuning, e-commerce platforms, dashboards, content
              sites, and SaaS products. The same performance optimization principles applied to this portfolio are brought
              to every client project.
            </p>
            <p>
              <strong>Technical Consulting:</strong> Architecture reviews, code quality audits, performance issue diagnosis,
              and engineering team coaching. If your team is struggling with a specific technical challenge or wants an expert
              second opinion on an important decision, this is the service for you.
            </p>
            <p>
              <strong>Full-Time Senior Engineering Roles:</strong> Wajahat is also open to discussing full-time opportunities
              that align with his expertise and values. Remote-first companies working on interesting technical problems with
              a culture of engineering excellence are particularly of interest.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">Before Reaching Out</h2>
            <p>
              It may help to first review the work available in the portfolio. The{' '}
              <Link href="/projects/" className="text-accent hover:underline">Projects page</Link> showcases real applications
              across different domains and tech stacks. The{' '}
              <Link href="/skills/" className="text-accent hover:underline">Skills page</Link> provides a complete overview
              of the technologies and tools available. The{' '}
              <Link href="/testimonials/" className="text-accent hover:underline">Testimonials page</Link> includes authentic
              feedback from previous clients and collaborators. And for the personal story behind the engineer, the{' '}
              <Link href="/about/" className="text-accent hover:underline">About page</Link> and the{' '}
              <Link href="/blog/" className="text-accent hover:underline">Blog</Link> provide deeper insight into both
              background and thinking.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12">Response Time &amp; Communication</h2>
            <p>
              Wajahat operates primarily in Pakistan Standard Time (PKT, UTC+5) but is accustomed to working with
              clients across North America, Europe, the Middle East, and Southeast Asia. He is flexible with communication
              tools and meeting times, and uses Slack, email, and video calls as appropriate for the project type. Clear,
              asynchronous communication is preferred for ongoing projects to maintain focus and deep work time.
            </p>
            <p>
              All project work is covered by clear written agreements that define scope, deliverables, timeline, and
              payment terms before work begins. Transparent communication about project status, blockers, and changes is
              a core commitment — no surprises, no hidden scope, no missed deadlines without prior discussion.
            </p>
          </section>

          <InternalLinks exclude="/contact/" heading="Learn More Before Reaching Out" />
        </div>
      </main>
      <Footer />
    </>
  );
}
