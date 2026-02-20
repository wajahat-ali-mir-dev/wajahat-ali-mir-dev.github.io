import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface PageLink {
  href: string;
  label: string;
  description: string;
  emoji: string;
}

const ALL_LINKS: PageLink[] = [
  { href: '/about/',         label: 'About Me',        description: 'Learn my story, background and values',          emoji: '👤' },
  { href: '/skills/',        label: 'Skills',           description: 'Tech stack, expertise & tools I use daily',      emoji: '⚡' },
  { href: '/projects/',      label: 'Projects',         description: 'Full portfolio of real-world builds',            emoji: '🚀' },
  { href: '/blog/',          label: 'Blog',             description: 'Tutorials and in-depth technical articles',      emoji: '📝' },
  { href: '/gallery/',       label: 'Gallery',          description: 'Photos, branding & visual design work',          emoji: '🎨' },
  { href: '/testimonials/',  label: 'Testimonials',     description: 'Real feedback from clients & collaborators',     emoji: '⭐' },
  { href: '/links/',         label: 'Connect',          description: 'All social media and external profiles',         emoji: '🔗' },
  { href: '/contact/',       label: 'Contact',          description: 'Start a project or send a message',              emoji: '✉️' },
];

interface InternalLinksProps {
  /** Exclude the current page href so we don't link to ourselves */
  exclude?: string;
  /** How many links to show. Defaults to 5 */
  count?: number;
  heading?: string;
  className?: string;
}

export function InternalLinks({
  exclude,
  count = 5,
  heading = 'Explore More',
  className = '',
}: InternalLinksProps) {
  const links = ALL_LINKS.filter((l) => l.href !== exclude).slice(0, count);

  return (
    <nav aria-label="Internal page links" className={`mt-16 pt-12 border-t border-border/50 ${className}`}>
      <h3 className="text-xl font-bold text-foreground mb-6">{heading}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex flex-col gap-2 p-4 rounded-xl border border-border/50 hover:border-accent/50 bg-card/50 hover:bg-accent/5 transition-all duration-300"
          >
            <span className="text-2xl">{link.emoji}</span>
            <span className="font-semibold text-foreground group-hover:text-accent transition-colors flex items-center gap-1">
              {link.label}
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </span>
            <span className="text-xs text-foreground/50 leading-snug">{link.description}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
