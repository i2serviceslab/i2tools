import React from 'react';
import { Language } from '../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ValuePropositionProps {
  lang: Language;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({ lang }) => {
  return (
    <section id="value-prop" className="py-24 bg-[#F4F7FB] text-[#08172E] relative overflow-hidden border-t-2 border-[#01BBDC]/40">
      {/* SVG Technical Angle Trace from Slide 2 of PDF */}
      <div className="absolute right-0 bottom-0 pointer-events-none hidden md:block">
        <svg width="420" height="260" viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M420 230 H 160 Q 140 230 125 215 L 20 110 Q 5 95 5 75 V 0"
            stroke="#01BBDC"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
        </svg>
        <div className="absolute right-8 bottom-6 text-[10px] font-mono tracking-[0.25em] text-[#718CC1] uppercase">
          i2services s.a.s. · medellín, colombia
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Authentic Real Photo from Slide 2 (Medellín Office + Laptop) */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" duration={800}>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white p-3 group">
                <img
                  src="/extracted/img_1.jpg"
                  alt="i2 Services S.A.S. Headquarters in Medellín, El Poblado"
                  className="w-full h-auto rounded-2xl object-cover transition-transform duration-700 group-hover:scale-102"
                />
              </div>
              
              {/* Caption badge */}
              <div className="mt-3.5 flex items-center justify-between text-xs text-slate-500 px-2 font-mono">
                <span className="font-semibold text-slate-600">TORRE EMPRESARIAL DAVIVIENDA · OF. 610</span>
                <span className="text-[#01BBDC] font-bold">MEDELLÍN, COLOMBIA</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Exact Slide 2 Content & Layout */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left" delay={150} duration={800}>
              <div>
                <div className="pdf-accent-bar mb-3" />
                <div className="text-xs font-bold text-[#00446B] tracking-[0.22em] uppercase font-mono">
                  {lang === 'en' ? 'VALUE PROPOSITION' : 'PROPUESTA DE VALOR'}
                </div>
              </div>
            </ScrollReveal>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-5xl font-black text-[#08172E] tracking-tight leading-[1.1]">
              {lang === 'en' ? (
                <>
                  Local where<br />
                  you operate.<br />
                  <span className="text-[#01BBDC]">Expert in how<br />you finance.</span>
                </>
              ) : (
                <>
                  Locales donde<br />
                  usted opera.<br />
                  <span className="text-[#01BBDC]">Expertos en cómo<br />se financia.</span>
                </>
              )}
            </h2>

            {/* Quote Block */}
            <ScrollReveal direction="up" delay={250} duration={800}>
              <blockquote className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-slate-700 text-base sm:text-lg font-normal leading-relaxed italic border-l-4 border-l-[#01BBDC]">
                {lang === 'en'
                  ? '“You explore and raise capital. We manage your mining project in Colombia, with real local knowledge, public-company standards, and junior-company costs.”'
                  : '“Usted explora y levanta capital. Nosotros administramos su proyecto minero en Colombia, con conocimiento real del terreno, estándares de compañía listada y costos de junior.”'}
              </blockquote>
            </ScrollReveal>

            {/* Operational Pillars checklist */}
            <ScrollReveal direction="up" delay={350} duration={800}>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-[#08172E] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#01BBDC] shrink-0" />
                  <span>{lang === 'en' ? 'Direct communication with Canadian & Australian boards' : 'Comunicación directa con juntas directivas en Canadá y Australia'}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#08172E] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#01BBDC] shrink-0" />
                  <span>{lang === 'en' ? 'Turnkey presence on the ground: ANM, DIAN, banks, and labor' : 'Presencia inmediata en terreno: ANM, DIAN, bancos y nómina'}</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#approach"
                  className="btn-press inline-flex items-center gap-2 text-sm font-bold text-[#00649F] hover:text-[#01BBDC] transition-colors"
                >
                  <span>{lang === 'en' ? 'See our operational approach' : 'Conocer nuestro enfoque operativo'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
};
