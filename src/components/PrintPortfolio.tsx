import { useState } from 'react';
import { MapPin, Eye, FileText, X, ZoomIn } from 'lucide-react';

// Card images — Print Media folder
const print1 = new URL('../../assets/images/Print Media/Print_Media.jpeg', import.meta.url).href;
const print2 = new URL('../../assets/images/Print Media/Print_Media-2.png', import.meta.url).href;
const print3 = new URL('../../assets/images/Print Media/Print_Media-3.png', import.meta.url).href;
const print4 = new URL('../../assets/images/Print Media/Print_Media-4.png', import.meta.url).href;
const print5 = new URL('../../assets/images/Print Media/Print_Media-5.jpeg', import.meta.url).href;
const print6 = new URL('../../assets/images/Print Media/Print_Media-6.jpeg', import.meta.url).href;

// Lightbox detail images — Print Media/back folder
const print1Back = new URL('../../assets/images/Print Media/back/Print_Media.jpeg', import.meta.url).href;
const print2Back = new URL('../../assets/images/Print Media/back/Print_Media-2.png', import.meta.url).href;
const print3Back = new URL('../../assets/images/Print Media/back/Print_Media-3.png', import.meta.url).href;
const print4Back = new URL('../../assets/images/Print Media/back/Print_Media-4.png', import.meta.url).href;
const print5Back = new URL('../../assets/images/Print Media/back/Print_Media-5.jpeg', import.meta.url).href;
const print6Back = new URL('../../assets/images/Print Media/back/Print_Media-6.jpeg', import.meta.url).href;

const PRINT_MEDIA_ITEMS = [
  {
    id: 1,
    imageUrl: print1,
    detailImageUrl: print1Back,
    title: "Pure Centella Skincare Advertisement",
    type: "Pamphlet",
    description: "A modern skincare advertisement created to showcase Pure Centella Toner in a fresh and appealing way. The design combines clean visuals, natural elements, and clear typography to highlight the product's benefits. A balanced layout and premium presentation help attract attention while building trust and strengthening the brand image.",
    specs: "Adobe Photoshop / CMYK / 300 DPI"
  },
  {
    id: 2,
    imageUrl: print2,
    detailImageUrl: print2Back,
    title: "Travel Promotion Poster Design",
    type: "Brochure",
    description: "A vibrant travel advertisement created to showcase exciting destinations and memorable travel experiences. The design combines attractive visuals, clear information, and a well-balanced layout to capture attention and inspire exploration. Engaging typography and a strong call-to-action help communicate the travel offer while encouraging people to plan their next journey.",
    specs: "Adobe Photoshop / CMYK / 300 DPI"
  },
  {
    id: 3,
    imageUrl: print3,
    detailImageUrl: print3Back,
    title: "Sprinto Shoe Advertisement",
    type: "Flyer",
    description: "A modern footwear advertisement created to showcase Sprinto sneakers in a stylish and engaging way. The design combines bold typography, a warm color palette, and a clean layout to highlight the product and promotional offer. Strong visual hierarchy and balanced composition help attract attention, improve visibility, and strengthen brand presence.",
    specs: "Adobe Photoshop / CMYK / 300 DPI"
  },
  {
    id: 4,
    imageUrl: print4,
    detailImageUrl: print4Back,
    title: "Premium Real Estate Billboard",
    type: "Billboard",
    description: "A visually striking outdoor advertising concept created to promote premium residential properties. The design blends bold typography, elegant color harmony, and high-quality architectural imagery to capture attention instantly. Carefully structured for maximum readability and brand recognition, making it an ideal solution for real estate marketing and property launch campaigns.",
    specs: "Adobe Photoshop / Print Ready / CMYK / 300 DPI"
  },
  {
    id: 5,
    imageUrl: print5,
    detailImageUrl: print5Back,
    title: "Neon Nights Festival Campaign",
    type: "Poster",
    description: "Vibrant neon-inspired poster series for an electronic music festival. Features fluorescent ink overlays and holographic foil accents that shift under light.",
    specs: "Neon Spot Colors / 250gsm Gloss / Foil Stamped"
  },
  {
    id: 6,
    imageUrl: print6,
    detailImageUrl: print6Back,
    title: "Minimalist Brand Identity System",
    type: "Standee",
    description: "Ultra-clean corporate identity package with debossed logos on premium cotton paper. Includes letterhead, envelope, and business card designs with consistent spacing ratios.",
    specs: "Crane's Cotton / Deboss / Letterpress / 600gsm"
  }
];

export default function PrintPortfolio() {
  const [selectedItem, setSelectedItem] = useState(null);

  const openLightbox = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="print-media" className="py-24 bg-app-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <h2 className="font-serif text-3xl md:text-5xl text-black font-semibold tracking-tight">
              Print Media & Billboards
            </h2>
          </div>
        </div>

        {/* Print Media Grid Layout - 6 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINT_MEDIA_ITEMS.map((item) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover p-4 flex flex-col justify-between text-left group cursor-pointer"
              onClick={() => openLightbox(item)}
            >
              {/* Photo Area with zoom scale */}
              <div className="aspect-[3/4] bg-white/10 overflow-hidden relative border border-white/20 mb-4 group-hover:scale-[1.01] transition-transform rounded-2xl">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Hover Overlay with Eye Icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Eye size={16} className="text-black" />
                    <span className="text-xs font-mono font-semibold text-black uppercase tracking-wider">View Details</span>
                  </div>
                </div>

                {/* Type Label */}
                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-white text-[8px] font-mono uppercase py-1 px-2.5 tracking-widest font-semibold rounded-lg shadow-sm">
                  {item.type}
                </span>
              </div>

              {/* Specs and Details */}
              <div className="pt-2">
                <h3 className="font-serif text-sm font-bold text-black border-stone-100 mb-1.5 leading-tight">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between text-stone-600 text-[10px] font-mono pt-2 border-t border-black/5">
                  <span className="flex items-center gap-0.5 font-semibold text-stone-500">
                    CMD: PRINT <Eye size={10} className="ml-1 text-black" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Large City display mock graphic */}
        <div className="mt-12 glass-card p-8 flex flex-col md:flex-row justify-between items-center text-left gap-6 shadow-sm border border-white/50">
          <div className="flex items-center gap-4">
            <span className="p-3 bg-black text-white rounded-full shadow-sm">
              <MapPin size={20} />
            </span>
            <div>
              <p className="text-[10px] font-mono text-stone-500 uppercase tracking-widest leading-none font-semibold">
                // Campaign Enclosure
              </p>
              <h4 className="text-sm font-bold text-black uppercase tracking-wider mt-1.5">
                URBAN BILLBOARD PLACEMENT SPECIFICATIONS
              </h4>
              <p className="text-stone-700 text-xs font-light leading-relaxed mt-0.5">
                Configured with dynamic grid offsets to guarantee strong legibility from extreme driving angles and 100+ meters distance.
              </p>
            </div>
          </div>
          <p className="text-[10px] font-mono text-stone-500 uppercase tracking-widest font-bold">
            BEHANCE APPRECIATED · 2026_EDITION
          </p>
        </div>

      </div>

      {/* Lightbox Popup Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal Content */}
          <div 
            className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-black/80 hover:bg-black text-white rounded-full transition-colors shadow-lg"
            >
              <X size={20} />
            </button>

            {/* Image Side - same aspect ratio as card */}
            <div className="md:w-1/2 bg-stone-100 flex items-center justify-center p-6 md:p-8">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={selectedItem.detailImageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                {/* Type Badge on Image */}
                <span className="absolute top-4 left-4 bg-black/90 backdrop-blur-sm text-white text-[10px] font-mono uppercase py-1.5 px-3 tracking-widest font-semibold rounded-lg">
                  {selectedItem.type}
                </span>
              </div>
            </div>

            {/* Details Side */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center overflow-y-auto">
              <span className="text-stone-400 text-[10px] font-mono uppercase tracking-widest mb-3">
                // PROJECT #{selectedItem.id.toString().padStart(2, '0')}
              </span>

              <h2 className="font-serif text-2xl md:text-3xl text-black font-bold tracking-tight mb-4 leading-tight">
                {selectedItem.title}
              </h2>

              <div className="w-12 h-0.5 bg-black mb-6" />

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-[10px] font-mono text-stone-400 uppercase tracking-widest font-semibold mb-2">
                  Description
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {/* Specs */}
              <div className="mb-6">
                <h4 className="text-[10px] font-mono text-stone-400 uppercase tracking-widest font-semibold mb-2">
                  Technical Specs
                </h4>
                <p className="text-stone-800 text-sm font-mono font-medium">
                  {selectedItem.specs}
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}