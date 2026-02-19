'use client';

import { TypewriterEffect } from './ui/typewriter-effect';
import { ScrollAnimation } from './ui/scroll-animation';
import NextImage from 'next/image';
import { Code2, Rocket, Layers, Cpu } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'React & React Native',
    description: 'Expert in building cross-platform mobile apps and modern web applications with clean, scalable architecture.',
    gradient: 'from-accent to-[var(--neon-cyan)]',
  },
  {
    icon: Rocket,
    title: 'Performance & SEO',
    description: 'Optimizing for speed, SEO, and user experience with modern web frameworks and best practices.',
    gradient: 'from-[var(--neon-purple)] to-[var(--neon-pink)]',
  },
  {
    icon: Layers,
    title: 'TypeScript & APIs',
    description: 'Building type-safe applications with robust API integration and offline-first capabilities.',
    gradient: 'from-[var(--neon-cyan)] to-[var(--neon-blue)]',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--neon-purple)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <ScrollAnimation direction="left">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full glass border border-accent/20">
                <Cpu className="w-4 h-4 text-accent" />
                <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
                  <TypewriterEffect text="About Me" />
                </h2>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                <TypewriterEffect text="Full-Stack Engineer & Mobile Specialist" delay={0.5} />
              </h3>

              <div className="space-y-5 text-foreground/70 leading-relaxed text-base sm:text-lg">
                <p>
                  I'm Wajahat Ali Mir, a software engineer specializing in full-stack web and mobile application development. I design and deploy products that are stable, scalable, and built for performance across platforms.
                </p>

                <p>
                  My passion lies in writing clean, maintainable code with emphasis on performance, stability, and user experience. Beyond code, I focus on clean architecture, performance tuning, and efficient data flows.
                </p>

                <p>
                  I've had the privilege to collaborate with cross-functional teams, solving complex problems through practical problem-solving. Whether crafting a new feature or optimizing performance, I approach each challenge with dedication.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border/50">
                {[
                  { value: '5+', label: 'Years Experience' },
                  { value: '20+', label: 'Projects Completed' },
                  { value: '15+', label: 'Happy Clients' },
                ].map((stat, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <ScrollAnimation direction="up" delay={0.1}>
                  <div className="group relative rounded-2xl overflow-hidden border border-accent/30 hover:border-accent/60 transition-all duration-500 h-52">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <NextImage 
                      src="/wajahat-ali-mir-in-garden.png" 
                      alt="Wajahat Ali Mir in garden"
                      title="Wajahat Ali Mir in Garden - Software Engineer"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={0.2}>
                  <div className="group relative rounded-2xl overflow-hidden border border-accent/30 hover:border-accent/60 transition-all duration-500 h-52">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-purple)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <NextImage 
                      src="/wajahat-ali-mir-in-deosai-national-park.jpg" 
                      alt="Wajahat Ali Mir in Deosai National Park"
                      title="Wajahat Ali Mir in Deosai National Park"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </ScrollAnimation>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <ScrollAnimation key={index} direction="right" delay={index * 0.1}>
                    <div className="group relative p-6 rounded-2xl glass border border-border/50 hover:border-accent/40 transition-all duration-500 card-hover">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                           style={{ background: `linear-gradient(135deg, var(--accent), var(--neon-cyan))` }} />
                      <div className="flex gap-5 relative">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 shrink-0`}>
                          <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                            <feature.icon className="w-6 h-6 text-accent" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-lg group-hover:text-accent transition-colors">
                            <TypewriterEffect text={feature.title} delay={index * 0.5} speed={0.03} />
                          </h4>
                          <p className="text-sm text-foreground/60 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
