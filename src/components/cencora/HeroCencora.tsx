import React, { useState, useMemo } from 'react';
import { ArrowRight, ChevronRight, Search, ShieldCheck, Thermometer, CheckCircle2, Clock, MapPin, X } from 'lucide-react';
import { KAIROS_INFO, VADEMECUM_CATALOG, VademecumItem } from '../../data/kairosData';

interface HeroCencoraProps {
  onQuoteClick: () => void;
  onSelectProduct?: (productName: string, line: string) => void;
}

export const HeroCencora: React.FC<HeroCencoraProps> = ({ onQuoteClick, onSelectProduct }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'Todos' | 'Hospitalaria' | 'Insumos' | 'Comercial'>('Todos');

  // Filtered Vademecum items for live search preview
  const searchResults = useMemo(() => {
    if (!searchTerm.trim() && selectedFilter === 'Todos') return [];
    
    return VADEMECUM_CATALOG.filter((item) => {
      const matchesSearch = searchTerm.trim() === '' || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.presentation.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = selectedFilter === 'Todos' || item.line === selectedFilter;

      return matchesSearch && matchesFilter;
    }).slice(0, 5);
  }, [searchTerm, selectedFilter]);

  const handlePickProduct = (item: VademecumItem) => {
    if (onSelectProduct) {
      onSelectProduct(item.name, item.line);
    }
    onQuoteClick();
  };

  return (
    <section className="pt-28 pb-16 lg:pt-34 lg:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Operational Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Operación Nacional Activa &bull; Despachos en menos de 24h</span>
        </div>

        {/* Grid Split: Left = Core Value Proposition & Search Tool; Right = Real Infrastructure Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Direct Commercial & Operational Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D7AAB]">
              Distribución Farmacéutica Mayorista &bull; Cobertura Colombia
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-[1.12]">
              Distribución Farmacéutica Mayorista con Despachos en 24h y Cadena de Frío Garantizada.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Abastecemos droguerías, clínicas e IPS en los 32 departamentos de Colombia desde nuestra central logística en el <strong>Parque Industrial Garibaldi</strong> (Girón / Bucaramanga). Precios directos mayoristas y resolución INVIMA al día.
            </p>

            {/* Live Vademécum Rapid Search Tool */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5 text-[#0D7AAB]" />
                  Consulta Rápida de Vademécum & Stock
                </span>
                <span className="text-[11px] text-slate-500 hidden sm:inline">
                  +2.000 referencias disponibles
                </span>
              </div>

              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ej. Ampicilina, Ceftriaxona, Insulina, Guantes, Lactato..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 shadow-2xs"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-700 p-0.5"
                    aria-label="Borrar búsqueda"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Quick Category Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {(['Todos', 'Hospitalaria', 'Insumos', 'Comercial'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors cursor-pointer ${
                      selectedFilter === filter
                        ? 'bg-[#0A192F] text-white'
                        : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                    }`}
                  >
                    {filter === 'Todos' ? 'Todas las líneas' : filter}
                  </button>
                ))}
              </div>

              {/* Real-time search dropdown results if user typed or selected */}
              {searchResults.length > 0 && (
                <div className="mt-2 divide-y divide-slate-100 border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm animate-fadeIn">
                  <div className="bg-slate-100/70 px-3 py-1.5 text-[11px] font-bold text-slate-600 flex justify-between">
                    <span>Resultados de Vademécum</span>
                    <span className="text-[#0D7AAB]">Disponibilidad Inmediata</span>
                  </div>
                  {searchResults.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900">{item.name}</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {item.line}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5 flex flex-wrap gap-x-3">
                          <span>{item.presentation}</span>
                          <span>&bull;</span>
                          <span className="text-slate-700 font-medium">{item.invima}</span>
                          <span>&bull;</span>
                          <span className="text-emerald-700 font-medium">{item.temperature}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handlePickProduct(item)}
                        className="px-3.5 py-1.5 bg-[#0A192F] hover:bg-[#0D7AAB] text-white text-xs font-bold rounded-full transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                      >
                        <span>Cotizar</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                onClick={onQuoteClick}
                className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0A192F] hover:bg-[#0D7AAB] transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Solicitar Cotización Formal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#quienes-servimos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-[#0D7AAB] transition-colors group"
              >
                <span>Soluciones por tipo de cliente</span>
                <ChevronRight className="w-4 h-4 text-[#0D7AAB] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Authentic Infrastructure & Fleet Photography */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-lg group">
              <img
                src="/kairos/hero-bodega.jpg"
                alt="Bodega Central Kairos Farmacéutica Parque Industrial Garibaldi"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-102"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Top Verified Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/40 shadow-xs flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0D7AAB]" />
                <span className="text-[11px] font-bold text-slate-900">
                  Resolución Sanitaria Vigente
                </span>
              </div>

              {/* Bottom Architectural Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A97D1] block mb-1">
                  Centro de Distribución Central
                </span>
                <h3 className="text-base font-bold leading-snug">
                  Parque Industrial Garibaldi &bull; Manzana 3 Bodega 4
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Instalaciones climatizadas con cámaras de refrigeración certificadas para medicamentos termolábiles.
                </p>
              </div>
            </div>

            {/* Fleet & Regional Dispatch Micro-Card */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-white">
                <img
                  src="/kairos/hero-flota.jpg"
                  alt="Flota de transporte Kairos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs text-slate-700 space-y-0.5">
                <div className="font-bold text-slate-900">
                  Flota Propia & Transportadoras Aliadas
                </div>
                <div className="text-slate-500">
                  Monitoreo de ruta permanente y empaque térmico de alta densidad.
                </div>
                <div className="text-[11px] text-[#0D7AAB] font-semibold">
                  Tiempos: Santander &lt; 24h &bull; Nacional 24-48h
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 3 Key Operational Truths (Architectural Layout with Accessible Contrast) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-slate-200">
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              32 Departamentos
            </div>
            <div className="text-sm font-semibold text-slate-800">
              Cobertura Logística Nacional
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Despachos con itinerarios programados y cumplimiento de tiempos de entrega en cabeceras y municipios de Colombia.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              15°C - 25°C y 2°C - 8°C
            </div>
            <div className="text-sm font-semibold text-slate-800">
              Control Térmico Calibrado
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Instalaciones climatizadas y embalajes validados para medicamentos que exigen estricta cadena de frío.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Normativa BPM & INVIMA
            </div>
            <div className="text-sm font-semibold text-slate-800">
              Trazabilidad y Calidad Farmacéutica
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Cumplimiento irrestricto de las Buenas Prácticas de Almacenamiento y Distribución con trazabilidad por lote.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
