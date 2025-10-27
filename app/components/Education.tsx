'use client';
import Image from "next/image";

export default function Education() {
  const education = [
    {
      degree: "M.S. in Computer & Information Science (Data Science)",
      school: "Gannon University",
      duration: "2023 – 2025",
      details:
        "Capstone: AI-Driven Sales Forecasting for Retail Inventory (Improved accuracy by 30%)",
      image: "/images/Gannon-logo.png",
      link: "https://gannon.edu/",
    },
    
  ];

  return (
    <section
      id="education"
      className="bg-[#0A0F1A] py-24 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          🎓 Education
        </h2>
        <p className="text-slate-300">
          Academic background combining computer science, data analytics, and applied machine learning.
        </p>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <a
              key={index}
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] bg-slate-800/40 flex items-center justify-center">
                <Image
                  src={edu.image}
                  alt={edu.school}
                  width={400}
                  height={250}
                  className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-slate-300 mt-1 font-medium">{edu.school}</p>
                <p className="text-slate-400 text-sm">{edu.duration}</p>
                <p className="text-slate-400 mt-3 text-[15px] leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
