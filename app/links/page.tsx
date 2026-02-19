import type { Metadata } from 'next';
import { LinksHub } from '../../components/links-hub';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export const metadata: Metadata = {
  title: 'Connect With Me | Wajahat Ali Mir - Links & Resources',
  description: 'Central hub for Wajahat Ali Mir\'s important links. Connect via social media, view open source projects, read articles, or schedule a consultation call.',
  keywords: ['Links', 'Wajahat Ali Mir Socials', 'LinkTree', 'Connect', 'Social Media', 'Resources', 'Profile'],
  openGraph: {
    title: 'Important Links | Wajahat Ali Mir',
    description: 'Central hub for Wajahat Ali Mir\'s important links. Connect via social media, view projects, and more.',
    url: 'https://wajahat-ali-mir-dev.github.io/links',
  },
  alternates: {
    canonical: 'https://wajahat-ali-mir-dev.github.io/links',
  },
};

export default function LinksPage() {
  return (
    <>
      <Header />
      <main className="pt-24 container mx-auto px-4">
        <section className="mb-8 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Connect With Me</h1>
             <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">
              I am active across various platforms. Choose your preferred way to connect, follow my work, or get in touch.
            </p>
        </section>
        <LinksHub />
      </main>
      <Footer />
    </>
  );
}
