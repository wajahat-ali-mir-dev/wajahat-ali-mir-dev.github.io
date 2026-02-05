'use client';

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

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

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-secondary/5 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-accent/30 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-foreground">
            Available for new projects
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Wajahat Ali Mir
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
          Software Engineer & Mobile App Specialist
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto">
          Building high-performance web and mobile solutions with React, React Native, and modern JavaScript. I design and deploy products that are stable, scalable, and built for performance across platforms.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => handleScroll('#projects')}
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold flex items-center justify-center gap-2 group"
          >
            View Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors font-semibold"
          >
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center items-center">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-3 rounded-lg bg-secondary/50 hover:bg-accent/20 text-foreground hover:text-accent transition-all duration-300 group"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium">
              Scroll to explore
            </span>
            <svg
              className="w-5 h-5 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
