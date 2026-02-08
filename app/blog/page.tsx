import type { Metadata } from 'next';
import { Blog } from '@/components/blog';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Blog | Wajahat Ali Mir - Technical Writing',
  description: 'Read technical articles by Wajahat Ali Mir on React Native, mobile development, TypeScript, and software engineering best practices.',
  keywords: ['Wajahat Ali Mir', 'Blog', 'Technical Writing', 'React Native', 'Mobile Development', 'TypeScript'],
  openGraph: {
    title: 'Blog by Wajahat Ali Mir',
    description: 'Technical articles on React Native, mobile development, and software engineering.',
    url: 'https://wajahat-ali-mir-dev.github.io/blog',
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Blog />
      </main>
      <Footer />
    </>
  );
}
