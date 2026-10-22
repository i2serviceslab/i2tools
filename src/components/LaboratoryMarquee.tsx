import React from 'react';
import { LAB_LOGOS } from '../data/kairosData';
import { ShieldCheck } from 'lucide-react';

export const LaboratoryMarquee: React.FC = () => {
  // Duplicate logos array so the marquee loops seamlessly
  const allLogos = [...LAB_LOGOS, ...LAB_LOGOS, ...LAB_LOGOS, ...LAB_LOGOS];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
          <ShieldCheck className="w-4 h-4 text-[#1A97D1]" />
          <span>Laboratorios y Fabricantes Aliados</span>
        </div>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Distribuimos medicamentos e insumos de los laboratorios farmacéuticos más prestigiosos, asegurando cumplimiento regulatorio y disponibilidad continua.
        </p>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-3">
          {allLogos.map((lab, index) => (
            <div
              key={`${lab.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-14 sm:h-16 w-36 sm:w-44 px-4 py-2 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-200/60 hover:border-sky-200 transition-all hover:shadow-md grayscale hover:grayscale-0 opacity-80 hover:opacity-100 group"
            >
              <img
                src={lab.src}
                alt={lab.name}
                className="max-h-10 sm:max-h-12 max-w-full object-contain filter group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
