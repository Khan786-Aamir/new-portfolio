import ScrollReveal from "./ScrollReveal";
import { certifications } from "../data/certifications";
import { Award, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20 relative">
      <div className="text-center mb-14 relative z-10">
        <ScrollReveal>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-100/70 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/20 rounded-full mb-3 uppercase">
            <Award size={12} />
            <span>Credentials</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Professional Qualifications
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Verified technical achievements, specialized curriculum, and software engineering certificates.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {certifications.map((cert, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <div className="p-6 rounded-3xl border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 bg-white/95 dark:bg-[#090e21]/75 backdrop-blur-xl flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-300 group shadow-sm hover:shadow-md dark:shadow-none">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Award size={18} />
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-cyan-700 dark:text-cyan-300 font-semibold text-xs mb-1">
                  {cert.issuer}
                </p>

                <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Issued: {cert.date}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
