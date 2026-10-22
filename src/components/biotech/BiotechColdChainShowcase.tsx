import React, { useState } from 'react';
import { Thermometer, ShieldCheck, Truck, Activity, CheckCircle2, MapPin, Clock, ArrowUpRight, AlertCircle, Droplet } from 'lucide-react';
import { KAIROS_INFO } from '../../data/kairosData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const BiotechColdChainShowcase: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<'frio' | 'ambiente' | 'transito'>('frio');
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const zoneDetails = {
    frio: {
      name: 'Cámara Fría de Refrigeración Estricta',
      range: '2.0°C - 8.0°C',
      currentTemp: '4.2°C',
      humidity: '48% HR',
      status: 'Óptimo &bull; Sensores Calibrados',
      products: ['Insulinas & Análogos', 'Medicamentos Biológicos', 'Vacunas & Sueros Especiales', 'Liofilizados Críticos'],
      specs: 'Monitoreo continuo 24/7 con termo-registradores redundantes y sistema automático de respaldo eléctrico.'
    },
    ambiente: {
      name: 'Almacén General Climatizado',
      range: '15.0°C - 25.0°C',
      currentTemp: '19.4°C',
      humidity: '54% HR',
      status: 'Conforme Resolución 1403',
      products: ['Antibióticos Orales & Parenterales', 'Soluciones Endovenosas (Lactato, SSN)', 'Analgésicos & Cardiovasculares', 'Dispositivos Quirúrgicos'],
      specs: 'Acondicionamiento térmico integral en el Parque Industrial Garibaldi con deshumidificación activa.'
    },
    transito: {
      name: 'Embalaje Isotérmico de Alta Densidad',
      range: 'Tránsito Validado hasta 72 Horas',
      currentTemp: '4.8°C en Destino',
      humidity: 'Sellado Hermético',
      status: 'Certificado de No Quiebre Térmico',
      products: ['Neveras de Poliestireno Expandido', 'Geles Refrigerantes Certificados', 'Termo-registradores USB Digitales', 'Precintos de Seguridad Inviolables'],
      specs: 'Rutas terrestres y convenios aéreos prioritarios con control térmico garantizado en clima cálido.'
    }
  };

  const current = zoneDetails[selectedZone];

  const dispatchHubs = [
    { city: 'Santander & Área Metropolitana', time: '< 24 Horas', note: 'Despacho directo el mismo día', badge: 'Regional Prioritario' },
    { city: 'Bogotá & Cundinamarca', time: '24 Horas', note: 'Ruta nocturna troncal consolidada', badge: 'Ruta Directa' },
    { city: 'Costa Atlántica (Barranquilla, Cartagena)', time: '24 - 48 Horas', note: 'Embalaje térmico reforzado', badge: 'Costa Norte' },
    { city: 'Antioquia & Eje Cafetero', time: '24 - 48 Horas', note: 'Conexión terrestre exprés', badge: 'Occidente' },
    { city: 'Valle del Cauca & Sur del País', time: '48 Horas', note: 'Guías de trazabilidad GPS', badge: 'Sur / Pacífico' },
    { city: 'Llanos Orientales & Territorios Nacionales', time: '48 - 72 Horas', note: 'Vía aérea prioritaria', badge: 'Cobertura Especial' },
  ];

  return (
    <section id="cadena-frio" className="py-24 sm:py-36 bg-white relative overflow-hidden">
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-4 sm:px-8 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-[#0284C7] mb-4">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span className="uppercase tracking-[0.25em] text-[10px] font-bold">Rigor Térmico & BPM</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.04]">
            Trazabilidad molecular continua:{' '}
            <span className="biotech-gradient-text">cero quiebre de temperatura.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            La eficacia de un medicamento depende de su cadena de custodia. En Kairos Farmacéutica monitoreamos cada grado centígrado desde el ingreso a la bodega en Garibaldi hasta la recepción en la farmacia o clínica.
          </p>
        </div>

        {/* Interactive Cold Chain Controller + Hub Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (Span 6): Interactive Temperature Chamber Dashboard */}
          <div className="lg:col-span-6 p-2 rounded-[2rem] bg-slate-100 border border-slate-200/80 shadow-md flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-[calc(2rem-0.5rem)] bg-white border border-slate-200/60 h-full flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Selector de Cámara & Protocolo
                  </span>
                  <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    En Rango Normativo
                  </span>
                </div>

                {/* 3 Interactive Zone Switchers */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {[
                    { id: 'frio' as const, label: 'Cámara Fría', sub: '2°C a 8°C' },
                    { id: 'ambiente' as const, label: 'Climatizado', sub: '15°C a 25°C' },
                    { id: 'transito' as const, label: 'Tránsito Ruta', sub: 'Nevera Validada' },
                  ].map((btn) => {
                    const isSelected = selectedZone === btn.id;
                    return (
                      <button
                        key={btn.id}
                        onClick={() => setSelectedZone(btn.id)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="text-xs font-bold">{btn.label}</div>
                        <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-[#00C2CB]' : 'text-slate-400'}`}>
                          {btn.sub}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Main Temperature Gauge Visual */}
                <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#00C2CB] block mb-1">
                        Lectura de Sensores Digitales
                      </span>
                      <h4 className="text-lg font-bold">{current.name}</h4>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#00C2CB] font-mono tracking-tight">
                        {current.currentTemp}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">Norma: {current.range}</div>
                    </div>
                  </div>

                  {/* Range Visualizer Bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>Rango Autorizado</span>
                      <span className="text-emerald-400 font-bold">{current.status}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden p-0.5">
                      <div className="bg-gradient-to-r from-sky-400 to-[#00C2CB] h-full rounded-full w-[65%]" />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>Humedad: {current.humidity}</span>
                      <span>Auditoría INVIMA</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed pt-2 border-t border-white/10">
                    {current.specs}
                  </p>
                </div>
              </div>

              {/* Sample Regulated Products for this Chamber */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2">
                  Productos Custodiados en Esta Zona:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {current.products.map((p, pIdx) => (
                    <div key={pIdx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span className="truncate">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (Span 6): Dispatch Times Matrix & Regional Routing */}
          <div id="red-nacional" className="lg:col-span-6 p-2 rounded-[2rem] bg-slate-100 border border-slate-200/80 shadow-md flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-[calc(2rem-0.5rem)] bg-white border border-slate-200/60 h-full flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#0284C7]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Red de Despacho & Tiempos de Entrega
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    32 Departamentos
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-3 font-normal leading-relaxed">
                  Itinerarios regulares programados desde el centro logístico en el <strong>Parque Industrial Garibaldi</strong> con trazabilidad digital de guía.
                </p>

                {/* Grid of Delivery Hubs */}
                <div className="space-y-2.5 mt-5">
                  {dispatchHubs.map((hub, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition-colors flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="space-y-0.5">
                        <div className="font-bold text-slate-900 flex items-center gap-2">
                          <span>{hub.city}</span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                            {hub.badge}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500">{hub.note}</div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-sm font-extrabold text-[#0284C7] font-mono">
                          {hub.time}
                        </div>
                        <span className="text-[10px] text-emerald-700 font-semibold">Garantizado</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regulatory Quality Guarantee Pill */}
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#0284C7] shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block">Buenas Prácticas de Manufactura & Distribución</span>
                  <span className="text-slate-600 text-[11px]">Cumplimiento estricto del Decreto 2200 de 2005 y Resolución 1403 de 2007.</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
