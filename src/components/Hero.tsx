import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { name, title, tagline } = portfolioData.hero;

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center bg-gradient-romantic overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #f6dce2 0%, transparent 60%)' }}></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-blush-600 font-medium tracking-widest uppercase mb-4 text-sm md:text-base"
        >
          {title}
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-dark-accent leading-tight mb-8"
        >
          {name.split(' ').map((part, i) => (
            <span key={i} className={i === 1 ? 'italic text-blush-900/80 mr-3' : 'mr-3'}>{part}</span>
          ))}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-dark-muted max-w-2xl mx-auto leading-relaxed font-light"
        >
          {tagline}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex items-center justify-center space-x-6"
        >
          <a href="#projects" className="px-8 py-3 bg-dark-accent text-cream rounded-full hover:bg-blush-800 transition-colors shadow-soft hover:shadow-soft-lg font-medium">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 bg-cream text-dark-accent border border-blush-200 rounded-full hover:bg-blush-50 transition-colors font-medium">
            Let's Talk
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-blush-400"
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
