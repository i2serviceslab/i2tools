import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { AmbientParticles } from './AmbientParticles';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    // Video is ~8s; seamlessly engage the ambient floating particles as it concludes
    const timer = setTimeout(() => {
      setVideoEnded(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#08172E] text-white overflow-hidden border-b border-[#273349]">
      {/* Background Video Layer: Blue Particles Motion (Single play, then slow ambient drift) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <video
          autoPlay
          muted
          playsInline
          onEnded={() => setVideoEnded(true)}
          className={`w-full h-full object-cover opacity-80 sm:opacity-90 transition-transform duration-[16000ms] ease-out ${
            videoEnded ? 'scale-105' : 'scale-100'
          }`}
        >
          <source src="/hero-particles.mp4" type="video/mp4" />
        </video>

        {/* Ambient Floating Particle Cloud that seamlessly extends after the video */}
        <AmbientParticles
          active={videoEnded}
          className="mix-blend-screen opacity-90 transition-opacity duration-1500"
        />

        {/* Soft gradient masks to let particles shine vividly while preserving crisp text */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08172E]/50 via-[#08172E]/25 to-[#08172E]" />
      </div>

      {/* Ambient Depth Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#00446B]/40 via-[#00649F]/30 to-[#01BBDC]/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#01BBDC]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* 1. Centered Corporate Eyebrow with Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#273349]/70 border border-[#273349] text-xs font-medium text-slate-300 mb-8 tracking-wide">
          <span className="text-[#01BBDC] font-semibold">i2 Services S.A.S.</span>
          <span className="text-slate-500">·</span>
          <span className="text-slate-300">Your Ground, Our Experience</span>
        </div>

        {/* 2. Bold, Clean, Uncluttered Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[1.05] max-w-5xl mx-auto mb-6">
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
            ? 'Public-company standards at junior cost. You manage the exploration and raise capital; we manage your Colombian company, banking, payroll and regulatory compliance.'
            : 'Estándares de compañía listada en bolsa a costo de junior. Usted lidera la exploración y el levantamiento de capital; nosotros administramos su empresa en Colombia, finanzas, nómina y cumplimiento regulatorio.'}
        </p>

        {/* 4. Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <a
            href="#contact"
            className="btn-press inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#01BBDC] hover:bg-[#38BDF8] text-[#08172E] font-bold text-sm tracking-wide transition-all shadow-md shadow-[#01BBDC]/20"
          >
            <span>{lang === 'en' ? 'Schedule an Introduction' : 'Agendar Presentación'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#approach"
            className="btn-press inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#273349] hover:bg-[#32405a] text-white border border-slate-700/80 text-sm font-medium transition-all"
          >
            <span>{lang === 'en' ? 'Our Approach' : 'Nuestro Enfoque'}</span>
          </a>
        </div>

        {/* 5. Feature Pillars Strip */}
        <div className="pt-12 border-t border-slate-800/80 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
          
          <ScrollReveal direction="up" delay={50} duration={650}>
            <div className="space-y-1.5">
              <div className="text-2xl sm:text-3xl font-black text-[#01BBDC]">
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
              <div className="text-2xl sm:text-3xl font-black text-[#01BBDC]">
                22
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                {lang === 'en' ? 'Team Specialists' : 'Especialistas'}
              </div>
              <div className="text-xs text-[#718CC1]">
                {lang === 'en' ? 'Torre Davivienda, Medellín' : 'Torre Davivienda, Medellín'}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={190} duration={650}>
            <div className="space-y-1.5">
              <div className="text-2xl sm:text-3xl font-black text-[#01BBDC]">
                14 / 44
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                {lang === 'en' ? 'Titles & Applications' : 'Títulos y Solicitudes'}
              </div>
              <div className="text-xs text-[#718CC1]">
                {lang === 'en' ? '14 Titles · 44 PCC Proposals' : '14 Concesiones · 44 Propuestas PCC'}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={260} duration={650}>
            <div className="space-y-1.5">
              <div className="text-2xl sm:text-3xl font-black text-[#01BBDC]">
                06
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                {lang === 'en' ? 'Colombian Bank Accounts' : 'Cuentas Bancarias'}
              </div>
              <div className="text-xs text-[#718CC1]">
                Bancolombia, BBVA, Banco Agrario
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};