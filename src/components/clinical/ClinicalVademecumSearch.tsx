import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, ShieldCheck, Check, Filter } from 'lucide-react';
import { VADEMECUM_CATALOG, VademecumItem } from '../../data/kairosData';

interface ClinicalVademecumSearchProps {
  onSelectProduct: (productName: string, line: string) => void;
}

export const ClinicalVademecumSearch: React.FC<ClinicalVademecumSearchProps> = ({ onSelectProduct }) => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'Todos' | 'Hospitalaria' | 'Insumos' | 'Comercial' | 'Naturista'>('Todos');

  const filteredItems = useMemo(() => {
    return VADEMECUM_CATALOG.filter((item) => {
      const matchesQuery = query.trim() === '' || 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.presentation.toLowerCase().includes(query.toLowerCase());
      
      const matchesFilter = activeFilter === 'Todos' || item.line === activeFilter;

      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0077C8] block mb-2">
            Catálogo & Vademécum Digital
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Consulta rápida de disponibilidad y especificaciones técnicas.
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-normal">
            Verifique principios activos, presentaciones y rangos térmicos. Seleccione cualquier referencia para incluirla en su cotización formal.
          </p>
        </div>

        {/* Clean Search Console */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por principio activo, marca o presentación (ej. Ampicilina, Ceftriaxona, Insulina, Guantes, Acetaminofén)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Clean Segment Filters */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {(['Todos', 'Hospitalaria', 'Insumos', 'Comercial', 'Naturista'] as const).map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0A2540] text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
                  }`}
                >
                  {filter === 'Todos' ? 'Todas las referencias' : filter}
                </button>
              );
            })}
          </div>

          {/* Results Grid */}
          <div className="pt-2 divide-y divide-slate-100 max-h-96 overflow-y-auto pr-1">
            {filteredItems.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-500">
                No se encontraron referencias exactas para su búsqueda. Puede solicitar la cotización abierta indicando el producto requerido.
              </div>
            ) : (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/80 px-2 rounded-lg transition-colors"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">{item.name}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {item.line}
                      </span>
                      <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        {item.stockStatus}
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 flex flex-wrap gap-x-3">
                      <span>{item.presentation}</span>
                      <span>&bull;</span>
                      <span className="text-slate-700 font-medium">{item.invima}</span>
                      <span>&bull;</span>
                      <span className="text-[#0077C8] font-medium">{item.temperature}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProduct(item.name, item.line)}
                    className="self-start sm:self-auto px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0A2540] hover:bg-[#0077C8] transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs active:scale-[0.98]"
                  >
                    <span>Cotizar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
