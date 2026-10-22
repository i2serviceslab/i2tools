import React, { useState } from 'react';
import { 
  Calculator, 
  Send, 
  CheckCircle2, 
  Building2, 
  Store, 
  Briefcase, 
  Sparkles, 
  MessageCircle, 
  HelpCircle 
} from 'lucide-react';
import { KAIROS_INFO } from '../data/kairosData';

interface QuoteSimulatorSectionProps {
  initialServiceLine?: string;
}

export const QuoteSimulatorSection: React.FC<QuoteSimulatorSectionProps> = ({ initialServiceLine }) => {
  const [clientType, setClientType] = useState<string>('Droguería');
  const [selectedLines, setSelectedLines] = useState<string[]>(
    initialServiceLine ? [initialServiceLine] : ['Productos comerciales']
  );
  const [city, setCity] = useState<string>('');
  const [institutionName, setInstitutionName] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const availableLines = [
    'Línea Hospitalaria',
    'Insumos Médicos',
    'Canal Institucional',
    'Productos comerciales',
    'Línea Naturista'
  ];

  const clientTypes = [
    { id: 'Droguería', label: 'Droguería / Farmacia', icon: Store },
    { id: 'Clínica / IPS', label: 'Clínica / Hospital / IPS', icon: Building2 },
    { id: 'Distribuidor', label: 'Distribuidor Mayorista', icon: Briefcase },
  ];

  const toggleLine = (line: string) => {
    if (selectedLines.includes(line)) {
      if (selectedLines.length > 1) {
        setSelectedLines(selectedLines.filter(l => l !== line));
      }
    } else {
      setSelectedLines([...selectedLines, line]);
    }
  };

  const generateWhatsAppMessage = () => {
    let msg = `*SOLICITUD DE COTIZACIÓN - KAIROS FARMACÉUTICA*\n\n`;
    msg += `*Tipo de Entidad:* ${clientType}\n`;
    if (institutionName) msg += `*Razón Social:* ${institutionName}\n`;
    if (contactName) msg += `*Contacto:* ${contactName}\n`;
    if (city) msg += `*Ciudad / Depto:* ${city}\n`;
    if (phone) msg += `*Teléfono:* ${phone}\n`;
    msg += `*Líneas Solicitadas:* ${selectedLines.join(', ')}\n`;
    if (notes) msg += `*Detalle o Referencias:* ${notes}\n\n`;
    msg += `Solicito lista de precios, disponibilidad y condiciones de despacho. ¡Gracias!`;
    return encodeURIComponent(msg);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const waUrl = `https://wa.me/${KAIROS_INFO.contact.generalWhatsApp.replace('+', '')}?text=${generateWhatsAppMessage()}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="cotizador" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Simulador Interactivo de Pedidos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cotice en Línea con Kairos Farmacéutica
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Configure su perfil y las líneas farmacéuticas de su interés. Reciba atención prioritaria y lista de precios mayoristas en minutos.
          </p>
        </div>

        {/* Interactive Form Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10 lg:p-12">
          
          <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
            
            {/* Step 1: Entity Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                1. Seleccione el Tipo de Entidad o Negocio
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {clientTypes.map((t) => {
                  const Icon = t.icon;
                  const isSelected = clientType === t.id;
                  return (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => setClientType(t.id)}
                      className={`btn-press p-4 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                        isSelected
                          ? 'bg-white border-[#1A97D1] shadow-md ring-2 ring-[#1A97D1]/20 text-[#0D7FA8]'
                          : 'bg-white/60 border-slate-200 hover:bg-white text-slate-700'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? 'bg-sky-100 text-[#1A97D1]' : 'bg-slate-100 text-slate-500'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold">{t.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Service Lines Multi-select */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                2. Seleccione las Líneas de Interés (Puede marcar varias)
              </label>
              <div className="flex flex-wrap gap-2.5">
                {availableLines.map((line) => {
                  const isSelected = selectedLines.includes(line);
                  return (
                    <button
                      type="button"
                      key={line}
                      onClick={() => toggleLine(line)}
                      className={`btn-press px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 border transition-all ${
                        isSelected
                          ? 'bg-[#1A97D1] text-white border-[#1A97D1] shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-300'}`} />
                      <span>{line}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Institution & Location Details */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                3. Datos de Contacto y Ubicación en Colombia
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Nombre o Razón Social</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Droguería La Salud / Clínica San José"
                    value={institutionName}
                    onChange={(e) => setInstitutionName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A97D1]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Persona de Contacto</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Dr. Carlos Gómez / Dra. Elena Pérez"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A97D1]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Ciudad y Departamento de Entrega</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Bucaramanga, Santander / Cúcuta / Bogotá"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A97D1]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Teléfono Móvil o WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 315 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A97D1]"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-medium text-slate-600 mb-1">Detalle de Medicamentos o Insumos Requeridos (Opcional)</label>
                <textarea
                  rows={3}
                  placeholder="Mencione principios activos, marcas, cantidades o dudas específicas que desee cotizar..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A97D1]"
                />
              </div>
            </div>

            {/* Submission Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Respuesta prioritaria en horario hábil &bull; Tratamiento seguro de datos personales</span>
              </div>

              <button
                type="submit"
                className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 shadow-lg shadow-emerald-600/25 text-base"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Generar Cotización por WhatsApp</span>
                <Send className="w-4 h-4 ml-1" />
              </button>
            </div>

            {submitted && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>¡Su solicitud se ha generado con éxito y se ha abierto en WhatsApp! Nuestro equipo comercial ya está listo para atenderle.</span>
              </div>
            )}

          </form>

        </div>

      </div>
    </section>
  );
};
