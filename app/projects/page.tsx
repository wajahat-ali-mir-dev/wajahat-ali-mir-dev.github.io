import type { Metadata } from 'next';
import { Projects } from '../../components/projects';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export const metadata: Metadata = {
  title: 'Projects & Case Studies | Wajahat Ali Mir',
  description: 'Explore the diverse portfolio of Wajahat Ali Mir, featuring advanced React Native mobile apps, responsive Next.js web platforms, and open-source contributions. See code and live demos.',
  keywords: ['Wajahat Ali Mir Projects', 'Portfolio', 'React Native Apps', 'Open Source', 'Web Development', 'Case Studies', 'Mobile Apps'],
  openGraph: {
    title: 'Projects by Wajahat Ali Mir | Portfolio',
    description: 'Explore a diverse portfolio featuring advanced React Native mobile apps and responsive Next.js platforms.',
    url: 'https://wajahat-ali-mir-dev.github.io/projects',
  },
  alternates: {
    canonical: 'https://wajahat-ali-mir-dev.github.io/projects/',
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://wajahat-ali-mir-dev.github.io/projects/#webpage",
    "name": "Projects & Case Studies | Wajahat Ali Mir",
    "description": "Portfolio of software projects by Wajahat Ali Mir including React Native mobile apps and Next.js web applications.",
    "url": "https://wajahat-ali-mir-dev.github.io/projects/",
    "creator": { "@id": "https://wajahat-ali-mir-dev.github.io/#person" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wajahat-ali-mir-dev.github.io/" },
        { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://wajahat-ali-mir-dev.github.io/projects/" }
      ]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="pt-24 container mx-auto px-4">
        <section className="mb-12 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Projects</h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">
              A showcase of my journey in building digital products. From <strong>complex mobile applications</strong> used by thousands
              to <strong>open-source libraries</strong> that help other developers, each project represents a unique challenge solved.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              I prioritize clean code, intuitive user interfaces, and robust architecture. Browse through the case studies below
              to see how I translate technical requirements into successful products.
            </p>
        </section>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
