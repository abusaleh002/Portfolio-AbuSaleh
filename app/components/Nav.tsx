'use client';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navItems = [
    'About',
    'Projects',
    'Certifications',
    'Showcase',
    'Blog',
    'Testimonials',
    'Contact',
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-slate-900/70 border-b border-slate-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Brand */}
        <a href="#top" className="text-white font-semibold tracking-wide">
          Abu Saleh
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-slate-300 text-xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex gap-6 text-slate-300 ${
            open ? 'block mt-4' : 'hidden md:flex'
          }`}
        >
          {navItems.map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {label}
              </a>
            </li>
          ))}

          {/* Resume Button (external PDF) */}
          <li>
            <a
              href="/Abu_Saleh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
