import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-cream text-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-dark-accent mb-4">Featured Work</h2>
          <p className="text-lg text-dark-muted font-light max-w-2xl mx-auto">
            A curated selection of projects demonstrating expertise in modern web technologies and full-stack architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-blush-50 overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 text-blush-600">
                <ExternalLink size={20} />
              </div>
              
              <h3 className="text-2xl font-serif text-dark-accent mb-3 pr-8 leading-tight group-hover:text-blush-800 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-dark-muted font-light mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-blush-50 text-blush-900 text-xs font-medium tracking-wide rounded-full border border-blush-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
