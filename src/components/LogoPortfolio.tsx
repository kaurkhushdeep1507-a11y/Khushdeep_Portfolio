import { useState } from 'react';
import { LogoItem } from '../types';
import { Maximize2, X, Sparkles, Palette, Shapes   } from 'lucide-react';

import BrewNest from '../../assets/images/logo/BrewNest.png';
import BrewNestDetail from '../../assets/images/logo/back/BrewNestIN.png';
import Threadly from '../../assets/images/logo/Threadly.png';
import ThreadlyDetail from '../../assets/images/logo/back/ThreadlyIN.png';
import BunnyBakers from '../../assets/images/logo/BunnyBakers.png';
import BunnyBakersDetails from '../../assets/images/logo/back/BunnyBakersIN.png';
import Wynora from '../../assets/images/logo/wynora.jpeg';
import WynoraDetail from '../../assets/images/logo/back/WynoraIN.png';
import OrviaPerfumes from '../../assets/images/logo/OrviaPerfumes.png';
import OrviaPerfumesDetail from '../../assets/images/logo/back/OrviaPerfumesIN.png';
import AromaStudio from '../../assets/images/logo/AromaStudio.png';
import AromaStudioDetail from '../../assets/images/logo/back/AromaStudioIN.png';
type LogoPortfolioItem = LogoItem & {
  detailImageUrl: string;
  description: string;
};

const LOGO_ITEMS: LogoPortfolioItem[] = [
  {
    id: 1,
    title: "BrewNest",
    client: "Coffee Cafe Branding",
    year: "Monogram + Symbolic Logo",
    concept: " Coffee Bean + Nest + BN Initials",
    imageUrl: BrewNest,
    detailImageUrl: BrewNestDetail,
    description: "The BrewNest logo combines the warmth of coffee with the comfort of a nest, representing coziness, freshness, and a welcoming café experience. The initials “BN” are placed at the center of a nest-inspired circular form, creating a distinctive and memorable monogram. The coffee bean adds a clear connection to the brand’s coffee identity, while the earthy brown tones convey warmth, naturalness, and a premium feel."
  },
  {
    id: 2,
    title: "Threadly",
    client: "Fashion & Tailoring Branding",
    year: "Wordmark + Symbolic Element",
    concept: "Thread + Typography + Tailoring",
    imageUrl: Threadly,
    detailImageUrl: ThreadlyDetail,
    description: "The Threadly logo represents the art of fashion and tailoring through a refined and elegant visual identity. The tall serif typography gives the brand a sophisticated and premium feel, while the flowing thread passing through the lettering creates a direct connection to stitching and craftsmanship. The oval frame adds balance and gives the logo a classic, polished appearance, making it suitable for a modern fashion or tailoring brand."
  },
  {
    id: 3,
    title: "Bunny Bakers",
    client: "Bakery & Dessert Branding",
    year: " Combination Mark + Badge Logo",
    concept: "Bunny + Cupcake + Monogram",
    imageUrl: BunnyBakers,
    detailImageUrl: BunnyBakersDetails,
    description: "The Bunny Bakers logo combines the charm of a bunny with a cupcake to represent creativity, sweetness, and warmth. The flowing frosting subtly forms bunny ears, creating a unique and memorable identity. The circular badge adds balance, professionalism, and strong brand recall."
  },
  {
    id: 4,
    title: "Wynora",
    client: "Furniture & Home Living Branding",
    year: "Combination Mark",
    concept: "Sofa + Modern Typography + Comfort",
    imageUrl: Wynora,
    detailImageUrl: WynoraDetail,
    description: "The Wynora logo represents modern furniture, comfort, and contemporary living through a clean and minimal visual identity. The sofa-inspired symbol placed above the wordmark creates an immediate connection with the furniture industry, while the bold geometric typography gives the brand a modern and sophisticated character. The simple black-and-white color palette adds versatility and gives the identity a premium, timeless appearance."
  },
  {
    id: 5,
    title: "Orvia Perfumes",
    client: " Perfume & Fragrance Branding",
    year: "Symbol + Wordmark",
    concept: "Perfume Bottle + Fragrance Flow + Elegance",
    imageUrl: OrviaPerfumes,
    detailImageUrl: OrviaPerfumesDetail,
    description: "The Orvia Perfumes logo represents elegance, luxury, and the art of fragrance through a refined and sophisticated visual identity. The stylized perfume bottle forms the main symbol, while the flowing inner curves suggest the movement of fragrance and create a distinctive monogram like element. The deep teal and ivory color palette adds a premium and timeless character, making the identity suitable for a modern luxury perfume brand."
  },
  {
    id: 6,
    title: "Aroma Studio",
    client: "Herbal Hair Care & Skin Care Branding",
    year: "Symbol + Wordmark",
    concept: "Botanical Leaf + Natural Beauty + Herbal Care + Purity",
    imageUrl: AromaStudio,
    detailImageUrl: AromaStudioDetail,
    description: "The Aroma Studio logo represents natural beauty, herbal care, and the power of botanical ingredients. The central leaf motif symbolizes nature, purity, and nourishment, reflecting the brand’s focus on herbal hair care and skincare products. The elegant typography gives the identity a premium and refined look, while the earthy green color palette creates a fresh, organic, and trustworthy feel."
  }
];

export default function LogoPortfolio() {
  const [selectedLogo, setSelectedLogo] = useState<LogoPortfolioItem | null>(null);

  return (
    <section id="logo-portfolio" className="py-24 bg-app-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-stone-500 text-xs font-mono uppercase tracking-widest block mb-2">// CORPORATE MARKS</span>
            <h2 className="font-serif text-3xl md:text-5xl text-black font-semibold tracking-tight">
              Logos That Give Brands a Voice
            </h2>
          </div>
          <p className="text-stone-500 text-xs md:text-sm font-light max-w-xs md:text-right">
             A collection of thoughtful logo identities crafted to give each brand its own personality, character, and visual presence.
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
                    src={selectedLogo.detailImageUrl}
                    alt={selectedLogo.title}
                    className="max-w-xs max-h-xs object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Conceptual Detail Area */}
                <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-between text-left">
                  <div>
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block mb-1">
                      // LOGO SPECIFICATION
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-black mb-6">
                      {selectedLogo.title}
                    </h3>

                    {/* Metadata indicators */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="p-1.5 bg-stone-200 text-stone-700">
                          <Palette  size={14} />
                        </span>
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-stone-400 font-semibold">Branding</p>
                          <p className="text-xs text-stone-800 font-medium">{selectedLogo.client}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="p-1.5 bg-stone-200 text-stone-700">
                          <Shapes size={14} />
                        </span>
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-stone-400 font-semibold">Logo Type</p>
                          <p className="text-xs text-stone-800 font-medium">{selectedLogo.year}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-stone-200 pt-6">
                      <p className="text-xs uppercase font-mono text-stone-400 tracking-wider mb-2 flex items-center gap-1.5">
                        <Sparkles size={11} />Description
                      </p>
                      <p className="text-stone-700 text-xs font-light leading-relaxed">
                        {selectedLogo.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 flex flex-col gap-2">
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