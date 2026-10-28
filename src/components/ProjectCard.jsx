import { ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const displayUrl = project.website
    ? project.website.replace("https://", "").replace("www.", "")
    : project.github.replace("https://", "").replace("www.", "");

  return (
    <div className="group flex flex-col h-full rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 bg-white/95 dark:bg-[#090e21]/85 backdrop-blur-xl shadow-sm hover:shadow-xl dark:shadow-[0_12px_35px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_35px_rgba(6,182,212,0.18)] transition-all duration-300">
      {/* Top Rim Shimmer Line */}
      <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />

      {/* Modern Browser Mockup Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-50/90 dark:bg-[#060a17]/90 border-b border-slate-200/80 dark:border-white/[0.07] flex-shrink-0">
        {/* Window Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400 dark:bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 dark:bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 dark:bg-emerald-500/80" />
        </div>

        {/* Address Bar Pill */}
        <div className="flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] text-[10px] font-mono text-slate-600 dark:text-slate-400 text-center max-w-[200px] sm:max-w-xs truncate shadow-2xs">
          <Lock size={9} className="text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
          <span className="truncate">{displayUrl}</span>
        </div>

        <span className="text-[10px] font-mono font-medium text-cyan-700 dark:text-cyan-400/90 bg-cyan-50 dark:bg-cyan-950/40 px-2 py-0.5 rounded-md border border-cyan-200 dark:border-cyan-500/20">
          {project.date}
        </span>
      </div>

      {/* Project Image Preview Viewport */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100 dark:bg-[#050814] flex items-center justify-center flex-shrink-0 border-b border-slate-100 dark:border-white/[0.04]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80";
          }}
        />

        {/* Subtle Ambient Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-[#090e21] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
      </div>

      {/* Card Content Details */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        {/* Title */}
        <div className="mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors tracking-tight">
            {project.title}
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-slate-600 dark:text-slate-300/90 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
          {project.desc}
        </p>

        {/* Tag Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((tag, idx) => (
            <span
              key={idx}
              className="bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-cyan-300/90 border border-slate-200/80 dark:border-white/[0.06] px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button Links: [ Live Demo ] [ GitHub ] */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-white/[0.07]">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-black dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-400 dark:hover:to-blue-500 text-white shadow-sm hover:shadow-md dark:shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <ExternalLink size={12} />
              <span>Live Demo</span>
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200/80 dark:bg-white/[0.05] dark:hover:bg-white/[0.09] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <FaGithub size={13} className="text-slate-700 dark:text-slate-300" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
