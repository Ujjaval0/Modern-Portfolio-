'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Linkedin, Github, Mail, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    try {
      setFormStatus('sending');
      
      // Replace these with your actual EmailJS service, template, and user IDs
      // await emailjs.sendForm(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formRef.current,
      //   'YOUR_USER_ID'
      // );
      
      // Simulating API call for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus('success');
      formRef.current.reset();
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/ujjavalbhardwaj' },
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/ujjavalbhardwaj' },
    { name: 'Email', icon: <Mail size={20} />, url: 'mailto:contact@ujjavalbhardwaj.com' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://twitter.com/ujjavalbhardwaj' },
  ];

  return (
    <section id="contact" className="section bg-[#0D0E35]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={sectionRef}
          className="mb-16 text-center"
        >
          <h2 className="mb-4">Contact Me</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Have a project in mind or want to discuss collaboration opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-[#0B0C2A] p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#0D0E35] border border-[#3700B3]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F00FF]/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#0D0E35] border border-[#3700B3]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F00FF]/50 transition-all"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0D0E35] border border-[#3700B3]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F00FF]/50 transition-all resize-none"
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {formStatus === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {formStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-md text-green-200">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-md text-red-200">
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
            
            <div className="space-y-6">
              <p className="text-gray-300">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-lg font-medium">Find me on</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#0B0C2A] rounded-full hover:bg-[#7F00FF]/20 transition-colors flex items-center justify-center"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-medium">Let's create something amazing together</h4>
                <p className="text-gray-300">
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
