import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  ArrowUp, 
  MessageCircle 
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';
import { KAIROS_INFO } from '../data/kairosData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071529] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/kairos/logo-kairos.png"
                alt="Kairos Farmacéutica S.A.S."
                className="h-12 w-auto object-contain bg-white/95 rounded-xl p-1.5 shadow-md"
              />
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empresa líder en distribución farmacéutica, abasteciendo a droguerías, clínicas, hospitales e instituciones de salud en los 32 departamentos de Colombia con calidad y puntualidad garantizada.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={KAIROS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:bg-slate-700 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={KAIROS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={KAIROS_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-red-400 hover:bg-slate-700 transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 hover:bg-slate-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Service Lines Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Líneas Farmacéuticas
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#servicios" className="hover:text-[#1A97D1] transition-colors">Línea Hospitalaria</a></li>
              <li><a href="#servicios" className="hover:text-[#1A97D1] transition-colors">Insumos Médicos</a></li>
              <li><a href="#servicios" className="hover:text-[#1A97D1] transition-colors">Canal Institucional</a></li>
              <li><a href="#servicios" className="hover:text-[#1A97D1] transition-colors">Productos Comerciales</a></li>
              <li><a href="#servicios" className="hover:text-[#1A97D1] transition-colors">Línea Naturista</a></li>
            </ul>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#inicio" className="hover:text-[#1A97D1] transition-colors">Inicio</a></li>
              <li><a href="#infraestructura" className="hover:text-[#1A97D1] transition-colors">Infraestructura BPM</a></li>
              <li><a href="#equipo" className="hover:text-[#1A97D1] transition-colors">Equipo Comercial</a></li>
              <li><a href="#cotizador" className="hover:text-[#1A97D1] transition-colors">Simulador de Pedidos</a></li>
              <li><a href="#testimonios" className="hover:text-[#1A97D1] transition-colors">Testimonios</a></li>
              <li><a href="#faq" className="hover:text-[#1A97D1] transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="hover:text-[#1A97D1] transition-colors">Contacto Directo</a></li>
            </ul>
          </div>

          {/* Regulatory & Pharmacovigilance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Garantía Sanitaria
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Normas INVIMA & BPM</span>
              </div>
              <p className="leading-relaxed">
                Cumplimiento estricto de la cadena de frío, condiciones higiénico-sanitarias y registro de trazabilidad por lotes.
              </p>
            </div>
            <div className="text-[11px] text-slate-500 pt-1">
              Farmacovigilancia: <a href="mailto:contacto@kairosfarmaceuticasas.com" className="text-sky-400 hover:underline">reportes@kairos.com</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <strong>Kairos Farmacéutica S.A.S.</strong> &bull; Bucaramanga, Santander, Colombia. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="btn-press flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <span>Subir al Inicio</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
