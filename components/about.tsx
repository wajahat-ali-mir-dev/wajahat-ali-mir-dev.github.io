'use client';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-accent rounded-full" />
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
                About Me
              </h2>
            </div>

            <h3 className="text-4xl font-bold text-foreground mb-6 leading-tight">
              Crafting Reliable Mobile Experiences
            </h3>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I'm a Software Engineer with deep expertise in mobile application development, particularly with React Native. With years of experience building production-ready applications, I specialize in creating apps that are not just functional, but delightful to use.
              </p>

              <p>
                My passion lies in writing clean, maintainable code and focusing on performance, stability, and user experience. I believe in practical solutions over unnecessary complexity, always following modern React Native best practices and industry standards.
              </p>

              <p>
                I've had the privilege to collaborate with cross-functional teams, solving complex problems and continuously learning new technologies. Whether it's building offline-capable features, integrating APIs, or optimizing performance, I approach each project with dedication and attention to detail.
              </p>

              <p>
                Beyond coding, I enjoy photography, traveling, and exploring different cultures. These interests help me bring a unique perspective to design and user experience in my projects.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-accent mb-2">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent mb-2">20+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent mb-2">15+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-secondary/30 border border-border hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.5 1.5H3.75A2.25 2.25 0 0 0 1.5 3.75v12.5A2.25 2.25 0 0 0 3.75 18.5h12.5a2.25 2.25 0 0 0 2.25-2.25V9.5" />
                    <path d="M6.5 11l3 3 8.5-8.5" strokeWidth="2" stroke="currentColor" fill="none" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Clean Code
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Writing readable, maintainable code that other developers love to work with.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-secondary/30 border border-border hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm3-9H9V7h4v2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Performance Focus
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Optimizing every millisecond for a smooth, responsive user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-secondary/30 border border-border hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 7H7v6h6V7z" />
                    <path d="M18 8a2 2 0 0 0-2-2h-1V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Cross-Platform
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Building apps that work seamlessly on iOS and Android platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
