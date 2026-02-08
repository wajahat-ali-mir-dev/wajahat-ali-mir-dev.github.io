import type { Metadata } from 'next';
import { LinksHub } from '@/components/links-hub';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Links | Wajahat Ali Mir - Connect With Me',
  description: 'Find all social media profiles and platforms where you can connect with Wajahat Ali Mir - GitHub, LinkedIn, Twitter, Medium, and more.',
  keywords: ['Wajahat Ali Mir', 'Links', 'Social Media', 'GitHub', 'LinkedIn', 'Twitter', 'Connect'],
  openGraph: {
    title: 'Connect with Wajahat Ali Mir',
    description: 'Find all social media profiles and platforms.',
    url: 'https://wajahat-ali-mir-dev.github.io/links',
  },
};

export default function LinksPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <LinksHub />
      </main>
      <Footer />
    </>
  );
}
