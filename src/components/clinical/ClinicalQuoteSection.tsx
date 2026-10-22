import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { KAIROS_INFO } from '../../data/kairosData';

interface ClinicalQuoteSectionProps {
  initialLine?: string;
  initialProduct?: string;
}

export const ClinicalQuoteSection: React.FC<ClinicalQuoteSectionProps> = ({
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

  return (
    <section id="sede" className="py-24 sm:py-32 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0077C8] block mb-2">
            Contacto & Solicitudes Comerciales
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Inicie su proceso de cotización o apertura de código.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Complete los datos de su institución o farmacia. Puede elegir recibir su cotización formal en PDF a su correo institucional o conectar en vivo por WhatsApp con el área de despacho.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Headquarters Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-xs">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Sede Central & Despacho
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Kairos Farmacéutica S.A.S.
                </h3>
                <span className="text-xs text-[#0077C8] font-semibold">
                  Parque Industrial Garibaldi &bull; Girón / Santander
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0077C8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Ubicación Física:</span>
                    <span>{KAIROS_INFO.location.address}</span>
                    <span className="block text-slate-500 text-xs">{KAIROS_INFO.location.city}, {KAIROS_INFO.location.state}, Colombia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0077C8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Atención Telefónica:</span>
                    <a href="tel:3150733319" className="hover:text-[#0077C8] block font-mono text-slate-900 font-semibold">+57 315 073 3319</a>
                    <span className="text-xs text-slate-500 block font-mono">PBX Santander: {KAIROS_INFO.contact.mainPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0077C8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Correos Institucionales:</span>
                    <a href={`mailto:${KAIROS_INFO.contact.commercialEmail}`} className="hover:text-[#0077C8] block font-mono text-xs">{KAIROS_INFO.contact.commercialEmail}</a>
                    <a href={`mailto:${KAIROS_INFO.contact.email}`} className="text-xs text-slate-500 hover:text-[#0077C8] block font-mono">{KAIROS_INFO.contact.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#0077C8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Horario de Despachos:</span>
                    <span className="text-xs text-slate-600">{KAIROS_INFO.contact.hours}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Trigger */}
              <div className="pt-4 border-t border-slate-200">
                <a
                  href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=Hola%20Kairos%20Farmac%C3%A9utica,%20deseo%20comunicarme%20directamente`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chatear con Despacho Central</span>
                </a>
              </div>
            </div>

            {/* Regulatory Seal */}
            <div className="p-5 rounded-3xl border border-slate-200 bg-white text-xs text-slate-600 flex items-start gap-3 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-[#0077C8] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">Marco Regulatorio & Calidad:</span>
                <span className="text-slate-500 leading-relaxed block text-[11px]">
                  Kairos Farmacéutica S.A.S. opera en conformidad con el Decreto 2200 de 2005, Resolución 1403 de 2007 y normativas sanitarias del INVIMA para distribución farmacéutica mayorista.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Corporate Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Formulario de Cotización B2B
            </h3>
            <p className="text-xs text-slate-500 mb-6 font-normal">
              Respuesta formal técnica y económica en menos de 2 horas hábiles.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Razón Social o Droguería *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Droguería Central / Clínica San Juan"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Nombre del Responsable *</label>
                  <input
                    type="text"
                    required
                    placeholder="Persona de compras"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Correo Electrónico Institucional *</label>
                  <input
                    type="email"
                    required
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Teléfono o WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+57 300 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Ciudad de Entrega *</label>
                  <input
                    type="text"
                    required
                    placeholder="Bucaramanga, Bogotá, etc."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tipo de Cliente</label>
                  <select
                    value={formData.entityType}
                    onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-slate-900 bg-white"
                  >
                    <option value="Droguería / Farmacia">Droguería / Farmacia</option>
                    <option value="Clínica / IPS / Hospital">Clínica / IPS / Hospital</option>
                    <option value="Canal Institucional / EPS">Canal Institucional / EPS</option>
                    <option value="Distribuidor Mayorista">Distribuidor Mayorista</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Línea de Interés</label>
                  <select
                    value={formData.line}
                    onChange={(e) => setFormData({ ...formData, line: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-slate-900 bg-white"
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
                <label className="block text-xs font-bold text-slate-700 mb-1">Detalle del Pedido o Consulta</label>
                <textarea
                  rows={3}
                  placeholder="Especifique medicamentos, principios activos, volúmenes de compra o requerimientos especiales..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-slate-900"
                />
              </div>

              {/* Channel Selector */}
              <div className="pt-2">
                <span className="block text-xs font-bold text-slate-700 mb-2">Canal de Recepción Preferido:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`p-3 rounded-xl border cursor-pointer flex items-center gap-3 transition-colors ${
                      channel === 'whatsapp'
                        ? 'border-emerald-600 bg-emerald-50/60 text-slate-900'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="clinicalChannel"
                      checked={channel === 'whatsapp'}
                      onChange={() => setChannel('whatsapp')}
                      className="accent-emerald-600"
                    />
                    <div className="text-xs">
                      <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>WhatsApp Inmediato</span>
                      </div>
                      <span className="text-[11px] text-slate-500">Atención en menos de 15 min.</span>
                    </div>
                  </label>

                  <label
                    className={`p-3 rounded-xl border cursor-pointer flex items-center gap-3 transition-colors ${
                      channel === 'email'
                        ? 'border-[#0077C8] bg-sky-50/60 text-slate-900'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="clinicalChannel"
                      checked={channel === 'email'}
                      onChange={() => setChannel('email')}
                      className="accent-[#0077C8]"
                    />
                    <div className="text-xs">
                      <div className="font-bold flex items-center gap-1.5 text-[#0077C8]">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Cotización en PDF por Correo</span>
                      </div>
                      <span className="text-[11px] text-slate-500">Documento formal institucional.</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0A2540] hover:bg-[#0077C8] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {channel === 'whatsapp'
                      ? 'Enviar Cotización & Conectar por WhatsApp'
                      : 'Generar Radicado & Recibir Cotización en Correo'}
                  </span>
                </button>
              </div>

              {sent && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs space-y-1 animate-fadeIn">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Solicitud Registrada con Radicado Oficial: {radicado}</span>
                  </div>
                  <p className="font-normal text-emerald-800">
                    {channel === 'whatsapp'
                      ? 'Se ha generado su ficha técnica y abierto el chat con el asesor de despacho en Garibaldi para atención instantánea.'
                      : `Hemos registrado su solicitud para ${formData.institution}. Un asesor comercial despachará la cotización formal en PDF al correo ${formData.email} en menos de 2 horas hábiles.`}
                  </p>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
