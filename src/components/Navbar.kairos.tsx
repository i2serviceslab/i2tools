import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { KAIROS_INFO } from '../data/kairosData';

interface NavbarProps {
  onOpenQuoteModal?: (preselectedLine?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Líneas Farmacéuticas' },
    { href: '#infraestructura', label: 'Infraestructura & Calidad' },
    { href: '#equipo', label: 'Equipo Comercial' },
    { href: '#cotizador', label: 'Cotizador Rápido' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#faq', label: 'Preguntas' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-[#0A1E3A] text-slate-200 text-xs py-2 px-4 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full font-medium text-[11px] border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 live-pulse"></span>
              Envíos activos hoy a toda Colombia
            </span>
            <span className="hidden lg:inline text-slate-400">|</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#1A97D1]" />
              Parque Industrial Garibaldi, Girón / Bucaramanga
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#1A97D1]" />
              Lun - Vie: 7:30 AM - 5:30 PM
            </span>
            <a 
              href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=Hola%20Kairos%20Farmac%C3%A9utica,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20medicamentos%20y%20distribuci%C3%B3n`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: +57 315 073 3319</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80' 
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-200/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img 
              src="/kairos/logo-kairos.png" 
              alt="Kairos Farmacéutica S.A.S." 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-[#1A97D1] rounded-lg hover:bg-sky-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : document.getElementById('cotizador')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-press px-4 py-2 text-sm font-semibold rounded-xl text-slate-700 hover:text-[#1A97D1] hover:bg-slate-100 transition-colors border border-slate-200"
            >
              Simulador
            </button>
            <a
              href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=Hola%20Kairos%20Farmac%C3%A9utica,%20deseo%20solicitar%20una%20cotizaci%C3%B3n`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#1A97D1] to-[#0D7FA8] hover:from-[#1480B2] hover:to-[#0A6789] rounded-xl shadow-sm shadow-[#1A97D1]/30 transition-all hover:shadow-md hover:shadow-[#1A97D1]/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Cotizar Inmediato</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=Hola%20Kairos%20Farmac%C3%A9utica,%20deseo%20cotizar`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#1A97D1] hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-[#1A97D1] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=Hola%20Kairos%20Farmac%C3%A9utica,%20deseo%20asesor%C3%ADa%20comercial`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#1A97D1] to-[#0D7FA8]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contactar por WhatsApp</span>
              </a>
              <a
                href="tel:3150733319"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-slate-700 bg-slate-100 border border-slate-200"
              >
                <Phone className="w-4 h-4 text-[#1A97D1]" />
                <span>Llamar: +57 315 073 3319</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
