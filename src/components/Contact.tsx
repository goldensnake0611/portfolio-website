import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data';

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-cream text-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-dark-accent mb-4">Let's Connect</h2>
          <p className="text-lg text-dark-muted font-light max-w-2xl mx-auto">
            Open to new opportunities and exciting collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-serif text-dark-accent">Get in Touch</h3>
            <p className="text-dark-muted font-light leading-relaxed">
              Whether you have a question or just want to say hi, I'll try my best to get back to you! My inbox is always open.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-blush-50 flex items-center justify-center text-blush-600 group-hover:bg-blush-100 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-dark-muted uppercase tracking-wider mb-1">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-lg font-serif text-dark-accent hover:text-blush-700 transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-blush-50 flex items-center justify-center text-blush-600 group-hover:bg-blush-100 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-dark-muted uppercase tracking-wider mb-1">Location</p>
                  <p className="text-lg font-serif text-dark-accent">
                    {contact.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-soft-lg border border-blush-50 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(45deg,#f6dce2,#f6dce2_10px,transparent_10px,transparent_20px)]"></div>
            
            <form className="space-y-6 mt-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-muted mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-blush-100 focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-shadow bg-cream/30"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-muted mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-blush-100 focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-shadow bg-cream/30"
                  placeholder="hello@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-muted mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-blush-100 focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-shadow bg-cream/30 resize-none"
                  placeholder="How can we work together?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-dark-accent text-cream rounded-xl hover:bg-blush-800 transition-colors shadow-soft font-medium"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
