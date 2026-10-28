import { Component, useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Credentials from "./components/Credentials";
import InteractiveSandbox from "./components/InteractiveSandbox";
import Contact from "./components/Contact";
import FloatingSocial from "./components/FloatingSocial";
import CustomCursor from "./components/CustomCursor";
import { ArrowUp } from "lucide-react";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("App error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-slate-900 font-sans text-slate-100">
          <div className="max-w-md w-full p-8 rounded-2xl border-2 border-slate-700 text-center bg-[#16161e]">
            <h1 className="text-2xl font-bold mb-4 text-rose-400">Something went wrong</h1>
            <p className="text-sm text-slate-400 mb-6">
              The application encountered an unexpected runtime exception.
            </p>
            <pre className="text-left text-xs font-mono bg-[#0d0e15] p-4 rounded-xl overflow-auto max-h-48 border border-white/5 text-slate-300">
              {this.state.error?.toString?.()}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-full text-sm font-bold border-2 border-slate-900 shadow-hard-sm cursor-pointer"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((window.scrollY / docHeight) * 100);
      }
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div
          id="root-container"
          className="min-h-screen bg-[#F7F5EE] text-slate-900 dark:bg-[#16161E] dark:text-[#C0CAF5] transition-colors duration-300 selection:bg-amber-400 selection:text-slate-950 relative overflow-x-hidden font-sans"
        >
          {/* Custom Cursor */}
          <CustomCursor />

          {/* Top Progress Bar */}
          <div
            className="fixed top-0 left-0 h-[3px] bg-amber-400 z-50 transition-all duration-100 shadow-[0_0_8px_rgba(250,204,21,0.8)]"
            style={{ width: `${scrollProgress}%` }}
          />

          {/* Background Grid Lines matching reference site */}
          <div
            className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(22, 22, 22, 0.08) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(22, 22, 22, 0.08) 1.5px, transparent 1.5px)",
              backgroundSize: "64px 64px",
            }}
          />

          {/* 1. Top Bar Navigation */}
          <Navbar />

          {/* 2. Hero Section with Hanging ID Card ("Feete se latakta & hilta hua ID card") */}
          <Hero />

          {/* 3. About Section (About / 01) */}
          <About />

          {/* 4. Toolbox / Skills Section (Toolbox / 02) */}
          <Skills />

          {/* 5. Experience Section (Experience / 03) */}
          <Experience />

          {/* 6. Selected Work / Projects Section (Selected work / 04) */}
          <Projects />

          {/* 7. The Rest of It / Credentials (Education & Certifications / 05) */}
          <Credentials />

          {/* 8. Interactive Project Sandbox Simulator */}
          <InteractiveSandbox />

          {/* 9. Closer / Contact Section with Rotating Machine Badge */}
          <Contact />

          {/* 10. Bottom Floating Dock */}
          <FloatingSocial />

          {/* Back to top floating button (matching reference site) */}
          {showTopBtn && (
            <button
              onClick={scrollToTop}
              className="fixed right-5 bottom-20 sm:bottom-6 z-40 w-11 h-11 rounded-full border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-[#16161e] text-slate-900 dark:text-slate-100 flex items-center justify-center font-bold shadow-hard hover:bg-amber-300 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-hard-lg active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          )}

          {/* Minimalist Neo-Brutalist Footer */}
          <footer className="py-8 pb-28 sm:pb-12 border-t-2 border-slate-900 dark:border-slate-400 bg-[#F7F5EE] dark:bg-[#16161E] text-slate-600 dark:text-slate-400 text-xs font-mono relative z-10">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                © {new Date().getFullYear()} <b>Aamir Khan</b>. All rights reserved.
              </div>
              <div className="flex items-center gap-4 text-xs font-mono font-bold">
                <a href="https://github.com/Khan786-Aamir" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 dark:hover:text-white underline decoration-amber-400 decoration-2 underline-offset-4">GitHub</a>
                <a href="https://www.linkedin.com/in/aamir-khan-278b71317" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 dark:hover:text-white underline decoration-amber-400 decoration-2 underline-offset-4">LinkedIn</a>
                <a href="https://x.com/AamirKhan453200" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 dark:hover:text-white underline decoration-amber-400 decoration-2 underline-offset-4">Twitter</a>
              </div>
              <div className="text-slate-500">
                Bareilly, Uttar Pradesh, India
              </div>
            </div>
          </footer>
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
