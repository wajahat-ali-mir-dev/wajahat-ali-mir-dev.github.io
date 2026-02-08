import type { Metadata } from 'next';
import { About } from '../../components/about';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export const metadata: Metadata = {
  title: 'About | Wajahat Ali Mir - Software Engineer',
  description: 'Learn about Wajahat Ali Mir, a Software Engineer specializing in React Native and mobile app development. Discover my journey, skills, and passion for creating innovative solutions.',
  keywords: ['Wajahat Ali Mir', 'About', 'Software Engineer', 'React Native Developer', 'Mobile Developer'],
  openGraph: {
    title: 'About Wajahat Ali Mir',
    description: 'Software Engineer specializing in React Native and mobile app development.',
    url: 'https://wajahat-ali-mir-dev.github.io/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </>
  );
}
