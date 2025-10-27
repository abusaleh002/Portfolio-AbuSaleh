'use client';
import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0A0F1A] py-24 border-t border-slate-800">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionHeading title="Let’s collaborate" subtitle="Tell me about your goals and I’ll share how data can help." />
        <form action="https://formspree.io/f/xjkpgywv" method="POST" className="mt-10 grid gap-4 text-left">
          <input name="name" required className="bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400" placeholder="Name" />
          <input name="email" type="email" required className="bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400" placeholder="Email" />
          <textarea name="message" required className="bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 min-h-[140px]" placeholder="Message"></textarea>
          <input type="hidden" name="_subject" value="New message from Abu Saleh Portfolio" />
          <button type="submit" className="justify-self-start px-5 py-3 rounded-lg bg-cyan-400 text-slate-900 font-medium hover:bg-cyan-300 transition">Send message</button>
        </form>

        <div className="mt-8 space-y-4">
          <p className="text-slate-400">
            Prefer email? <a className="text-cyan-300 hover:text-cyan-200" href="mailto:saleh.gannon.ds@gmail.com">saleh.gannon.ds@gmail.com</a>
          </p>
          <div className="flex justify-center gap-8 text-slate-400">
            <a href="https://www.linkedin.com/in/abu-saleh-117b6a1ba" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-300 transition"><Linkedin size={20} /> <span>LinkedIn</span></a>
            <a href="https://github.com/abusaleh002" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-300 transition"><Github size={20} /> <span>GitHub</span></a>
          </div>
        </div>

        <footer className="text-slate-500 text-sm mt-10">
          © {new Date().getFullYear()} Abu Saleh • All rights reserved
        </footer>
      </div>
    </section>
  );
}
