'use client';

import { ArrowRight, Github, Linkedin, Mail, Code2, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';
import { TypewriterEffect } from './ui/typewriter-effect';
import { ScrollAnimation } from './ui/scroll-animation';
import NextImage from 'next/image';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/wajahat-ali-mir-dev',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/wajahat-ali-mir-dev',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:mrwajahatalimir@gmail.com',
    icon: Mail,
  },
];

const floatingElements = [
  { icon: Code2, delay: 0, position: 'top-32 left-[15%]' },
  { icon: Zap, delay: 1, position: 'top-48 right-[20%]' },
  { icon: Sparkles, delay: 2, position: 'bottom-32 left-[25%]' },
];

export function Hero() {
  const handleScroll = (href: string) => {
    try {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch {
      // On sub-pages these anchors won't exist – silently ignore
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/85 z-10" />
        <NextImage
          src="/hero-banner.avif"
          alt="Background Banner"
          fill
          className="object-cover opacity-25"
          priority
        />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[var(--neon-purple)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 grid-bg" />
      </div>

      {floatingElements.map((el, index) => (
        <div
          key={index}
          className={`absolute ${el.position} hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/50 border border-accent/30 backdrop-blur-sm animate-float`}
          style={{ animationDelay: `${el.delay}s` }}
        >
          <el.icon className="w-5 h-5 text-accent" />
        </div>
      ))}

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 text-center lg:text-left">
            <ScrollAnimation direction="left">
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full glass border border-accent/30 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-sm font-medium text-accent">Open to Work</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                <TypewriterEffect text={['Wajahat ']} className="inline" />
                <span className="gradient-text-animated">
                  <TypewriterEffect text={['Ali Mir']} className="inline" delay={1} />
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-accent mb-6 leading-relaxed font-semibold flex items-center gap-3 justify-center lg:justify-start">
                <Code2 className="w-6 h-6 hidden sm:block" />
                <TypewriterEffect text={['Software Engineer & Mobile App Specialist']} delay={2} />
              </p>

              <p className="text-base sm:text-lg text-foreground/70 mb-10 leading-relaxed max-w-xl">
                Building high-performance web and mobile solutions with React, React Native, and modern JavaScript. I design and deploy products that are stable, scalable, and built for performance across platforms.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <button
                  onClick={() => handleScroll('#projects')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-accent to-[var(--neon-cyan)] text-accent-foreground rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:scale-105"
                >
                  <span className="relative z-10">View Portfolio</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => handleScroll('#contact')}
                  className="group relative px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 border-2 border-accent/50 rounded-xl group-hover:border-accent transition-colors" />
                  <span className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors rounded-xl" />
                  <span className="relative z-10 text-accent">Contact Me</span>
                </button>
              </div>

              <div className="flex gap-3 items-center justify-center lg:justify-start">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <ScrollAnimation key={social.name} delay={index * 0.1} direction="up" className="inline-block">
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener follow"
                        aria-label={`Wajahat Ali Mir on ${social.name}`}
                        title={`Wajahat Ali Mir on ${social.name}`}
                        className="group relative p-4 rounded-xl glass border border-border hover:border-accent/50 text-foreground hover:text-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                      >
                        <Icon className="w-5 h-5 relative z-10" />
                      </a>
                    </ScrollAnimation>
                  );
                })}
              </div>
            </ScrollAnimation>
          </div>

          <div className="lg:col-span-2 hidden lg:flex justify-center">
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-[var(--neon-purple)]/20 to-[var(--neon-cyan)]/20 rounded-3xl blur-2xl animate-pulse-glow" />
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-[var(--neon-purple)] to-[var(--neon-cyan)] rounded-2xl opacity-20 blur-sm" />

                <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-accent/40 hover:border-accent transition-all duration-500 shadow-2xl hover:shadow-accent/20 group">
                  <NextImage
                    src="/wajahat-ali-mir-dev-coding-image.gif"
                    alt="Wajahat Ali Mir Coding"
                    title="Wajahat Ali Mir - Coding & Development"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 glass rounded-lg p-3 border border-accent/20">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-foreground/80">Available for projects</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl glass border border-accent/30 flex items-center justify-center animate-float">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl glass border border-[var(--neon-purple)]/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-xl">💻</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="mt-16 flex justify-center animate-bounce">
          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
              Scroll to explore
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-accent/50 flex items-start justify-center p-1 group-hover:border-accent transition-colors">
              <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
