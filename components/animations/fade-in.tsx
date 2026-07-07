'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FadeInProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  y = 24,
  x = 0,
  once = true,
  className,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}