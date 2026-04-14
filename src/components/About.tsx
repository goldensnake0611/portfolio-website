import { motion } from 'framer-motion';
import { portfolioData } from '../data';

export default function About() {
  const { hero, skills } = portfolioData;
  const { bio } = hero;

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-cream text-dark">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-dark-accent mb-6">Behind the Code</h2>
          <p className="text-lg leading-relaxed text-dark-muted font-light">
            {bio}
          </p>
          <div className="pt-8">
            <h3 className="font-serif text-2xl text-blush-800 mb-6">Technical Arsenal</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-dark-accent mb-3">{skillGroup.category}</h4>
                  <ul className="space-y-2 text-sm text-dark-muted">
                    {skillGroup.items.map((item, i) => (
                      <li key={i} className="flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-blush-400 before:rounded-full before:mr-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-soft-lg group"
        >
          <img 
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1000&auto=format&fit=crop" 
            alt="Abstract Developer Vibe" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/60 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-cream">
            <p className="font-serif text-3xl mb-2">Crafting digital</p>
            <p className="font-serif text-3xl italic text-blush-200">masterpieces.</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
