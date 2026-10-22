import React from 'react';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../SocialIcons';
import { KAIROS_INFO } from '../../data/kairosData';

export const FooterCencora: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12">
        
        {/* Main Grid (Cencora Corporate Footer Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          
          {/* Logo & Corporate Identity */}
          <div className="lg:col-span-2 space-y-4">
            <img
              src="/kairos/logo-kairos.png"
              alt="Kairos Farmacéutica S.A.S."
              className="h-10 w-auto object-contain bg-white rounded-lg p-1"
            />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              Organización de soluciones y distribución farmacéutica mayorista en Colombia. Conectamos laboratorios, droguerías y prestadores de salud con altos estándares de calidad, cadena de frío y rigor técnico.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={KAIROS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={KAIROS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={KAIROS_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Solutions & Lines */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Capacidades & Líneas
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#capacidades" className="hover:text-white transition-colors">Línea Hospitalaria</a></li>
              <li><a href="#capacidades" className="hover:text-white transition-colors">Insumos Médicos</a></li>
              <li><a href="#capacidades" className="hover:text-white transition-colors">Canal Institucional</a></li>
              <li><a href="#capacidades" className="hover:text-white transition-colors">Productos Comerciales</a></li>
              <li><a href="#capacidades" className="hover:text-white transition-colors">Línea Naturista</a></li>
            </ul>
          </div>

          {/* Who We Serve */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              A quién servimos
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#quienes-servimos" className="hover:text-white transition-colors">Droguerías & Farmacias</a></li>
              <li><a href="#quienes-servimos" className="hover:text-white transition-colors">Clínicas, Hospitales e IPS</a></li>
              <li><a href="#quienes-servimos" className="hover:text-white transition-colors">Canal Institucional & EPS</a></li>
              <li><a href="#infraestructura" className="hover:text-white transition-colors">Cadena de Frío BPM</a></li>
              <li><a href="#equipo" className="hover:text-white transition-colors">Equipo Comercial</a></li>
            </ul>
          </div>

          {/* Pharmacovigilance & Legal */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Farmacovigilancia & Calidad
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed font-normal">
              Para reportes de eventos adversos, dudas técnicas o farmacovigilancia, comuníquese con:
            </p>
            <div className="text-slate-300">
              <a href="mailto:contacto@kairosfarmaceuticasas.com" className="hover:text-white underline">
                contacto@kairosfarmaceuticasas.com
              </a>
            </div>
            <div className="text-[11px] text-slate-500 pt-2">
              Sede: Parque Industrial Garibaldi, Girón, Santander.
            </div>
          </div>

        </div>

        {/* Bottom Bar (Cencora Copyright & Disclaimers) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <strong>Kairos Farmacéutica S.A.S.</strong> Todos los derechos reservados. Bucaramanga / Girón, Santander, Colombia.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
