import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GalleryGrid } from '@/components/gallery-grid';
import { InternalLinks } from '@/components/ui/internal-links';

export const metadata: Metadata = {
  title: 'Photo Gallery | Wajahat Ali Mir – Travel, Nature & Portraits',
  description: 'Explore Wajahat Ali Mir\'s curated gallery: professional portraits, branding photography, travel shots from Deosai National Park, and nature photography from Pakistan.',
  keywords: ['Image Gallery', 'Wajahat Ali Mir Photos', 'Travel Photography Pakistan', 'Deosai National Park', 'Professional Headshots', 'Branding Portfolio'],
  openGraph: {
    title: 'Photo Gallery | Wajahat Ali Mir',
    description: 'Professional portraits, travel photography and branding imagery by Wajahat Ali Mir.',
    url: 'https://wajahat-ali-mir-dev.github.io/gallery',
  },
  alternates: { canonical: 'https://wajahat-ali-mir-dev.github.io/gallery/' },
};

export default function GalleryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': 'https://wajahat-ali-mir-dev.github.io/gallery/#webpage',
    name: 'Photo Gallery | Wajahat Ali Mir',
    description: 'Professional portraits, travel photography, and branding visuals by Wajahat Ali Mir.',
    url: 'https://wajahat-ali-mir-dev.github.io/gallery/',
    creator: { '@id': 'https://wajahat-ali-mir-dev.github.io/#person' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wajahat-ali-mir-dev.github.io/' },
        { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://wajahat-ali-mir-dev.github.io/gallery/' },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <div className="pt-24 container mx-auto px-4">
        <section className="mb-12 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Visual Gallery</h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">
            A curated collection of photographs and visual content by Wajahat Ali Mir — spanning professional portraits,
            travel photography from some of Pakistan&apos;s most spectacular landscapes, and branding design assets.
          </p>
        </section>
      </div>

      <GalleryGrid />

      <div className="container mx-auto px-4 max-w-5xl">
        <section className="mt-16 space-y-8 text-foreground/75 text-lg leading-relaxed">
          <h2 className="text-3xl font-bold text-foreground">About the Photography</h2>
          <p>
            Photography is one of Wajahat Ali Mir&apos;s passions outside of software engineering. The images in this gallery
            span several years of travel, personal projects, and professional photo sessions. Exploring new places and capturing
            them through a lens has given him a unique visual sensibility that influences how he approaches UI and UX design
            in his software projects — every interface should be beautiful, clear, and purposeful.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12">Deosai National Park</h2>
          <p>
            The travel photographs from <strong>Deosai National Park</strong> hold special significance. Deosai is one of the
            world&apos;s highest plateaus, located in the Gilgit-Baltistan region of Pakistan at an average elevation of over
            4,000 meters above sea level. The park is a stunning landscape of rolling tundra, crystal-clear streams, wildflowers,
            and an extraordinary diversity of wildlife including the rare Himalayan brown bear.
          </p>
          <p>
            Visiting Deosai requires a full day of driving on mountain roads from Skardu, but the reward is breathtaking.
            The vast open plateau, stretching 3,000 square kilometers without a single tree, creates a sense of being at the
            edge of the world. These photographs attempt to capture that vastness and the raw, unspoiled beauty that makes
            Pakistan one of the most photographically rich countries on earth.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12">Professional Portraits &amp; Branding</h2>
          <p>
            Professional portrait photography serves a practical purpose in the digital age. A high-quality headshot communicates
            professionalism, approachability, and attention to detail — qualities that matter when a potential employer or client
            encounters your LinkedIn profile or website for the first time. The portrait sessions documented in this gallery
            were designed to capture authentic personality rather than stiff formality.
          </p>
          <p>
            Branding photography for software and technology professionals is an emerging category that Wajahat takes seriously.
            The images here — showing him in natural contexts, working on his laptop, and engaging with his environment — tell
            a more complete story than any resume could. They show a person who is curious, engaged, and genuinely passionate
            about his work.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12">Garden &amp; Nature Photography</h2>
          <p>
            The garden and nature photographs in the collection reflect a quieter side of Wajahat&apos;s personality. He finds
            that spending time in natural environments — whether a manicured garden or a remote mountain plateau — recharges
            his creative energy and provides the mental clarity needed for solving complex engineering problems.
          </p>
          <p>
            This balance between intense technical work and mindful time in nature is a deliberate part of his productivity
            strategy. The best engineers are not those who grind without rest, but those who manage their energy and creativity
            strategically. These photographs are a visual record of that balance.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12">Connecting the Visual and Technical</h2>
          <p>
            There is a deep connection between visual sensibility and software craftsmanship. A developer who can evaluate
            whether a UI &quot;feels right&quot; — not just whether it technically functions — delivers better products. The
            visual training that comes from photography translates directly into better component design, more thoughtful
            color palette choices, and more attention to spacing, typography, and visual hierarchy in user interfaces.
          </p>
          <p>
            If you are interested in working with someone who brings both technical depth and aesthetic sensibility to their
            work, visit the <Link href="/contact/" className="text-accent hover:underline">Contact page</Link> to start a
            conversation. You can also explore the <Link href="/projects/" className="text-accent hover:underline">Projects portfolio</Link>
            to see these qualities applied to real-world software products, or read the{' '}
            <Link href="/about/" className="text-accent hover:underline">About page</Link> for a more personal introduction.
            Technical writing on the <Link href="/blog/" className="text-accent hover:underline">Blog</Link> and
            feedback from past collaborators on the{' '}
            <Link href="/testimonials/" className="text-accent hover:underline">Testimonials page</Link> complete the picture.
          </p>
        </section>

        <InternalLinks exclude="/gallery/" heading="Explore More" />
      </div>

      <Footer />
    </main>
  );
}
