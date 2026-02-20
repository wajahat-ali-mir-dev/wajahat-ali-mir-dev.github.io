import type { Metadata } from 'next';
import { Blog } from '../../components/blog';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export const metadata: Metadata = {
  title: 'Blog & Insights | Wajahat Ali Mir',
  description: 'Read insightful articles and tutorials by Wajahat Ali Mir on React Native, Next.js, performance optimization, and software architecture. Staying ahead in the tech world.',
  keywords: ['Tech Blog', 'React Native Tutorials', 'Software Engineering Articles', 'Next.js Tips', 'Performance Optimization', 'Coding Blog'],
  openGraph: {
    title: 'Tech Insights & Tutorials | Wajahat Ali Mir',
    description: 'Deep dives into React Native, web performance, and modern software engineering practices.',
    url: 'https://wajahat-ali-mir-dev.github.io/blog',
  },
  alternates: {
    canonical: 'https://wajahat-ali-mir-dev.github.io/blog/',
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://wajahat-ali-mir-dev.github.io/blog/#webpage",
    "name": "Blog & Technical Insights | Wajahat Ali Mir",
    "description": "Articles and tutorials on React Native, Next.js, and modern software engineering by Wajahat Ali Mir.",
    "url": "https://wajahat-ali-mir-dev.github.io/blog/",
    "author": { "@id": "https://wajahat-ali-mir-dev.github.io/#person" },
    "publisher": { "@id": "https://wajahat-ali-mir-dev.github.io/#person" },
    "inLanguage": "en-US",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wajahat-ali-mir-dev.github.io/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://wajahat-ali-mir-dev.github.io/blog/" }
      ]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="pt-24 container mx-auto px-4">
        <section className="mb-12 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Technical Insights</h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">
              Writing is how I crystalize my understanding of complex topics. Here you&apos;ll find deep dives into
              <strong> React Native architecture</strong>, <strong>Next.js optimization techniques</strong>, and
              general software engineering best practices.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              My goal is to share knowledge that helps other developers build better, faster, and more scalable applications.
            </p>
        </section>
        <Blog />
      </main>
      <Footer />
    </>
  );
}
