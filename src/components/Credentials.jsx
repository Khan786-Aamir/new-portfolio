import ScrollReveal from "./ScrollReveal";
import { education } from "../data/education";
import { certifications } from "../data/certifications";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Credentials() {
  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-[#16161e] border-b-2 border-slate-900 dark:border-slate-400">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 font-mono text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-4">
            <span>The rest of it / 05</span>
            <div className="flex-1 h-[2px] bg-slate-900/20 dark:bg-slate-400/30" />
          </div>
          <h2 className="font-sans font-bold text-4xl sm:text-5xl tracking-tight text-slate-900 dark:text-white leading-[0.95] mb-12">
            Education & credentials
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Education Card */}
          <ScrollReveal delay={100}>
            <div className="p-6 sm:p-7 rounded-2xl border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#1a1b26] shadow-hard h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                  <GraduationCap size={15} className="text-amber-500" />
                  <span>Academic Degree</span>
                </div>
                {education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <b className="font-sans font-extrabold text-base sm:text-lg text-slate-900 dark:text-white block">
                      {edu.degree}
                    </b>
                    <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 block">
                      {edu.institution}
                    </span>
                    <span className="font-mono text-xs text-slate-500 block pt-1">
                      {edu.years} {edu.affiliation ? `· ${edu.affiliation}` : ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications Cards */}
          {certifications.slice(0, 2).map((cert, idx) => (
            <ScrollReveal key={cert.title} delay={180 + idx * 80}>
              <div className="p-6 sm:p-7 rounded-2xl border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#1a1b26] shadow-hard h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                    <Award size={15} className="text-amber-500" />
                    <span>Certification</span>
                  </div>
                  <b className="font-sans font-extrabold text-base sm:text-lg text-slate-900 dark:text-white block mb-1">
                    {cert.title}
                  </b>
                  <span className="text-xs sm:text-sm text-amber-600 dark:text-amber-400 font-semibold block">
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-xs text-slate-500 block pt-1">
                    Verified Credential · {cert.date}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
