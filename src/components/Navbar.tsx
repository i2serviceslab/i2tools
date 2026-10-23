import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú con tecla Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const navLinks = [
    { href: '#approach', label: lang === 'en' ? 'Our Approach' : 'Nuestro Enfoque' },
    { href: '#experience', label: lang === 'en' ? 'Experience' : 'Experiencia' },
    { href: '#expertise', label: lang === 'en' ? 'Areas of Expertise' : 'Áreas de Experiencia' },
    { href: '#packages', label: lang === 'en' ? 'Packages' : 'Paquetes' },
    { href: '#title-management', label: lang === 'en' ? 'Title Management' : 'Gestión de Títulos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#08172E]/95 backdrop-blur-md border-b border-[#273349] shadow-xl py-3'
          : 'bg-[#08172E]/80 backdrop-blur-sm border-b border-[#273349]/70 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo with Tagline */}
        <a href="#" className="flex items-center group shrink-0 py-1">
          <img
            src="/i2-services-logo.png"
            alt="i2 Services S.A.S. - You Ground, our Experience"
            className="h-9 sm:h-10 w-auto opacity-95 group-hover:opacity-100 transition-opacity drop-shadow-sm"
          />
        </a>

        {/* Desktop Navigation Links - Shown only on XL (>= 1280px) where spacing is ample */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-wide text-slate-300 hover:text-[#01BBDC] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Language Toggle + CTA + Hamburger for Responsive */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          {/* Language Toggle */}
          <div className="flex items-center p-0.5 sm:p-1 rounded-full bg-[#273349] border border-slate-700/80 text-xs font-semibold shrink-0">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full transition-all text-xs ${
                lang === 'en'
                  ? 'bg-[#01BBDC] text-[#08172E] font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full transition-all text-xs ${
                lang === 'es'
                  ? 'bg-[#01BBDC] text-[#08172E] font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              ES
            </button>
          </div>

          {/* Primary CTA (visible from 540px and up) */}
          <a
            href="#contact"
            className="btn-press hidden sm:inline-flex items-center gap-2 bg-[#01BBDC] hover:bg-[#38BDF8] text-[#08172E] text-xs font-bold px-3.5 sm:px-4 py-2 rounded-full shadow-md shadow-[#01BBDC]/20 whitespace-nowrap shrink-0"
          >
            <span>{lang === 'en' ? 'Schedule an Introduction' : 'Agendar Presentación'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile / Portrait / Tablet Menu Trigger (visible below XL: < 1280px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-300 hover:text-white hover:bg-[#273349]/50 rounded-xl transition-colors shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#01BBDC]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Responsive Drawer for Vertical Monitors, Tablets and Mobile */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#08172E]/98 backdrop-blur-xl border-b border-[#273349] px-6 pt-4 pb-8 shadow-2xl transition-all">
          <div className="max-w-md mx-auto space-y-2">
            <div className="text-[10px] tracking-widest text-[#01BBDC] uppercase font-bold mb-3 px-3">
              {lang === 'en' ? 'NAVIGATION' : 'NAVEGACIÓN'}
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-base font-semibold text-slate-200 hover:text-white hover:bg-[#273349]/50 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-500">0{idx + 1}</span>
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-[#273349] space-y-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-press flex items-center justify-center gap-2 bg-[#01BBDC] text-[#08172E] font-bold text-sm py-3 rounded-xl shadow-lg shadow-[#01BBDC]/20"
              >
                <span>{lang === 'en' ? 'Schedule an Introduction' : 'Agendar Presentación'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-between px-3 text-xs text-slate-400 pt-2">
                <span>Torre Davivienda · Medellín</span>
                <a href="mailto:info@i2services.co" className="text-[#01BBDC] hover:underline">info@i2services.co</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
