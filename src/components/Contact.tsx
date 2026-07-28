import { Mail, Phone, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-app-bg relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-stone-500 text-xs font-mono uppercase tracking-widest block mb-2">// COMMISSIONS & INQUIRIES</span>
          <h2 className="font-serif text-3xl md:text-5xl text-black font-semibold tracking-tight">
            Start a Design Session
          </h2>
          <p className="text-stone-600 text-sm font-light leading-relaxed mt-4 max-w-lg mx-auto">
            Let&apos;s build something timeless. Whether you need a high-end logomark, custom physical packaging, or brand guidelines, get in touch directly.
          </p>
        </div>

        {/* Contact Coordinates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8">

          <div className="p-6 glass-card backdrop-blur-md flex flex-col items-center justify-center text-center gap-4 border border-white/50 shadow-sm transition-all duration-300">
            <span className="p-4 bg-stone-200/80 text-stone-850 rounded-full shadow-sm border border-stone-300/45">
              <Mail size={20} />
            </span>
            <div className="w-full">
              <p className="text-[9px] font-mono text-stone-500 uppercase tracking-widest font-semibold mb-1">EMAIL COORDINATE</p>
              <a
                href="mailto:kaurkhushdeep1507@gmail.com"
                className="text-sm md:text-base font-semibold text-black hover:underline break-all"
              >
                kaurkhushdeep1507@gmail.com
              </a>
            </div>
          </div>

          <div className="p-6 glass-card backdrop-blur-md flex flex-col items-center justify-center text-center gap-4 border border-white/50 shadow-sm transition-all duration-300">
            <span className="p-4 bg-stone-200/80 text-stone-850 rounded-full shadow-sm border border-stone-300/45">
              <Phone size={20} />
            </span>
            <div>
              <p className="text-[9px] font-mono text-stone-500 uppercase tracking-widest font-semibold mb-1">PHONE COORDINATE</p>
              <a
                href="tel:+919818135834"
                className="text-sm md:text-base font-semibold text-black hover:underline"
              >
                +91 98181 35834
              </a>
            </div>
          </div>

          <div className="p-6 glass-card backdrop-blur-md flex flex-col items-center justify-center text-center gap-4 border border-white/50 shadow-sm transition-all duration-300">
            <span className="p-4 bg-stone-200/80 text-stone-850 rounded-full shadow-sm border border-stone-300/45">
              <Download size={20} />
            </span>
            <div>
              <p className="text-[9px] font-mono text-stone-500 uppercase tracking-widest font-semibold mb-1">RESUME</p>
              <a
                href="/assets/resume/KK%20Resume.pdf.pdf"
                download="KK_Resume.pdf"
                className="text-sm md:text-base font-semibold text-black hover:underline"
              >
                Download CV
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}