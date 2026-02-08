import type { Metadata } from 'next';
import { Skills } from '../../components/skills';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export const metadata: Metadata = {
  title: 'Skills | Wajahat Ali Mir - Technical Expertise',
  description: 'Explore the technical skills of Wajahat Ali Mir including React Native, TypeScript, Next.js, and mobile app development expertise.',
  keywords: ['Wajahat Ali Mir', 'Skills', 'React Native', 'TypeScript', 'Next.js', 'Mobile Development', 'Technical Skills'],
  openGraph: {
    title: 'Skills of Wajahat Ali Mir',
    description: 'React Native, TypeScript, Next.js, and mobile app development expertise.',
    url: 'https://wajahat-ali-mir-dev.github.io/skills',
  },
};

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Skills />
      </main>
      <Footer />
    </>
  );
}
