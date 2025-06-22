'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollReveal from '@/components/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    // Mark component as mounted on client-side
    setIsMounted(true);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Prevent hydration mismatch by rendering a simple loading state on server
  // and only showing the full UI once mounted on client
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[rgb(11,12,42)] flex items-center justify-center">
        <div className="text-5xl font-bold">
          <span className="gradient-text">UJJAVAL</span>
        </div>
      </div>
    );
  }
  
  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div 
          key="loader"
          className="fixed inset-0 flex items-center justify-center bg-[rgb(11,12,42)] z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.2, 1],
              opacity: 1,
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-5xl font-bold"
          >
            <span className="gradient-text">UJJAVAL</span>
          </motion.div>
        </motion.div>
      ) : (
        <SmoothScroll>
          <AnimatedBackground color="rgba(127, 0, 255, 0.3)" particleCount={50} speed={1.5} />
          
          <motion.main 
            key="main"
            className="min-h-screen relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Header />
            <HeroSection />
            
            <ScrollReveal direction="up" delay={0.2}>
              <ProjectsSection />
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.3}>
              <ExperienceSection />
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.3}>
              <AboutSection />
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <ContactSection />
            </ScrollReveal>
            
            <Footer />
          </motion.main>
        </SmoothScroll>
      )}
    </AnimatePresence>
  );
}
