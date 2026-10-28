import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-y-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#16161e] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Eyebrow Label */}
        <ScrollReveal>
          <div className="flex items-center gap-3 font-mono text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-4">
            <span>About / 01</span>
            <div className="flex-1 h-[2px] bg-slate-900/20 dark:bg-slate-400/30" />
          </div>
        </ScrollReveal>

        {/* Section Headline with Editorial Serif Emphasis */}
        <ScrollReveal delay={100}>
          <h2 className="font-sans font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white leading-[0.95] max-w-xl mb-12 sm:mb-16">
            Oh, there's a{" "}
            <em className="font-serif italic font-normal underline decoration-amber-400 decoration-8 underline-offset-4">
              person
            </em>{" "}
            here.
          </h2>
        </ScrollReveal>

        {/* Main Grid: Card & Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start mb-16">
          {/* Left Block: Bold Initial Card */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <ScrollReveal delay={150}>
              <div className="relative group w-64 sm:w-72 aspect-[4/5] p-6 rounded-2xl bg-amber-300 dark:bg-amber-400 text-slate-950 border-2 border-slate-900 dark:border-slate-300 shadow-hard hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-hard-lg transition-all duration-200 flex flex-col justify-between">
                <span className="absolute -right-3 -top-6 font-serif text-5xl font-normal text-slate-900 select-none">
                  *
                </span>

                <div className="flex items-center justify-between text-xs font-mono font-bold tracking-widest uppercase">
                  <span>DEV PROFILE</span>
                  <span>INDIA</span>
                </div>

                <div className="my-auto">
                  <div className="font-sans font-black text-7xl sm:text-8xl tracking-tighter leading-none">
                    AK<span className="font-serif italic font-normal text-slate-900">.</span>
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-slate-900 text-xs font-mono font-bold tracking-wider uppercase">
                  The engineer behind the code
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Copy: Editorial Biography */}
          <div className="md:col-span-7 space-y-5 text-slate-700 dark:text-slate-300">
            <ScrollReveal delay={200}>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Full-Stack Software Engineer · Systems Builder
              </p>
            </ScrollReveal>

            <ScrollReveal delay={260}>
              <p className="font-sans text-xl sm:text-2xl font-medium text-slate-900 dark:text-white leading-snug">
                I'm Aamir. I build web applications and distributed architectures, obsess over tiny details, and turn ideas into high-performance digital systems.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                I love the entire lifecycle of engineering software — from the first design architectural diagram to database query optimizations and production deployment. Somewhere between crafting modular React components, handling edge API cases, and debugging at 2 AM, I'm constantly learning what makes software truly robust.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={380}>
              <div className="pt-4 border-t-2 border-slate-200 dark:border-slate-800 flex items-start gap-3 text-sm font-medium text-slate-900 dark:text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-slate-900 mt-1.5 flex-shrink-0" />
                <span>
                  <b className="font-mono text-xs font-bold uppercase tracking-wider mr-1.5">Open to</b>
                  Full-time engineering roles, high-impact internships, and challenging problems.
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Callout: Outside the terminal? */}
        <div className="pt-10 border-t-2 border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-4">
            <ScrollReveal delay={100}>
              <h3 className="font-sans font-bold text-2xl text-slate-900 dark:text-white">
                Outside the terminal?
              </h3>
            </ScrollReveal>
          </div>

          <div className="md:col-span-8 space-y-4">
            <ScrollReveal delay={180}>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Solving Data Structures & Algorithms challenges, studying high-scale system design, exploring open-source developer tooling, and believing that great software is built on empathy, rigorous testing, and clean architecture.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <ul className="flex flex-wrap gap-2 pt-2">
                <li className="px-3 py-1 rounded-md border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#1a1b26] font-mono text-xs font-bold text-slate-800 dark:text-slate-200 shadow-hard-sm">
                  Problem Solver
                </li>
                <li className="px-3 py-1 rounded-md border-2 border-slate-900 dark:border-slate-400 bg-amber-300 dark:bg-amber-400 text-slate-950 font-mono text-xs font-bold shadow-hard-sm">
                  Full-Stack Architect
                </li>
                <li className="px-3 py-1 rounded-md border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#1a1b26] font-mono text-xs font-bold text-slate-800 dark:text-slate-200 shadow-hard-sm">
                  Continuous Learner
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
