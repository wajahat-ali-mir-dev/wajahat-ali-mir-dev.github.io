'use client';

import Link from 'next/link';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
} from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/WajahatAliMirPro',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mirtech',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://x.com/mrwajahatalimir',
    icon: Twitter,
  },
  {
    name: 'Email',
    href: 'mailto:mrwajahatalimir@gmail.com',
    icon: Mail,
  },
];

const quickLinks = [
  { name: 'Portfolio', href: 'https://www.mrwajahatalimir.com' },
  { name: 'About Me', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Links', href: '#links' },
  { name: 'Contact', href: '#contact' },
];

const externalLinks = [
  { name: 'GitHub', href: 'https://github.com/WajahatAliMirPro' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mirtech' },
  { name: 'Medium', href: 'https://mrwajahatalimir.medium.com' },
  { name: 'Twitter', href: 'https://x.com/mrwajahatalimir' },
  { name: 'Linktree', href: 'https://linktr.ee/mrwajahatalimir' },
  { name: 'About.me', href: 'https://about.me/wajahatalimir' },
  { name: 'Blog', href: 'https://mrwajahatalimir.blogspot.com' },
  { name: 'Pinterest', href: 'https://www.pinterest.com/mrwajahatalimir' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:bg-accent/90 transition-colors">
                <span className="text-accent-foreground font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-foreground">Wajahat</span>
            </Link>

            <p className="text-foreground/70 text-sm leading-relaxed">
              Building reliable, scalable mobile applications with clean design and smooth user experiences.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-2 rounded-lg bg-secondary/50 hover:bg-accent/20 text-foreground hover:text-accent transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Social Links</h3>
            <ul className="space-y-2">
              {externalLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">More Links</h3>
            <ul className="space-y-2">
              {externalLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <p className="text-foreground/70 text-sm">
                Have a project? Let's talk about it.
              </p>

              <a
                href="mailto:mrwajahatalimir@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm font-semibold"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-foreground/60 text-sm">
              © {currentYear} Wajahat Ali Mir. All rights reserved.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.mrwajahatalimir.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors text-sm"
              >
                Website
              </a>
              <span className="text-foreground/30">•</span>
              <a
                href="https://x.com/mrwajahatalimir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors text-sm"
              >
                Twitter
              </a>
              <span className="text-foreground/30">•</span>
              <a
                href="https://github.com/WajahatAliMirPro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
