import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Thermometer, Truck, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface StorySlide {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  highlight: string;
  stat: string;
  statLabel: string;
  image: string;
}

export const BiotechScrollStory: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides: StorySlide[] = [
    {
      id: 'bodega',
      number: '01',
      tag: 'Infraestructura BPM',
      title: 'Custodia Farmacéutica en el Parque Industrial Garibaldi.',
      description: 'Nuestra central logística en Girón / Santander opera bajo estrictos protocolos de Buenas Prácticas de Almacenamiento. Áreas climatizadas, zonificación de cuarentena y sistematización por código de lote.',
      highlight: 'Resolución INVIMA y Secretaría de Salud Vigente',
      stat: '+2.000',
      statLabel: 'Referencias en Stock Permanente',
      image: '/kairos/hero-bodega.jpg'
    },
    {
      id: 'frio',
      number: '02',
      tag: 'Control Térmico 24/7',
      title: 'Cadena de Frío Molecular Calibrada (2°C a 8°C).',
      description: 'Preservamos la estabilidad de medicamentos termolábiles, insulinas y biológicos con cámaras de refrigeración auditadas por telemetría digital continua. Cero quiebre térmico garantizado en cada remesa.',
      highlight: 'Termo-registradores criptográficos con alarma automática',
      stat: '99.8%',
      statLabel: 'Cumplimiento Térmico en Ruta',
      image: '/kairos/about-instalaciones.jpg'
    },
    {
      id: 'flota',
      number: '03',
      tag: 'Logística Nacional',
      title: 'Despachos en 24 Horas hacia los 32 Departamentos.',
      description: 'Flota acondicionada y alianzas de transporte prioritario terrestre y aéreo. Rutas troncales nocturnas fijas para abastecer clínicas, hospitales y droguerías en cabeceras y municipios de Colombia.',
      highlight: 'Rutas Santander con despacho el mismo día',
      stat: '< 24h',
      statLabel: 'Tiempo de Entrega Regional',
      image: '/kairos/hero-flota.jpg'
    },
    {
      id: 'equipo',
      number: '04',
      tag: 'Atención Directa',
      title: 'Asesoría Técnica y Comercial Asignada a su Sector.',
      description: 'Un equipo humano con experiencia en el mercado farmacéutico colombiano. Acompañamiento personalizado para droguerías comunitarias, directores hospitalarios y contratación con EPS.',
      highlight: 'Respuesta promedio en menos de 15 minutos',
      stat: '+12.400',
      statLabel: 'Despachos Exitosos Anuales',
      image: '/kairos/hero-asesoras.jpg'
    }
  ];

  return (
    <section className="py-24 sm:py-36 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(2,132,199,0.12),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header with Grand Typography */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00C2CB]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C2CB] animate-pulse" />
            <span className="uppercase tracking-[0.25em] text-[10px] font-bold">Rigor Operativo en Imágenes</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
            Cuatro pilares de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-[#00C2CB] to-emerald-400">
              precisión farmacéutica.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Haga clic o desplace para explorar la infraestructura real que respalda cada pedido en Kairos Farmacéutica.
          </p>
        </div>

        {/* Story Stage: Interactive Pinned Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Span 5): Editorial Step Indicators with Huge Typography */}
          <div className="lg:col-span-5 space-y-4">
            {slides.map((slide, idx) => {
              const isSelected = activeSlide === idx;
              return (
                <div
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all duration-500 cursor-pointer ${
                    isSelected
                      ? 'bg-white/10 border-white/25 shadow-2xl scale-102 backdrop-blur-xl'
                      : 'bg-white/2 border-white/5 hover:bg-white/5 hover:border-white/15 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-xs font-black tracking-widest ${
                      isSelected ? 'text-[#00C2CB]' : 'text-slate-500'
                    }`}>
                      {slide.number} &bull; {slide.tag}
                    </span>

                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#00C2CB] animate-ping" />
                    )}
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                    {slide.title}
                  </h3>

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-4 animate-fadeIn">
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {slide.description}
                      </p>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>{slide.highlight}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column (Span 7): Giant High-Impact Cinematic Image Stage */}
          <div className="lg:col-span-7">
            <div className="relative p-2 sm:p-3 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <div className="relative rounded-[calc(3rem-0.6rem)] overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-slate-900 border border-white/10 group">
                
                {/* Cross-fading Large Image */}
                <img
                  key={slides[activeSlide].image}
                  src={slides[activeSlide].image}
                  alt={slides[activeSlide].title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-104 animate-fadeIn"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Top Tag Pill */}
                <div className="absolute top-6 left-6">
                  <div className="biotech-glass-dark px-4 py-2 rounded-full border border-white/20 text-xs font-mono font-bold text-white flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#00C2CB] animate-pulse" />
                    <span>{slides[activeSlide].tag}</span>
                  </div>
                </div>

                {/* Bottom Architectural Stat Badge */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white">
                  <div className="max-w-md">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00C2CB] block mb-1">
                      Sede Garibaldi &bull; Girón / Santander
                    </span>
                    <h4 className="text-base sm:text-xl font-bold leading-snug">
                      {slides[activeSlide].title}
                    </h4>
                  </div>

                  <div className="text-right shrink-0 p-3.5 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#00C2CB] font-mono tracking-tight">
                      {slides[activeSlide].stat}
                    </div>
                    <div className="text-[10px] text-slate-300 font-medium">
                      {slides[activeSlide].statLabel}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Slide Navigation Dots */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {slides.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveSlide(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === dotIdx ? 'w-10 bg-[#00C2CB]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Ver diapositiva ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
