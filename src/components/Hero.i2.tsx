import React from 'react';
import { Language } from '../types';
import { ArrowRight } from 'lucide-react';
import { HowWeWorkMotionGraphic } from './HowWeWorkMotionGraphic';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 bg-[#08172E] text-white overflow-hidden border-b border-[#273349]">
      {/* Raycast-style Atmospheric Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#00446B]/40 via-[#00649F]/30 to-[#01BBDC]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#01BBDC]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* 1. Centered Corporate Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#273349]/70 border border-[#273349] text-xs font-medium text-slate-300 mb-8 tracking-wide">
          <span className="text-[#01BBDC] font-semibold">i2 Services S.A.S.</span>
          <span className="text-slate-500">·</span>
          <span>{lang === 'en' ? 'Mining Corporate Management & Legal Operations' : 'Gestión Corporativa y Legal para Minería'}</span>
        </div>

        {/* 2. Bold, Clean, Uncluttered Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] max-w-5xl mx-auto mb-6">
          {lang === 'en' ? (
            <>
              You drill. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01BBDC] via-[#38BDF8] to-[#718CC1]">We do the rest.</span>
            </>
          ) : (
            <>
              Usted perfora. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01BBDC] via-[#38BDF8] to-[#718CC1]">Nosotros hacemos el resto.</span>
            </>
          )}
        </h1>

        {/* 3. Balanced, Highly Readable Subhead */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          {lang === 'en'
            ? 'Public-company standards at junior cost. We run your Colombian back-office, legal compliance, and daily operations with verified in-house expertise.'
            : 'Estándares de compañía listada en bolsa a costo de junior. Administramos su back-office, cumplimiento legal y operación diaria en Colombia con equipo propio.'}
        </p>

        {/* 4. Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="btn-press inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#01BBDC] hover:bg-[#38BDF8] text-[#08172E] font-bold text-sm tracking-wide transition-all shadow-md shadow-[#01BBDC]/20"
          >
            <span>{lang === 'en' ? 'Schedule a Briefing' : 'Agendar Reunión Inicial'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#value-prop"
            className="btn-press inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#273349] hover:bg-[#32405a] text-white border border-slate-700/80 text-sm font-medium transition-all"
          >
            <span>{lang === 'en' ? 'Explore Framework' : 'Ver Propuesta'}</span>
          </a>
        </div>

        {/* 5. Animated 3-Stage Process Pipeline */}
        <div className="max-w-6xl mx-auto">
          <HowWeWorkMotionGraphic lang={lang} />
        </div>

        {/* 6. Feature Pillars Strip below Showcase */}
        <div className="mt-16 pt-12 border-t border-slate-800 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
          
          <ScrollReveal direction="up" delay={50} duration={650}>
            <div className="space-y-1.5">
              <div className="text-2xl sm:text-3xl font-black text-[#01BBDC] font-mono">
                02
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                {lang === 'en' ? 'Listed Clients' : 'Clientes en Bolsa'}
              </div>
              <div className="text-xs text-[#718CC1]">
                TSX & ASX Listed Mining
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={120} duration={650}>
            <div className="space-y-1.5">
              <div className="text-2xl sm:text-3xl font-black text-[#01BBDC] font-mono">
                22
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                {lang === 'en' ? 'Team Specialists' : 'Especialistas'}
              </div>
              <div className="text-xs text-[#718CC1]">
                {lang === 'en' ? 'In-house Medellín office' : 'Oficina propia Medellín'}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={190} duration={650}>
            <div className="space-y-1.5">
              <div className="text-2xl sm:text-3xl font-black text-[#01BBDC] font-mono">
                14+
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                {lang === 'en' ? 'Titles & 60 Filings' : 'Títulos y 60 Trámites'}
              </div>
              <div className="text-xs text-[#718CC1]">
                {lang === 'en' ? 'Protected before ANM' : 'Al día ante la ANM'}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={260} duration={650}>
            <div className="space-y-1.5">
              <div className="text-2xl sm:text-3xl font-black text-[#01BBDC] font-mono">
                06
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                {lang === 'en' ? 'Tier-1 Bank Accounts' : 'Cuentas Bancarias'}
              </div>
              <div className="text-xs text-[#718CC1]">
                Bancolombia & BBVA
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};