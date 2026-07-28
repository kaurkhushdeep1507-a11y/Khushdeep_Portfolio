import { SERVICES } from '../data';
import { PenTool, Target, Image, Package } from 'lucide-react';

export default function Services() {
  // Mapping service icons based on id for accurate representation
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 's1': return <PenTool className="text-amber-500" size={24} />;
      case 's2': return <Target className="text-indigo-500" size={24} />;
      case 's3': return <Image className="text-emerald-500" size={24} />;
      case 's4': return <Package className="text-amber-700" size={24} />;
      default: return <PenTool size={24} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-app-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-stone-500 text-xs font-mono uppercase tracking-widest block mb-2">// PROFESSIONAL EXPERTISE</span>
          <h2 className="font-serif text-3xl md:text-5xl text-black font-semibold tracking-tight mb-4">
            Services & Studio Output
          </h2>
          <p className="text-stone-500 text-sm font-light leading-relaxed">
            From symmetrical vector marks to complete multi-channel brand rollouts, I deliver pristine high-end creative solutions tailored to elevate your market standing.
          </p>
        </div>

        {/* 4 Column Balanced 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="glass-card glass-card-hover p-8 flex flex-col justify-between relative group"
            >
              <div className="absolute top-6 right-6 opacity-[0.08] group-hover:opacity-[0.22] transition-opacity">
                {getServiceIcon(serv.id)}
              </div>

              <div className="text-left">
                {/* Visual Icon Header */}
                <div className="w-12 h-12 flex items-center justify-center bg-white/50 border border-white/60 mb-6 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-500 rounded-xl shadow-sm">
                  {getServiceIcon(serv.id)}
                </div>

                <h3 className="font-serif text-lg font-bold text-black mb-3 text-left">
                  {serv.id === 's1' ? 'Logo Design' : ''}
                  {serv.id === 's2' ? 'Branding' : ''}
                  {serv.id === 's3' ? 'Social Media Design' : ''}
                  {serv.id === 's4' ? 'Packaging Design' : ''}
                </h3>

                <p className="text-stone-700 text-xs font-light leading-relaxed mb-6">
                  {serv.description}
                </p>
              </div>

              {/* Skills breakdown */}
              <div className="border-t border-black/5 pt-4 text-left">
                <span className="text-[9px] font-mono uppercase text-stone-500 tracking-wider block mb-2 font-semibold">Capabilities Included:</span>
                <div className="flex flex-wrap gap-1.5">
                  {serv.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] font-semibold text-stone-800 bg-white/40 border border-white/50 py-1 px-2.5 rounded-full shadow-sm hover:bg-black hover:text-white hover:border-black transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
