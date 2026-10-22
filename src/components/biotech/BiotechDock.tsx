import React, { useState } from 'react';
import { MessageCircle, Phone, FileText, ArrowUpRight, X, Sparkles } from 'lucide-react';
import { KAIROS_INFO } from '../../data/kairosData';

interface BiotechDockProps {
  onQuoteClick: () => void;
}

export const BiotechDock: React.FC<BiotechDockProps> = ({ onQuoteClick }) => {
  const [minimized, setMinimized] = useState(false);

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-slate-950 text-white border border-white/20 shadow-2xl flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
        aria-label="Abrir barra rápida"
      >
        <Sparkles className="w-5 h-5 text-[#00C2CB]" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 pointer-events-none px-4 w-full max-w-fit">
      <div className="pointer-events-auto p-1.5 sm:p-2 rounded-full bg-slate-950/90 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex items-center gap-2 text-white">
        
        {/* Quick Call */}
        <a
          href="tel:3150733319"
          className="p-2.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
          title="Llamar a PBX"
        >
          <Phone className="w-4 h-4 text-[#00C2CB]" />
          <span className="text-xs font-semibold hidden md:inline font-mono">+57 315 073 3319</span>
        </a>

        <div className="h-4 w-px bg-white/20" />

        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=Hola%20Kairos%20Farmac%C3%A9utica,%20deseo%20cotizar%20medicamentos`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-2 rounded-full hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2 cursor-pointer text-xs font-bold"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">WhatsApp Inmediato</span>
        </a>

        {/* Primary Quote Trigger */}
        <button
          onClick={onQuoteClick}
          className="group px-4 py-2 rounded-full text-xs font-bold text-slate-950 bg-white hover:bg-[#00C2CB] transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95 shadow-md"
        >
          <span className="uppercase tracking-wider text-[11px]">Cotizar Vademécum</span>
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Dismiss Button */}
        <button
          onClick={() => setMinimized(true)}
          className="p-1 rounded-full text-slate-500 hover:text-white transition-colors cursor-pointer"
          title="Minimizar barra"
        >
          <X className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
