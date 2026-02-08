import type { Metadata } from 'next';
import { Contact } from '@/components/contact';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Contact | Wajahat Ali Mir - Get In Touch',
  description: 'Contact Wajahat Ali Mir for software development projects, mobile app development, or collaboration opportunities.',
  keywords: ['Wajahat Ali Mir', 'Contact', 'Hire', 'Software Development', 'Mobile App Development', 'Freelance'],
  openGraph: {
    title: 'Contact Wajahat Ali Mir',
    description: 'Get in touch for software development projects and collaborations.',
    url: 'https://wajahat-ali-mir-dev.github.io/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
