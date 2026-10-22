import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2, ArrowRight, FileText, Building2, ShieldCheck } from 'lucide-react';
import { KAIROS_INFO } from '../../data/kairosData';

interface QuoteAndContactCencoraProps {
  initialAudience?: string;
  initialLine?: string;
  initialProduct?: string;
}

export const QuoteAndContactCencora: React.FC<QuoteAndContactCencoraProps> = ({
  initialAudience,
  initialLine,
  initialProduct
}) => {
  const [formData, setFormData] = useState({
    institution: '',
    contactName: '',
    email: '',
    phone: '',
    city: '',
    entityType: initialAudience || 'Droguería / Farmacia',
    line: initialLine || 'Línea Hospitalaria',
    details: initialProduct ? `Solicitud sobre: ${initialProduct}` : ''
  });

  const [submissionType, setSubmissionType] = useState<'whatsapp' | 'email'>('whatsapp');
  const [radicado, setRadicado] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialAudience) {
      setFormData((prev) => ({ ...prev, entityType: initialAudience }));
    }
  }, [initialAudience]);

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
    const radNumber = `KAI-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setRadicado(radNumber);
    setSubmitted(true);

    if (submissionType === 'whatsapp') {
      const text = encodeURIComponent(
        `*SOLICITUD DE COTIZACIÓN - KAIROS FARMACÉUTICA S.A.S.*\n` +
        `*Radicado:* ${radNumber}\n\n` +
        `*Entidad / Razón Social:* ${formData.institution}\n` +
        `*Contacto Responsable:* ${formData.contactName}\n` +
        `*Tipo de Entidad:* ${formData.entityType}\n` +
        `*Línea Solicitada:* ${formData.line}\n` +
        `*Ciudad de Despacho:* ${formData.city}\n` +
        `*Teléfono:* ${formData.phone}\n` +
        `*Email:* ${formData.email}\n` +
        (formData.details ? `*Detalle:* ${formData.details}\n\n` : '\n') +
        `Solicito cotización formal con precios mayoristas y tiempos de entrega.`
      );
      window.open(`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=${text}`, '_blank');
    }
  };

  return (
    <section id="contacto" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D7AAB] block mb-2">
            Canal Institucional & Despachos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
            Solicite su cotización formal o apertura de cuenta.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Complete los datos de su institución o farmacia. Puede elegir recibir su cotización formal en PDF a su correo institucional o conectar en vivo por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Headquarters Information (Cencora Style) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-xl bg-slate-50 border border-slate-200 space-y-6 shadow-2xs">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Sede Central Operativa
                </span>
                <h3 className="text-xl font-bold text-slate-950">
                  Kairos Farmacéutica S.A.S.
                </h3>
                <span className="text-xs text-[#0D7AAB] font-semibold">
                  Distribución Mayorista Nacional
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0D7AAB] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Centro Logístico:</span>
                    <span>{KAIROS_INFO.location.address}</span>
                    <span className="block text-slate-500 text-xs">{KAIROS_INFO.location.city}, {KAIROS_INFO.location.state}, Colombia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0D7AAB] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Líneas de Atención:</span>
                    <a href="tel:3150733319" className="hover:text-[#0D7AAB] block font-mono">+57 315 073 3319</a>
                    <span className="text-xs text-slate-500 block">PBX Santander: {KAIROS_INFO.contact.mainPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0D7AAB] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Correos de Cotizaciones:</span>
                    <a href={`mailto:${KAIROS_INFO.contact.commercialEmail}`} className="hover:text-[#0D7AAB] block font-mono text-xs">{KAIROS_INFO.contact.commercialEmail}</a>
                    <a href={`mailto:${KAIROS_INFO.contact.email}`} className="text-xs text-slate-500 hover:text-[#0D7AAB] block font-mono">{KAIROS_INFO.contact.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#0D7AAB] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Horario de Despacho & Bodega:</span>
                    <span>{KAIROS_INFO.contact.hours}</span>
                  </div>
                </div>
              </div>

              {/* Fast Direct WhatsApp Trigger to Central */}
              <div className="pt-4 border-t border-slate-200">
                <a
                  href={`https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=Hola%20Kairos%20Farmac%C3%A9utica,%20deseo%20comunicarme%20con%20Despacho%20Central`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Línea Directa Despacho Central</span>
                </a>
              </div>
            </div>

            {/* Regulatory Notice */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white text-xs text-slate-600 space-y-1">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0D7AAB]" />
                <span>Cumplimiento Sanitario Garantizado</span>
              </div>
              <p className="font-normal text-[11px] text-slate-500 leading-relaxed">
                Operamos bajo la Resolución 1403 de 2007, Decreto 2200 de 2005 y directrices del INVIMA para distribución y almacenamiento mayorista de medicamentos e insumos médicos.
              </p>
            </div>
          </div>

          {/* Right Column: Dual Submission Enterprise Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-xl border border-slate-200 shadow-xs">
            <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Formulario Oficial de Cotización B2B
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-normal">
                  Respuesta formal garantizada en menos de 2 horas hábiles.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Razón Social o Droguería *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Droguería Central / Clínica San José"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Nombre del Responsable *</label>
                  <input
                    type="text"
                    required
                    placeholder="Encargado(a) de compras"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Correo Electrónico Institucional *</label>
                  <input
                    type="email"
                    required
                    placeholder="compras@suempresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Teléfono o Celular *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+57 300 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Ciudad de Entrega *</label>
                  <input
                    type="text"
                    required
                    placeholder="Bucaramanga, Bogotá, etc."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Tipo de Cliente</label>
                  <select
                    value={formData.entityType}
                    onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-slate-900 bg-white"
                  >
                    <option value="Droguería / Farmacia">Droguería / Farmacia</option>
                    <option value="Clínica / IPS / Hospital">Clínica / IPS / Hospital</option>
                    <option value="Canal Institucional / EPS">Canal Institucional / EPS</option>
                    <option value="Distribuidor Mayorista">Distribuidor Mayorista</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Línea de Interés</label>
                  <select
                    value={formData.line}
                    onChange={(e) => setFormData({ ...formData, line: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-slate-900 bg-white"
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">Detalle del Pedido, Principios Activos o Cantidades</label>
                <textarea
                  rows={3}
                  placeholder="Especifique referencias de medicamentos, volúmenes estimados o requerimientos especiales de cadena de frío..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-slate-900"
                />
              </div>

              {/* Submission Mode Selector (Dual Channel: WhatsApp or Formal Email PDF) */}
              <div className="pt-2">
                <span className="block text-xs font-semibold text-slate-700 mb-2">Canal de Recepción Preferido:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`p-3 rounded-lg border cursor-pointer flex items-center gap-3 transition-colors ${
                      submissionType === 'whatsapp'
                        ? 'border-emerald-600 bg-emerald-50/50 text-slate-900'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="subType"
                      checked={submissionType === 'whatsapp'}
                      onChange={() => setSubmissionType('whatsapp')}
                      className="accent-emerald-600"
                    />
                    <div className="text-xs">
                      <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp Inmediato</span>
                      </div>
                      <span className="text-[11px] text-slate-500">Atención en menos de 15 min.</span>
                    </div>
                  </label>

                  <label
                    className={`p-3 rounded-lg border cursor-pointer flex items-center gap-3 transition-colors ${
                      submissionType === 'email'
                        ? 'border-[#0D7AAB] bg-blue-50/50 text-slate-900'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="subType"
                      checked={submissionType === 'email'}
                      onChange={() => setSubmissionType('email')}
                      className="accent-[#0D7AAB]"
                    />
                    <div className="text-xs">
                      <div className="font-bold flex items-center gap-1.5 text-[#0D7AAB]">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Cotización en PDF por Correo</span>
                      </div>
                      <span className="text-[11px] text-slate-500">Documento formal con validez 15 días.</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0A192F] hover:bg-[#0D7AAB] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {submissionType === 'whatsapp' 
                      ? 'Enviar Cotización & Conectar por WhatsApp' 
                      : 'Generar Radicado & Recibir Cotización en Correo'}
                  </span>
                </button>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-1 animate-fadeIn">
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-950">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Solicitud Registrada con Radicado: {radicado}</span>
                  </div>
                  <p className="font-normal text-emerald-800">
                    {submissionType === 'whatsapp'
                      ? 'Se ha generado su ficha técnica y abierto el chat con el asesor de despacho central para atención instantánea.'
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
