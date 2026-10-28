import ScrollReveal from "./ScrollReveal";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaJs,
  FaGitAlt,
  FaServer,
  FaTerminal,
  FaDatabase
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiDocker,
  SiCplusplus
} from "react-icons/si";

export default function Skills() {
  const skillGroups = [
    {
      category: "Languages",
      tools: [
        { name: "TypeScript", icon: <SiTypescript className="text-sky-500" /> },
        { name: "JavaScript (ES6+)", icon: <FaJs className="text-amber-500" /> },
        { name: "Java", icon: <FaJava className="text-orange-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      ],
    },
    {
      category: "Frontend & UI",
      tools: [
        { name: "React", icon: <FaReact className="text-cyan-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-slate-900 dark:text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "Framer Motion", icon: <span className="font-bold text-violet-500 text-xs">FM</span> },
      ],
    },
    {
      category: "Backend & APIs",
      tools: [
        { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-slate-700 dark:text-slate-300" /> },
        { name: "RESTful APIs", icon: <FaServer className="text-teal-500" /> },
        { name: "Authentication / JWT", icon: <span className="font-mono text-xs font-bold text-amber-500">JWT</span> },
      ],
    },
    {
      category: "Databases",
      tools: [
        { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Database Indexing", icon: <FaDatabase className="text-indigo-500" /> },
      ],
    },
    {
      category: "DevOps & Tools",
      tools: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Docker Basics", icon: <SiDocker className="text-sky-500" /> },
        { name: "Linux / Terminal", icon: <FaTerminal className="text-slate-600 dark:text-slate-300" /> },
      ],
    },
    {
      category: "Core Foundations",
      tools: [
        { name: "Data Structures & Algorithms", icon: <span className="font-mono text-xs font-bold text-rose-500">DSA</span> },
        { name: "Operating Systems", icon: <span className="font-mono text-xs font-bold text-purple-500">OS</span> },
        { name: "Computer Networks", icon: <span className="font-mono text-xs font-bold text-blue-500">CN</span> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#F7F5EE] dark:bg-[#181926] border-b-2 border-slate-900 dark:border-slate-400 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Eyebrow Label */}
        <ScrollReveal>
          <div className="flex items-center gap-3 font-mono text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-4">
            <span>Toolbox / 02</span>
            <div className="flex-1 h-[2px] bg-slate-900/20 dark:bg-slate-400/30" />
          </div>
        </ScrollReveal>

        {/* Section Headline */}
        <ScrollReveal delay={100}>
          <h2 className="font-sans font-bold text-4xl sm:text-6xl tracking-tight text-slate-900 dark:text-white leading-[0.95] mb-12">
            What I build with
          </h2>
        </ScrollReveal>

        {/* Skill Groups Grid matching reference */}
        <div className="divide-y-2 divide-slate-900/15 dark:divide-slate-400/20">
          {skillGroups.map((group, idx) => (
            <ScrollReveal key={group.category} delay={idx * 60}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 py-6 sm:py-7 items-center">
                {/* Category Title */}
                <div className="md:col-span-3">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {group.category}
                  </h3>
                </div>

                {/* Tool Pills */}
                <div className="md:col-span-9 flex flex-wrap gap-2.5 sm:gap-3">
                  {group.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#16161e] text-slate-900 dark:text-slate-100 text-sm font-semibold shadow-hard-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-hard hover:bg-amber-300 dark:hover:bg-amber-400 dark:hover:text-slate-950 transition-all duration-150 cursor-default"
                    >
                      <span className="text-base flex-shrink-0">{tool.icon}</span>
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
