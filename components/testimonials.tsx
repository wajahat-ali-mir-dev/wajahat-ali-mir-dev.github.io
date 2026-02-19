'use client';

import { Star, Quote, MessageSquare } from 'lucide-react';
import { TypewriterEffect } from './ui/typewriter-effect';
import { ScrollAnimation } from './ui/scroll-animation';

interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    content: "Wajahat is an exceptional developer who delivered our mobile app ahead of schedule. His attention to detail and clean code practices made the entire project smooth and maintainable.",
    author: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Tech Startup Inc',
    rating: 5,
  },
  {
    id: '2',
    content: 'Working with Wajahat was a game-changer. He implemented complex offline functionality that we thought was impossible. His technical expertise and problem-solving skills are outstanding.',
    author: 'Michael Chen',
    role: 'CTO',
    company: 'Digital Solutions Ltd',
    rating: 5,
  },
  {
    id: '3',
    content: "I appreciated Wajahat's proactive communication and willingness to explain technical decisions. He not only built what we asked for but suggested improvements that made the app better.",
    author: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Mobile First Agency',
    rating: 5,
  },
  {
    id: '4',
    content: 'The performance optimizations Wajahat implemented reduced our app load time by 60%. His understanding of React Native internals is truly impressive.',
    author: 'David Smith',
    role: 'Engineering Lead',
    company: 'FinTech Solutions',
    rating: 5,
  },
];

const stats = [
  { value: '100%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Successful Projects' },
  { value: '5⭐', label: 'Average Rating' },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--neon-purple)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <ScrollAnimation direction="left">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass border border-accent/20">
              <MessageSquare className="w-4 h-4 text-accent" />
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
                <TypewriterEffect text="Testimonials" />
              </h2>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              <TypewriterEffect text="What Clients Say" delay={0.5} />
            </h3>

            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              I'm proud of the relationships I've built and the impact I've had on my clients' projects.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={testimonial.id} direction="up" delay={index * 0.1}>
              <div className="group relative p-8 rounded-2xl glass border border-border/50 hover:border-accent/40 transition-all duration-500 card-hover h-full flex flex-col">
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-accent" />
                </div>

                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed flex-grow text-lg italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-[var(--neon-cyan)] rounded-full blur opacity-40" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-[var(--neon-cyan)]/20 flex items-center justify-center border border-accent/30">
                      <span className="text-accent font-bold text-xl">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="up" delay={0.4}>
          <div className="mt-16 grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group relative p-8 rounded-2xl glass border border-border/50 hover:border-accent/40 transition-all duration-500 card-hover text-center">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                  <p className="text-sm text-foreground/60">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
