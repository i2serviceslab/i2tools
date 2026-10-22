import React, { useState } from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, FileText, Check } from 'lucide-react';
import { SERVICE_LINES, LAB_LOGOS, KAIROS_INFO } from '../../data/kairosData';

interface CapabilitiesSectionProps {
  onQuoteLine: (lineTitle: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onQuoteLine }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const selectedLine = SERVICE_LINES[selectedIdx];

  return (
    <section id="capacidades" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Partner Laboratories Strip (Cencora Partner Architecture) */}
        <div className="pb-16 border-b border-slate-200 mb-16">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block mb-1">
              Alianzas de Abastecimiento Directo con Laboratorios
            </span>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal">
              Distribuimos marcas y principios activos respaldados por los principales fabricantes farmacéuticos certificados con registro INVIMA en Colombia.
            </p>
          </div>

          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="cencora-marquee-track flex items-center gap-6 sm:gap-8 py-3">
              {[...LAB_LOGOS, ...LAB_LOGOS].map((lab, index) => (
                <div
                  key={`${lab.id}-${index}`}
                  className="flex-shrink-0 flex flex-col justify-center px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition-all duration-200 min-w-[170px]"
                >
                  <span className="text-xs font-extrabold tracking-wider text-slate-900">
                    {lab.name}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {lab.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D7AAB] block mb-2">
            Nuestras Líneas & Portafolio Especializado
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
            Cobertura farmacéutica integral para el territorio nacional.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Aseguramos la disponibilidad de medicamentos esenciales, insumos quirúrgicos y productos comerciales con estricto apego regulatorio y trazabilidad documentada.
          </p>
        </div>

        {/* 5 Service Lines Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 5 Selectable Tabs */}
          <div className="lg:col-span-5 space-y-2">
            {SERVICE_LINES.map((line, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={line.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                      isSelected ? 'text-[#1A97D1]' : 'text-slate-400'
                    }`}>
                      {line.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold leading-snug">
                      {line.title}
                    </h3>
                    <p className={`text-xs mt-1 line-clamp-1 ${
                      isSelected ? 'text-slate-300' : 'text-slate-500'
                    }`}>
                      {line.summary}
                    </p>
                  </div>

                  <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${
                    isSelected ? 'text-[#1A97D1] translate-x-1' : 'text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Architectural Specification Panel */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D7AAB] block mb-1">
                  {selectedLine.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-950">
                  {selectedLine.title}
                </h3>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-800 shadow-2xs">
                {selectedLine.badge}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {selectedLine.fullDescription}
            </p>

            {/* Target Audience Notice */}
            <div className="p-3.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700">
              <span className="font-bold text-slate-900 block mb-0.5">Destinado a:</span>
              <span>{selectedLine.targetAudience}</span>
            </div>

            {/* Key Products List */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-3">
                Medicamentos & Referencias Frecuentes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedLine.topProducts.map((prod, pIdx) => (
                  <div key={pIdx} className="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D7AAB] shrink-0 mt-0.5" />
                    <span>{prod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Strip */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {selectedLine.specs.map((spec, sIdx) => (
                <div key={sIdx} className="p-2.5 rounded-lg bg-white border border-slate-100">
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">{spec.label}</div>
                  <div className="font-bold text-slate-900 mt-0.5">{spec.value}</div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-normal">
                Disponibilidad inmediata con despacho desde el Parque Industrial Garibaldi.
              </div>

              <button
                type="button"
                onClick={() => onQuoteLine(selectedLine.title)}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0A192F] hover:bg-[#0D7AAB] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Cotizar {selectedLine.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
