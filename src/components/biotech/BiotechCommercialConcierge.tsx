import React, { useState } from 'react';
import { MessageCircle, Phone, ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../../data/kairosData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const BiotechCommercialConcierge: React.FC = () => {
  const [selectedId, setSelectedId] = useState(TEAM_MEMBERS[0].id);
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const selectedMember = TEAM_MEMBERS.find((m) => m.id === selectedId) || TEAM_MEMBERS[0];

  return (
    <section id="asesores" className="py-24 sm:py-36 bg-slate-50 relative overflow-hidden">
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-4 sm:px-8 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-xs font-semibold text-slate-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span className="uppercase tracking-[0.25em] text-[10px] font-bold">Atención Técnica Personalizada</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.04]">
            Asesoría comercial directa.{' '}
            <span className="biotech-gradient-text">Sin intermediarios ni demoras.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Cada línea de salud cuenta con un especialista técnico asignado. Seleccione el ejecutivo de su sector para obtener cotizaciones inmediatas, validación de stock y apertura de cuenta mayorista.
          </p>
        </div>

        {/* Concierge Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (Span 5): List of Advisors as High-End Interactive Cards */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Seleccione un Especialista:
            </span>

            {TEAM_MEMBERS.map((member) => {
              const isSelected = selectedId === member.id;
              return (
                <button
                  key={member.id}
                  onClick={() => setSelectedId(member.id)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-slate-950 text-white border-slate-950 shadow-lg scale-102'
                      : 'bg-white text-slate-800 border-slate-200/80 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden shrink-0 border border-slate-200 flex items-end justify-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-auto h-11 object-contain"
                      />
                    </div>

                    <div>
                      <div className="text-sm font-bold leading-tight">
                        {member.name}
                      </div>
                      <div className={`text-xs mt-0.5 font-medium ${
                        isSelected ? 'text-[#00C2CB]' : 'text-[#0284C7]'
                      }`}>
                        {member.specialty}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {member.sector}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column (Span 7): Spotlight Stage on Selected Specialist */}
          <div className="lg:col-span-7 p-2 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl flex flex-col justify-between">
            <div className="p-6 sm:p-10 rounded-[calc(2.5rem-0.6rem)] bg-gradient-to-br from-slate-900 to-slate-950 text-white h-full flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00C2CB]">
                    Ejecutivo(a) Comercial Asignado(a)
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Disponible en Línea
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8 mb-8">
                  {/* Portrait */}
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-white/5 border border-white/10 overflow-hidden shrink-0 p-3 shadow-2xl flex items-end justify-center">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-auto h-full object-contain filter drop-shadow-md"
                    />
                  </div>

                  {/* Bio & Details */}
                  <div className="text-center sm:text-left space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00C2CB]">
                      Sector: {selectedMember.sector}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedMember.name}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300">
                      {selectedMember.role} &bull; {selectedMember.specialty}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-md pt-1">
                      Asesoría especializada para formulación, cotización de lotes, acuerdos comerciales y tiempos de entrega prioritaria.
                    </p>
                    <div className="pt-2 flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-[#00C2CB]" />
                      <span>Respuesta promedio: &lt; 15 minutos</span>
                    </div>
                  </div>
                </div>

                {/* Direct Line Display */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Línea Telefónica / Móvil:</span>
                  <span className="font-bold text-white text-sm">{selectedMember.phone}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${selectedMember.cleanPhone}?text=${encodeURIComponent(selectedMember.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-3.5 px-6 rounded-full text-xs font-bold text-slate-950 bg-[#00C2CB] hover:bg-emerald-400 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span className="uppercase tracking-wider">Chatear por WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={`tel:${selectedMember.cleanPhone}`}
                  className="py-3.5 px-6 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span className="uppercase tracking-wider">Llamada Directa</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
