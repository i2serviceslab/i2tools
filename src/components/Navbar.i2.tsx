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

  const navLinks = [
    { href: '#value-prop', label: lang === 'en' ? 'Value' : 'Propuesta' },
    { href: '#approach', label: lang === 'en' ? 'Approach' : 'Enfoque' },
    { href: '#track-record', label: lang === 'en' ? 'Track Record' : 'Métricas' },
    { href: '#structure', label: lang === 'en' ? 'Structure' : 'Estructura' },
    { href: '#practice-areas', label: lang === 'en' ? 'Practices' : 'Prácticas' },
    { href: '#packages', label: lang === 'en' ? 'Packages' : 'Paquetes' },
    { href: '#brokerage', label: lang === 'en' ? 'Brokerage' : 'Corretaje' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#08172E]/95 backdrop-blur-md border-b border-[#273349] shadow-xl py-3'
          : 'bg-[#08172E]/80 backdrop-blur-sm border-b border-[#273349]/70 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo from Downloads (i2-services-logo.png) */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/i2-services-logo.png"
            alt="i2 Services S.A.S."
            className="h-9 w-auto opacity-95 group-hover:opacity-100 transition-opacity"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-wide text-slate-300 hover:text-[#01BBDC] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: EN/ES toggle + Direct Button */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Toggle */}
          <div className="flex items-center p-1 rounded-full bg-[#273349] border border-slate-700/80 text-xs font-semibold">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === 'en'
                  ? 'bg-[#01BBDC] text-[#08172E] font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === 'es'
                  ? 'bg-[#01BBDC] text-[#08172E] font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              ES
            </button>
          </div>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="btn-press inline-flex items-center gap-2 bg-[#01BBDC] hover:bg-[#38BDF8] text-[#08172E] text-xs font-bold px-4 py-2 rounded-full shadow-md shadow-[#01BBDC]/20"
          >
            <span>{lang === 'en' ? 'Book a Diagnostic' : 'Solicitar Diagnóstico'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 sm:hidden">
          <div className="flex items-center p-0.5 rounded-full bg-[#273349] border border-slate-700 text-xs font-semibold">
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="px-2.5 py-0.5 text-xs text-[#01BBDC] font-bold uppercase"
            >
              {lang}
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#08172E] border-b border-[#273349] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 py-1.5 hover:text-[#01BBDC]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#273349]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-press flex items-center justify-center gap-2 bg-[#01BBDC] text-[#08172E] font-bold text-xs py-2.5 rounded-full shadow-md"
            >
              <span>{lang === 'en' ? 'Book a Diagnostic' : 'Solicitar Diagnóstico'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
