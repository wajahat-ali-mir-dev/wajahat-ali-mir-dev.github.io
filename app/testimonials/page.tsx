import type { Metadata } from 'next';
import { Testimonials } from '../../components/testimonials';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export const metadata: Metadata = {
  title: 'Client Testimonials | Wajahat Ali Mir - Success Stories',
  description: 'See what clients and colleagues say about working with Wajahat Ali Mir. Real feedback on project delivery, technical expertise, and professional collaboration.',
  keywords: ['Testimonials', 'Client Reviews', 'Wajahat Ali Mir Reviews', 'Software Engineer Feedback', 'Freelance Reviews', 'Success Stories'],
  openGraph: {
    title: 'Client Testimonials | Wajahat Ali Mir',
    description: 'See what clients and colleagues say about working with Wajahat Ali Mir.',
    url: 'https://wajahat-ali-mir-dev.github.io/testimonials',
  },
  alternates: {
    canonical: 'https://wajahat-ali-mir-dev.github.io/testimonials/',
  },
};

export default function TestimonialsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://wajahat-ali-mir-dev.github.io/testimonials/#webpage",
    "name": "Client Testimonials | Wajahat Ali Mir",
    "description": "Client reviews and testimonials for Wajahat Ali Mir's software development work.",
    "url": "https://wajahat-ali-mir-dev.github.io/testimonials/",
    "about": { "@id": "https://wajahat-ali-mir-dev.github.io/#person" },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Client Testimonials",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Review",
            "reviewBody": "Outstanding technical expertise and professional delivery on React Native project.",
            "author": { "@type": "Person", "name": "Client" },
            "itemReviewed": { "@id": "https://wajahat-ali-mir-dev.github.io/#person" },
            "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }
          }
        }
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wajahat-ali-mir-dev.github.io/" },
        { "@type": "ListItem", "position": 2, "name": "Testimonials", "item": "https://wajahat-ali-mir-dev.github.io/testimonials/" }
      ]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="pt-24 container mx-auto px-4">
        <section className="mb-12 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Client Success Stories</h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">
              Building software is not just about code; it&apos;s about <strong>building trust</strong> and <strong>delivering value</strong>.
              I take pride in my ability to understand client needs and exceed expectations.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Read below to see how I&apos;ve helped businesses and teams achieve their goals through reliable, high-quality development.
            </p>
        </section>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
