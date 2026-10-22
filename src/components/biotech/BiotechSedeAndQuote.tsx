import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, FileText, CheckCircle2, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';
import { KAIROS_INFO } from '../../data/kairosData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface BiotechSedeAndQuoteProps {
  initialLine?: string;
  initialProduct?: string;
}

export const BiotechSedeAndQuote: React.FC<BiotechSedeAndQuoteProps> = ({
  initialLine,
  initialProduct
}) => {
  const [formData, setFormData] = useState({
    institution: '',
    contactName: '',
    email: '',
    phone: '',
    city: '',
    entityType: 'Droguería / Farmacia',
    line: initialLine || 'Línea Hospitalaria',
    details: initialProduct ? `Referencia seleccionada: ${initialProduct}` : ''
  });

  const [channel, setChannel] = useState<'whatsapp' | 'email'>('whatsapp');
  const [radicado, setRadicado] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (initialLine) {
      setFormData((prev) => ({ ...prev, line: initialLine }));
    }
  }, [initialLine]);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        details: prev.details ? `${prev.details}\nReferencia: ${initialProduct}` : `Referencia: ${initialProduct}`
      }));
    }
  }, [initialProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rad = `KAI-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setRadicado(rad);
    setSent(true);

    if (channel === 'whatsapp') {
      const text = encodeURIComponent(
        `*SOLICITUD DE COTIZACIÓN - KAIROS FARMACÉUTICA S.A.S.*\n` +
        `*Radicado:* ${rad}\n\n` +
        `*Entidad / Droguería:* ${formData.institution}\n` +
        `*Contacto Responsable:* ${formData.contactName}\n` +
        `*Tipo:* ${formData.entityType}\n` +
        `*Línea:* ${formData.line}\n` +
        `*Ciudad de Despacho:* ${formData.city}\n` +
        `*Teléfono:* ${formData.phone}\n` +
        `*Email:* ${formData.email}\n` +
        (formData.details ? `*Detalle:* ${formData.details}\n\n` : '\n') +
        `Solicito lista de precios mayoristas y condiciones de entrega inmediata.`
      );
      window.open(`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=${text}`, '_blank');
    }
  };

  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section id="sede" className="py-24 sm:py-36 bg-white relative overflow-hidden border-t border-slate-200">
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-4 sm:px-8 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
            <span className="uppercase tracking-[0.25em] text-[10px] font-bold">Sede Central & Cotizaciones</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.04]">
            Centro de distribución Garibaldi &bull;{' '}
            <span className="biotech-gradient-text">Cotización formal en minutos.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Consulte la disponibilidad de medicamentos con soporte técnico de lote o solicite su cotización oficial en PDF para trámites institucionales y de compras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (Span 5): Physical Facilities & Institutional Presence */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-2 rounded-[2rem] bg-slate-100 border border-slate-200 shadow-md">
              <div className="rounded-[calc(2rem-0.5rem)] overflow-hidden bg-slate-900 border border-slate-800 relative aspect-[16/10] group">
                <img
                  src="/kairos/about-instalaciones.jpg"
                  alt="Instalaciones Kairos Garibaldi"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#00C2CB] block mb-1">
                    Operación Central
                  </span>
                  <div className="text-sm font-bold">
                    Parque Industrial Garibaldi, Manzana 3 Bodega 4
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Girón / Bucaramanga, Santander, Colombia
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Líneas de Atención PBX:</span>
                    <a href="tel:3150733319" className="hover:text-[#0284C7] font-mono text-slate-800 block">+57 315 073 3319</a>
                    <span className="text-xs text-slate-500 font-mono">Fijo Santander: {KAIROS_INFO.contact.mainPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Correos Institucionales:</span>
                    <a href={`mailto:${KAIROS_INFO.contact.commercialEmail}`} className="hover:text-[#0284C7] font-mono text-xs block text-slate-800">{KAIROS_INFO.contact.commercialEmail}</a>
                    <a href={`mailto:${KAIROS_INFO.contact.email}`} className="text-xs text-slate-500 font-mono hover:text-[#0284C7] block">{KAIROS_INFO.contact.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Horario de Despachos:</span>
                    <span className="text-xs text-slate-600">{KAIROS_INFO.contact.hours}</span>
                  </div>
                </div>

                {/* Central WhatsApp Trigger */}
                <div className="pt-3 border-t border-slate-200">
                  <a
                    href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=Hola%20Kairos%20Farmac%C3%A9utica,%20deseo%20comunicarme%20con%20Despacho%20Central`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Línea Directa Despacho Central</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Regulatory Notice */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 text-xs text-slate-600 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Acreditación Sanitaria & DIAN:</span>
                <span className="text-slate-500 text-[11px] leading-relaxed block mt-0.5">
                  Kairos Farmacéutica S.A.S. cumple con la Resolución 1403 de 2007, Decreto 2200 de 2005 y directrices del INVIMA para distribución farmacéutica mayorista.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (Span 7): High-Tech B2B Quote Terminal */}
          <div className="lg:col-span-7 p-2 rounded-[2.5rem] bg-slate-100 border border-slate-200 shadow-xl">
            <div className="p-6 sm:p-10 rounded-[calc(2.5rem-0.6rem)] bg-white border border-slate-200/80 space-y-6">
              
              <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-slate-950">
                    Terminal de Cotización B2B
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-normal">
                    Precios mayoristas, certificación de lote y cálculo de flete en menos de 2 horas.
                  </p>
                </div>
                <span className="text-xs font-mono text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full font-bold">
                  SLA: 2h Hábiles
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Razón Social o Droguería *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Droguería Central / Clínica San Juan"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-colors bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Nombre del Responsable *</label>
                    <input
                      type="text"
                      required
                      placeholder="Persona de compras o regente"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-colors bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Correo Electrónico Institucional *</label>
                    <input
                      type="email"
                      required
                      placeholder="correo@institucion.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-colors bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Teléfono o Celular *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+57 300 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-colors bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Ciudad de Entrega *</label>
                    <input
                      type="text"
                      required
                      placeholder="Bucaramanga, Bogotá, etc."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-colors bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Tipo de Cliente</label>
                    <select
                      value={formData.entityType}
                      onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-colors bg-white cursor-pointer"
                    >
                      <option value="Droguería / Farmacia">Droguería / Farmacia</option>
                      <option value="Clínica / IPS / Hospital">Clínica / IPS / Hospital</option>
                      <option value="Canal Institucional / EPS">Canal Institucional / EPS</option>
                      <option value="Distribuidor Mayorista">Distribuidor Mayorista</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Línea de Interés</label>
                    <select
                      value={formData.line}
                      onChange={(e) => setFormData({ ...formData, line: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-colors bg-white cursor-pointer"
                    >
                      <option value="Línea Hospitalaria">Línea Hospitalaria</option>
                      <option value="Insumos Médicos">Insumos Médicos</option>
                      <option value="Canal Institucional">Canal Institucional</option>
                      <option value="Productos comerciales">Productos Comerciales</option>
                      <option value="Línea Naturista">Línea Naturista</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Detalle del Pedido o Principios Activos</label>
                  <textarea
                    rows={3}
                    placeholder="Especifique medicamentos, presentaciones, volúmenes de compra o requerimientos de cadena de frío..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-colors bg-slate-50/50"
                  />
                </div>

                {/* Preferred Channel Radio Selector */}
                <div className="pt-2">
                  <span className="block text-xs font-bold text-slate-800 mb-2">Canal de Recepción Deseado:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center gap-3 transition-colors ${
                        channel === 'whatsapp'
                          ? 'border-emerald-600 bg-emerald-50/60 text-slate-950 shadow-2xs'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="channel"
                        checked={channel === 'whatsapp'}
                        onChange={() => setChannel('whatsapp')}
                        className="accent-emerald-600 cursor-pointer"
                      />
                      <div className="text-xs">
                        <div className="font-extrabold text-emerald-800 flex items-center gap-1.5">
                          <MessageCircle className="w-3.5 h-3.5 fill-current" />
                          <span>WhatsApp Inmediato</span>
                        </div>
                        <span className="text-[11px] text-slate-500">Respuesta en &lt; 15 min.</span>
                      </div>
                    </label>

                    <label
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center gap-3 transition-colors ${
                        channel === 'email'
                          ? 'border-[#0284C7] bg-sky-50/60 text-slate-950 shadow-2xs'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="channel"
                        checked={channel === 'email'}
                        onChange={() => setChannel('email')}
                        className="accent-[#0284C7] cursor-pointer"
                      />
                      <div className="text-xs">
                        <div className="font-extrabold text-[#0284C7] flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5" />
                          <span>PDF Formal a mi Correo</span>
                        </div>
                        <span className="text-[11px] text-slate-500">Documento institucional formal.</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0A192F] hover:bg-[#0284C7] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg active:scale-[0.98] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {channel === 'whatsapp'
                        ? 'Enviar Cotización & Conectar por WhatsApp'
                        : 'Generar Radicado & Recibir Cotización en PDF'}
                    </span>
                  </button>
                </div>

                {sent && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs space-y-1.5 animate-fadeIn">
                    <div className="flex items-center gap-2 font-black text-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Solicitud Registrada con Radicado Oficial: {radicado}</span>
                    </div>
                    <p className="font-normal text-emerald-800 leading-relaxed">
                      {channel === 'whatsapp'
                        ? 'Se ha generado la ficha de su pedido y abierto el canal directo con el asesor de despacho en Garibaldi.'
                        : `Hemos confirmado su solicitud para ${formData.institution}. Un ejecutivo comercial enviará la cotización oficial en PDF con precios vigentes y fechas de vencimiento al correo ${formData.email} en menos de 2 horas hábiles.`}
                    </p>
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
