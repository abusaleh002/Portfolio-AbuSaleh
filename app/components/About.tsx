import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#0A0F1A] py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column — Profile Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/AbuSaleh.png"
            alt="Abu Saleh"
            width={320}
            height={320}
            className="rounded-2xl object-cover border border-slate-800 shadow-lg"
          />
        </div>

        {/* Right Column — Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Data Scientist & AI Engineer building predictive models, analytics dashboards,
            and GenAI applications that turn data into actionable insights.
          </p>

          <p className="text-slate-400 mt-5 leading-relaxed">
            I specialize in end-to-end analytics and machine learning workflows — from scoping problems 
            with stakeholders to developing models (XGBoost, LSTM/GRU) and deploying insights through 
            BI dashboards or lightweight web apps. My focus is on measurable impact — accuracy, speed, and clarity.
          </p>

          {/* Skills Grid */}
          <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-slate-300 text-[15px] leading-relaxed">
            <ul className="space-y-2">
              <li>• Python · Pandas · NumPy · Scikit-learn</li>
              <li>• SQL · Postgres · BigQuery</li>
              <li>• LangChain · FAISS · Streamlit</li>
            </ul>
            <ul className="space-y-2">
              <li>• TensorFlow · XGBoost · LSTM/GRU</li>
              <li>• Power BI · Tableau · DAX</li>
              <li>• AWS (SageMaker, RDS) · Docker  · GitHub Actions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
