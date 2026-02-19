'use client';

import { ExternalLink, BookOpen, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { TypewriterEffect } from './ui/typewriter-effect';
import { ScrollAnimation } from './ui/scroll-animation';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  platform: 'medium' | 'blog' | 'blogspot';
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Redux in React Native Applications',
    excerpt: 'A comprehensive guide to implementing Redux state management in React Native projects, including best practices and performance optimization techniques.',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    category: 'React Native',
    platform: 'medium',
    link: 'https://mrwajahatalimir.medium.com/redux-react-native',
  },
  {
    id: '2',
    title: 'Building Offline-First Mobile Apps',
    excerpt: 'Learn how to architect mobile applications that work seamlessly offline with automatic data sync when connectivity is restored.',
    date: 'Dec 28, 2023',
    readTime: '10 min read',
    category: 'Architecture',
    platform: 'blog',
    link: 'https://mrwajahatalimir.blogspot.com/offline-first',
  },
  {
    id: '3',
    title: 'TypeScript Best Practices for Mobile Development',
    excerpt: 'Exploring advanced TypeScript patterns and practices specifically tailored for React Native development and type safety.',
    date: 'Dec 10, 2023',
    readTime: '7 min read',
    category: 'TypeScript',
    platform: 'medium',
    link: 'https://mrwajahatalimir.medium.com/typescript-mobile',
  },
  {
    id: '4',
    title: 'Performance Optimization in React Native',
    excerpt: 'Practical strategies and tools for identifying and eliminating performance bottlenecks in your React Native applications.',
    date: 'Nov 20, 2023',
    readTime: '9 min read',
    category: 'Performance',
    platform: 'blog',
    link: 'https://mrwajahatalimir.blogspot.com/performance-optimization',
  },
  {
    id: '5',
    title: 'API Integration Patterns in React Native',
    excerpt: 'Deep dive into various approaches for integrating RESTful and GraphQL APIs in mobile applications with proper error handling.',
    date: 'Nov 5, 2023',
    readTime: '6 min read',
    category: 'APIs',
    platform: 'medium',
    link: 'https://mrwajahatalimir.medium.com/api-patterns',
  },
  {
    id: '6',
    title: 'Building Accessible Mobile Applications',
    excerpt: 'Guidelines and practical implementations for creating inclusive mobile experiences that work for all users.',
    date: 'Oct 18, 2023',
    readTime: '8 min read',
    category: 'Accessibility',
    platform: 'blogspot',
    link: 'https://mrwajahatalimir.blogspot.com/accessibility',
  },
];

const platformStyles = {
  medium: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  blog: 'bg-accent/20 text-accent border-accent/30',
  blogspot: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
};

const blogLinks = [
  { name: 'Medium', href: 'https://mrwajahatalimir.medium.com', description: 'Latest tech articles and tutorials' },
  { name: 'Engineering Blog', href: 'https://mrwajahatalimir.blogspot.com', description: 'In-depth technical deep dives' },
  { name: 'All Articles', href: 'https://mrwajahatalimir.medium.com', description: 'Browse complete archive' },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--neon-purple)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <ScrollAnimation direction="left">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass border border-accent/20">
              <BookOpen className="w-4 h-4 text-accent" />
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
                <TypewriterEffect text="Blog" />
              </h2>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              <TypewriterEffect text="Technical Writing" delay={0.5} />
            </h3>

            <p className="text-foreground/60 max-w-2xl text-lg">
              I share my knowledge and experiences through articles on React Native, mobile development, and software engineering best practices.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up">
          <div className="mb-12 p-8 rounded-2xl glass border border-accent/30 hover:border-accent/50 transition-all duration-500 card-hover">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-accent to-[var(--neon-cyan)] text-accent-foreground text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    FEATURED ARTICLE
                  </span>
                  <span className="text-sm text-muted-foreground">{blogPosts[0].date}</span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {blogPosts[0].title}
                </h4>

                <p className="text-foreground/60 mb-6 leading-relaxed text-lg">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-sm text-muted-foreground">{blogPosts[0].readTime}</span>
                  <a
                    href={blogPosts[0].link}
                    target="_blank"
                    rel="follow"
                    title={`Read "${blogPosts[0].title}"`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-[var(--neon-cyan)] text-accent-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <h4 className="text-xl font-semibold text-foreground mb-8">Latest Articles</h4>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post, index) => (
            <ScrollAnimation key={post.id} direction="up" delay={index * 0.1}>
              <a
                href={post.link}
                target="_blank"
                rel="follow"
                title={`Read "${post.title}"`}
                className="group block p-6 rounded-2xl glass border border-border/50 hover:border-accent/40 transition-all duration-500 card-hover h-full"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${platformStyles[post.platform]}`}>
                    {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>

                <h5 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h5>

                <p className="text-foreground/60 text-sm mb-5 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="up" delay={0.3}>
          <div className="mt-16 pt-12 border-t border-border/50">
            <h4 className="text-xl font-semibold text-foreground mb-8">Find Me On</h4>

            <div className="grid sm:grid-cols-3 gap-4">
              {blogLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="follow"
                  title={`Wajahat Ali Mir on ${link.name}`}
                  className="group p-6 rounded-2xl glass border border-border/50 hover:border-accent/40 transition-all duration-500 card-hover text-center"
                >
                  <h5 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors text-lg">
                    {link.name}
                  </h5>
                  <p className="text-sm text-foreground/60">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
