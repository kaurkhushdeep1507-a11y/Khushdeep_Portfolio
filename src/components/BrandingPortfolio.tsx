import { useState } from 'react';
import { BRANDING_PROJECTS } from '../data';
import { Copy, Check, Eye, BookOpen, Layers } from 'lucide-react';

export default function BrandingPortfolio() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const activeProj = BRANDING_PROJECTS[activeProjectIndex];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => {
      setCopiedColor(null);
    }, 2000);
  };

  return (
    <section id="branding-projects" className="py-24 bg-[#eaeaea] relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-stone-500 text-xs font-mono uppercase tracking-[0.2em] block mb-2">// IDENTITY BLUEPRINTS</span>
            <h2 className="font-serif text-3xl md:text-5xl text-black font-semibold tracking-tight">
              Branding Case Studies
            </h2>
          </div>
          
          {/* Quick Swapper tab links */}
          <div className="flex items-center gap-1.5 border border-white/50 p-1 bg-white/30 backdrop-blur-md rounded-full shadow-sm">
            {BRANDING_PROJECTS.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setActiveProjectIndex(idx)}
                className={`px-5 py-2 text-xs font-mono uppercase tracking-widest transition-all rounded-full cursor-pointer ${
                  activeProjectIndex === idx
                    ? 'bg-black text-white font-semibold shadow-sm'
                    : 'text-stone-600 hover:text-black hover:bg-white/40'
                }`}
              >
                Project 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start glass-card p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
          
          {/* left side specs column */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div>
              <span className="text-stone-500 text-[10px] font-mono uppercase tracking-widest mb-1.5 block flex items-center gap-1.5">
                <Layers size={10} /> {activeProj.category}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                {activeProj.title}
              </h3>
              <p className="text-stone-700 text-sm font-light leading-relaxed mb-6">
                {activeProj.summary}
              </p>
            </div>

            {/* Brand Story block */}
            <div className="bg-white/20 backdrop-blur-sm p-6 border-l-4 border-black rounded-r-2xl border border-white/30 border-l-0">
              <h4 className="text-stone-800 text-xs uppercase font-bold tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen size={12} /> The Identity Narrative
              </h4>
              <p className="text-stone-700 text-xs font-light leading-relaxed">
                {activeProj.story}
              </p>
            </div>

            {/* copyable Color Palette Section */}
            <div>
              <h4 className="text-stone-500 text-[10px] font-mono uppercase tracking-widest mb-4">
                // SYSTEM PALETTES (Click Hex to Copy)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
                {activeProj.colorPalette.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => handleCopyColor(color.hex)}
                    className="p-3 bg-white/25 border border-white/50 flex items-center justify-between text-left group hover:bg-white/45 transition-all duration-300 rounded-2xl w-full cursor-pointer hover:scale-[1.02] shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-6 h-6 rounded-lg border border-white/40 shadow-inner"
                        style={{ backgroundColor: color.hex }}
                      ></span>
                      <div>
                        <p className="text-[10px] font-bold text-black leading-none">{color.name}</p>
                        <p className="text-[9px] font-mono text-stone-600 mt-1 leading-none">{color.hex}</p>
                      </div>
                    </div>
                    <span>
                      {copiedColor === color.hex ? (
                        <Check size={12} className="text-emerald-700" />
                      ) : (
                        <Copy size={11} className="text-stone-500 group-hover:text-black transition-colors" />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Typography Section */}
            <div>
              <h4 className="text-stone-500 text-[10px] font-mono uppercase tracking-widest mb-3">
                // BRAND TYPOGRAPHY BLUEPRINT
              </h4>
              <ul className="space-y-2 text-xs font-light text-stone-700 bg-white/20 backdrop-blur-sm p-4 border border-white/30 rounded-2xl">
                {activeProj.typography.map((font, idx) => (
                  <li key={idx} className="flex justify-between items-center py-1.5 border-b border-black/5 last:border-b-0">
                    <span className="font-mono text-stone-500">Spec_0{idx + 1}</span>
                    <span className="font-medium text-black">{font}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* right side mockups display column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Primary Cover Image Banner */}
            <div className="overflow-hidden bg-white/10 border border-white/40 img-zoom-wrapper aspect-[16/10] relative group rounded-2xl shadow-sm">
              <img
                src={activeProj.imageUrl}
                alt={`${activeProj.title} Stationery Cover`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

            </div>

            {/* Secondary Premium Mockup */}
            <div className="overflow-hidden bg-white/10 border border-white/40 img-zoom-wrapper aspect-[16/10] relative group rounded-2xl shadow-sm">
              <img
                src={activeProj.mockupUrl}
                alt={`${activeProj.title} Premium Box Mockup`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Spec footer quote */}
          </div>

        </div>
      </div>
    </section>
  );
}
