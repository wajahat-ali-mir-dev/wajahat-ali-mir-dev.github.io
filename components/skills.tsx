'use client';

import { TypewriterEffect } from './ui/typewriter-effect';
import { ScrollAnimation } from './ui/scroll-animation';

const skillCategories = [
  {
    name: 'Mobile Development',
    skills: ['React Native', 'iOS', 'Android', 'React Navigation'],
  },
  {
    name: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Java', 'Swift'],
  },
  {
    name: 'State Management',
    skills: ['Redux', 'Context API', 'Redux Thunk', 'Redux Saga'],
  },
  {
    name: 'API & Backend',
    skills: ['RESTful APIs', 'GraphQL', 'Firebase', 'Node.js'],
  },
  {
    name: 'UI/UX',
    skills: ['Responsive Design', 'Accessibility', 'Material Design', 'Human-Centered Design'],
  },
  {
    name: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'Agile', 'JIRA', 'Testing'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollAnimation direction="left">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
              <TypewriterEffect text="Technical Skills" />
            </h2>
          </div>

          <h3 className="text-4xl font-bold text-foreground mb-4 leading-tight">
            <TypewriterEffect text="Technologies & Expertise" delay={0.5} />
          </h3>

          <p className="text-foreground/70 max-w-2xl">
            I've spent years mastering these tools and technologies to deliver high-quality solutions.
          </p>
        </div>
        </ScrollAnimation>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={category.name} direction="up" delay={index * 0.1}>
            <div
              className="p-6 rounded-lg border border-border hover:border-accent/50 bg-background/50 backdrop-blur-sm hover:bg-secondary/20 transition-all duration-300 group"
            >
              <h4 className="font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                {category.name}
              </h4>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Additional Info */}
        <ScrollAnimation direction="up" delay={0.4}>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-border bg-gradient-to-br from-accent/10 to-transparent">
            <h4 className="font-semibold text-foreground mb-2">Performance</h4>
            <p className="text-sm text-foreground/70">
              Expertise in app optimization, memory management, and runtime performance improvements.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-gradient-to-br from-accent/10 to-transparent">
            <h4 className="font-semibold text-foreground mb-2">Offline First</h4>
            <p className="text-sm text-foreground/70">
              Building robust offline-capable applications with data sync and persistence.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-gradient-to-br from-accent/10 to-transparent">
            <h4 className="font-semibold text-foreground mb-2">Testing</h4>
            <p className="text-sm text-foreground/70">
              Comprehensive testing strategies including unit, integration, and end-to-end tests.
            </p>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
