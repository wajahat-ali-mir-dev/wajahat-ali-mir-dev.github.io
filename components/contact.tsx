'use client';

import React, { useState } from 'react';
import { Mail, Loader2, Check, AlertCircle, MapPin, Send, MessageCircle } from 'lucide-react';
import { TypewriterEffect } from './ui/typewriter-effect';
import { ScrollAnimation } from './ui/scroll-animation';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Opens the user's default mail client with pre-filled content.
      // This works on GitHub Pages without any backend.
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:mrwajahatalimir@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setErrorMessage('Could not open email client. Please email mrwajahatalimir@gmail.com directly.');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--neon-purple)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        <ScrollAnimation direction="left">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass border border-accent/20">
              <MessageCircle className="w-4 h-4 text-accent" />
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
                <TypewriterEffect text="Contact" />
              </h2>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              <TypewriterEffect text="Let's Work Together" delay={0.5} />
            </h3>

            <p className="text-foreground/60 leading-relaxed text-lg">
              Have a project in mind or just want to chat? I&apos;d love to hear from you.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="group p-6 rounded-2xl glass border border-border/50 hover:border-accent/40 transition-all duration-500 card-hover h-full">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-[var(--neon-cyan)]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-lg">Email</h4>
              <a
                href="mailto:mrwajahatalimir@gmail.com"
                className="text-accent hover:underline text-sm"
              >
                mrwajahatalimir@gmail.com
              </a>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <div className="group p-6 rounded-2xl glass border border-border/50 hover:border-accent/40 transition-all duration-500 card-hover h-full">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--neon-purple)]/20 to-[var(--neon-pink)]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-lg">Based In</h4>
              <p className="text-foreground/60 text-sm">Available for remote projects worldwide</p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation direction="up" delay={0.3}>
          <div className="p-8 sm:p-10 rounded-2xl glass border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border focus:border-accent outline-none transition-all duration-300 text-foreground placeholder:text-foreground/30 focus:shadow-lg focus:shadow-accent/10"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border focus:border-accent outline-none transition-all duration-300 text-foreground placeholder:text-foreground/30 focus:shadow-lg focus:shadow-accent/10"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border focus:border-accent outline-none transition-all duration-300 text-foreground placeholder:text-foreground/30 resize-none focus:shadow-lg focus:shadow-accent/10"
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </div>
              )}

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-emerald-500">
                    Your email client should open with the message pre-filled. If not, email me directly at{' '}
                    <a href="mailto:mrwajahatalimir@gmail.com" className="underline">
                      mrwajahatalimir@gmail.com
                    </a>
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-[var(--neon-cyan)] text-accent-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Opening email client...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Email Client Opened</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-border/50 text-center">
              <p className="text-foreground/60 text-sm mb-4">
                Or reach out directly via email
              </p>
              <a
                href="mailto:mrwajahatalimir@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-border hover:border-accent/50 transition-all duration-300 text-accent font-medium"
              >
                <Mail className="w-4 h-4" />
                <span>mrwajahatalimir@gmail.com</span>
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
