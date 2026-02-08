'use client';

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { TypewriterEffect } from './ui/typewriter-effect';
import { ScrollAnimation } from './ui/scroll-animation';

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
    description:
      'Production-ready cross-platform app built with React Native, Redux, and REST APIs that supports offline features, secure data sync, and modular UI components. Demonstrates modern mobile architecture and performance optimization.',
    tags: ['React Native', 'Redux', 'Firebase', 'iOS', 'Android'],
    github: 'https://github.com/WajahatAliMirPro/fittrack',
    link: 'https://example.com/fittrack',
    image: '/project-1.jpg',
    featured: true,
  },
  {
    id: '2',
    title: 'Next.js Web Dashboard',
    description:
      'Responsive dashboard using Next.js and Tailwind CSS with optimized routing, SEO-enabled pages, dynamic data fetching, and user-centric design. Built with performance and accessibility as core principles.',
    tags: ['Next.js', 'TypeScript', 'API Integration', 'SEO Optimized'],
    github: 'https://github.com/WajahatAliMirPro/ecommerce',
    link: 'https://example.com/ecommerce',
    image: '/project-2.jpg',
    featured: true,
  },
  {
    id: '3',
    title: 'Offline-First Note App',
    description:
      'Production notes application with offline support, structured state management, automatic sync with cloud backup. Features reusable UI modules and demonstrates best practices in data persistence and real-world reliability.',
    tags: ['React Native', 'Offline First', 'Realm Database', 'TypeScript'],
    github: 'https://github.com/WajahatAliMirPro/notes-app',
    image: '/project-3.jpg',
    featured: true,
  },
  {
    id: '4',
    title: 'E-Commerce Platform',
    description:
      'Full-featured mobile e-commerce solution with product catalog, cart management, checkout flow, and payment integration.',
    tags: ['React Native', 'TypeScript', 'API Integration', 'Payment Systems'],
    github: 'https://github.com/WajahatAliMirPro/ecommerce',
    link: 'https://example.com/ecommerce',
    image: '/project-2.jpg',
    featured: true,
  },
  {
    id: '5',
    title: 'Offline-First Note App',
    description:
      'Notes application with offline capabilities, automatic sync, rich text editing, and cloud backup functionality.',
    tags: ['React Native', 'Offline First', 'Realm Database', 'AsyncStorage'],
    github: 'https://github.com/WajahatAliMirPro/notes-app',
    image: '/project-3.jpg',
    featured: true,
  },
  {
    id: '6',
    title: 'Weather Mobile App',
    description:
      'Real-time weather application with location-based forecasts, intuitive UI, and historical weather data. Built to demonstrate API integration best practices and responsive mobile design.',
    tags: ['React Native', 'REST APIs', 'UI/UX Design'],
    github: 'https://github.com/WajahatAliMirPro/weather',
    image: '/project-4.jpg',
  },
  {
    id: '7',
    title: 'Real-Time Chat Platform',
    description:
      'Full-featured messaging app with user authentication, instant notifications, media sharing, and persistent message storage. Showcases Firebase integration and real-time data handling.',
    tags: ['React Native', 'Firebase', 'Real-time Database'],
    github: 'https://github.com/WajahatAliMirPro/chat-app',
    image: '/project-5.jpg',
  },
  {
    id: '8',
    title: 'API-Driven Blog CMS',
    description:
      'Content management system with markdown support, full-text search, and optimized content delivery. Deployed on Vercel with clean architecture and production-ready code structure.',
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollAnimation direction="left">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
               <TypewriterEffect text="My Work" />
            </h2>
          </div>

          <h3 className="text-4xl font-bold text-foreground mb-6 leading-tight">
             <TypewriterEffect text="Featured Projects" delay={0.5} />
          </h3>

          <p className="text-foreground/70 max-w-2xl mb-8">
            A curated selection of production-ready projects demonstrating expertise in React Native mobile development, Next.js web applications, API integration, performance optimization, and scalable architecture.
          </p>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedTag === null
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-secondary/30 text-foreground hover:bg-secondary/50 border border-border'
              }`}
            >
              All Projects
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() =>
                  setSelectedTag(selectedTag === tag ? null : tag)
                }
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary/30 text-foreground hover:bg-secondary/50 border border-border'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        </ScrollAnimation>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollAnimation key={project.id} direction="up" delay={index * 0.1}>
            <div
              className={`group rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gradient-to-br from-accent/20 to-secondary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 z-10" />
                
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  title={`Wajahat Ali Mir Project - ${project.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/20">
                     <span className="text-accent font-medium text-sm">View Details</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-background">
                <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>

                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-secondary/30 text-accent border border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="follow"
                    title={`Code for ${project.title} by Wajahat Ali Mir`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary/30 hover:bg-accent/20 text-foreground hover:text-accent rounded-lg transition-colors text-sm font-medium group/link"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="follow"
                      title={`Live Demo of ${project.title} by Wajahat Ali Mir`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg transition-colors text-sm font-medium group/link"
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

        {/* CTA */}
        <ScrollAnimation direction="up" delay={0.2}>
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/wajahat-ali-mir-dev"
            target="_blank"
            rel="follow"
            title="Visit Wajahat Ali Mir's GitHub Profile"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold shadow-lg hover:shadow-accent/30"
          >
            <span>Visit GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
