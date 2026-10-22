import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../SocialIcons';
import { KAIROS_INFO } from '../../data/kairosData';

export const ClinicalFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          
          {/* Logo & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <img
              src="/kairos/logo-kairos.png"
              alt="Kairos Farmacéutica S.A.S."
              className="h-9 w-auto object-contain bg-white rounded-xl p-1.5"
            />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              Distribución farmacéutica mayorista en Colombia. Abastecimiento seguro y continuo para droguerías, clínicas, hospitales e IPS con estricto apego a las Buenas Prácticas de Almacenamiento.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={KAIROS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={KAIROS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={KAIROS_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Lines */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Líneas de Portafolio
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#portafolio" className="hover:text-white transition-colors">Línea Hospitalaria</a></li>
              <li><a href="#portafolio" className="hover:text-white transition-colors">Insumos Quirúrgicos</a></li>
              <li><a href="#portafolio" className="hover:text-white transition-colors">Canal Institucional & EPS</a></li>
              <li><a href="#portafolio" className="hover:text-white transition-colors">Productos Comerciales</a></li>
              <li><a href="#portafolio" className="hover:text-white transition-colors">Línea Naturista</a></li>
            </ul>
          </div>

          {/* Infrastructure */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Infraestructura & Calidad
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#cadena-frio" className="hover:text-white transition-colors">Cámaras Frías (2°C - 8°C)</a></li>
              <li><a href="#cadena-frio" className="hover:text-white transition-colors">Almacén Climatizado (15°C - 25°C)</a></li>
              <li><a href="#despacho" className="hover:text-white transition-colors">Rutas 32 Departamentos</a></li>
              <li><a href="#equipo" className="hover:text-white transition-colors">Equipo de Asesores</a></li>
              <li><a href="#sede" className="hover:text-white transition-colors">Parque Industrial Garibaldi</a></li>
            </ul>
          </div>

          {/* Pharmacovigilance */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Farmacovigilancia & Calidad
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed font-normal">
              Para reportes técnicos, farmacovigilancia o consultas de lote:
            </p>
            <div className="text-slate-300 font-mono text-[11px]">
              <a href="mailto:contacto@kairosfarmaceuticasas.com" className="hover:text-white underline block">
                contacto@kairosfarmaceuticasas.com
              </a>
              <span className="block text-slate-500 mt-1">PBX: +57 315 073 3319</span>
            </div>
            <div className="text-[11px] text-slate-500 pt-1">
              Sede: Parque Industrial Garibaldi, Girón, Santander.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <strong>Kairos Farmacéutica S.A.S.</strong> NIT Vigente &bull; Girón / Bucaramanga, Santander, Colombia.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
