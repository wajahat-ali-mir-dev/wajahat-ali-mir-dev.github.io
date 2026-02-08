'use client';

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { TypewriterEffect } from './ui/typewriter-effect';
import { ScrollAnimation } from './ui/scroll-animation';

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
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 z-10" />
        <img
          src="/hero-banner.avif"
          alt="Background Banner"
          loading="lazy"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="text-left md:text-left">
             <ScrollAnimation direction="left"> 
            
            {/* Banner/Badge Effect */}
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 shadow-[0_0_15px_rgba(var(--accent),0.3)] backdrop-blur-sm">
                <span className="text-sm font-medium text-accent">Open to Work</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              <TypewriterEffect text={['Wajahat ']} className="inline" />
              <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
                  <TypewriterEffect text={['Ali Mir']} className="inline" delay={1} />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-accent mb-6 leading-relaxed font-semibold">
              <TypewriterEffect text={['Software Engineer & Mobile App Specialist']} delay={2} />
            </p>

            {/* Description */}
            <p className="text-base text-foreground/80 mb-8 leading-relaxed">
              Building high-performance web and mobile solutions with React, React Native, and modern JavaScript. I design and deploy products that are stable, scalable, and built for performance across platforms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => handleScroll('#projects')}
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group shadow-lg hover:shadow-accent/30"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="px-6 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-all duration-300 font-semibold hover:border-cyan-400"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 items-center">
                {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                    <ScrollAnimation key={social.name} delay={index * 0.1} direction="up" className="inline-block">
                        <a
                            href={social.href}
                            target="_blank"
                            rel="follow"
                            aria-label={`Wajahat Ali Mir on ${social.name}`}
                            title={`Wajahat Ali Mir on ${social.name}`}
                            className="p-3 block rounded-lg bg-secondary/50 hover:bg-accent/20 text-foreground hover:text-accent transition-all duration-300 group"
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                    </ScrollAnimation>
                    );
                })}
            </div>
            </ScrollAnimation>
          </div>

          {/* Right side - Image */}
          <div className="hidden md:flex justify-center">
            <ScrollAnimation direction="right" delay={0.2}>
            <div className="relative w-80 h-80">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-cyan-400/30 rounded-2xl blur-2xl" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-accent/50 hover:border-accent transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-accent/20">
                <img 
                  src="/wajahat-ali-mir-dev-coding-image.gif" 
                  alt="Wajahat Ali Mir Coding"
                  title="Wajahat Ali Mir - Coding & Development"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center animate-bounce">
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

