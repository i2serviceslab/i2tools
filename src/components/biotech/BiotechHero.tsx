import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Play, ShieldCheck, Thermometer, Truck, MapPin, X, Activity, Sparkles, ChevronDown } from 'lucide-react';
import { KAIROS_INFO } from '../../data/kairosData';

interface BiotechHeroProps {
  onQuoteClick: () => void;
}

export const BiotechHero: React.FC<BiotechHeroProps> = ({ onQuoteClick }) => {
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
    <section className="relative pt-36 sm:pt-44 lg:pt-52 pb-24 sm:pb-36 bg-white overflow-hidden">
      
      {/* Background Soft Mesh Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-[radial-gradient(ellipse_at_top,rgba(2,132,199,0.1),rgba(0,194,203,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Eyebrow Tag Pill */}
        <div className="flex items-center justify-center sm:justify-start mb-8 animate-fadeIn">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-[11px] font-mono text-slate-800 backdrop-blur-md shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#00C2CB] animate-ping" />
            <span className="uppercase tracking-[0.25em] text-[#0284C7] font-bold">
              LOGÍSTICA FARMACÉUTICA NACIONAL
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-sans">Garibaldi &bull; 32 Departamentos</span>
          </div>
        </div>

        {/* Masterful Typographic Display Headline */}
        <div className="max-w-5xl space-y-7 text-center sm:text-left">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-[5.4rem] font-extrabold text-slate-950 tracking-[-0.038em] leading-[0.98]">
            DISTRIBUCIÓN FARMACÉUTICA <br />
            <span className="biotech-gradient-text">
              DE ALTA PRECISIÓN
            </span>{' '}
            PARA COLOMBIA.
          </h1>

          <p className="text-lg sm:text-2xl text-slate-600 max-w-3xl leading-relaxed font-normal">
            Abastecemos con rigor clínico a clínicas, hospitales, IPS y droguerías en todo el país. Trazabilidad molecular, cadena de frío <strong>2°C a 8°C</strong> y despachos en <strong>menos de 24 horas</strong> desde el Parque Industrial Garibaldi.
          </p>

          {/* Action CTAs (Island Button Architecture with Kinetic Feel) */}
          <div className="pt-3 flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <button
              onClick={onQuoteClick}
              className="group pl-8 pr-3 py-4 rounded-full text-xs font-bold text-white bg-[#0A192F] hover:bg-[#0284C7] transition-all duration-300 flex items-center gap-4 active:scale-[0.98] shadow-xl cursor-pointer"
            >
              <span className="uppercase tracking-wider text-[12px]">Solicitar Cotización de Vademécum</span>
              <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white group-hover:text-[#0284C7] flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </button>

            <button
              onClick={() => setVideoOpen(true)}
              className="group px-7 py-4 rounded-full text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200/90 border border-slate-200 transition-all duration-300 flex items-center gap-3 active:scale-[0.98] cursor-pointer shadow-xs"
            >
              <div className="w-7 h-7 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span className="uppercase tracking-wider text-[11px]">Ver Showreel de la Sede</span>
            </button>
          </div>
        </div>

        {/* Massive Full-Width Hero Stage with Scroll Parallax Transformation */}
        <div className="mt-16 sm:mt-20">
          <div className="p-2 sm:p-4 rounded-[3rem] bg-slate-100/90 border border-slate-200/80 shadow-[0_30px_70px_rgba(0,0,0,0.08)]">
            <div className="relative rounded-[calc(3rem-0.8rem)] overflow-hidden aspect-[16/10] sm:aspect-[21/9] bg-slate-950 border border-slate-800/80 group">
              
              {/* Warehouse Real Photo with subtle scroll scale */}
              <img
                src="/kairos/hero-bodega.jpg"
                alt="Bodega Central Kairos Garibaldi"
                style={{
                  transform: `scale(${1 + Math.min(scrollY * 0.0003, 0.08)})`,
                  transition: 'transform 0.1s ease-out'
                }}
                className="w-full h-full object-cover opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating Top Telemetry Capsules */}
              <div className="absolute top-5 sm:top-8 left-5 sm:left-8 flex flex-wrap items-center gap-3">
                <div className="biotech-glass px-4 py-2 rounded-full flex items-center gap-2.5 shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-900 font-mono">
                    2°C - 8°C &bull; Cámaras Frías Calibradas
                  </span>
                </div>

                <div className="hidden sm:flex biotech-glass px-4 py-2 rounded-full items-center gap-2 text-xs font-bold text-slate-800 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                  <span>Resolución INVIMA Vigente</span>
                </div>
              </div>

              {/* Center Play Showreel Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <button
                  onClick={() => setVideoOpen(true)}
                  className="pointer-events-auto flex items-center gap-3.5 px-7 py-3.5 rounded-full bg-white text-slate-950 hover:bg-[#00C2CB] transition-all duration-300 shadow-2xl group/play cursor-pointer backdrop-blur-md active:scale-95"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover/play:scale-105 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-wider">
                    Showreel Oficial Vimeo (1:12)
                  </span>
                </button>
              </div>

              {/* Bottom Architectural Caption */}
              <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#00C2CB] block mb-1">
                    Centro de Distribución Garibaldi
                  </span>
                  <h3 className="font-display text-lg sm:text-2xl font-bold leading-snug">
                    Parque Industrial Garibaldi, Manzana 3 Bodega 4 &bull; Girón, Santander
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-xl font-normal hidden sm:block">
                    Almacenamiento regulado bajo estándares BPM y BPD con trazabilidad sistematizada de lotes y fechas de vencimiento.
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-300 shrink-0">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#00C2CB]" />
                    <span>Santander &lt; 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span>99.8% Cumplimiento</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 4 Clean Metric Blocks with Exaggerated Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-12 border-t border-slate-200">
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              +12.400
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#0284C7] mt-2">
              Despachos Anuales
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Entregas auditadas a farmacias y clínicas en toda Colombia.</p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              99.8%
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#0284C7] mt-2">
              Cadena de Frío
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Termo-registradores sin quiebre térmico en ruta.</p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              32
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#0284C7] mt-2">
              Departamentos
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Rutas troncales terrestres y convenios aéreos prioritarios.</p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              &lt; 24h
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#0284C7] mt-2">
              Entrega Regional
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Despacho el mismo día en Santander y Norte de Santander.</p>
          </div>
        </div>

      </div>

      {/* Vimeo Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-950 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Showreel Oficial &bull; Kairos Farmacéutica S.A.S.
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
