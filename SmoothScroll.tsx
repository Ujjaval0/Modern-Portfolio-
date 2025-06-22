'use client';

import { ReactNode, useEffect } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Add smooth scrolling behavior to the document
    const html = document.documentElement;
    
    // Save the original scroll behavior
    const originalScrollBehavior = html.style.scrollBehavior;
    
    // Set smooth scroll behavior
    html.style.scrollBehavior = 'smooth';
    
    // Handle anchor links with smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.href.includes(window.location.pathname)) {
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          // Scroll to the target element with smooth behavior
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Update URL without redirecting
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    // Add event listener for anchor clicks
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      // Clean up
      html.style.scrollBehavior = originalScrollBehavior;
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return <>{children}</>;
}
