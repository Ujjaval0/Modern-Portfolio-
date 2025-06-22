'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-[#0B0C2A]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <Link href="#home" className="text-xl font-bold uppercase tracking-wider">
              Ujjaval Bhardwaj
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400 text-sm">
              Made with <span className="text-blue-500">💙</span> by Ujjaval Bhardwaj | {currentYear}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
