import type { Metadata } from 'next';
import { Contact } from '../../components/contact';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export const metadata: Metadata = {
  title: 'Contact | Wajahat Ali Mir - Get In Touch',
  description: 'Ready to start your next project? Contact Wajahat Ali Mir for expert React Native and Next.js development services. Let\'s build something extraordinary together.',
  keywords: ['Wajahat Ali Mir', 'Contact', 'Hire', 'Software Development', 'Mobile App Development', 'Freelance', 'Consulting'],
  openGraph: {
    title: 'Contact Wajahat Ali Mir | Software Engineer',
    description: 'Get in touch for software development projects, consulting, and collaborations.',
    url: 'https://wajahat-ali-mir-dev.github.io/contact',
  },
  alternates: {
    canonical: 'https://wajahat-ali-mir-dev.github.io/contact/',
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://wajahat-ali-mir-dev.github.io/contact/#webpage",
    "name": "Contact Wajahat Ali Mir | Software Engineer",
    "description": "Get in touch with Wajahat Ali Mir for software development projects, consulting, and collaboration opportunities.",
    "url": "https://wajahat-ali-mir-dev.github.io/contact/",
    "mainEntity": { "@id": "https://wajahat-ali-mir-dev.github.io/#person" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wajahat-ali-mir-dev.github.io/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://wajahat-ali-mir-dev.github.io/contact/" }
      ]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="pt-24 container mx-auto px-4">
        <section className="mb-12 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get In Touch</h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">
              Whether you have a complex <strong>mobile app idea</strong>, need a <strong>high-performance web platform</strong>,
              or just want to discuss the latest in tech, I&apos;m always open to new opportunities.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              I specialize in turning vision into reality through clean code and strategic architecture.
              Fill out the form below or reach out directly to start the conversation.
            </p>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
