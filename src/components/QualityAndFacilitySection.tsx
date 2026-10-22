import React, { useState } from 'react';
import { 
  Truck, 
  ShieldCheck, 
  Thermometer, 
  Clock, 
  Play, 
  X, 
  CheckCircle, 
  MapPin, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import { QUALITY_PILLARS, KAIROS_INFO } from '../data/kairosData';

export const QualityAndFacilitySection: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck className="w-6 h-6 text-[#1A97D1]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'ThermometerSnowflake': return <Thermometer className="w-6 h-6 text-sky-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-indigo-600" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#1A97D1]" />;
    }
  };

  return (
    <section id="infraestructura" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Infraestructura & Confiabilidad Médica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Almacenamiento Seguro, Cadena de Frío y Estándares BPM
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Desde nuestra sede principal en el <strong>Parque Industrial Garibaldi</strong> (Girón, Santander), implementamos tecnología y trazabilidad rigurosa para que cada producto llegue en perfectas condiciones terapéuticas.
          </p>
        </div>

        {/* Feature Split: Video & Infrastructure Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Facility Real Photo & Video Trigger Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group bg-slate-900">
              <img
                src="/kairos/about-instalaciones.jpg"
                alt="Instalaciones Kairos Farmacéutica Parque Industrial Garibaldi"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

              {/* Play Video Button Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="btn-press flex flex-col items-center gap-3 p-4 group/play focus:outline-none"
                  aria-label="Reproducir video institucional"
                >
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-md shadow-2xl flex items-center justify-center text-[#1A97D1] group-hover/play:scale-110 group-hover/play:bg-[#1A97D1] group-hover/play:text-white transition-all">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    Ver Video Institucional (Vimeo)
                  </span>
                </button>
              </div>

              {/* Bottom Facility Address Tag */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">Parque Industrial Garibaldi, Girón, Santander</span>
                </div>
                <span className="text-xs text-sky-200 bg-sky-900/60 px-2.5 py-1 rounded-md border border-sky-400/30">
                  Cadena de Suministro Certificada
                </span>
              </div>
            </div>
          </div>

          {/* Right Highlights & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Compromiso con la Salud de Colombia
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                En Kairos Farmacéutica nos dedicamos a garantizar que los productos farmacéuticos lleguen a su destino de manera eficiente, oportuna y segura. Nuestra pasión por la salud y el servicio nos impulsa a ser líderes en el sector farmacéutico colombiano.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Calibración Termo-Higrométrica Continua</h4>
                    <p className="text-xs text-slate-500">Zonas de 15°C a 25°C y cuartos fríos de 2°C a 8°C auditados permanentemente.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Trazabilidad por Lotes y Vencimientos</h4>
                    <p className="text-xs text-slate-500">Sistemas de codificación exacta para responder ante cualquier requerimiento INVIMA.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Embalaje Térmico Especializado</h4>
                    <p className="text-xs text-slate-500">Neveras térmicas y geles refrigerantes certificados para rutas de larga distancia.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 text-center">
                <div className="text-2xl font-extrabold text-[#1A97D1]">100%</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Confiabilidad en Cadena de Frío</div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-center">
                <div className="text-2xl font-extrabold text-emerald-600">+32</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Departamentos Abastecidos</div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUALITY_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getPillarIcon(pillar.iconName)}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1A97D1]">
                  {pillar.subtitle}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">{pillar.statLabel}</span>
                <span className="text-sm font-extrabold text-slate-800">{pillar.stat}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Vimeo Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-slate-900 text-white border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-[#1A97D1] fill-current" />
                <span className="text-sm font-bold">Video Corporativo - Kairos Farmacéutica S.A.S.</span>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Cerrar video"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Vimeo Iframe Player */}
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
