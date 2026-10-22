import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowUpRight, Check, Users, Sparkles } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../../data/kairosData';

export const CommercialTeamCencora: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<'Hospitalario' | 'Droguerías' | 'Insumos' | 'Institucional' | 'Nacional'>('Hospitalario');
  const [viewMode, setViewMode] = useState<'router' | 'directory'>('router');

  // Find the primary assigned advisor for the selected sector
  const assignedAdvisor = TEAM_MEMBERS.find((m) => m.sector === selectedSector) || TEAM_MEMBERS[0];

  const sectorOptions = [
    { id: 'Hospitalario' as const, label: 'Línea Hospitalaria & Clínicas', desc: 'Fármacos de alta complejidad, anestésicos y UCI' },
    { id: 'Droguerías' as const, label: 'Droguerías & Farmacias Retail', desc: 'Medicamentos comerciales, genéricos y mostrador' },
    { id: 'Insumos' as const, label: 'Insumos & Dispositivos Médicos', desc: 'Jeringas, catéteres, guantes y quirúrgicos' },
    { id: 'Institucional' as const, label: 'Canal Institucional & EPS', desc: 'Licitaciones, suministro PBS y contratos' },
    { id: 'Nacional' as const, label: 'Cuentas Mayoristas & Nacional', desc: 'Distribución masiva para los 32 departamentos' },
  ];

  return (
    <section id="equipo" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D7AAB] block mb-2">
            Atención Especializada &bull; Enrutador Comercial
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
            Asesoría técnica y comercial asignada a su sector.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Evite intermediarios y parálisis de elección. Indique su tipo de institución para conectar al instante con el especialista responsable de su línea.
          </p>
        </div>

        {/* View Switcher: Enrutador Guiado vs. Directorio Completo */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('router')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                viewMode === 'router'
                  ? 'bg-[#0A192F] text-white'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-950'
              }`}
            >
              Enrutador Asistido por Sector
            </button>
            <button
              onClick={() => setViewMode('directory')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                viewMode === 'directory'
                  ? 'bg-[#0A192F] text-white'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-950'
              }`}
            >
              Ver Directorio Completo ({TEAM_MEMBERS.length})
            </button>
          </div>

          <span className="text-xs text-slate-400 hidden md:inline font-mono">
            Atención Inmediata en Horario Laboral
          </span>
        </div>

        {/* MODE 1: SMART ROUTER */}
        {viewMode === 'router' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-fadeIn">
            
            {/* Sector Selector Buttons (Col 5) */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                1. Seleccione su Sector o Necesidad:
              </span>

              {sectorOptions.map((opt) => {
                const isSelected = selectedSector === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedSector(opt.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#0A192F] border-[#0A192F] text-white shadow-md'
                        : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold leading-snug">
                        {opt.label}
                      </div>
                      <div className={`text-xs mt-0.5 ${
                        isSelected ? 'text-slate-300' : 'text-slate-500'
                      }`}>
                        {opt.desc}
                      </div>
                    </div>

                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ml-3 ${
                      isSelected ? 'bg-emerald-500 text-white' : 'border border-slate-300'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Assigned Specialist Dedicated Card (Col 7) */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D7AAB] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Asesor Asignado para {selectedSector}
                  </span>
                  <span className="text-xs text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full font-bold">
                    Disponible Ahora
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white border border-slate-200 overflow-hidden shrink-0 p-2 shadow-xs">
                    <img
                      src={assignedAdvisor.image}
                      alt={assignedAdvisor.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="text-center sm:text-left space-y-1">
                    <h3 className="text-2xl font-bold text-slate-950">
                      {assignedAdvisor.name}
                    </h3>
                    <div className="text-sm font-semibold text-[#0D7AAB]">
                      {assignedAdvisor.role} &bull; {assignedAdvisor.specialty}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-md pt-1">
                      Especialista técnico capacitado para estructurar cotizaciones, verificar existencias en bodega y gestionar pedidos urgentes.
                    </p>
                    <div className="text-xs font-mono text-slate-700 pt-1">
                      Móvil / WhatsApp: <strong>{assignedAdvisor.phone}</strong>
                    </div>
                  </div>
                </div>

                {/* Response SLA Promise */}
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>
                    <strong>Tiempo de respuesta estimado:</strong> Menos de 15 minutos en horario comercial para cotizaciones directas.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${assignedAdvisor.cleanPhone}?text=${encodeURIComponent(assignedAdvisor.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chatear por WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-75" />
                </a>

                <a
                  href={`tel:${assignedAdvisor.cleanPhone}`}
                  className="py-3 px-5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-950 bg-white border border-slate-300 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>Llamar a {assignedAdvisor.name.split(' ')[0]}</span>
                </a>
              </div>

            </div>

          </div>
        )}

        {/* MODE 2: FULL DIRECTORY */}
        {viewMode === 'directory' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="group border border-slate-200 rounded-xl overflow-hidden bg-white flex flex-col justify-between hover:border-slate-400 transition-colors shadow-2xs"
              >
                <div>
                  <div className="aspect-[4/3] bg-slate-50 flex items-end justify-center p-4 overflow-hidden border-b border-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-103"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D7AAB] block mb-1">
                      {member.specialty}
                    </span>
                    <h3 className="text-lg font-bold text-slate-950">
                      {member.name}
                    </h3>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {member.role} &bull; Kairos Farmacéutica
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
                      Línea: <span className="font-semibold text-slate-900">{member.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <a
                    href={`https://wa.me/${member.cleanPhone}?text=${encodeURIComponent(member.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0A192F] hover:bg-[#0D7AAB] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Directo</span>
                    <ArrowUpRight className="w-3 h-3 opacity-75" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
