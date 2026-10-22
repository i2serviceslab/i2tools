import React, { useState } from 'react';
import { Play, X, ShieldCheck, Thermometer, Truck, Check, MapPin, Activity, FileCheck, Clock, ExternalLink } from 'lucide-react';
import { KAIROS_INFO } from '../../data/kairosData';

export const InfrastructureStory: React.FC = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="infraestructura" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D7AAB] block mb-2">
            Infraestructura, BPM & Cadena de Frío
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
            Custodia farmacéutica certificada y trazabilidad molecular continua.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Desde nuestra sede en el <strong>Parque Industrial Garibaldi</strong> (Girón / Bucaramanga), operamos bodegas climatizadas y cámaras frías con auditoría digital permanente para preservar la eficacia de cada medicamento.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Card 1 (Span 7): Photographic Hub & Video Modal */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md flex flex-col justify-between group min-h-[380px]">
            <img
              src="/kairos/about-instalaciones.jpg"
              alt="Instalaciones Kairos Farmacéutica Parque Industrial Garibaldi"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

            {/* Top Bar inside card */}
            <div className="relative z-10 p-6 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-900 flex items-center gap-1.5 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#0D7AAB]" />
                <span>Parque Industrial Garibaldi &bull; Girón, Santander</span>
              </span>

              <span className="text-[11px] font-mono text-white/80 bg-slate-900/70 px-2.5 py-1 rounded-md border border-white/10">
                Manzana 3 Bodega 4
              </span>
            </div>

            {/* Center Play Video Button */}
            <div className="relative z-10 flex items-center justify-center py-6">
              <button
                onClick={() => setVideoOpen(true)}
                className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-slate-950 hover:bg-[#0D7AAB] hover:text-white transition-all shadow-xl group/btn cursor-pointer"
                aria-label="Ver video institucional"
              >
                <div className="w-8 h-8 rounded-full bg-slate-950 text-white group-hover/btn:bg-white group-hover/btn:text-[#0D7AAB] flex items-center justify-center transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Ver Video Oficial de la Sede
                </span>
              </button>
            </div>

            {/* Bottom Specs */}
            <div className="relative z-10 p-6 text-white border-t border-white/10 bg-slate-950/50 backdrop-blur-xs">
              <h3 className="text-base sm:text-lg font-bold">
                Capacidad de Almacenamiento Regulado
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-xl font-normal">
                Zonas diferenciadas de recepción, cuarentena, almacenamiento climatizado (15°C a 25°C) y cuarto frío (2°C a 8°C).
              </p>
            </div>
          </div>

          {/* Bento Card 2 (Span 5): Live Temperature Telemetry Simulator */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-600 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Telemetría Térmica en Vivo
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  Auditoría Conforme
                </span>
              </div>

              {/* Sensor 1: Cámara de Frío */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 mb-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <Thermometer className="w-4 h-4 text-sky-600" />
                    Cámara de Refrigeración #01 (Termolábiles)
                  </span>
                  <span className="font-mono text-emerald-600 font-bold">4.2 °C</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-sky-500 h-2 rounded-full w-[45%]" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Rango Normativo: 2.0°C - 8.0°C</span>
                  <span className="text-emerald-700 font-semibold">&bull; Calibrado</span>
                </div>
              </div>

              {/* Sensor 2: Almacén Climatizado */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <Thermometer className="w-4 h-4 text-amber-600" />
                    Almacén General Climatizado
                  </span>
                  <span className="font-mono text-emerald-600 font-bold">19.4 °C</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-amber-500 h-2 rounded-full w-[60%]" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Rango Normativo: 15.0°C - 25.0°C</span>
                  <span className="text-emerald-700 font-semibold">&bull; Humedad 54% HR</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 mt-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0D7AAB] shrink-0" />
              <span>Registradores digitales con trazabilidad criptográfica y alarmas por SMS.</span>
            </div>
          </div>

          {/* Bento Card 3 (Span 6): Dispatch Times Matrix */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0D7AAB]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Matriz de Despacho & Tiempos de Entrega
                </h3>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">32 Departamentos</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>Santander & Bucaramanga</span>
                  <span className="text-emerald-700 font-bold font-mono">&lt; 24h</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Despacho directo el mismo día para pedidos matutinos.</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>Bogotá & Región Central</span>
                  <span className="text-[#0D7AAB] font-bold font-mono">24 Horas</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Rutas terrestres prioritarias nocturnas consolidadas.</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>Costa Atlántica & Antioquia</span>
                  <span className="text-slate-800 font-bold font-mono">24 - 48h</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Monitoreo térmico extendido en conservadoras especiales.</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>Sur, Occidente & Llanos</span>
                  <span className="text-slate-800 font-bold font-mono">48 Horas</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Guías de trazabilidad en línea con transportadoras aliadas.</p>
              </div>
            </div>
          </div>

          {/* Bento Card 4 (Span 6): Regulatory Framework & Quality Guarantee */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#1A97D1]" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Marco Regulatorio & Cumplimiento Técnico
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  VIGENTE
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1A97D1] shrink-0 mt-0.5" />
                  <span><strong>Resolución 1403 de 2007:</strong> Protocolos estrictos para el modelo de gestión del servicio farmacéutico mayorista.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1A97D1] shrink-0 mt-0.5" />
                  <span><strong>Decreto 2200 de 2005:</strong> Buenas Prácticas de Almacenamiento (BPA) y Distribución (BPD).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1A97D1] shrink-0 mt-0.5" />
                  <span><strong>Inspección Sanitaria:</strong> Vigilancia periódica de la Secretaría de Salud departamental y certificación INVIMA de cada lote.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between mt-4">
              <span>Kairos Farmacéutica S.A.S. &bull; NIT y Registro Activo</span>
              <span className="text-slate-300 font-mono">BPM Auditada</span>
            </div>
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
                className="p-1 rounded-full text-slate-400 hover:text-white cursor-pointer"
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
                title="Kairos Farmacéutica S.A.S."
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
