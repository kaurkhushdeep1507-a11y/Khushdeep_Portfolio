import { MouseEvent } from 'react';
import { ArrowDown, CornerDownRight } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 px-6 md:px-12 bg-app-bg"
    >
      {/* Background Subtle Grid Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex justify-between px-12">
        <div className="w-[1px] h-full bg-black"></div>
        <div className="w-[1px] h-full bg-black hidden sm:block"></div>
        <div className="w-[1px] h-full bg-black hidden md:block"></div>
        <div className="w-[1px] h-full bg-black"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        {/* Intro Meta Info */}
        <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
          <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 uppercase text-[10px] font-bold tracking-widest">
            <span className="w-1.5 h-1.5 bg-black dark:bg-stone-100 rounded-full animate-pulse"></span>
            BASED IN INDIA • AVAILABLE FOR DESIGN PROJECTS
          </div>
          
          <h2 className="text-black dark:text-white font-sans text-[12px] uppercase tracking-[0.16em] leading-relaxed font-extrabold">
            GRAPHIC DESIGNER <br />
            BRAND & VISUAL IDENTITY <br />
            SOCIAL & PACKAGING DESIGN
          </h2>

          <p className="text-stone-800 dark:text-stone-200 text-sm md:text-[14px] font-normal leading-relaxed max-w-sm">
            I create thoughtful visual designs that help brands look confident, consistent, and memorable — from logos and brand identities to social media, packaging, and print.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={(e) => handleScrollTo(e, '#logo-portfolio')}
              className="bg-black text-white hover:bg-stone-800 transition-colors uppercase text-xs font-semibold tracking-widest py-4 px-8 rounded-full flex items-center gap-2 group cursor-pointer shadow-md"
            >
              View Work 
              <CornerDownRight size={14} className="group-hover:translate-x-1 decoration-3 transition-transform" />
            </button>
            <button
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="border border-stone-400 text-black hover:bg-black hover:text-white transition-all uppercase text-xs font-semibold tracking-widest py-4 px-8 rounded-full cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Oversized Signature Title Display */}
        <div className="lg:col-span-8 flex flex-col justify-center order-1 lg:order-2">
          {/* Subtle Year Stamp */}
          <div className="flex justify-between items-end border-b border-black/5 pb-4 mb-4">
            <span className="font-mono text-[10px] text-stone-500">// SELECTED WORKS</span>
            <span className="font-mono text-[10px] text-stone-500"> GRAPHIC DESIGN • BRANDING</span>
          </div>

          <div className="pr-4">
            <h1 className="font-serif text-[10vw] md:text-[8vw] lg:text-[clamp(4rem,6.5vw,5.5rem)] xl:text-[6rem] leading-none text-black dark:text-white tracking-tight select-none font-bold">
              KHUSHDEEP
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-3 pr-4">
            <h1 className="font-serif text-[10vw] md:text-[8vw] lg:text-[clamp(4rem,6.5vw,5.5rem)] xl:text-[6rem] leading-none text-black dark:text-white tracking-tight font-bold translate-x-1">
              KAUR
            </h1>
            <span className="font-serif text-[5vw] md:text-[2.8vw] lg:text-[2vw] text-stone-600 dark:text-stone-300 italic font-medium pr-4 select-none leading-none pb-2">
              Graphic Designer
            </span>
          </div>

          {/* Large Portfolio Subtext Banner */}
          <div className="mt-8 relative overflow-hidden glass-card border-l-4 border-black dark:border-white p-5 shadow-sm backdrop-blur-md rounded-r-[24px] rounded-l-none">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] font-mono text-stone-900 dark:text-stone-100 leading-relaxed font-bold">
              Thoughtful design for brands with something to say.
            </p>
          </div>
        </div>
      </div>

      {/* Bounce Anchor Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => handleScrollTo(e, '#about-me')}
          className="text-stone-400 hover:text-black transition-colors"
          aria-label="Scroll Down"
        >
          <ArrowDown size={18} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
