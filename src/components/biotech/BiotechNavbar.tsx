import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { KAIROS_INFO } from '../../data/kairosData';
import { useScrollProgress } from '../../hooks/useScrollReveal';

interface BiotechNavbarProps {
  onQuoteClick: () => void;
}

export const BiotechNavbar: React.FC<BiotechNavbarProps> = ({ onQuoteClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Portafolio & Líneas', href: '#portafolio' },
    { label: 'Pilares Operativos', href: '#pilares' },
    { label: 'Cadena de Frío & BPM', href: '#cadena-frio' },
    { label: 'Red de Distribución', href: '#red-nacional' },
    { label: 'Equipo Comercial', href: '#asesores' },
    { label: 'Sede Garibaldi', href: '#sede' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-500 pt-2 sm:pt-4 px-3 sm:px-8">
      {/* Scroll Progress Indicator Line */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#0284C7] via-[#00C2CB] to-emerald-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Floating Glass Island Pill */}
        <div className={`pointer-events-auto w-full mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-2xl border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.08)]'
            : 'bg-white/95 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
        }`}>
          
          {/* Logo with High-Precision Typography */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <img
              src="/kairos/logo-kairos.png"
              alt="Kairos Farmacéutica"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-103"
            />
          </a>

          {/* Nav Items (Biotech High-End Minimalist) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Island Controls: Status Pulse + Nested CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] font-medium text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Despacho Hoy &bull; Garibaldi</span>
            </div>

            <button
              onClick={onQuoteClick}
              className="group pl-4 pr-1.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A192F] hover:bg-[#0284C7] transition-all duration-300 flex items-center gap-2.5 active:scale-[0.98] cursor-pointer shadow-sm"
            >
              <span className="uppercase tracking-wider text-[11px]">Cotizar Portafolio</span>
              <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-white group-hover:text-[#0284C7] flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onQuoteClick}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-[#0A192F] hover:bg-[#0284C7] transition-colors"
            >
              Cotizar
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Abrir Menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

      </div>

      {/* Full-Screen Fluid Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 animate-fadeIn text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <img
              src="/kairos/logo-kairos.png"
              alt="Kairos"
              className="h-8 w-auto bg-white rounded-md p-1"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="py-8 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00C2CB]">
              Navegación Institucional
            </span>
            <div className="flex flex-col space-y-3">
              {navLinks.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl sm:text-3xl font-extrabold text-white/90 hover:text-[#00C2CB] transition-colors tracking-tight flex items-center justify-between"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-40" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onQuoteClick(); }}
              className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-white hover:bg-[#00C2CB] transition-colors text-center shadow-lg"
            >
              Solicitar Cotización de Vademécum
            </button>

            <a
              href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-emerald-700/80 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Conectar por WhatsApp Directo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
