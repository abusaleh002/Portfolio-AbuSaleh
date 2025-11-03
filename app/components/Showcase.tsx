import Image from 'next/image';
import SectionHeading from './SectionHeading';

export default function Showcase() {
  const visuals = [
    { src: 'forecasting.png', title: 'Forecast: LSTM/GRU + XGBoost' },
    { src: 'powerbi.png', title: 'Retail KPI Dashboard (Power BI)' },
    { src: 'Interactive_Data_Visualization_(D3.js).png', title: 'Interactive D3 Visuals' },
  ];

  return (
    <section id="showcase" className="bg-[#0A0F1A] py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <SectionHeading title="Data Visualization Showcase" subtitle="A few visuals and dashboards." />
        <div className="grid md:grid-cols-3 gap-6">
          {visuals.map((v) => (
            <div key={v.title} className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 group">
              <Image src={`/images/${v.src}`} alt={v.title} width={800} height={450} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-medium">
                {v.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
