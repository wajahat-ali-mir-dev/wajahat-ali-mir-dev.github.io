'use client';

import { memo, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
}

const getVariants = (direction: 'left' | 'right' | 'up' | 'down', duration: number, delay: number) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
    y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: duration,
      delay: delay + 0.5,
      ease: 'easeOut' as const,
    },
  },
});

export const ScrollAnimation = memo(function ScrollAnimation({
  children,
  className,
  delay = 0,
  direction = 'left',
  duration = 0.8,
}: ScrollAnimationProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={getVariants(direction, duration, delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
});
