import { Briefcase, GraduationCap, Compass, Globe, Sparkles } from 'lucide-react';

export default function Resume() {
  const experiences = [
    {
      role: "Graphic Designer",
      company: "MyITR Online Global Services Pvt. Ltd.",
      period: "Feb 2025 – Present",
      description: "Designed engaging festival creatives, social media content, personalized graphics, and ITR-related visual materials, ensuring brand-consistent, visually compelling, and result-driven marketing solutions."
    }
  ];

  const education = [
    {
      degree: "One Year Diploma in Graphic & Web Designing",
      institution: "YWCA of Delhi (Young Women Christian Association)",
      period: "2023 - 2024",
      highlight: "Specialized in editorial layouting, digital vector drafting, and digital media production."
    },
    {
      degree: "Bachelor of Arts",
      institution: "DU (Delhi University)",
      period: "2022 - 2025",
      highlight: "Broad foundation in humanities, critical analyses, and visual culture."
    },
    {
      degree: "Passed Higher Secondary Education",
      institution: "CBSE Board",
      period: "2021",
      highlight: "12th Grade credentials with fine arts concentration."
    },
    {
      degree: "Passed Senior Secondary Education",
      institution: "CBSE Board",
      period: "2019",
      highlight: "10th Grade foundation standard."
    }
  ];

  const languages = [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Native / Bilingual" },
    { name: "Punjabi", level: "Native / Bilingual" }
  ];

  const additionalSkills = [
    "Logo Creation", "Problem Solving", "Time Management", "Typography", 
    "Communication", "Team Work", "Illustration", "Advertising & Packaging", 
    "Print Design", "Color Theory"
  ];

  const interests = [
    "Travelling & Exploring",
    "Acoustic & Classical Music",
    "Artistic Crafts & Physical Design"
  ];  return (
    <section id="credentials" className="py-24 bg-stone-50 relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="mb-16">
          <span className="text-stone-500 text-xs font-mono uppercase tracking-widest block mb-2">// PROFESSIONAL CREDENTIALS</span>
          <h2 className="font-serif text-3xl md:text-5xl text-black font-semibold tracking-tight">
            Education & Corporate Tenure
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Timeline Column (Experience & Education) */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            
            {/* Professional Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8 pb-3 border-b border-stone-200">
                <span className="p-2 bg-stone-900 text-white rounded-lg">
                  <Briefcase size={16} />
                </span>
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-stone-900 font-bold">PROFESSIONAL EXPERIENCE</h3>
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="p-7 bg-white border border-stone-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                      <div>
                        <h4 className="font-serif text-lg font-bold text-black tracking-tight">{exp.role}</h4>
                        <p className="text-xs text-stone-600 font-medium tracking-wide">{exp.company}</p>
                      </div>
                      <span className="text-[10px] font-mono px-3.5 py-1 bg-stone-900 text-stone-100 rounded-full font-bold uppercase tracking-wider">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-stone-750 text-xs font-light leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education History */}
            <div>
              <div className="flex items-center gap-3 mb-8 pb-3 border-b border-stone-200">
                <span className="p-2 bg-stone-900 text-white rounded-lg">
                  <GraduationCap size={16} />
                </span>
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-stone-900 font-bold">EDUCATIONAL & VOCATIONAL QUALIFICATION</h3>
              </div>
              
              <div className="relative border-l border-stone-300 pl-8 ml-4 space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative group">
                    {/* timeline bullet dot */}
                    <span className="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-stone-900 border-2 border-stone-50 group-hover:scale-125 transition-transform duration-300 shadow-sm"></span>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                      <h4 className="font-serif text-sm md:text-base font-bold text-stone-900 group-hover:text-black transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="text-[10px] font-mono font-bold text-stone-500 bg-white border border-stone-200/80 px-2.5 py-0.5 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-[11px] font-mono text-stone-600 uppercase tracking-wider mb-2 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-stone-600 text-xs font-light italic leading-relaxed">
                      {edu.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Personal Metadata Column (Objectives, Languages, Interests & Declaration) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Career Objective */}
            <div className="p-8 bg-stone-900 text-white rounded-2xl flex flex-col gap-4 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
              <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-stone-400">DESIGN OBJECTIVE</p>
              <h4 className="font-serif text-xl font-bold tracking-tight text-white mb-1">
                Creative Mindset
              </h4>
              <p className="text-stone-300 text-xs font-light leading-relaxed">
                Creative thinker and Graphic Designer with 1.5 years of experience in digital design, branding, and social media creatives. Eager to contribute innovative ideas and visually appealing designs that elevate brand engagement.
              </p>
            </div>

            {/* Core Competencies chips */}
            <div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm">
              <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-stone-500 block mb-4 font-bold">// ADDITIONAL SPECIFICATIONS</span>
              <div className="flex flex-wrap gap-2">
                {additionalSkills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-[9px] font-mono tracking-wider font-semibold uppercase px-3 py-2 bg-stone-50 hover:bg-stone-100/85 text-stone-800 border border-stone-200/80 rounded-xl transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages & Interests Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Languages */}
              <div className="p-7 bg-white border border-stone-200 rounded-2xl shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2 text-stone-500 mb-1 border-b border-stone-100 pb-2">
                  <Globe size={13} />
                  <span className="text-[8px] font-mono uppercase tracking-widest font-bold">LANGUAGES</span>
                </div>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-stone-900">{lang.name}</span>
                      <span className="text-[9px] font-mono px-2 py-0.5 bg-stone-50 text-stone-500 border border-stone-200/60 rounded-md">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="p-7 bg-white border border-stone-200 rounded-2xl shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2 text-stone-500 mb-1 border-b border-stone-100 pb-2">
                  <Compass size={13} />
                  <span className="text-[8px] font-mono uppercase tracking-widest font-bold">INTERESTS</span>
                </div>
                <ul className="space-y-2 text-xs font-light text-stone-700">
                  {interests.map((interest) => (
                    <li key={interest} className="flex items-center gap-2 text-[11px] font-medium text-stone-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Formal Declaration & Stamp */}
            <div className="p-7 bg-white border border-stone-200 rounded-2xl shadow-sm flex flex-col gap-5 relative">
              <div className="flex items-start gap-3">
                <span className="p-2 bg-stone-900 text-white rounded-lg border border-stone-800">
                  <Sparkles size={14} />
                </span>
                <div>
                  <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-stone-500 mb-1 font-bold">FORMAL DECLARATION</p>
                  <p className="text-stone-700 text-[10px] font-light leading-relaxed italic">
                    &quot;I hereby declare that all the information given above is true and accurate to the best of my knowledge.&quot;
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-stone-150 pt-4 mt-2">
                <div>
                  <p className="text-[8px] font-mono text-stone-400 uppercase tracking-widest leading-none mb-1">LOCATION</p>
                  <p className="text-xs font-bold text-stone-900">New Delhi, India</p>
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-mono text-stone-400 uppercase tracking-widest mb-1.5 leading-none">CANDIDATE SIGNATURE</p>
                  <p className="font-serif italic text-base font-bold text-black tracking-wide leading-none">
                    Khushdeep Kaur
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
