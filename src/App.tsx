import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import LogoPortfolio from './components/LogoPortfolio';
import BrandingPortfolio from './components/BrandingPortfolio';
import SocialMediaPortfolio from './components/SocialMediaPortfolio';
import PackagingPortfolio from './components/PackagingPortfolio';
import PrintPortfolio from './components/PrintPortfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import BackToTop from './components/BackToTop';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark';
    }
    return false;
  });

  useEffect(() => {
    // Elegant agency timing loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  if (loading) {
    return (
      <div 
        id="preloader" 
        className="fixed inset-0 z-50 bg-stone-950 flex flex-col justify-center items-center text-white select-none"
      >
        <div className="flex flex-col items-center gap-4 text-center max-w-sm px-6">
          {/* Symmetrical logo mark blinking */}
          <div className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-white mb-2 animate-pulse uppercase">
            KHUSHDEEP KAUR<span className="text-amber-500">.</span>
          </div>
          
          <div className="w-12 h-[1px] bg-stone-700 mb-1"></div>
          
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-300 font-medium">
            KHUSHDEEP KAUR DESIGN
          </div>
          <div className="text-[9px] font-sans italic text-stone-400 uppercase tracking-widest">
            Loading Workspace...
          </div>

          <div className="w-36 bg-stone-900 h-[2px] mt-4 overflow-hidden relative rounded-full border border-stone-800/40">
            <div className="bg-amber-500 h-full w-12 absolute rounded-full animate-[loading-bar_1.5s_infinite_linear] shadow-[0_0_8px_#f59e0b]"></div>
          </div>
        </div>

        {/* CSS animation inline helper for generic preloader bar */}
        <style>{`
          @keyframes loading-bar {
            0% { left: -48px; }
            100% { left: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-app-bg text-black">
      {/* Absolute luxury noise backdrop overlay */}
      <div className="noise-overlay pointer-events-none"></div>

      {/* Structured Single View Hierarchy */}
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      
      <main className="relative">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Resume />
        <SectionDivider />
        <LogoPortfolio />
        <SectionDivider />
        <BrandingPortfolio />
        <SectionDivider />
        <SocialMediaPortfolio />
        <SectionDivider />
        <PackagingPortfolio />
        <SectionDivider />
        <PrintPortfolio />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
