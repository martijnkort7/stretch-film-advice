'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, motion, useMotionValue, useTransform, animate } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 1.5,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <motion.span ref={ref} className="font-serif text-5xl tracking-tight md:text-7xl">
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  );
}
