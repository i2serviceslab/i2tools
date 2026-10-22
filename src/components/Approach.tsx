import React from 'react';
import { Language } from '../types';
import { SpotlightCard } from './SpotlightCard';
import { ScrollReveal } from './ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

interface ApproachProps {
  lang: Language;
}

export const Approach: React.FC<ApproachProps> = ({ lang }) => {
  return (
    <section id="approach" className="py-24 bg-[#08172E] text-white relative border-t border-[#273349] overflow-hidden">
      {/* Background radial depth */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-radial from-[#00649F]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header: Unified Approach */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="pdf-accent-bar mx-auto mb-4" />
            <div className="text-xs font-bold text-[#01BBDC] tracking-[0.25em] uppercase mb-3">
              {lang === 'en' ? 'OUR APPROACH' : 'NUESTRO ENFOQUE'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {lang === 'en' ? (
                <>
                  Local where you operate.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01BBDC] to-[#718CC1]">
                    Expert in how you finance.
                  </span>
                </>
              ) : (
                <>
                  Locales donde usted opera.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01BBDC] to-[#718CC1]">
                    Expertos en cómo se financia.
                  </span>
                </>
              )}
            </h2>
          </div>
        </ScrollReveal>

        {/* Top Split: Office Photo + Core Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Authentic Real Photo (Medellín Office, Slide 2) */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="right" duration={750}>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#273349]/40 p-2.5 group">
                <img
                  src="/extracted/img_1.jpg"
                  alt="i2 Services S.A.S. Headquarters in Medellín, El Poblado"
                  className="w-full h-auto rounded-2xl object-cover transition-transform duration-700 group-hover:scale-102"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Core Proposition & Direct Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left" delay={150} duration={750}>
              {/* Quote Block corrected per Ian's instructions */}
              <blockquote className="p-6 sm:p-7 rounded-2xl bg-[#273349]/50 border border-white/10 shadow-lg text-slate-200 text-base sm:text-lg font-normal leading-relaxed border-l-4 border-l-[#01BBDC]">
                {lang === 'en' ? (
                  <>
                    <strong className="text-white font-semibold">“You explore and raise capital.</strong> You manage the mining project; <strong className="text-[#01BBDC] font-semibold">we manage the company in Colombia</strong> with real local knowledge, public-company standards, and junior-company costs.”
                  </>
                ) : (
                  <>
                    <strong className="text-white font-semibold">“Usted explora y levanta capital.</strong> Ustedes gestionan el proyecto minero; <strong className="text-[#01BBDC] font-semibold">nosotros administramos la compañía en Colombia</strong> con conocimiento real del terreno, estándares de empresa listada y costos de junior.”
                  </>
                )}
              </blockquote>

              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-[#01BBDC] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'en'
                      ? 'Turnkey corporate presence: local legal incorporation, ANM title defense, corporate banking, and bilingual reporting.'
                      : 'Implementación integral "llave en mano": constitución legal, defensa de títulos ante la ANM, banca corporativa y reportes bilingües.'}
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-[#01BBDC] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'en'
                      ? 'Direct operational control without executive bloat, giving boards and auditors complete peace of mind.'
                      : 'Control operativo riguroso sin sobrecostos fijos de nómina, brindando total tranquilidad a auditores e inversionistas.'}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Two Highlighted Foundation Cards with Bleed Watermark Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1 - Governance & Listed Standards */}
          <ScrollReveal direction="up" delay={200} duration={800}>
            <SpotlightCard className="relative overflow-hidden p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#273349] to-[#08172E] border border-white/15 hover:border-[#01BBDC]/60 transition-all duration-300 group shadow-2xl h-full flex flex-col justify-between">
              
              {/* Bleed Watermark / Icono sangrado al espacio */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 text-[#01BBDC]/[0.05] group-hover:text-[#01BBDC]/[0.12] group-hover:scale-105 transition-all duration-700 pointer-events-none select-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                  <path d="M50 12 L82 24 V52 C82 72 50 88 50 88 C50 88 18 72 18 52 V24 Z" />
                  <path d="M50 24 L72 33 V50 C72 65 50 77 50 77 C50 77 28 65 28 50 V33 Z" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="14" strokeWidth="1" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* Header: Sangrado con el espacio */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#01BBDC]" />
                    <span className="text-xs font-bold tracking-[0.22em] text-[#01BBDC] uppercase">
                      {lang === 'en' ? 'GOVERNANCE & COMPLIANCE' : 'GOBIERNO & ESTÁNDARES'}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#718CC1] tracking-widest">01</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-4 group-hover:text-[#01BBDC] transition-colors">
                  {lang === 'en'
                    ? 'Public-company standards, at junior cost'
                    : 'Estándares de compañía listada, a costo de junior'}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {lang === 'en'
                    ? 'The controls and traceability a listed company requires, with a cost structure built for an exploration junior.'
                    : 'Los controles y la trazabilidad que exige una empresa listada en bolsa, con una estructura de costos diseñada para una empresa en etapa de exploración.'}
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#718CC1]">
                <span>TSX-V / ASX / ANM</span>
                <span className="text-[#01BBDC] font-semibold">100% AUDITABLE</span>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 2 - Dual Contexts */}
          <ScrollReveal direction="up" delay={350} duration={800}>
            <SpotlightCard className="relative overflow-hidden p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#273349] to-[#08172E] border border-white/15 hover:border-[#01BBDC]/60 transition-all duration-300 group shadow-2xl h-full flex flex-col justify-between">
              
              {/* Bleed Watermark / Icono sangrado al espacio */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 text-[#01BBDC]/[0.05] group-hover:text-[#01BBDC]/[0.12] group-hover:scale-105 transition-all duration-700 pointer-events-none select-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                  <circle cx="50" cy="50" r="38" />
                  <ellipse cx="50" cy="50" rx="38" ry="16" strokeDasharray="3 3" />
                  <path d="M50 12 V88 M12 50 H88" strokeWidth="1" />
                  <circle cx="50" cy="50" r="22" strokeWidth="1" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* Header: Sangrado con el espacio */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#01BBDC]" />
                    <span className="text-xs font-bold tracking-[0.22em] text-[#01BBDC] uppercase">
                      {lang === 'en' ? 'LOCAL & CAPITAL MARKETS' : 'TERRENO & MERCADOS'}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#718CC1] tracking-widest">02</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-4 group-hover:text-[#01BBDC] transition-colors">
                  {lang === 'en'
                    ? 'Knowledge of both contexts'
                    : 'Conocimiento de ambos contextos'}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {lang === 'en'
                    ? 'Local where you operate and expert in how you finance: the Colombian ground, and the standards your board, investors and markets expect. That is what lets us run your operation the way we do.'
                    : 'Locales donde opera y expertos en cómo se financia: el terreno colombiano y los estándares que su junta, inversionistas y mercados exigen. Eso es lo que nos permite operar a este nivel.'}
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#718CC1]">
                <span>MEDELLÍN · TORRE DAVIVIENDA</span>
                <span className="text-[#01BBDC] font-semibold">TORONTO / SYDNEY</span>
              </div>
            </SpotlightCard>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
