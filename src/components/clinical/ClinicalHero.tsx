import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ShieldCheck, Thermometer, Truck, MapPin, X, CheckCircle2 } from 'lucide-react';
import { KAIROS_INFO } from '../../data/kairosData';

interface ClinicalHeroProps {
  onQuoteClick: () => void;
}

export const ClinicalHero: React.FC<ClinicalHeroProps> = ({ onQuoteClick }) => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Eyebrow Label (Abbott / Pfizer Clean Standard) */}
        <div className="mb-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0077C8] block mb-2">
            Distribución Farmacéutica Mayorista &bull; Cobertura Colombia
          </span>
        </div>

        {/* Monumental Clean Typography */}
        <div className="max-w-5xl space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-slate-900 tracking-[-0.035em] leading-[1.05]">
            Distribución farmacéutica mayorista con despachos en 24h y cadena de frío garantizada.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
            Abastecemos droguerías, clínicas, hospitales e IPS en los 32 departamentos de Colombia desde nuestra central logística en el <strong>Parque Industrial Garibaldi</strong> (Girón / Bucaramanga). Precios directos mayoristas y resolución INVIMA al día.
          </p>

          {/* Understated Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onQuoteClick}
              className="px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0A2540] hover:bg-[#0077C8] transition-all duration-200 flex items-center gap-2.5 cursor-pointer shadow-xs active:scale-[0.98]"
            >
              <span>Solicitar Cotización de Vademécum</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setVideoOpen(true)}
              className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all duration-200 flex items-center gap-2.5 cursor-pointer active:scale-[0.98]"
            >
              <Play className="w-3.5 h-3.5 fill-current text-slate-900" />
              <span>Ver Showreel de la Sede</span>
            </button>
          </div>
        </div>

        {/* Monumental Photographic Stage (Real Warehouse in Garibaldi) */}
        <div className="mt-14 sm:mt-16">
          <div className="relative rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[21/9] bg-slate-100 border border-slate-200/90 shadow-md group">
            
            {/* Real photo with subtle Apple-style scale on scroll */}
            <img
              src="/kairos/hero-bodega.jpg"
              alt="Bodega Central Kairos Garibaldi"
              style={{
                transform: `scale(${1 + Math.min(scrollY * 0.0002, 0.06)})`,
                transition: 'transform 0.1s ease-out'
              }}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Top Left Clean Certification Badge */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-xs flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0077C8]" />
              <span className="text-xs font-bold text-slate-900">
                Buenas Prácticas de Almacenamiento (BPA) &bull; INVIMA
              </span>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 block mb-1">
                  Centro Logístico Principal
                </span>
                <h3 className="text-base sm:text-xl font-bold">
                  Parque Industrial Garibaldi, Manzana 3 Bodega 4 &bull; Girón, Santander
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl font-normal hidden sm:block">
                  Instalaciones climatizadas de alta capacidad con cámaras de refrigeración continua para medicamentos termolábiles.
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-200 shrink-0">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-sky-400" />
                  <span>Santander &lt; 24h</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Thermometer className="w-4 h-4 text-emerald-400" />
                  <span>2°C a 8°C Calibrado</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Clean Corporate Facts (Novartis / Pfizer Architectural Alignment) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-14 pt-10 border-t border-slate-200">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              +12.400
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Despachos Anuales
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Envíos completados a droguerías, clínicas e IPS en toda Colombia.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              99.8%
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Cadena de Frío
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Auditoría digital continua de termo-registradores sin quiebre térmico.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              32
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Departamentos
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Rutas troncales terrestres y convenios aéreos prioritarios.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              &lt; 24h
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Entrega Regional
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Despachos en Santander y Norte de Santander el mismo día.
            </p>
          </div>
        </div>

      </div>

      {/* Vimeo Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Video Oficial Sede Central &bull; Kairos Farmacéutica S.A.S.
              </span>
              <button
                onClick={() => setVideoOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
                aria-label="Cerrar video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://player.vimeo.com/video/1198533427?autoplay=1&title=0&byline=0&portrait=0"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Kairos Farmacéutica S.A.S."
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
