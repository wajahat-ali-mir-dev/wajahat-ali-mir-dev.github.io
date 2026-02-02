'use client';

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

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
    title: 'FitTrack Mobile App',
    description:
      'Cross-platform fitness tracking application with real-time workout monitoring, progress analytics, and social features.',
    tags: ['React Native', 'Redux', 'Firebase', 'iOS', 'Android'],
    github: 'https://github.com/WajahatAliMirPro/fittrack',
    link: 'https://example.com/fittrack',
    image: '/project-1.jpg',
    featured: true,
  },
  {
    id: '2',
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
    id: '3',
    title: 'Offline-First Note App',
    description:
      'Notes application with offline capabilities, automatic sync, rich text editing, and cloud backup functionality.',
    tags: ['React Native', 'Offline First', 'Realm Database', 'AsyncStorage'],
    github: 'https://github.com/WajahatAliMirPro/notes-app',
    image: '/project-3.jpg',
    featured: true,
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description:
      'Real-time weather application with location-based forecasts, beautiful UI, and historical weather data.',
    tags: ['React Native', 'APIs', 'UI/UX Design'],
    github: 'https://github.com/WajahatAliMirPro/weather',
    image: '/project-4.jpg',
  },
  {
    id: '5',
    title: 'Chat Application',
    description:
      'Real-time messaging app with user authentication, notifications, media sharing, and message persistence.',
    tags: ['React Native', 'Firebase', 'Real-time Database'],
    github: 'https://github.com/WajahatAliMirPro/chat-app',
    image: '/project-5.jpg',
  },
  {
    id: '6',
    title: 'Blog Content Management',
    description:
      'CMS-driven blog platform with markdown support, search functionality, and optimized content delivery.',
    tags: ['React Native', 'TypeScript', 'APIs'],
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
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
              My Work
            </h2>
          </div>

          <h3 className="text-4xl font-bold text-foreground mb-6 leading-tight">
            Featured Projects
          </h3>

          <p className="text-foreground/70 max-w-2xl mb-8">
            Explore a selection of projects I've worked on, showcasing my expertise in mobile development, API integration, and user experience design.
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gradient-to-br from-accent/20 to-secondary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent/20 mb-2">
                      {project.title.split(' ')[0]}
                    </div>
                    <p className="text-accent/10 text-sm">
                      {project.featured ? 'Featured Project' : 'Project'}
                    </p>
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
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary/30 hover:bg-accent/20 text-foreground hover:text-accent rounded-lg transition-colors text-sm font-medium group/link"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg transition-colors text-sm font-medium group/link"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/WajahatAliMirPro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
          >
            <span>Visit GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
