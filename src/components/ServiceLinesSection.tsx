import React, { useState } from 'react';
import { 
  Building2, 
  Stethoscope, 
  Layers, 
  Pill, 
  Leaf, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  ShieldAlert, 
  FileCheck 
} from 'lucide-react';
import { SERVICE_LINES, KAIROS_INFO, ServiceLine } from '../data/kairosData';

interface ServiceLinesSectionProps {
  onSelectLineForQuote?: (lineTitle: string) => void;
}

export const ServiceLinesSection: React.FC<ServiceLinesSectionProps> = ({ onSelectLineForQuote }) => {
  const [activeTabId, setActiveTabId] = useState<string>(SERVICE_LINES[0].id);

  const activeLine: ServiceLine = SERVICE_LINES.find(l => l.id === activeTabId) || SERVICE_LINES[0];

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className={className} />;
      case 'Stethoscope': return <Stethoscope className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Pill': return <Pill className={className} />;
      case 'Leaf': return <Leaf className={className} />;
      default: return <Pill className={className} />;
    }
  };

  return (
    <section id="servicios" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#0D7FA8] text-xs font-bold uppercase tracking-wider mb-3">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Portafolio Especializado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conoce Nuestras 5 Líneas de Servicio Farmacéutico
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Abastecemos integralmente la cadena de salud en Colombia con productos certificados, inventario garantizado y condiciones comerciales preferenciales.
          </p>
        </div>

        {/* Interactive Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {SERVICE_LINES.map((line) => {
            const isActive = line.id === activeTabId;
            return (
              <button
                key={line.id}
                onClick={() => setActiveTabId(line.id)}
                className={`btn-press inline-flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#1A97D1] to-[#0284C7] text-white shadow-lg shadow-[#1A97D1]/25 ring-2 ring-[#1A97D1]/30'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-xs'
                }`}
              >
                {getIcon(line.iconName, `w-4 h-4 ${isActive ? 'text-white' : 'text-[#1A97D1]'}`)}
                <span>{line.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Detail Panel */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-sky-100 text-[#0D7FA8] text-xs font-bold">
                  {activeLine.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {activeLine.badge}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {activeLine.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-600 mt-2 font-medium">
                  {activeLine.summary}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeLine.fullDescription}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Beneficios y Cobertura de la Línea
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeLine.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=Hola%20Kairos%20Farmac%C3%A9utica,%20deseo%20cotizar%20la%20${encodeURIComponent(activeLine.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 shadow-md shadow-emerald-600/20 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Cotizar {activeLine.title}</span>
                </a>

                <button
                  type="button"
                  onClick={() => onSelectLineForQuote ? onSelectLineForQuote(activeLine.title) : document.getElementById('cotizador')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-press inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 text-sm transition-colors"
                >
                  <span>Simular Pedido</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>
              </div>
            </div>

            {/* Right Technical Specs & Profile Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0A1E3A] to-[#0F2D59] text-white p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#1A97D1] mb-6 backdrop-blur-sm">
                  {getIcon(activeLine.iconName, 'w-6 h-6 text-sky-300')}
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-sky-300 mb-1">
                  Enfoque Destinado
                </div>
                <div className="text-lg font-bold text-white mb-6">
                  {activeLine.targetAudience}
                </div>

                {/* Technical Specs Cards */}
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Ficha Técnica de Distribución
                  </div>
                  {activeLine.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                      <div className="text-[11px] font-medium text-sky-200">{spec.label}</div>
                      <div className="text-sm font-bold text-white mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Assurance */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-slate-300">
                <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Garantía de calidad con lote, registro INVIMA y cadena de custodia farmacéutica.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
