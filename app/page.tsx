import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Blog } from '@/components/blog';
import { Testimonials } from '@/components/testimonials';
import { Contact } from '@/components/contact';
import { LinksHub } from '@/components/links-hub';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Testimonials />
      <LinksHub />
      <Contact />
      <Footer />
    </main>
  );
}
