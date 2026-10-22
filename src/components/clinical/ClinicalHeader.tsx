import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { KAIROS_INFO } from '../../data/kairosData';
import { useScrollProgress } from '../../hooks/useScrollReveal';

interface ClinicalHeaderProps {
  onQuoteClick: () => void;
}

export const ClinicalHeader: React.FC<ClinicalHeaderProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Líneas & Portafolio', href: '#portafolio' },
    { label: 'Cadena de Frío BPM', href: '#cadena-frio' },
    { label: 'Red de Despacho', href: '#despacho' },
    { label: 'Equipo Comercial', href: '#equipo' },
    { label: 'Sede Garibaldi', href: '#sede' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300">
      {/* Ultra-Thin Apple-Style Scroll Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-100">
        <div
          className="h-full bg-[#0077C8] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Utility Bar (Novartis / Abbott Corporate Standard) */}
      <div className={`border-b border-slate-100 bg-slate-50 text-slate-600 text-xs px-4 sm:px-8 transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 py-0 opacity-0 pointer-events-none' : 'max-h-12 py-2 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] font-medium text-slate-600">
            <span className="font-bold text-slate-900 uppercase tracking-wider">
              Kairos Farmacéutica S.A.S.
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-[#0077C8]" />
              Parque Industrial Garibaldi, Girón &bull; Distribución Nacional
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] font-medium">
            <a
              href="tel:3150733319"
              className="text-slate-700 hover:text-slate-950 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#0077C8]" />
              <span>PBX: +57 315 073 3319</span>
            </a>
            <a
              href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=Hola%20Kairos%20Farmac%C3%A9utica,%20deseo%20informaci%C3%B3n`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077C8] hover:text-[#005a96] font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Corporate Navigation */}
      <div className={`border-b border-slate-200/80 transition-all duration-200 ${
        isScrolled ? 'py-3.5' : 'py-4 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Official Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="/kairos/logo-kairos.png"
              alt="Kairos Farmacéutica"
              className={`w-auto object-contain transition-all duration-200 ${
                isScrolled ? 'h-8 sm:h-9' : 'h-9 sm:h-11'
              }`}
            />
          </a>

          {/* Clean Editorial Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-slate-950 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Corporate CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onQuoteClick}
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0A2540] hover:bg-[#0077C8] transition-colors duration-200 flex items-center gap-2 cursor-pointer shadow-xs active:scale-[0.98]"
            >
              <span>Solicitar Cotización</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold text-slate-800 hover:text-[#0077C8] py-1 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileOpen(false); onQuoteClick(); }}
              className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0A2540] text-center"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
