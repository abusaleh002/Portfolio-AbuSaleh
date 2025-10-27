import SectionHeading from './SectionHeading';

export default function Testimonials() {
  const feedback = [
    { text: 'Abu delivered a dashboard that transformed our weekly reporting.', author: 'Colleague / Client' },
    { text: 'Strong analytical thinking and clear communication throughout the project.', author: 'Professor / Supervisor' },
  ];
  return (
    <section id="testimonials" className="bg-[#0A0F1A] py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <SectionHeading title="Testimonials" subtitle="What colleagues and mentors say." />
        <div className="grid md:grid-cols-2 gap-6">
          {feedback.map((f, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
              <p className="text-slate-200 italic">“{f.text}”</p>
              <p className="text-cyan-400 mt-4 font-medium">— {f.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
