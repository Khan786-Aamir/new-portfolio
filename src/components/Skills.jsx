import ScrollReveal from "./ScrollReveal";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaServer,
  FaDatabase,
  FaAws,
  FaBootstrap,
  FaMobileAlt,
  FaCloud,
  FaCloudUploadAlt,
  FaSitemap,
  FaSearch,
  FaProjectDiagram,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiC,
} from "react-icons/si";

export default function Skills() {
  const skillGroups = [
    {
      category: "Languages",
      emoji: "💬",
      color: "bg-violet-300 dark:bg-violet-400",
      span: "md:col-span-7",
      tools: [
        { name: "Java", icon: <FaJava className="text-orange-500" /> },
        { name: "C", icon: <SiC className="text-blue-500" /> },
        { name: "JavaScript (ES6+)", icon: <FaJs className="text-amber-500" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-sky-500" /> },
        { name: "SQL", icon: <FaDatabase className="text-indigo-500" /> },
      ],
    },
    {
      category: "Frontend",
      emoji: "🎨",
      color: "bg-cyan-300 dark:bg-cyan-400",
      span: "md:col-span-5",
      tools: [
        { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-violet-600" /> },
        { name: "Material UI", icon: <SiMui className="text-blue-500" /> },
        { name: "Responsive Design", icon: <FaMobileAlt className="text-pink-500" /> },
      ],
    },
    {
      category: "Backend",
      emoji: "⚙️",
      color: "bg-emerald-300 dark:bg-emerald-400",
      span: "md:col-span-5",
      tools: [
        { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-slate-700" /> },
        { name: "RESTful API Design", icon: <FaServer className="text-teal-500" /> },
        {
          name: "JWT Authentication",
          icon: <span className="font-mono text-xs font-bold text-amber-500">JWT</span>,
        },
        { name: "MVC Architecture", icon: <FaSitemap className="text-rose-500" /> },
      ],
    },
    {
      category: "Databases",
      emoji: "🗄️",
      color: "bg-pink-300 dark:bg-pink-400",
      span: "md:col-span-7",
      tools: [
        { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
        { name: "MongoDB Atlas", icon: <FaCloud className="text-emerald-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Database Design", icon: <FaProjectDiagram className="text-indigo-500" /> },
        { name: "Query Optimization", icon: <FaSearch className="text-orange-500" /> },
      ],
    },
    {
      category: "Tools & Platforms",
      emoji: "🛠️",
      color: "bg-amber-300 dark:bg-amber-400",
      span: "md:col-span-7",
      tools: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-slate-900" /> },
        { name: "VS Code", icon: <VscVscode className="text-sky-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Render", icon: <FaCloud className="text-teal-500" /> },
        { name: "AWS", icon: <FaAws className="text-amber-600" /> },
        { name: "Cloudinary", icon: <FaCloudUploadAlt className="text-blue-500" /> },
      ],
    },
    {
      category: "Core Concepts",
      emoji: "🧠",
      color: "bg-orange-300 dark:bg-orange-400",
      span: "md:col-span-5",
      tools: [
        {
          name: "Data Structures & Algorithms",
          icon: <span className="font-mono text-xs font-bold text-rose-500">DSA</span>,
        },
        {
          name: "OOP",
          icon: <span className="font-mono text-xs font-bold text-violet-500">OOP</span>,
        },
        {
          name: "DBMS",
          icon: <span className="font-mono text-xs font-bold text-emerald-600">DB</span>,
        },
        {
          name: "Operating Systems",
          icon: <span className="font-mono text-xs font-bold text-purple-500">OS</span>,
        },
        {
          name: "Computer Networks",
          icon: <span className="font-mono text-xs font-bold text-blue-500">CN</span>,
        },
      ],
    },
  ];

  const totalTools = skillGroups.reduce((sum, g) => sum + g.tools.length, 0);

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-[#F7F5EE] dark:bg-[#181926] border-b-2 border-slate-900 dark:border-slate-400 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Eyebrow Label */}
        <ScrollReveal>
          <div className="flex items-center gap-3 font-mono text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-4">
            <span>Toolbox / 02</span>
            <div className="flex-1 h-[2px] bg-slate-900/20 dark:bg-slate-400/30" />
          </div>
        </ScrollReveal>

        {/* Headline + stats */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-14">
            <h2 className="font-sans font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white leading-[0.95]">
              What I{" "}
              <em className="font-serif italic font-normal underline decoration-violet-400 decoration-8 underline-offset-4">
                build
              </em>{" "}
              with
            </h2>

            <div className="flex gap-3">
              <div className="px-4 py-2 rounded-xl border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#16161e] shadow-hard-sm text-center">
                <div className="font-black text-2xl text-slate-900 dark:text-white leading-none">
                  {skillGroups.length}
                </div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">
                  Categories
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl border-2 border-slate-900 dark:border-slate-400 bg-violet-300 dark:bg-violet-400 shadow-hard-sm text-center">
                <div className="font-black text-2xl text-slate-950 leading-none">
                  {totalTools}
                </div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-900 mt-1">
                  Skills
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {skillGroups.map((group, idx) => (
            <div key={group.category} className={group.span}>
              <ScrollReveal delay={idx * 70}>
                <div
                  className={`relative h-full p-5 sm:p-6 rounded-2xl border-2 border-slate-900 dark:border-slate-300 ${group.color} text-slate-950 shadow-hard hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg transition-all duration-200`}
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span className="font-mono text-[11px] font-bold tracking-widest uppercase opacity-70">
                        {String(idx + 1).padStart(2, "0")} /{" "}
                        {String(skillGroups.length).padStart(2, "0")}
                      </span>
                      <h3 className="font-sans font-black text-2xl sm:text-3xl tracking-tight leading-none mt-1">
                        {group.category}
                      </h3>
                    </div>

                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/80 border-2 border-slate-900 text-xl select-none">
                      {group.emoji}
                    </span>
                  </div>

                  {/* Tool chips */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.tools.map((tool, i) => (
                      <div
                        key={tool.name}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-slate-900 bg-white text-slate-900 text-sm font-semibold shadow-hard-sm hover:scale-105 transition-transform duration-150 cursor-default ${i % 2 === 0 ? "hover:-rotate-2" : "hover:rotate-2"
                          }`}
                      >
                        <span className="text-base flex-shrink-0">{tool.icon}</span>
                        <span>{tool.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card footer */}
                  <div className="mt-5 pt-3 border-t-2 border-slate-900/80 flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-widest">
                    <span>{group.tools.length} tools</span>
                    <span>→</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}