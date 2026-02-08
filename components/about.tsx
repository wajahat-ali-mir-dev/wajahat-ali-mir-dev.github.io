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
              Full-Stack Engineer & Mobile Specialist
            </h3>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I'm Wajahat Ali Mir, a software engineer specializing in full-stack web and mobile application development. I design and deploy products that are stable, scalable, and built for performance across platforms. With hands-on experience developing React Native mobile applications and React/Next.js web applications, I focus on creating seamless user experiences that feel native and intuitive.
              </p>

              <p>
                My passion lies in writing clean, maintainable code with emphasis on performance, stability, and user experience. Beyond code, I focus on clean architecture, performance tuning, and efficient data flows that stand up under real-world use. Every project is aligned with solid engineering principles and production readiness.
              </p>

              <p>
                I've had the privilege to collaborate with cross-functional teams, solving complex problems through practical problem-solving. Whether I'm crafting a new feature, optimizing performance, integrating APIs, or building offline-capable features, I approach each challenge with dedication and attention to detail.
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

          {/* Right side - Images and Features */}
          <div className="space-y-6">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-lg overflow-hidden border border-accent/30 hover:border-accent transition-all h-48">
                <img 
                  src="/wajahat-ali-mir-in-garden.png" 
                  alt="Wajahat Ali Mir is in garden " 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-accent/30 hover:border-accent transition-all h-48">
                <img 
                  src="/wajahat-ali-mir-in-deosai-national-park.jpg" 
                  alt="wajahat ali mir in deosai national park " 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Features */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-secondary/40 to-secondary/20 border border-accent/30 hover:border-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
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
                    React & React Native
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Expert in building cross-platform mobile apps and modern web applications with clean, scalable architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-secondary/40 to-secondary/20 border border-accent/30 hover:border-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
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
                    Performance & SEO
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Optimizing for speed, SEO, and user experience with modern web frameworks and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-secondary/40 to-secondary/20 border border-accent/30 hover:border-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
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
                    TypeScript & APIs
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Building type-safe applications with robust API integration and offline-first capabilities.
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
