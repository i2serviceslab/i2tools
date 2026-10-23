import React from 'react';
import { Language } from '../types';
import { ArrowUp, MessageSquare } from 'lucide-react';
import logoOfficial from '../assets/logo.png';

interface FooterProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onLanguageChange }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    lang === 'en'
      ? 'Hello i2 Services team, I would like to schedule an introductory call regarding our exploration project in Colombia.'
      : 'Hola equipo de i2 Services, me gustaría agendar una reunión sobre nuestro proyecto de exploración en Colombia.'
  );

  return (
    <footer className="bg-[#050E1D] text-slate-400 text-xs border-t border-[#273349]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Two-Column Balanced Layout (No Navigation Clutter) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-12 border-b border-slate-800/80 items-start">
          
          {/* Left: Brand Identity & Positioning */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex flex-col items-start">
              <img
                src={logoOfficial}
                alt="i2 Services S.A.S. - You Ground, our Experience"
                className="h-10 sm:h-11 w-auto opacity-95 hover:opacity-100 transition-opacity"
              />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md font-normal">
              {lang === 'en'
                ? 'Specialised back-office, legal, ANM compliance, accounting and administrative partner for foreign junior exploration mining companies operating in Colombia.'
                : 'Socio especializado en back-office, cumplimiento legal ante la ANM, contabilidad NIIF y gestión administrativa para compañías mineras junior en Colombia.'}
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
              <span>NIT: 901.782.341</span>
              <span>·</span>
              <span>Medellín, Colombia</span>
            </div>
          </div>

          {/* Right: 3 Contact Columns with generous spacing & clean typography */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Headquarters */}
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-[#01BBDC] font-bold">
                {lang === 'en' ? 'HEADQUARTERS' : 'SEDE PRINCIPAL'}
              </div>
              <div className="pdf-accent-bar mb-3" />
              <div className="text-sm sm:text-base font-bold text-white leading-snug">
                Cra. 43A #1 Sur 188
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Oficina 610 · Torre Davivienda
              </div>
              <div className="text-xs text-slate-400">
                El Poblado · Medellín
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-[#01BBDC] font-bold">
                {lang === 'en' ? 'EMAIL' : 'CORREO'}
              </div>
              <div className="pdf-accent-bar mb-3" />
              <div>
                <a
                  href="mailto:info@i2services.co"
                  className="text-sm sm:text-base font-bold text-white hover:text-[#01BBDC] transition-colors break-all"
                >
                  info@i2services.co
                </a>
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {lang === 'en' ? 'Direct executive communications' : 'Comunicaciones directas con dirección'}
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-[#01BBDC] font-bold">
                {lang === 'en' ? 'PHONE' : 'TELÉFONO'}
              </div>
              <div className="pdf-accent-bar mb-3" />
              <div>
                <a
                  href="tel:+573103976421"
                  className="text-sm sm:text-base font-bold text-white hover:text-[#01BBDC] transition-colors"
                >
                  +57 310 397 6421
                </a>
              </div>
              <div>
                <a
                  href={`https://wa.me/573103976421?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors pt-0.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Chat via WhatsApp' : 'Escribir a WhatsApp'}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Actions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 i2 Services S.A.S. · Torre Empresarial Davivienda, Of. 610, Medellín, Colombia.
          </div>

          <div className="flex items-center gap-4">
            {/* Language Pill */}
            <div className="flex items-center p-1 rounded-full bg-[#273349] border border-slate-700 text-[11px] font-bold">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-0.5 rounded-full transition-colors ${
                  lang === 'en' ? 'bg-[#01BBDC] text-[#08172E]' : 'text-slate-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-2.5 py-0.5 rounded-full transition-colors ${
                  lang === 'es' ? 'bg-[#01BBDC] text-[#08172E]' : 'text-slate-300 hover:text-white'
                }`}
              >
                ES
              </button>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="btn-press p-2 rounded-full bg-[#273349] border border-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
