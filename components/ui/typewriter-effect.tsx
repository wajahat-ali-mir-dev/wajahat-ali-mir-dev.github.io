'use client';

import { memo, useEffect, useRef, useState } from 'react';

interface TypewriterEffectProps {
  text: string | string[];
  className?: string;
  speed?: number;
  delay?: number;
}

export const TypewriterEffect = memo(function TypewriterEffect({
  text,
  className,
  speed = 0.04,
  delay = 0,
}: TypewriterEffectProps) {
  const fullText = Array.isArray(text) ? text.join('') : text;

  // SSR / no-JS fallback: show full text immediately.
  // The animation will kick in after hydration on the client.
  const [displayText, setDisplayText] = useState(fullText);
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Use native IntersectionObserver — avoids framer-motion dependency
    // and works on all static-export pages including GH Pages.
    if (!ref.current || hasAnimated.current) return;

    // Reduced motion: skip animation entirely, keep full text visible
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          setDisplayText('');
          setIsTyping(true);

          let i = 0;
          const startTimeout = setTimeout(() => {
            const typeInterval = setInterval(() => {
              i++;
              setDisplayText(fullText.slice(0, i));
              if (i >= fullText.length) {
                clearInterval(typeInterval);
                setIsTyping(false);
              }
            }, speed * 1000);
          }, delay * 1000);

          return () => clearTimeout(startTimeout);
        }
      },
      { threshold: 0.1, rootMargin: '-20px' }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [fullText, speed, delay]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      {isTyping && (
        <span
          className="inline-block w-[2px] h-[1em] bg-current ml-0.5 align-middle animate-pulse"
          aria-hidden="true"
        />
      )}
    </span>
  );
});
