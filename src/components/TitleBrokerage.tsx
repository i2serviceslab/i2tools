import React from 'react';
import { Language } from '../types';
import { ArrowRight, FileCheck2 } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { ScrollReveal } from './ScrollReveal';

interface TitleBrokerageProps {
  lang: Language;
}

export const TitleBrokerage: React.FC<TitleBrokerageProps> = ({ lang }) => {
  return (
    <section id="title-management" className="py-24 bg-[#08172E] text-white relative border-t border-[#273349]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from Slide 12 */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="pdf-accent-bar mx-auto mb-4" />
            <div className="text-xs font-bold text-[#01BBDC] tracking-[0.25em] uppercase mb-3">
              {lang === 'en' ? 'TRANSACTIONAL SUPPORT' : 'SOPORTE TRANSACCIONAL'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {lang === 'en'
                ? 'Mining Title Management & Legal Due Diligence'
                : 'Gestión y Due Diligence de Títulos Mineros'}
            </h2>
          </div>
        </ScrollReveal>

        {/* Cyan Banner from Slide 12 with Spotlight */}
        <ScrollReveal direction="up" delay={150} duration={800}>
          <SpotlightCard
            spotlightColor="rgba(255, 255, 255, 0.25)"
            className="max-w-5xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#01BBDC] to-[#00A3C4] text-[#08172E] shadow-2xl relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#08172E]/15">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#08172E] text-[#01BBDC] flex items-center justify-center shrink-0 shadow-lg">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#08172E] leading-tight">
                    {lang === 'en' ? 'Title Management Mandate' : 'Mandato de Gestión de Títulos'}
                  </h3>
                  <div className="text-sm font-bold text-[#08172E]/80">
                    {lang === 'en'
                      ? 'Retained as an independent mandate, buyers-side representation only.'
                      : 'Contratado como mandato independiente, exclusivamente del lado comprador.'}
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="btn-press inline-flex items-center gap-2 bg-[#08172E] hover:bg-[#273349] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shrink-0 shadow-md transition-colors"
              >
                <span>{lang === 'en' ? 'Inquire on Mandate' : 'Consultar Mandato'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* 4 Core Pillars from Slide 12 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {[
                {
                  en: 'Qualified connection between buyers and vetted concession holders',
                  es: 'Conexión calificada entre compradores y titulares mineros verificados'
                },
                {
                  en: 'Comprehensive legal, cadastral (Anna Minería) and environmental due diligence',
                  es: 'Due diligence integral: legal, ambiental y catastral en Anna Minería'
                },
                {
                  en: 'Technical review of concession overlap, surface rights, and valid PTOs',
                  es: 'Revisión de superposición técnica de áreas, servidumbres y PTO vigente'
                },
                {
                  en: 'Full transaction support: NDAs, LOIs, option agreements, and closing deeds',
                  es: 'Soporte transaccional completo: acuerdos de confidencialidad, LOIs y contratos de opción'
                }
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#08172E] mt-1.5 shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-[#08172E] leading-snug">
                    {bullet[lang]}
                  </span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </ScrollReveal>

      </div>
    </section>
  );
};
