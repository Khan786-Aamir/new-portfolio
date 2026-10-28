import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 border-y-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#16161e] scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Eyebrow */}
        <ScrollReveal>
          <div className="flex items-center gap-3 font-mono text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-4">
            <span>About / 01</span>
            <div className="flex-1 h-[2px] bg-slate-900/20 dark:bg-slate-400/30" />
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={100}>
          <h2 className="font-sans font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white leading-[0.95] max-w-3xl mb-12 sm:mb-16">
            Just a{" "}
            <em className="font-serif italic font-normal underline decoration-amber-400 decoration-8 underline-offset-4">
              curious developer
            </em>{" "}
            trying to make the internet a little cooler.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start mb-16">
          {/* Left: Terminal Card */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <ScrollReveal delay={150}>
              <div className="relative group w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden bg-slate-900 text-slate-100 border-2 border-slate-900 dark:border-slate-300 shadow-hard hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg transition-all duration-200">
                {/* Floating emoji */}
                <span className="absolute right-3 -top-1 text-4xl z-10 select-none">
                  ⚡
                </span>

                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-violet-400 dark:bg-violet-500 border-b-2 border-slate-900 dark:border-slate-300">
                  <span className="w-3 h-3 rounded-full bg-rose-400 border border-slate-900" />
                  <span className="w-3 h-3 rounded-full bg-amber-300 border border-slate-900" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 border border-slate-900" />
                  <span className="ml-3 font-mono text-xs font-bold tracking-widest uppercase text-slate-950">
                    aamir.js
                  </span>
                </div>

                {/* Code body */}
                <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-1">
                  <div>
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-cyan-300">aamir</span>{" "}
                    <span className="text-slate-400">=</span>{" "}
                    <span className="text-slate-300">{"{"}</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-pink-300">role</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-emerald-300">"Full Stack Dev"</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-pink-300">stack</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-slate-300">[</span>
                    <span className="text-emerald-300">"MERN"</span>
                    <span className="text-slate-400">,</span>{" "}
                    <span className="text-emerald-300">"AI"</span>
                    <span className="text-slate-300">]</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-pink-300">location</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-emerald-300">"India 🇮🇳"</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-pink-300">coffee</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-amber-300">Infinity</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-pink-300">bugs</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-amber-300">"features"</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-pink-300">status</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-emerald-300">"building cool stuff"</span>
                    <span className="inline-block w-2 h-4 ml-1 align-middle bg-cyan-300 animate-pulse" />
                  </div>

                  <div className="text-slate-300">{"}"}</div>
                </div>

                {/* Footer chips */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t-2 border-slate-700 flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-md bg-cyan-300 text-slate-900 border-2 border-slate-900 font-mono text-[10px] font-bold uppercase tracking-wider">
                    React
                  </span>
                  <span className="px-2 py-1 rounded-md bg-emerald-300 text-slate-900 border-2 border-slate-900 font-mono text-[10px] font-bold uppercase tracking-wider">
                    Node.js
                  </span>
                  <span className="px-2 py-1 rounded-md bg-pink-300 text-slate-900 border-2 border-slate-900 font-mono text-[10px] font-bold uppercase tracking-wider">
                    MongoDB
                  </span>
                  <span className="px-2 py-1 rounded-md bg-violet-300 text-slate-900 border-2 border-slate-900 font-mono text-[10px] font-bold uppercase tracking-wider">
                    AI
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content */}
          <div className="md:col-span-7 space-y-6 text-slate-700 dark:text-slate-300">
            <ScrollReveal delay={200}>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Full Stack Developer • MERN Stack • AI Enthusiast
              </p>
            </ScrollReveal>

            <ScrollReveal delay={260}>
              <p className="font-sans text-xl sm:text-2xl font-medium text-slate-900 dark:text-white leading-snug">
                Hey! I'm <strong>Aamir Khan</strong>. I build fast,
                responsive, and user-friendly web applications that solve real
                problems. I love creating things that people enjoy using—not
                just things that look cool.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <p className="text-sm sm:text-base leading-relaxed">
                My coding journey started with simple HTML pages and somehow
                evolved into React, Node.js, MongoDB, APIs, AI integrations, and
                countless late-night debugging sessions. I genuinely enjoy
                learning new technologies, improving performance, and building
                products from scratch.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={380}>
              <p className="text-sm sm:text-base leading-relaxed">
                Fun fact? I spend more time convincing CSS to behave than
                convincing people. My browser usually has 40+ tabs open, half of
                them are Stack Overflow, and the other half are "I'll read this
                later" articles... which I never do. 😅
              </p>
            </ScrollReveal>

            <ScrollReveal delay={440}>
              <div className="pt-5 border-t-2 border-slate-200 dark:border-slate-700 flex gap-3 items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 mt-2 border border-slate-900"></span>

                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  <span className="font-mono uppercase text-xs mr-2">
                    Currently Looking For
                  </span>
                  Exciting internships, impactful projects, startup
                  opportunities, and teammates who enjoy building awesome
                  products as much as I do.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t-2 border-slate-200 dark:border-slate-700 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <ScrollReveal delay={100}>
              <h3 className="font-bold text-2xl text-slate-900 dark:text-white">
                When I'm not coding...
              </h3>
            </ScrollReveal>
          </div>

          <div className="md:col-span-8 space-y-4">
            <ScrollReveal delay={180}>
              <p className="text-sm sm:text-base leading-relaxed">
                You'll probably find me solving DSA problems, exploring AI
                tools, learning something new, watching tech videos, planning my
                next startup idea, or redesigning my portfolio for the 100th
                time because apparently perfection is a never-ending side
                quest. 😂
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <ul className="flex flex-wrap gap-3 pt-2">
                <li className="px-3 py-1 rounded-md border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#1a1b26] font-mono text-xs font-bold">
                  🚀 Builds Cool Stuff
                </li>

                <li className="px-3 py-1 rounded-md border-2 border-slate-900 dark:border-slate-400 bg-amber-300 dark:bg-amber-400 font-mono text-xs font-bold text-slate-900">
                  ☕ Coffee Powered
                </li>

                <li className="px-3 py-1 rounded-md border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#1a1b26] font-mono text-xs font-bold">
                  🐛 Professional Bug Creator
                </li>

                <li className="px-3 py-1 rounded-md border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#1a1b26] font-mono text-xs font-bold">
                  💡 Always Learning
                </li>

                <li className="px-3 py-1 rounded-md border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#1a1b26] font-mono text-xs font-bold">
                  🎯 Problem Solver
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}