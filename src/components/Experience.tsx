import { motion } from 'framer-motion';
import { portfolioData } from '../data';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-cream">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-dark-accent mb-4">Professional Journey</h2>
          <p className="text-lg text-dark-muted font-light max-w-2xl mx-auto">
            A track record of delivering high-impact solutions across global organizations and startups.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start">
                <div className="md:col-span-1 mb-4 md:mb-0 hidden md:block text-right">
                  <span className="text-sm font-medium text-blush-600 uppercase tracking-widest">{exp.date.split(' – ')[0]}</span>
                  <br/>
                  <span className="text-xs text-dark-muted/60">— {exp.date.split(' – ')[1]}</span>
                </div>

                <div className="absolute left-0 md:left-1/5 md:ml-[-5px] top-2 w-3 h-3 bg-blush-400 rounded-full border-2 border-cream z-10 hidden md:block shadow-soft"></div>
                <div className="absolute left-[3px] md:left-[calc(20%-1px)] top-2 bottom-[-48px] w-[2px] bg-blush-100 hidden md:block"></div>

                <div className="md:col-span-4 bg-white p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-shadow border border-blush-50/50 relative">
                  <div className="md:hidden mb-4">
                    <span className="text-sm font-medium text-blush-600">{exp.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-dark-accent mb-1">{exp.role}</h3>
                  <div className="text-sm text-blush-800 font-medium mb-4 flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="w-1 h-1 rounded-full bg-blush-200"></span>
                    <span className="text-dark-muted">{exp.location}</span>
                  </div>
                  <p className="text-dark-muted font-light leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
