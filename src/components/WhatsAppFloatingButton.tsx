import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, UserCheck, ShieldCheck } from 'lucide-react';
import { TEAM_MEMBERS, KAIROS_INFO } from '../data/kairosData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Advisor Quick Picker Popup Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0A1E3A] to-[#0F2D59] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-400/30">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900 live-pulse"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Asesoría Farmacéutica Inmediata</h4>
                <p className="text-[11px] text-sky-200">En línea &bull; Respuesta promedio &lt; 5 min</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Message Box */}
          <div className="p-3 bg-sky-50/70 border-b border-sky-100 text-xs text-slate-600 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Seleccione un asesor comercial para iniciar su cotización:</span>
          </div>

          {/* Advisors List */}
          <div className="max-h-72 overflow-y-auto p-2 space-y-1.5 divide-y divide-slate-100">
            {TEAM_MEMBERS.map((member) => (
              <a
                key={member.id}
                href={`https://wa.me/${member.cleanPhone}?text=${encodeURIComponent(member.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-10 h-10 rounded-xl object-contain bg-slate-100 p-0.5 border border-slate-200 group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#1A97D1]">
                      {member.name}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {member.specialty}
                    </div>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

          {/* Footer Dispatch Line */}
          <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
            <a
              href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=Hola%20Kairos%20Farmac%C3%A9utica,%20deseo%20comunicarme%20con%20la%20l%C3%ADnea%20central`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#1A97D1] hover:underline"
            >
              O chatear con la Línea Central de Despacho &rarr;
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-press flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-xl shadow-emerald-600/30 font-bold text-sm tracking-wide group focus:outline-none"
        aria-label="Contactar por WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-emerald-600 live-pulse"></span>
        </div>
        <span className="hidden sm:inline font-bold">¿Cotizar Medicamentos?</span>
      </button>

    </div>
  );
};
