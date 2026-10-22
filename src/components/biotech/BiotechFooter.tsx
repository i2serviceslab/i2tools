import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, ShieldCheck, HeartPulse } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../SocialIcons';
import { KAIROS_INFO } from '../../data/kairosData';

export const BiotechFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-white/10 relative overflow-hidden">
      
      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(2,132,199,0.1),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-12 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Logo & Corporate Identity */}
          <div className="lg:col-span-2 space-y-5">
            <img
              src="/kairos/logo-kairos.png"
              alt="Kairos Farmacéutica S.A.S."
              className="h-9 w-auto object-contain bg-white rounded-xl p-1.5 shadow-md"
            />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              Organización de soluciones farmacéuticas y distribución mayorista de alta precisión en Colombia. Rigor técnico en cadena de frío, trazabilidad de lote y abastecimiento continuo.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={KAIROS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={KAIROS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={KAIROS_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Lines */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Líneas & Portafolio
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
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Infraestructura & Red
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#cadena-frio" className="hover:text-white transition-colors">Cámaras Frías (2°C - 8°C)</a></li>
              <li><a href="#cadena-frio" className="hover:text-white transition-colors">Almacén Climatizado (15°C - 25°C)</a></li>
              <li><a href="#red-nacional" className="hover:text-white transition-colors">Red de Despacho 32 Deptos</a></li>
              <li><a href="#asesores" className="hover:text-white transition-colors">Directorio Comercial Directo</a></li>
              <li><a href="#sede" className="hover:text-white transition-colors">Parque Industrial Garibaldi</a></li>
            </ul>
          </div>

          {/* Pharmacovigilance */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white flex items-center gap-1.5">
              <HeartPulse className="w-3.5 h-3.5 text-[#00C2CB]" />
              <span>Farmacovigilancia</span>
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed font-normal">
              Notificación técnica de reacciones adversas, calidad de lote y soporte farmacéutico:
            </p>
            <div className="text-slate-300 font-mono text-[11px]">
              <a href="mailto:contacto@kairosfarmaceuticasas.com" className="hover:text-[#00C2CB] underline block">
                contacto@kairosfarmaceuticasas.com
              </a>
              <span className="block text-slate-500 mt-1">PBX: +57 315 073 3319</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <strong>Kairos Farmacéutica S.A.S.</strong> NIT Vigente &bull; Parque Industrial Garibaldi, Girón / Bucaramanga, Santander, Colombia.
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
