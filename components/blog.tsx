'use client';

import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

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
    excerpt:
      'A comprehensive guide to implementing Redux state management in React Native projects, including best practices and performance optimization techniques.',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    category: 'React Native',
    platform: 'medium',
    link: 'https://mrwajahatalimir.medium.com/redux-react-native',
  },
  {
    id: '2',
    title: 'Building Offline-First Mobile Apps',
    excerpt:
      'Learn how to architect mobile applications that work seamlessly offline with automatic data sync when connectivity is restored.',
    date: 'Dec 28, 2023',
    readTime: '10 min read',
    category: 'Architecture',
    platform: 'blog',
    link: 'https://mrwajahatalimir.blogspot.com/offline-first',
  },
  {
    id: '3',
    title: 'TypeScript Best Practices for Mobile Development',
    excerpt:
      'Exploring advanced TypeScript patterns and practices specifically tailored for React Native development and type safety.',
    date: 'Dec 10, 2023',
    readTime: '7 min read',
    category: 'TypeScript',
    platform: 'medium',
    link: 'https://mrwajahatalimir.medium.com/typescript-mobile',
  },
  {
    id: '4',
    title: 'Performance Optimization in React Native',
    excerpt:
      'Practical strategies and tools for identifying and eliminating performance bottlenecks in your React Native applications.',
    date: 'Nov 20, 2023',
    readTime: '9 min read',
    category: 'Performance',
    platform: 'blog',
    link: 'https://mrwajahatalimir.blogspot.com/performance-optimization',
  },
  {
    id: '5',
    title: 'API Integration Patterns in React Native',
    excerpt:
      'Deep dive into various approaches for integrating RESTful and GraphQL APIs in mobile applications with proper error handling.',
    date: 'Nov 5, 2023',
    readTime: '6 min read',
    category: 'APIs',
    platform: 'medium',
    link: 'https://mrwajahatalimir.medium.com/api-patterns',
  },
  {
    id: '6',
    title: 'Building Accessible Mobile Applications',
    excerpt:
      'Guidelines and practical implementations for creating inclusive mobile experiences that work for all users.',
    date: 'Oct 18, 2023',
    readTime: '8 min read',
    category: 'Accessibility',
    platform: 'blogspot',
    link: 'https://mrwajahatalimir.blogspot.com/accessibility',
  },
];

const platformColors = {
  medium: 'bg-green-500/20 text-green-600 border-green-500/30',
  blog: 'bg-blue-500/20 text-blue-600 border-blue-500/30',
  blogspot: 'bg-orange-500/20 text-orange-600 border-orange-500/30',
};

export function Blog() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
              Blog
            </h2>
          </div>

          <h3 className="text-4xl font-bold text-foreground mb-4 leading-tight">
            Technical Writing
          </h3>

          <p className="text-foreground/70 max-w-2xl">
            I share my knowledge and experiences through articles on React Native, mobile development, and software engineering best practices.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12 p-8 rounded-lg border border-border bg-gradient-to-br from-accent/10 via-transparent to-transparent hover:border-accent/50 transition-colors">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-accent">
                  FEATURED ARTICLE
                </span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">
                  {blogPosts[0].date}
                </span>
              </div>

              <h4 className="text-2xl font-bold text-foreground mb-3">
                {blogPosts[0].title}
              </h4>

              <p className="text-foreground/70 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {blogPosts[0].readTime}
                </span>
                <a
                  href={blogPosts[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm font-semibold group"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Articles */}
        <h4 className="text-lg font-semibold text-foreground mb-6">
          Latest Articles
        </h4>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.slice(1).map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg border border-border hover:border-accent/50 bg-background/50 backdrop-blur-sm hover:bg-secondary/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${platformColors[post.platform]}`}
                >
                  {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                </span>
                <span className="text-xs text-muted-foreground">
                  {post.date}
                </span>
              </div>

              <h5 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight">
                {post.title}
              </h5>

              <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">
                  {post.readTime}
                </span>
                <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        {/* Links Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <h4 className="text-lg font-semibold text-foreground mb-6">
            Find Me On
          </h4>

          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="https://mrwajahatalimir.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-border hover:border-accent/50 bg-background/50 hover:bg-secondary/20 transition-all group text-center"
            >
              <h5 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                Medium
              </h5>
              <p className="text-sm text-foreground/70">
                Latest tech articles and tutorials
              </p>
            </a>

            <a
              href="https://mrwajahatalimir.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-border hover:border-accent/50 bg-background/50 hover:bg-secondary/20 transition-all group text-center"
            >
              <h5 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                Engineering Blog
              </h5>
              <p className="text-sm text-foreground/70">
                In-depth technical deep dives
              </p>
            </a>

            <a
              href="https://mrwajahatalimir.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-border hover:border-accent/50 bg-background/50 hover:bg-secondary/20 transition-all group text-center"
            >
              <h5 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                All Articles
              </h5>
              <p className="text-sm text-foreground/70">
                Browse complete archive
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
