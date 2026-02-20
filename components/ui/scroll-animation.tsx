'use client';

import { useReducedMotion } from 'framer-motion';
import { memo, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
}

const getVariants = (
  direction: 'left' | 'right' | 'up' | 'down',
  duration: number,
  delay: number,
  reduced: boolean
) => ({
  hidden: {
    opacity: reduced ? 1 : 0,
    x: reduced ? 0 : direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
    y: reduced ? 0 : direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: reduced ? 0 : duration,
      delay: reduced ? 0 : delay + 0.3,
      ease: 'easeOut' as const,
    },
  },
});

export const ScrollAnimation = memo(function ScrollAnimation({
  children,
  className,
  delay = 0,
  direction = 'left',
  duration = 0.5,
}: ScrollAnimationProps) {
  const reduced = useReducedMotion() ?? false;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      variants={getVariants(direction, duration, delay, reduced)}
      className={className}
    >
      {children}
    </motion.div>
  );
});
