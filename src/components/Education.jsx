import ScrollReveal from "./ScrollReveal";
import { education } from "../data/education";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-5 sm:px-6 py-20 scroll-mt-20 relative">
      <div className="text-center mb-12 sm:mb-14 relative z-10">
        <ScrollReveal>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-100/70 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/20 rounded-full mb-3 uppercase">
            <GraduationCap size={13} />
            <span>Academic Background</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Education
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Computer science foundations, engineering curriculum, and academic milestones.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative max-w-3xl mx-auto pl-6 sm:pl-10 py-4 z-10">
        <div className="absolute left-2.5 sm:left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent opacity-80" />

        {education.map((edu, index) => (
          <ScrollReveal key={index} delay={index * 150} className="relative mb-10 last:mb-0">
            <div className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-[#080d1e] border-2 border-cyan-500 flex items-center justify-center shadow-md dark:shadow-[0_0_15px_rgba(6,182,212,0.4)] z-10">
              <GraduationCap className="text-cyan-600 dark:text-cyan-400" size={13} />
            </div>

            <div className="p-6 sm:p-7 rounded-3xl border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 bg-white/95 dark:bg-[#090e21]/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-none">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-800 dark:text-cyan-300 bg-cyan-100/70 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-500/20 w-fit">
                  <Calendar size={11} />
                  {edu.years}
                </span>

                {edu.affiliation && (
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {edu.affiliation}
                  </span>
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                {edu.degree}
              </h3>

              <p className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                {edu.institution}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
