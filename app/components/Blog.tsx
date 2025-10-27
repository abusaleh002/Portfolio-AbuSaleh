import SectionHeading from './SectionHeading';

export default function Blog() {
  const posts = [
    { title: 'How I Structure an Analytics Project', date: 'Oct 2025', link: 'https://medium.com/@saleh.gannon.ds/0f2315e6e55b' },
    { title: 'Picking the Right Evaluation Metric', date: 'Oct 2025', link: 'https://medium.com/@abusaleh002/picking-the-right-evaluation-metric' },
    { title: 'Power BI vs. Tableau: When to Use Which', date: 'Sep 2025', link: 'https://medium.com/@abusaleh002/powerbi-vs-tableau-when-to-use-which' },
  ];

  return (
    <section id="blog" className="bg-[#0A0F1A] py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <SectionHeading title="Articles" subtitle="Short, practical posts on analytics, ML, and visualization." />
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-slate-800 bg-slate-900/30 p-5 hover:bg-slate-900/50 transition">
              <p className="text-xs text-slate-400">{p.date}</p>
              <h3 className="text-white font-semibold mt-1">{p.title}</h3>
              <p className="text-slate-300 mt-2">Read →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
