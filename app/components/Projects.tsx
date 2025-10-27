import Image from 'next/image';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const items = [
    {
      title: 'GenAI Tools — Resume Q&A + JD↔Resume Match',
      desc: 'AI app with semantic search (MiniLM + FAISS) and Q&A; integrates Groq Llama-3.1 and LangChain. Deployed on Streamlit.',
      image: 'genai-tools.png', // add to /public/images/
      link: 'https://github.com/abusaleh002/GenAI-Tools',
      live: 'https://genai-tools-abu-saleh.streamlit.app/',
    },
    {
      title: 'AI-Driven Retail Sales Forecasting',
      desc: 'LSTM/GRU + XGBoost ensemble on 50K+ records; improved forecast accuracy ~30%. End-to-end pipeline and evaluation.',
      image: 'forecasting.png',
      link: 'https://github.com/abusaleh002/Ai-Retail-Sales-Forecasting',
    },
    {
      title: 'Retail Sales Performance Dashboard',
      desc: 'Power BI dashboard with KPI tracking, regional breakdowns, YoY trends, and automated refresh.',
      image: 'powerbi.png',
      link: 'https://github.com/abusaleh002/Power-BI-Retail-Sales-Dashboard',
    },
    {
      title: 'Interactive Data Visualization (D3.js)',
      desc: 'Multi-page D3.js visualizations for social/retail datasets; clean, responsive, and insight-driven.',
      image: 'd3-dashboard.png',
      link: 'https://abusaleh002.github.io/Interactive-Data-Visualization-D3.js-JavaScript/',
    },
  ];

  return (
    <section id="projects" className="bg-[#0A0F1A] py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <SectionHeading
          title="Projects"
          subtitle="Selected work across forecasting, analytics engineering, BI, and GenAI."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 transition overflow-hidden">
              <Image src={`/images/${p.image}`} alt={p.title} width={800} height={500} className="object-cover w-full h-40" />
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-slate-300 mt-2">{p.desc}</p>
                <div className="flex gap-4 mt-4">
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 group-hover:gap-3 transition">
                    View case study →
                  </a>
                  {'live' in p && p.live ? (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition">
                      Live demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
