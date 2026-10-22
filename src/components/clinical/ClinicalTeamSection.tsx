import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../../data/kairosData';

export const ClinicalTeamSection: React.FC = () => {
  const [sectorFilter, setSectorFilter] = useState<'Todos' | 'Hospitalario' | 'Droguerías' | 'Insumos' | 'Institucional' | 'Nacional'>('Todos');

  const filteredMembers = TEAM_MEMBERS.filter((m) => {
    if (sectorFilter === 'Todos') return true;
    return m.sector === sectorFilter;
  });

  return (
    <section id="equipo" className="py-24 sm:py-32 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0077C8] block mb-2">
            Equipo Comercial & Asesoría Directa
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Atención personalizada por sector farmacéutico.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Conecte directamente con el asesor comercial asignado a su área para cotizaciones inmediatas, apertura de código de cliente y seguimiento logístico.
          </p>
        </div>

        {/* Clean Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-slate-200">
          {(['Todos', 'Hospitalario', 'Droguerías', 'Insumos', 'Institucional', 'Nacional'] as const).map((tab) => {
            const isSelected = sectorFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setSectorFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0A2540] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
                }`}
              >
                {tab === 'Todos' ? 'Todos los Asesores' : tab}
              </button>
            );
          })}
        </div>

        {/* Clean Grid of HD Portraits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors shadow-xs"
            >
              <div>
                {/* Clean Photo Area with Pure Neutral Background */}
                <div className="aspect-[4/3] bg-slate-50 border-b border-slate-100 flex items-end justify-center p-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="max-h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0077C8]">
                      {member.specialty}
                    </span>
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {member.sector}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>

                  <div className="text-xs text-slate-500 mt-0.5">
                    {member.role} &bull; Kairos Farmacéutica S.A.S.
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    Línea Móvil: <span className="font-semibold text-slate-900 font-mono">{member.phone}</span>
                  </div>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="p-6 sm:p-7 pt-0 space-y-2">
                <a
                  href={`https://wa.me/${member.cleanPhone}?text=${encodeURIComponent(member.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0A2540] hover:bg-[#0077C8] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.98]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Directo</span>
                  <ArrowUpRight className="w-3 h-3 opacity-75" />
                </a>

                <a
                  href={`tel:${member.cleanPhone}`}
                  className="w-full py-2 px-4 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>Llamar a {member.name.split(' ')[0]}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
