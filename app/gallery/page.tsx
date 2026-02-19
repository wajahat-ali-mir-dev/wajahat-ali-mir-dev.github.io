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
    canonical: 'https://wajahat-ali-mir-dev.github.io/gallery',
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* GalleryGrid contains a visible H1, so no sr-only needed if it is consistent */}
      <GalleryGrid />
      <Footer />
    </main>
  );
}
