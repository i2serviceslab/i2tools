import React, { useState } from 'react';
import { Phone, MessageCircle, ShieldCheck, UserCheck, Sparkles, ArrowUpRight } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../data/kairosData';

export const CommercialTeamSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const filters = [
    { id: 'todos', label: 'Todos los Asesores' },
    { id: 'hospitalario', label: 'Hospitalario & Clínicas' },
    { id: 'droguerias', label: 'Droguerías & Retail' },
    { id: 'insumos', label: 'Insumos Médicos' },
    { id: 'cuentas', label: 'Cuentas Clave & Nacional' },
  ];

  const filteredMembers = TEAM_MEMBERS.filter((member) => {
    if (activeFilter === 'todos') return true;
    if (activeFilter === 'hospitalario') return member.id === 'brayan-vargas' || member.id === 'daniel-sarmiento';
    if (activeFilter === 'droguerias') return member.id === 'silvia-rodriguez';
    if (activeFilter === 'insumos') return member.id === 'william-suarez';
    if (activeFilter === 'cuentas') return member.id === 'juan-david-hernandez' || member.id === 'andres-ortiz';
    return true;
  });

  return (
    <section id="equipo" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#0D7FA8] text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Asesoría Humana y Especializada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Su Éxito, Nuestra Prioridad: Conozca Nuestro Equipo Comercial
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            En Kairos Farmacéutica no habla con un contestador automático. Le asignamos un asesor comercial con línea directa y WhatsApp para atender sus pedidos con rapidez y precisión técnica.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`btn-press px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === filter.id
                  ? 'bg-[#1A97D1] text-white shadow-md shadow-[#1A97D1]/25 ring-2 ring-[#1A97D1]/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80 shadow-2xs'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Commercial Advisors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Header & Photo */}
              <div>
                <div className="relative aspect-[4/3] bg-gradient-to-t from-slate-100 to-sky-50/50 overflow-hidden flex items-end justify-center p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-700 shadow-xs border border-slate-200/60">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 live-pulse"></span>
                      Disponible
                    </span>
                  </div>

                  {/* Specialty Pill */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide">
                      {member.specialty}
                    </span>
                  </div>
                </div>

                {/* Member Information */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#1A97D1] transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">
                    {member.role} &bull; Kairos Farmacéutica S.A.S.
                  </div>
                  <div className="mt-3 text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                    <Phone className="w-3.5 h-3.5 text-[#1A97D1]" />
                    <span>Línea Móvil: {member.phone}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2.5">
                <a
                  href={`https://wa.me/${member.cleanPhone}?text=${encodeURIComponent(member.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-sm shadow-emerald-600/20 text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chatear por WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={`tel:${member.cleanPhone}`}
                  className="btn-press w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1A97D1]" />
                  <span>Llamada Telefónica Directa</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0A1E3A] to-[#0F2D59] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold">
              ¿No está seguro de qué asesor corresponde a su zona o línea?
            </h4>
            <p className="text-xs sm:text-sm text-sky-200 max-w-xl">
              Escríbanos a nuestra línea central de despacho y le asignaremos inmediatamente al profesional indicado según su ubicación e institución médica.
            </p>
          </div>
          <a
            href="https://wa.me/573150733319?text=Hola%20Kairos%20Farmac%C3%A9utica,%20deseo%20que%20me%20asignen%20un%20asesor%20comercial%20para%20mi%20zona"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press px-6 py-3.5 rounded-xl font-bold text-[#0A1E3A] bg-white hover:bg-sky-50 shadow-md text-sm shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Asignar Asesor Ahora</span>
          </a>
        </div>

      </div>
    </section>
  );
};
