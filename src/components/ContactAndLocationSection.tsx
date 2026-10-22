import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Building 
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';
import { KAIROS_INFO } from '../data/kairosData';

export const ContactAndLocationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Información General',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    // Also prepare WhatsApp fallback for quick response
    const waText = encodeURIComponent(
      `*MENSAJE DESDE LA WEB KAIROS FARMACÉUTICA*\n\n*Nombre:* ${formData.name}\n*Email:* ${formData.email}\n*Tel:* ${formData.phone}\n*Asunto:* ${formData.subject}\n*Mensaje:* ${formData.message}`
    );
    window.open(`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=${waText}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#0D7FA8] text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Canales de Comunicación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contáctenos: Estamos para Servirle en Toda Colombia
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Visítenos en nuestras instalaciones principales en Girón o comuníquese con nuestro equipo de atención inmediata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Information Cards & Social */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Office Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#1A97D1] flex items-center justify-center mb-4">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Sede Central & Centro Logístico
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Kairos Farmacéutica S.A.S. &bull; NIT Registrado en Colombia
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1A97D1] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900">Dirección:</span>
                    <span>{KAIROS_INFO.location.address}</span>
                    <span className="block text-xs text-slate-500">{KAIROS_INFO.location.city}, {KAIROS_INFO.location.state}, Colombia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#1A97D1] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900">Líneas de Atención:</span>
                    <a href="tel:3150733319" className="hover:text-[#1A97D1] block">+57 315 073 3319 (Móvil & WhatsApp)</a>
                    <span className="text-xs text-slate-500">PBX Santander: {KAIROS_INFO.contact.mainPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#1A97D1] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900">Correo Electrónico:</span>
                    <a href={`mailto:${KAIROS_INFO.contact.email}`} className="hover:text-[#1A97D1] block">{KAIROS_INFO.contact.email}</a>
                    <a href={`mailto:${KAIROS_INFO.contact.commercialEmail}`} className="text-xs text-slate-500 hover:text-[#1A97D1] block">{KAIROS_INFO.contact.commercialEmail}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1A97D1] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900">Horario de Despachos:</span>
                    <span>{KAIROS_INFO.contact.hours}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Síganos en Redes Oficiales
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={KAIROS_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-pink-600 hover:bg-pink-50 hover:border-pink-200 transition-all shadow-2xs"
                    aria-label="Instagram de Kairos Farmacéutica"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={KAIROS_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all shadow-2xs"
                    aria-label="Facebook de Kairos Farmacéutica"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={KAIROS_INFO.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-red-600 hover:bg-red-50 hover:border-red-200 transition-all shadow-2xs"
                    aria-label="YouTube de Kairos Farmacéutica"
                  >
                    <YoutubeIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 hover:bg-emerald-100 transition-all shadow-2xs"
                    aria-label="WhatsApp Oficial"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Map Access Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#1A97D1] shrink-0" />
                <div className="text-xs text-slate-700">
                  <strong>Ubicación GPS:</strong> Parque Industrial Garibaldi, Girón
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Parque+Industrial+Garibaldi+Giron+Santander"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press text-xs font-bold text-[#1A97D1] hover:underline"
              >
                Abrir Mapa &rarr;
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10">
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
              Envíenos un Mensaje
            </h3>
            <p className="text-sm text-slate-600 mb-8">
              Complete el formulario y uno de nuestros asesores comerciales se comunicará con usted de inmediato.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Su nombre o razón social"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A97D1]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Correo Electrónico *</label>
                  <input
                    type="email"
                    required
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A97D1]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Número de Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+57 315 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A97D1]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Línea o Asunto de Interés</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A97D1]"
                  >
                    <option value="Cotización de Medicamentos">Cotización de Medicamentos Comerciales</option>
                    <option value="Suministro Hospitalario / IPS">Suministro Hospitalario / IPS</option>
                    <option value="Insumos Médicos">Insumos Médicos & Quirúrgicos</option>
                    <option value="Canal Institucional">Canal Institucional EPS / Entidades</option>
                    <option value="Línea Naturista">Línea Naturista & Suplementos</option>
                    <option value="Apertura de Código de Cliente">Apertura de Código de Cliente Nuevo</option>
                    <option value="Otro Asunto">Otro Asunto</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Mensaje o Requerimiento *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Detalle los medicamentos, insumos, cantidades requeridas o la información que necesita..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A97D1]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-press w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#1A97D1] to-[#0284C7] hover:from-[#1480B2] hover:to-[#0369A1] shadow-lg shadow-[#1A97D1]/25 text-base"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensaje & Conectar por WhatsApp</span>
                </button>
              </div>

              {isSent && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>¡Mensaje preparado con éxito! Estamos listos para atenderle de inmediato.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
