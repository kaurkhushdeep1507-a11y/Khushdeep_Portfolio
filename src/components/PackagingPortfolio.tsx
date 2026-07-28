'use client';

import { useState } from 'react';
import { Layers, PackageCheck, Shield, Eye, X } from 'lucide-react';

// === INLINE DATA: data.js removed ===
// NOTE: Keep these images in public/Packaging Design/vero-facewash/
// If spaces cause issues, rename files to use hyphens instead.
const PACKAGING_DESIGNS = [
  {
    id: 'vero-facewash',
    title: 'Vero Face Wash',
    sub: 'Skincare Packaging Design',
    description:
      'A fresh and modern packaging design created for Vero Face Wash. The goal was to give the product a clean and youthful look while highlighting its key ingredients, Strawberry Scrub and Nano Arbutin. The design helps customers quickly understand the product and its skincare benefits.',
    imageUrl: '../../../assets/images/Social/Packaging Design/vero-facewash/packaging design.png',
    beforeImage: '../../../assets/images/Social/Packaging Design/vero-facewash/Vero_Face_Wash_Dieline_HD.png',
    afterImage: '../../../assets/images/Social/Packaging Design/vero-facewash/image 2.png',
    synopsis:
      'This packaging was designed to reflect the product’s cleansing and skincare benefits. The visual style focuses on freshness, clarity, and a natural feel, helping the product stand out while creating a strong connection with its target audience.',
  },
  {
    id: 'product-two',
    title: 'Product Two Title',
    sub: 'Category / Subtitle',
    description:
      'Description for your second packaging design project. Add details about materials, finish, and target market here.',
 imageUrl: '../../../assets/images/Social/Packaging Design/vero-facewash/packaging design.png',
    beforeImage: '../../../assets/images/Social/Packaging Design/vero-facewash/Vero_Face_Wash_Dieline_HD.png',
    afterImage: '../../../assets/images/Social/Packaging Design/vero-facewash/image 2.png',
    synopsis:
      'Before and after transformation summary for product two. Describe the design process and final output.',
  },
  // === ITEM 3: Replace with your 3rd folder details ===
  {
    id: 'product-three',
    title: 'Product Three Title',
    sub: 'Category / Subtitle',
    description:
      'Description for your third packaging design project. Add details about materials, finish, and target market here.',
     imageUrl: '../../../assets/images/Social/Packaging Design/vero-facewash/packaging design.png',
    beforeImage: '../../../assets/images/Social/Packaging Design/vero-facewash/Vero_Face_Wash_Dieline_HD.png',
    afterImage: '../../../assets/images/Social/Packaging Design/vero-facewash/image 2.png',
    synopsis:
      'Before and after transformation summary for product three. Describe the design process and final output.',
  },
];

export default function PackagingPortfolio() {
  const [activeCard, setActiveCard] = useState(null);

  const activePack = PACKAGING_DESIGNS.find((p) => p.id === activeCard);

  return (
    <section id="packaging" className="py-24 bg-[#eaeaea] relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="text-stone-500 text-xs font-mono uppercase tracking-widest block mb-2">// PHYSICAL MEDIA & BOXES</span>
            <h2 className="font-serif text-3xl md:text-5xl text-black font-semibold tracking-tight">
              Packaging Design Showcase
            </h2>
          </div>
          <p className=" text-xs md:text-sm font-light max-w-sm md:text-right">
            Custom structural dies, tactile labels, and heavy materials specs. High impact branding tailored for physical retail shelves.
          </p>
        </div>

        {/* 3 Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGING_DESIGNS.map((pack) => (
            <div
              key={pack.id}
              className="glass-card glass-card-hover flex flex-col justify-between overflow-hidden relative group"
            >
              {/* Product Card Labeling Tag */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white font-mono text-[9px] tracking-widest uppercase py-1 px-2.5 z-10 rounded-md">
                {pack.id} SPEC
              </div>

              {/* Mockup Image */}
              <div 
                className="img-zoom-wrapper aspect-[4/5] bg-white/10 overflow-hidden relative rounded-t-[24px] cursor-pointer"
                onClick={() => setActiveCard(pack.id)}
              >
                <img
                  src={pack.imageUrl}
                  alt={pack.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Hover hint */}
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-[9px] font-mono uppercase tracking-widest py-1.5 px-3 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye size={10} /> Before / After
                </div>
              </div>

              {/* Package Meta Specs */}
              <div className="p-6 text-left flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-md font-bold text-black border-b border-black/5 pb-2 mb-2">
                    {pack.title}
                  </h3>
                  <p className="text-amber-800 text-[10px] font-mono uppercase tracking-widest mb-3 font-semibold">
                    {pack.sub}
                  </p>
                  <p className="text-stone-700 text-xs font-light leading-relaxed mb-6">
                    {pack.description}
                  </p>
                </div>

                {/* Micro tech checklist */}
                <div className="border-t border-black/5 pt-4 flex gap-4 text-stone-600 text-[10px] font-semibold uppercase tracking-wider justify-between">
                  <span className="flex items-center gap-1">
                    <Layers size={12} /> Premium Packaging Design
                  </span>
                  <span className="flex items-center gap-1">
                    <PackageCheck size={12} /> Custom Die-Cut Solutions
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield size={12} /> Print-Ready Production Files
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative shelf rendering banner */}
        <div className="mt-16 bg-black/85 backdrop-blur-xl p-8 md:p-12 text-white text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-white/15 rounded-[24px] shadow-lg">
          <div className="md:col-span-8">
            <span className="text-amber-400 text-[9px] font-mono tracking-widest uppercase block mb-1">
              // PRODUCTION CAPABILITIES
            </span>
            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3 leading-tight text-white">
              From luxury cartons and rigid boxes to custom die-cut packaging, we craft production-ready solutions that elevate your brand on every shelf.
            </h3>
           
          </div>

          <div className="md:col-span-4 flex justify-end">
            <a
              href="#contact"
              className="px-6 py-4 border border-white/30 text-stone-200 hover:text-white hover:border-white hover:bg-white/5 transition-all text-xs font-semibold tracking-widest uppercase text-center w-full md:w-auto rounded-full"
            >
              Get Product Consultation
            </a>
          </div>
        </div>

      </div>

      {/* ========== BEFORE / AFTER POPUP MODAL ========== */}
      {activePack && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setActiveCard(null)}
        >
          <div 
            className="bg-white rounded-[24px] overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end p-3 pb-0">
              <button
                onClick={() => setActiveCard(null)}
                className="bg-stone-100 hover:bg-stone-200 text-stone-600 p-2 rounded-full transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Before / After Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 pt-1">
              {/* Before */}
              <div className="flex flex-col rounded-xl overflow-hidden bg-stone-50">
                <div className="relative aspect-[3/4]">
                  <img
                    src={activePack.beforeImage || activePack.imageUrl}
                    alt="Before"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-stone-800/90 backdrop-blur-sm text-white font-mono text-[10px] tracking-widest uppercase py-1.5 px-3 rounded-md">
                    Before
                  </span>
                </div>
              </div>

              {/* After */}
              <div className="flex flex-col rounded-xl overflow-hidden bg-stone-50">
                <div className="relative aspect-[3/4]">
                  <img
                    src={activePack.afterImage || activePack.imageUrl}
                    alt="After"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-amber-700/90 backdrop-blur-sm text-white font-mono text-[10px] tracking-widest uppercase py-1.5 px-3 rounded-md">
                    After
                  </span>
                </div>
              </div>
            </div>

            {/* Single Synopsis */}
            <div className="px-4 pb-4">
              <p className="text-stone-600 text-xs font-light leading-relaxed text-center max-w-lg mx-auto">
                {activePack.synopsis || 'Transformation from raw prototype to final branded packaging with applied coatings, typography, and structural refinements.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}