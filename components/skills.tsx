'use client';

import { TypewriterEffect } from './ui/typewriter-effect';
import { ScrollAnimation } from './ui/scroll-animation';
import { Smartphone, Code2, Database, Palette, Settings, Zap, Globe, Lock, Rocket, Users } from 'lucide-react';

const skillCategories = [
  {
    name: 'Mobile Development',
    icon: Smartphone,
    skills: ['React Native', 'iOS', 'Android', 'React Navigation'],
    gradient: 'from-accent to-[var(--neon-cyan)]',
  },
  {
    name: 'Programming Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Java', 'Swift'],
    gradient: 'from-[var(--neon-purple)] to-[var(--neon-pink)]',
  },
  {
    name: 'State Management',
    icon: Database,
    skills: ['Redux', 'Context API', 'Redux Thunk', 'Redux Saga'],
    gradient: 'from-[var(--neon-cyan)] to-[var(--neon-blue)]',
  },
  {
    name: 'API & Backend',
    icon: Globe,
    skills: ['RESTful APIs', 'GraphQL', 'Firebase', 'Node.js'],
    gradient: 'from-accent to-[var(--neon-purple)]',
  },
  {
    name: 'UI/UX',
    icon: Palette,
    skills: ['Responsive Design', 'Accessibility', 'Material Design', 'Human-Centered Design'],
    gradient: 'from-[var(--neon-pink)] to-[var(--neon-purple)]',
  },
  {
    name: 'Tools & Workflow',
    icon: Settings,
    skills: ['Git', 'GitHub', 'Agile', 'JIRA', 'Testing'],
    gradient: 'from-[var(--neon-blue)] to-[var(--neon-cyan)]',
  },
];

const additionalSkills = [
  { icon: Rocket, title: 'Performance', description: 'Expertise in app optimization, memory management, and runtime performance improvements.' },
  { icon: Lock, title: 'Offline First', description: 'Building robust offline-capable applications with data sync and persistence.' },
  { icon: Users, title: 'Testing', description: 'Comprehensive testing strategies including unit, integration, and end-to-end tests.' },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-(--neon-purple)/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <ScrollAnimation direction="left">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass border border-accent/20">
              <Zap className="w-4 h-4 text-accent" />
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
                <TypewriterEffect text="Technical Skills" />
              </h2>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              <TypewriterEffect text="Technologies & Expertise" delay={0.5} />
            </h3>

            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              I've spent years mastering these tools and technologies to deliver high-quality solutions.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={category.name} direction="up" delay={index * 0.1}>
              <div className="group relative p-6 rounded-2xl glass border border-border/50 hover:border-accent/40 transition-all duration-500 card-hover h-full">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                     style={{ background: `linear-gradient(135deg, var(--accent), var(--neon-purple))` }} />
                
                <div className="flex items-center gap-4 mb-5 relative">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${category.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground text-lg group-hover:text-accent transition-colors">
                    {category.name}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2 relative">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="tag-glow px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/50 text-accent border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="up" delay={0.4}>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="shimmer-border group relative p-8 rounded-2xl glass border border-border/50 hover:border-accent/40 transition-all duration-500 card-hover text-center">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-linear-to-br from-accent/20 to-(--neon-cyan)/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground text-lg mb-3 group-hover:text-accent transition-colors">{skill.title}</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
