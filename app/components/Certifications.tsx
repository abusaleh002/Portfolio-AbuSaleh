import Image from "next/image";

export default function Certifications() {
  const certs = [
    {
      name: "IBM Data Science Professional Certificate",
      org: "Coursera / IBM",
      date: "2024",
      link: "https://www.coursera.org/professional-certificates/ibm-data-science",
      image: "/images/ibm-ds.png",
    },
    {
      name: "Google Data Analytics Professional Certificate",
      org: "Google / Coursera",
      date: "2024",
      link: "https://www.coursera.org/professional-certificates/google-data-analytics",
      image: "/images/google-da.png",
    },
    {
      name: "Microsoft Power BI Data Analyst (PL-300)",
      org: "Microsoft",
      date: "2024",
      link: "https://learn.microsoft.com/en-us/certifications/power-bi-data-analyst-associate/",
      image: "/images/microsoft-pl300.png",
    },
    {
      name: "AWS Certified Machine Learning – Specialty (in progress)",
      org: "Amazon Web Services",
      date: "Ongoing",
      link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
      image: "/images/aws-ml.png",
    },
  ];

  return (
    <section id="certifications" className="bg-[#0A0F1A] py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Certifications
        </h2>
        <p className="text-slate-300">
          Professional certifications that strengthen my expertise in data science, analytics, and AI.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c) => (
            <a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 transition overflow-hidden"
            >
              <div className="relative aspect-[16/9] bg-slate-800/40 flex items-center justify-center">
                <Image
                  src={c.image}
                  alt={c.name}
                  width={400}
                  height={250}
                  className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{c.name}</h3>
                <p className="text-slate-400 text-sm mt-1">{c.org}</p>
                <p className="text-slate-500 text-xs mt-2">{c.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
