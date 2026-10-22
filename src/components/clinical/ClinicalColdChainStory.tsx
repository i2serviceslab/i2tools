import React, { useState } from 'react';
import { Thermometer, ShieldCheck, Truck, Check, MapPin, Clock } from 'lucide-react';

export const ClinicalColdChainStory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'instalaciones' | 'frio' | 'flota'>('instalaciones');

  const tabs = [
    {
      id: 'instalaciones' as const,
      label: 'Sede Garibaldi & Almacenamiento',
      title: 'Infraestructura certificada en el Parque Industrial Garibaldi.',
      description: 'Nuestra bodega central en Girón / Santander cuenta con áreas de recepción diferenciadas, zonas de cuarentena, almacenamiento climatizado y cuartos fríos auditados permanentemente bajo directrices BPM del INVIMA.',
      image: '/kairos/about-instalaciones.jpg',
      points: [
        'Zonificación estricta según requerimientos de temperatura y humedad',
        'Sistemas de respaldo de energía ininterrumpida (UPS y planta)',
        'Sistematización de inventarios con trazabilidad por lote y fecha de expiración',
        'Inspección sanitaria periódica de la Secretaría de Salud departamental'
      ]
    },
    {
      id: 'frio' as const,
      label: 'Cadena de Frío (2°C a 8°C)',
      title: 'Custodia térmica molecular sin quiebres de temperatura.',
      description: 'Preservamos la estabilidad e integridad de medicamentos biológicos, insulinas, vacunas y termolábiles a través de tecnología termo-higrométrica continua y embalajes isotérmicos de alta densidad.',
      image: '/kairos/hero-bodega.jpg',
      points: [
        'Cámaras frías con sensores digitales calibrados y alarmas automáticas',
        'Conservadoras térmicas de poliestireno expandido con geles refrigerantes calibrados',
        'Termo-registradores digitales USB incluidos en remesas críticas',
        'Verificación de temperatura al momento de la entrega física al cliente'
      ]
    },
    {
      id: 'flota' as const,
      label: 'Flota & Despacho 32 Departamentos',
      title: 'Itinerarios terrestres y convenios aéreos prioritarios.',
      description: 'Garantizamos abastecimiento oportuno hacia droguerías, clínicas y centros asistenciales en Santander en menos de 24 horas y despachos consolidados a nivel nacional en 24 a 48 horas.',
      image: '/kairos/hero-flota.jpg',
      points: [
        'Flota propia acondicionada para despachos en Santander y Norte de Santander',
        'Rutas troncales nocturnas directas hacia Bogotá, Medellín, Costa y Occidente',
        'Monitoreo de guías en tiempo real con transportadoras aliadas especializadas',
        'Cumplimiento de tiempos de entrega en cabeceras y municipios'
      ]
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="cadena-frio" className="py-24 sm:py-32 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0077C8] block mb-2">
            Infraestructura, Calidad & Cadena de Frío
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Custodia farmacéutica integral y control térmico calibrado.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            La calidad terapéutica de un medicamento depende de su cadena de custodia. En Kairos Farmacéutica garantizamos condiciones óptimas desde la recepción hasta la dispensación.
          </p>
        </div>

        {/* 3 Clean Selectable Segment Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0A2540] text-white shadow-2xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Big Photographic Stage + Clean Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Big Photographic Showcase */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-white border border-slate-200 shadow-md group">
              <img
                key={currentTab.image}
                src={currentTab.image}
                alt={currentTab.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 block mb-1">
                    Operación Verificada
                  </span>
                  <div className="text-base sm:text-lg font-bold">
                    {currentTab.label}
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-300 bg-slate-950/60 px-3 py-1 rounded-full border border-white/20">
                  Parque Industrial Garibaldi
                </div>
              </div>
            </div>
          </div>

          {/* Clean Editorial Content & Checkpoints */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              {currentTab.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {currentTab.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-200">
              {currentTab.points.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                  <Check className="w-4 h-4 text-[#0077C8] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-3 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-[#0077C8] shrink-0" />
              <span>Conforme con la <strong>Resolución 1403 de 2007</strong> y <strong>Decreto 2200 de 2005</strong>.</span>
            </div>
          </div>

        </div>

        {/* 32 Departments Routing Strip */}
        <div id="despacho" className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0077C8] block mb-1">
                Matriz de Despachos & Rutas Troncales
              </span>
              <h4 className="text-lg font-bold text-slate-900">
                Tiempos de entrega garantizados en los 32 departamentos
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">Despachos diarios activos</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <div className="font-bold text-slate-900 flex items-center justify-between">
                <span>Santander Regional</span>
                <span className="text-emerald-700 font-bold font-mono">&lt; 24h</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Despacho directo el mismo día para pedidos matutinos.</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <div className="font-bold text-slate-900 flex items-center justify-between">
                <span>Bogotá & Cundinamarca</span>
                <span className="text-[#0077C8] font-bold font-mono">24 Horas</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Rutas troncales nocturnas consolidadas.</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <div className="font-bold text-slate-900 flex items-center justify-between">
                <span>Costa & Antioquia</span>
                <span className="text-slate-800 font-bold font-mono">24 - 48h</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Embalaje isotérmico reforzado para clima cálido.</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <div className="font-bold text-slate-900 flex items-center justify-between">
                <span>Occidente & Llanos</span>
                <span className="text-slate-800 font-bold font-mono">48 Horas</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Guías de trazabilidad digital con transportadoras aliadas.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
