'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="section bg-[#0D0E35]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="mb-16 text-center"
        >
          <h2 className="mb-4">Experience</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            My professional journey in AI, automation, and web development.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7F00FF] to-[#3700B3] transform md:translate-x-px" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 ${
                index % 2 === 0 ? 'left-0 md:right-0 md:translate-x-1/2' : 'left-0 md:left-0 md:-translate-x-1/2'
              } w-5 h-5 rounded-full bg-[#7F00FF] border-4 border-[#0D0E35] z-10 md:translate-y-1`} />

              {/* Content card */}
              <div className="ml-8 md:ml-0 p-6 bg-[#0B0C2A] rounded-lg shadow-lg hover:shadow-[#7F00FF]/20 transition-all duration-300">
                <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                <h4 className="text-[#7F00FF] font-medium mb-3">{experience.company}</h4>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{experience.startDate} - {experience.endDate}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{experience.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-300">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
