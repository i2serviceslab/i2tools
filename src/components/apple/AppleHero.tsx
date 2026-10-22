import React, { useState } from 'react';
import { ChevronRight, Play, X, ArrowUpRight } from 'lucide-react';
import { KAIROS_INFO } from '../../data/kairosData';

interface AppleHeroProps {
  onQuoteClick?: () => void;
}

export const AppleHero: React.FC<AppleHeroProps> = ({ onQuoteClick }) => {
  const [videoOpen, setVideoOpen] = useState(false);

  const handleQuote = () => {
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      const el = document.getElementById('contacto');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="pt-34 sm:pt-42 lg:pt-48 pb-20 sm:pb-28 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow puramente tipográfico, sin iconitos */}
        <p className="text-xs sm:text-[13px] font-semibold text-[#86868B] uppercase tracking-[0.2em] mb-4 sm:mb-5">
          Distribución Farmacéutica Mayorista &bull; Colombia
        </p>

        {/* Titular Monumental Apple-Style */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1D1D1F] tracking-[-0.04em] leading-[1.03] max-w-4xl mx-auto">
          Medicamentos de calidad.<br />
          Para toda Colombia.
        </h1>

        {/* Subtítulo limpio y de alta legibilidad */}
        <p className="mt-5 sm:mt-6 text-lg sm:text-xl text-[#86868B] max-w-2xl mx-auto font-normal leading-relaxed tracking-tight">
          Abastecimiento mayorista para clínicas, droguerías e IPS. Cadena de frío de 2°C a 8°C y despachos en menos de 24 horas desde el Parque Industrial Garibaldi.
        </p>

        {/* Acciones principales limpias */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={handleQuote}
            className="px-7 py-3 rounded-full text-sm font-semibold text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.97] transition-all duration-200 cursor-pointer shadow-[0_4px_16px_rgba(0,113,227,0.3)] hover:shadow-[0_8px_24px_rgba(0,113,227,0.4)] flex items-center gap-2 group"
          >
            <span>Solicitar Cotización</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=${encodeURIComponent("Hola Kairos Farmacéutica, me gustaría solicitar una cotización formal y vademécum.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-sm font-medium text-[#1D1D1F] hover:text-[#0071E3] bg-[#F5F5F7] hover:bg-[#EAEAEA] active:scale-[0.97] transition-all group"
          >
            <span>Escribir por WhatsApp</span>
            <ChevronRight className="w-4 h-4 text-[#86868B] group-hover:text-[#0071E3] group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        {/* Stage Fotográfico Limpio: Sin elementos invasivos ni animaciones agresivas */}
        <div className="mt-14 sm:mt-16">
          <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden aspect-[16/10] sm:aspect-[21/9] bg-[#F5F5F7] border border-black/[0.06] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] group">
            
            {/* Foto Real de la Bodega Central - Limpia y Nítida */}
            <img
              src="/kairos/hero-bodega.jpg"
              alt="Bodega Central Kairos Farmacéutica Parque Industrial Garibaldi"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />

            {/* Sutil overlay para contraste del botón */}
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors pointer-events-none" />

            {/* Botón de Video Sutil y Sereno (Estilo Apple, sin ondas parpadeantes agresivas) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setVideoOpen(true)}
                className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/95 hover:bg-white text-[#1D1D1F] text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl backdrop-blur-md active:scale-95 transition-all duration-200 cursor-pointer"
                aria-label="Ver video de la sede de Kairos"
              >
                <div className="w-6 h-6 rounded-full bg-[#0071E3] text-white flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Ver video de la sede</span>
              </button>
            </div>

          </div>

          {/* Pie de Foto discreto por fuera del marco */}
          <p className="text-xs text-[#86868B] mt-4 font-normal">
            Bodega Central y Centro de Distribución &bull; Parque Industrial Garibaldi, Manzana 3 Bodega 4 &bull; Girón, Santander
          </p>
        </div>

      </div>

      {/* Video Modal con Vimeo */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-up">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="flex items-center justify-between p-4 bg-[#1D1D1F] text-white text-xs">
              <span className="font-semibold tracking-wide">Video Institucional &bull; Kairos Farmacéutica S.A.S.</span>
              <button
                onClick={() => setVideoOpen(false)}
                className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 cursor-pointer transition-colors"
                aria-label="Cerrar video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://player.vimeo.com/video/1198533427?autoplay=1&title=0&byline=0&portrait=0"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Kairos Farmacéutica Video Institucional"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
