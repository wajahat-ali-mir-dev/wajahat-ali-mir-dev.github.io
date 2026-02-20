import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GalleryGrid } from '@/components/gallery-grid';

export const metadata: Metadata = {
  title: 'Image Gallery | Wajahat Ali Mir',
  description: 'Explore the visual world of Wajahat Ali Mir through a curated gallery of professional portraits, branding design assets, nature photography, and travel moments.',
  keywords: ['Image Gallery', 'Wajahat Ali Mir Photos', 'Travel Photography', 'Professional Headshots', 'Branding Portfolio'],
  openGraph: {
    title: 'Image Gallery | Wajahat Ali Mir',
    description: 'Explore the visual world of Wajahat Ali Mir through a curated gallery of professional portraits, photography, and design.',
    url: 'https://wajahat-ali-mir-dev.github.io/gallery',
  },
  alternates: {
    canonical: 'https://wajahat-ali-mir-dev.github.io/gallery/',
  },
};

export default function GalleryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": "https://wajahat-ali-mir-dev.github.io/gallery/#webpage",
    "name": "Image Gallery | Wajahat Ali Mir",
    "description": "Curated gallery of professional portraits, branding design assets, nature photography, and travel moments by Wajahat Ali Mir.",
    "url": "https://wajahat-ali-mir-dev.github.io/gallery/",
    "creator": { "@id": "https://wajahat-ali-mir-dev.github.io/#person" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wajahat-ali-mir-dev.github.io/" },
        { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://wajahat-ali-mir-dev.github.io/gallery/" }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <GalleryGrid />
      <Footer />
    </main>
  );
}
