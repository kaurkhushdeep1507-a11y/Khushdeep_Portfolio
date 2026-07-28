import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#logo-portfolio' },
    { label: 'Branding', href: '#branding-projects' },
    { label: 'Socials', href: '#social-media' },
    { label: 'Packaging', href: '#packaging' },
    { label: 'Print', href: '#print-media' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about-me' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 90;
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
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-8 py-4"
    >
      <div 
        className={`mx-auto w-full transition-all duration-500 ${
          scrolled 
            ? 'max-w-6xl bg-white/80 backdrop-blur-xl border border-stone-200/50 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-full py-2.5 px-6 md:px-10' 
            : 'max-w-7xl bg-transparent py-4 px-2'
        }`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, '#navbar')}
            className="flex flex-col items-start leading-none group"
          >
            <span className="font-serif text-sm md:text-base font-black tracking-[0.12em] text-stone-950 dark:text-white uppercase group-hover:text-stone-800 dark:group-hover:text-stone-300 transition-colors">
              KHUSHDEEP KAUR<span className="text-stone-400">.</span>
            </span>
            <span className="font-mono text-[7px] md:text-[8px] uppercase tracking-[0.18em] text-stone-500 mt-1 font-semibold">
              Graphic Designer
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6 font-mono text-[10px] tracking-[0.16em] uppercase text-stone-500">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="relative py-1 hover:text-black hover:underline underline-offset-[6px] decoration-stone-900 transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Elegant Minimalist Theme Toggler */}
            <button
              onClick={toggleDarkMode}
              className="p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 rounded-full transition-all cursor-pointer bg-stone-150/40 dark:bg-white/5 active:scale-90 flex items-center justify-center border border-stone-200/40 dark:border-white/5"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun size={13} className="text-amber-500 animate-[spin_10s_linear_infinite]" />
              ) : (
                <Moon size={13} className="text-stone-600" />
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center gap-1 bg-stone-900 text-white hover:bg-stone-850 px-5 py-2 text-[10px] font-mono font-bold uppercase tracking-[0.16em] hover:scale-[1.03] transition-all rounded-full shadow-sm"
            >
              Inquire <ArrowUpRight size={10} />
            </a>
          </div>

          {/* Mobile Actions Group (Theme + Menu) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 rounded-full transition-all cursor-pointer bg-stone-150/40 dark:bg-white/5 active:scale-90 flex items-center justify-center border border-stone-200/40 dark:border-white/5"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun size={14} className="text-amber-500 animate-[spin_10s_linear_infinite]" />
              ) : (
                <Moon size={14} className="text-stone-700" />
              )}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none p-1.5 hover:bg-stone-100 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-4 top-[80px] bg-white/95 backdrop-blur-2xl z-40 transition-all duration-500 lg:hidden rounded-2xl border border-stone-200/60 shadow-[0_15px_40px_rgba(0,0,0,0.12)] ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-between p-6 gap-6">
          <ul className="grid grid-cols-2 gap-4 text-xs font-mono tracking-widest text-stone-850 py-2 border-b border-stone-100">
            {navLinks.map((link) => (
              <li key={link.label} className="border-b border-stone-50 pb-2">
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block hover:translate-x-1 hover:text-black transition-all font-medium py-1"
                >
                  // {link.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono text-stone-400 uppercase tracking-widest font-semibold">// Availability</span>
              <p className="text-[10px] sm:text-xs font-bold text-stone-900 flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/50 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Accepting Branding Enquiries
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="w-full flex justify-center items-center gap-2 bg-stone-950 text-white hover:bg-stone-900 py-3 text-[10px] font-mono font-bold uppercase tracking-[0.16em] rounded-xl shadow-md transition-colors"
            >
              Start Project
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
