'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  distance = 50,
  once = true,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-10% 0px -10% 0px' });
  const controls = useAnimation();
  
  // Calculate initial and animate values based on direction
  const getInitialAndAnimate = () => {
    let initial: { opacity: number; y?: number; x?: number } = { opacity: 0 };
    
    switch (direction) {
      case 'up':
        initial = { ...initial, y: distance };
        break;
      case 'down':
        initial = { ...initial, y: -distance };
        break;
      case 'left':
        initial = { ...initial, x: distance };
        break;
      case 'right':
        initial = { ...initial, x: -distance };
        break;
      case 'none':
        initial = { ...initial };
        break;
    }
    
    return {
      initial,
      animate: { 
        opacity: 1, 
        y: 0, 
        x: 0, 
        transition: { 
          duration, 
          delay,
          ease: [0.25, 0.1, 0.25, 1.0] 
        } 
      }
    };
  };
  
  const { initial, animate } = getInitialAndAnimate();
  
  useEffect(() => {
    if (isInView) {
      controls.start(animate);
    } else if (!once) {
      controls.start(initial);
    }
  }, [isInView, controls, animate, initial, once]);
  
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
