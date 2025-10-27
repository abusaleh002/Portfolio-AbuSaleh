export default function Resume() {
  return (
    <section id="resume" className="bg-[#0A0F1A] py-24 border-t border-slate-800 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Resume</h2>
      <p className="text-slate-300 mb-8">
        View or download my latest professional resume focused on Data Science, AI, and Analytics.
      </p>
      <a
        href="/Abu_Saleh_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-lg bg-cyan-400 text-slate-900 font-medium hover:bg-cyan-300 transition"
      >
        View Resume
      </a>
    </section>
  );
}
