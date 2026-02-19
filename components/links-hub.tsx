'use client';

import { ExternalLink, Link2, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from './ui/scroll-animation';

const allLinks = [
  {
    category: 'Portfolio & Main Sites',
    gradient: 'from-accent to-[var(--neon-cyan)]',
    links: [
      { name: 'Main Portfolio', href: 'https://www.mrwajahatalimir.com', description: 'Personal portfolio website' },
      { name: 'GitHub Portfolio', href: 'https://wajahat-ali-mir-dev.github.io', description: 'GitHub hosted portfolio' },
    ],
  },
  {
    category: 'Development & Code',
    gradient: 'from-[var(--neon-purple)] to-[var(--neon-pink)]',
    links: [
      { name: 'GitHub', href: 'https://github.com/wajahat-ali-mir-dev', description: 'Code repositories and projects' },
      { name: 'Dev.to', href: 'https://dev.to/wajahat_ali_mir_dev', description: 'Technical articles and community' },
      { name: 'Sketchfab', href: 'https://sketchfab.com/wajahat-ali-mir-dev', description: '3D models and creative work' },
    ],
  },
  {
    category: 'Professional & Social',
    gradient: 'from-[var(--neon-cyan)] to-[var(--neon-blue)]',
    links: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/wajahat-ali-mir-dev', description: 'Professional profile' },
      { name: 'About.me', href: 'https://about.me/wajahat-ali-mir-dev', description: 'Professional bio' },
      { name: 'link.me', href: 'https://link.me/mrwajahatalimir', description: 'Personal link profile' },
      { name: 'Crunchbase', href: 'https://www.crunchbase.com/organization/wajahat-ali-mir-solutions', description: 'Company profile' },
    ],
  },
  {
    category: 'Content & Writing',
    gradient: 'from-accent to-[var(--neon-purple)]',
    links: [
      { name: 'Substack', href: 'https://mrwajahatalimir.substack.com', description: 'Newsletter and articles' },
      { name: 'Blogger', href: 'https://wajahat-ali-mir-dev.blogspot.com', description: 'Blog posts and tutorials' },
      { name: 'Twitter/X', href: 'https://x.com/mrwajahatalimir', description: 'Latest updates and thoughts' },
    ],
  },
  {
    category: 'Creative & Multimedia',
    gradient: 'from-[var(--neon-pink)] to-[var(--neon-purple)]',
    links: [
      { name: 'Pinterest', href: 'https://www.pinterest.com/mrwajahatalimir', description: 'Design inspiration and ideas' },
      { name: 'SoundCloud', href: 'https://soundcloud.com/wajahat-ali-mir-dev', description: 'Audio projects and mixes' },
    ],
  },
  {
    category: 'Direct Connect',
    gradient: 'from-[var(--neon-blue)] to-accent',
    links: [
      { name: 'Linktree', href: 'https://linktr.ee/wajahat_ali_mir_dev', description: 'All links in one place' },
      { name: 'Telegram', href: 'http://t.me/mrwajahatalimir', description: 'Chat on Telegram' },
      { name: 'WhatsApp', href: 'https://api.whatsapp.com/send/?phone=%2B923700882006&text=Hello%20Wajahat!%20I%20hope%20you%20are%20doing%20well', description: 'Message on WhatsApp' },
    ],
  },
];

export function LinksHub() {
  return (
    <section id="links" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[var(--neon-purple)]/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass border border-accent/20">
              <Link2 className="w-4 h-4 text-accent" />
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider">Links</h2>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              All My Links
            </h3>

            <p className="text-foreground/60 leading-relaxed max-w-2xl mx-auto text-lg">
              Connect with me across all platforms. Find my portfolio, projects, articles, and social profiles.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allLinks.map((section, sectionIndex) => (
            <ScrollAnimation key={section.category} direction="up" delay={sectionIndex * 0.1}>
              <div className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1.5 h-7 rounded-full bg-gradient-to-b ${section.gradient}`} />
                  <h4 className="text-lg font-semibold text-foreground">
                    {section.category}
                  </h4>
                </div>

                <div className="space-y-3">
                  {section.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="follow"
                      title={`Wajahat Ali Mir on ${link.name}`}
                      aria-label={`Wajahat Ali Mir on ${link.name}`}
                      className="group relative block p-5 rounded-xl glass border border-border/50 hover:border-accent/40 transition-all duration-500 card-hover"
                    >
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      <div className="flex items-start justify-between gap-4 relative">
                        <div className="flex-1">
                          <h5 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                            {link.name}
                          </h5>
                          <p className="text-sm text-foreground/50 group-hover:text-foreground/70 transition-colors">
                            {link.description}
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                          <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="up" delay={0.4}>
          <div className="mt-16 p-8 sm:p-10 rounded-2xl glass border border-border/50 text-center">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              Can't find what you're looking for?
            </h4>
            <p className="text-foreground/60 mb-6">
              Feel free to reach out directly via email or connect through any of the platforms above.
            </p>
            <a
              href="mailto:mrwajahatalimir@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-[var(--neon-cyan)] text-accent-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-105"
            >
              <span>Send me an Email</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
