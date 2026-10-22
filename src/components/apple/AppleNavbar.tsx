import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { KAIROS_INFO } from '../../data/kairosData';

interface AppleNavbarProps {
  onQuoteClick?: () => void;
}

export const AppleNavbar: React.FC<AppleNavbarProps> = ({ onQuoteClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuote = () => {
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      const el = document.getElementById('contacto');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
  };

  const links = [
    { label: 'Líneas de Distribución', href: '#lineas' },
    { label: 'Cadena de Frío', href: '#cadena-frio' },
    { label: 'Equipo Comercial', href: '#equipo' },
    { label: 'Sede & Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? 'bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-b border-black/[0.06] h-20 sm:h-22'
          : 'bg-white/90 border-b border-black/[0.04] h-26 sm:h-28 lg:h-30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Brand Logo - Tamaño más grande, visible y protagónico */}
          <a
            href="#"
            className="flex items-center py-2 group focus:outline-none"
            aria-label="Kairos Farmacéutica Inicio"
          >
            <img
              src="/kairos/logo-kairos.png"
              alt="Kairos Farmacéutica S.A.S. - Medicamentos de Calidad para toda Colombia"
              className={`w-auto object-contain transition-all duration-300 group-hover:opacity-95 ${
                scrolled
                  ? 'h-12 sm:h-13 md:h-15'
                  : 'h-15 sm:h-18 md:h-20 lg:h-22'
              }`}
            />
          </a>

          {/* Minimal Apple Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-[#1D1D1F]/75 hover:text-[#0071E3] transition-colors tracking-tight relative py-1.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0071E3] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button con micro-animación táctil */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleQuote}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.96] transition-all duration-200 cursor-pointer shadow-[0_2px_8px_rgba(0,113,227,0.25)] hover:shadow-[0_4px_16px_rgba(0,113,227,0.35)] flex items-center gap-1.5 group"
            >
              <span>Cotizar Pedido</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#1D1D1F] hover:bg-black/[0.04] rounded-full transition-colors cursor-pointer"
              aria-label="Abrir menú de navegación"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-black/[0.08] px-6 py-6 space-y-4 animate-fade-up">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-[#1D1D1F] hover:text-[#0071E3] py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 border-t border-black/[0.06] flex flex-col gap-3">
            <button
              onClick={handleQuote}
              className="w-full py-3 rounded-full text-center text-sm font-semibold text-white bg-[#0071E3] hover:bg-[#0077ED] transition-colors"
            >
              Solicitar Cotización Inmediata
            </button>
            <a
              href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=Hola%20Kairos%20Farmac%C3%A9utica,%20deseo%20cotizar`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-center text-[#86868B] hover:text-[#0071E3] transition-colors"
            >
              Central de WhatsApp &bull; {KAIROS_INFO.contact.mainPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
