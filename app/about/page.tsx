import type { Metadata } from 'next';
import { About } from '../../components/about';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export const metadata: Metadata = {
  title: 'About Me | Wajahat Ali Mir - Senior Software Engineer',
  description: 'Wajahat Ali Mir is a Senior Software Engineer with deep expertise in React Native, Next.js, and mobile architecture. I solve complex problems and build scalable digital products.',
  keywords: ['Wajahat Ali Mir', 'About', 'Software Engineer', 'React Native', 'Mobile Development', 'Experience', 'Bio', 'Next.js Developer'],
  openGraph: {
    title: 'About Wajahat Ali Mir | Senior Software Engineer',
    description: 'Wajahat Ali Mir is a Senior Software Engineer with deep expertise in React Native, Next.js, and mobile architecture.',
    url: 'https://wajahat-ali-mir-dev.github.io/about',
  },
  alternates: {
    canonical: 'https://wajahat-ali-mir-dev.github.io/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 container mx-auto px-4">
        <section className="mb-12 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Wajahat Ali Mir</h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">
              I am a dedicated <strong>Senior Software Engineer</strong> with a passion for crafting exceptional digital experiences. 
              My journey in technology has been defined by a relentless pursuit of quality and innovation, specializing in 
              <strong>React Native</strong> for mobile and <strong>Next.js</strong> for the web.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              With a focus on performance, scalability, and user-centric design, I help businesses transform complex requirements into 
              intuitive, robust software solutions. Whether building a startup MVP or architecting an enterprise system, I bring 
              technical depth and strategic thinking to every project.
            </p>
        </section>
        <About />
      </main>
      <Footer />
    </>
  );
}
