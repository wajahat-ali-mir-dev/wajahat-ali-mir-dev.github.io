'use client';

import Link from 'next/link';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Heart,
  Sparkles,
} from 'lucide-react';
import { ScrollAnimation } from './ui/scroll-animation';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/wajahat-ali-mir-dev', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/wajahat-ali-mir-dev', icon: Linkedin },
  { name: 'Twitter', href: 'https://x.com/mrwajahatalimir', icon: Twitter },
  { name: 'Email', href: 'mailto:mrwajahatalimir@gmail.com', icon: Mail },
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
    <footer className="relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--neon-purple)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <ScrollAnimation direction="up">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/30 rounded-xl blur-md group-hover:blur-lg transition-all duration-300 opacity-60 group-hover:opacity-100" />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-accent to-[var(--neon-cyan)] rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300">
                    <span className="text-accent-foreground font-bold text-xl">W</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-foreground text-lg">Wajahat Ali Mir</span>
                  <span className="text-xs text-accent flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Software Engineer
                  </span>
                </div>
              </Link>

              <p className="text-foreground/60 text-sm leading-relaxed mb-6 max-w-sm">
                Building reliable, scalable mobile applications with clean design and smooth user experiences.
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Wajahat Ali Mir on ${social.name}`}
                      title={`Wajahat Ali Mir on ${social.name}`}
                      className="w-10 h-10 rounded-xl glass border border-border hover:border-accent/50 flex items-center justify-center text-foreground hover:text-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      title={link.name === 'Portfolio' ? 'Wajahat Ali Mir Portfolio' : link.name}
                      className="text-foreground/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Development</h3>
              <ul className="space-y-2.5">
                {externalLinks.slice(0, 5).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Wajahat Ali Mir on ${link.name}`}
                      className="text-foreground/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h3>
              <ul className="space-y-2.5">
                {externalLinks.slice(5, 10).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Wajahat Ali Mir on ${link.name}`}
                      className="text-foreground/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.1}>
          <div className="p-6 rounded-2xl glass border border-border/50 text-center mb-8">
            <h4 className="font-semibold text-foreground mb-2">Get In Touch</h4>
            <p className="text-foreground/60 text-sm mb-4">Have a project? Let's talk about it.</p>
            <a
              href="mailto:mrwajahatalimir@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-[var(--neon-cyan)] text-accent-foreground hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 text-sm font-semibold"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>
          </div>
        </ScrollAnimation>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-foreground/50 text-sm flex items-center gap-2">
              © {currentYear} Wajahat Ali Mir. Made with
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </p>

            <div className="flex gap-6">
              <a
                href="https://www.mrwajahatalimir.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-accent transition-colors text-sm"
              >
                Website
              </a>
              <a
                href="https://x.com/mrwajahatalimir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-accent transition-colors text-sm"
              >
                Twitter
              </a>
              <a
                href="https://github.com/wajahat-ali-mir-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-accent transition-colors text-sm"
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
