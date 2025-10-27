'use client';

import DevTests from './components/DevTests';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Projects from './components/Projects';
import Showcase from './components/Showcase';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function PortfolioStarter() {
  return (
    <main className="bg-[#0A0F1A] text-slate-300 scroll-smooth">
      <DevTests />
      <Nav />
      <Hero />
      <About />
      <Certifications /> 
      <Education /> 
      <Projects />
      <Showcase />
      <Blog />
      <Testimonials />
      <Contact />
    </main>
  );
}
