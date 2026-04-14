import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { portfolioData } from '../data';

export default function Resume() {
  const { education } = portfolioData;

  return (
    <section id="resume" className="py-24 px-6 md:px-12 bg-gradient-romantic relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #f6dce2 0%, transparent 50%)' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-soft-lg border border-blush-50"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-dark-accent mb-6">Education & Credentials</h2>
          <p className="text-lg text-dark-muted font-light mb-12 max-w-2xl mx-auto">
            A foundation in computer science paired with continuous learning and certifications.
          </p>
          
          <div className="space-y-8 text-left mb-16 max-w-2xl mx-auto">
            {education.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-blush-200 pl-6 relative">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-blush-500 rounded-full"></div>
                <h3 className="text-xl font-serif text-dark-accent mb-1">{edu.degree}</h3>
                <p className="text-blush-800 font-medium">{edu.institution}</p>
              </div>
            ))}
            
            <div className="border-l-2 border-blush-200 pl-6 relative">
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-blush-500 rounded-full"></div>
              <h3 className="text-xl font-serif text-dark-accent mb-1">React Developer Professional Certificate</h3>
              <p className="text-blush-800 font-medium">Meta (Facebook)</p>
            </div>
          </div>
          
          <motion.a 
            href="/resume.pdf" 
            target="_blank"
            download="Mark_Anthony_Magleo_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-dark-accent text-cream rounded-full hover:bg-blush-800 transition-colors shadow-soft hover:shadow-soft-lg font-medium"
          >
            <Download size={20} />
            <span>Download Full Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
