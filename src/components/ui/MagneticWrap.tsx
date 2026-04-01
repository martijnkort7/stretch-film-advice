'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';

interface MagneticWrapProps {
  children: React.ReactNode;
  /** Pixel radius within which the magnet activates */
  distance?: number;
  /** 0–1 pull strength (0 = none, 1 = locks to cursor) */
  strength?: number;
  className?: string;
}

export function MagneticWrap({
  children,
  distance = 120,
  strength = 0.3,
  className,
}: MagneticWrapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 22 });
  const springY = useSpring(y, { stiffness: 180, damping: 22 });

  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Distance from the edge of the element, not its center
      const edgeX = Math.max(0, Math.abs(deltaX) - rect.width / 2);
      const edgeY = Math.max(0, Math.abs(deltaY) - rect.height / 2);
      const edgeDist = Math.sqrt(edgeX ** 2 + edgeY ** 2);

      if (edgeDist < distance) {
        const factor = (1 - edgeDist / distance) * strength;
        x.set(deltaX * factor);
        y.set(deltaY * factor);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, distance, strength, prefersReduced]);

  if (prefersReduced) {
    return <div className={cn('inline-block', className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className={cn('inline-block', className)}
    >
      {children}
    </motion.div>
  );
}
