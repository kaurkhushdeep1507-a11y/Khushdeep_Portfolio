import { Award, Briefcase, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const skills = [
    { name: 'Adobe Photoshop', icon: 'Ps', level: '95%', desc: 'Advanced photo editing, retouching & social creatives' },
    { name: 'Adobe Illustrator', icon: 'Ai', level: '98%', desc: 'Logo design, vector illustration & branding systems' },
    { name: 'Adobe InDesign', icon: 'Id', level: '92%', desc: 'Print layouts, brochures & marketing materials' },
    { name: 'CorelDRAW', icon: 'Cd', level: '90%', desc: 'Advertising, packaging & print production' },
    { name: 'Canva Pro', icon: 'Cv', level: '96%', desc: 'Social media campaigns & presentation design' },
    { name: 'Adobe Premiere Pro', icon: 'Pr', level: '85%', desc: 'Video editing, reels & promotional content' },
  ];

  return (
    <section id="about-me" className="py-24 bg-[#eaeaea] relative border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="mb-16">
          <span className="text-stone-500 text-xs font-mono uppercase tracking-widest block mb-2">// DESIGNER BIOGRAPHY</span>
          <h2 className="font-serif text-3xl md:text-5xl text-black font-semibold tracking-tight">
            Creative discipline, geometric balance.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Biography & Metrics Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="glass-card p-8 backdrop-blur-xl shadow-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl uppercase font-bold tracking-wider mb-4 border-b border-black/5 pb-3 flex items-center gap-2 text-stone-900">
                  <Sparkles size={16} className="text-stone-600" />
                  About Khushdeep Kaur
                </h3>
                <p className="text-stone-900 dark:text-stone-100 font-normal text-base leading-relaxed mb-4">
                  Hi, I&apos;m Khushdeep Kaur, a Graphic Designer passionate about transforming ideas into impactful visual experiences. With 1.5+ years of professional experience, I specialize in branding, social media creatives, advertising designs, and digital content that help businesses communicate effectively and stand out in competitive markets.
                </p>
                <p className="text-stone-800 dark:text-stone-200 font-normal text-sm leading-relaxed mb-4">
                  Currently working with MyITR Online Global Services Pvt. Ltd., I create engaging marketing materials, festival campaigns, personalized graphics, and brand-focused digital assets. My design process combines creativity, typography, color psychology, and attention to detail to deliver visually compelling and result-driven solutions.
                </p>
                <p className="text-stone-850 dark:text-stone-200 font-normal text-sm leading-relaxed mb-6">
                  I believe great design is more than aesthetics—it&apos;s about creating meaningful connections between brands and people through clear communication and memorable visual storytelling.
                </p>
              </div>

              {/* Quick Metrics integrated in Biography Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-black/5 pt-6 mt-auto">
                <div className="glass-card p-6 border-l-4 border-stone-500 rounded-r-[24px] rounded-l-none bg-white/20 backdrop-blur-md shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-stone-700 dark:text-stone-300">
                    <Briefcase size={16} />
                    <span className="text-[10px] font-mono tracking-widest uppercase font-bold">// TENURE</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-stone-900 dark:text-white">1.5+ Years</h3>
                  <p className="text-xs text-stone-800 dark:text-stone-200 mt-1 font-medium">Consistent studio & freelance service</p>
                </div>

                <div className="glass-card p-6 border-l-4 border-stone-500 rounded-r-[24px] rounded-l-none bg-white/20 backdrop-blur-md shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-stone-700 dark:text-stone-300">
                    <Award size={16} />
                    <span className="text-[10px] font-mono tracking-widest uppercase font-bold">// STANDARDS</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-stone-900 dark:text-white">100%</h3>
                  <p className="text-xs text-stone-800 dark:text-stone-200 mt-1 font-medium">Behance-level production quality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Mastery Grids Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="glass-card p-8 backdrop-blur-xl shadow-sm h-full flex flex-col justify-between">
              <div>
                <h4 className="text-xl uppercase font-bold tracking-wider mb-4 border-b border-black/5 pb-3 flex items-center gap-2 text-stone-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-600"></span>
                  Creative Tools & Technical Expertise
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="glass-card p-5 flex flex-col gap-3 backdrop-blur-md animate-fade-in"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 flex items-center justify-center bg-stone-200/80 text-stone-800 border border-stone-300/40 font-mono text-xs font-bold rounded-lg shadow-sm">
                            {skill.icon}
                          </span>
                          <h5 className="text-sm font-semibold text-stone-900 tracking-tight">{skill.name}</h5>
                        </div>
                        <span className="text-xs font-mono font-semibold text-stone-500">{skill.level}</span>
                      </div>

                      {/* Progress strip */}
                      <div className="w-full bg-white/45 h-[4px] rounded-full overflow-hidden border border-white/20">
                        <motion.div
                          className="bg-stone-600 h-full rounded-full origin-left"
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true, margin: "-10px" }}
                          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
                        />
                      </div>

                      <p className="text-stone-600 text-[11px] font-light leading-relaxed">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
