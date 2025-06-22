'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{
    width: string;
    height: string;
    top: string;
    left: string;
    animation: string;
    opacity: number;
  }>>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Generate particles only on client-side
  useEffect(() => {
    setIsMounted(true);
    
    // Generate consistent particles
    const newParticles = [];
    for (let i = 0; i < 20; i++) {
      // Use a seed-based approach for consistency
      const seed = i / 20;
      newParticles.push({
        width: `${(seed * 8) + 2}px`,
        height: `${(seed * 8) + 2}px`,
        top: `${(i * 5) % 100}%`,
        left: `${(i * 7) % 100}%`,
        animation: `float ${(seed * 10) + 10}s linear infinite`,
        opacity: (seed * 0.5) + 0.2
      });
    }
    setParticles(newParticles);
  }, []);
  
  useEffect(() => {
    if (!isMounted) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}`);
      containerRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: `radial-gradient(
          circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%),
          rgba(127, 0, 255, 0.15),
          rgba(11, 12, 42, 0) 40%
        ), linear-gradient(to bottom, rgb(11, 12, 42), rgb(55, 0, 179))`
      }}
    >
      {/* Animated particles - only render on client side */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: particle.width,
                height: particle.height,
                top: particle.top,
                left: particle.left,
                animation: particle.animation,
                opacity: particle.opacity,
              }}
            />
          ))}
        </div>
      )}

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          exit={{ opacity: 1 }}
          className="max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 leading-tight"
          >
            <span className="block">HI, I'M UJJAVAL</span>
            <span className="block">BUILDING AI &</span>
            <span className="block gradient-text">AI SOLUTIONS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Creative Prompt Engineer & Web Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#projects" className="btn-primary">
              View My Work
            </Link>
            <Link href="#contact" className="btn-outline">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Add keyframes for floating animation
const styleTag = typeof document !== 'undefined' ? document.createElement('style') : null;
if (styleTag) {
  styleTag.textContent = `
    @keyframes float {
      0% { transform: translateY(0) translateX(0); }
      25% { transform: translateY(-20px) translateX(10px); }
      50% { transform: translateY(-10px) translateX(-10px); }
      75% { transform: translateY(-30px) translateX(5px); }
      100% { transform: translateY(0) translateX(0); }
    }
  `;
  document.head.appendChild(styleTag);
}
