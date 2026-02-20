import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Blog } from '@/components/blog';
import { Testimonials } from '@/components/testimonials';
import { Contact } from '@/components/contact';
import { LinksHub } from '@/components/links-hub';
import { Footer } from '@/components/footer';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://wajahat-ali-mir-dev.github.io/#webpage",
    "name": "Wajahat Ali Mir | Senior Software Engineer",
    "description": "Portfolio home page of Wajahat Ali Mir - Senior Software Engineer specializing in React Native and Next.js",
    "url": "https://wajahat-ali-mir-dev.github.io/",
    "isPartOf": { "@id": "https://wajahat-ali-mir-dev.github.io/#website" },
    "about": { "@id": "https://wajahat-ali-mir-dev.github.io/#person" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wajahat-ali-mir-dev.github.io/" }]
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Testimonials />
      <LinksHub />
      <Contact />
      <Footer />
    </main>
  );
}
