import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/projects";
import { ExternalLink, ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const palette = [
  { solid: "bg-violet-300 dark:bg-violet-400", dot: "bg-violet-400" },
  { solid: "bg-cyan-300 dark:bg-cyan-400", dot: "bg-cyan-400" },
  { solid: "bg-emerald-300 dark:bg-emerald-400", dot: "bg-emerald-400" },
  { solid: "bg-pink-300 dark:bg-pink-400", dot: "bg-pink-400" },
  { solid: "bg-amber-300 dark:bg-amber-400", dot: "bg-amber-400" },
  { solid: "bg-orange-300 dark:bg-orange-400", dot: "bg-orange-400" },
];

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=80";

export default function Projects() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = projects.length;
  const proj = projects[active];
  const theme = palette[active % palette.length];

  const next = () => setActive((i) => (i + 1) % total);
  const prev = () => setActive((i) => (i - 1 + total) % total);

  // Auto-play (pauses on hover, resets when project changes)
  useEffect(() => {
    if (paused || total < 2) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, 6000);
    return () => clearInterval(id);
  }, [paused, active, total]);

  const displayUrl = (proj.website || proj.github || "")
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 bg-[#F7F5EE] dark:bg-[#181926] border-b-2 border-slate-900 dark:border-slate-400 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Eyebrow */}
        <ScrollReveal>
          <div className="flex items-center gap-3 font-mono text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-4">
            <span>Selected work / 04</span>
            <div className="flex-1 h-[2px] bg-slate-900/20 dark:bg-slate-400/30" />
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <h2 className="font-sans font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white leading-[0.95] max-w-3xl mb-4">
                Things I've made. Things I've{" "}
                <em className="font-serif italic font-normal underline decoration-pink-400 decoration-8 underline-offset-4">
                  broken.
                </em>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl">
                A collection of software architectures that escaped my notes and
                became production-grade full-stack products.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 self-start md:self-auto px-4 py-2 rounded-xl border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#16161e] shadow-hard-sm font-mono text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-500 border border-slate-900" />
              {total} Projects
            </div>
          </div>
        </ScrollReveal>

        {/* Project tabs */}
        <ScrollReveal delay={140}>
          <div className="flex gap-3 overflow-x-auto pb-4 pt-1 px-1 -mx-1 mb-6">
            {projects.map((p, idx) => {
              const t = palette[idx % palette.length];
              const isActive = active === idx;
              return (
                <button
                  key={p.title}
                  onClick={() => setActive(idx)}
                  className={`flex-shrink-0 flex items-center gap-3 pl-2 pr-4 py-2 rounded-xl border-2 border-slate-900 dark:border-slate-300 font-sans text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? `${t.solid} text-slate-950 shadow-hard -translate-x-0.5 -translate-y-0.5`
                      : "bg-white dark:bg-[#1a1b26] text-slate-700 dark:text-slate-300 shadow-hard-sm hover:-translate-y-0.5"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-7 h-7 rounded-lg border-2 border-slate-900 font-mono text-[11px] font-black ${
                      isActive ? "bg-white text-slate-950" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="whitespace-nowrap">{p.title}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Showcase */}
        <ScrollReveal delay={200}>
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Browser mockup with stacked cards behind */}
            <div className="lg:col-span-7 relative pb-4 pr-4 sm:pr-6">
              {/* back cards */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 rounded-2xl border-2 border-slate-900 dark:border-slate-300 bg-slate-200 dark:bg-slate-700" />
              <div className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 rounded-2xl border-2 border-slate-900 dark:border-slate-300 bg-slate-100 dark:bg-slate-800" />

              <div className="group relative rounded-2xl overflow-hidden border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-[#16161e] shadow-hard-lg">
                {/* Browser top bar */}
                <div
                  className={`flex items-center gap-3 px-4 py-2.5 border-b-2 border-slate-900 dark:border-slate-300 ${theme.solid}`}
                >
                  <div className="flex gap-1.5 flex-shrink-0">
                    <span className="w-3 h-3 rounded-full bg-rose-400 border border-slate-900" />
                    <span className="w-3 h-3 rounded-full bg-amber-300 border border-slate-900" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 border border-slate-900" />
                  </div>

                  <div className="flex-1 min-w-0 px-3 py-1 rounded-md border-2 border-slate-900 bg-white font-mono text-[11px] font-bold text-slate-700 truncate">
                    🔒 {displayUrl}
                  </div>

                  <span className="hidden sm:block font-mono text-[11px] font-black text-slate-950 flex-shrink-0">
                    {String(active + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
                  </span>
                </div>

                {/* Screenshot */}
                <div className="relative aspect-video bg-slate-100 dark:bg-slate-900 overflow-hidden">
                  <img
                    key={proj.title}
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = FALLBACK_IMG;
                    }}
                  />

                  {/* Hover overlay */}
                  {(proj.website || proj.github) && (
                    <a
                      href={proj.website || proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-slate-900 bg-white text-slate-950 font-mono text-xs font-black uppercase tracking-widest shadow-hard">
                        Open project <ArrowUpRight size={14} />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Info panel */}
            <div className="lg:col-span-5">
              <div
                className={`p-6 sm:p-7 rounded-2xl border-2 border-slate-900 dark:border-slate-300 ${theme.solid} text-slate-950 shadow-hard`}
              >
                <div className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-widest">
                  <span className="px-2.5 py-1 rounded-md border-2 border-slate-900 bg-white">
                    Featured work
                  </span>
                  <span className="opacity-80">{proj.date}</span>
                </div>

                <h3 className="font-sans font-black text-3xl sm:text-4xl tracking-tight leading-none mt-5">
                  {proj.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed mt-4 text-slate-900/90">
                  {proj.desc}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {proj.tech.map((t, i) => (
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

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-6 pt-5 border-t-2 border-slate-900/80">
                  {proj.website && (
                    <a
                      href={proj.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-slate-900 bg-slate-900 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-hard-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard transition-all duration-150"
                    >
                      Live site <ExternalLink size={13} />
                    </a>
                  )}
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-slate-900 bg-white text-slate-900 font-mono text-xs font-bold uppercase tracking-wider shadow-hard-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard transition-all duration-150"
                    >
                      <FaGithub size={14} /> GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                  {projects.map((p, idx) => (
                    <button
                      key={p.title}
                      onClick={() => setActive(idx)}
                      aria-label={`Show ${p.title}`}
                      className={`h-2.5 rounded-full border-2 border-slate-900 dark:border-slate-300 transition-all duration-300 cursor-pointer ${
                        active === idx
                          ? `w-10 ${palette[idx % palette.length].dot}`
                          : "w-2.5 bg-white dark:bg-slate-700"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous project"
                    className="flex items-center justify-center w-11 h-11 rounded-xl border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-[#1a1b26] text-slate-900 dark:text-white shadow-hard-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard transition-all duration-150 cursor-pointer"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next project"
                    className="flex items-center justify-center w-11 h-11 rounded-xl border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-[#1a1b26] text-slate-900 dark:text-white shadow-hard-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard transition-all duration-150 cursor-pointer"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}