import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle, MapPin, Phone } from 'lucide-react';
import { KAIROS_INFO } from '../../data/kairosData';

interface HeaderCencoraProps {
  onQuoteClick: () => void;
}

export const HeaderCencora: React.FC<HeaderCencoraProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'A quién servimos', href: '#quienes-servimos' },
    { label: 'Líneas & Capacidades', href: '#capacidades' },
    { label: 'Infraestructura BPM', href: '#infraestructura' },
    { label: 'Equipo Comercial', href: '#equipo' },
    { label: 'Contacto & Sedes', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300">
      {/* Top Utility Bar (Collapsible on Scroll to save vertical space) */}
      <div className={`border-b border-slate-100 bg-slate-50/90 text-slate-600 text-xs px-4 sm:px-8 transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 py-0 opacity-0 pointer-events-none border-b-0' : 'max-h-14 py-2 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-slate-800 tracking-wide uppercase text-[11px]">
              Kairos Farmacéutica S.A.S.
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-600 text-[11px]">
              <MapPin className="w-3 h-3 text-[#0D7AAB]" />
              Parque Industrial Garibaldi, Girón &bull; Cobertura Nacional
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-medium text-slate-600">
            <span className="hidden lg:inline text-slate-500">
              Horario: Lun - Vie 7:30 AM - 5:30 PM
            </span>
            <a
              href="tel:3150733319"
              className="hover:text-slate-950 transition-colors flex items-center gap-1 text-slate-700"
            >
              <Phone className="w-3 h-3 text-[#0D7AAB]" />
              <span>PBX: +57 315 073 3319</span>
            </a>
            <a
              href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=Hola%20Kairos%20Farmac%C3%A9utica,%20deseo%20informaci%C3%B3n`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0D7AAB] hover:text-[#09577a] font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation */}
      <div className={`transition-all duration-200 border-b ${
        isScrolled ? 'border-slate-200 py-3 shadow-xs bg-white/95 backdrop-blur-md' : 'border-slate-100 py-4 sm:py-5 bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="/kairos/logo-kairos.png"
              alt="Kairos Farmacéutica"
              className={`w-auto object-contain transition-all duration-200 ${
                isScrolled ? 'h-8 sm:h-9' : 'h-9 sm:h-11'
              }`}
            />
          </a>

          {/* Nav Items (Cencora Style Minimalist Text Links) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-950 cencora-link transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onQuoteClick}
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0A192F] hover:bg-[#0D7AAB] transition-colors duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>Solicitar Cotización</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none"
              aria-label="Menú"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-[#0D7AAB] py-1 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileOpen(false); onQuoteClick(); }}
              className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0A192F] text-center"
            >
              Solicitar Cotización
            </button>
            <a
              href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
