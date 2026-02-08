'use client';

import { Star } from 'lucide-react';

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
    content:
      "Wajahat is an exceptional developer who delivered our mobile app ahead of schedule. His attention to detail and clean code practices made the entire project smooth and maintainable.",
    author: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Tech Startup Inc',
    rating: 5,
  },
  {
    id: '2',
    content:
      'Working with Wajahat was a game-changer. He implemented complex offline functionality that we thought was impossible. His technical expertise and problem-solving skills are outstanding.',
    author: 'Michael Chen',
    role: 'CTO',
    company: 'Digital Solutions Ltd',
    rating: 5,
  },
  {
    id: '3',
    content:
      "I appreciated Wajahat's proactive communication and willingness to explain technical decisions. He not only built what we asked for but suggested improvements that made the app better.",
    author: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Mobile First Agency',
    rating: 5,
  },
  {
    id: '4',
    content:
      'The performance optimizations Wajahat implemented reduced our app load time by 60%. His understanding of React Native internals is truly impressive.',
    author: 'David Smith',
    role: 'Engineering Lead',
    company: 'FinTech Solutions',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
              Testimonials
            </h2>
            <div className="w-1 h-8 bg-accent rounded-full" />
          </div>

          <h3 className="text-4xl font-bold text-foreground mb-4 leading-tight">
            What Clients Say
          </h3>

          <p className="text-foreground/70 max-w-2xl mx-auto">
            I'm proud of the relationships I've built and the impact I've had on my clients' projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-lg border border-border bg-secondary/30 hover:border-accent/50 hover:bg-secondary/40 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-foreground/70">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6">
          <div className="p-8 rounded-lg border border-border bg-gradient-to-br from-accent/10 to-transparent text-center">
            <p className="text-3xl font-bold text-accent mb-2">100%</p>
            <p className="text-sm text-foreground/70">Client Satisfaction</p>
          </div>

          <div className="p-8 rounded-lg border border-border bg-gradient-to-br from-accent/10 to-transparent text-center">
            <p className="text-3xl font-bold text-accent mb-2">15+</p>
            <p className="text-sm text-foreground/70">Successful Projects</p>
          </div>

          <div className="p-8 rounded-lg border border-border bg-gradient-to-br from-accent/10 to-transparent text-center">
            <p className="text-3xl font-bold text-accent mb-2">5⭐</p>
            <p className="text-sm text-foreground/70">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
