'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: 'JavaScript', icon: '/skills/javascript.svg' },
  { name: 'TypeScript', icon: '/skills/typescript.svg' },
  { name: 'React', icon: '/skills/react.svg' },
  { name: 'Next.js', icon: '/skills/nextjs.svg' },
  { name: 'Node.js', icon: '/skills/nodejs.svg' },
  { name: 'Python', icon: '/skills/python.svg' },
  { name: 'TensorFlow', icon: '/skills/tensorflow.svg' },
  { name: 'AWS', icon: '/skills/aws.svg' },
  { name: 'Docker', icon: '/skills/docker.svg' },
  { name: 'Tailwind CSS', icon: '/skills/tailwind.svg' },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="section bg-[#0B0C2A]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="mb-16 text-center"
        >
          <h2 className="mb-4">About Me</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Get to know more about my background, skills, and passion for AI and web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7F00FF]/30 to-transparent z-10" />
              <Image
                src="/profile.jpg"
                alt="Ujjaval Bhardwaj"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-5 -left-5 w-32 h-32 border-2 border-[#7F00FF] rounded-lg z-0" />
            <div className="absolute -top-5 -right-5 w-32 h-32 border-2 border-[#3700B3] rounded-lg z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Ujjaval Bhardwaj</h3>
            <h4 className="text-xl text-[#7F00FF] mb-6">AI Engineer & Web Developer</h4>
            
            <div className="space-y-4 text-gray-300 mb-8">
              <p>
                I'm a passionate AI Engineer and Web Developer with expertise in building innovative solutions that leverage the power of artificial intelligence and modern web technologies.
              </p>
              <p>
                With a strong background in prompt engineering and automation, I create intelligent systems that solve complex problems and enhance user experiences.
              </p>
              <p>
                My mission is to bridge the gap between cutting-edge AI capabilities and practical applications that deliver real value to businesses and users.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Technical Skills</h4>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap gap-3"
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="px-4 py-2 bg-[#0D0E35] rounded-full flex items-center gap-2 hover:bg-[#7F00FF]/20 transition-colors"
                  >
                    <div className="w-5 h-5 relative">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
