import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, HeartHandshake } from 'lucide-react';
import { TESTIMONIALS } from '../data/kairosData';

export const TestimonialsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIdx];

  return (
    <section id="testimonios" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1A97D1]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3 border border-white/10">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Confianza y Experiencia Probada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Lo que Opinan Droguerías, Clínicas y Clientes de Kairos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            La satisfacción de quienes confían en nuestra puntualidad y rigor farmacéutico es nuestro mejor aval de calidad en Colombia.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-slate-800/90 rounded-3xl border border-slate-700/80 p-8 sm:p-12 lg:p-16 shadow-2xl relative">
          
          <Quote className="w-16 h-16 text-[#1A97D1]/20 absolute top-6 right-8 pointer-events-none" />

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
            <span className="ml-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
              Cliente Verificado
            </span>
          </div>

          {/* Quote Body */}
          <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed italic">
            "{current.quote}"
          </blockquote>

          {/* Client Info & Carousel Navigation */}
          <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="text-lg font-extrabold text-white">
                {current.name}
              </div>
              <div className="text-xs sm:text-sm text-sky-400 font-medium">
                {current.position} &bull; {current.institution}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {current.city}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="btn-press w-11 h-11 rounded-full bg-slate-700/80 hover:bg-slate-600 flex items-center justify-center text-white border border-slate-600 focus:outline-none"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-xs font-bold text-slate-400 px-2">
                {currentIdx + 1} / {TESTIMONIALS.length}
              </div>
              <button
                onClick={nextSlide}
                className="btn-press w-11 h-11 rounded-full bg-slate-700/80 hover:bg-slate-600 flex items-center justify-center text-white border border-slate-600 focus:outline-none"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Client Badges Mini-strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Trazabilidad 100% Garantizada</span>
          </div>
          <span className="text-slate-600">&bull;</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Condiciones Comerciales Flexibles</span>
          </div>
          <span className="text-slate-600">&bull;</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Soporte Técnico & Farmacovigilancia</span>
          </div>
        </div>

      </div>
    </section>
  );
};
