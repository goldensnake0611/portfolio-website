import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function CursorTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="cursor-trail hidden md:block" 
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div className="w-8 h-8 rounded-full border border-blush-400 opacity-50 bg-blush-100/20 blur-sm"></div>
    </div>
  );
}

function App() {
  return (
    <div className="relative font-sans text-dark bg-cream selection:bg-blush-200 selection:text-dark overflow-hidden">
      <CursorTrail />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>
      
      <footer className="py-8 bg-dark-accent text-cream/60 text-center text-sm">
        <p>© {new Date().getFullYear()} Mark Anthony Magleo. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-70">Designed with a romantic, professional touch.</p>
      </footer>
    </div>
  );
}

export default App;
