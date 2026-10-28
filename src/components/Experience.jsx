import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { experiences } from "../data/experience";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-20 sm:py-28 bg-white dark:bg-[#16161e] border-b-2 border-slate-900 dark:border-slate-400 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Sticky Index Column */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24">
            <ScrollReveal>
              <div className="flex items-center gap-3 font-mono text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-4">
                <span>Experience / 03</span>
                <div className="flex-1 h-[2px] bg-slate-900/20 dark:bg-slate-400/30" />
              </div>
              <h2 className="font-sans font-bold text-4xl sm:text-5xl tracking-tight text-slate-900 dark:text-white leading-[0.95] mb-6">
                Where I've been
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-8 max-w-sm">
                Engineering internships, technical contributions, and full-stack software development.
              </p>
            </ScrollReveal>

            {/* Roles Quick Navigation List */}
            <ol className="space-y-2 border-l-2 border-slate-200 dark:border-slate-800 pl-4">
              {experiences.map((exp, idx) => (
                <li key={exp.company}>
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-center justify-between ${
                      activeIndex === idx
                        ? "bg-amber-300 dark:bg-amber-400 text-slate-950 font-bold border-2 border-slate-900 shadow-hard-sm"
                        : "hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <div>
                      <div className="text-sm">{exp.company}</div>
                      <div className="text-xs font-mono opacity-80">{exp.period}</div>
                    </div>
                    <span className="text-xs font-mono font-bold">0{idx + 1}</span>
                  </button>
                </li>
              ))}
            </ol>
          </aside>

          {/* Right Detail Cards Column */}
          <div className="lg:col-span-7 space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 120}>
                <div
                  className={`relative p-6 sm:p-8 rounded-2xl border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#1a1b26] shadow-hard hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-hard-lg transition-all duration-200 ${
                    activeIndex === index ? "ring-2 ring-amber-400" : ""
                  }`}
                >
                  {/* Top accent line indicator */}
                  <div className="absolute top-0 left-6 h-1 w-12 bg-amber-400 rounded-b-md" />

                  {/* Period & Location Eyebrow */}
                  <div className="flex flex-wrap items-center gap-2 mb-3 font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <b className="text-slate-900 dark:text-slate-100 font-bold">{exp.period}</b>
                    <span>·</span>
                    <span>{exp.location}</span>
                  </div>

                  {/* Role & Company Headline */}
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2">
                    {exp.role}{" "}
                    <span className="font-serif italic font-normal text-slate-500 dark:text-slate-400">
                      — {exp.company}
                    </span>
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 my-4">
                    {exp.desc}
                  </p>

                  {/* Tech Chips */}
                  <div className="pt-4 border-t-2 border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#16161e] font-mono text-xs font-medium text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}