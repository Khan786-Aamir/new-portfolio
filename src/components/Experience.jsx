import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { experiences } from "../data/experience";

const palette = [
  {
    solid: "bg-violet-300 dark:bg-violet-400",
    text: "text-violet-400",
    chip: "bg-violet-200",
  },
  {
    solid: "bg-cyan-300 dark:bg-cyan-400",
    text: "text-cyan-300",
    chip: "bg-cyan-200",
  },
  {
    solid: "bg-pink-300 dark:bg-pink-400",
    text: "text-pink-300",
    chip: "bg-pink-200",
  },
];

const hashes = ["a3f9c21", "b72e0d4", "c91d8a7", "d40b6e3", "e58f1a9"];

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];
  const theme = palette[active % palette.length];
  const points = exp.points || (exp.desc ? [exp.desc] : []);
  const stats = exp.stats || [];
  const slug = exp.company.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");

  return (
    <section
      id="experience"
      className="py-20 sm:py-28 bg-white dark:bg-[#16161e] border-b-2 border-slate-900 dark:border-slate-400 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Eyebrow */}
        <ScrollReveal>
          <div className="flex items-center gap-3 font-mono text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-4">
            <span>Experience / 03</span>
            <div className="flex-1 h-[2px] bg-slate-900/20 dark:bg-slate-400/30" />
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
            <h2 className="font-sans font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white leading-[0.95]">
              Where I've{" "}
              <em className="font-serif italic font-normal underline decoration-violet-400 decoration-8 underline-offset-4">
                been
              </em>
            </h2>

            <div className="inline-flex items-center gap-2 self-start md:self-auto px-4 py-2 rounded-xl border-2 border-slate-900 dark:border-slate-400 bg-amber-300 dark:bg-amber-400 shadow-hard-sm font-mono text-xs font-bold uppercase tracking-widest text-slate-950">
              <span className="w-2 h-2 rounded-full bg-emerald-500 border border-slate-900" />
              {experiences.length} Internships · 2026
            </div>
          </div>
        </ScrollReveal>

        {/* Role selector cards */}
        <ScrollReveal delay={150}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
            {experiences.map((item, idx) => {
              const t = palette[idx % palette.length];
              const isActive = active === idx;
              return (
                <button
                  key={item.company}
                  onClick={() => setActive(idx)}
                  className={`group text-left p-4 sm:p-5 rounded-2xl border-2 border-slate-900 dark:border-slate-300 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? `${t.solid} text-slate-950 shadow-hard -translate-x-1 -translate-y-1`
                      : "bg-white dark:bg-[#1a1b26] text-slate-900 dark:text-slate-100 shadow-hard-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-black text-5xl sm:text-6xl tracking-tighter leading-none ${
                        isActive ? "text-slate-950" : "text-slate-300 dark:text-slate-600"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="font-sans font-black text-lg sm:text-xl leading-tight truncate">
                        {item.company}
                      </div>
                      <div className="text-sm font-medium opacity-80 truncate">
                        {item.role}
                      </div>
                      <div className="font-mono text-[11px] font-bold uppercase tracking-widest mt-1 opacity-70">
                        {item.period}
                      </div>
                    </div>

                    <span
                      className={`hidden sm:flex items-center justify-center w-9 h-9 rounded-lg border-2 border-slate-900 dark:border-slate-300 font-mono font-bold transition-transform duration-200 ${
                        isActive ? "bg-white rotate-90 text-slate-950" : "group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Detail panel */}
        <ScrollReveal delay={220}>
          <div
            key={active}
            className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border-2 border-slate-900 dark:border-slate-300 shadow-hard-lg"
          >
            {/* Terminal */}
            <div className="lg:col-span-7 bg-slate-900 text-slate-100">
              <div
                className={`flex items-center gap-2 px-4 py-3 border-b-2 border-slate-900 ${theme.solid}`}
              >
                <span className="w-3 h-3 rounded-full bg-rose-400 border border-slate-900" />
                <span className="w-3 h-3 rounded-full bg-amber-300 border border-slate-900" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 border border-slate-900" />
                <span className="ml-3 font-mono text-[11px] sm:text-xs font-bold tracking-wider text-slate-950 truncate">
                  ~/experience/{slug}
                </span>
              </div>

              <div className="p-5 sm:p-7 font-mono text-xs sm:text-sm leading-relaxed">
                <div className="mb-5">
                  <span className="text-emerald-300">➜</span>{" "}
                  <span className={theme.text}>~</span>{" "}
                  <span className="text-slate-300">git log --oneline</span>
                </div>

                <ul className="space-y-4">
                  {points.map((p, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-amber-300 flex-shrink-0 font-bold">
                        {hashes[i % hashes.length]}
                      </span>
                      <span className="text-slate-300">{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <span className="text-emerald-300">➜</span>{" "}
                  <span className={theme.text}>~</span>{" "}
                  <span className="inline-block w-2 h-4 align-middle bg-cyan-300 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Info panel */}
            <div
              className={`lg:col-span-5 p-5 sm:p-7 flex flex-col gap-6 text-slate-950 border-t-2 lg:border-t-0 lg:border-l-2 border-slate-900 dark:border-slate-300 ${theme.solid}`}
            >
              <div>
                <div className="font-mono text-[11px] font-bold uppercase tracking-widest opacity-70">
                  {exp.type ? `${exp.type} · ` : ""}
                  {exp.location}
                </div>
                <h3 className="font-sans font-black text-3xl sm:text-4xl tracking-tight leading-none mt-2">
                  {exp.role}
                </h3>
                <p className="font-serif italic text-lg sm:text-xl mt-2">@ {exp.company}</p>
                <div className="inline-block mt-3 px-3 py-1 rounded-md border-2 border-slate-900 bg-white font-mono text-xs font-bold uppercase tracking-wider">
                  {exp.period}
                </div>
              </div>

              {stats.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="p-3 rounded-xl border-2 border-slate-900 bg-white shadow-hard-sm"
                    >
                      <div className="font-black text-3xl sm:text-4xl leading-none text-slate-900">
                        {s.value}
                      </div>
                      <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-2">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-auto pt-4 border-t-2 border-slate-900/80">
                <div className="font-mono text-[11px] font-bold uppercase tracking-widest mb-3">
                  Tech used
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-md border-2 border-slate-900 bg-white font-mono text-xs font-bold text-slate-900 hover:scale-105 transition-transform duration-150 cursor-default ${
                        i % 2 === 0 ? "hover:-rotate-2" : "hover:rotate-2"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}