'use client';

import React from "react"

import { useState } from 'react';
import { Mail, Loader2, Check, AlertCircle } from 'lucide-react';

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

    // Basic validation
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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In production, you would send the form data to a backend service
      console.log('Form submitted:', formData);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
              Contact
            </h2>
            <div className="w-1 h-8 bg-accent rounded-full" />
          </div>

          <h3 className="text-4xl font-bold text-foreground mb-4 leading-tight">
            Let's Work Together
          </h3>

          <p className="text-foreground/70 leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Feel free to reach out using the contact form below or through any of my 
            social channels.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-colors">
            <Mail className="w-6 h-6 text-accent mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Email</h4>
            <a
              href="mailto:mrwajahatalimir@gmail.com"
              className="text-accent hover:underline text-sm"
            >
              mrwajahatalimir@gmail.com
            </a>
          </div>

          <div className="p-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-colors">
            <svg
              className="w-6 h-6 text-accent mb-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
              <path d="M7 10h10v2H7z" />
            </svg>
            <h4 className="font-semibold text-foreground mb-2">Based In</h4>
            <p className="text-foreground/70 text-sm">Available for remote projects worldwide</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 rounded-lg border border-border bg-background/50 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent outline-none transition-colors text-foreground placeholder:text-foreground/40"
                disabled={status === 'loading'}
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent outline-none transition-colors text-foreground placeholder:text-foreground/40"
                disabled={status === 'loading'}
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent outline-none transition-colors text-foreground placeholder:text-foreground/40 resize-none"
                disabled={status === 'loading'}
              />
            </div>

            {/* Status Messages */}
            {status === 'error' && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-600">{errorMessage}</p>
              </div>
            )}

            {status === 'success' && (
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-600">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 disabled:bg-accent/50 disabled:cursor-not-allowed transition-colors font-semibold flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : status === 'success' ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Sent Successfully</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </form>

          {/* Alternative Contact */}
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-foreground/70 text-sm mb-4">
              Or reach out directly via email
            </p>
            <a
              href="mailto:mrwajahatalimir@gmail.com"
              className="block text-center px-6 py-2 border border-border rounded-lg hover:border-accent/50 hover:bg-secondary/20 transition-colors text-accent font-medium"
            >
              mrwajahatalimir@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
