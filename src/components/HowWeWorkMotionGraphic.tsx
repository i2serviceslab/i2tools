import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface HowWeWorkMotionGraphicProps {
  lang: Language;
}

export const HowWeWorkMotionGraphic: React.FC<HowWeWorkMotionGraphicProps> = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const phases = [
    {
      number: '01',
      title: { en: 'Initial Diagnosis', es: 'Diagnóstico Inicial' },
      shortText: {
        en: 'Comprehensive 48-hour audit of ANM mining titles, surface fees, and cadastral overlaps.',
        es: 'Auditoría integral del título ante la ANM, cánones y cruces catastrales en 48 horas.'
      },
      image: '/images/executive_mining_office_medellin_1792169913944.jpg',
      imageAlt: { en: 'ANM concession review in Medellín office', es: 'Revisión documental en oficina Medellín' }
    },
    {
      number: '02',
      title: { en: 'Scope Definition', es: 'Definición de Alcance' },
      shortText: {
        en: 'Mutual non-disclosure agreement and customized mandate aligning corporate legal roles.',
        es: 'Acuerdo bilateral de confidencialidad y delimitación del mandato corporativo a la medida.'
      },
      image: '/extracted/img_3.jpg',
      imageAlt: { en: 'Legal counsel and corporate structure', es: 'Estructuración jurídica y mandato' }
    },
    {
      number: '03',
      title: { en: 'Team Assignment', es: 'Asignación de Equipo' },
      shortText: {
        en: 'Dedicated corporate counsel and bilingual mining accountants based in Torre Davivienda, Medellín.',
        es: 'Abogados corporativos y contadores propios asignados desde Torre Davivienda, Medellín.'
      },
      image: '/extracted/img_1.jpg',
      imageAlt: { en: 'In-house team meeting in Medellín', es: 'Equipo multidisciplinario propio' }
    },
    {
      number: '04',
      title: { en: 'Master Schedule', es: 'Cronograma Maestro' },
      shortText: {
        en: 'Critical path sequencing for DIAN tax RUT, Tier-1 banking, and campsite mobilization.',
        es: 'Planificación de ruta crítica: RUT DIAN, cuentas bancarias y movilización de taladro.'
      },
      image: '/extracted/img_6.jpg',
      imageAlt: { en: 'Project master schedule and blueprint', es: 'Cronograma maestro de operaciones' }
    },
    {
      number: '05',
      title: { en: 'Execution & Control', es: 'Ejecución y Control' },
      shortText: {
        en: 'Daily field payroll, FX monetization, and 548 days of non-stop diamond drilling.',
        es: 'Nómina de campo, monetización cambiaria continua y 548 días de perforación ininterrumpida.'
      },
      image: '/images/drilling_rig_antioquia_1792169893012.jpg',
      imageAlt: { en: 'Diamond drilling rig in Antioquia', es: 'Perforación diamantina en Antioquia' }
    },
    {
      number: '06',
      title: { en: 'Executive Reporting', es: 'Reportes Periódicos' },
      shortText: {
        en: 'Monthly IFRS financial statements and operational briefings ready for TSX and ASX boards.',
        es: 'Estados financieros bajo norma NIIF listos para consolidación en bolsas internacionales.'
      },
      image: '/extracted/img_4.jpg',
      imageAlt: { en: 'IFRS financial reporting compliance desk', es: 'Contabilidad bajo norma NIIF' }
    },
    {
      number: '07',
      title: { en: 'Critical Escalation', es: 'Escalamiento Crítico' },
      shortText: {
        en: 'Immediate contingency committee activation with senior partner intervention in under 2 hours.',
        es: 'Activación del comité de contingencias con respuesta de socios en menos de 2 horas.'
      },
      image: '/images/geological_3d_modeling_tablet_1792169936423.jpg',
      imageAlt: { en: 'Rapid emergency title protection response', es: 'Blindaje y respuesta rápida' }
    }
  ];

  // Auto-advance through all 7 phases smoothly every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % phases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, phases.length]);

  const visibleCards = windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1;
  const maxSlideIndex = Math.max(0, phases.length - visibleCards);
  const slideOffsetIndex = Math.min(activeIndex, maxSlideIndex);

  return (
    <div 
      className="w-full relative select-none py-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fluid Sliding Cards Track */}
      <div className="relative overflow-hidden w-full pb-4">
        <div 
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] gap-6"
          style={{
            transform: `translateX(-${slideOffsetIndex * (100 / visibleCards)}%)`
          }}
        >
          {phases.map((phase, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={phase.number}
                onClick={() => {
                  setActiveIndex(idx);
                  setIsPaused(true);
                }}
                className={`cursor-pointer rounded-2xl bg-[#0B1A30] border transition-all duration-500 p-5 flex flex-col justify-between shrink-0 text-left ${
                  // Responsive width per card
                  'w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]'
                } ${
                  isActive
                    ? 'border-[#01BBDC] shadow-2xl shadow-[#01BBDC]/15 -translate-y-2 opacity-100'
                    : 'border-[#273349] translate-y-0 opacity-60 hover:opacity-90 hover:border-slate-600'
                }`}
              >
                {/* Hairline Active Timer Bar */}
                <div className="w-full h-1 bg-[#1E2B42] rounded-full overflow-hidden mb-4">
                  <div 
                    className={`h-full bg-[#01BBDC] transition-all ${
                      isActive ? 'w-full duration-[4000ms] ease-linear' : 'w-0 duration-300'
                    }`}
                  />
                </div>

                <div>
                  {/* High Impact Photography */}
                  <div className="relative rounded-xl overflow-hidden h-52 sm:h-56 mb-5 bg-[#08172E]">
                    <img
                      src={phase.image}
                      alt={phase.imageAlt[lang]}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isActive ? 'scale-108' : 'scale-100'
                      }`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A30] via-transparent to-black/10" />

                    {/* Prominent Floating Phase Pill */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#08172E]/90 border border-white/15 backdrop-blur-md text-xs font-mono font-bold text-white shadow-md">
                      STAGE {phase.number}
                    </div>
                  </div>

                  {/* Prominent, Bold Headline */}
                  <h3 className="text-2xl font-black text-white tracking-tight mb-2.5 leading-snug">
                    {phase.title[lang]}
                  </h3>

                  {/* Concise, High-Impact Text */}
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {phase.shortText[lang]}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
