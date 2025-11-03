import Image from "next/image";

export default function Certifications() {
  const certs = [
    {
      name: "Google Data Analytics Professional Certificate",
      org: "Coursera / Google",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/JEV26H41IGFH",
      image: "/images/Google_Data_Analytics_Professiona_ Certificate.png",
    },
    {
      name: "Microsoft Azure AI Fundamentals Workshop",
      org: "ScholarHat / Microsoft",
      date: "2024",
      link: "https://www.scholarhat.com/certificate/verify",
      image: "/images/Microsoft_Azure_AI_Fundamentals_Workshop.png",
    },
    {
      name: "Academy Accreditation - Generative AI Fundamentals",
      org: "Databicks",
      date: "2024",
      link: "https://credentials.databricks.com/d320e471-9f37-4a1d-8aad-105992629ba5#acc.GKBhx8cg",
      image: "/images/Databricks_Academy_Accreditation _ Generative_AI_Fundamentals.png",
    },

    {
      name: "Databricks Fundamentals Accreditation",
      org: "Databicks",
      date: "2024",
      link: "https://credentials.databricks.com/d320e471-9f37-4a1d-8aad-105992629ba5#acc.GKBhx8cg",
      image: "/images/Databricks_Fundamentals_Accreditation.png",
    },


     {
      name: "Databricks for Data Engineering",
      org: "Databicks",
      date: "2024",
      link: "https://customer-academy.databricks.com/learn/courses/1511/get-started-with-databricks-for-data-engineering/sessions/9759/get-started-with-databricks-for-data-engineering-class-58021-sgt-singapore-sep15-sep15-public?hash=b63f17964efe0feca6b30a4f6de9602f4f1390bf&generated_by=1211458",
      image: "/images/Databricks_for_Data_Engineering.png",
    },


    {
      name: "Python for Data Visualization",
      org: "LinkedIn",
      date: "2024",
      link: "https://www.linkedin.com/learning/certificates/671418ea775fc92a9fe43e299210c1a9819c2e22d004fd31b9b710a8ffc8cc43",
      image: "/images/LinkedIn_Python_for_Data_Visualization.png",
    },


     {
      name: "Data Science and Analytics Career Paths and Certifications: First Steps",
      org: "LinkedIn",
      date: "2024",
      link: "https://www.linkedin.com/learning/certificates/41cab8ae629a62fa214fd4ef80c1dcba217ba4b0b2e13db5d180d11914b88757",
      image: "/images/Data_Science & Analytics_Career_Paths & Certifications-First Steps.png",
    },


    {
      name: "Python: Working with Predictive Analytics (2019)",
      org: "LinkedIn",
      date: "2024",
      link: "https://www.linkedin.com/learning/certificates/f0067db11934e0d3b0ba23192b9579f528f4ad55cf3fcdf04bdae2fe58138aa8",
      image: "/images/Python-Working with Predictive Analytics (2019).png",
    },



    {
      name: "AWS Solutions Architect (in progress)",
      org: "Amazon Web Services",
      date: "Ongoing",
      //link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
      image: "/images/AWS_Certified_Solutions_Architect.png",
    },


    {
      name: "Microsoft Azure AI Fundamentals (in progress)",
      org: "Microsoft",
      date: "Ongoing",
      link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
      image: "/images/Microsoft_Azure_AI_Fundamentals.png",
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
