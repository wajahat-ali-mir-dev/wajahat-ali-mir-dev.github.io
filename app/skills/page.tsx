import type { Metadata } from 'next';
import { Skills } from '../../components/skills';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export const metadata: Metadata = {
  title: 'Technical Skills | Wajahat Ali Mir - React Native Expert',
  description: 'Explore the technical expertise of Wajahat Ali Mir. specializing in React Native, TypeScript, Next.js, System Architecture, and Mobile Performance Optimization.',
  keywords: ['React Native', 'TypeScript', 'Next.js', 'Mobile Development', 'System Design', 'Performance Optimization', 'Redux', 'GraphQL'],
  openGraph: {
    title: 'Technical Skills & Expertise | Wajahat Ali Mir',
    description: 'Comprehensive overview of technical skills including React Native, TypeScript, and Next.js.',
    url: 'https://wajahat-ali-mir-dev.github.io/skills',
  },
  alternates: {
    canonical: 'https://wajahat-ali-mir-dev.github.io/skills',
  },
};

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 container mx-auto px-4">
        <section className="mb-12 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Technical Skills & Expertise</h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">
            My technical foundation is built on modern JavaScript and the React ecosystem. I possess deep expertise in 
            <strong>React Native</strong> for building near-native mobile experiences and <strong>Next.js</strong> for server-rendered web applications.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Beyond coding, I focus on <strong>system architecture</strong>, <strong>performance optimization</strong>, and 
            <strong>maintainable codebases</strong>. I continuously stay updated with the latest industry trends to deliver 
            cutting-edge solutions.
          </p>
        </section>
        <Skills />
      </main>
      <Footer />
    </>
  );
}
