'use client';

import { useState } from 'react';
import NextImage from 'next/image';
import { GalleryImage, galleryImages } from '@/lib/gallery-data';
import { ScrollAnimation } from './ui/scroll-animation';
import { TypewriterEffect } from './ui/typewriter-effect';
import { Image, Sparkles } from 'lucide-react';

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-(--neon-purple)/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass border border-accent/20">
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image className="w-4 h-4 text-accent" aria-hidden="true" />

              <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
                <TypewriterEffect text="Gallery" />
              </h2>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <TypewriterEffect text="Image Gallery" delay={0.3} />
            </h1>
            
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              A collection of moments, portraits, and branding assets showcasing my professional journey and travel adventures.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-linear-to-r from-accent to-(--neon-cyan) text-accent-foreground shadow-lg shadow-accent/20'
                    : 'glass border border-border hover:border-accent/50 text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.src} 
                className="break-inside-avoid relative group rounded-2xl overflow-hidden border border-border/50 hover:border-accent/40 bg-card transition-all duration-500 card-hover"
              >
                <div className="relative w-full overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-accent/10 via-transparent to-(--neon-purple)/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  <NextImage
                    src={image.src}
                    alt={image.alt}
                    title={image.title}
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-20">
                    <div className="glass rounded-xl p-4 border border-accent/20">
                      <h3 className="text-foreground font-bold text-lg mb-1">
                        {image.title}
                      </h3>
                      <p className="text-foreground/60 text-sm mb-3">
                        {image.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/20 text-accent text-xs rounded-full border border-accent/30">
                        <Sparkles className="w-3 h-3" />
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
