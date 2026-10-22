import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Thermometer, 
  PhoneCall, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  MapPin, 
  Building2, 
  Users 
} from 'lucide-react';
import { KAIROS_INFO } from '../data/kairosData';

interface HeroProps {
  onOpenVideo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideo }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      id: 'flota',
      title: 'Flota y Logística de Distribución',
      subtitle: 'Vehículos equipados con monitoreo térmico para entrega oportuna',
      image: '/kairos/hero-flota.jpg',
      badge: 'Cobertura Nacional',
      icon: Truck
    },
    {
      id: 'asesoras',
      title: 'Equipo Comercial Calificado',
      subtitle: 'Asesoría cercana, ágil y dedicada para droguerías, clínicas e IPS',
      image: '/kairos/hero-asesoras.jpg',
      badge: 'Atención Directa',
      icon: Users
    },
    {
      id: 'bodega',
      title: 'Bodega Central de Almacenamiento',
      subtitle: 'Infraestructura de vanguardia en Parque Industrial Garibaldi',
      image: '/kairos/hero-bodega.jpg',
      badge: 'Estándar BPM / BPD',
      icon: Building2
    }
  ];

  // Auto-rotate every 6 seconds if not interacted
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section id="inicio" className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-white to-slate-50">
      {/* Subtle Background Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-60 right-0 w-[400px] h-[400px] bg-teal-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sky-200 shadow-sm text-xs sm:text-sm font-semibold text-slate-700">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[#0D7FA8] font-bold">Distribuidora Mayorista Farmacéutica</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-medium">Bucaramanga &bull; Toda Colombia</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Medicamentos de Calidad y Distribución Farmacéutica{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A97D1] to-[#0D9488]">
                para toda Colombia
              </span>
            </h1>

            {/* Subheading / Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              En <strong className="text-slate-800">Kairos Farmacéutica S.A.S.</strong> conectamos laboratorios líderes con droguerías, clínicas, hospitales y el canal institucional. Garantizamos rigurosa <strong>cadena de frío</strong>, disponibilidad permanente de stock y entregas con trazabilidad certificada.
            </p>

            {/* Micro Highlights Pill Group */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Registro INVIMA y BPM</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-xs">
                <Thermometer className="w-5 h-5 text-[#1A97D1] shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Cadena de Frío Estricta</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-xs">
                <Truck className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Despacho en 32 Deptos</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#equipo"
                className="btn-press inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#1A97D1] to-[#0284C7] hover:from-[#1480B2] hover:to-[#0369A1] shadow-lg shadow-[#1A97D1]/25 hover:shadow-xl hover:shadow-[#1A97D1]/35 transition-all text-sm sm:text-base"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Contactar a un Asesor</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#servicios"
                className="btn-press inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/80 shadow-sm transition-colors text-sm sm:text-base"
              >
                <span>Ver 5 Líneas de Servicio</span>
              </a>

              {onOpenVideo && (
                <button
                  type="button"
                  onClick={onOpenVideo}
                  className="btn-press inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#0D7FA8] hover:text-[#0A6789] hover:bg-sky-50 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-[#1A97D1]/10 flex items-center justify-center text-[#1A97D1]">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </span>
                  <span>Video Corporativo</span>
                </button>
              )}
            </div>

            {/* Guarantee note */}
            <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Atención directa sin intermediarios &bull; Precios mayoristas para farmacias y entidades
            </p>
          </div>

          {/* Right Column: Interactive Real Operations Carousel */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-3 bg-white/90 border border-slate-200/90 shadow-2xl backdrop-blur-sm">
              
              {/* Media Display Window */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-inner group">
                <img
                  src={heroSlides[activeSlide].image}
                  alt={heroSlides[activeSlide].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-800 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#1A97D1]"></span>
                    {heroSlides[activeSlide].badge}
                  </span>
                </div>

                {/* Slide Caption Bottom */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <h3 className="text-base sm:text-lg font-bold drop-shadow-md">
                    {heroSlides[activeSlide].title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2 mt-0.5 drop-shadow">
                    {heroSlides[activeSlide].subtitle}
                  </p>
                </div>
              </div>

              {/* Slide Selector Buttons */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                {heroSlides.map((slide, idx) => {
                  const Icon = slide.icon;
                  const isActive = activeSlide === idx;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => setActiveSlide(idx)}
                      className={`text-left p-2.5 rounded-xl transition-all border text-xs ${
                        isActive
                          ? 'bg-sky-50 border-[#1A97D1] text-[#0D7FA8] shadow-xs'
                          : 'bg-slate-50 border-transparent hover:bg-slate-100 text-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold truncate">
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#1A97D1]' : 'text-slate-400'}`} />
                        <span className="truncate">{slide.title.split(' ')[0]}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 line-clamp-1 block mt-0.5 font-normal">
                        {slide.badge}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Floating Real-time Trust Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xl max-w-[260px] animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Thermometer className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Control Térmico</div>
                  <div className="text-xs font-extrabold text-slate-800">2°C - 8°C / 15°C - 25°C</div>
                  <div className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Calibración 24/7
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Bottom Key Metrics Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-200/80">
          {KAIROS_INFO.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-sky-300 transition-all text-center group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#1A97D1] tracking-tight group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-800 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
