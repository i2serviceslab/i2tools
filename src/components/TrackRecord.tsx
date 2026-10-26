import React, { useEffect, useState, useRef } from 'react';
import { Language } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface TrackRecordProps {
  lang: Language;
}

export const TrackRecord: React.FC<TrackRecordProps> = ({ lang }) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      targetNumber: 2,
      displayNumber: (n: number) => (n < 10 ? `0${n}` : `${n}`),
      title: { en: 'Publicly Listed Mining Clients', es: 'Compañías Mineras Listadas' },
      detail: { en: 'Run their Colombian back office on this team.', es: 'Operan su back office en Colombia con este equipo.' }
    },
    {
      targetNumber: 5,
      displayNumber: (n: number) => (n < 10 ? `0${n}` : `${n}`),
      title: { en: 'Companies & Branches Formed', es: 'Sociedades o Sucursales Creadas' },
      detail: { en: 'Formally incorporated in Colombia.', es: 'Constituidas formalmente en Colombia.' }
    },
    {
      targetNumber: 22,
      displayNumber: (n: number) => `${n}`,
      title: { en: 'Multidisciplinary Team', es: 'Equipo Multidisciplinario' },
      detail: { en: 'With a permanent physical office in Medellín (Torre Davivienda).', es: 'Con oficina física propia en Medellín (Torre Davivienda).' }
    },
    {
      targetNumber: 58,
      displayNumber: (n: number) => `${n}`,
      title: { en: '14 Titles · 44 Applications', es: '14 Títulos · 44 Solicitudes' },
      detail: { en: 'Concession contracts & PCC filings before the ANM.', es: 'Contratos de concesión y propuestas PCC ante la ANM.' }
    },
    {
      targetNumber: 6,
      displayNumber: (n: number) => (n < 10 ? `0${n}` : `${n}`),
      title: { en: 'Colombian Bank Accounts', es: 'Cuentas Bancarias Colombianas' },
      detail: { en: 'Bancolombia, BBVA & Banco Agrario.', es: 'Abiertas en Bancolombia, BBVA y Banco Agrario.' }
    },
    {
      targetNumber: 3,
      displayNumber: (n: number) => (n < 10 ? `0${n}` : `${n}`),
      title: { en: 'Websites Built', es: 'Sitios Web Desarrollados' },
      detail: { en: 'Corporate Level & Local Presence.', es: 'Nivel corporativo y presencia institucional local.' }
    }
  ];

  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const duration = 1400; // ms
    const startTime = performance.now();

    const updateCounts = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(stats.map((s) => Math.round(s.targetNumber * easeOut)));

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      }
    };

    requestAnimationFrame(updateCounts);
  }, [inView]);

  return (
    <section ref={sectionRef} id="experience" className="py-24 bg-[#071328] text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from Slide 4 */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="pdf-accent-bar mx-auto mb-4" />
            <div className="text-xs font-bold text-[#01BBDC] tracking-[0.25em] uppercase mb-3">
              {lang === 'en' ? 'EXPERIENCE' : 'EXPERIENCIA'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {lang === 'en' ? 'Who already runs on this team' : 'Quiénes ya operan con este equipo'}
            </h2>
          </div>
        </ScrollReveal>

        {/* 6 Circular Dashed Metrics from Slide 4 with Animated Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 70} duration={600}>
              <div className="flex flex-col items-center text-center group cursor-default">
                {/* Dashed circular ring from slide 4 */}
                <div className="pdf-stat-circle mb-5 group-hover:border-[#01BBDC] transition-all">
                  <span className="text-4xl sm:text-5xl font-light text-[#01BBDC] font-sans tracking-tight tabular-nums select-none">
                    {stat.displayNumber(counts[idx])}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5 leading-snug group-hover:text-[#01BBDC] transition-colors">
                  {stat.title[lang]}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed max-w-[150px]">
                  {stat.detail[lang]}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
