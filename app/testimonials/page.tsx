import type { Metadata } from 'next';
import { Testimonials } from '../../components/testimonials';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export const metadata: Metadata = {
  title: 'Testimonials | Wajahat Ali Mir - Client Reviews',
  description: 'Read testimonials and reviews from clients who have worked with Wajahat Ali Mir on React Native and mobile app development projects.',
  keywords: ['Wajahat Ali Mir', 'Testimonials', 'Reviews', 'Client Feedback', 'React Native', 'Mobile App Development'],
  openGraph: {
    title: 'Testimonials for Wajahat Ali Mir',
    description: 'Client reviews and feedback on software development projects.',
    url: 'https://wajahat-ali-mir-dev.github.io/testimonials',
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
