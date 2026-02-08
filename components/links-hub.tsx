'use client';

import { ExternalLink } from 'lucide-react';

const allLinks = [
  {
    category: 'Portfolio & Main Sites',
    links: [
      { name: 'Main Portfolio', href: 'https://www.mrwajahatalimir.com', description: 'Personal portfolio website' },
      { name: 'GitHub Portfolio', href: 'https://wajahat-ali-mir-dev.github.io', description: 'GitHub hosted portfolio' },
    ],
  },
  {
    category: 'Development & Code',
    links: [
      { name: 'GitHub', href: 'https://github.com/wajahat-ali-mir-dev', description: 'Code repositories and projects' },
      { name: 'Dev.to', href: 'https://dev.to/wajahat_ali_mir_dev', description: 'Technical articles and community' },
      { name: 'Sketchfab', href: 'https://sketchfab.com/wajahat-ali-mir-dev', description: '3D models and creative work' },
    ],
  },
  {
    category: 'Professional & Social',
    links: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/wajahat-ali-mir-dev', description: 'Professional profile' },
      { name: 'About.me', href: 'https://about.me/wajahat-ali-mir-dev', description: 'Professional bio' },
      { name: 'link.me', href: 'https://link.me/mrwajahatalimir', description: 'Personal link profile' },
    ],
  },
  {
    category: 'Content & Writing',
    links: [
      { name: 'Substack', href: 'https://mrwajahatalimir.substack.com', description: 'Newsletter and articles' },
      { name: 'Blogger', href: 'https://wajahat-ali-mir-dev.blogspot.com', description: 'Blog posts and tutorials' },
      { name: 'Twitter/X', href: 'https://x.com/mrwajahatalimir', description: 'Latest updates and thoughts' },
    ],
  },
  {
    category: 'Creative & Multimedia',
    links: [
      { name: 'Pinterest', href: 'https://www.pinterest.com/mrwajahatalimir', description: 'Design inspiration and ideas' },
      { name: 'SoundCloud', href: 'https://soundcloud.com/wajahat-ali-mir-dev', description: 'Audio projects and mixes' },
    ],
  },
  {
    category: 'Direct Connect',
    links: [
      { name: 'Linktree', href: 'https://linktr.ee/wajahat_ali_mir_dev', description: 'All links in one place' },
      { name: 'Telegram', href: 'http://t.me/mrwajahatalimir', description: 'Chat on Telegram' },
      { name: 'WhatsApp', href: 'https://api.whatsapp.com/send/?phone=%2B923700882006&text=Hello%20Wajahat!%20I%20hope%20you%20are%20doing%20well', description: 'Message on WhatsApp' },
    ],
  },
];

export function LinksHub() {
  return (
    <section id="links" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
              Links
            </h2>
            <div className="w-1 h-8 bg-accent rounded-full" />
          </div>

          <h3 className="text-4xl font-bold text-foreground mb-4 leading-tight">
            All My Links
          </h3>

          <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Connect with me across all platforms. Find my portfolio, projects, articles, and social profiles.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allLinks.map((section) => (
            <div key={section.category}>
              <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-accent rounded-full" />
                {section.category}
              </h4>

              <div className="space-y-4">
                {section.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="follow"
                    className="group block p-4 rounded-lg border border-border bg-background/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h5 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {link.name}
                        </h5>
                        <p className="text-sm text-foreground/60 mt-1">
                          {link.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 p-8 rounded-lg border border-border bg-background/50 backdrop-blur-sm text-center">
          <h4 className="text-xl font-semibold text-foreground mb-3">
            Can't find what you're looking for?
          </h4>
          <p className="text-foreground/70 mb-6">
            Feel free to reach out directly via email or connect through any of the platforms above.
          </p>
          <a
            href="mailto:mrwajahatalimir@gmail.com"
            className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
          >
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
