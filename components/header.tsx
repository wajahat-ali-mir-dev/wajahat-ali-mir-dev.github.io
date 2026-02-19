'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Links', href: '/links' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveItem(window.location.pathname);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/30 rounded-xl blur-md group-hover:blur-lg transition-all duration-300 opacity-60 group-hover:opacity-100" />
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-accent/50 group-hover:border-accent transition-all duration-300 bg-gradient-to-br from-accent/20 to-secondary/30 flex items-center justify-center shrink-0 group-hover:shadow-lg group-hover:shadow-accent/20">
              <img src="/logo.png" alt="Wajahat Ali Mir Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-foreground hidden sm:block text-sm tracking-wide">
              Wajahat Ali Mir
            </span>
            <span className="text-xs text-accent hidden sm:flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Developer
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                activeItem === item.href
                  ? 'text-accent'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {activeItem === item.href && (
                <span className="absolute inset-0 bg-accent/10 rounded-lg border border-accent/30" />
              )}
              <span className="relative">{item.name}</span>
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent to-[var(--neon-cyan)] transition-all duration-300 rounded-full ${
                activeItem === item.href ? 'w-1/2' : 'group-hover:w-1/2'
              }`} />
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-[var(--neon-cyan)] text-accent-foreground rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105"
        >
          <span>Get in Touch</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        <button
          className="md:hidden relative p-2 rounded-lg hover:bg-secondary/30 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative z-10">
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </div>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden glass-strong border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  setIsOpen(false);
                  setActiveItem(item.href);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium ${
                  activeItem === item.href
                    ? 'bg-accent/10 text-accent border border-accent/30'
                    : 'text-foreground/70 hover:bg-secondary/20 hover:text-foreground'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full mt-4 px-4 py-3 bg-gradient-to-r from-accent to-[var(--neon-cyan)] text-accent-foreground rounded-xl font-medium text-sm transition-all duration-300"
            >
              <span>Get in Touch</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
