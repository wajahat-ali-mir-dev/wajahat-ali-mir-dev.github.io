import type { Metadata } from 'next';
import { Projects } from '../../components/projects';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export const metadata: Metadata = {
  title: 'Projects | Wajahat Ali Mir - Software Engineer',
  description: 'Explore the portfolio of Wajahat Ali Mir featuring React Native mobile apps, web applications, and innovative software solutions.',
  keywords: ['Wajahat Ali Mir', 'Projects', 'Portfolio', 'React Native Apps', 'Mobile Apps', 'Web Development'],
  openGraph: {
    title: 'Projects by Wajahat Ali Mir',
    description: 'React Native mobile apps, web applications, and software solutions.',
    url: 'https://wajahat-ali-mir-dev.github.io/projects',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
