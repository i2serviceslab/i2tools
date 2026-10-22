import React, { useState } from 'react';
import { ArrowUpRight, Check, ShieldCheck, ChevronRight, Sparkles, Plus, FileText, Search, Pill, Droplet, Layers, ShoppingBag, Leaf } from 'lucide-react';
import { SERVICE_LINES, LAB_LOGOS, VADEMECUM_CATALOG } from '../../data/kairosData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface BiotechPortfolioVisualizerProps {
  onQuoteLine: (lineTitle: string) => void;
  onSelectProduct: (productName: string, line: string) => void;
}

export const BiotechPortfolioVisualizer: React.FC<BiotechPortfolioVisualizerProps> = ({
  onQuoteLine,
  onSelectProduct
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [quickSearch, setQuickSearch] = useState('');
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const currentLine = SERVICE_LINES[activeTab];

  // Icons per line
  const lineIcons = [
    <Droplet className="w-4 h-4" />,
    <Layers className="w-4 h-4" />,
    <ShieldCheck className="w-4 h-4" />,
    <Pill className="w-4 h-4" />,
    <Leaf className="w-4 h-4" />,
  ];

  // Visual card styles per line for high-end biotech variety
  const lineThemes = [
    {
      bgGradient: 'from-blue-950 via-slate-900 to-slate-950',
      accentColor: '#0284C7',
      pillBg: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      image: '/kairos/hero-bodega.jpg'
    },
    {
      bgGradient: 'from-teal-950 via-slate-900 to-slate-950',
      accentColor: '#0D9488',
      pillBg: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
      image: '/kairos/hero-flota.jpg'
    },
    {
      bgGradient: 'from-indigo-950 via-slate-900 to-slate-950',
      accentColor: '#6366F1',
      pillBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      image: '/kairos/about-instalaciones.jpg'
    },
    {
      bgGradient: 'from-sky-950 via-slate-900 to-slate-950',
      accentColor: '#0284C7',
      pillBg: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      image: '/kairos/hero-asesoras.jpg'
    },
    {
      bgGradient: 'from-emerald-950 via-slate-900 to-slate-950',
      accentColor: '#059669',
      pillBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      image: '/kairos/about-instalaciones.jpg'
    }
  ];

  const currentTheme = lineThemes[activeTab];

  // Filter Vademecum references matching current line
  const matchingReferences = VADEMECUM_CATALOG.filter((item) => {
    const lineKey = activeTab === 0 ? 'Hospitalaria' : activeTab === 1 ? 'Insumos' : activeTab === 2 ? 'Institucional' : activeTab === 3 ? 'Comercial' : 'Naturista';
    const matchesLine = item.line === lineKey;
    const matchesSearch = quickSearch.trim() === '' || item.name.toLowerCase().includes(quickSearch.toLowerCase());
    return matchesLine && matchesSearch;
  });

  return (
    <section id="portafolio" className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background Ambient Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(2,132,199,0.15),transparent_70%)] pointer-events-none" />

      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-4 sm:px-8 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00C2CB]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="uppercase tracking-[0.25em] text-[10px] font-bold">Portafolio Farmacéutico 2026</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight leading-[1.04]">
              Cinco líneas maestras de abastecimiento continuo.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
              Disponibilidad inmediata, registros sanitarios INVIMA al día y estricto control de temperatura en almacenamiento y ruta.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onQuoteLine(currentLine.title)}
              className="group pl-6 pr-2 py-3 rounded-full text-xs font-bold text-slate-950 bg-white hover:bg-[#00C2CB] transition-all duration-300 flex items-center gap-3 active:scale-95 cursor-pointer shadow-lg"
            >
              <span className="uppercase tracking-wider">Cotizar {currentLine.title}</span>
              <div className="w-7 h-7 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </div>
        </div>

        {/* Dynamic Line Tabs (Pill Island Navigation) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-10 w-fit">
          {SERVICE_LINES.map((line, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={line.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-slate-950 shadow-md scale-102'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={isSelected ? 'text-[#0284C7]' : 'text-slate-500'}>
                  {lineIcons[idx]}
                </span>
                <span>{line.title}</span>
              </button>
            );
          })}
        </div>

        {/* Massive Double-Bezel Visual Stage for Active Line */}
        <div className="p-2 sm:p-3 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
          <div className={`rounded-[calc(2.5rem-0.6rem)] overflow-hidden bg-gradient-to-br ${currentTheme.bgGradient} border border-white/10 p-6 sm:p-10 lg:p-12 relative`}>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Line Focus & Specs */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${currentTheme.pillBg}`}>
                    {currentLine.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Categoría: {currentLine.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {currentLine.summary}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {currentLine.fullDescription}
                </p>

                {/* Target Audience Badge */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00C2CB] block">
                    Dirigido Principalmente A:
                  </span>
                  <span className="text-sm font-semibold text-white">{currentLine.targetAudience}</span>
                </div>

                {/* Technical Specs Array */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {currentLine.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] uppercase font-bold text-slate-400">{spec.label}</div>
                      <div className="text-xs font-extrabold text-white mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Showcase & Active References Explorer */}
              <div className="lg:col-span-6 space-y-4">
                
                {/* Visual Imagery Pill Card */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/15 shadow-xl group">
                  <img
                    src={currentTheme.image}
                    alt={currentLine.title}
                    className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-104"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#00C2CB]" />
                      Resolución Sanitaria & Trazabilidad por Lote
                    </span>
                    <span className="font-mono text-emerald-400 font-semibold">100% Original</span>
                  </div>
                </div>

                {/* Fast Vademécum References List for this Line */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                      <Pill className="w-3.5 h-3.5 text-[#00C2CB]" />
                      Principios Activos de Mayor Demanda
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">Stock en Garibaldi</span>
                  </div>

                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {matchingReferences.map((ref) => (
                      <div
                        key={ref.id}
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors flex items-center justify-between gap-3 text-xs"
                      >
                        <div>
                          <div className="font-bold text-white">{ref.name}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            {ref.presentation} &bull; <span className="text-emerald-400">{ref.temperature}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => onSelectProduct(ref.name, ref.line)}
                          className="px-3 py-1 rounded-full bg-white/10 hover:bg-[#00C2CB] hover:text-slate-950 text-white text-[11px] font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Cotizar</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Partner Laboratories Strip (High-End Editorial Badges) */}
        <div className="mt-20 pt-14 border-t border-white/10">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00C2CB] block mb-1">
              Alianzas Directas de Fabricación & Calidad
            </span>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-normal">
              Representamos y distribuimos portafolios de los laboratorios farmacéuticos certificados más prestigiosos de Colombia y el mundo.
            </p>
          </div>

          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="cencora-marquee-track flex items-center gap-4 sm:gap-6 py-2">
              {[...LAB_LOGOS, ...LAB_LOGOS].map((lab, index) => (
                <div
                  key={`${lab.id}-${index}`}
                  className="flex-shrink-0 px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex flex-col justify-center min-w-[170px]"
                >
                  <span className="text-xs font-black tracking-widest text-white">
                    {lab.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {lab.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
