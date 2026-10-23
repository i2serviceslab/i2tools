import React from 'react';
import { Language } from '../types';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onLanguageChange }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050E1D] text-slate-400 text-xs border-t border-[#273349]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-4">
            <img
              src="/i2-services-logo.png"
              alt="i2 Services S.A.S."
              className="h-9 w-auto opacity-95"
            />
            <div className="hidden sm:block text-[11px] font-mono tracking-widest text-[#718CC1] border-l border-slate-800 pl-4">
              {lang === 'en' ? 'YOU GROUND, OUR EXPERIENCE' : 'SU TERRENO, NUESTRA EXPERIENCIA'}
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <a href="#value-prop" className="hover:text-[#01BBDC] transition-colors">
              {lang === 'en' ? 'Value' : 'Propuesta'}
            </a>
            <a href="#approach" className="hover:text-[#01BBDC] transition-colors">
              {lang === 'en' ? 'Approach' : 'Enfoque'}
            </a>
            <a href="#track-record" className="hover:text-[#01BBDC] transition-colors">
              {lang === 'en' ? 'Track Record' : 'Métricas'}
            </a>
            <a href="#structure" className="hover:text-[#01BBDC] transition-colors">
              {lang === 'en' ? 'Structure' : 'Estructura'}
            </a>
            <a href="#practice-areas" className="hover:text-[#01BBDC] transition-colors">
              {lang === 'en' ? 'Practices' : 'Prácticas'}
            </a>
            <a href="#packages" className="hover:text-[#01BBDC] transition-colors">
              {lang === 'en' ? 'Packages' : 'Paquetes'}
            </a>
            <a href="#brokerage" className="hover:text-[#01BBDC] transition-colors">
              {lang === 'en' ? 'Brokerage' : 'Corretaje'}
            </a>
          </div>

          {/* Language pill */}
          <div className="flex items-center gap-2">
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

            <button
              onClick={scrollToTop}
              className="btn-press p-2 rounded-full bg-[#273349] border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <div>
            © 2026 i2 Services S.A.S. · NIT: 901.782.341 · Torre Empresarial Davivienda, Of. 610, Medellín, Colombia.
          </div>
          <div className="text-[#718CC1]">
            {lang === 'en'
              ? 'Local back-office & mining administration. Mining title brokerage conducted strictly on a buyer-side exclusive mandate.'
              : 'Administración minera y back office local. Corretaje de títulos mineros exclusivamente del lado comprador.'}
          </div>
        </div>

      </div>
    </footer>
  );
};
