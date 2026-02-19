'use client';

import { useState } from 'react';
import { ExternalLink, Github, Folder, Sparkles } from 'lucide-react';
import { TypewriterEffect } from './ui/typewriter-effect';
import { ScrollAnimation } from './ui/scroll-animation';
import NextImage from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  link?: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'SaaS Mobile App',
    description: 'Production-ready cross-platform app built with React Native, Redux, and REST APIs that supports offline features, secure data sync, and modular UI components.',
    tags: ['React Native', 'Redux', 'Firebase', 'iOS', 'Android'],
    github: 'https://github.com/WajahatAliMirPro/fittrack',
    link: 'https://example.com/fittrack',
    image: '/project-1.jpg',
    featured: true,
  },
  {
    id: '2',
    title: 'Next.js Web Dashboard',
    description: 'Responsive dashboard using Next.js and Tailwind CSS with optimized routing, SEO-enabled pages, and dynamic data fetching.',
    tags: ['Next.js', 'TypeScript', 'API Integration', 'SEO Optimized'],
    github: 'https://github.com/WajahatAliMirPro/ecommerce',
    link: 'https://example.com/ecommerce',
    image: '/project-2.jpg',
    featured: true,
  },
  {
    id: '3',
    title: 'Offline-First Note App',
    description: 'Production notes application with offline support, structured state management, and automatic cloud sync.',
    tags: ['React Native', 'Offline First', 'Realm Database', 'TypeScript'],
    github: 'https://github.com/WajahatAliMirPro/notes-app',
    image: '/project-3.jpg',
    featured: true,
  },
  {
    id: '4',
    title: 'E-Commerce Platform',
    description: 'Full-featured mobile e-commerce solution with product catalog, cart management, checkout flow, and payment integration.',
    tags: ['React Native', 'TypeScript', 'API Integration', 'Payment Systems'],
    github: 'https://github.com/WajahatAliMirPro/ecommerce',
    link: 'https://example.com/ecommerce',
    image: '/project-2.jpg',
    featured: true,
  },
  {
    id: '5',
    title: 'Weather Mobile App',
    description: 'Real-time weather application with location-based forecasts, intuitive UI, and historical weather data.',
    tags: ['React Native', 'REST APIs', 'UI/UX Design'],
    github: 'https://github.com/WajahatAliMirPro/weather',
    image: '/project-4.jpg',
  },
  {
    id: '6',
    title: 'Real-Time Chat Platform',
    description: 'Full-featured messaging app with user authentication, instant notifications, and media sharing.',
    tags: ['React Native', 'Firebase', 'Real-time Database'],
    github: 'https://github.com/WajahatAliMirPro/chat-app',
    image: '/project-5.jpg',
  },
  {
    id: '7',
    title: 'API-Driven Blog CMS',
    description: 'Content management system with markdown support, full-text search, and optimized content delivery.',
    tags: ['TypeScript', 'Next.js', 'APIs'],
    github: 'https://github.com/WajahatAliMirPro/blog-cms',
    image: '/project-6.jpg',
  },
];

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects =
    selectedTag === null
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--neon-purple)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <ScrollAnimation direction="left">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass border border-accent/20">
              <Folder className="w-4 h-4 text-accent" />
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
                <TypewriterEffect text="My Work" />
              </h2>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              <TypewriterEffect text="Featured Projects" delay={0.5} />
            </h3>

            <p className="text-foreground/60 max-w-2xl mb-10 text-lg">
              A curated selection of production-ready projects demonstrating expertise in React Native mobile development and Next.js web applications.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedTag === null
                    ? 'bg-gradient-to-r from-accent to-[var(--neon-cyan)] text-accent-foreground shadow-lg shadow-accent/20'
                    : 'glass border border-border hover:border-accent/50 text-foreground'
                }`}
              >
                All Projects
              </button>
              {allTags.slice(0, 8).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-gradient-to-r from-accent to-[var(--neon-cyan)] text-accent-foreground shadow-lg shadow-accent/20'
                      : 'glass border border-border hover:border-accent/50 text-foreground'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollAnimation key={project.id} direction="up" delay={index * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden border border-border/50 hover:border-accent/40 transition-all duration-500 card-hover bg-card h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-[var(--neon-purple)]/10 to-[var(--neon-cyan)]/20 opacity-50" />
                  
                  <NextImage 
                    src={project.image} 
                    alt={project.title}
                    title={`Wajahat Ali Mir Project - ${project.title}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                  {project.featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium text-accent border border-accent/30">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="px-5 py-2.5 rounded-xl glass border border-accent/30 text-accent font-medium text-sm">
                      View Project
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-foreground/60 text-sm mb-5 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-accent border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="follow"
                      title={`Code for ${project.title}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass border border-border hover:border-accent/50 text-foreground hover:text-accent transition-all duration-300 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="follow"
                        title={`Live Demo of ${project.title}`}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent to-[var(--neon-cyan)] text-accent-foreground hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 text-sm font-medium"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="up" delay={0.2}>
          <div className="mt-16 text-center">
            <p className="text-foreground/60 mb-6 text-lg">
              Interested in seeing more of my work?
            </p>
            <a
              href="https://github.com/wajahat-ali-mir-dev"
              target="_blank"
              rel="follow"
              title="Visit Wajahat Ali Mir's GitHub Profile"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-[var(--neon-cyan)] text-accent-foreground font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:scale-105"
            >
              <span>Visit GitHub</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
