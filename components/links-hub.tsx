'use client';

import { ExternalLink } from 'lucide-react';

const allLinks = [
  {
    category: 'Portfolio',
    links: [
      { name: 'Main Portfolio', href: 'https://www.mrwajahatalimir.com', description: 'Personal portfolio website' },
      { name: 'GitHub Portfolio', href: 'https://wajahatalimirpro.github.io', description: 'GitHub hosted portfolio' },
    ],
  },
  {
    category: 'Professional',
    links: [
      { name: 'GitHub', href: 'https://github.com/WajahatAliMirPro', description: 'Code repositories and projects' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mirtech', description: 'Professional profile' },
      { name: 'About.me', href: 'https://about.me/wajahatalimir', description: 'Professional bio' },
    ],
  },
  {
    category: 'Content & Writing',
    links: [
      { name: 'Medium Blog', href: 'https://mrwajahatalimir.medium.com', description: 'Technical articles and insights' },
      { name: 'Blogger', href: 'https://mrwajahatalimir.blogspot.com', description: 'Blog posts and tutorials' },
      { name: 'Twitter/X', href: 'https://x.com/mrwajahatalimir', description: 'Latest updates and thoughts' },
    ],
  },
  {
    category: 'Social & Community',
    links: [
      { name: 'Pinterest', href: 'https://www.pinterest.com/mrwajahatalimir', description: 'Design inspiration and ideas' },
      { name: 'Linktree', href: 'https://linktr.ee/mrwajahatalimir', description: 'All links in one place' },
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
        <div className="grid md:grid-cols-2 gap-12">
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
                    rel="noopener noreferrer"
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
