'use client';
import useParticles from './useParticles';

export default function Hero() {
  const { canvasRefCallback } = useParticles();

  return (
    <section id="top" className="relative min-h-[90vh] grid place-items-center bg-[#0A0F1A] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <canvas ref={canvasRefCallback} className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <p className="text-cyan-300/90 text-sm uppercase tracking-[0.25em] mb-3">
          Data · Analytics · Machine Learning · GenAI
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Hi, I’m <span className="text-cyan-300">Abu Saleh</span> — Data Scientist | AI Engineer | Analytics Specialist
        </h1>

        <p className="text-slate-300 mt-4 max-w-3xl mx-auto">
          I design AI-powered analytics systems that turn raw data into decisions — from predictive forecasting and ML pipelines to interactive BI dashboards and GenAI apps.
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a href="#projects" className="px-5 py-3 rounded-lg bg-cyan-400 text-slate-900 font-medium hover:bg-cyan-300 transition">
            Explore Projects
          </a>
          <a href="#contact" className="px-5 py-3 rounded-lg border border-slate-700 text-white hover:border-slate-500 transition">
            Contact Me
          </a>
          <a
            href="/Abu_Saleh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700 hover:bg-slate-700 transition"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5 text-slate-400">
          <a href="https://www.linkedin.com/in/abu-saleh-117b6a1ba" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href="https://github.com/abusaleh002" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href="mailto:saleh.gannon.ds@gmail.com" className="hover:text-white">Email</a>
        </div>
      </div>

      <div className="absolute bottom-6 w-full flex justify-center">
        <a href="#about" className="text-slate-500 hover:text-white text-sm">Scroll ↓</a>
      </div>
    </section>
  );
}
