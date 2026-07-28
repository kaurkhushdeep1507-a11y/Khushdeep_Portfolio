import { useState } from 'react';
import { LogoItem } from '../types';
import { Maximize2, X, Sparkles, Calendar, UserCheck } from 'lucide-react';

const LOGO_ITEMS: LogoItem[] = [
  {
    id: 1,
    title: "Brand Identity 1",
    client: "Client 1",
    year: "2024",
    concept: "Minimalist geometric mark representing forward motion and innovation.",
    imageUrl: "assets/images/logo/images-1.jpg"
  },
  {
    id: 2,
    title: "Brand Identity 2",
    client: "Client 2",
    year: "2024",
    concept: "Clean typographic lockup with subtle architectural undertones.",
    imageUrl: "assets/images/logo/images-2.jpg"
  },
  {
    id: 3,
    title: "Brand Identity 3",
    client: "Client 3",
    year: "2024",
    concept: "Abstract monogram built on golden ratio proportions.",
    imageUrl: "assets/images/logo/images-3.jpg"
  },
  {
    id: 4,
    title: "Brand Identity 4",
    client: "Client 4",
    year: "2024",
    concept: "Symbolic mark drawing from organic natural forms and symmetry.",
    imageUrl: "assets/images/logo/images-4.jpg"
  },
  {
    id: 5,
    title: "Brand Identity 5",
    client: "Client 5",
    year: "2024",
    concept: "Bold wordmark with refined letter spacing and custom ligatures.",
    imageUrl: "assets/images/logo/images-5.jpg"
  },
  {
    id: 6,
    title: "Brand Identity 6",
    client: "Client 6",
    year: "2024",
    concept: "Dynamic emblem combining negative space and structural balance.",
    imageUrl: "assets/images/logo/images-6.jpg"
  }
];

export default function LogoPortfolio() {
  const [selectedLogo, setSelectedLogo] = useState<LogoItem | null>(null);

  return (
    <section id="logo-portfolio" className="py-24 bg-app-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-stone-500 text-xs font-mono uppercase tracking-widest block mb-2">// CORPORATE MARKS</span>
            <h2 className="font-serif text-3xl md:text-5xl text-black font-semibold tracking-tight">
              Logo Design Portfolio
            </h2>
          </div>
          <p className="text-stone-500 text-xs md:text-sm font-light max-w-xs md:text-right">
            Strict anatomical grid shapes built upon solid geometry. Click any card to preview full structural philosophy.
          </p>
        </div>

        {/* 6 Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOGO_ITEMS.map((logo) => (
            <div
              key={logo.id}
              onClick={() => setSelectedLogo(logo)}
              className="group glass-card glass-card-hover p-6 flex flex-col justify-between cursor-pointer relative"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 size={14} className="text-stone-500 hover:text-black" />
              </div>

              {/* Logo Image Area */}
              <div className="w-full aspect-square flex items-center justify-center overflow-hidden bg-white/40 border border-white/50 p-8 mb-6 group-hover:scale-[1.02] transition-transform duration-500 rounded-2xl">
                <img
                  src={logo.imageUrl}
                  alt={logo.title}
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text Info */}
              <div className="text-left">
                <span className="text-[9px] font-mono text-stone-500 block tracking-widest mb-1 uppercase">
                  {logo.client}
                </span>
                <h3 className="font-serif text-md font-bold text-stone-900 group-hover:text-black transition-colors">
                  {logo.title}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-1 mt-1 font-light">
                  {logo.concept}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Popup Preview Modal */}
        {selectedLogo && (
          <div
            id="logo-popup-dialog"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedLogo(null)}
          >
            <div
              className="bg-app-bg max-w-3xl w-full text-black rounded-none overflow-hidden relative border border-stone-200 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedLogo(null)}
                className="absolute top-6 right-6 text-stone-500 hover:text-black p-2 bg-stone-100 hover:bg-stone-200 transition-colors z-10"
                aria-label="Close Preview"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Visual Area */}
                <div className="md:col-span-7 bg-white p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-stone-200 aspect-square">
                  <img
                    src={selectedLogo.imageUrl}
                    alt={selectedLogo.title}
                    className="max-w-xs max-h-xs object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Conceptual Detail Area */}
                <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-between text-left">
                  <div>
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block mb-1">
                      // LOGO SPECIFICATION SHEET
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-black mb-6">
                      {selectedLogo.title}
                    </h3>

                    {/* Metadata indicators */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="p-1.5 bg-stone-200 text-stone-700">
                          <UserCheck size={14} />
                        </span>
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-stone-400 font-semibold">Client Partner</p>
                          <p className="text-xs text-stone-800 font-medium">{selectedLogo.client}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="p-1.5 bg-stone-200 text-stone-700">
                          <Calendar size={14} />
                        </span>
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-stone-400 font-semibold">Project Year</p>
                          <p className="text-xs text-stone-800 font-medium">{selectedLogo.year}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-stone-200 pt-6">
                      <p className="text-xs uppercase font-mono text-stone-400 tracking-wider mb-2 flex items-center gap-1.5">
                        <Sparkles size={11} /> Conceptual Blueprint
                      </p>
                      <p className="text-stone-700 text-xs font-light leading-relaxed">
                        {selectedLogo.concept}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 flex flex-col gap-2">
                    <button
                      onClick={() => {
                        alert(`Requesting vector blueprints for ${selectedLogo.title} directly from Khushdeep Kaur!`);
                      }}
                      className="w-full bg-black text-white hover:bg-stone-800 transition-colors py-3 text-[10px] font-semibold uppercase tracking-widest text-center cursor-pointer"
                    >
                      Enquire For Similar Mark
                    </button>
                    <button
                      onClick={() => setSelectedLogo(null)}
                      className="w-full border border-stone-300 text-stone-700 hover:text-black hover:border-black transition-colors py-3 text-[10px] font-semibold uppercase tracking-widest text-center cursor-pointer"
                    >
                      Back to Gallery
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}