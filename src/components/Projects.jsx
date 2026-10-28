import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/projects";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#F7F5EE] dark:bg-[#181926] border-b-2 border-slate-900 dark:border-slate-400 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <ScrollReveal>
            <div className="flex items-center gap-3 font-mono text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-4">
              <span>Selected work / 04</span>
              <div className="flex-1 h-[2px] bg-slate-900/20 dark:bg-slate-400/30" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-sans font-bold text-4xl sm:text-6xl tracking-tight text-slate-900 dark:text-white leading-[0.95] max-w-2xl mb-4">
              Things I've made. Things I've{" "}
              <em className="font-serif italic font-normal underline decoration-amber-400 decoration-8 underline-offset-4">
                broken.
              </em>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl">
              A collection of software architectures that escaped my notes and became production-grade full-stack products.
            </p>
          </ScrollReveal>
        </div>

        {/* Projects List & Preview Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Projects List Column */}
          <div className="lg:col-span-7 divide-y-2 divide-slate-900/20 dark:divide-slate-400/20 border-y-2 border-slate-900/20 dark:border-slate-400/20">
            {projects.map((proj, idx) => {
              const isActive = activeProject === idx;

              return (
                <ScrollReveal key={proj.title} delay={idx * 60}>
                  <article
                    onMouseEnter={() => setActiveProject(idx)}
                    className={`py-6 sm:py-8 px-3 sm:px-4 rounded-xl transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-amber-300/30 dark:bg-amber-400/15 pl-6"
                        : "hover:bg-black/[0.03] dark:hover:bg-white/[0.03]"
                    }`}
                  >
                    <div className="grid grid-cols-12 gap-4 items-start">
                      {/* Number Index */}
                      <span className="col-span-2 sm:col-span-1 font-mono text-xs font-bold text-slate-400 dark:text-slate-500 pt-1.5">
                        0{idx + 1}
                      </span>

                      {/* Main Project Details */}
                      <div className="col-span-10 sm:col-span-11 space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-sans font-black text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight flex items-center gap-1 group">
                            <span>{proj.title}</span>
                            <ArrowUpRight
                              size={20}
                              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </h3>
                        </div>

                        {/* Tech Tag Pills */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mr-1">
                            {proj.date}
                          </span>
                          {proj.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#16161e] font-mono text-[11px] font-medium text-slate-700 dark:text-slate-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Blurb */}
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                          {proj.desc}
                        </p>

                        {/* Action Links */}
                        <div className="flex items-center gap-4 pt-2 text-xs font-bold">
                          {proj.website && (
                            <a
                              href={proj.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-slate-900 dark:text-white underline decoration-amber-400 decoration-3 underline-offset-4 hover:decoration-amber-500"
                            >
                              <span>Live site</span>
                              <ExternalLink size={11} />
                            </a>
                          )}
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-slate-900 dark:text-white underline decoration-slate-400 decoration-2 underline-offset-4 hover:decoration-slate-900"
                          >
                            <FaGithub size={12} />
                            <span>GitHub</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Sticky Image Preview Panel on Right */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24">
            <div className="p-3 rounded-2xl border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#16161e] shadow-hard-lg">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 mb-4">
                <img
                  src={projects[activeProject]?.image}
                  alt={projects[activeProject]?.title}
                  className="w-full h-full object-cover object-top transition-all duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80";
                  }}
                />
              </div>

              <div className="px-2">
                <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400">
                  FEATURED WORK
                </div>
                <h4 className="font-sans font-extrabold text-lg text-slate-900 dark:text-white">
                  {projects[activeProject]?.title}
                </h4>
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-500 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <span>PROJECT 0{activeProject + 1} OF 0{projects.length}</span>
                  <span className="text-emerald-500 font-bold">READY TO INSPECT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
