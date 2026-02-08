'use client';

import Link from 'next/link';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
} from 'lucide-react';
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
  { name: 'Portfolio', href: 'https://wajahat-ali-mir-dev.github.io' },
  { name: 'About Me', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Links', href: '/links' },
  { name: 'Contact', href: '/contact' },
];

const externalLinks = [
  { name: 'GitHub', href: 'https://github.com/wajahat-ali-mir-dev' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/wajahat-ali-mir-dev' },
  { name: 'Dev.to', href: 'https://dev.to/wajahat_ali_mir_dev' },
  { name: 'Twitter', href: 'https://x.com/mrwajahatalimir' },
  { name: 'Linktree', href: 'https://linktr.ee/wajahat_ali_mir_dev' },
  { name: 'About.me', href: 'https://about.me/wajahat-ali-mir-dev' },
  { name: 'Blog', href: 'https://wajahat-ali-mir-dev.blogspot.com' },
  { name: 'Substack', href: 'https://mrwajahatalimir.substack.com' },
  { name: 'Pinterest', href: 'https://www.pinterest.com/mrwajahatalimir' },
  { name: 'SoundCloud', href: 'https://soundcloud.com/wajahat-ali-mir-dev' },
  { name: 'Sketchfab', href: 'https://sketchfab.com/wajahat-ali-mir-dev' },
  { name: 'Telegram', href: 'http://t.me/mrwajahatalimir' },
  { name: 'link.me', href: 'https://link.me/mrwajahatalimir' },
  { name: 'WhatsApp', href: 'https://api.whatsapp.com/send/?phone=%2B923700882006&text=Hello%20Wajahat!%20I%20hope%20you%20are%20doing%20well' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimation direction="up">
        <div className="grid md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:bg-accent/90 transition-colors">
                <span className="text-accent-foreground font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-foreground">
                 <TypewriterEffect text="Wajahat" delay={0.2} />
              </span>
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
                    rel="follow"
                    aria-label={`Wajahat Ali Mir on ${social.name}`}
                    title={`Wajahat Ali Mir on ${social.name}`}
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
                    title={link.name === 'Portfolio' ? 'Wajahat Ali Mir Portfolio' : link.name}
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
            <h3 className="font-semibold text-foreground mb-4">Development</h3>
            <ul className="space-y-2">
              {externalLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="follow"
                    title={`Wajahat Ali Mir on ${link.name}`}
                    aria-label={`Wajahat Ali Mir on ${link.name}`}
                    className="text-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Content & Writing */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Content</h3>
            <ul className="space-y-2">
              {externalLinks.slice(5, 9).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="follow"
                    title={`Wajahat Ali Mir on ${link.name}`}
                    className="text-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Platforms */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-2">
              {externalLinks.slice(9).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="follow"
                    title={`Wajahat Ali Mir on ${link.name}`}
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
                title="Email Wajahat Ali Mir"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm font-semibold"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
        </ScrollAnimation>

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
                rel="follow"
                title="Wajahat Ali Mir Portfolio Website"
                className="text-foreground/60 hover:text-accent transition-colors text-sm"
              >
                Website
              </a>
              <span className="text-foreground/30">•</span>
              <a
                href="https://x.com/mrwajahatalimir"
                target="_blank"
                rel="follow"
                title="Wajahat Ali Mir on Twitter"
                className="text-foreground/60 hover:text-accent transition-colors text-sm"
              >
                Twitter
              </a>
              <span className="text-foreground/30">•</span>
              <a
                href="https://github.com/wajahat-ali-mir-dev"
                target="_blank"
                rel="follow"
                title="Wajahat Ali Mir on GitHub"
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
